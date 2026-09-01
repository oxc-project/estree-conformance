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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 32
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 33,
              "end": 40
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 40
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "public1",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 66
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 67,
                "end": 74
              },
              "abstract": false,
              "declare": false,
              "start": 53,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 46,
            "end": 74
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 92
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
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 123
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 124,
                      "end": 135
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 110,
                    "end": 135
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 103,
                  "end": 135
                }
              ],
              "start": 93,
              "end": 141
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 80,
            "end": 141
          },
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
                "start": 160,
                "end": 161
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
                      "name": "foo1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 214
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 226
                          },
                          "typeArguments": null,
                          "start": 218,
                          "end": 226
                        },
                        "start": 216,
                        "end": 226
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 241,
                            "end": 248
                          }
                        ],
                        "start": 227,
                        "end": 258
                      },
                      "expression": false,
                      "start": 214,
                      "end": 258
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 206,
                    "end": 258
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 313
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 341,
                                "end": 349
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 337,
                              "end": 351
                            },
                            "start": 330,
                            "end": 352
                          }
                        ],
                        "start": 316,
                        "end": 362
                      },
                      "expression": false,
                      "start": 313,
                      "end": 362
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 305,
                    "end": 362
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 414
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 422,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 422,
                              "end": 430
                            },
                            "start": 420,
                            "end": 430
                          },
                          "start": 415,
                          "end": 430
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 432,
                        "end": 443
                      },
                      "expression": false,
                      "start": 414,
                      "end": 443
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 406,
                    "end": 443
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 529
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 557,
                                "end": 565
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 553,
                              "end": 567
                            },
                            "start": 546,
                            "end": 568
                          }
                        ],
                        "start": 532,
                        "end": 578
                      },
                      "expression": false,
                      "start": 529,
                      "end": 578
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 521,
                    "end": 578
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 591,
                      "end": 595
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 603,
                                "end": 611
                              },
                              "typeArguments": null,
                              "start": 603,
                              "end": 611
                            },
                            "start": 601,
                            "end": 611
                          },
                          "start": 596,
                          "end": 611
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 613,
                        "end": 624
                      },
                      "expression": false,
                      "start": 595,
                      "end": 624
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 587,
                    "end": 624
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 676
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 680,
                            "end": 688
                          },
                          "typeArguments": null,
                          "start": 680,
                          "end": 688
                        },
                        "start": 678,
                        "end": 688
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 703,
                            "end": 710
                          }
                        ],
                        "start": 689,
                        "end": 720
                      },
                      "expression": false,
                      "start": 676,
                      "end": 720
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 668,
                    "end": 720
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 733,
                      "end": 737
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "private1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 745,
                                "end": 753
                              },
                              "typeArguments": null,
                              "start": 745,
                              "end": 753
                            },
                            "start": 743,
                            "end": 753
                          },
                          "start": 738,
                          "end": 753
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 755,
                        "end": 766
                      },
                      "expression": false,
                      "start": 737,
                      "end": 766
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 729,
                    "end": 766
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 814,
                      "end": 819
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "public1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 823,
                            "end": 830
                          },
                          "typeArguments": null,
                          "start": 823,
                          "end": 830
                        },
                        "start": 821,
                        "end": 830
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 845,
                            "end": 852
                          }
                        ],
                        "start": 831,
                        "end": 862
                      },
                      "expression": false,
                      "start": 819,
                      "end": 862
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 810,
                    "end": 862
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 918
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 946,
                                "end": 953
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 942,
                              "end": 955
                            },
                            "start": 935,
                            "end": 956
                          }
                        ],
                        "start": 921,
                        "end": 966
                      },
                      "expression": false,
                      "start": 918,
                      "end": 966
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 909,
                    "end": 966
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo13",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1014,
                      "end": 1019
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1027,
                                "end": 1034
                              },
                              "typeArguments": null,
                              "start": 1027,
                              "end": 1034
                            },
                            "start": 1025,
                            "end": 1034
                          },
                          "start": 1020,
                          "end": 1034
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1036,
                        "end": 1047
                      },
                      "expression": false,
                      "start": 1019,
                      "end": 1047
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1010,
                    "end": 1047
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo14",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1129,
                      "end": 1134
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1162,
                                "end": 1169
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1158,
                              "end": 1171
                            },
                            "start": 1151,
                            "end": 1172
                          }
                        ],
                        "start": 1137,
                        "end": 1182
                      },
                      "expression": false,
                      "start": 1134,
                      "end": 1182
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1125,
                    "end": 1182
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo14",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1195,
                      "end": 1200
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1208,
                                "end": 1215
                              },
                              "typeArguments": null,
                              "start": 1208,
                              "end": 1215
                            },
                            "start": 1206,
                            "end": 1215
                          },
                          "start": 1201,
                          "end": 1215
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1217,
                        "end": 1228
                      },
                      "expression": false,
                      "start": 1200,
                      "end": 1228
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1191,
                    "end": 1228
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1276,
                      "end": 1281
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "public1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1285,
                            "end": 1292
                          },
                          "typeArguments": null,
                          "start": 1285,
                          "end": 1292
                        },
                        "start": 1283,
                        "end": 1292
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1307,
                            "end": 1314
                          }
                        ],
                        "start": 1293,
                        "end": 1324
                      },
                      "expression": false,
                      "start": 1281,
                      "end": 1324
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1272,
                    "end": 1324
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1337,
                      "end": 1342
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
                          "name": "param",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1350,
                                "end": 1357
                              },
                              "typeArguments": null,
                              "start": 1350,
                              "end": 1357
                            },
                            "start": 1348,
                            "end": 1357
                          },
                          "start": 1343,
                          "end": 1357
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1359,
                        "end": 1370
                      },
                      "expression": false,
                      "start": 1342,
                      "end": 1370
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1333,
                    "end": 1370
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo111",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1418,
                      "end": 1424
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1428,
                              "end": 1430
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1431,
                              "end": 1438
                            },
                            "start": 1428,
                            "end": 1438
                          },
                          "typeArguments": null,
                          "start": 1428,
                          "end": 1438
                        },
                        "start": 1426,
                        "end": 1438
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1453,
                            "end": 1460
                          }
                        ],
                        "start": 1439,
                        "end": 1470
                      },
                      "expression": false,
                      "start": 1424,
                      "end": 1470
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1414,
                    "end": 1470
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo112",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1521,
                      "end": 1527
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1555,
                                  "end": 1557
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1558,
                                  "end": 1565
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1555,
                                "end": 1565
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1551,
                              "end": 1567
                            },
                            "start": 1544,
                            "end": 1568
                          }
                        ],
                        "start": 1530,
                        "end": 1578
                      },
                      "expression": false,
                      "start": 1527,
                      "end": 1578
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1517,
                    "end": 1578
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo113",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1626,
                      "end": 1632
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
                          "name": "param",
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
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1640,
                                  "end": 1642
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1643,
                                  "end": 1650
                                },
                                "start": 1640,
                                "end": 1650
                              },
                              "typeArguments": null,
                              "start": 1640,
                              "end": 1650
                            },
                            "start": 1638,
                            "end": 1650
                          },
                          "start": 1633,
                          "end": 1650
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1652,
                        "end": 1663
                      },
                      "expression": false,
                      "start": 1632,
                      "end": 1663
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1622,
                    "end": 1663
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo114",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1745,
                      "end": 1751
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
                              "type": "NewExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1779,
                                  "end": 1781
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1782,
                                  "end": 1789
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1779,
                                "end": 1789
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1775,
                              "end": 1791
                            },
                            "start": 1768,
                            "end": 1792
                          }
                        ],
                        "start": 1754,
                        "end": 1802
                      },
                      "expression": false,
                      "start": 1751,
                      "end": 1802
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1741,
                    "end": 1802
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo114",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1815,
                      "end": 1821
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
                          "name": "param",
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
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1829,
                                  "end": 1831
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1832,
                                  "end": 1839
                                },
                                "start": 1829,
                                "end": 1839
                              },
                              "typeArguments": null,
                              "start": 1829,
                              "end": 1839
                            },
                            "start": 1827,
                            "end": 1839
                          },
                          "start": 1822,
                          "end": 1839
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1841,
                        "end": 1852
                      },
                      "expression": false,
                      "start": 1821,
                      "end": 1852
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1811,
                    "end": 1852
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo115",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1906
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1910,
                              "end": 1912
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1913,
                              "end": 1920
                            },
                            "start": 1910,
                            "end": 1920
                          },
                          "typeArguments": null,
                          "start": 1910,
                          "end": 1920
                        },
                        "start": 1908,
                        "end": 1920
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1935,
                            "end": 1942
                          }
                        ],
                        "start": 1921,
                        "end": 1952
                      },
                      "expression": false,
                      "start": 1906,
                      "end": 1952
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1896,
                    "end": 1952
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo115",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1965,
                      "end": 1971
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
                          "name": "param",
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
                                  "name": "m2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1979,
                                  "end": 1981
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "public2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1982,
                                  "end": 1989
                                },
                                "start": 1979,
                                "end": 1989
                              },
                              "typeArguments": null,
                              "start": 1979,
                              "end": 1989
                            },
                            "start": 1977,
                            "end": 1989
                          },
                          "start": 1972,
                          "end": 1989
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1991,
                        "end": 2002
                      },
                      "expression": false,
                      "start": 1971,
                      "end": 2002
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1961,
                    "end": 2002
                  }
                ],
                "start": 162,
                "end": 2008
              },
              "abstract": false,
              "declare": false,
              "start": 154,
              "end": 2008
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 2008
          }
        ],
        "start": 12,
        "end": 2010
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2010
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2010
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
    "value": "m",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
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
    "value": "public1",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 80,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 147,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 218,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 330,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 422,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "get",
    "start": 521,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 525,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 546,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 553,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 557,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 587,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 596,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 603,
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
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 668,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 672,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 680,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 703,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 729,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 733,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 738,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 745,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 810,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 814,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 823,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 845,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 909,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 913,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
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
    "value": "return",
    "start": 935,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 942,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 946,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1027,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1151,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1158,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1195,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1208,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1276,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1285,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1343,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 1350,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1414,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "foo111",
    "start": 1418,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1431,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1453,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "foo112",
    "start": 1521,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1555,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1558,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "foo113",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1633,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1640,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1643,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1741,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "foo114",
    "start": 1745,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1768,
    "end": 1774
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1779,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1782,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1811,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "foo114",
    "start": 1815,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1822,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1829,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "public2",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1896,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "foo115",
    "start": 1900,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1910,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1913,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1961,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "foo115",
    "start": 1965,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1972,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1979,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "public2",
    "start": 1982,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2009,
    "end": 2010
  }
]
```
