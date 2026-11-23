__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "jsonFactory",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 403
      },
      "start": 372,
      "end": 404
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 429,
      "end": 439
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RenameToIn",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 456
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
              "start": 457,
              "end": 458
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 457,
            "end": 458
          }
        ],
        "start": 456,
        "end": 459
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 469,
          "end": 470
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
              "start": 480,
              "end": 481
            },
            "typeArguments": null,
            "start": 480,
            "end": 481
          },
          "start": 474,
          "end": 481
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "typeArguments": null,
            "start": 485,
            "end": 486
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "in",
                  "cooked": "in"
                },
                "tail": false,
                "start": 495,
                "end": 500
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 517,
                "end": 520
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 537,
                "end": 539
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Uppercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 500,
                  "end": 509
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 510,
                      "end": 516
                    }
                  ],
                  "start": 509,
                  "end": 517
                },
                "start": 500,
                "end": 517
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 529
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 530,
                      "end": 536
                    }
                  ],
                  "start": 529,
                  "end": 537
                },
                "start": 520,
                "end": 537
              }
            ],
            "start": 495,
            "end": 539
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "in",
                    "cooked": "in"
                  },
                  "tail": true,
                  "start": 542,
                  "end": 546
                }
              ],
              "expressions": [],
              "start": 542,
              "end": 546
            },
            "start": 542,
            "end": 546
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 550
            },
            "typeArguments": null,
            "start": 549,
            "end": 550
          },
          "start": 485,
          "end": 550
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
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
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 556
            },
            "typeArguments": null,
            "start": 555,
            "end": 556
          },
          "start": 553,
          "end": 557
        },
        "optional": false,
        "readonly": null,
        "start": 462,
        "end": 560
      },
      "declare": false,
      "start": 441,
      "end": 561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MAXIMUM_ALLOWED_BOUNDARY",
        "optional": false,
        "typeAnnotation": null,
        "start": 694,
        "end": 718
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 80,
          "raw": "80",
          "start": 721,
          "end": 723
        },
        "start": 721,
        "end": 723
      },
      "declare": false,
      "start": 689,
      "end": 724
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 730,
        "end": 736
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 747
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 756,
                "end": 763
              },
              "start": 756,
              "end": 765
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 742,
            "end": 765
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 771,
              "end": 777
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 786,
                "end": 793
              },
              "start": 786,
              "end": 795
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 798,
              "end": 800
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 771,
            "end": 800
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Count",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 811
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 829,
                  "end": 835
                },
                "start": 829,
                "end": 837
              },
              "start": 820,
              "end": 837
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 840,
              "end": 842
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 806,
            "end": 842
          }
        ],
        "start": 736,
        "end": 845
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Count",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 853
            },
            "typeArguments": null,
            "start": 848,
            "end": 853
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "\"length\"",
              "start": 854,
              "end": 862
            },
            "start": 854,
            "end": 862
          },
          "start": 848,
          "end": 863
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MAXIMUM_ALLOWED_BOUNDARY",
            "optional": false,
            "typeAnnotation": null,
            "start": 872,
            "end": 896
          },
          "typeArguments": null,
          "start": 872,
          "end": 896
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 905
          },
          "typeArguments": null,
          "start": 899,
          "end": 905
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tuple",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 917
            },
            "typeArguments": null,
            "start": 912,
            "end": 917
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 926,
            "end": 928
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 931,
            "end": 933
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 946
              },
              "typeArguments": null,
              "start": 940,
              "end": 946
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 955,
              "end": 957
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 966
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 967,
                      "end": 972
                    },
                    "typeArguments": null,
                    "start": 967,
                    "end": 972
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 979
                    },
                    "typeArguments": null,
                    "start": 974,
                    "end": 979
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Count",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 985,
                            "end": 990
                          },
                          "typeArguments": null,
                          "start": 985,
                          "end": 990
                        },
                        "start": 982,
                        "end": 990
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 992,
                          "end": 993
                        },
                        "start": 992,
                        "end": 993
                      }
                    ],
                    "start": 981,
                    "end": 994
                  }
                ],
                "start": 966,
                "end": 995
              },
              "start": 960,
              "end": 995
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1008
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tuple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1009,
                      "end": 1014
                    },
                    "typeArguments": null,
                    "start": 1009,
                    "end": 1014
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1016,
                          "end": 1022
                        },
                        "typeArguments": null,
                        "start": 1016,
                        "end": 1022
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1029,
                                "end": 1035
                              },
                              "typeArguments": null,
                              "start": 1029,
                              "end": 1035
                            },
                            "start": 1026,
                            "end": 1035
                          },
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tuple",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1040,
                                "end": 1045
                              },
                              "typeArguments": null,
                              "start": 1040,
                              "end": 1045
                            },
                            "start": 1037,
                            "end": 1045
                          }
                        ],
                        "start": 1025,
                        "end": 1046
                      }
                    ],
                    "start": 1016,
                    "end": 1046
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Count",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1052,
                            "end": 1057
                          },
                          "typeArguments": null,
                          "start": 1052,
                          "end": 1057
                        },
                        "start": 1049,
                        "end": 1057
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1059,
                          "end": 1060
                        },
                        "start": 1059,
                        "end": 1060
                      }
                    ],
                    "start": 1048,
                    "end": 1061
                  }
                ],
                "start": 1008,
                "end": 1062
              },
              "start": 1002,
              "end": 1062
            },
            "start": 940,
            "end": 1062
          },
          "start": 912,
          "end": 1062
        },
        "start": 848,
        "end": 1062
      },
      "declare": false,
      "start": 725,
      "end": 1063
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyArrayOfOddLengthMin3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1184,
        "end": 1207
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSAnyKeyword",
            "start": 1211,
            "end": 1214
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 1219,
                "end": 1225
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1227,
                        "end": 1230
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1232,
                        "end": 1235
                      }
                    ],
                    "start": 1226,
                    "end": 1236
                  }
                ],
                "start": 1225,
                "end": 1237
              },
              "start": 1219,
              "end": 1237
            },
            "start": 1216,
            "end": 1237
          }
        ],
        "start": 1210,
        "end": 1238
      },
      "declare": false,
      "start": 1179,
      "end": 1239
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReservedOperations",
          "optional": false,
          "typeAnnotation": null,
          "start": 1253,
          "end": 1271
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "var",
                "raw": "\"var\"",
                "start": 1280,
                "end": 1285
              },
              "start": 1280,
              "end": 1285
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "missing",
                "raw": "\"missing\"",
                "start": 1292,
                "end": 1301
              },
              "start": 1292,
              "end": 1301
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "missing_some",
                "raw": "\"missing_some\"",
                "start": 1308,
                "end": 1322
              },
              "start": 1308,
              "end": 1322
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "if",
                "raw": "\"if\"",
                "start": 1329,
                "end": 1333
              },
              "start": 1329,
              "end": 1333
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "==",
                "raw": "\"==\"",
                "start": 1340,
                "end": 1344
              },
              "start": 1340,
              "end": 1344
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "===",
                "raw": "\"===\"",
                "start": 1351,
                "end": 1356
              },
              "start": 1351,
              "end": 1356
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "!=",
                "raw": "\"!=\"",
                "start": 1363,
                "end": 1367
              },
              "start": 1363,
              "end": 1367
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "!==",
                "raw": "\"!==\"",
                "start": 1374,
                "end": 1379
              },
              "start": 1374,
              "end": 1379
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "!",
                "raw": "\"!\"",
                "start": 1386,
                "end": 1389
              },
              "start": 1386,
              "end": 1389
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "!!",
                "raw": "\"!!\"",
                "start": 1396,
                "end": 1400
              },
              "start": 1396,
              "end": 1400
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "or",
                "raw": "\"or\"",
                "start": 1407,
                "end": 1411
              },
              "start": 1407,
              "end": 1411
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "and",
                "raw": "\"and\"",
                "start": 1418,
                "end": 1423
              },
              "start": 1418,
              "end": 1423
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ">",
                "raw": "\">\"",
                "start": 1430,
                "end": 1433
              },
              "start": 1430,
              "end": 1433
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": ">=",
                "raw": "\">=\"",
                "start": 1440,
                "end": 1444
              },
              "start": 1440,
              "end": 1444
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "<",
                "raw": "\"<\"",
                "start": 1451,
                "end": 1454
              },
              "start": 1451,
              "end": 1454
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "<=",
                "raw": "\"<=\"",
                "start": 1461,
                "end": 1465
              },
              "start": 1461,
              "end": 1465
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "max",
                "raw": "\"max\"",
                "start": 1472,
                "end": 1477
              },
              "start": 1472,
              "end": 1477
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "min",
                "raw": "\"min\"",
                "start": 1484,
                "end": 1489
              },
              "start": 1484,
              "end": 1489
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "+",
                "raw": "\"+\"",
                "start": 1496,
                "end": 1499
              },
              "start": 1496,
              "end": 1499
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "-",
                "raw": "\"-\"",
                "start": 1506,
                "end": 1509
              },
              "start": 1506,
              "end": 1509
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "*",
                "raw": "\"*\"",
                "start": 1516,
                "end": 1519
              },
              "start": 1516,
              "end": 1519
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "/",
                "raw": "\"/\"",
                "start": 1526,
                "end": 1529
              },
              "start": 1526,
              "end": 1529
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "%",
                "raw": "\"%\"",
                "start": 1536,
                "end": 1539
              },
              "start": 1536,
              "end": 1539
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "map",
                "raw": "\"map\"",
                "start": 1546,
                "end": 1551
              },
              "start": 1546,
              "end": 1551
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "filter",
                "raw": "\"filter\"",
                "start": 1558,
                "end": 1566
              },
              "start": 1558,
              "end": 1566
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "reduce",
                "raw": "\"reduce\"",
                "start": 1573,
                "end": 1581
              },
              "start": 1573,
              "end": 1581
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "all",
                "raw": "\"all\"",
                "start": 1588,
                "end": 1593
              },
              "start": 1588,
              "end": 1593
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "none",
                "raw": "\"none\"",
                "start": 1600,
                "end": 1606
              },
              "start": 1600,
              "end": 1606
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 1613,
                "end": 1619
              },
              "start": 1613,
              "end": 1619
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "merge",
                "raw": "\"merge\"",
                "start": 1626,
                "end": 1633
              },
              "start": 1626,
              "end": 1633
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "in",
                "raw": "\"in\"",
                "start": 1640,
                "end": 1644
              },
              "start": 1640,
              "end": 1644
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "cat",
                "raw": "\"cat\"",
                "start": 1651,
                "end": 1656
              },
              "start": 1651,
              "end": 1656
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "substr",
                "raw": "\"substr\"",
                "start": 1663,
                "end": 1671
              },
              "start": 1663,
              "end": 1671
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "log",
                "raw": "\"log\"",
                "start": 1678,
                "end": 1683
              },
              "start": 1678,
              "end": 1683
            }
          ],
          "start": 1278,
          "end": 1683
        },
        "declare": false,
        "start": 1248,
        "end": 1684
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1241,
      "end": 1684
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AdditionalOperation",
          "optional": false,
          "typeAnnotation": null,
          "start": 1944,
          "end": 1963
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1966,
                "end": 1973
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1974,
                      "end": 1980
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ReservedOperations",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1981,
                            "end": 1999
                          },
                          "typeArguments": null,
                          "start": 1981,
                          "end": 1999
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 2001,
                          "end": 2006
                        }
                      ],
                      "start": 1980,
                      "end": 2007
                    },
                    "start": 1974,
                    "end": 2007
                  }
                ],
                "start": 1973,
                "end": 2008
              },
              "start": 1966,
              "end": 2008
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2017,
                          "end": 2023
                        },
                        "start": 2015,
                        "end": 2023
                      },
                      "start": 2014,
                      "end": 2023
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2026,
                      "end": 2029
                    },
                    "start": 2024,
                    "end": 2029
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2013,
                  "end": 2029
                }
              ],
              "start": 2011,
              "end": 2031
            }
          ],
          "start": 1966,
          "end": 2031
        },
        "declare": false,
        "start": 1939,
        "end": 2032
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1932,
      "end": 2032
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllReservedOperationsInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 2051,
          "end": 2081
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2088
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2097,
                  "end": 2116
                },
                "typeArguments": null,
                "start": 2097,
                "end": 2116
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 2119,
                "end": 2124
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 2082,
              "end": 2124
            }
          ],
          "start": 2081,
          "end": 2125
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
                "name": "var",
                "optional": false,
                "typeAnnotation": null,
                "start": 2132,
                "end": 2135
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2137,
                        "end": 2147
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2148,
                              "end": 2154
                            },
                            "typeArguments": null,
                            "start": 2148,
                            "end": 2154
                          }
                        ],
                        "start": 2147,
                        "end": 2155
                      },
                      "start": 2137,
                      "end": 2155
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2159,
                            "end": 2169
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2170,
                                  "end": 2176
                                },
                                "typeArguments": null,
                                "start": 2170,
                                "end": 2176
                              }
                            ],
                            "start": 2169,
                            "end": 2177
                          },
                          "start": 2159,
                          "end": 2177
                        }
                      ],
                      "start": 2158,
                      "end": 2178
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2182,
                            "end": 2192
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2193,
                                  "end": 2199
                                },
                                "typeArguments": null,
                                "start": 2193,
                                "end": 2199
                              }
                            ],
                            "start": 2192,
                            "end": 2200
                          },
                          "start": 2182,
                          "end": 2200
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2202,
                          "end": 2205
                        }
                      ],
                      "start": 2181,
                      "end": 2206
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2210,
                            "end": 2220
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2221,
                                  "end": 2227
                                },
                                "typeArguments": null,
                                "start": 2221,
                                "end": 2227
                              }
                            ],
                            "start": 2220,
                            "end": 2228
                          },
                          "start": 2210,
                          "end": 2228
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 2230,
                          "end": 2233
                        }
                      ],
                      "start": 2209,
                      "end": 2234
                    }
                  ],
                  "start": 2137,
                  "end": 2234
                },
                "start": 2135,
                "end": 2234
              },
              "accessibility": null,
              "static": false,
              "start": 2132,
              "end": 2235
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "missing",
                "optional": false,
                "typeAnnotation": null,
                "start": 2240,
                "end": 2247
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2249,
                        "end": 2259
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2260,
                              "end": 2266
                            },
                            "typeArguments": null,
                            "start": 2260,
                            "end": 2266
                          }
                        ],
                        "start": 2259,
                        "end": 2267
                      },
                      "start": 2249,
                      "end": 2267
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2270,
                        "end": 2273
                      },
                      "start": 2270,
                      "end": 2275
                    }
                  ],
                  "start": 2249,
                  "end": 2275
                },
                "start": 2247,
                "end": 2275
              },
              "accessibility": null,
              "static": false,
              "start": 2240,
              "end": 2276
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "missing_some",
                "optional": false,
                "typeAnnotation": null,
                "start": 2281,
                "end": 2293
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2296,
                        "end": 2306
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2307,
                              "end": 2313
                            },
                            "typeArguments": null,
                            "start": 2307,
                            "end": 2313
                          }
                        ],
                        "start": 2306,
                        "end": 2314
                      },
                      "start": 2296,
                      "end": 2314
                    },
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2316,
                            "end": 2326
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2327,
                                  "end": 2333
                                },
                                "typeArguments": null,
                                "start": 2327,
                                "end": 2333
                              }
                            ],
                            "start": 2326,
                            "end": 2334
                          },
                          "start": 2316,
                          "end": 2334
                        },
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 2337,
                            "end": 2340
                          },
                          "start": 2337,
                          "end": 2342
                        }
                      ],
                      "start": 2316,
                      "end": 2342
                    }
                  ],
                  "start": 2295,
                  "end": 2343
                },
                "start": 2293,
                "end": 2343
              },
              "accessibility": null,
              "static": false,
              "start": 2281,
              "end": 2344
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "if",
                "optional": false,
                "typeAnnotation": null,
                "start": 2349,
                "end": 2351
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnyArrayOfOddLengthMin3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2353,
                    "end": 2376
                  },
                  "typeArguments": null,
                  "start": 2353,
                  "end": 2376
                },
                "start": 2351,
                "end": 2376
              },
              "accessibility": null,
              "static": false,
              "start": 2349,
              "end": 2377
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "==",
                "raw": "\"==\"",
                "start": 2382,
                "end": 2386
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2389,
                      "end": 2392
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2394,
                      "end": 2397
                    }
                  ],
                  "start": 2388,
                  "end": 2398
                },
                "start": 2386,
                "end": 2398
              },
              "accessibility": null,
              "static": false,
              "start": 2382,
              "end": 2399
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "===",
                "raw": "\"===\"",
                "start": 2404,
                "end": 2409
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2412,
                      "end": 2415
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2417,
                      "end": 2420
                    }
                  ],
                  "start": 2411,
                  "end": 2421
                },
                "start": 2409,
                "end": 2421
              },
              "accessibility": null,
              "static": false,
              "start": 2404,
              "end": 2422
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "!=",
                "raw": "\"!=\"",
                "start": 2427,
                "end": 2431
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2434,
                      "end": 2437
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2439,
                      "end": 2442
                    }
                  ],
                  "start": 2433,
                  "end": 2443
                },
                "start": 2431,
                "end": 2443
              },
              "accessibility": null,
              "static": false,
              "start": 2427,
              "end": 2444
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "!==",
                "raw": "\"!==\"",
                "start": 2449,
                "end": 2454
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2457,
                      "end": 2460
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 2462,
                      "end": 2465
                    }
                  ],
                  "start": 2456,
                  "end": 2466
                },
                "start": 2454,
                "end": 2466
              },
              "accessibility": null,
              "static": false,
              "start": 2449,
              "end": 2467
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "!",
                "raw": "\"!\"",
                "start": 2472,
                "end": 2475
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2477,
                  "end": 2480
                },
                "start": 2475,
                "end": 2480
              },
              "accessibility": null,
              "static": false,
              "start": 2472,
              "end": 2481
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "!!",
                "raw": "\"!!\"",
                "start": 2486,
                "end": 2490
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2492,
                  "end": 2495
                },
                "start": 2490,
                "end": 2495
              },
              "accessibility": null,
              "static": false,
              "start": 2486,
              "end": 2496
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "or",
                "optional": false,
                "typeAnnotation": null,
                "start": 2501,
                "end": 2503
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2505,
                    "end": 2510
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RulesLogic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2511,
                          "end": 2521
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AddOps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2522,
                                "end": 2528
                              },
                              "typeArguments": null,
                              "start": 2522,
                              "end": 2528
                            }
                          ],
                          "start": 2521,
                          "end": 2529
                        },
                        "start": 2511,
                        "end": 2529
                      }
                    ],
                    "start": 2510,
                    "end": 2530
                  },
                  "start": 2505,
                  "end": 2530
                },
                "start": 2503,
                "end": 2530
              },
              "accessibility": null,
              "static": false,
              "start": 2501,
              "end": 2531
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "and",
                "optional": false,
                "typeAnnotation": null,
                "start": 2536,
                "end": 2539
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2541,
                    "end": 2546
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RulesLogic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2547,
                          "end": 2557
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AddOps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2558,
                                "end": 2564
                              },
                              "typeArguments": null,
                              "start": 2558,
                              "end": 2564
                            }
                          ],
                          "start": 2557,
                          "end": 2565
                        },
                        "start": 2547,
                        "end": 2565
                      }
                    ],
                    "start": 2546,
                    "end": 2566
                  },
                  "start": 2541,
                  "end": 2566
                },
                "start": 2539,
                "end": 2566
              },
              "accessibility": null,
              "static": false,
              "start": 2536,
              "end": 2567
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": ">",
                "raw": "\">\"",
                "start": 2572,
                "end": 2575
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2578,
                        "end": 2588
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2589,
                              "end": 2595
                            },
                            "typeArguments": null,
                            "start": 2589,
                            "end": 2595
                          }
                        ],
                        "start": 2588,
                        "end": 2596
                      },
                      "start": 2578,
                      "end": 2596
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2598,
                        "end": 2608
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2609,
                              "end": 2615
                            },
                            "typeArguments": null,
                            "start": 2609,
                            "end": 2615
                          }
                        ],
                        "start": 2608,
                        "end": 2616
                      },
                      "start": 2598,
                      "end": 2616
                    }
                  ],
                  "start": 2577,
                  "end": 2617
                },
                "start": 2575,
                "end": 2617
              },
              "accessibility": null,
              "static": false,
              "start": 2572,
              "end": 2618
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": ">=",
                "raw": "\">=\"",
                "start": 2623,
                "end": 2627
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2630,
                        "end": 2640
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2641,
                              "end": 2647
                            },
                            "typeArguments": null,
                            "start": 2641,
                            "end": 2647
                          }
                        ],
                        "start": 2640,
                        "end": 2648
                      },
                      "start": 2630,
                      "end": 2648
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2650,
                        "end": 2660
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2661,
                              "end": 2667
                            },
                            "typeArguments": null,
                            "start": 2661,
                            "end": 2667
                          }
                        ],
                        "start": 2660,
                        "end": 2668
                      },
                      "start": 2650,
                      "end": 2668
                    }
                  ],
                  "start": 2629,
                  "end": 2669
                },
                "start": 2627,
                "end": 2669
              },
              "accessibility": null,
              "static": false,
              "start": 2623,
              "end": 2670
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "<",
                "raw": "\"<\"",
                "start": 2675,
                "end": 2678
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2681,
                            "end": 2691
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2692,
                                  "end": 2698
                                },
                                "typeArguments": null,
                                "start": 2692,
                                "end": 2698
                              }
                            ],
                            "start": 2691,
                            "end": 2699
                          },
                          "start": 2681,
                          "end": 2699
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2701,
                            "end": 2711
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2712,
                                  "end": 2718
                                },
                                "typeArguments": null,
                                "start": 2712,
                                "end": 2718
                              }
                            ],
                            "start": 2711,
                            "end": 2719
                          },
                          "start": 2701,
                          "end": 2719
                        }
                      ],
                      "start": 2680,
                      "end": 2720
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2724,
                            "end": 2734
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2735,
                                  "end": 2741
                                },
                                "typeArguments": null,
                                "start": 2735,
                                "end": 2741
                              }
                            ],
                            "start": 2734,
                            "end": 2742
                          },
                          "start": 2724,
                          "end": 2742
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2744,
                            "end": 2754
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2755,
                                  "end": 2761
                                },
                                "typeArguments": null,
                                "start": 2755,
                                "end": 2761
                              }
                            ],
                            "start": 2754,
                            "end": 2762
                          },
                          "start": 2744,
                          "end": 2762
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2764,
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
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2775,
                                  "end": 2781
                                },
                                "typeArguments": null,
                                "start": 2775,
                                "end": 2781
                              }
                            ],
                            "start": 2774,
                            "end": 2782
                          },
                          "start": 2764,
                          "end": 2782
                        }
                      ],
                      "start": 2723,
                      "end": 2783
                    }
                  ],
                  "start": 2680,
                  "end": 2783
                },
                "start": 2678,
                "end": 2783
              },
              "accessibility": null,
              "static": false,
              "start": 2675,
              "end": 2784
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "<=",
                "raw": "\"<=\"",
                "start": 2789,
                "end": 2793
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2796,
                            "end": 2806
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2807,
                                  "end": 2813
                                },
                                "typeArguments": null,
                                "start": 2807,
                                "end": 2813
                              }
                            ],
                            "start": 2806,
                            "end": 2814
                          },
                          "start": 2796,
                          "end": 2814
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2816,
                            "end": 2826
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2827,
                                  "end": 2833
                                },
                                "typeArguments": null,
                                "start": 2827,
                                "end": 2833
                              }
                            ],
                            "start": 2826,
                            "end": 2834
                          },
                          "start": 2816,
                          "end": 2834
                        }
                      ],
                      "start": 2795,
                      "end": 2835
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2839,
                            "end": 2849
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2850,
                                  "end": 2856
                                },
                                "typeArguments": null,
                                "start": 2850,
                                "end": 2856
                              }
                            ],
                            "start": 2849,
                            "end": 2857
                          },
                          "start": 2839,
                          "end": 2857
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2859,
                            "end": 2869
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2870,
                                  "end": 2876
                                },
                                "typeArguments": null,
                                "start": 2870,
                                "end": 2876
                              }
                            ],
                            "start": 2869,
                            "end": 2877
                          },
                          "start": 2859,
                          "end": 2877
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2879,
                            "end": 2889
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2890,
                                  "end": 2896
                                },
                                "typeArguments": null,
                                "start": 2890,
                                "end": 2896
                              }
                            ],
                            "start": 2889,
                            "end": 2897
                          },
                          "start": 2879,
                          "end": 2897
                        }
                      ],
                      "start": 2838,
                      "end": 2898
                    }
                  ],
                  "start": 2795,
                  "end": 2898
                },
                "start": 2793,
                "end": 2898
              },
              "accessibility": null,
              "static": false,
              "start": 2789,
              "end": 2899
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "max",
                "optional": false,
                "typeAnnotation": null,
                "start": 2904,
                "end": 2907
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2909,
                    "end": 2914
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RulesLogic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2915,
                          "end": 2925
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AddOps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2926,
                                "end": 2932
                              },
                              "typeArguments": null,
                              "start": 2926,
                              "end": 2932
                            }
                          ],
                          "start": 2925,
                          "end": 2933
                        },
                        "start": 2915,
                        "end": 2933
                      }
                    ],
                    "start": 2914,
                    "end": 2934
                  },
                  "start": 2909,
                  "end": 2934
                },
                "start": 2907,
                "end": 2934
              },
              "accessibility": null,
              "static": false,
              "start": 2904,
              "end": 2935
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null,
                "start": 2940,
                "end": 2943
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2945,
                    "end": 2950
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RulesLogic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2951,
                          "end": 2961
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AddOps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2962,
                                "end": 2968
                              },
                              "typeArguments": null,
                              "start": 2962,
                              "end": 2968
                            }
                          ],
                          "start": 2961,
                          "end": 2969
                        },
                        "start": 2951,
                        "end": 2969
                      }
                    ],
                    "start": 2950,
                    "end": 2970
                  },
                  "start": 2945,
                  "end": 2970
                },
                "start": 2943,
                "end": 2970
              },
              "accessibility": null,
              "static": false,
              "start": 2940,
              "end": 2971
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "+",
                "raw": "\"+\"",
                "start": 2976,
                "end": 2979
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2981,
                        "end": 2986
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RulesLogic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2987,
                              "end": 2997
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AddOps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2998,
                                    "end": 3004
                                  },
                                  "typeArguments": null,
                                  "start": 2998,
                                  "end": 3004
                                }
                              ],
                              "start": 2997,
                              "end": 3005
                            },
                            "start": 2987,
                            "end": 3005
                          }
                        ],
                        "start": 2986,
                        "end": 3006
                      },
                      "start": 2981,
                      "end": 3006
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3009,
                        "end": 3019
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3020,
                              "end": 3026
                            },
                            "typeArguments": null,
                            "start": 3020,
                            "end": 3026
                          }
                        ],
                        "start": 3019,
                        "end": 3027
                      },
                      "start": 3009,
                      "end": 3027
                    }
                  ],
                  "start": 2981,
                  "end": 3027
                },
                "start": 2979,
                "end": 3027
              },
              "accessibility": null,
              "static": false,
              "start": 2976,
              "end": 3028
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "-",
                "raw": "\"-\"",
                "start": 3033,
                "end": 3036
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3038,
                        "end": 3043
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RulesLogic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3044,
                              "end": 3054
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AddOps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3055,
                                    "end": 3061
                                  },
                                  "typeArguments": null,
                                  "start": 3055,
                                  "end": 3061
                                }
                              ],
                              "start": 3054,
                              "end": 3062
                            },
                            "start": 3044,
                            "end": 3062
                          }
                        ],
                        "start": 3043,
                        "end": 3063
                      },
                      "start": 3038,
                      "end": 3063
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3066,
                        "end": 3076
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3077,
                              "end": 3083
                            },
                            "typeArguments": null,
                            "start": 3077,
                            "end": 3083
                          }
                        ],
                        "start": 3076,
                        "end": 3084
                      },
                      "start": 3066,
                      "end": 3084
                    }
                  ],
                  "start": 3038,
                  "end": 3084
                },
                "start": 3036,
                "end": 3084
              },
              "accessibility": null,
              "static": false,
              "start": 3033,
              "end": 3085
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "*",
                "raw": "\"*\"",
                "start": 3090,
                "end": 3093
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3095,
                        "end": 3100
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RulesLogic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3101,
                              "end": 3111
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AddOps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3112,
                                    "end": 3118
                                  },
                                  "typeArguments": null,
                                  "start": 3112,
                                  "end": 3118
                                }
                              ],
                              "start": 3111,
                              "end": 3119
                            },
                            "start": 3101,
                            "end": 3119
                          }
                        ],
                        "start": 3100,
                        "end": 3120
                      },
                      "start": 3095,
                      "end": 3120
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3123,
                        "end": 3133
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3134,
                              "end": 3140
                            },
                            "typeArguments": null,
                            "start": 3134,
                            "end": 3140
                          }
                        ],
                        "start": 3133,
                        "end": 3141
                      },
                      "start": 3123,
                      "end": 3141
                    }
                  ],
                  "start": 3095,
                  "end": 3141
                },
                "start": 3093,
                "end": 3141
              },
              "accessibility": null,
              "static": false,
              "start": 3090,
              "end": 3142
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "/",
                "raw": "\"/\"",
                "start": 3147,
                "end": 3150
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3152,
                        "end": 3157
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RulesLogic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3158,
                              "end": 3168
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AddOps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3169,
                                    "end": 3175
                                  },
                                  "typeArguments": null,
                                  "start": 3169,
                                  "end": 3175
                                }
                              ],
                              "start": 3168,
                              "end": 3176
                            },
                            "start": 3158,
                            "end": 3176
                          }
                        ],
                        "start": 3157,
                        "end": 3177
                      },
                      "start": 3152,
                      "end": 3177
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3180,
                        "end": 3190
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3191,
                              "end": 3197
                            },
                            "typeArguments": null,
                            "start": 3191,
                            "end": 3197
                          }
                        ],
                        "start": 3190,
                        "end": 3198
                      },
                      "start": 3180,
                      "end": 3198
                    }
                  ],
                  "start": 3152,
                  "end": 3198
                },
                "start": 3150,
                "end": 3198
              },
              "accessibility": null,
              "static": false,
              "start": 3147,
              "end": 3199
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Literal",
                "value": "%",
                "raw": "\"%\"",
                "start": 3204,
                "end": 3207
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3210,
                        "end": 3220
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3221,
                              "end": 3227
                            },
                            "typeArguments": null,
                            "start": 3221,
                            "end": 3227
                          }
                        ],
                        "start": 3220,
                        "end": 3228
                      },
                      "start": 3210,
                      "end": 3228
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3230,
                        "end": 3240
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3241,
                              "end": 3247
                            },
                            "typeArguments": null,
                            "start": 3241,
                            "end": 3247
                          }
                        ],
                        "start": 3240,
                        "end": 3248
                      },
                      "start": 3230,
                      "end": 3248
                    }
                  ],
                  "start": 3209,
                  "end": 3249
                },
                "start": 3207,
                "end": 3249
              },
              "accessibility": null,
              "static": false,
              "start": 3204,
              "end": 3250
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 3255,
                "end": 3258
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3261,
                        "end": 3271
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3272,
                              "end": 3278
                            },
                            "typeArguments": null,
                            "start": 3272,
                            "end": 3278
                          }
                        ],
                        "start": 3271,
                        "end": 3279
                      },
                      "start": 3261,
                      "end": 3279
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3281,
                        "end": 3291
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3292,
                              "end": 3298
                            },
                            "typeArguments": null,
                            "start": 3292,
                            "end": 3298
                          }
                        ],
                        "start": 3291,
                        "end": 3299
                      },
                      "start": 3281,
                      "end": 3299
                    }
                  ],
                  "start": 3260,
                  "end": 3300
                },
                "start": 3258,
                "end": 3300
              },
              "accessibility": null,
              "static": false,
              "start": 3255,
              "end": 3301
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 3306,
                "end": 3312
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3315,
                        "end": 3325
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3326,
                              "end": 3332
                            },
                            "typeArguments": null,
                            "start": 3326,
                            "end": 3332
                          }
                        ],
                        "start": 3325,
                        "end": 3333
                      },
                      "start": 3315,
                      "end": 3333
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3335,
                        "end": 3345
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3346,
                              "end": 3352
                            },
                            "typeArguments": null,
                            "start": 3346,
                            "end": 3352
                          }
                        ],
                        "start": 3345,
                        "end": 3353
                      },
                      "start": 3335,
                      "end": 3353
                    }
                  ],
                  "start": 3314,
                  "end": 3354
                },
                "start": 3312,
                "end": 3354
              },
              "accessibility": null,
              "static": false,
              "start": 3306,
              "end": 3355
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 3360,
                "end": 3366
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3369,
                        "end": 3379
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3380,
                              "end": 3386
                            },
                            "typeArguments": null,
                            "start": 3380,
                            "end": 3386
                          }
                        ],
                        "start": 3379,
                        "end": 3387
                      },
                      "start": 3369,
                      "end": 3387
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3389,
                        "end": 3399
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3400,
                              "end": 3406
                            },
                            "typeArguments": null,
                            "start": 3400,
                            "end": 3406
                          }
                        ],
                        "start": 3399,
                        "end": 3407
                      },
                      "start": 3389,
                      "end": 3407
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3409,
                        "end": 3419
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3420,
                              "end": 3426
                            },
                            "typeArguments": null,
                            "start": 3420,
                            "end": 3426
                          }
                        ],
                        "start": 3419,
                        "end": 3427
                      },
                      "start": 3409,
                      "end": 3427
                    }
                  ],
                  "start": 3368,
                  "end": 3428
                },
                "start": 3366,
                "end": 3428
              },
              "accessibility": null,
              "static": false,
              "start": 3360,
              "end": 3429
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 3434,
                "end": 3437
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3440,
                            "end": 3445
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "RulesLogic",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3446,
                                  "end": 3456
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "AddOps",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3457,
                                        "end": 3463
                                      },
                                      "typeArguments": null,
                                      "start": 3457,
                                      "end": 3463
                                    }
                                  ],
                                  "start": 3456,
                                  "end": 3464
                                },
                                "start": 3446,
                                "end": 3464
                              }
                            ],
                            "start": 3445,
                            "end": 3465
                          },
                          "start": 3440,
                          "end": 3465
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3467,
                            "end": 3477
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3478,
                                  "end": 3484
                                },
                                "typeArguments": null,
                                "start": 3478,
                                "end": 3484
                              }
                            ],
                            "start": 3477,
                            "end": 3485
                          },
                          "start": 3467,
                          "end": 3485
                        }
                      ],
                      "start": 3439,
                      "end": 3486
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3490,
                            "end": 3500
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3501,
                                  "end": 3507
                                },
                                "typeArguments": null,
                                "start": 3501,
                                "end": 3507
                              }
                            ],
                            "start": 3500,
                            "end": 3508
                          },
                          "start": 3490,
                          "end": 3508
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3510,
                            "end": 3520
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3521,
                                  "end": 3527
                                },
                                "typeArguments": null,
                                "start": 3521,
                                "end": 3527
                              }
                            ],
                            "start": 3520,
                            "end": 3528
                          },
                          "start": 3510,
                          "end": 3528
                        }
                      ],
                      "start": 3489,
                      "end": 3529
                    }
                  ],
                  "start": 3439,
                  "end": 3529
                },
                "start": 3437,
                "end": 3529
              },
              "accessibility": null,
              "static": false,
              "start": 3434,
              "end": 3530
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "none",
                "optional": false,
                "typeAnnotation": null,
                "start": 3535,
                "end": 3539
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3542,
                            "end": 3547
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "RulesLogic",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3548,
                                  "end": 3558
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "AddOps",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3559,
                                        "end": 3565
                                      },
                                      "typeArguments": null,
                                      "start": 3559,
                                      "end": 3565
                                    }
                                  ],
                                  "start": 3558,
                                  "end": 3566
                                },
                                "start": 3548,
                                "end": 3566
                              }
                            ],
                            "start": 3547,
                            "end": 3567
                          },
                          "start": 3542,
                          "end": 3567
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3569,
                            "end": 3579
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3580,
                                  "end": 3586
                                },
                                "typeArguments": null,
                                "start": 3580,
                                "end": 3586
                              }
                            ],
                            "start": 3579,
                            "end": 3587
                          },
                          "start": 3569,
                          "end": 3587
                        }
                      ],
                      "start": 3541,
                      "end": 3588
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3592,
                            "end": 3602
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3603,
                                  "end": 3609
                                },
                                "typeArguments": null,
                                "start": 3603,
                                "end": 3609
                              }
                            ],
                            "start": 3602,
                            "end": 3610
                          },
                          "start": 3592,
                          "end": 3610
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3612,
                            "end": 3622
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3623,
                                  "end": 3629
                                },
                                "typeArguments": null,
                                "start": 3623,
                                "end": 3629
                              }
                            ],
                            "start": 3622,
                            "end": 3630
                          },
                          "start": 3612,
                          "end": 3630
                        }
                      ],
                      "start": 3591,
                      "end": 3631
                    }
                  ],
                  "start": 3541,
                  "end": 3631
                },
                "start": 3539,
                "end": 3631
              },
              "accessibility": null,
              "static": false,
              "start": 3535,
              "end": 3632
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 3637,
                "end": 3641
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3644,
                            "end": 3649
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "RulesLogic",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3650,
                                  "end": 3660
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "AddOps",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3661,
                                        "end": 3667
                                      },
                                      "typeArguments": null,
                                      "start": 3661,
                                      "end": 3667
                                    }
                                  ],
                                  "start": 3660,
                                  "end": 3668
                                },
                                "start": 3650,
                                "end": 3668
                              }
                            ],
                            "start": 3649,
                            "end": 3669
                          },
                          "start": 3644,
                          "end": 3669
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3671,
                            "end": 3681
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3682,
                                  "end": 3688
                                },
                                "typeArguments": null,
                                "start": 3682,
                                "end": 3688
                              }
                            ],
                            "start": 3681,
                            "end": 3689
                          },
                          "start": 3671,
                          "end": 3689
                        }
                      ],
                      "start": 3643,
                      "end": 3690
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3694,
                            "end": 3704
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3705,
                                  "end": 3711
                                },
                                "typeArguments": null,
                                "start": 3705,
                                "end": 3711
                              }
                            ],
                            "start": 3704,
                            "end": 3712
                          },
                          "start": 3694,
                          "end": 3712
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3714,
                            "end": 3724
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3725,
                                  "end": 3731
                                },
                                "typeArguments": null,
                                "start": 3725,
                                "end": 3731
                              }
                            ],
                            "start": 3724,
                            "end": 3732
                          },
                          "start": 3714,
                          "end": 3732
                        }
                      ],
                      "start": 3693,
                      "end": 3733
                    }
                  ],
                  "start": 3643,
                  "end": 3733
                },
                "start": 3641,
                "end": 3733
              },
              "accessibility": null,
              "static": false,
              "start": 3637,
              "end": 3734
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "merge",
                "optional": false,
                "typeAnnotation": null,
                "start": 3739,
                "end": 3744
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3746,
                    "end": 3751
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3752,
                              "end": 3757
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RulesLogic",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3758,
                                    "end": 3768
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "AddOps",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3769,
                                          "end": 3775
                                        },
                                        "typeArguments": null,
                                        "start": 3769,
                                        "end": 3775
                                      }
                                    ],
                                    "start": 3768,
                                    "end": 3776
                                  },
                                  "start": 3758,
                                  "end": 3776
                                }
                              ],
                              "start": 3757,
                              "end": 3777
                            },
                            "start": 3752,
                            "end": 3777
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RulesLogic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3780,
                              "end": 3790
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AddOps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3791,
                                    "end": 3797
                                  },
                                  "typeArguments": null,
                                  "start": 3791,
                                  "end": 3797
                                }
                              ],
                              "start": 3790,
                              "end": 3798
                            },
                            "start": 3780,
                            "end": 3798
                          }
                        ],
                        "start": 3752,
                        "end": 3798
                      }
                    ],
                    "start": 3751,
                    "end": 3799
                  },
                  "start": 3746,
                  "end": 3799
                },
                "start": 3744,
                "end": 3799
              },
              "accessibility": null,
              "static": false,
              "start": 3739,
              "end": 3800
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 3805,
                "end": 3812
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3815,
                        "end": 3825
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3826,
                              "end": 3832
                            },
                            "typeArguments": null,
                            "start": 3826,
                            "end": 3832
                          }
                        ],
                        "start": 3825,
                        "end": 3833
                      },
                      "start": 3815,
                      "end": 3833
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3835,
                        "end": 3840
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "RulesLogic",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3841,
                              "end": 3851
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "AddOps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3852,
                                    "end": 3858
                                  },
                                  "typeArguments": null,
                                  "start": 3852,
                                  "end": 3858
                                }
                              ],
                              "start": 3851,
                              "end": 3859
                            },
                            "start": 3841,
                            "end": 3859
                          }
                        ],
                        "start": 3840,
                        "end": 3860
                      },
                      "start": 3835,
                      "end": 3860
                    }
                  ],
                  "start": 3814,
                  "end": 3861
                },
                "start": 3812,
                "end": 3861
              },
              "accessibility": null,
              "static": false,
              "start": 3805,
              "end": 3862
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "inString",
                "optional": false,
                "typeAnnotation": null,
                "start": 3867,
                "end": 3875
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3878,
                        "end": 3888
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3889,
                              "end": 3895
                            },
                            "typeArguments": null,
                            "start": 3889,
                            "end": 3895
                          }
                        ],
                        "start": 3888,
                        "end": 3896
                      },
                      "start": 3878,
                      "end": 3896
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RulesLogic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3898,
                        "end": 3908
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3909,
                              "end": 3915
                            },
                            "typeArguments": null,
                            "start": 3909,
                            "end": 3915
                          }
                        ],
                        "start": 3908,
                        "end": 3916
                      },
                      "start": 3898,
                      "end": 3916
                    }
                  ],
                  "start": 3877,
                  "end": 3917
                },
                "start": 3875,
                "end": 3917
              },
              "accessibility": null,
              "static": false,
              "start": 3867,
              "end": 3918
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cat",
                "optional": false,
                "typeAnnotation": null,
                "start": 3923,
                "end": 3926
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3928,
                    "end": 3933
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RulesLogic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3934,
                          "end": 3944
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AddOps",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3945,
                                "end": 3951
                              },
                              "typeArguments": null,
                              "start": 3945,
                              "end": 3951
                            }
                          ],
                          "start": 3944,
                          "end": 3952
                        },
                        "start": 3934,
                        "end": 3952
                      }
                    ],
                    "start": 3933,
                    "end": 3953
                  },
                  "start": 3928,
                  "end": 3953
                },
                "start": 3926,
                "end": 3953
              },
              "accessibility": null,
              "static": false,
              "start": 3923,
              "end": 3954
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "substr",
                "optional": false,
                "typeAnnotation": null,
                "start": 3959,
                "end": 3965
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3968,
                            "end": 3978
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3979,
                                  "end": 3985
                                },
                                "typeArguments": null,
                                "start": 3979,
                                "end": 3985
                              }
                            ],
                            "start": 3978,
                            "end": 3986
                          },
                          "start": 3968,
                          "end": 3986
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3988,
                            "end": 3998
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3999,
                                  "end": 4005
                                },
                                "typeArguments": null,
                                "start": 3999,
                                "end": 4005
                              }
                            ],
                            "start": 3998,
                            "end": 4006
                          },
                          "start": 3988,
                          "end": 4006
                        }
                      ],
                      "start": 3967,
                      "end": 4007
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4011,
                            "end": 4021
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4022,
                                  "end": 4028
                                },
                                "typeArguments": null,
                                "start": 4022,
                                "end": 4028
                              }
                            ],
                            "start": 4021,
                            "end": 4029
                          },
                          "start": 4011,
                          "end": 4029
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4031,
                            "end": 4041
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4042,
                                  "end": 4048
                                },
                                "typeArguments": null,
                                "start": 4042,
                                "end": 4048
                              }
                            ],
                            "start": 4041,
                            "end": 4049
                          },
                          "start": 4031,
                          "end": 4049
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RulesLogic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4051,
                            "end": 4061
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AddOps",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4062,
                                  "end": 4068
                                },
                                "typeArguments": null,
                                "start": 4062,
                                "end": 4068
                              }
                            ],
                            "start": 4061,
                            "end": 4069
                          },
                          "start": 4051,
                          "end": 4069
                        }
                      ],
                      "start": 4010,
                      "end": 4070
                    }
                  ],
                  "start": 3967,
                  "end": 4070
                },
                "start": 3965,
                "end": 4070
              },
              "accessibility": null,
              "static": false,
              "start": 3959,
              "end": 4071
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "log",
                "optional": false,
                "typeAnnotation": null,
                "start": 4076,
                "end": 4079
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RulesLogic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4081,
                    "end": 4091
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AddOps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4092,
                          "end": 4098
                        },
                        "typeArguments": null,
                        "start": 4092,
                        "end": 4098
                      }
                    ],
                    "start": 4091,
                    "end": 4099
                  },
                  "start": 4081,
                  "end": 4099
                },
                "start": 4079,
                "end": 4099
              },
              "accessibility": null,
              "static": false,
              "start": 4076,
              "end": 4100
            }
          ],
          "start": 2126,
          "end": 4102
        },
        "declare": false,
        "start": 2041,
        "end": 4102
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2034,
      "end": 4102
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 4116,
          "end": 4128
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 4129,
                "end": 4135
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4144,
                  "end": 4163
                },
                "typeArguments": null,
                "start": 4144,
                "end": 4163
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 4166,
                "end": 4171
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4129,
              "end": 4171
            }
          ],
          "start": 4128,
          "end": 4172
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4175,
            "end": 4179
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4185,
                  "end": 4215
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4216,
                        "end": 4222
                      },
                      "typeArguments": null,
                      "start": 4216,
                      "end": 4222
                    }
                  ],
                  "start": 4215,
                  "end": 4223
                },
                "start": 4185,
                "end": 4223
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "var",
                  "raw": "\"var\"",
                  "start": 4229,
                  "end": 4234
                },
                "start": 4229,
                "end": 4234
              }
            ],
            "start": 4179,
            "end": 4236
          },
          "start": 4175,
          "end": 4236
        },
        "declare": false,
        "start": 4111,
        "end": 4237
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4104,
      "end": 4237
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicMissing",
          "optional": false,
          "typeAnnotation": null,
          "start": 4250,
          "end": 4266
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 4267,
                "end": 4273
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4282,
                  "end": 4301
                },
                "typeArguments": null,
                "start": 4282,
                "end": 4301
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 4304,
                "end": 4309
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4267,
              "end": 4309
            }
          ],
          "start": 4266,
          "end": 4310
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4313,
            "end": 4317
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4323,
                  "end": 4353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4354,
                        "end": 4360
                      },
                      "typeArguments": null,
                      "start": 4354,
                      "end": 4360
                    }
                  ],
                  "start": 4353,
                  "end": 4361
                },
                "start": 4323,
                "end": 4361
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "missing",
                  "raw": "\"missing\"",
                  "start": 4367,
                  "end": 4376
                },
                "start": 4367,
                "end": 4376
              }
            ],
            "start": 4317,
            "end": 4378
          },
          "start": 4313,
          "end": 4378
        },
        "declare": false,
        "start": 4245,
        "end": 4379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4238,
      "end": 4379
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicMissingSome",
          "optional": false,
          "typeAnnotation": null,
          "start": 4392,
          "end": 4412
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 4413,
                "end": 4419
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4428,
                  "end": 4447
                },
                "typeArguments": null,
                "start": 4428,
                "end": 4447
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 4450,
                "end": 4455
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 4413,
              "end": 4455
            }
          ],
          "start": 4412,
          "end": 4456
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4459,
            "end": 4463
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4469,
                  "end": 4499
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4500,
                        "end": 4506
                      },
                      "typeArguments": null,
                      "start": 4500,
                      "end": 4506
                    }
                  ],
                  "start": 4499,
                  "end": 4507
                },
                "start": 4469,
                "end": 4507
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "missing_some",
                  "raw": "\"missing_some\"",
                  "start": 4513,
                  "end": 4527
                },
                "start": 4513,
                "end": 4527
              }
            ],
            "start": 4463,
            "end": 4529
          },
          "start": 4459,
          "end": 4529
        },
        "declare": false,
        "start": 4387,
        "end": 4530
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4380,
      "end": 4530
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicIf",
          "optional": false,
          "typeAnnotation": null,
          "start": 4543,
          "end": 4554
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4557,
            "end": 4561
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4562,
                  "end": 4592
                },
                "typeArguments": null,
                "start": 4562,
                "end": 4592
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "if",
                  "raw": "\"if\"",
                  "start": 4594,
                  "end": 4598
                },
                "start": 4594,
                "end": 4598
              }
            ],
            "start": 4561,
            "end": 4599
          },
          "start": 4557,
          "end": 4599
        },
        "declare": false,
        "start": 4538,
        "end": 4600
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4531,
      "end": 4600
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 4613,
          "end": 4627
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4630,
            "end": 4634
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4635,
                  "end": 4665
                },
                "typeArguments": null,
                "start": 4635,
                "end": 4665
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "==",
                  "raw": "\"==\"",
                  "start": 4667,
                  "end": 4671
                },
                "start": 4667,
                "end": 4671
              }
            ],
            "start": 4634,
            "end": 4672
          },
          "start": 4630,
          "end": 4672
        },
        "declare": false,
        "start": 4608,
        "end": 4673
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4601,
      "end": 4673
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicStrictEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 4686,
          "end": 4706
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4709,
            "end": 4713
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4714,
                  "end": 4744
                },
                "typeArguments": null,
                "start": 4714,
                "end": 4744
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "===",
                  "raw": "\"===\"",
                  "start": 4746,
                  "end": 4751
                },
                "start": 4746,
                "end": 4751
              }
            ],
            "start": 4713,
            "end": 4752
          },
          "start": 4709,
          "end": 4752
        },
        "declare": false,
        "start": 4681,
        "end": 4753
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4674,
      "end": 4753
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicNotEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 4766,
          "end": 4783
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4786,
            "end": 4790
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4791,
                  "end": 4821
                },
                "typeArguments": null,
                "start": 4791,
                "end": 4821
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "!=",
                  "raw": "\"!=\"",
                  "start": 4823,
                  "end": 4827
                },
                "start": 4823,
                "end": 4827
              }
            ],
            "start": 4790,
            "end": 4828
          },
          "start": 4786,
          "end": 4828
        },
        "declare": false,
        "start": 4761,
        "end": 4829
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4754,
      "end": 4829
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicStrictNotEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 4842,
          "end": 4865
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4868,
            "end": 4872
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4873,
                  "end": 4903
                },
                "typeArguments": null,
                "start": 4873,
                "end": 4903
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "!==",
                  "raw": "\"!==\"",
                  "start": 4905,
                  "end": 4910
                },
                "start": 4905,
                "end": 4910
              }
            ],
            "start": 4872,
            "end": 4911
          },
          "start": 4868,
          "end": 4911
        },
        "declare": false,
        "start": 4837,
        "end": 4912
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4830,
      "end": 4912
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicNegation",
          "optional": false,
          "typeAnnotation": null,
          "start": 4925,
          "end": 4942
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 4945,
            "end": 4949
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4950,
                  "end": 4980
                },
                "typeArguments": null,
                "start": 4950,
                "end": 4980
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "!",
                  "raw": "\"!\"",
                  "start": 4982,
                  "end": 4985
                },
                "start": 4982,
                "end": 4985
              }
            ],
            "start": 4949,
            "end": 4986
          },
          "start": 4945,
          "end": 4986
        },
        "declare": false,
        "start": 4920,
        "end": 4987
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4913,
      "end": 4987
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicDoubleNegation",
          "optional": false,
          "typeAnnotation": null,
          "start": 5000,
          "end": 5023
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5026,
            "end": 5030
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5031,
                  "end": 5061
                },
                "typeArguments": null,
                "start": 5031,
                "end": 5061
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "!!",
                  "raw": "\"!!\"",
                  "start": 5063,
                  "end": 5067
                },
                "start": 5063,
                "end": 5067
              }
            ],
            "start": 5030,
            "end": 5068
          },
          "start": 5026,
          "end": 5068
        },
        "declare": false,
        "start": 4995,
        "end": 5069
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4988,
      "end": 5069
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicOr",
          "optional": false,
          "typeAnnotation": null,
          "start": 5082,
          "end": 5093
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5094,
                "end": 5100
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5109,
                  "end": 5128
                },
                "typeArguments": null,
                "start": 5109,
                "end": 5128
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 5131,
                "end": 5136
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5094,
              "end": 5136
            }
          ],
          "start": 5093,
          "end": 5137
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5140,
            "end": 5144
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5150,
                  "end": 5180
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5181,
                        "end": 5187
                      },
                      "typeArguments": null,
                      "start": 5181,
                      "end": 5187
                    }
                  ],
                  "start": 5180,
                  "end": 5188
                },
                "start": 5150,
                "end": 5188
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "or",
                  "raw": "\"or\"",
                  "start": 5194,
                  "end": 5198
                },
                "start": 5194,
                "end": 5198
              }
            ],
            "start": 5144,
            "end": 5200
          },
          "start": 5140,
          "end": 5200
        },
        "declare": false,
        "start": 5077,
        "end": 5201
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5070,
      "end": 5201
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicAnd",
          "optional": false,
          "typeAnnotation": null,
          "start": 5214,
          "end": 5226
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5227,
                "end": 5233
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5242,
                  "end": 5261
                },
                "typeArguments": null,
                "start": 5242,
                "end": 5261
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 5264,
                "end": 5269
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5227,
              "end": 5269
            }
          ],
          "start": 5226,
          "end": 5270
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5273,
            "end": 5277
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5283,
                  "end": 5313
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5314,
                        "end": 5320
                      },
                      "typeArguments": null,
                      "start": 5314,
                      "end": 5320
                    }
                  ],
                  "start": 5313,
                  "end": 5321
                },
                "start": 5283,
                "end": 5321
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "and",
                  "raw": "\"and\"",
                  "start": 5327,
                  "end": 5332
                },
                "start": 5327,
                "end": 5332
              }
            ],
            "start": 5277,
            "end": 5334
          },
          "start": 5273,
          "end": 5334
        },
        "declare": false,
        "start": 5209,
        "end": 5335
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5202,
      "end": 5335
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicGreaterThan",
          "optional": false,
          "typeAnnotation": null,
          "start": 5348,
          "end": 5368
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5369,
                "end": 5375
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5384,
                  "end": 5403
                },
                "typeArguments": null,
                "start": 5384,
                "end": 5403
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 5406,
                "end": 5411
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5369,
              "end": 5411
            }
          ],
          "start": 5368,
          "end": 5412
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5415,
            "end": 5419
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5425,
                  "end": 5455
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5456,
                        "end": 5462
                      },
                      "typeArguments": null,
                      "start": 5456,
                      "end": 5462
                    }
                  ],
                  "start": 5455,
                  "end": 5463
                },
                "start": 5425,
                "end": 5463
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": ">",
                  "raw": "\">\"",
                  "start": 5469,
                  "end": 5472
                },
                "start": 5469,
                "end": 5472
              }
            ],
            "start": 5419,
            "end": 5474
          },
          "start": 5415,
          "end": 5474
        },
        "declare": false,
        "start": 5343,
        "end": 5475
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5336,
      "end": 5475
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicGreaterThanOrEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 5488,
          "end": 5515
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5516,
                "end": 5522
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5531,
                  "end": 5550
                },
                "typeArguments": null,
                "start": 5531,
                "end": 5550
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 5553,
                "end": 5558
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5516,
              "end": 5558
            }
          ],
          "start": 5515,
          "end": 5559
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5562,
            "end": 5566
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5572,
                  "end": 5602
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5603,
                        "end": 5609
                      },
                      "typeArguments": null,
                      "start": 5603,
                      "end": 5609
                    }
                  ],
                  "start": 5602,
                  "end": 5610
                },
                "start": 5572,
                "end": 5610
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": ">=",
                  "raw": "\">=\"",
                  "start": 5616,
                  "end": 5620
                },
                "start": 5616,
                "end": 5620
              }
            ],
            "start": 5566,
            "end": 5622
          },
          "start": 5562,
          "end": 5622
        },
        "declare": false,
        "start": 5483,
        "end": 5623
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5476,
      "end": 5623
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicLessThan",
          "optional": false,
          "typeAnnotation": null,
          "start": 5636,
          "end": 5653
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5654,
                "end": 5660
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5669,
                  "end": 5688
                },
                "typeArguments": null,
                "start": 5669,
                "end": 5688
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 5691,
                "end": 5696
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5654,
              "end": 5696
            }
          ],
          "start": 5653,
          "end": 5697
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5700,
            "end": 5704
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5710,
                  "end": 5740
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5741,
                        "end": 5747
                      },
                      "typeArguments": null,
                      "start": 5741,
                      "end": 5747
                    }
                  ],
                  "start": 5740,
                  "end": 5748
                },
                "start": 5710,
                "end": 5748
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "<",
                  "raw": "\"<\"",
                  "start": 5754,
                  "end": 5757
                },
                "start": 5754,
                "end": 5757
              }
            ],
            "start": 5704,
            "end": 5759
          },
          "start": 5700,
          "end": 5759
        },
        "declare": false,
        "start": 5631,
        "end": 5760
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5624,
      "end": 5760
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicLessThanOrEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 5773,
          "end": 5797
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5798,
                "end": 5804
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5813,
                  "end": 5832
                },
                "typeArguments": null,
                "start": 5813,
                "end": 5832
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 5835,
                "end": 5840
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5798,
              "end": 5840
            }
          ],
          "start": 5797,
          "end": 5841
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5844,
            "end": 5848
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5854,
                  "end": 5884
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5885,
                        "end": 5891
                      },
                      "typeArguments": null,
                      "start": 5885,
                      "end": 5891
                    }
                  ],
                  "start": 5884,
                  "end": 5892
                },
                "start": 5854,
                "end": 5892
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "<=",
                  "raw": "\"<=\"",
                  "start": 5898,
                  "end": 5902
                },
                "start": 5898,
                "end": 5902
              }
            ],
            "start": 5848,
            "end": 5904
          },
          "start": 5844,
          "end": 5904
        },
        "declare": false,
        "start": 5768,
        "end": 5905
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5761,
      "end": 5905
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicMax",
          "optional": false,
          "typeAnnotation": null,
          "start": 5918,
          "end": 5930
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5931,
                "end": 5937
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5946,
                  "end": 5965
                },
                "typeArguments": null,
                "start": 5946,
                "end": 5965
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 5968,
                "end": 5973
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 5931,
              "end": 5973
            }
          ],
          "start": 5930,
          "end": 5974
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 5977,
            "end": 5981
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5987,
                  "end": 6017
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6018,
                        "end": 6024
                      },
                      "typeArguments": null,
                      "start": 6018,
                      "end": 6024
                    }
                  ],
                  "start": 6017,
                  "end": 6025
                },
                "start": 5987,
                "end": 6025
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "max",
                  "raw": "\"max\"",
                  "start": 6031,
                  "end": 6036
                },
                "start": 6031,
                "end": 6036
              }
            ],
            "start": 5981,
            "end": 6038
          },
          "start": 5977,
          "end": 6038
        },
        "declare": false,
        "start": 5913,
        "end": 6039
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 5906,
      "end": 6039
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicMin",
          "optional": false,
          "typeAnnotation": null,
          "start": 6052,
          "end": 6064
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6065,
                "end": 6071
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6080,
                  "end": 6099
                },
                "typeArguments": null,
                "start": 6080,
                "end": 6099
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 6102,
                "end": 6107
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6065,
              "end": 6107
            }
          ],
          "start": 6064,
          "end": 6108
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 6111,
            "end": 6115
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6121,
                  "end": 6151
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6152,
                        "end": 6158
                      },
                      "typeArguments": null,
                      "start": 6152,
                      "end": 6158
                    }
                  ],
                  "start": 6151,
                  "end": 6159
                },
                "start": 6121,
                "end": 6159
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "min",
                  "raw": "\"min\"",
                  "start": 6165,
                  "end": 6170
                },
                "start": 6165,
                "end": 6170
              }
            ],
            "start": 6115,
            "end": 6172
          },
          "start": 6111,
          "end": 6172
        },
        "declare": false,
        "start": 6047,
        "end": 6173
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6040,
      "end": 6173
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicSum",
          "optional": false,
          "typeAnnotation": null,
          "start": 6186,
          "end": 6198
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6199,
                "end": 6205
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6214,
                  "end": 6233
                },
                "typeArguments": null,
                "start": 6214,
                "end": 6233
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 6236,
                "end": 6241
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6199,
              "end": 6241
            }
          ],
          "start": 6198,
          "end": 6242
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 6245,
            "end": 6249
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6255,
                  "end": 6285
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6286,
                        "end": 6292
                      },
                      "typeArguments": null,
                      "start": 6286,
                      "end": 6292
                    }
                  ],
                  "start": 6285,
                  "end": 6293
                },
                "start": 6255,
                "end": 6293
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "+",
                  "raw": "\"+\"",
                  "start": 6299,
                  "end": 6302
                },
                "start": 6299,
                "end": 6302
              }
            ],
            "start": 6249,
            "end": 6304
          },
          "start": 6245,
          "end": 6304
        },
        "declare": false,
        "start": 6181,
        "end": 6305
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6174,
      "end": 6305
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicDifference",
          "optional": false,
          "typeAnnotation": null,
          "start": 6318,
          "end": 6337
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6338,
                "end": 6344
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6353,
                  "end": 6372
                },
                "typeArguments": null,
                "start": 6353,
                "end": 6372
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 6375,
                "end": 6380
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6338,
              "end": 6380
            }
          ],
          "start": 6337,
          "end": 6381
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 6384,
            "end": 6388
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6394,
                  "end": 6424
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6425,
                        "end": 6431
                      },
                      "typeArguments": null,
                      "start": 6425,
                      "end": 6431
                    }
                  ],
                  "start": 6424,
                  "end": 6432
                },
                "start": 6394,
                "end": 6432
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "-",
                  "raw": "\"-\"",
                  "start": 6438,
                  "end": 6441
                },
                "start": 6438,
                "end": 6441
              }
            ],
            "start": 6388,
            "end": 6443
          },
          "start": 6384,
          "end": 6443
        },
        "declare": false,
        "start": 6313,
        "end": 6444
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6306,
      "end": 6444
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicProduct",
          "optional": false,
          "typeAnnotation": null,
          "start": 6457,
          "end": 6473
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6474,
                "end": 6480
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6489,
                  "end": 6508
                },
                "typeArguments": null,
                "start": 6489,
                "end": 6508
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 6511,
                "end": 6516
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6474,
              "end": 6516
            }
          ],
          "start": 6473,
          "end": 6517
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 6520,
            "end": 6524
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6530,
                  "end": 6560
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6561,
                        "end": 6567
                      },
                      "typeArguments": null,
                      "start": 6561,
                      "end": 6567
                    }
                  ],
                  "start": 6560,
                  "end": 6568
                },
                "start": 6530,
                "end": 6568
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "*",
                  "raw": "\"*\"",
                  "start": 6574,
                  "end": 6577
                },
                "start": 6574,
                "end": 6577
              }
            ],
            "start": 6524,
            "end": 6579
          },
          "start": 6520,
          "end": 6579
        },
        "declare": false,
        "start": 6452,
        "end": 6580
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6445,
      "end": 6580
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicQuotient",
          "optional": false,
          "typeAnnotation": null,
          "start": 6593,
          "end": 6610
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6611,
                "end": 6617
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6626,
                  "end": 6645
                },
                "typeArguments": null,
                "start": 6626,
                "end": 6645
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 6648,
                "end": 6653
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6611,
              "end": 6653
            }
          ],
          "start": 6610,
          "end": 6654
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 6657,
            "end": 6661
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6667,
                  "end": 6697
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6698,
                        "end": 6704
                      },
                      "typeArguments": null,
                      "start": 6698,
                      "end": 6704
                    }
                  ],
                  "start": 6697,
                  "end": 6705
                },
                "start": 6667,
                "end": 6705
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "/",
                  "raw": "\"/\"",
                  "start": 6711,
                  "end": 6714
                },
                "start": 6711,
                "end": 6714
              }
            ],
            "start": 6661,
            "end": 6716
          },
          "start": 6657,
          "end": 6716
        },
        "declare": false,
        "start": 6588,
        "end": 6717
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6581,
      "end": 6717
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicRemainder",
          "optional": false,
          "typeAnnotation": null,
          "start": 6730,
          "end": 6748
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6749,
                "end": 6755
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6764,
                  "end": 6783
                },
                "typeArguments": null,
                "start": 6764,
                "end": 6783
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 6786,
                "end": 6791
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6749,
              "end": 6791
            }
          ],
          "start": 6748,
          "end": 6792
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 6795,
            "end": 6799
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6805,
                  "end": 6835
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6836,
                        "end": 6842
                      },
                      "typeArguments": null,
                      "start": 6836,
                      "end": 6842
                    }
                  ],
                  "start": 6835,
                  "end": 6843
                },
                "start": 6805,
                "end": 6843
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "%",
                  "raw": "\"%\"",
                  "start": 6849,
                  "end": 6852
                },
                "start": 6849,
                "end": 6852
              }
            ],
            "start": 6799,
            "end": 6854
          },
          "start": 6795,
          "end": 6854
        },
        "declare": false,
        "start": 6725,
        "end": 6855
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6718,
      "end": 6855
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 6868,
          "end": 6880
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6881,
                "end": 6887
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6896,
                  "end": 6915
                },
                "typeArguments": null,
                "start": 6896,
                "end": 6915
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 6918,
                "end": 6923
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 6881,
              "end": 6923
            }
          ],
          "start": 6880,
          "end": 6924
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 6927,
            "end": 6931
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6937,
                  "end": 6967
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6968,
                        "end": 6974
                      },
                      "typeArguments": null,
                      "start": 6968,
                      "end": 6974
                    }
                  ],
                  "start": 6967,
                  "end": 6975
                },
                "start": 6937,
                "end": 6975
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "map",
                  "raw": "\"map\"",
                  "start": 6981,
                  "end": 6986
                },
                "start": 6981,
                "end": 6986
              }
            ],
            "start": 6931,
            "end": 6988
          },
          "start": 6927,
          "end": 6988
        },
        "declare": false,
        "start": 6863,
        "end": 6989
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6856,
      "end": 6989
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicFilter",
          "optional": false,
          "typeAnnotation": null,
          "start": 7002,
          "end": 7017
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7018,
                "end": 7024
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7033,
                  "end": 7052
                },
                "typeArguments": null,
                "start": 7033,
                "end": 7052
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 7055,
                "end": 7060
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7018,
              "end": 7060
            }
          ],
          "start": 7017,
          "end": 7061
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 7064,
            "end": 7068
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7074,
                  "end": 7104
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7105,
                        "end": 7111
                      },
                      "typeArguments": null,
                      "start": 7105,
                      "end": 7111
                    }
                  ],
                  "start": 7104,
                  "end": 7112
                },
                "start": 7074,
                "end": 7112
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "filter",
                  "raw": "\"filter\"",
                  "start": 7118,
                  "end": 7126
                },
                "start": 7118,
                "end": 7126
              }
            ],
            "start": 7068,
            "end": 7128
          },
          "start": 7064,
          "end": 7128
        },
        "declare": false,
        "start": 6997,
        "end": 7129
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6990,
      "end": 7129
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicReduce",
          "optional": false,
          "typeAnnotation": null,
          "start": 7142,
          "end": 7157
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7158,
                "end": 7164
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7173,
                  "end": 7192
                },
                "typeArguments": null,
                "start": 7173,
                "end": 7192
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 7195,
                "end": 7200
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7158,
              "end": 7200
            }
          ],
          "start": 7157,
          "end": 7201
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 7204,
            "end": 7208
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7214,
                  "end": 7244
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7245,
                        "end": 7251
                      },
                      "typeArguments": null,
                      "start": 7245,
                      "end": 7251
                    }
                  ],
                  "start": 7244,
                  "end": 7252
                },
                "start": 7214,
                "end": 7252
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "reduce",
                  "raw": "\"reduce\"",
                  "start": 7258,
                  "end": 7266
                },
                "start": 7258,
                "end": 7266
              }
            ],
            "start": 7208,
            "end": 7268
          },
          "start": 7204,
          "end": 7268
        },
        "declare": false,
        "start": 7137,
        "end": 7269
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7130,
      "end": 7269
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicAll",
          "optional": false,
          "typeAnnotation": null,
          "start": 7282,
          "end": 7294
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7295,
                "end": 7301
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7310,
                  "end": 7329
                },
                "typeArguments": null,
                "start": 7310,
                "end": 7329
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 7332,
                "end": 7337
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7295,
              "end": 7337
            }
          ],
          "start": 7294,
          "end": 7338
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 7341,
            "end": 7345
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7351,
                  "end": 7381
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7382,
                        "end": 7388
                      },
                      "typeArguments": null,
                      "start": 7382,
                      "end": 7388
                    }
                  ],
                  "start": 7381,
                  "end": 7389
                },
                "start": 7351,
                "end": 7389
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "all",
                  "raw": "\"all\"",
                  "start": 7395,
                  "end": 7400
                },
                "start": 7395,
                "end": 7400
              }
            ],
            "start": 7345,
            "end": 7402
          },
          "start": 7341,
          "end": 7402
        },
        "declare": false,
        "start": 7277,
        "end": 7403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7270,
      "end": 7403
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicNone",
          "optional": false,
          "typeAnnotation": null,
          "start": 7416,
          "end": 7429
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7430,
                "end": 7436
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7445,
                  "end": 7464
                },
                "typeArguments": null,
                "start": 7445,
                "end": 7464
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 7467,
                "end": 7472
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7430,
              "end": 7472
            }
          ],
          "start": 7429,
          "end": 7473
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 7476,
            "end": 7480
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7486,
                  "end": 7516
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7517,
                        "end": 7523
                      },
                      "typeArguments": null,
                      "start": 7517,
                      "end": 7523
                    }
                  ],
                  "start": 7516,
                  "end": 7524
                },
                "start": 7486,
                "end": 7524
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "none",
                  "raw": "\"none\"",
                  "start": 7530,
                  "end": 7536
                },
                "start": 7530,
                "end": 7536
              }
            ],
            "start": 7480,
            "end": 7538
          },
          "start": 7476,
          "end": 7538
        },
        "declare": false,
        "start": 7411,
        "end": 7539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7404,
      "end": 7539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicSome",
          "optional": false,
          "typeAnnotation": null,
          "start": 7552,
          "end": 7565
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7566,
                "end": 7572
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7581,
                  "end": 7600
                },
                "typeArguments": null,
                "start": 7581,
                "end": 7600
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 7603,
                "end": 7608
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7566,
              "end": 7608
            }
          ],
          "start": 7565,
          "end": 7609
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 7612,
            "end": 7616
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7622,
                  "end": 7652
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7653,
                        "end": 7659
                      },
                      "typeArguments": null,
                      "start": 7653,
                      "end": 7659
                    }
                  ],
                  "start": 7652,
                  "end": 7660
                },
                "start": 7622,
                "end": 7660
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "some",
                  "raw": "\"some\"",
                  "start": 7666,
                  "end": 7672
                },
                "start": 7666,
                "end": 7672
              }
            ],
            "start": 7616,
            "end": 7674
          },
          "start": 7612,
          "end": 7674
        },
        "declare": false,
        "start": 7547,
        "end": 7675
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7540,
      "end": 7675
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicMerge",
          "optional": false,
          "typeAnnotation": null,
          "start": 7688,
          "end": 7702
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7703,
                "end": 7709
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7718,
                  "end": 7737
                },
                "typeArguments": null,
                "start": 7718,
                "end": 7737
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 7740,
                "end": 7745
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7703,
              "end": 7745
            }
          ],
          "start": 7702,
          "end": 7746
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 7749,
            "end": 7753
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7759,
                  "end": 7789
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7790,
                        "end": 7796
                      },
                      "typeArguments": null,
                      "start": 7790,
                      "end": 7796
                    }
                  ],
                  "start": 7789,
                  "end": 7797
                },
                "start": 7759,
                "end": 7797
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "merge",
                  "raw": "\"merge\"",
                  "start": 7803,
                  "end": 7810
                },
                "start": 7803,
                "end": 7810
              }
            ],
            "start": 7753,
            "end": 7812
          },
          "start": 7749,
          "end": 7812
        },
        "declare": false,
        "start": 7683,
        "end": 7813
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7676,
      "end": 7813
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicInArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 7826,
          "end": 7842
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7843,
                "end": 7849
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7858,
                  "end": 7877
                },
                "typeArguments": null,
                "start": 7858,
                "end": 7877
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 7880,
                "end": 7885
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7843,
              "end": 7885
            }
          ],
          "start": 7842,
          "end": 7886
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenameToIn",
            "optional": false,
            "typeAnnotation": null,
            "start": 7889,
            "end": 7899
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7905,
                  "end": 7909
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AllReservedOperationsInterface",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7910,
                        "end": 7940
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7941,
                              "end": 7947
                            },
                            "typeArguments": null,
                            "start": 7941,
                            "end": 7947
                          }
                        ],
                        "start": 7940,
                        "end": 7948
                      },
                      "start": 7910,
                      "end": 7948
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "inArray",
                        "raw": "\"inArray\"",
                        "start": 7950,
                        "end": 7959
                      },
                      "start": 7950,
                      "end": 7959
                    }
                  ],
                  "start": 7909,
                  "end": 7960
                },
                "start": 7905,
                "end": 7960
              }
            ],
            "start": 7899,
            "end": 7962
          },
          "start": 7889,
          "end": 7962
        },
        "declare": false,
        "start": 7821,
        "end": 7963
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7814,
      "end": 7963
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicInString",
          "optional": false,
          "typeAnnotation": null,
          "start": 7976,
          "end": 7993
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 7994,
                "end": 8000
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8009,
                  "end": 8028
                },
                "typeArguments": null,
                "start": 8009,
                "end": 8028
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 8031,
                "end": 8036
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 7994,
              "end": 8036
            }
          ],
          "start": 7993,
          "end": 8037
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RenameToIn",
            "optional": false,
            "typeAnnotation": null,
            "start": 8040,
            "end": 8050
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pick",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8056,
                  "end": 8060
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AllReservedOperationsInterface",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8061,
                        "end": 8091
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AddOps",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8092,
                              "end": 8098
                            },
                            "typeArguments": null,
                            "start": 8092,
                            "end": 8098
                          }
                        ],
                        "start": 8091,
                        "end": 8099
                      },
                      "start": 8061,
                      "end": 8099
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "inString",
                        "raw": "\"inString\"",
                        "start": 8101,
                        "end": 8111
                      },
                      "start": 8101,
                      "end": 8111
                    }
                  ],
                  "start": 8060,
                  "end": 8112
                },
                "start": 8056,
                "end": 8112
              }
            ],
            "start": 8050,
            "end": 8114
          },
          "start": 8040,
          "end": 8114
        },
        "declare": false,
        "start": 7971,
        "end": 8115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 7964,
      "end": 8115
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicCat",
          "optional": false,
          "typeAnnotation": null,
          "start": 8128,
          "end": 8140
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 8141,
                "end": 8147
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8156,
                  "end": 8175
                },
                "typeArguments": null,
                "start": 8156,
                "end": 8175
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 8178,
                "end": 8183
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 8141,
              "end": 8183
            }
          ],
          "start": 8140,
          "end": 8184
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 8187,
            "end": 8191
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8197,
                  "end": 8227
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8228,
                        "end": 8234
                      },
                      "typeArguments": null,
                      "start": 8228,
                      "end": 8234
                    }
                  ],
                  "start": 8227,
                  "end": 8235
                },
                "start": 8197,
                "end": 8235
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "cat",
                  "raw": "\"cat\"",
                  "start": 8241,
                  "end": 8246
                },
                "start": 8241,
                "end": 8246
              }
            ],
            "start": 8191,
            "end": 8248
          },
          "start": 8187,
          "end": 8248
        },
        "declare": false,
        "start": 8123,
        "end": 8249
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8116,
      "end": 8249
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicSubstr",
          "optional": false,
          "typeAnnotation": null,
          "start": 8262,
          "end": 8277
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 8278,
                "end": 8284
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8293,
                  "end": 8312
                },
                "typeArguments": null,
                "start": 8293,
                "end": 8312
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 8315,
                "end": 8320
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 8278,
              "end": 8320
            }
          ],
          "start": 8277,
          "end": 8321
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 8324,
            "end": 8328
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8334,
                  "end": 8364
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8365,
                        "end": 8371
                      },
                      "typeArguments": null,
                      "start": 8365,
                      "end": 8371
                    }
                  ],
                  "start": 8364,
                  "end": 8372
                },
                "start": 8334,
                "end": 8372
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "substr",
                  "raw": "\"substr\"",
                  "start": 8378,
                  "end": 8386
                },
                "start": 8378,
                "end": 8386
              }
            ],
            "start": 8328,
            "end": 8388
          },
          "start": 8324,
          "end": 8388
        },
        "declare": false,
        "start": 8257,
        "end": 8389
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8250,
      "end": 8389
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "JsonLogicLog",
          "optional": false,
          "typeAnnotation": null,
          "start": 8402,
          "end": 8414
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 8415,
                "end": 8421
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8430,
                  "end": 8449
                },
                "typeArguments": null,
                "start": 8430,
                "end": 8449
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 8452,
                "end": 8457
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 8415,
              "end": 8457
            }
          ],
          "start": 8414,
          "end": 8458
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "typeAnnotation": null,
            "start": 8461,
            "end": 8465
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AllReservedOperationsInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8471,
                  "end": 8501
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AddOps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8502,
                        "end": 8508
                      },
                      "typeArguments": null,
                      "start": 8502,
                      "end": 8508
                    }
                  ],
                  "start": 8501,
                  "end": 8509
                },
                "start": 8471,
                "end": 8509
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "log",
                  "raw": "\"log\"",
                  "start": 8515,
                  "end": 8520
                },
                "start": 8515,
                "end": 8520
              }
            ],
            "start": 8465,
            "end": 8522
          },
          "start": 8461,
          "end": 8522
        },
        "declare": false,
        "start": 8397,
        "end": 8523
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8390,
      "end": 8523
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RulesLogic",
          "optional": false,
          "typeAnnotation": null,
          "start": 8537,
          "end": 8547
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 8548,
                "end": 8554
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AdditionalOperation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8563,
                  "end": 8582
                },
                "typeArguments": null,
                "start": 8563,
                "end": 8582
              },
              "default": {
                "type": "TSNeverKeyword",
                "start": 8585,
                "end": 8590
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 8548,
              "end": 8590
            }
          ],
          "start": 8547,
          "end": 8591
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSBooleanKeyword",
              "start": 8600,
              "end": 8607
            },
            {
              "type": "TSStringKeyword",
              "start": 8614,
              "end": 8620
            },
            {
              "type": "TSNumberKeyword",
              "start": 8627,
              "end": 8633
            },
            {
              "type": "TSNullKeyword",
              "start": 8640,
              "end": 8644
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicVar",
                "optional": false,
                "typeAnnotation": null,
                "start": 8728,
                "end": 8740
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8741,
                      "end": 8747
                    },
                    "typeArguments": null,
                    "start": 8741,
                    "end": 8747
                  }
                ],
                "start": 8740,
                "end": 8748
              },
              "start": 8728,
              "end": 8748
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicMissing",
                "optional": false,
                "typeAnnotation": null,
                "start": 8755,
                "end": 8771
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8772,
                      "end": 8778
                    },
                    "typeArguments": null,
                    "start": 8772,
                    "end": 8778
                  }
                ],
                "start": 8771,
                "end": 8779
              },
              "start": 8755,
              "end": 8779
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicMissingSome",
                "optional": false,
                "typeAnnotation": null,
                "start": 8786,
                "end": 8806
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8807,
                      "end": 8813
                    },
                    "typeArguments": null,
                    "start": 8807,
                    "end": 8813
                  }
                ],
                "start": 8806,
                "end": 8814
              },
              "start": 8786,
              "end": 8814
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicIf",
                "optional": false,
                "typeAnnotation": null,
                "start": 8926,
                "end": 8937
              },
              "typeArguments": null,
              "start": 8926,
              "end": 8937
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicEqual",
                "optional": false,
                "typeAnnotation": null,
                "start": 8944,
                "end": 8958
              },
              "typeArguments": null,
              "start": 8944,
              "end": 8958
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicStrictEqual",
                "optional": false,
                "typeAnnotation": null,
                "start": 8965,
                "end": 8985
              },
              "typeArguments": null,
              "start": 8965,
              "end": 8985
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicNotEqual",
                "optional": false,
                "typeAnnotation": null,
                "start": 8992,
                "end": 9009
              },
              "typeArguments": null,
              "start": 8992,
              "end": 9009
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicStrictNotEqual",
                "optional": false,
                "typeAnnotation": null,
                "start": 9016,
                "end": 9039
              },
              "typeArguments": null,
              "start": 9016,
              "end": 9039
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicNegation",
                "optional": false,
                "typeAnnotation": null,
                "start": 9046,
                "end": 9063
              },
              "typeArguments": null,
              "start": 9046,
              "end": 9063
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicDoubleNegation",
                "optional": false,
                "typeAnnotation": null,
                "start": 9070,
                "end": 9093
              },
              "typeArguments": null,
              "start": 9070,
              "end": 9093
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicOr",
                "optional": false,
                "typeAnnotation": null,
                "start": 9100,
                "end": 9111
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9112,
                      "end": 9118
                    },
                    "typeArguments": null,
                    "start": 9112,
                    "end": 9118
                  }
                ],
                "start": 9111,
                "end": 9119
              },
              "start": 9100,
              "end": 9119
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicAnd",
                "optional": false,
                "typeAnnotation": null,
                "start": 9126,
                "end": 9138
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9139,
                      "end": 9145
                    },
                    "typeArguments": null,
                    "start": 9139,
                    "end": 9145
                  }
                ],
                "start": 9138,
                "end": 9146
              },
              "start": 9126,
              "end": 9146
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicGreaterThan",
                "optional": false,
                "typeAnnotation": null,
                "start": 9238,
                "end": 9258
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9259,
                      "end": 9265
                    },
                    "typeArguments": null,
                    "start": 9259,
                    "end": 9265
                  }
                ],
                "start": 9258,
                "end": 9266
              },
              "start": 9238,
              "end": 9266
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicGreaterThanOrEqual",
                "optional": false,
                "typeAnnotation": null,
                "start": 9273,
                "end": 9300
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9301,
                      "end": 9307
                    },
                    "typeArguments": null,
                    "start": 9301,
                    "end": 9307
                  }
                ],
                "start": 9300,
                "end": 9308
              },
              "start": 9273,
              "end": 9308
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicLessThan",
                "optional": false,
                "typeAnnotation": null,
                "start": 9315,
                "end": 9332
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9333,
                      "end": 9339
                    },
                    "typeArguments": null,
                    "start": 9333,
                    "end": 9339
                  }
                ],
                "start": 9332,
                "end": 9340
              },
              "start": 9315,
              "end": 9340
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicLessThanOrEqual",
                "optional": false,
                "typeAnnotation": null,
                "start": 9347,
                "end": 9371
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9372,
                      "end": 9378
                    },
                    "typeArguments": null,
                    "start": 9372,
                    "end": 9378
                  }
                ],
                "start": 9371,
                "end": 9379
              },
              "start": 9347,
              "end": 9379
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicMax",
                "optional": false,
                "typeAnnotation": null,
                "start": 9386,
                "end": 9398
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9399,
                      "end": 9405
                    },
                    "typeArguments": null,
                    "start": 9399,
                    "end": 9405
                  }
                ],
                "start": 9398,
                "end": 9406
              },
              "start": 9386,
              "end": 9406
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicMin",
                "optional": false,
                "typeAnnotation": null,
                "start": 9413,
                "end": 9425
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9426,
                      "end": 9432
                    },
                    "typeArguments": null,
                    "start": 9426,
                    "end": 9432
                  }
                ],
                "start": 9425,
                "end": 9433
              },
              "start": 9413,
              "end": 9433
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicSum",
                "optional": false,
                "typeAnnotation": null,
                "start": 9440,
                "end": 9452
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9453,
                      "end": 9459
                    },
                    "typeArguments": null,
                    "start": 9453,
                    "end": 9459
                  }
                ],
                "start": 9452,
                "end": 9460
              },
              "start": 9440,
              "end": 9460
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicDifference",
                "optional": false,
                "typeAnnotation": null,
                "start": 9467,
                "end": 9486
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9487,
                      "end": 9493
                    },
                    "typeArguments": null,
                    "start": 9487,
                    "end": 9493
                  }
                ],
                "start": 9486,
                "end": 9494
              },
              "start": 9467,
              "end": 9494
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicProduct",
                "optional": false,
                "typeAnnotation": null,
                "start": 9501,
                "end": 9517
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9518,
                      "end": 9524
                    },
                    "typeArguments": null,
                    "start": 9518,
                    "end": 9524
                  }
                ],
                "start": 9517,
                "end": 9525
              },
              "start": 9501,
              "end": 9525
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicQuotient",
                "optional": false,
                "typeAnnotation": null,
                "start": 9532,
                "end": 9549
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9550,
                      "end": 9556
                    },
                    "typeArguments": null,
                    "start": 9550,
                    "end": 9556
                  }
                ],
                "start": 9549,
                "end": 9557
              },
              "start": 9532,
              "end": 9557
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicRemainder",
                "optional": false,
                "typeAnnotation": null,
                "start": 9564,
                "end": 9582
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9583,
                      "end": 9589
                    },
                    "typeArguments": null,
                    "start": 9583,
                    "end": 9589
                  }
                ],
                "start": 9582,
                "end": 9590
              },
              "start": 9564,
              "end": 9590
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 9678,
                "end": 9690
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9691,
                      "end": 9697
                    },
                    "typeArguments": null,
                    "start": 9691,
                    "end": 9697
                  }
                ],
                "start": 9690,
                "end": 9698
              },
              "start": 9678,
              "end": 9698
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicFilter",
                "optional": false,
                "typeAnnotation": null,
                "start": 9705,
                "end": 9720
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9721,
                      "end": 9727
                    },
                    "typeArguments": null,
                    "start": 9721,
                    "end": 9727
                  }
                ],
                "start": 9720,
                "end": 9728
              },
              "start": 9705,
              "end": 9728
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicReduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 9735,
                "end": 9750
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9751,
                      "end": 9757
                    },
                    "typeArguments": null,
                    "start": 9751,
                    "end": 9757
                  }
                ],
                "start": 9750,
                "end": 9758
              },
              "start": 9735,
              "end": 9758
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 9765,
                "end": 9777
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9778,
                      "end": 9784
                    },
                    "typeArguments": null,
                    "start": 9778,
                    "end": 9784
                  }
                ],
                "start": 9777,
                "end": 9785
              },
              "start": 9765,
              "end": 9785
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicNone",
                "optional": false,
                "typeAnnotation": null,
                "start": 9792,
                "end": 9805
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9806,
                      "end": 9812
                    },
                    "typeArguments": null,
                    "start": 9806,
                    "end": 9812
                  }
                ],
                "start": 9805,
                "end": 9813
              },
              "start": 9792,
              "end": 9813
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicSome",
                "optional": false,
                "typeAnnotation": null,
                "start": 9820,
                "end": 9833
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9834,
                      "end": 9840
                    },
                    "typeArguments": null,
                    "start": 9834,
                    "end": 9840
                  }
                ],
                "start": 9833,
                "end": 9841
              },
              "start": 9820,
              "end": 9841
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicMerge",
                "optional": false,
                "typeAnnotation": null,
                "start": 9848,
                "end": 9862
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9863,
                      "end": 9869
                    },
                    "typeArguments": null,
                    "start": 9863,
                    "end": 9869
                  }
                ],
                "start": 9862,
                "end": 9870
              },
              "start": 9848,
              "end": 9870
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicInArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 9877,
                "end": 9893
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9894,
                      "end": 9900
                    },
                    "typeArguments": null,
                    "start": 9894,
                    "end": 9900
                  }
                ],
                "start": 9893,
                "end": 9901
              },
              "start": 9877,
              "end": 9901
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicInString",
                "optional": false,
                "typeAnnotation": null,
                "start": 9991,
                "end": 10008
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10009,
                      "end": 10015
                    },
                    "typeArguments": null,
                    "start": 10009,
                    "end": 10015
                  }
                ],
                "start": 10008,
                "end": 10016
              },
              "start": 9991,
              "end": 10016
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicCat",
                "optional": false,
                "typeAnnotation": null,
                "start": 10023,
                "end": 10035
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10036,
                      "end": 10042
                    },
                    "typeArguments": null,
                    "start": 10036,
                    "end": 10042
                  }
                ],
                "start": 10035,
                "end": 10043
              },
              "start": 10023,
              "end": 10043
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicSubstr",
                "optional": false,
                "typeAnnotation": null,
                "start": 10050,
                "end": 10065
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10066,
                      "end": 10072
                    },
                    "typeArguments": null,
                    "start": 10066,
                    "end": 10072
                  }
                ],
                "start": 10065,
                "end": 10073
              },
              "start": 10050,
              "end": 10073
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JsonLogicLog",
                "optional": false,
                "typeAnnotation": null,
                "start": 10155,
                "end": 10167
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AddOps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10168,
                      "end": 10174
                    },
                    "typeArguments": null,
                    "start": 10168,
                    "end": 10174
                  }
                ],
                "start": 10167,
                "end": 10175
              },
              "start": 10155,
              "end": 10175
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AddOps",
                "optional": false,
                "typeAnnotation": null,
                "start": 10250,
                "end": 10256
              },
              "typeArguments": null,
              "start": 10250,
              "end": 10256
            }
          ],
          "start": 8598,
          "end": 10256
        },
        "declare": false,
        "start": 8532,
        "end": 10257
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8525,
      "end": 10257
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "add_operation",
          "optional": false,
          "typeAnnotation": null,
          "start": 10275,
          "end": 10288
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10295,
                "end": 10301
              },
              "start": 10293,
              "end": 10301
            },
            "start": 10289,
            "end": 10301
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "code",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10313,
                      "end": 10317
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 10319,
                          "end": 10322
                        },
                        "start": 10319,
                        "end": 10324
                      },
                      "start": 10317,
                      "end": 10324
                    },
                    "value": null,
                    "start": 10310,
                    "end": 10324
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 10329,
                    "end": 10332
                  },
                  "start": 10326,
                  "end": 10332
                },
                "start": 10309,
                "end": 10332
              },
              "start": 10307,
              "end": 10332
            },
            "start": 10303,
            "end": 10332
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 10335,
            "end": 10339
          },
          "start": 10333,
          "end": 10339
        },
        "body": null,
        "expression": false,
        "start": 10266,
        "end": 10340
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10259,
      "end": 10340
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "apply",
          "optional": false,
          "typeAnnotation": null,
          "start": 10357,
          "end": 10362
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "logic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RulesLogic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10370,
                  "end": 10380
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AdditionalOperation",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10381,
                        "end": 10400
                      },
                      "typeArguments": null,
                      "start": 10381,
                      "end": 10400
                    }
                  ],
                  "start": 10380,
                  "end": 10401
                },
                "start": 10370,
                "end": 10401
              },
              "start": 10368,
              "end": 10401
            },
            "start": 10363,
            "end": 10401
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 10410,
                "end": 10417
              },
              "start": 10408,
              "end": 10417
            },
            "start": 10403,
            "end": 10417
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 10420,
            "end": 10423
          },
          "start": 10418,
          "end": 10423
        },
        "body": null,
        "expression": false,
        "start": 10348,
        "end": 10424
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10341,
      "end": 10424
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "rm_operation",
          "optional": false,
          "typeAnnotation": null,
          "start": 10441,
          "end": 10453
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 10460,
                "end": 10466
              },
              "start": 10458,
              "end": 10466
            },
            "start": 10454,
            "end": 10466
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 10469,
            "end": 10473
          },
          "start": 10467,
          "end": 10473
        },
        "body": null,
        "expression": false,
        "start": 10432,
        "end": 10474
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10425,
      "end": 10474
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "is_logic",
          "optional": false,
          "typeAnnotation": null,
          "start": 10609,
          "end": 10617
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "logic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10625,
                "end": 10628
              },
              "start": 10623,
              "end": 10628
            },
            "start": 10618,
            "end": 10628
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "logic",
              "optional": false,
              "typeAnnotation": null,
              "start": 10631,
              "end": 10636
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RulesLogic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10640,
                  "end": 10650
                },
                "typeArguments": null,
                "start": 10640,
                "end": 10650
              },
              "start": 10640,
              "end": 10650
            },
            "start": 10631,
            "end": 10650
          },
          "start": 10629,
          "end": 10650
        },
        "body": null,
        "expression": false,
        "start": 10600,
        "end": 10651
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10593,
      "end": 10651
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "truthy",
          "optional": false,
          "typeAnnotation": null,
          "start": 10668,
          "end": 10674
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10682,
                "end": 10685
              },
              "start": 10680,
              "end": 10685
            },
            "start": 10675,
            "end": 10685
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 10688,
            "end": 10695
          },
          "start": 10686,
          "end": 10695
        },
        "body": null,
        "expression": false,
        "start": 10659,
        "end": 10696
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10652,
      "end": 10696
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "get_operator",
          "optional": false,
          "typeAnnotation": null,
          "start": 10713,
          "end": 10725
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "logic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10733,
                  "end": 10739
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 10740,
                      "end": 10746
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 10748,
                      "end": 10751
                    }
                  ],
                  "start": 10739,
                  "end": 10752
                },
                "start": 10733,
                "end": 10752
              },
              "start": 10731,
              "end": 10752
            },
            "start": 10726,
            "end": 10752
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 10755,
            "end": 10761
          },
          "start": 10753,
          "end": 10761
        },
        "body": null,
        "expression": false,
        "start": 10704,
        "end": 10762
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10697,
      "end": 10762
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "get_values",
          "optional": false,
          "typeAnnotation": null,
          "start": 10779,
          "end": 10789
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "logic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10797,
                  "end": 10803
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 10804,
                      "end": 10810
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 10812,
                      "end": 10815
                    }
                  ],
                  "start": 10803,
                  "end": 10816
                },
                "start": 10797,
                "end": 10816
              },
              "start": 10795,
              "end": 10816
            },
            "start": 10790,
            "end": 10816
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 10819,
            "end": 10822
          },
          "start": 10817,
          "end": 10822
        },
        "body": null,
        "expression": false,
        "start": 10770,
        "end": 10823
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10763,
      "end": 10823
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "uses_data",
          "optional": false,
          "typeAnnotation": null,
          "start": 10840,
          "end": 10849
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "logic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10857,
                  "end": 10863
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 10864,
                      "end": 10870
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 10872,
                      "end": 10875
                    }
                  ],
                  "start": 10863,
                  "end": 10876
                },
                "start": 10857,
                "end": 10876
              },
              "start": 10855,
              "end": 10876
            },
            "start": 10850,
            "end": 10876
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSAnyKeyword",
              "start": 10879,
              "end": 10882
            },
            "start": 10879,
            "end": 10884
          },
          "start": 10877,
          "end": 10884
        },
        "body": null,
        "expression": false,
        "start": 10831,
        "end": 10885
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10824,
      "end": 10885
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "rule_like",
          "optional": false,
          "typeAnnotation": null,
          "start": 10902,
          "end": 10911
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10918,
                "end": 10921
              },
              "start": 10916,
              "end": 10921
            },
            "start": 10912,
            "end": 10921
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pattern",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 10932,
                "end": 10935
              },
              "start": 10930,
              "end": 10935
            },
            "start": 10923,
            "end": 10935
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 10938,
            "end": 10945
          },
          "start": 10936,
          "end": 10945
        },
        "body": null,
        "expression": false,
        "start": 10893,
        "end": 10946
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10886,
      "end": 10946
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 10947
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 372,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 379,
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
    "value": "jsonFactory",
    "start": 392,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 441,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "RenameToIn",
    "start": 446,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 471,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 474,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 482,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 487,
    "end": 494
  },
  {
    "type": "Template",
    "value": "`in${",
    "start": 495,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 500,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 517,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 520,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 530,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 540,
    "end": 541
  },
  {
    "type": "Template",
    "value": "`in`",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 550,
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
    "value": "[",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 689,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "MAXIMUM_ALLOWED_BOUNDARY",
    "start": 694,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Numeric",
    "value": "80",
    "start": 721,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 725,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 730,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 742,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 748,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 756,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 771,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 778,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 786,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "Count",
    "start": 806,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 812,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 820,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
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
    "type": "Identifier",
    "value": "Count",
    "start": 848,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 853,
    "end": 854
  },
  {
    "type": "String",
    "value": "\"length\"",
    "start": 854,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 864,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "MAXIMUM_ALLOWED_BOUNDARY",
    "start": 872,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 912,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 918,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 940,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 947,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 960,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 967,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 974,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 982,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "Count",
    "start": 985,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 990,
    "end": 991
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 1009,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1016,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 1040,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "Count",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1179,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "AnyArrayOfOddLengthMin3",
    "start": 1184,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1211,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 1219,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1227,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1232,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1241,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "ReservedOperations",
    "start": 1253,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "String",
    "value": "\"var\"",
    "start": 1280,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "String",
    "value": "\"missing\"",
    "start": 1292,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "String",
    "value": "\"missing_some\"",
    "start": 1308,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "String",
    "value": "\"if\"",
    "start": 1329,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "String",
    "value": "\"==\"",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "String",
    "value": "\"===\"",
    "start": 1351,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "String",
    "value": "\"!=\"",
    "start": 1363,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "String",
    "value": "\"!==\"",
    "start": 1374,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "String",
    "value": "\"!!\"",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "String",
    "value": "\"or\"",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "String",
    "value": "\"and\"",
    "start": 1418,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "String",
    "value": "\">\"",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "String",
    "value": "\">=\"",
    "start": 1440,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "String",
    "value": "\"<\"",
    "start": 1451,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "String",
    "value": "\"<=\"",
    "start": 1461,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "String",
    "value": "\"max\"",
    "start": 1472,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "String",
    "value": "\"min\"",
    "start": 1484,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "String",
    "value": "\"+\"",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "String",
    "value": "\"-\"",
    "start": 1506,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "String",
    "value": "\"*\"",
    "start": 1516,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "String",
    "value": "\"/\"",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "String",
    "value": "\"%\"",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "String",
    "value": "\"map\"",
    "start": 1546,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "String",
    "value": "\"filter\"",
    "start": 1558,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "String",
    "value": "\"reduce\"",
    "start": 1573,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "String",
    "value": "\"all\"",
    "start": 1588,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1600,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 1613,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "String",
    "value": "\"merge\"",
    "start": 1626,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "String",
    "value": "\"in\"",
    "start": 1640,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "String",
    "value": "\"cat\"",
    "start": 1651,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "String",
    "value": "\"substr\"",
    "start": 1663,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "String",
    "value": "\"log\"",
    "start": 1678,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1932,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1939,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 1944,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1966,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1974,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "ReservedOperations",
    "start": 1981,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2001,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2017,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2026,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2034,
    "end": 2040
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2041,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 2051,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2082,
    "end": 2088
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2089,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 2097,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2119,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 2132,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2137,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2148,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2159,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2170,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2182,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2193,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2202,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2210,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2230,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "missing",
    "start": 2240,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2249,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2260,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2270,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "missing_some",
    "start": 2281,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2296,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2307,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2316,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2327,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2337,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "if",
    "start": 2349,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "AnyArrayOfOddLengthMin3",
    "start": 2353,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "String",
    "value": "\"==\"",
    "start": 2382,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2389,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2394,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "String",
    "value": "\"===\"",
    "start": 2404,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2412,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2417,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "String",
    "value": "\"!=\"",
    "start": 2427,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2434,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2439,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "String",
    "value": "\"!==\"",
    "start": 2449,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2457,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2462,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 2472,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2477,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "String",
    "value": "\"!!\"",
    "start": 2486,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2492,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Identifier",
    "value": "or",
    "start": 2501,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2505,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2511,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2522,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "and",
    "start": 2536,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2541,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2547,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2558,
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
    "value": ">",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "String",
    "value": "\">\"",
    "start": 2572,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2578,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2589,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2598,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2609,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "String",
    "value": "\">=\"",
    "start": 2623,
    "end": 2627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2630,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2641,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2650,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2661,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "String",
    "value": "\"<\"",
    "start": 2675,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2681,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2692,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2701,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2712,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2724,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2735,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2744,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2755,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2764,
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
    "value": "AddOps",
    "start": 2775,
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
    "value": "]",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "String",
    "value": "\"<=\"",
    "start": 2789,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2796,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2807,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2816,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2827,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2839,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2850,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2859,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2870,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2879,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2890,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 2904,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2909,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2915,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2926,
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
    "type": "Punctuator",
    "value": ";",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 2940,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2945,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2951,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2962,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "String",
    "value": "\"+\"",
    "start": 2976,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2981,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 2987,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 2998,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3009,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3020,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "String",
    "value": "\"-\"",
    "start": 3033,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3038,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3044,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3055,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3066,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3077,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "String",
    "value": "\"*\"",
    "start": 3090,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3095,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3101,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3112,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3123,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3134,
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
    "value": ";",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "String",
    "value": "\"/\"",
    "start": 3147,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3152,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3158,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3169,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3180,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3191,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "String",
    "value": "\"%\"",
    "start": 3204,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3210,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3221,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3230,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3241,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 3255,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3261,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3272,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3281,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3292,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 3306,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3315,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3326,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3335,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3346,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 3360,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3369,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3380,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3389,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3400,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3409,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3420,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 3434,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3440,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3446,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3457,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3467,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3478,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3490,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3501,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3510,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3521,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Identifier",
    "value": "none",
    "start": 3535,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3542,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3548,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3559,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3569,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3580,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3592,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3603,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3612,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3623,
    "end": 3629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 3637,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3644,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3650,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3661,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3671,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3682,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3694,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3705,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3714,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3725,
    "end": 3731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3732,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "merge",
    "start": 3739,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3746,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3752,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3758,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3769,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3780,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3791,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "inArray",
    "start": 3805,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3815,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3826,
    "end": 3832
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3835,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3841,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3852,
    "end": 3858
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "inString",
    "start": 3867,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3878,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3889,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3898,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3909,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 3923,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3928,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3934,
    "end": 3944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3945,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 3959,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3968,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3979,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 3988,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 3999,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 4011,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4022,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 4031,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4042,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 4051,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4062,
    "end": 4068
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4076,
    "end": 4079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 4081,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4092,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4104,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4111,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "JsonLogicVar",
    "start": 4116,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4129,
    "end": 4135
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4136,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 4144,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4166,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4175,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4185,
    "end": 4215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4216,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "String",
    "value": "\"var\"",
    "start": 4229,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4238,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4245,
    "end": 4249
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMissing",
    "start": 4250,
    "end": 4266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4267,
    "end": 4273
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4274,
    "end": 4281
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 4282,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4304,
    "end": 4309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4309,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4311,
    "end": 4312
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4313,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4323,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4354,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "String",
    "value": "\"missing\"",
    "start": 4367,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4380,
    "end": 4386
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4387,
    "end": 4391
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMissingSome",
    "start": 4392,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4413,
    "end": 4419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4420,
    "end": 4427
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 4428,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4450,
    "end": 4455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4455,
    "end": 4456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4459,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4469,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 4500,
    "end": 4506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "String",
    "value": "\"missing_some\"",
    "start": 4513,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4531,
    "end": 4537
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4538,
    "end": 4542
  },
  {
    "type": "Identifier",
    "value": "JsonLogicIf",
    "start": 4543,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4557,
    "end": 4561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4561,
    "end": 4562
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4562,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "String",
    "value": "\"if\"",
    "start": 4594,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4599,
    "end": 4600
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4601,
    "end": 4607
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4608,
    "end": 4612
  },
  {
    "type": "Identifier",
    "value": "JsonLogicEqual",
    "start": 4613,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4630,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4635,
    "end": 4665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "String",
    "value": "\"==\"",
    "start": 4667,
    "end": 4671
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4671,
    "end": 4672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4672,
    "end": 4673
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4674,
    "end": 4680
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4681,
    "end": 4685
  },
  {
    "type": "Identifier",
    "value": "JsonLogicStrictEqual",
    "start": 4686,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4707,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4709,
    "end": 4713
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4713,
    "end": 4714
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4714,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "String",
    "value": "\"===\"",
    "start": 4746,
    "end": 4751
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4754,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4761,
    "end": 4765
  },
  {
    "type": "Identifier",
    "value": "JsonLogicNotEqual",
    "start": 4766,
    "end": 4783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4784,
    "end": 4785
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4786,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4791,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "String",
    "value": "\"!=\"",
    "start": 4823,
    "end": 4827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4827,
    "end": 4828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4828,
    "end": 4829
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4830,
    "end": 4836
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4837,
    "end": 4841
  },
  {
    "type": "Identifier",
    "value": "JsonLogicStrictNotEqual",
    "start": 4842,
    "end": 4865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4868,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4873,
    "end": 4903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "String",
    "value": "\"!==\"",
    "start": 4905,
    "end": 4910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4910,
    "end": 4911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4911,
    "end": 4912
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4913,
    "end": 4919
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4920,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "JsonLogicNegation",
    "start": 4925,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4943,
    "end": 4944
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 4945,
    "end": 4949
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 4950,
    "end": 4980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4980,
    "end": 4981
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 4982,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4988,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4995,
    "end": 4999
  },
  {
    "type": "Identifier",
    "value": "JsonLogicDoubleNegation",
    "start": 5000,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5026,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5031,
    "end": 5061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "String",
    "value": "\"!!\"",
    "start": 5063,
    "end": 5067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5067,
    "end": 5068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5070,
    "end": 5076
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5077,
    "end": 5081
  },
  {
    "type": "Identifier",
    "value": "JsonLogicOr",
    "start": 5082,
    "end": 5093
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5093,
    "end": 5094
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5094,
    "end": 5100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5101,
    "end": 5108
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 5109,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5131,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5140,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5150,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5180,
    "end": 5181
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5181,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "String",
    "value": "\"or\"",
    "start": 5194,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5200,
    "end": 5201
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5202,
    "end": 5208
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5209,
    "end": 5213
  },
  {
    "type": "Identifier",
    "value": "JsonLogicAnd",
    "start": 5214,
    "end": 5226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5226,
    "end": 5227
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5227,
    "end": 5233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5234,
    "end": 5241
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 5242,
    "end": 5261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5264,
    "end": 5269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5269,
    "end": 5270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5271,
    "end": 5272
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5273,
    "end": 5277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5283,
    "end": 5313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5313,
    "end": 5314
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5314,
    "end": 5320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5321,
    "end": 5322
  },
  {
    "type": "String",
    "value": "\"and\"",
    "start": 5327,
    "end": 5332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5336,
    "end": 5342
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5343,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "JsonLogicGreaterThan",
    "start": 5348,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5369,
    "end": 5375
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5376,
    "end": 5383
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 5384,
    "end": 5403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5404,
    "end": 5405
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5406,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5413,
    "end": 5414
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5415,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5419,
    "end": 5420
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5425,
    "end": 5455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5455,
    "end": 5456
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5456,
    "end": 5462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5462,
    "end": 5463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5463,
    "end": 5464
  },
  {
    "type": "String",
    "value": "\">\"",
    "start": 5469,
    "end": 5472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5474,
    "end": 5475
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5476,
    "end": 5482
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5483,
    "end": 5487
  },
  {
    "type": "Identifier",
    "value": "JsonLogicGreaterThanOrEqual",
    "start": 5488,
    "end": 5515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5515,
    "end": 5516
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5516,
    "end": 5522
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5523,
    "end": 5530
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 5531,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5551,
    "end": 5552
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5553,
    "end": 5558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5558,
    "end": 5559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5562,
    "end": 5566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5566,
    "end": 5567
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5572,
    "end": 5602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5602,
    "end": 5603
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5603,
    "end": 5609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5609,
    "end": 5610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5610,
    "end": 5611
  },
  {
    "type": "String",
    "value": "\">=\"",
    "start": 5616,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5622,
    "end": 5623
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5624,
    "end": 5630
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5631,
    "end": 5635
  },
  {
    "type": "Identifier",
    "value": "JsonLogicLessThan",
    "start": 5636,
    "end": 5653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5653,
    "end": 5654
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5654,
    "end": 5660
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5661,
    "end": 5668
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 5669,
    "end": 5688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5689,
    "end": 5690
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5691,
    "end": 5696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5700,
    "end": 5704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5704,
    "end": 5705
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5710,
    "end": 5740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5740,
    "end": 5741
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5741,
    "end": 5747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5747,
    "end": 5748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5748,
    "end": 5749
  },
  {
    "type": "String",
    "value": "\"<\"",
    "start": 5754,
    "end": 5757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5758,
    "end": 5759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5759,
    "end": 5760
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5761,
    "end": 5767
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5768,
    "end": 5772
  },
  {
    "type": "Identifier",
    "value": "JsonLogicLessThanOrEqual",
    "start": 5773,
    "end": 5797
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5797,
    "end": 5798
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5798,
    "end": 5804
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5805,
    "end": 5812
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 5813,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5833,
    "end": 5834
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5835,
    "end": 5840
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5840,
    "end": 5841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5842,
    "end": 5843
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5844,
    "end": 5848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5848,
    "end": 5849
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5854,
    "end": 5884
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5884,
    "end": 5885
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5885,
    "end": 5891
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5892,
    "end": 5893
  },
  {
    "type": "String",
    "value": "\"<=\"",
    "start": 5898,
    "end": 5902
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5903,
    "end": 5904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5904,
    "end": 5905
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5906,
    "end": 5912
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5913,
    "end": 5917
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMax",
    "start": 5918,
    "end": 5930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5930,
    "end": 5931
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 5931,
    "end": 5937
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5938,
    "end": 5945
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 5946,
    "end": 5965
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5966,
    "end": 5967
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5968,
    "end": 5973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5975,
    "end": 5976
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5977,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5981,
    "end": 5982
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 5987,
    "end": 6017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6017,
    "end": 6018
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6018,
    "end": 6024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6024,
    "end": 6025
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6025,
    "end": 6026
  },
  {
    "type": "String",
    "value": "\"max\"",
    "start": 6031,
    "end": 6036
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6037,
    "end": 6038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6038,
    "end": 6039
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6040,
    "end": 6046
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6047,
    "end": 6051
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMin",
    "start": 6052,
    "end": 6064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6064,
    "end": 6065
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6065,
    "end": 6071
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6072,
    "end": 6079
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 6080,
    "end": 6099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6102,
    "end": 6107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6107,
    "end": 6108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 6111,
    "end": 6115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6115,
    "end": 6116
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 6121,
    "end": 6151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6151,
    "end": 6152
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6152,
    "end": 6158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6158,
    "end": 6159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6159,
    "end": 6160
  },
  {
    "type": "String",
    "value": "\"min\"",
    "start": 6165,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6171,
    "end": 6172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6172,
    "end": 6173
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6174,
    "end": 6180
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6181,
    "end": 6185
  },
  {
    "type": "Identifier",
    "value": "JsonLogicSum",
    "start": 6186,
    "end": 6198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6198,
    "end": 6199
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6199,
    "end": 6205
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6206,
    "end": 6213
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 6214,
    "end": 6233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6234,
    "end": 6235
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6236,
    "end": 6241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6241,
    "end": 6242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6243,
    "end": 6244
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 6245,
    "end": 6249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6249,
    "end": 6250
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 6255,
    "end": 6285
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6285,
    "end": 6286
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6286,
    "end": 6292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6293,
    "end": 6294
  },
  {
    "type": "String",
    "value": "\"+\"",
    "start": 6299,
    "end": 6302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6303,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6306,
    "end": 6312
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6313,
    "end": 6317
  },
  {
    "type": "Identifier",
    "value": "JsonLogicDifference",
    "start": 6318,
    "end": 6337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6337,
    "end": 6338
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6338,
    "end": 6344
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6345,
    "end": 6352
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 6353,
    "end": 6372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6373,
    "end": 6374
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6375,
    "end": 6380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6380,
    "end": 6381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6382,
    "end": 6383
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 6384,
    "end": 6388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6388,
    "end": 6389
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 6394,
    "end": 6424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6424,
    "end": 6425
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6425,
    "end": 6431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6431,
    "end": 6432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6432,
    "end": 6433
  },
  {
    "type": "String",
    "value": "\"-\"",
    "start": 6438,
    "end": 6441
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6442,
    "end": 6443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6443,
    "end": 6444
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6445,
    "end": 6451
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6452,
    "end": 6456
  },
  {
    "type": "Identifier",
    "value": "JsonLogicProduct",
    "start": 6457,
    "end": 6473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6473,
    "end": 6474
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6474,
    "end": 6480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6481,
    "end": 6488
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 6489,
    "end": 6508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6509,
    "end": 6510
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6511,
    "end": 6516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6516,
    "end": 6517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6518,
    "end": 6519
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 6520,
    "end": 6524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6524,
    "end": 6525
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 6530,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6560,
    "end": 6561
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6561,
    "end": 6567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6567,
    "end": 6568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6568,
    "end": 6569
  },
  {
    "type": "String",
    "value": "\"*\"",
    "start": 6574,
    "end": 6577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6578,
    "end": 6579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6579,
    "end": 6580
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6581,
    "end": 6587
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6588,
    "end": 6592
  },
  {
    "type": "Identifier",
    "value": "JsonLogicQuotient",
    "start": 6593,
    "end": 6610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6610,
    "end": 6611
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6611,
    "end": 6617
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6618,
    "end": 6625
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 6626,
    "end": 6645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6646,
    "end": 6647
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6648,
    "end": 6653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6653,
    "end": 6654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6655,
    "end": 6656
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 6657,
    "end": 6661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6661,
    "end": 6662
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 6667,
    "end": 6697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6697,
    "end": 6698
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6698,
    "end": 6704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6705,
    "end": 6706
  },
  {
    "type": "String",
    "value": "\"/\"",
    "start": 6711,
    "end": 6714
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6715,
    "end": 6716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6716,
    "end": 6717
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6718,
    "end": 6724
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6725,
    "end": 6729
  },
  {
    "type": "Identifier",
    "value": "JsonLogicRemainder",
    "start": 6730,
    "end": 6748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6748,
    "end": 6749
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6749,
    "end": 6755
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6756,
    "end": 6763
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 6764,
    "end": 6783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6784,
    "end": 6785
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6786,
    "end": 6791
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6791,
    "end": 6792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6793,
    "end": 6794
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 6795,
    "end": 6799
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6799,
    "end": 6800
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 6805,
    "end": 6835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6835,
    "end": 6836
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6836,
    "end": 6842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6842,
    "end": 6843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6843,
    "end": 6844
  },
  {
    "type": "String",
    "value": "\"%\"",
    "start": 6849,
    "end": 6852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6853,
    "end": 6854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6854,
    "end": 6855
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6856,
    "end": 6862
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6863,
    "end": 6867
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMap",
    "start": 6868,
    "end": 6880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6880,
    "end": 6881
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6881,
    "end": 6887
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6888,
    "end": 6895
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 6896,
    "end": 6915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6916,
    "end": 6917
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6918,
    "end": 6923
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6923,
    "end": 6924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6925,
    "end": 6926
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 6927,
    "end": 6931
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6931,
    "end": 6932
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 6937,
    "end": 6967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6967,
    "end": 6968
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 6968,
    "end": 6974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6974,
    "end": 6975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6975,
    "end": 6976
  },
  {
    "type": "String",
    "value": "\"map\"",
    "start": 6981,
    "end": 6986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6987,
    "end": 6988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6988,
    "end": 6989
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6990,
    "end": 6996
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6997,
    "end": 7001
  },
  {
    "type": "Identifier",
    "value": "JsonLogicFilter",
    "start": 7002,
    "end": 7017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7017,
    "end": 7018
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7018,
    "end": 7024
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7025,
    "end": 7032
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 7033,
    "end": 7052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7053,
    "end": 7054
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7055,
    "end": 7060
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7060,
    "end": 7061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7062,
    "end": 7063
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 7064,
    "end": 7068
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7068,
    "end": 7069
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 7074,
    "end": 7104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7104,
    "end": 7105
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7105,
    "end": 7111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7111,
    "end": 7112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7112,
    "end": 7113
  },
  {
    "type": "String",
    "value": "\"filter\"",
    "start": 7118,
    "end": 7126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7127,
    "end": 7128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7128,
    "end": 7129
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7130,
    "end": 7136
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7137,
    "end": 7141
  },
  {
    "type": "Identifier",
    "value": "JsonLogicReduce",
    "start": 7142,
    "end": 7157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7157,
    "end": 7158
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7158,
    "end": 7164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7165,
    "end": 7172
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 7173,
    "end": 7192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7193,
    "end": 7194
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7195,
    "end": 7200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7200,
    "end": 7201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7202,
    "end": 7203
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 7204,
    "end": 7208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7208,
    "end": 7209
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 7214,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7244,
    "end": 7245
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7245,
    "end": 7251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7251,
    "end": 7252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7252,
    "end": 7253
  },
  {
    "type": "String",
    "value": "\"reduce\"",
    "start": 7258,
    "end": 7266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7267,
    "end": 7268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7268,
    "end": 7269
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7270,
    "end": 7276
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7277,
    "end": 7281
  },
  {
    "type": "Identifier",
    "value": "JsonLogicAll",
    "start": 7282,
    "end": 7294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7294,
    "end": 7295
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7295,
    "end": 7301
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7302,
    "end": 7309
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 7310,
    "end": 7329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7330,
    "end": 7331
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7332,
    "end": 7337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7337,
    "end": 7338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7339,
    "end": 7340
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 7341,
    "end": 7345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7345,
    "end": 7346
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 7351,
    "end": 7381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7381,
    "end": 7382
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7382,
    "end": 7388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7388,
    "end": 7389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7389,
    "end": 7390
  },
  {
    "type": "String",
    "value": "\"all\"",
    "start": 7395,
    "end": 7400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7401,
    "end": 7402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7402,
    "end": 7403
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7404,
    "end": 7410
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7411,
    "end": 7415
  },
  {
    "type": "Identifier",
    "value": "JsonLogicNone",
    "start": 7416,
    "end": 7429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7429,
    "end": 7430
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7430,
    "end": 7436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7437,
    "end": 7444
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 7445,
    "end": 7464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7465,
    "end": 7466
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7467,
    "end": 7472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7472,
    "end": 7473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7474,
    "end": 7475
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 7476,
    "end": 7480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7480,
    "end": 7481
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 7486,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7516,
    "end": 7517
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7517,
    "end": 7523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7523,
    "end": 7524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7524,
    "end": 7525
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 7530,
    "end": 7536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7537,
    "end": 7538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7538,
    "end": 7539
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7540,
    "end": 7546
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7547,
    "end": 7551
  },
  {
    "type": "Identifier",
    "value": "JsonLogicSome",
    "start": 7552,
    "end": 7565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7565,
    "end": 7566
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7566,
    "end": 7572
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7573,
    "end": 7580
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 7581,
    "end": 7600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7601,
    "end": 7602
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7603,
    "end": 7608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7608,
    "end": 7609
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7610,
    "end": 7611
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 7612,
    "end": 7616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7616,
    "end": 7617
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 7622,
    "end": 7652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7652,
    "end": 7653
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7653,
    "end": 7659
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7659,
    "end": 7660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7660,
    "end": 7661
  },
  {
    "type": "String",
    "value": "\"some\"",
    "start": 7666,
    "end": 7672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7673,
    "end": 7674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7674,
    "end": 7675
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7676,
    "end": 7682
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7683,
    "end": 7687
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMerge",
    "start": 7688,
    "end": 7702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7702,
    "end": 7703
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7703,
    "end": 7709
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7710,
    "end": 7717
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 7718,
    "end": 7737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7738,
    "end": 7739
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7740,
    "end": 7745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7745,
    "end": 7746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7747,
    "end": 7748
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 7749,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7753,
    "end": 7754
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 7759,
    "end": 7789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7789,
    "end": 7790
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7790,
    "end": 7796
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7796,
    "end": 7797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7797,
    "end": 7798
  },
  {
    "type": "String",
    "value": "\"merge\"",
    "start": 7803,
    "end": 7810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7811,
    "end": 7812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7812,
    "end": 7813
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7814,
    "end": 7820
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7821,
    "end": 7825
  },
  {
    "type": "Identifier",
    "value": "JsonLogicInArray",
    "start": 7826,
    "end": 7842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7842,
    "end": 7843
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7843,
    "end": 7849
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7850,
    "end": 7857
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 7858,
    "end": 7877
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7878,
    "end": 7879
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 7880,
    "end": 7885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7885,
    "end": 7886
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7887,
    "end": 7888
  },
  {
    "type": "Identifier",
    "value": "RenameToIn",
    "start": 7889,
    "end": 7899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7899,
    "end": 7900
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 7905,
    "end": 7909
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7909,
    "end": 7910
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 7910,
    "end": 7940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7940,
    "end": 7941
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7941,
    "end": 7947
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7947,
    "end": 7948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7948,
    "end": 7949
  },
  {
    "type": "String",
    "value": "\"inArray\"",
    "start": 7950,
    "end": 7959
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7959,
    "end": 7960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7961,
    "end": 7962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7962,
    "end": 7963
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7964,
    "end": 7970
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7971,
    "end": 7975
  },
  {
    "type": "Identifier",
    "value": "JsonLogicInString",
    "start": 7976,
    "end": 7993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7993,
    "end": 7994
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 7994,
    "end": 8000
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8001,
    "end": 8008
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 8009,
    "end": 8028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8029,
    "end": 8030
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8031,
    "end": 8036
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8036,
    "end": 8037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8038,
    "end": 8039
  },
  {
    "type": "Identifier",
    "value": "RenameToIn",
    "start": 8040,
    "end": 8050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8050,
    "end": 8051
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 8056,
    "end": 8060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8060,
    "end": 8061
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 8061,
    "end": 8091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8091,
    "end": 8092
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8092,
    "end": 8098
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8098,
    "end": 8099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8099,
    "end": 8100
  },
  {
    "type": "String",
    "value": "\"inString\"",
    "start": 8101,
    "end": 8111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8111,
    "end": 8112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8113,
    "end": 8114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8114,
    "end": 8115
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8116,
    "end": 8122
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8123,
    "end": 8127
  },
  {
    "type": "Identifier",
    "value": "JsonLogicCat",
    "start": 8128,
    "end": 8140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8140,
    "end": 8141
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8141,
    "end": 8147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8148,
    "end": 8155
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 8156,
    "end": 8175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8176,
    "end": 8177
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8178,
    "end": 8183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8183,
    "end": 8184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8185,
    "end": 8186
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 8187,
    "end": 8191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8191,
    "end": 8192
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 8197,
    "end": 8227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8227,
    "end": 8228
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8228,
    "end": 8234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8234,
    "end": 8235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8235,
    "end": 8236
  },
  {
    "type": "String",
    "value": "\"cat\"",
    "start": 8241,
    "end": 8246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8247,
    "end": 8248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8248,
    "end": 8249
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8250,
    "end": 8256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8257,
    "end": 8261
  },
  {
    "type": "Identifier",
    "value": "JsonLogicSubstr",
    "start": 8262,
    "end": 8277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8277,
    "end": 8278
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8278,
    "end": 8284
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8285,
    "end": 8292
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 8293,
    "end": 8312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8313,
    "end": 8314
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8315,
    "end": 8320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8320,
    "end": 8321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8322,
    "end": 8323
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 8324,
    "end": 8328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8328,
    "end": 8329
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 8334,
    "end": 8364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8364,
    "end": 8365
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8365,
    "end": 8371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8371,
    "end": 8372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8372,
    "end": 8373
  },
  {
    "type": "String",
    "value": "\"substr\"",
    "start": 8378,
    "end": 8386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8387,
    "end": 8388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8388,
    "end": 8389
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8390,
    "end": 8396
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8397,
    "end": 8401
  },
  {
    "type": "Identifier",
    "value": "JsonLogicLog",
    "start": 8402,
    "end": 8414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8414,
    "end": 8415
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8415,
    "end": 8421
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8422,
    "end": 8429
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 8430,
    "end": 8449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8450,
    "end": 8451
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8452,
    "end": 8457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8457,
    "end": 8458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8459,
    "end": 8460
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 8461,
    "end": 8465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8465,
    "end": 8466
  },
  {
    "type": "Identifier",
    "value": "AllReservedOperationsInterface",
    "start": 8471,
    "end": 8501
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8501,
    "end": 8502
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8502,
    "end": 8508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8508,
    "end": 8509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8509,
    "end": 8510
  },
  {
    "type": "String",
    "value": "\"log\"",
    "start": 8515,
    "end": 8520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8521,
    "end": 8522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8522,
    "end": 8523
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8525,
    "end": 8531
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8532,
    "end": 8536
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 8537,
    "end": 8547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8547,
    "end": 8548
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8548,
    "end": 8554
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8555,
    "end": 8562
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 8563,
    "end": 8582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8583,
    "end": 8584
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8585,
    "end": 8590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8590,
    "end": 8591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8592,
    "end": 8593
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8598,
    "end": 8599
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8600,
    "end": 8607
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8612,
    "end": 8613
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8614,
    "end": 8620
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8625,
    "end": 8626
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8627,
    "end": 8633
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8638,
    "end": 8639
  },
  {
    "type": "Null",
    "value": "null",
    "start": 8640,
    "end": 8644
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8726,
    "end": 8727
  },
  {
    "type": "Identifier",
    "value": "JsonLogicVar",
    "start": 8728,
    "end": 8740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8740,
    "end": 8741
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8741,
    "end": 8747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8747,
    "end": 8748
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8753,
    "end": 8754
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMissing",
    "start": 8755,
    "end": 8771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8771,
    "end": 8772
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8772,
    "end": 8778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8778,
    "end": 8779
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8784,
    "end": 8785
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMissingSome",
    "start": 8786,
    "end": 8806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8806,
    "end": 8807
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 8807,
    "end": 8813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8813,
    "end": 8814
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8924,
    "end": 8925
  },
  {
    "type": "Identifier",
    "value": "JsonLogicIf",
    "start": 8926,
    "end": 8937
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8942,
    "end": 8943
  },
  {
    "type": "Identifier",
    "value": "JsonLogicEqual",
    "start": 8944,
    "end": 8958
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8963,
    "end": 8964
  },
  {
    "type": "Identifier",
    "value": "JsonLogicStrictEqual",
    "start": 8965,
    "end": 8985
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8990,
    "end": 8991
  },
  {
    "type": "Identifier",
    "value": "JsonLogicNotEqual",
    "start": 8992,
    "end": 9009
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9014,
    "end": 9015
  },
  {
    "type": "Identifier",
    "value": "JsonLogicStrictNotEqual",
    "start": 9016,
    "end": 9039
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9044,
    "end": 9045
  },
  {
    "type": "Identifier",
    "value": "JsonLogicNegation",
    "start": 9046,
    "end": 9063
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9068,
    "end": 9069
  },
  {
    "type": "Identifier",
    "value": "JsonLogicDoubleNegation",
    "start": 9070,
    "end": 9093
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9098,
    "end": 9099
  },
  {
    "type": "Identifier",
    "value": "JsonLogicOr",
    "start": 9100,
    "end": 9111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9111,
    "end": 9112
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9112,
    "end": 9118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9118,
    "end": 9119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9124,
    "end": 9125
  },
  {
    "type": "Identifier",
    "value": "JsonLogicAnd",
    "start": 9126,
    "end": 9138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9138,
    "end": 9139
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9139,
    "end": 9145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9145,
    "end": 9146
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9236,
    "end": 9237
  },
  {
    "type": "Identifier",
    "value": "JsonLogicGreaterThan",
    "start": 9238,
    "end": 9258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9258,
    "end": 9259
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9259,
    "end": 9265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9265,
    "end": 9266
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9271,
    "end": 9272
  },
  {
    "type": "Identifier",
    "value": "JsonLogicGreaterThanOrEqual",
    "start": 9273,
    "end": 9300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9300,
    "end": 9301
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9301,
    "end": 9307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9307,
    "end": 9308
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9313,
    "end": 9314
  },
  {
    "type": "Identifier",
    "value": "JsonLogicLessThan",
    "start": 9315,
    "end": 9332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9332,
    "end": 9333
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9333,
    "end": 9339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9339,
    "end": 9340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9345,
    "end": 9346
  },
  {
    "type": "Identifier",
    "value": "JsonLogicLessThanOrEqual",
    "start": 9347,
    "end": 9371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9371,
    "end": 9372
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9372,
    "end": 9378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9378,
    "end": 9379
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9384,
    "end": 9385
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMax",
    "start": 9386,
    "end": 9398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9398,
    "end": 9399
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9399,
    "end": 9405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9405,
    "end": 9406
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9411,
    "end": 9412
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMin",
    "start": 9413,
    "end": 9425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9425,
    "end": 9426
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9426,
    "end": 9432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9432,
    "end": 9433
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9438,
    "end": 9439
  },
  {
    "type": "Identifier",
    "value": "JsonLogicSum",
    "start": 9440,
    "end": 9452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9452,
    "end": 9453
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9453,
    "end": 9459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9459,
    "end": 9460
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9465,
    "end": 9466
  },
  {
    "type": "Identifier",
    "value": "JsonLogicDifference",
    "start": 9467,
    "end": 9486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9486,
    "end": 9487
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9487,
    "end": 9493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9493,
    "end": 9494
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9499,
    "end": 9500
  },
  {
    "type": "Identifier",
    "value": "JsonLogicProduct",
    "start": 9501,
    "end": 9517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9517,
    "end": 9518
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9518,
    "end": 9524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9524,
    "end": 9525
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9530,
    "end": 9531
  },
  {
    "type": "Identifier",
    "value": "JsonLogicQuotient",
    "start": 9532,
    "end": 9549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9549,
    "end": 9550
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9550,
    "end": 9556
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9556,
    "end": 9557
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9562,
    "end": 9563
  },
  {
    "type": "Identifier",
    "value": "JsonLogicRemainder",
    "start": 9564,
    "end": 9582
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9582,
    "end": 9583
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9583,
    "end": 9589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9589,
    "end": 9590
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9676,
    "end": 9677
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMap",
    "start": 9678,
    "end": 9690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9690,
    "end": 9691
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9691,
    "end": 9697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9697,
    "end": 9698
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9703,
    "end": 9704
  },
  {
    "type": "Identifier",
    "value": "JsonLogicFilter",
    "start": 9705,
    "end": 9720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9720,
    "end": 9721
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9721,
    "end": 9727
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9727,
    "end": 9728
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9733,
    "end": 9734
  },
  {
    "type": "Identifier",
    "value": "JsonLogicReduce",
    "start": 9735,
    "end": 9750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9750,
    "end": 9751
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9751,
    "end": 9757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9757,
    "end": 9758
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9763,
    "end": 9764
  },
  {
    "type": "Identifier",
    "value": "JsonLogicAll",
    "start": 9765,
    "end": 9777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9777,
    "end": 9778
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9778,
    "end": 9784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9784,
    "end": 9785
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9790,
    "end": 9791
  },
  {
    "type": "Identifier",
    "value": "JsonLogicNone",
    "start": 9792,
    "end": 9805
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9805,
    "end": 9806
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9806,
    "end": 9812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9812,
    "end": 9813
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9818,
    "end": 9819
  },
  {
    "type": "Identifier",
    "value": "JsonLogicSome",
    "start": 9820,
    "end": 9833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9833,
    "end": 9834
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9834,
    "end": 9840
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9840,
    "end": 9841
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9846,
    "end": 9847
  },
  {
    "type": "Identifier",
    "value": "JsonLogicMerge",
    "start": 9848,
    "end": 9862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9862,
    "end": 9863
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9863,
    "end": 9869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9869,
    "end": 9870
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9875,
    "end": 9876
  },
  {
    "type": "Identifier",
    "value": "JsonLogicInArray",
    "start": 9877,
    "end": 9893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9893,
    "end": 9894
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 9894,
    "end": 9900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9900,
    "end": 9901
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9989,
    "end": 9990
  },
  {
    "type": "Identifier",
    "value": "JsonLogicInString",
    "start": 9991,
    "end": 10008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10008,
    "end": 10009
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 10009,
    "end": 10015
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10015,
    "end": 10016
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10021,
    "end": 10022
  },
  {
    "type": "Identifier",
    "value": "JsonLogicCat",
    "start": 10023,
    "end": 10035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10035,
    "end": 10036
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 10036,
    "end": 10042
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10042,
    "end": 10043
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10048,
    "end": 10049
  },
  {
    "type": "Identifier",
    "value": "JsonLogicSubstr",
    "start": 10050,
    "end": 10065
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10065,
    "end": 10066
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 10066,
    "end": 10072
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10072,
    "end": 10073
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10153,
    "end": 10154
  },
  {
    "type": "Identifier",
    "value": "JsonLogicLog",
    "start": 10155,
    "end": 10167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10167,
    "end": 10168
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 10168,
    "end": 10174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10174,
    "end": 10175
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10248,
    "end": 10249
  },
  {
    "type": "Identifier",
    "value": "AddOps",
    "start": 10250,
    "end": 10256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10256,
    "end": 10257
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10259,
    "end": 10265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10266,
    "end": 10274
  },
  {
    "type": "Identifier",
    "value": "add_operation",
    "start": 10275,
    "end": 10288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10288,
    "end": 10289
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 10289,
    "end": 10293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10293,
    "end": 10294
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10295,
    "end": 10301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10301,
    "end": 10302
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 10303,
    "end": 10307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10307,
    "end": 10308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10309,
    "end": 10310
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 10310,
    "end": 10313
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 10313,
    "end": 10317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10317,
    "end": 10318
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10319,
    "end": 10322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10322,
    "end": 10323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10323,
    "end": 10324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10324,
    "end": 10325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10326,
    "end": 10328
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10329,
    "end": 10332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10332,
    "end": 10333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10333,
    "end": 10334
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 10335,
    "end": 10339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10339,
    "end": 10340
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10341,
    "end": 10347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10348,
    "end": 10356
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 10357,
    "end": 10362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10362,
    "end": 10363
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 10363,
    "end": 10368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10368,
    "end": 10369
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 10370,
    "end": 10380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10380,
    "end": 10381
  },
  {
    "type": "Identifier",
    "value": "AdditionalOperation",
    "start": 10381,
    "end": 10400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10400,
    "end": 10401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10401,
    "end": 10402
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 10403,
    "end": 10407
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 10407,
    "end": 10408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10408,
    "end": 10409
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 10410,
    "end": 10417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10417,
    "end": 10418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10418,
    "end": 10419
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10420,
    "end": 10423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10423,
    "end": 10424
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10425,
    "end": 10431
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10432,
    "end": 10440
  },
  {
    "type": "Identifier",
    "value": "rm_operation",
    "start": 10441,
    "end": 10453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10453,
    "end": 10454
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 10454,
    "end": 10458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10458,
    "end": 10459
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10460,
    "end": 10466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10466,
    "end": 10467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10467,
    "end": 10468
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 10469,
    "end": 10473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10473,
    "end": 10474
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10593,
    "end": 10599
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10600,
    "end": 10608
  },
  {
    "type": "Identifier",
    "value": "is_logic",
    "start": 10609,
    "end": 10617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10617,
    "end": 10618
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 10618,
    "end": 10623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10623,
    "end": 10624
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10625,
    "end": 10628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10628,
    "end": 10629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10629,
    "end": 10630
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 10631,
    "end": 10636
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 10637,
    "end": 10639
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 10640,
    "end": 10650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10650,
    "end": 10651
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10652,
    "end": 10658
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10659,
    "end": 10667
  },
  {
    "type": "Identifier",
    "value": "truthy",
    "start": 10668,
    "end": 10674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10674,
    "end": 10675
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 10675,
    "end": 10680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10680,
    "end": 10681
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10682,
    "end": 10685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10685,
    "end": 10686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10686,
    "end": 10687
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 10688,
    "end": 10695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10695,
    "end": 10696
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10697,
    "end": 10703
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10704,
    "end": 10712
  },
  {
    "type": "Identifier",
    "value": "get_operator",
    "start": 10713,
    "end": 10725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10725,
    "end": 10726
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 10726,
    "end": 10731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10731,
    "end": 10732
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 10733,
    "end": 10739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10739,
    "end": 10740
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10740,
    "end": 10746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10746,
    "end": 10747
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10748,
    "end": 10751
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10751,
    "end": 10752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10752,
    "end": 10753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10753,
    "end": 10754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10755,
    "end": 10761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10761,
    "end": 10762
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10763,
    "end": 10769
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10770,
    "end": 10778
  },
  {
    "type": "Identifier",
    "value": "get_values",
    "start": 10779,
    "end": 10789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10789,
    "end": 10790
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 10790,
    "end": 10795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10795,
    "end": 10796
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 10797,
    "end": 10803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10803,
    "end": 10804
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10804,
    "end": 10810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10810,
    "end": 10811
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10812,
    "end": 10815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10815,
    "end": 10816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10816,
    "end": 10817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10817,
    "end": 10818
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10819,
    "end": 10822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10822,
    "end": 10823
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10824,
    "end": 10830
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10831,
    "end": 10839
  },
  {
    "type": "Identifier",
    "value": "uses_data",
    "start": 10840,
    "end": 10849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10849,
    "end": 10850
  },
  {
    "type": "Identifier",
    "value": "logic",
    "start": 10850,
    "end": 10855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10855,
    "end": 10856
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 10857,
    "end": 10863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10863,
    "end": 10864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 10864,
    "end": 10870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10870,
    "end": 10871
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10872,
    "end": 10875
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10875,
    "end": 10876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10876,
    "end": 10877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10877,
    "end": 10878
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10879,
    "end": 10882
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10882,
    "end": 10883
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10883,
    "end": 10884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10884,
    "end": 10885
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10886,
    "end": 10892
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10893,
    "end": 10901
  },
  {
    "type": "Identifier",
    "value": "rule_like",
    "start": 10902,
    "end": 10911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10911,
    "end": 10912
  },
  {
    "type": "Identifier",
    "value": "rule",
    "start": 10912,
    "end": 10916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10916,
    "end": 10917
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10918,
    "end": 10921
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10921,
    "end": 10922
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 10923,
    "end": 10930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10930,
    "end": 10931
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 10932,
    "end": 10935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10935,
    "end": 10936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10936,
    "end": 10937
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 10938,
    "end": 10945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10945,
    "end": 10946
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsonLogic",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 21
          },
          "start": 7,
          "end": 21
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./json-logic-js",
        "raw": "\"./json-logic-js\"",
        "start": 27,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StartsWithAndEndsWith",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 73
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "startsWith",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 94
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JsonLogicWithAdditionalOperations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 130
                        },
                        "typeArguments": null,
                        "start": 97,
                        "end": 130
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JsonLogicWithAdditionalOperations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 165
                        },
                        "typeArguments": null,
                        "start": 132,
                        "end": 165
                      }
                    ],
                    "start": 96,
                    "end": 166
                  },
                  "start": 94,
                  "end": 166
                },
                "accessibility": null,
                "static": false,
                "start": 84,
                "end": 166
              }
            ],
            "start": 82,
            "end": 168
          },
          {
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
                  "name": "endsWith",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 185
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JsonLogicWithAdditionalOperations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 221
                        },
                        "typeArguments": null,
                        "start": 188,
                        "end": 221
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JsonLogicWithAdditionalOperations",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 256
                        },
                        "typeArguments": null,
                        "start": 223,
                        "end": 256
                      }
                    ],
                    "start": 187,
                    "end": 257
                  },
                  "start": 185,
                  "end": 257
                },
                "accessibility": null,
                "static": false,
                "start": 177,
                "end": 257
              }
            ],
            "start": 175,
            "end": 259
          }
        ],
        "start": 80,
        "end": 259
      },
      "declare": false,
      "start": 47,
      "end": 260
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonLogicWithAdditionalOperations",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 299
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsonLogic",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 311
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "RulesLogic",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 322
          },
          "start": 302,
          "end": 322
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StartsWithAndEndsWith",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 344
              },
              "typeArguments": null,
              "start": 323,
              "end": 344
            }
          ],
          "start": 322,
          "end": 345
        },
        "start": 302,
        "end": 345
      },
      "declare": false,
      "start": 261,
      "end": 346
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
            "name": "jsonExtendedLogic",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonLogicWithAdditionalOperations",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 405
                },
                "typeArguments": null,
                "start": 372,
                "end": 405
              },
              "start": 370,
              "end": 405
            },
            "start": 353,
            "end": 405
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
                  "name": "and",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 417
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "startsWith",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 422,
                            "end": 432
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "Springfield",
                                "raw": "\"Springfield\"",
                                "start": 435,
                                "end": 448
                              },
                              {
                                "type": "Literal",
                                "value": "Spring",
                                "raw": "\"Spring\"",
                                "start": 450,
                                "end": 458
                              }
                            ],
                            "start": 434,
                            "end": 459
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 422,
                          "end": 459
                        }
                      ],
                      "start": 420,
                      "end": 461
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "endsWith",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 465,
                            "end": 473
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": "Springfield",
                                "raw": "\"Springfield\"",
                                "start": 476,
                                "end": 489
                              },
                              {
                                "type": "Literal",
                                "value": "field",
                                "raw": "\"field\"",
                                "start": 491,
                                "end": 498
                              }
                            ],
                            "start": 475,
                            "end": 499
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 465,
                          "end": 499
                        }
                      ],
                      "start": 463,
                      "end": 501
                    }
                  ],
                  "start": 419,
                  "end": 502
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 414,
                "end": 502
              }
            ],
            "start": 408,
            "end": 505
          },
          "definite": false,
          "start": 353,
          "end": 505
        }
      ],
      "declare": false,
      "start": 347,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "jsonLogic",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 516
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 522
          },
          "optional": false,
          "computed": false,
          "start": 507,
          "end": 522
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "jsonExtendedLogic",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 540
          }
        ],
        "optional": false,
        "start": 507,
        "end": 541
      },
      "directive": null,
      "start": 507,
      "end": 542
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 542
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "jsonLogic",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"./json-logic-js\"",
    "start": 27,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 47,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "StartsWithAndEndsWith",
    "start": 52,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "startsWith",
    "start": 84,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "JsonLogicWithAdditionalOperations",
    "start": 97,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "JsonLogicWithAdditionalOperations",
    "start": 132,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "endsWith",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "JsonLogicWithAdditionalOperations",
    "start": 188,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "JsonLogicWithAdditionalOperations",
    "start": 223,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 261,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "JsonLogicWithAdditionalOperations",
    "start": 266,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "jsonLogic",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "RulesLogic",
    "start": 312,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "StartsWithAndEndsWith",
    "start": 323,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "jsonExtendedLogic",
    "start": 353,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "JsonLogicWithAdditionalOperations",
    "start": 372,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "and",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "startsWith",
    "start": 422,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "String",
    "value": "\"Springfield\"",
    "start": 435,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "String",
    "value": "\"Spring\"",
    "start": 450,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "endsWith",
    "start": 465,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "String",
    "value": "\"Springfield\"",
    "start": 476,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490
  },
  {
    "type": "String",
    "value": "\"field\"",
    "start": 491,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "jsonLogic",
    "start": 507,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 517,
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
    "value": "jsonExtendedLogic",
    "start": 523,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  }
]
```
