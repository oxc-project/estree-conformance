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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 231
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "CompilerDiagnostics",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 274
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "debug",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 301
                          },
                          "init": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 304,
                            "end": 309
                          },
                          "definite": false,
                          "start": 296,
                          "end": 309
                        }
                      ],
                      "declare": false,
                      "start": 292,
                      "end": 310
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 285,
                    "end": 310
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IDiagnosticWriter",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 353
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
                              "name": "Alert",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 368,
                              "end": 373
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "output",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 382,
                                    "end": 388
                                  },
                                  "start": 380,
                                  "end": 388
                                },
                                "start": 374,
                                "end": 388
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 391,
                                "end": 395
                              },
                              "start": 389,
                              "end": 395
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 368,
                            "end": 396
                          }
                        ],
                        "start": 354,
                        "end": 406
                      },
                      "declare": false,
                      "start": 326,
                      "end": 406
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 319,
                    "end": 406
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
                            "name": "diagnosticWriter",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IDiagnosticWriter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 445,
                                  "end": 462
                                },
                                "typeArguments": null,
                                "start": 445,
                                "end": 462
                              },
                              "start": 443,
                              "end": 462
                            },
                            "start": 427,
                            "end": 462
                          },
                          "init": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 465,
                            "end": 469
                          },
                          "definite": false,
                          "start": 427,
                          "end": 469
                        }
                      ],
                      "declare": false,
                      "start": 423,
                      "end": 470
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 416,
                    "end": 470
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
                            "name": "analysisPass",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 505,
                                "end": 511
                              },
                              "start": 503,
                              "end": 511
                            },
                            "start": 491,
                            "end": 511
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 514,
                            "end": 515
                          },
                          "definite": false,
                          "start": 491,
                          "end": 515
                        }
                      ],
                      "declare": false,
                      "start": 487,
                      "end": 516
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 480,
                    "end": 516
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Alert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 542,
                        "end": 547
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "output",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 556,
                              "end": 562
                            },
                            "start": 554,
                            "end": 562
                          },
                          "start": 548,
                          "end": 562
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "diagnosticWriter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 582,
                              "end": 598
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "diagnosticWriter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 618,
                                        "end": 634
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Alert",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 635,
                                        "end": 640
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 618,
                                      "end": 640
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "output",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 641,
                                        "end": 647
                                      }
                                    ],
                                    "optional": false,
                                    "start": 618,
                                    "end": 648
                                  },
                                  "directive": null,
                                  "start": 618,
                                  "end": 649
                                }
                              ],
                              "start": 600,
                              "end": 663
                            },
                            "alternate": null,
                            "start": 578,
                            "end": 663
                          }
                        ],
                        "start": 564,
                        "end": 673
                      },
                      "expression": false,
                      "start": 533,
                      "end": 673
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 526,
                    "end": 673
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "debugPrint",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 699,
                        "end": 709
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 713,
                              "end": 719
                            },
                            "start": 711,
                            "end": 719
                          },
                          "start": 710,
                          "end": 719
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "debug",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 739,
                              "end": 744
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Alert",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 764,
                                      "end": 769
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "s",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 770,
                                        "end": 771
                                      }
                                    ],
                                    "optional": false,
                                    "start": 764,
                                    "end": 772
                                  },
                                  "directive": null,
                                  "start": 764,
                                  "end": 773
                                }
                              ],
                              "start": 746,
                              "end": 787
                            },
                            "alternate": null,
                            "start": 735,
                            "end": 787
                          }
                        ],
                        "start": 721,
                        "end": 797
                      },
                      "expression": false,
                      "start": 690,
                      "end": 797
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 683,
                    "end": 797
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 829
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "condition",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 841,
                              "end": 848
                            },
                            "start": 839,
                            "end": 848
                          },
                          "start": 830,
                          "end": 848
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 853,
                              "end": 859
                            },
                            "start": 851,
                            "end": 859
                          },
                          "start": 850,
                          "end": 859
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "debug",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 879,
                              "end": 884
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "condition",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 909,
                                      "end": 918
                                    },
                                    "prefix": true,
                                    "start": 908,
                                    "end": 918
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Alert",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 942,
                                            "end": 947
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "s",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 948,
                                              "end": 949
                                            }
                                          ],
                                          "optional": false,
                                          "start": 942,
                                          "end": 950
                                        },
                                        "directive": null,
                                        "start": 942,
                                        "end": 951
                                      }
                                    ],
                                    "start": 920,
                                    "end": 969
                                  },
                                  "alternate": null,
                                  "start": 904,
                                  "end": 969
                                }
                              ],
                              "start": 886,
                              "end": 983
                            },
                            "alternate": null,
                            "start": 875,
                            "end": 983
                          }
                        ],
                        "start": 861,
                        "end": 993
                      },
                      "expression": false,
                      "start": 814,
                      "end": 993
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 807,
                    "end": 993
                  }
                ],
                "start": 275,
                "end": 1000
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 245,
              "end": 1000
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 238,
            "end": 1000
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ILogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1030
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
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1041,
                      "end": 1052
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1056,
                        "end": 1063
                      },
                      "start": 1054,
                      "end": 1063
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1041,
                    "end": 1064
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1073,
                      "end": 1078
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1082,
                        "end": 1089
                      },
                      "start": 1080,
                      "end": 1089
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1073,
                    "end": 1090
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1099,
                      "end": 1106
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1110,
                        "end": 1117
                      },
                      "start": 1108,
                      "end": 1117
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1099,
                    "end": 1118
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1127,
                      "end": 1132
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1136,
                        "end": 1143
                      },
                      "start": 1134,
                      "end": 1143
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1127,
                    "end": 1144
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1158
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1162,
                        "end": 1169
                      },
                      "start": 1160,
                      "end": 1169
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1153,
                    "end": 1170
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1182
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1186,
                            "end": 1192
                          },
                          "start": 1184,
                          "end": 1192
                        },
                        "start": 1183,
                        "end": 1192
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1195,
                        "end": 1199
                      },
                      "start": 1193,
                      "end": 1199
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1179,
                    "end": 1200
                  }
                ],
                "start": 1031,
                "end": 1206
              },
              "declare": false,
              "start": 1013,
              "end": 1206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1006,
            "end": 1206
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NullLogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 1225,
                "end": 1235
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
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1254
                  },
                  "typeArguments": null,
                  "start": 1247,
                  "end": 1254
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1272,
                      "end": 1283
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
                          "type": "TSBooleanKeyword",
                          "start": 1287,
                          "end": 1294
                        },
                        "start": 1285,
                        "end": 1294
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1304,
                              "end": 1309
                            },
                            "start": 1297,
                            "end": 1310
                          }
                        ],
                        "start": 1295,
                        "end": 1312
                      },
                      "expression": false,
                      "start": 1283,
                      "end": 1312
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1265,
                    "end": 1312
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1328,
                      "end": 1333
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
                          "type": "TSBooleanKeyword",
                          "start": 1337,
                          "end": 1344
                        },
                        "start": 1335,
                        "end": 1344
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1354,
                              "end": 1359
                            },
                            "start": 1347,
                            "end": 1360
                          }
                        ],
                        "start": 1345,
                        "end": 1362
                      },
                      "expression": false,
                      "start": 1333,
                      "end": 1362
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1321,
                    "end": 1362
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1378,
                      "end": 1385
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
                          "type": "TSBooleanKeyword",
                          "start": 1389,
                          "end": 1396
                        },
                        "start": 1387,
                        "end": 1396
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1406,
                              "end": 1411
                            },
                            "start": 1399,
                            "end": 1412
                          }
                        ],
                        "start": 1397,
                        "end": 1414
                      },
                      "expression": false,
                      "start": 1385,
                      "end": 1414
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1371,
                    "end": 1414
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1430,
                      "end": 1435
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
                          "type": "TSBooleanKeyword",
                          "start": 1439,
                          "end": 1446
                        },
                        "start": 1437,
                        "end": 1446
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1456,
                              "end": 1461
                            },
                            "start": 1449,
                            "end": 1462
                          }
                        ],
                        "start": 1447,
                        "end": 1464
                      },
                      "expression": false,
                      "start": 1435,
                      "end": 1464
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1423,
                    "end": 1464
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1480,
                      "end": 1485
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
                          "type": "TSBooleanKeyword",
                          "start": 1489,
                          "end": 1496
                        },
                        "start": 1487,
                        "end": 1496
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 1506,
                              "end": 1511
                            },
                            "start": 1499,
                            "end": 1512
                          }
                        ],
                        "start": 1497,
                        "end": 1514
                      },
                      "expression": false,
                      "start": 1485,
                      "end": 1514
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1473,
                    "end": 1514
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1530,
                      "end": 1533
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1537,
                              "end": 1543
                            },
                            "start": 1535,
                            "end": 1543
                          },
                          "start": 1534,
                          "end": 1543
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1546,
                          "end": 1550
                        },
                        "start": 1544,
                        "end": 1550
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1551,
                        "end": 1562
                      },
                      "expression": false,
                      "start": 1533,
                      "end": 1562
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1523,
                    "end": 1562
                  }
                ],
                "start": 1255,
                "end": 1568
              },
              "abstract": false,
              "declare": false,
              "start": 1219,
              "end": 1568
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1212,
            "end": 1568
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LoggerAdapter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1587,
                "end": 1600
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
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1612,
                    "end": 1619
                  },
                  "typeArguments": null,
                  "start": 1612,
                  "end": 1619
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1638,
                      "end": 1650
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1652,
                        "end": 1659
                      },
                      "start": 1650,
                      "end": 1659
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1630,
                    "end": 1660
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1677,
                      "end": 1683
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1685,
                        "end": 1692
                      },
                      "start": 1683,
                      "end": 1692
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1669,
                    "end": 1693
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1710,
                      "end": 1718
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1720,
                        "end": 1727
                      },
                      "start": 1718,
                      "end": 1727
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1702,
                    "end": 1728
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1745,
                      "end": 1751
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1753,
                        "end": 1760
                      },
                      "start": 1751,
                      "end": 1760
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1737,
                    "end": 1761
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1778,
                      "end": 1784
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1786,
                        "end": 1793
                      },
                      "start": 1784,
                      "end": 1793
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1770,
                    "end": 1794
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
                      "start": 1804,
                      "end": 1815
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
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "logger",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ILogger",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1832,
                                  "end": 1839
                                },
                                "typeArguments": null,
                                "start": 1832,
                                "end": 1839
                              },
                              "start": 1830,
                              "end": 1839
                            },
                            "start": 1824,
                            "end": 1839
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1817,
                          "end": 1839
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1856,
                                  "end": 1860
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_information",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1861,
                                  "end": 1873
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1856,
                                "end": 1873
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1876,
                                      "end": 1880
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1881,
                                      "end": 1887
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1876,
                                    "end": 1887
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "information",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1888,
                                    "end": 1899
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1876,
                                  "end": 1899
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 1876,
                                "end": 1901
                              },
                              "start": 1856,
                              "end": 1901
                            },
                            "directive": null,
                            "start": 1856,
                            "end": 1902
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1915,
                                  "end": 1919
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_debug",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1920,
                                  "end": 1926
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1915,
                                "end": 1926
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1929,
                                      "end": 1933
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1934,
                                      "end": 1940
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1929,
                                    "end": 1940
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "debug",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1941,
                                    "end": 1946
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1929,
                                  "end": 1946
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 1929,
                                "end": 1948
                              },
                              "start": 1915,
                              "end": 1948
                            },
                            "directive": null,
                            "start": 1915,
                            "end": 1949
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1962,
                                  "end": 1966
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_warning",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1967,
                                  "end": 1975
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1962,
                                "end": 1975
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1978,
                                      "end": 1982
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1983,
                                      "end": 1989
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1978,
                                    "end": 1989
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "warning",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1990,
                                    "end": 1997
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1978,
                                  "end": 1997
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 1978,
                                "end": 1999
                              },
                              "start": 1962,
                              "end": 1999
                            },
                            "directive": null,
                            "start": 1962,
                            "end": 2000
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2013,
                                  "end": 2017
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2018,
                                  "end": 2024
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2013,
                                "end": 2024
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2027,
                                      "end": 2031
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2032,
                                      "end": 2038
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2027,
                                    "end": 2038
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2039,
                                    "end": 2044
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2027,
                                  "end": 2044
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 2027,
                                "end": 2046
                              },
                              "start": 2013,
                              "end": 2046
                            },
                            "directive": null,
                            "start": 2013,
                            "end": 2047
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2060,
                                  "end": 2064
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_fatal",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2065,
                                  "end": 2071
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2060,
                                "end": 2071
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2074,
                                      "end": 2078
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "logger",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2079,
                                      "end": 2085
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2074,
                                    "end": 2085
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fatal",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2086,
                                    "end": 2091
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2074,
                                  "end": 2091
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 2074,
                                "end": 2093
                              },
                              "start": 2060,
                              "end": 2093
                            },
                            "directive": null,
                            "start": 2060,
                            "end": 2094
                          }
                        ],
                        "start": 1841,
                        "end": 2104
                      },
                      "expression": false,
                      "start": 1816,
                      "end": 2104
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1804,
                    "end": 2104
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2122,
                      "end": 2133
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
                          "type": "TSBooleanKeyword",
                          "start": 2137,
                          "end": 2144
                        },
                        "start": 2135,
                        "end": 2144
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2154,
                                "end": 2158
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_information",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2159,
                                "end": 2171
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2154,
                              "end": 2171
                            },
                            "start": 2147,
                            "end": 2172
                          }
                        ],
                        "start": 2145,
                        "end": 2174
                      },
                      "expression": false,
                      "start": 2133,
                      "end": 2174
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2115,
                    "end": 2174
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2190,
                      "end": 2195
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
                          "type": "TSBooleanKeyword",
                          "start": 2199,
                          "end": 2206
                        },
                        "start": 2197,
                        "end": 2206
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2216,
                                "end": 2220
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_debug",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2221,
                                "end": 2227
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2216,
                              "end": 2227
                            },
                            "start": 2209,
                            "end": 2228
                          }
                        ],
                        "start": 2207,
                        "end": 2230
                      },
                      "expression": false,
                      "start": 2195,
                      "end": 2230
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2183,
                    "end": 2230
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2246,
                      "end": 2253
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
                          "type": "TSBooleanKeyword",
                          "start": 2257,
                          "end": 2264
                        },
                        "start": 2255,
                        "end": 2264
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2274,
                                "end": 2278
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_warning",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2279,
                                "end": 2287
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2274,
                              "end": 2287
                            },
                            "start": 2267,
                            "end": 2288
                          }
                        ],
                        "start": 2265,
                        "end": 2290
                      },
                      "expression": false,
                      "start": 2253,
                      "end": 2290
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2239,
                    "end": 2290
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2306,
                      "end": 2311
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
                          "type": "TSBooleanKeyword",
                          "start": 2315,
                          "end": 2322
                        },
                        "start": 2313,
                        "end": 2322
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2332,
                                "end": 2336
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_error",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2337,
                                "end": 2343
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2332,
                              "end": 2343
                            },
                            "start": 2325,
                            "end": 2344
                          }
                        ],
                        "start": 2323,
                        "end": 2346
                      },
                      "expression": false,
                      "start": 2311,
                      "end": 2346
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2299,
                    "end": 2346
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2362,
                      "end": 2367
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
                          "type": "TSBooleanKeyword",
                          "start": 2371,
                          "end": 2378
                        },
                        "start": 2369,
                        "end": 2378
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2388,
                                "end": 2392
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_fatal",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2393,
                                "end": 2399
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2388,
                              "end": 2399
                            },
                            "start": 2381,
                            "end": 2400
                          }
                        ],
                        "start": 2379,
                        "end": 2402
                      },
                      "expression": false,
                      "start": 2367,
                      "end": 2402
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2355,
                    "end": 2402
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2418,
                      "end": 2421
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2425,
                              "end": 2431
                            },
                            "start": 2423,
                            "end": 2431
                          },
                          "start": 2422,
                          "end": 2431
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2434,
                          "end": 2438
                        },
                        "start": 2432,
                        "end": 2438
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2453,
                                    "end": 2457
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "logger",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2458,
                                    "end": 2464
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2453,
                                  "end": 2464
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2465,
                                  "end": 2468
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2453,
                                "end": 2468
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2469,
                                  "end": 2470
                                }
                              ],
                              "optional": false,
                              "start": 2453,
                              "end": 2471
                            },
                            "directive": null,
                            "start": 2453,
                            "end": 2472
                          }
                        ],
                        "start": 2439,
                        "end": 2482
                      },
                      "expression": false,
                      "start": 2421,
                      "end": 2482
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2411,
                    "end": 2482
                  }
                ],
                "start": 1620,
                "end": 2488
              },
              "abstract": false,
              "declare": false,
              "start": 1581,
              "end": 2488
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1574,
            "end": 2488
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "BufferedLogger",
                "optional": false,
                "typeAnnotation": null,
                "start": 2507,
                "end": 2521
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
                    "name": "ILogger",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2533,
                    "end": 2540
                  },
                  "typeArguments": null,
                  "start": 2533,
                  "end": 2540
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logContents",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2558,
                      "end": 2569
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 2572,
                      "end": 2574
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 2551,
                    "end": 2575
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "information",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2592,
                      "end": 2603
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
                          "type": "TSBooleanKeyword",
                          "start": 2607,
                          "end": 2614
                        },
                        "start": 2605,
                        "end": 2614
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2624,
                              "end": 2629
                            },
                            "start": 2617,
                            "end": 2630
                          }
                        ],
                        "start": 2615,
                        "end": 2632
                      },
                      "expression": false,
                      "start": 2603,
                      "end": 2632
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2585,
                    "end": 2632
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "debug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2648,
                      "end": 2653
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
                          "type": "TSBooleanKeyword",
                          "start": 2657,
                          "end": 2664
                        },
                        "start": 2655,
                        "end": 2664
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2674,
                              "end": 2679
                            },
                            "start": 2667,
                            "end": 2680
                          }
                        ],
                        "start": 2665,
                        "end": 2682
                      },
                      "expression": false,
                      "start": 2653,
                      "end": 2682
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2641,
                    "end": 2682
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "warning",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2698,
                      "end": 2705
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
                          "type": "TSBooleanKeyword",
                          "start": 2709,
                          "end": 2716
                        },
                        "start": 2707,
                        "end": 2716
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2726,
                              "end": 2731
                            },
                            "start": 2719,
                            "end": 2732
                          }
                        ],
                        "start": 2717,
                        "end": 2734
                      },
                      "expression": false,
                      "start": 2705,
                      "end": 2734
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2691,
                    "end": 2734
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2750,
                      "end": 2755
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
                          "type": "TSBooleanKeyword",
                          "start": 2759,
                          "end": 2766
                        },
                        "start": 2757,
                        "end": 2766
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2776,
                              "end": 2781
                            },
                            "start": 2769,
                            "end": 2782
                          }
                        ],
                        "start": 2767,
                        "end": 2784
                      },
                      "expression": false,
                      "start": 2755,
                      "end": 2784
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2743,
                    "end": 2784
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fatal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2800,
                      "end": 2805
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
                          "type": "TSBooleanKeyword",
                          "start": 2809,
                          "end": 2816
                        },
                        "start": 2807,
                        "end": 2816
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2826,
                              "end": 2831
                            },
                            "start": 2819,
                            "end": 2832
                          }
                        ],
                        "start": 2817,
                        "end": 2834
                      },
                      "expression": false,
                      "start": 2805,
                      "end": 2834
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2793,
                    "end": 2834
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2850,
                      "end": 2853
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2857,
                              "end": 2863
                            },
                            "start": 2855,
                            "end": 2863
                          },
                          "start": 2854,
                          "end": 2863
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 2866,
                          "end": 2870
                        },
                        "start": 2864,
                        "end": 2870
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2885,
                                    "end": 2889
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "logContents",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2890,
                                    "end": 2901
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2885,
                                  "end": 2901
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "push",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2902,
                                  "end": 2906
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2885,
                                "end": 2906
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2907,
                                  "end": 2908
                                }
                              ],
                              "optional": false,
                              "start": 2885,
                              "end": 2909
                            },
                            "directive": null,
                            "start": 2885,
                            "end": 2910
                          }
                        ],
                        "start": 2871,
                        "end": 2920
                      },
                      "expression": false,
                      "start": 2853,
                      "end": 2920
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2843,
                    "end": 2920
                  }
                ],
                "start": 2541,
                "end": 2926
              },
              "abstract": false,
              "declare": false,
              "start": 2501,
              "end": 2926
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2494,
            "end": 2926
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "timeFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2948,
                "end": 2960
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "logger",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ILogger",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2969,
                        "end": 2976
                      },
                      "typeArguments": null,
                      "start": 2969,
                      "end": 2976
                    },
                    "start": 2967,
                    "end": 2976
                  },
                  "start": 2961,
                  "end": 2976
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "funcDescription",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2995,
                      "end": 3001
                    },
                    "start": 2993,
                    "end": 3001
                  },
                  "start": 2978,
                  "end": 3001
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 3014,
                          "end": 3017
                        },
                        "start": 3012,
                        "end": 3017
                      },
                      "start": 3009,
                      "end": 3017
                    },
                    "start": 3007,
                    "end": 3017
                  },
                  "start": 3003,
                  "end": 3017
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3020,
                  "end": 3023
                },
                "start": 3018,
                "end": 3023
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3038,
                          "end": 3043
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3051,
                              "end": 3055
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3047,
                            "end": 3057
                          },
                          "prefix": true,
                          "start": 3046,
                          "end": 3057
                        },
                        "definite": false,
                        "start": 3038,
                        "end": 3057
                      }
                    ],
                    "declare": false,
                    "start": 3034,
                    "end": 3058
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3071,
                          "end": 3077
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3080,
                            "end": 3084
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3080,
                          "end": 3086
                        },
                        "definite": false,
                        "start": 3071,
                        "end": 3086
                      }
                    ],
                    "declare": false,
                    "start": 3067,
                    "end": 3087
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
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3100,
                          "end": 3103
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3111,
                              "end": 3115
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3107,
                            "end": 3117
                          },
                          "prefix": true,
                          "start": 3106,
                          "end": 3117
                        },
                        "definite": false,
                        "start": 3100,
                        "end": 3117
                      }
                    ],
                    "declare": false,
                    "start": 3096,
                    "end": 3118
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
                          "name": "logger",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3127,
                          "end": 3133
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3134,
                          "end": 3137
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3127,
                        "end": 3137
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "funcDescription",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3138,
                                "end": 3153
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "value": " completed in ",
                                "raw": "\" completed in \"",
                                "start": 3156,
                                "end": 3172
                              },
                              "start": 3138,
                              "end": 3172
                            },
                            "operator": "+",
                            "right": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "end",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3176,
                                "end": 3179
                              },
                              "operator": "-",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "start",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3182,
                                "end": 3187
                              },
                              "start": 3176,
                              "end": 3187
                            },
                            "start": 3138,
                            "end": 3188
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": " msec",
                            "raw": "\" msec\"",
                            "start": 3191,
                            "end": 3198
                          },
                          "start": 3138,
                          "end": 3198
                        }
                      ],
                      "optional": false,
                      "start": 3127,
                      "end": 3199
                    },
                    "directive": null,
                    "start": 3127,
                    "end": 3200
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3216,
                      "end": 3222
                    },
                    "start": 3209,
                    "end": 3223
                  }
                ],
                "start": 3024,
                "end": 3229
              },
              "expression": false,
              "start": 2939,
              "end": 3229
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2932,
            "end": 3229
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "stringToLiteral",
                "optional": false,
                "typeAnnotation": null,
                "start": 3251,
                "end": 3266
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
                      "type": "TSStringKeyword",
                      "start": 3274,
                      "end": 3280
                    },
                    "start": 3272,
                    "end": 3280
                  },
                  "start": 3267,
                  "end": 3280
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3290,
                      "end": 3296
                    },
                    "start": 3288,
                    "end": 3296
                  },
                  "start": 3282,
                  "end": 3296
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3299,
                  "end": 3305
                },
                "start": 3297,
                "end": 3305
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3320,
                          "end": 3326
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 3329,
                          "end": 3331
                        },
                        "definite": false,
                        "start": 3320,
                        "end": 3331
                      }
                    ],
                    "declare": false,
                    "start": 3316,
                    "end": 3332
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
                          "name": "addChar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3346,
                          "end": 3353
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3364,
                                  "end": 3370
                                },
                                "start": 3362,
                                "end": 3370
                              },
                              "start": 3357,
                              "end": 3370
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "ch",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3393,
                                      "end": 3395
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3398,
                                          "end": 3403
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "charCodeAt",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3404,
                                          "end": 3414
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3398,
                                        "end": 3414
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "index",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3415,
                                          "end": 3420
                                        }
                                      ],
                                      "optional": false,
                                      "start": 3398,
                                      "end": 3421
                                    },
                                    "definite": false,
                                    "start": 3393,
                                    "end": 3421
                                  }
                                ],
                                "declare": false,
                                "start": 3389,
                                "end": 3422
                              },
                              {
                                "type": "SwitchStatement",
                                "discriminant": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ch",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3443,
                                  "end": 3445
                                },
                                "cases": [
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 9,
                                      "raw": "0x09",
                                      "start": 3470,
                                      "end": 3474
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3503,
                                            "end": 3509
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\t",
                                            "raw": "\"\\\\t\"",
                                            "start": 3513,
                                            "end": 3518
                                          },
                                          "start": 3503,
                                          "end": 3518
                                        },
                                        "directive": null,
                                        "start": 3503,
                                        "end": 3519
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3540,
                                        "end": 3546
                                      }
                                    ],
                                    "start": 3465,
                                    "end": 3546
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "0x0a",
                                      "start": 3568,
                                      "end": 3572
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3607,
                                            "end": 3613
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\n",
                                            "raw": "\"\\\\n\"",
                                            "start": 3617,
                                            "end": 3622
                                          },
                                          "start": 3607,
                                          "end": 3622
                                        },
                                        "directive": null,
                                        "start": 3607,
                                        "end": 3623
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3644,
                                        "end": 3650
                                      }
                                    ],
                                    "start": 3563,
                                    "end": 3650
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 11,
                                      "raw": "0x0b",
                                      "start": 3672,
                                      "end": 3676
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3714,
                                            "end": 3720
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\v",
                                            "raw": "\"\\\\v\"",
                                            "start": 3724,
                                            "end": 3729
                                          },
                                          "start": 3714,
                                          "end": 3729
                                        },
                                        "directive": null,
                                        "start": 3714,
                                        "end": 3730
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3751,
                                        "end": 3757
                                      }
                                    ],
                                    "start": 3667,
                                    "end": 3757
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 12,
                                      "raw": "0x0c",
                                      "start": 3779,
                                      "end": 3783
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3818,
                                            "end": 3824
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\f",
                                            "raw": "\"\\\\f\"",
                                            "start": 3828,
                                            "end": 3833
                                          },
                                          "start": 3818,
                                          "end": 3833
                                        },
                                        "directive": null,
                                        "start": 3818,
                                        "end": 3834
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3855,
                                        "end": 3861
                                      }
                                    ],
                                    "start": 3774,
                                    "end": 3861
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 13,
                                      "raw": "0x0d",
                                      "start": 3883,
                                      "end": 3887
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3928,
                                            "end": 3934
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\r",
                                            "raw": "\"\\\\r\"",
                                            "start": 3938,
                                            "end": 3943
                                          },
                                          "start": 3928,
                                          "end": 3943
                                        },
                                        "directive": null,
                                        "start": 3928,
                                        "end": 3944
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 3965,
                                        "end": 3971
                                      }
                                    ],
                                    "start": 3878,
                                    "end": 3971
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 34,
                                      "raw": "0x22",
                                      "start": 3993,
                                      "end": 3997
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4036,
                                            "end": 4042
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\\"",
                                            "raw": "\"\\\\\\\"\"",
                                            "start": 4046,
                                            "end": 4052
                                          },
                                          "start": 4036,
                                          "end": 4052
                                        },
                                        "directive": null,
                                        "start": 4036,
                                        "end": 4053
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 4074,
                                        "end": 4080
                                      }
                                    ],
                                    "start": 3988,
                                    "end": 4080
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 39,
                                      "raw": "0x27",
                                      "start": 4102,
                                      "end": 4106
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4144,
                                            "end": 4150
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\'",
                                            "raw": "\"\\\\\\'\"",
                                            "start": 4154,
                                            "end": 4160
                                          },
                                          "start": 4144,
                                          "end": 4160
                                        },
                                        "directive": null,
                                        "start": 4144,
                                        "end": 4161
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 4182,
                                        "end": 4188
                                      }
                                    ],
                                    "start": 4097,
                                    "end": 4188
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": 92,
                                      "raw": "0x5c",
                                      "start": 4210,
                                      "end": 4214
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4249,
                                            "end": 4255
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": "\\",
                                            "raw": "\"\\\\\"",
                                            "start": 4259,
                                            "end": 4263
                                          },
                                          "start": 4249,
                                          "end": 4263
                                        },
                                        "directive": null,
                                        "start": 4249,
                                        "end": 4264
                                      },
                                      {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "start": 4285,
                                        "end": 4291
                                      }
                                    ],
                                    "start": 4205,
                                    "end": 4291
                                  },
                                  {
                                    "type": "SwitchCase",
                                    "test": null,
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "+=",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4337,
                                            "end": 4343
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4347,
                                                "end": 4352
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "charAt",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4353,
                                                "end": 4359
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4347,
                                              "end": 4359
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "index",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4360,
                                                "end": 4365
                                              }
                                            ],
                                            "optional": false,
                                            "start": 4347,
                                            "end": 4366
                                          },
                                          "start": 4337,
                                          "end": 4366
                                        },
                                        "directive": null,
                                        "start": 4337,
                                        "end": 4367
                                      }
                                    ],
                                    "start": 4308,
                                    "end": 4367
                                  }
                                ],
                                "start": 3435,
                                "end": 4381
                              }
                            ],
                            "start": 3375,
                            "end": 4391
                          },
                          "id": null,
                          "generator": false,
                          "start": 3356,
                          "end": 4391
                        },
                        "definite": false,
                        "start": 3346,
                        "end": 4391
                      }
                    ],
                    "declare": false,
                    "start": 3342,
                    "end": 4391
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
                          "name": "tooLong",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4405,
                          "end": 4412
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4416,
                              "end": 4421
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4422,
                              "end": 4428
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4416,
                            "end": 4428
                          },
                          "operator": ">",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4431,
                            "end": 4437
                          },
                          "start": 4416,
                          "end": 4437
                        },
                        "definite": false,
                        "start": 4405,
                        "end": 4438
                      }
                    ],
                    "declare": false,
                    "start": 4401,
                    "end": 4439
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tooLong",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4452,
                      "end": 4459
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mid",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4479,
                                "end": 4482
                              },
                              "init": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4485,
                                  "end": 4491
                                },
                                "operator": ">>",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 4495,
                                  "end": 4496
                                },
                                "start": 4485,
                                "end": 4496
                              },
                              "definite": false,
                              "start": 4479,
                              "end": 4496
                            }
                          ],
                          "declare": false,
                          "start": 4475,
                          "end": 4497
                        },
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4519,
                                  "end": 4520
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 4523,
                                  "end": 4524
                                },
                                "definite": false,
                                "start": 4519,
                                "end": 4524
                              }
                            ],
                            "declare": false,
                            "start": 4515,
                            "end": 4524
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4526,
                              "end": 4527
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mid",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4530,
                              "end": 4533
                            },
                            "start": 4526,
                            "end": 4533
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4535,
                              "end": 4536
                            },
                            "start": 4535,
                            "end": 4538
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4540,
                                "end": 4547
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4548,
                                  "end": 4549
                                }
                              ],
                              "optional": false,
                              "start": 4540,
                              "end": 4550
                            },
                            "directive": null,
                            "start": 4540,
                            "end": 4551
                          },
                          "start": 4510,
                          "end": 4551
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4564,
                              "end": 4570
                            },
                            "right": {
                              "type": "Literal",
                              "value": "(...)",
                              "raw": "\"(...)\"",
                              "start": 4574,
                              "end": 4581
                            },
                            "start": 4564,
                            "end": 4581
                          },
                          "directive": null,
                          "start": 4564,
                          "end": 4582
                        },
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4604,
                                  "end": 4605
                                },
                                "init": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4608,
                                      "end": 4613
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4614,
                                      "end": 4620
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4608,
                                    "end": 4620
                                  },
                                  "operator": "-",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mid",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4623,
                                    "end": 4626
                                  },
                                  "start": 4608,
                                  "end": 4626
                                },
                                "definite": false,
                                "start": 4604,
                                "end": 4626
                              }
                            ],
                            "declare": false,
                            "start": 4600,
                            "end": 4626
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4628,
                              "end": 4629
                            },
                            "operator": "<",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4632,
                                "end": 4637
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4638,
                                "end": 4644
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4632,
                              "end": 4644
                            },
                            "start": 4628,
                            "end": 4644
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4646,
                              "end": 4647
                            },
                            "start": 4646,
                            "end": 4649
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4651,
                                "end": 4658
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4659,
                                  "end": 4660
                                }
                              ],
                              "optional": false,
                              "start": 4651,
                              "end": 4661
                            },
                            "directive": null,
                            "start": 4651,
                            "end": 4662
                          },
                          "start": 4595,
                          "end": 4662
                        }
                      ],
                      "start": 4461,
                      "end": 4672
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4700,
                              "end": 4706
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4709,
                                "end": 4714
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4715,
                                "end": 4721
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4709,
                              "end": 4721
                            },
                            "start": 4700,
                            "end": 4721
                          },
                          "directive": null,
                          "start": 4700,
                          "end": 4722
                        },
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4744,
                                  "end": 4745
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 4748,
                                  "end": 4749
                                },
                                "definite": false,
                                "start": 4744,
                                "end": 4749
                              }
                            ],
                            "declare": false,
                            "start": 4740,
                            "end": 4749
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4751,
                              "end": 4752
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4755,
                              "end": 4761
                            },
                            "start": 4751,
                            "end": 4761
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4763,
                              "end": 4764
                            },
                            "start": 4763,
                            "end": 4766
                          },
                          "body": {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addChar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4768,
                                "end": 4775
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4776,
                                  "end": 4777
                                }
                              ],
                              "optional": false,
                              "start": 4768,
                              "end": 4778
                            },
                            "directive": null,
                            "start": 4768,
                            "end": 4779
                          },
                          "start": 4735,
                          "end": 4779
                        }
                      ],
                      "start": 4686,
                      "end": 4789
                    },
                    "start": 4448,
                    "end": 4789
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4805,
                      "end": 4811
                    },
                    "start": 4798,
                    "end": 4812
                  }
                ],
                "start": 3306,
                "end": 4818
              },
              "expression": false,
              "start": 3242,
              "end": 4818
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3235,
            "end": 4818
          }
        ],
        "start": 232,
        "end": 4820
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 211,
      "end": 4820
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 211,
  "end": 4820
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "TypeScript",
    "start": 221,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 238,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 245,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "CompilerDiagnostics",
    "start": 255,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 285,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 319,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 326,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "IDiagnosticWriter",
    "start": 336,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 368,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 416,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "diagnosticWriter",
    "start": 427,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "IDiagnosticWriter",
    "start": 445,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Null",
    "value": "null",
    "start": 465,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 480,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 487,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "analysisPass",
    "start": 491,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 505,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 526,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 533,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 542,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "diagnosticWriter",
    "start": 582,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "diagnosticWriter",
    "start": 618,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 635,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "output",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 683,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 690,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "debugPrint",
    "start": 699,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 764,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 807,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 814,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 830,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 841,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 875,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 879,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 904,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 909,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "Alert",
    "start": 942,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1006,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1013,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 1023,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "information",
    "start": 1041,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1082,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "warning",
    "start": 1099,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1110,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1127,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1136,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "fatal",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1186,
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
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1212,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1219,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "NullLogger",
    "start": 1225,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1236,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 1247,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1265,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "information",
    "start": 1272,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1287,
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
    "start": 1297,
    "end": 1303
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1304,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1321,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1337,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1354,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1371,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "warning",
    "start": 1378,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1389,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1399,
    "end": 1405
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1406,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1423,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1430,
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
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1439,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1449,
    "end": 1455
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1456,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1473,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "fatal",
    "start": 1480,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1489,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1506,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1523,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1537,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1546,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1574,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1581,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "LoggerAdapter",
    "start": 1587,
    "end": 1600
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1601,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 1612,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1630,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "_information",
    "start": 1638,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1652,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1669,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "_debug",
    "start": 1677,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1685,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1702,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "_warning",
    "start": 1710,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1720,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1737,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "_error",
    "start": 1745,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1753,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1770,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "_fatal",
    "start": 1778,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1786,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1804,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1817,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 1824,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 1832,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1856,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "_information",
    "start": 1861,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1876,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 1881,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "information",
    "start": 1888,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1915,
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
    "value": "_debug",
    "start": 1920,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1929,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 1934,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 1941,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1962,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "_warning",
    "start": 1967,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1978,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 1983,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "warning",
    "start": 1990,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2013,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "_error",
    "start": 2018,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2027,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 2032,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2039,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2060,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "_fatal",
    "start": 2065,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2074,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 2079,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "fatal",
    "start": 2086,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2115,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "information",
    "start": 2122,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2134,
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
    "value": "boolean",
    "start": 2137,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2147,
    "end": 2153
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2154,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "_information",
    "start": 2159,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2183,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 2190,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2199,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2209,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2216,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "_debug",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2239,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "warning",
    "start": 2246,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2257,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2267,
    "end": 2273
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2274,
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
    "value": "_warning",
    "start": 2279,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2299,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2306,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2315,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2325,
    "end": 2331
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2332,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "_error",
    "start": 2337,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2355,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "fatal",
    "start": 2362,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2371,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2381,
    "end": 2387
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2388,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "_fatal",
    "start": 2393,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2411,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2418,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2425,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 2434,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2453,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 2458,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2494,
    "end": 2500
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2501,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "BufferedLogger",
    "start": 2507,
    "end": 2521
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2522,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 2533,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2551,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "logContents",
    "start": 2558,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2585,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "information",
    "start": 2592,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2607,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2617,
    "end": 2623
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2624,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2641,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "debug",
    "start": 2648,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2657,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2667,
    "end": 2673
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2674,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2691,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "warning",
    "start": 2698,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2709,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2719,
    "end": 2725
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2726,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2743,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2750,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2759,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2769,
    "end": 2775
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2776,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2793,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "fatal",
    "start": 2800,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2809,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2819,
    "end": 2825
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2826,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2843,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2850,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2857,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2866,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2885,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "logContents",
    "start": 2890,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2902,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2932,
    "end": 2938
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2939,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "timeFunction",
    "start": 2948,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 2961,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "ILogger",
    "start": 2969,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "funcDescription",
    "start": 2978,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2995,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 3003,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3012,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3014,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3020,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3034,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 3038,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3047,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3051,
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
    "value": "var",
    "start": 3067,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3071,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 3080,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3096,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 3100,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3107,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 3111,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "logger",
    "start": 3127,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 3134,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "funcDescription",
    "start": 3138,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "String",
    "value": "\" completed in \"",
    "start": 3156,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 3176,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 3182,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "String",
    "value": "\" msec\"",
    "start": 3191,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3209,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3216,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3235,
    "end": 3241
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3242,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "stringToLiteral",
    "start": 3251,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3267,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3274,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3282,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3290,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3299,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3316,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3320,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 3329,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3342,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "addChar",
    "start": 3346,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3357,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3364,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3372,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3389,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "ch",
    "start": 3393,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3398,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "charCodeAt",
    "start": 3404,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3415,
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
    "value": "switch",
    "start": 3435,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "ch",
    "start": 3443,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3465,
    "end": 3469
  },
  {
    "type": "Numeric",
    "value": "0x09",
    "start": 3470,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3503,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 3510,
    "end": 3512
  },
  {
    "type": "String",
    "value": "\"\\\\t\"",
    "start": 3513,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3540,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3563,
    "end": 3567
  },
  {
    "type": "Numeric",
    "value": "0x0a",
    "start": 3568,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3607,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 3614,
    "end": 3616
  },
  {
    "type": "String",
    "value": "\"\\\\n\"",
    "start": 3617,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3644,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3667,
    "end": 3671
  },
  {
    "type": "Numeric",
    "value": "0x0b",
    "start": 3672,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3714,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 3721,
    "end": 3723
  },
  {
    "type": "String",
    "value": "\"\\\\v\"",
    "start": 3724,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3729,
    "end": 3730
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3751,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3774,
    "end": 3778
  },
  {
    "type": "Numeric",
    "value": "0x0c",
    "start": 3779,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3818,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 3825,
    "end": 3827
  },
  {
    "type": "String",
    "value": "\"\\\\f\"",
    "start": 3828,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3855,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3878,
    "end": 3882
  },
  {
    "type": "Numeric",
    "value": "0x0d",
    "start": 3883,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 3928,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 3935,
    "end": 3937
  },
  {
    "type": "String",
    "value": "\"\\\\r\"",
    "start": 3938,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 3965,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3988,
    "end": 3992
  },
  {
    "type": "Numeric",
    "value": "0x22",
    "start": 3993,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 4036,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 4043,
    "end": 4045
  },
  {
    "type": "String",
    "value": "\"\\\\\\\"\"",
    "start": 4046,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4074,
    "end": 4079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4097,
    "end": 4101
  },
  {
    "type": "Numeric",
    "value": "0x27",
    "start": 4102,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4106,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 4144,
    "end": 4150
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 4151,
    "end": 4153
  },
  {
    "type": "String",
    "value": "\"\\\\\\'\"",
    "start": 4154,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4182,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4205,
    "end": 4209
  },
  {
    "type": "Numeric",
    "value": "0x5c",
    "start": 4210,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 4249,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 4256,
    "end": 4258
  },
  {
    "type": "String",
    "value": "\"\\\\\"",
    "start": 4259,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4285,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 4308,
    "end": 4315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 4337,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 4344,
    "end": 4346
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4347,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 4353,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4360,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4401,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "tooLong",
    "start": 4405,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4416,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4422,
    "end": 4428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4431,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4448,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Identifier",
    "value": "tooLong",
    "start": 4452,
    "end": 4459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4475,
    "end": 4478
  },
  {
    "type": "Identifier",
    "value": "mid",
    "start": 4479,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4485,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 4492,
    "end": 4494
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4510,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4515,
    "end": 4518
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "mid",
    "start": 4530,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4536,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "addChar",
    "start": 4540,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4549,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 4564,
    "end": 4570
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 4571,
    "end": 4573
  },
  {
    "type": "String",
    "value": "\"(...)\"",
    "start": 4574,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4595,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4599,
    "end": 4600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4600,
    "end": 4603
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4606,
    "end": 4607
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4608,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4614,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Identifier",
    "value": "mid",
    "start": 4623,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4626,
    "end": 4627
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4632,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4638,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4647,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Identifier",
    "value": "addChar",
    "start": 4651,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4671,
    "end": 4672
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4681,
    "end": 4685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4700,
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
    "value": "value",
    "start": 4709,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4714,
    "end": 4715
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4715,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4721,
    "end": 4722
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4735,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4740,
    "end": 4743
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4748,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4751,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4755,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4764,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Identifier",
    "value": "addChar",
    "start": 4768,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4798,
    "end": 4804
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 4805,
    "end": 4811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4811,
    "end": 4812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4819,
    "end": 4820
  }
]
```
