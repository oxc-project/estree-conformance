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
        "start": 602,
        "end": 606
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 610
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 614,
                "end": 621
              },
              "start": 612,
              "end": 621
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 609,
            "end": 621
          }
        ],
        "start": 607,
        "end": 623
      },
      "declare": false,
      "start": 592,
      "end": 623
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "config",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 647
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
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
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 659
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 668,
                            "end": 672
                          },
                          "typeArguments": null,
                          "start": 668,
                          "end": 672
                        },
                        "start": 665,
                        "end": 672
                      },
                      "start": 662,
                      "end": 672
                    },
                    "start": 660,
                    "end": 672
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 658,
                  "end": 672
                }
              ],
              "start": 656,
              "end": 674
            },
            "start": 654,
            "end": 674
          },
          "start": 648,
          "end": 674
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 677,
          "end": 681
        },
        "start": 675,
        "end": 681
      },
      "body": null,
      "expression": false,
      "start": 624,
      "end": 682
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Heading",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 708
                },
                "typeArguments": null,
                "start": 701,
                "end": 708
              },
              "start": 699,
              "end": 708
            },
            "start": 698,
            "end": 708
          },
          "init": null,
          "definite": false,
          "start": 698,
          "end": 708
        }
      ],
      "declare": true,
      "start": 684,
      "end": 709
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
            "name": "b",
            "optional": false,
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
                  "start": 719,
                  "end": 723
                },
                "typeArguments": null,
                "start": 719,
                "end": 723
              },
              "start": 717,
              "end": 723
            },
            "start": 716,
            "end": 723
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 727
          },
          "definite": false,
          "start": 716,
          "end": 727
        }
      ],
      "declare": false,
      "start": 710,
      "end": 728
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Heading",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 743
      },
      "typeParameters": null,
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 751
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 771,
                        "end": 777
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 780,
                                "end": 781
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "create",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 789,
                                    "end": 795
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 789,
                                  "end": 797
                                },
                                "id": null,
                                "generator": false,
                                "start": 783,
                                "end": 797
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 780,
                              "end": 797
                            }
                          ],
                          "start": 778,
                          "end": 799
                        }
                      ],
                      "optional": false,
                      "start": 771,
                      "end": 800
                    },
                    "start": 764,
                    "end": 801
                  }
                ],
                "start": 754,
                "end": 807
              },
              "expression": false,
              "start": 751,
              "end": 807
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 750,
            "end": 807
          }
        ],
        "start": 744,
        "end": 809
      },
      "abstract": false,
      "declare": false,
      "start": 730,
      "end": 809
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 834
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Heading",
            "optional": false,
            "typeAnnotation": null,
            "start": 838,
            "end": 845
          },
          "typeArguments": null,
          "start": 838,
          "end": 845
        },
        "start": 836,
        "end": 845
      },
      "body": null,
      "expression": false,
      "start": 811,
      "end": 846
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 857,
                "end": 861
              },
              "start": 855,
              "end": 861
            },
            "start": 854,
            "end": 861
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Heading",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 868,
                  "end": 875
                },
                "typeArguments": null,
                "arguments": [],
                "start": 864,
                "end": 877
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 879
              },
              "optional": false,
              "computed": false,
              "start": 864,
              "end": 879
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 864,
            "end": 881
          },
          "definite": false,
          "start": 854,
          "end": 881
        }
      ],
      "declare": false,
      "start": 848,
      "end": 882
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Parser",
        "optional": false,
        "typeAnnotation": null,
        "start": 926,
        "end": 932
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 943,
                "end": 950
              },
              "start": 941,
              "end": 950
            },
            "start": 936,
            "end": 950
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 955,
            "end": 962
          },
          "start": 952,
          "end": 962
        },
        "start": 935,
        "end": 962
      },
      "declare": false,
      "start": 921,
      "end": 963
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NullNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 982
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 998
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Null",
                  "raw": "\"Null\"",
                  "start": 1000,
                  "end": 1006
                },
                "start": 1000,
                "end": 1006
              },
              "start": 998,
              "end": 1006
            },
            "accessibility": null,
            "static": false,
            "start": 985,
            "end": 1007
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getParser",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1017
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1027
                },
                "typeArguments": null,
                "start": 1021,
                "end": 1027
              },
              "start": 1019,
              "end": 1027
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1008,
            "end": 1027
          }
        ],
        "start": 983,
        "end": 1029
      },
      "declare": false,
      "start": 964,
      "end": 1029
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UndefinedNode",
        "optional": false,
        "typeAnnotation": null,
        "start": 1040,
        "end": 1053
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Undefined",
                  "raw": "\"Undefined\"",
                  "start": 1071,
                  "end": 1082
                },
                "start": 1071,
                "end": 1082
              },
              "start": 1069,
              "end": 1082
            },
            "accessibility": null,
            "static": false,
            "start": 1056,
            "end": 1083
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getParser",
              "optional": false,
              "typeAnnotation": null,
              "start": 1084,
              "end": 1093
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1097,
                  "end": 1103
                },
                "typeArguments": null,
                "start": 1097,
                "end": 1103
              },
              "start": 1095,
              "end": 1103
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1084,
            "end": 1103
          }
        ],
        "start": 1054,
        "end": 1105
      },
      "declare": false,
      "start": 1030,
      "end": 1105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AST",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1114
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NullNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1125
            },
            "typeArguments": null,
            "start": 1117,
            "end": 1125
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UndefinedNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1141
            },
            "typeArguments": null,
            "start": 1128,
            "end": 1141
          }
        ],
        "start": 1117,
        "end": 1141
      },
      "declare": false,
      "start": 1106,
      "end": 1142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fromConst",
        "optional": false,
        "typeAnnotation": null,
        "start": 1160,
        "end": 1169
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ast",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AST",
                "optional": false,
                "typeAnnotation": null,
                "start": 1175,
                "end": 1178
              },
              "typeArguments": null,
              "start": 1175,
              "end": 1178
            },
            "start": 1173,
            "end": 1178
          },
          "start": 1170,
          "end": 1178
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1187,
              "end": 1194
            },
            "start": 1185,
            "end": 1194
          },
          "start": 1180,
          "end": 1194
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Parser",
            "optional": false,
            "typeAnnotation": null,
            "start": 1197,
            "end": 1203
          },
          "typeArguments": null,
          "start": 1197,
          "end": 1203
        },
        "start": 1195,
        "end": 1203
      },
      "body": null,
      "expression": false,
      "start": 1143,
      "end": 1204
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
            "name": "NullNode",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NullNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1232,
                      "end": 1240
                    },
                    "typeArguments": null,
                    "start": 1232,
                    "end": 1240
                  },
                  "start": 1229,
                  "end": 1240
                },
                "start": 1222,
                "end": 1240
              },
              "start": 1220,
              "end": 1240
            },
            "start": 1212,
            "end": 1240
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "_tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1268
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Literal",
                    "value": "Null",
                    "raw": "\"Null\"",
                    "start": 1271,
                    "end": 1277
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": true,
                  "accessibility": null,
                  "start": 1255,
                  "end": 1278
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getParser",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1283,
                    "end": 1292
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fromConst",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1312,
                              "end": 1321
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ThisExpression",
                                "start": 1322,
                                "end": 1326
                              },
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 1328,
                                "end": 1332
                              }
                            ],
                            "optional": false,
                            "start": 1312,
                            "end": 1333
                          },
                          "start": 1305,
                          "end": 1334
                        }
                      ],
                      "start": 1295,
                      "end": 1340
                    },
                    "expression": false,
                    "start": 1292,
                    "end": 1340
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1283,
                  "end": 1340
                }
              ],
              "start": 1249,
              "end": 1342
            },
            "abstract": false,
            "declare": false,
            "start": 1243,
            "end": 1342
          },
          "definite": false,
          "start": 1212,
          "end": 1342
        }
      ],
      "declare": false,
      "start": 1206,
      "end": 1343
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
                  "name": "Parser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1354,
                  "end": 1360
                },
                "typeArguments": null,
                "start": 1354,
                "end": 1360
              },
              "start": 1352,
              "end": 1360
            },
            "start": 1351,
            "end": 1360
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NullNode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1367,
                  "end": 1375
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1363,
                "end": 1377
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getParser",
                "optional": false,
                "typeAnnotation": null,
                "start": 1378,
                "end": 1387
              },
              "optional": false,
              "computed": false,
              "start": 1363,
              "end": 1387
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1363,
            "end": 1389
          },
          "definite": false,
          "start": 1351,
          "end": 1389
        }
      ],
      "declare": false,
      "start": 1345,
      "end": 1390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1390
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 592,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 614,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 624,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 632,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 648,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 665,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 668,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 684,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "Heading",
    "start": 701,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 719,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 730,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "Heading",
    "start": 736,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 764,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 786,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 811,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 819,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "Heading",
    "start": 838,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 848,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 864,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "Heading",
    "start": 868,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 921,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "Parser",
    "start": 926,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 936,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 943,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 952,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 955,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 964,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "NullNode",
    "start": 974,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 985,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 994,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999
  },
  {
    "type": "String",
    "value": "\"Null\"",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "getParser",
    "start": 1008,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "Parser",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1030,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "UndefinedNode",
    "start": 1040,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1056,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "String",
    "value": "\"Undefined\"",
    "start": 1071,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "getParser",
    "start": 1084,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "Parser",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1106,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "NullNode",
    "start": 1117,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "UndefinedNode",
    "start": 1128,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1143,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1151,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "fromConst",
    "start": 1160,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "ast",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "AST",
    "start": 1175,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1180,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1187,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "Parser",
    "start": 1197,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "NullNode",
    "start": 1212,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1229,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "NullNode",
    "start": 1232,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1243,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1255,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 1264,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "String",
    "value": "\"Null\"",
    "start": 1271,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "getParser",
    "start": 1283,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1305,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "fromConst",
    "start": 1312,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1322,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1328,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1345,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "Parser",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1363,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "NullNode",
    "start": 1367,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "getParser",
    "start": 1378,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  }
]
```
