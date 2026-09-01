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
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
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
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 55
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
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 81
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 82,
                          "end": 93
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 73,
                        "end": 93
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 66,
                      "end": 93
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 118,
                          "end": 120
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
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 148,
                                  "end": 150
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 144,
                                "end": 150
                              },
                              "start": 137,
                              "end": 151
                            }
                          ],
                          "start": 123,
                          "end": 161
                        },
                        "expression": false,
                        "start": 109,
                        "end": 161
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 102,
                      "end": 161
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
                              "name": "v1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 183
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 188
                            },
                            "definite": false,
                            "start": 181,
                            "end": 188
                          }
                        ],
                        "declare": false,
                        "start": 177,
                        "end": 189
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 170,
                      "end": 189
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
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 213,
                                    "end": 215
                                  },
                                  "typeArguments": null,
                                  "start": 213,
                                  "end": 215
                                },
                                "start": 211,
                                "end": 215
                              },
                              "start": 209,
                              "end": 215
                            },
                            "init": null,
                            "definite": false,
                            "start": 209,
                            "end": 215
                          }
                        ],
                        "declare": false,
                        "start": 205,
                        "end": 216
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 198,
                      "end": 216
                    }
                  ],
                  "start": 56,
                  "end": 222
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 33,
                "end": 222
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 222
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 251
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
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 277
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 278,
                        "end": 289
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 269,
                      "end": 289
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 262,
                    "end": 289
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 316
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
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 346
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 340,
                              "end": 346
                            },
                            "start": 333,
                            "end": 347
                          }
                        ],
                        "start": 319,
                        "end": 357
                      },
                      "expression": false,
                      "start": 305,
                      "end": 357
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 298,
                    "end": 357
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 377,
                            "end": 379
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 384
                          },
                          "definite": false,
                          "start": 377,
                          "end": 384
                        }
                      ],
                      "declare": false,
                      "start": 373,
                      "end": 385
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 366,
                    "end": 385
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 409,
                                  "end": 411
                                },
                                "typeArguments": null,
                                "start": 409,
                                "end": 411
                              },
                              "start": 407,
                              "end": 411
                            },
                            "start": 405,
                            "end": 411
                          },
                          "init": null,
                          "definite": false,
                          "start": 405,
                          "end": 411
                        }
                      ],
                      "declare": false,
                      "start": 401,
                      "end": 412
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 394,
                    "end": 412
                  }
                ],
                "start": 252,
                "end": 418
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 228,
              "end": 418
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 833
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 848
              },
              "importKind": "value",
              "start": 812,
              "end": 849
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
                      "name": "m1_im1_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 865,
                      "end": 889
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 892,
                        "end": 906
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 907,
                        "end": 909
                      },
                      "optional": false,
                      "computed": false,
                      "start": 892,
                      "end": 909
                    },
                    "definite": false,
                    "start": 865,
                    "end": 909
                  }
                ],
                "declare": false,
                "start": 861,
                "end": 910
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 854,
              "end": 910
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
                      "name": "m1_im1_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 926,
                      "end": 950
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 957,
                          "end": 971
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 972,
                          "end": 974
                        },
                        "optional": false,
                        "computed": false,
                        "start": 957,
                        "end": 974
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 953,
                      "end": 976
                    },
                    "definite": false,
                    "start": 926,
                    "end": 976
                  }
                ],
                "declare": false,
                "start": 922,
                "end": 977
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 915,
              "end": 977
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
                      "name": "m1_im1_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 993,
                      "end": 1017
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1034
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1035,
                        "end": 1037
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1020,
                      "end": 1037
                    },
                    "definite": false,
                    "start": 993,
                    "end": 1037
                  }
                ],
                "declare": false,
                "start": 989,
                "end": 1038
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 982,
              "end": 1038
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
                      "name": "m1_im1_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1054,
                      "end": 1078
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1095
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1096,
                          "end": 1098
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1081,
                        "end": 1098
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1081,
                      "end": 1100
                    },
                    "definite": false,
                    "start": 1054,
                    "end": 1100
                  }
                ],
                "declare": false,
                "start": 1050,
                "end": 1101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1043,
              "end": 1101
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
                    "name": "m1_im1_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1110,
                    "end": 1135
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1138,
                      "end": 1152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1155
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1138,
                    "end": 1155
                  },
                  "definite": false,
                  "start": 1110,
                  "end": 1155
                }
              ],
              "declare": false,
              "start": 1106,
              "end": 1156
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
                    "name": "m1_im1_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1165,
                    "end": 1190
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1197,
                        "end": 1211
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1212,
                        "end": 1214
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1197,
                      "end": 1214
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1193,
                    "end": 1216
                  },
                  "definite": false,
                  "start": 1165,
                  "end": 1216
                }
              ],
              "declare": false,
              "start": 1161,
              "end": 1217
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
                    "name": "m1_im1_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1226,
                    "end": 1251
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1254,
                      "end": 1268
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1269,
                      "end": 1271
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1254,
                    "end": 1271
                  },
                  "definite": false,
                  "start": 1226,
                  "end": 1271
                }
              ],
              "declare": false,
              "start": 1222,
              "end": 1272
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
                    "name": "m1_im1_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1281,
                    "end": 1306
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1309,
                        "end": 1323
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1324,
                        "end": 1326
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1309,
                      "end": 1326
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1309,
                    "end": 1328
                  },
                  "definite": false,
                  "start": 1281,
                  "end": 1328
                }
              ],
              "declare": false,
              "start": 1277,
              "end": 1329
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1343,
                "end": 1357
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1360,
                "end": 1373
              },
              "importKind": "value",
              "start": 1336,
              "end": 1374
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
                      "name": "m1_im2_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1390,
                      "end": 1414
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1432,
                        "end": 1434
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1417,
                      "end": 1434
                    },
                    "definite": false,
                    "start": 1390,
                    "end": 1434
                  }
                ],
                "declare": false,
                "start": 1386,
                "end": 1435
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1379,
              "end": 1435
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
                      "name": "m1_im2_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1451,
                      "end": 1475
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1482,
                          "end": 1496
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1499
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1482,
                        "end": 1499
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1478,
                      "end": 1501
                    },
                    "definite": false,
                    "start": 1451,
                    "end": 1501
                  }
                ],
                "declare": false,
                "start": 1447,
                "end": 1502
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1440,
              "end": 1502
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
                      "name": "m1_im2_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1518,
                      "end": 1542
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1545,
                        "end": 1559
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1560,
                        "end": 1562
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1545,
                      "end": 1562
                    },
                    "definite": false,
                    "start": 1518,
                    "end": 1562
                  }
                ],
                "declare": false,
                "start": 1514,
                "end": 1563
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1507,
              "end": 1563
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
                      "name": "m1_im2_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1579,
                      "end": 1603
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1606,
                          "end": 1620
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1621,
                          "end": 1623
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1606,
                        "end": 1623
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1606,
                      "end": 1625
                    },
                    "definite": false,
                    "start": 1579,
                    "end": 1625
                  }
                ],
                "declare": false,
                "start": 1575,
                "end": 1626
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1568,
              "end": 1626
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
                    "name": "m1_im2_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1635,
                    "end": 1660
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1663,
                      "end": 1677
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1678,
                      "end": 1680
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1663,
                    "end": 1680
                  },
                  "definite": false,
                  "start": 1635,
                  "end": 1680
                }
              ],
              "declare": false,
              "start": 1631,
              "end": 1681
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
                    "name": "m1_im2_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1690,
                    "end": 1715
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1722,
                        "end": 1736
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1737,
                        "end": 1739
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1722,
                      "end": 1739
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1718,
                    "end": 1741
                  },
                  "definite": false,
                  "start": 1690,
                  "end": 1741
                }
              ],
              "declare": false,
              "start": 1686,
              "end": 1742
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
                    "name": "m1_im2_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1751,
                    "end": 1776
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1779,
                      "end": 1793
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1794,
                      "end": 1796
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1779,
                    "end": 1796
                  },
                  "definite": false,
                  "start": 1751,
                  "end": 1796
                }
              ],
              "declare": false,
              "start": 1747,
              "end": 1797
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
                    "name": "m1_im2_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1806,
                    "end": 1831
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1834,
                        "end": 1848
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1849,
                        "end": 1851
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1834,
                      "end": 1851
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1834,
                    "end": 1853
                  },
                  "definite": false,
                  "start": 1806,
                  "end": 1853
                }
              ],
              "declare": false,
              "start": 1802,
              "end": 1854
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_im1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2979,
                  "end": 2992
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2995,
                  "end": 3007
                },
                "importKind": "value",
                "start": 2972,
                "end": 3008
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2965,
              "end": 3008
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_im2_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3027,
                  "end": 3040
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3043,
                  "end": 3056
                },
                "importKind": "value",
                "start": 3020,
                "end": 3057
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3013,
              "end": 3057
            }
          ],
          "start": 20,
          "end": 3182
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3182
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3194,
        "end": 3196
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
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3220,
                "end": 3232
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
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3256,
                        "end": 3258
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3259,
                        "end": 3270
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3250,
                      "end": 3270
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3243,
                    "end": 3270
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3295,
                        "end": 3297
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
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3325,
                                "end": 3327
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 3321,
                              "end": 3327
                            },
                            "start": 3314,
                            "end": 3328
                          }
                        ],
                        "start": 3300,
                        "end": 3338
                      },
                      "expression": false,
                      "start": 3286,
                      "end": 3338
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3279,
                    "end": 3338
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3358,
                            "end": 3360
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3363,
                            "end": 3365
                          },
                          "definite": false,
                          "start": 3358,
                          "end": 3365
                        }
                      ],
                      "declare": false,
                      "start": 3354,
                      "end": 3366
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3347,
                    "end": 3366
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3390,
                                  "end": 3392
                                },
                                "typeArguments": null,
                                "start": 3390,
                                "end": 3392
                              },
                              "start": 3388,
                              "end": 3392
                            },
                            "start": 3386,
                            "end": 3392
                          },
                          "init": null,
                          "definite": false,
                          "start": 3386,
                          "end": 3392
                        }
                      ],
                      "declare": false,
                      "start": 3382,
                      "end": 3393
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3375,
                    "end": 3393
                  }
                ],
                "start": 3233,
                "end": 3399
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 3210,
              "end": 3399
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3203,
            "end": 3399
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3415,
              "end": 3428
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
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3452,
                      "end": 3454
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3455,
                      "end": 3466
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3446,
                    "end": 3466
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3439,
                  "end": 3466
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3491,
                      "end": 3493
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
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3521,
                              "end": 3523
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3517,
                            "end": 3523
                          },
                          "start": 3510,
                          "end": 3524
                        }
                      ],
                      "start": 3496,
                      "end": 3534
                    },
                    "expression": false,
                    "start": 3482,
                    "end": 3534
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3475,
                  "end": 3534
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
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3554,
                          "end": 3556
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3559,
                          "end": 3561
                        },
                        "definite": false,
                        "start": 3554,
                        "end": 3561
                      }
                    ],
                    "declare": false,
                    "start": 3550,
                    "end": 3562
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3543,
                  "end": 3562
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
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3586,
                                "end": 3588
                              },
                              "typeArguments": null,
                              "start": 3586,
                              "end": 3588
                            },
                            "start": 3584,
                            "end": 3588
                          },
                          "start": 3582,
                          "end": 3588
                        },
                        "init": null,
                        "definite": false,
                        "start": 3582,
                        "end": 3588
                      }
                    ],
                    "declare": false,
                    "start": 3578,
                    "end": 3589
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3571,
                  "end": 3589
                }
              ],
              "start": 3429,
              "end": 3595
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3405,
            "end": 3595
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3996,
              "end": 4010
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4013,
              "end": 4025
            },
            "importKind": "value",
            "start": 3989,
            "end": 4026
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
                    "name": "m1_im1_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4042,
                    "end": 4066
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4069,
                      "end": 4083
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4084,
                      "end": 4086
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4069,
                    "end": 4086
                  },
                  "definite": false,
                  "start": 4042,
                  "end": 4086
                }
              ],
              "declare": false,
              "start": 4038,
              "end": 4087
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4031,
            "end": 4087
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
                    "name": "m1_im1_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4103,
                    "end": 4127
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4134,
                        "end": 4148
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4149,
                        "end": 4151
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4134,
                      "end": 4151
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4130,
                    "end": 4153
                  },
                  "definite": false,
                  "start": 4103,
                  "end": 4153
                }
              ],
              "declare": false,
              "start": 4099,
              "end": 4154
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4092,
            "end": 4154
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
                    "name": "m1_im1_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4170,
                    "end": 4194
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4197,
                      "end": 4211
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4212,
                      "end": 4214
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4197,
                    "end": 4214
                  },
                  "definite": false,
                  "start": 4170,
                  "end": 4214
                }
              ],
              "declare": false,
              "start": 4166,
              "end": 4215
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4159,
            "end": 4215
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
                    "name": "m1_im1_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4231,
                    "end": 4255
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4258,
                        "end": 4272
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4273,
                        "end": 4275
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4258,
                      "end": 4275
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4258,
                    "end": 4277
                  },
                  "definite": false,
                  "start": 4231,
                  "end": 4277
                }
              ],
              "declare": false,
              "start": 4227,
              "end": 4278
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4220,
            "end": 4278
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
                  "name": "m1_im1_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4287,
                  "end": 4312
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4315,
                    "end": 4329
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4330,
                    "end": 4332
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4315,
                  "end": 4332
                },
                "definite": false,
                "start": 4287,
                "end": 4332
              }
            ],
            "declare": false,
            "start": 4283,
            "end": 4333
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
                  "name": "m1_im1_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4342,
                  "end": 4367
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4374,
                      "end": 4388
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4389,
                      "end": 4391
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4374,
                    "end": 4391
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4370,
                  "end": 4393
                },
                "definite": false,
                "start": 4342,
                "end": 4393
              }
            ],
            "declare": false,
            "start": 4338,
            "end": 4394
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
                  "name": "m1_im1_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4403,
                  "end": 4428
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4431,
                    "end": 4445
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4446,
                    "end": 4448
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4431,
                  "end": 4448
                },
                "definite": false,
                "start": 4403,
                "end": 4448
              }
            ],
            "declare": false,
            "start": 4399,
            "end": 4449
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
                  "name": "m1_im1_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4458,
                  "end": 4483
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4486,
                      "end": 4500
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4501,
                      "end": 4503
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4486,
                    "end": 4503
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4486,
                  "end": 4505
                },
                "definite": false,
                "start": 4458,
                "end": 4505
              }
            ],
            "declare": false,
            "start": 4454,
            "end": 4506
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4520,
              "end": 4534
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4537,
              "end": 4550
            },
            "importKind": "value",
            "start": 4513,
            "end": 4551
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
                    "name": "m1_im2_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4567,
                    "end": 4591
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4594,
                      "end": 4608
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4609,
                      "end": 4611
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4594,
                    "end": 4611
                  },
                  "definite": false,
                  "start": 4567,
                  "end": 4611
                }
              ],
              "declare": false,
              "start": 4563,
              "end": 4612
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4556,
            "end": 4612
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
                    "name": "m1_im2_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4628,
                    "end": 4652
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4659,
                        "end": 4673
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4674,
                        "end": 4676
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4659,
                      "end": 4676
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4655,
                    "end": 4678
                  },
                  "definite": false,
                  "start": 4628,
                  "end": 4678
                }
              ],
              "declare": false,
              "start": 4624,
              "end": 4679
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4617,
            "end": 4679
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
                    "name": "m1_im2_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4695,
                    "end": 4719
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4722,
                      "end": 4736
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4737,
                      "end": 4739
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4722,
                    "end": 4739
                  },
                  "definite": false,
                  "start": 4695,
                  "end": 4739
                }
              ],
              "declare": false,
              "start": 4691,
              "end": 4740
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4684,
            "end": 4740
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
                    "name": "m1_im2_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4756,
                    "end": 4780
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4783,
                        "end": 4797
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4798,
                        "end": 4800
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4783,
                      "end": 4800
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4783,
                    "end": 4802
                  },
                  "definite": false,
                  "start": 4756,
                  "end": 4802
                }
              ],
              "declare": false,
              "start": 4752,
              "end": 4803
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4745,
            "end": 4803
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
                  "name": "m1_im2_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4812,
                  "end": 4837
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4840,
                    "end": 4854
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4855,
                    "end": 4857
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4840,
                  "end": 4857
                },
                "definite": false,
                "start": 4812,
                "end": 4857
              }
            ],
            "declare": false,
            "start": 4808,
            "end": 4858
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
                  "name": "m1_im2_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4867,
                  "end": 4892
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4899,
                      "end": 4913
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4914,
                      "end": 4916
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4899,
                    "end": 4916
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4895,
                  "end": 4918
                },
                "definite": false,
                "start": 4867,
                "end": 4918
              }
            ],
            "declare": false,
            "start": 4863,
            "end": 4919
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
                  "name": "m1_im2_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4928,
                  "end": 4953
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4956,
                    "end": 4970
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4971,
                    "end": 4973
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4956,
                  "end": 4973
                },
                "definite": false,
                "start": 4928,
                "end": 4973
              }
            ],
            "declare": false,
            "start": 4924,
            "end": 4974
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
                  "name": "m1_im2_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4983,
                  "end": 5008
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5011,
                      "end": 5025
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5026,
                      "end": 5028
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5011,
                    "end": 5028
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5011,
                  "end": 5030
                },
                "definite": false,
                "start": 4983,
                "end": 5030
              }
            ],
            "declare": false,
            "start": 4979,
            "end": 5031
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6192,
                "end": 6205
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6208,
                "end": 6220
              },
              "importKind": "value",
              "start": 6185,
              "end": 6221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6178,
            "end": 6221
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6240,
                "end": 6253
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6256,
                "end": 6269
              },
              "importKind": "value",
              "start": 6233,
              "end": 6270
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6226,
            "end": 6270
          }
        ],
        "start": 3197,
        "end": 6395
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3184,
      "end": 6395
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 6414,
          "end": 6427
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6447,
                  "end": 6449
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6450,
                  "end": 6457
                },
                "abstract": false,
                "declare": false,
                "start": 6441,
                "end": 6457
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6434,
              "end": 6457
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6478,
                  "end": 6480
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
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6504,
                          "end": 6506
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6500,
                        "end": 6506
                      },
                      "start": 6493,
                      "end": 6507
                    }
                  ],
                  "start": 6483,
                  "end": 6513
                },
                "expression": false,
                "start": 6469,
                "end": 6513
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6462,
              "end": 6513
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
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6529,
                      "end": 6531
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6534,
                      "end": 6536
                    },
                    "definite": false,
                    "start": 6529,
                    "end": 6536
                  }
                ],
                "declare": false,
                "start": 6525,
                "end": 6537
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6518,
              "end": 6537
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
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6557,
                            "end": 6559
                          },
                          "typeArguments": null,
                          "start": 6557,
                          "end": 6559
                        },
                        "start": 6555,
                        "end": 6559
                      },
                      "start": 6553,
                      "end": 6559
                    },
                    "init": null,
                    "definite": false,
                    "start": 6553,
                    "end": 6559
                  }
                ],
                "declare": false,
                "start": 6549,
                "end": 6560
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6542,
              "end": 6560
            }
          ],
          "start": 6428,
          "end": 6562
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6404,
        "end": 6562
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6397,
      "end": 6562
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 6751,
          "end": 6765
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6785,
                  "end": 6787
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6788,
                  "end": 6795
                },
                "abstract": false,
                "declare": false,
                "start": 6779,
                "end": 6795
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6772,
              "end": 6795
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6816,
                  "end": 6818
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
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6842,
                          "end": 6844
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6838,
                        "end": 6844
                      },
                      "start": 6831,
                      "end": 6845
                    }
                  ],
                  "start": 6821,
                  "end": 6851
                },
                "expression": false,
                "start": 6807,
                "end": 6851
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6800,
              "end": 6851
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
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6867,
                      "end": 6869
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6872,
                      "end": 6874
                    },
                    "definite": false,
                    "start": 6867,
                    "end": 6874
                  }
                ],
                "declare": false,
                "start": 6863,
                "end": 6875
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6856,
              "end": 6875
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
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6895,
                            "end": 6897
                          },
                          "typeArguments": null,
                          "start": 6895,
                          "end": 6897
                        },
                        "start": 6893,
                        "end": 6897
                      },
                      "start": 6891,
                      "end": 6897
                    },
                    "init": null,
                    "definite": false,
                    "start": 6891,
                    "end": 6897
                  }
                ],
                "declare": false,
                "start": 6887,
                "end": 6898
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6880,
              "end": 6898
            }
          ],
          "start": 6766,
          "end": 6900
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6741,
        "end": 6900
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6734,
      "end": 6900
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7081,
        "end": 7096
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 7099,
        "end": 7112
      },
      "importKind": "value",
      "start": 7074,
      "end": 7113
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
              "name": "glo_im1_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7125,
              "end": 7150
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7153,
                "end": 7168
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7169,
                "end": 7171
              },
              "optional": false,
              "computed": false,
              "start": 7153,
              "end": 7171
            },
            "definite": false,
            "start": 7125,
            "end": 7171
          }
        ],
        "declare": false,
        "start": 7121,
        "end": 7172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7114,
      "end": 7172
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
              "name": "glo_im1_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7184,
              "end": 7209
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7216,
                  "end": 7231
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7232,
                  "end": 7234
                },
                "optional": false,
                "computed": false,
                "start": 7216,
                "end": 7234
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7212,
              "end": 7236
            },
            "definite": false,
            "start": 7184,
            "end": 7236
          }
        ],
        "declare": false,
        "start": 7180,
        "end": 7237
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7173,
      "end": 7237
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
              "name": "glo_im1_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7249,
              "end": 7274
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7277,
                "end": 7292
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7293,
                "end": 7295
              },
              "optional": false,
              "computed": false,
              "start": 7277,
              "end": 7295
            },
            "definite": false,
            "start": 7249,
            "end": 7295
          }
        ],
        "declare": false,
        "start": 7245,
        "end": 7296
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7238,
      "end": 7296
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
              "name": "glo_im1_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7308,
              "end": 7333
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7336,
                  "end": 7351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7352,
                  "end": 7354
                },
                "optional": false,
                "computed": false,
                "start": 7336,
                "end": 7354
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7336,
              "end": 7356
            },
            "definite": false,
            "start": 7308,
            "end": 7356
          }
        ],
        "declare": false,
        "start": 7304,
        "end": 7357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7297,
      "end": 7357
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
            "name": "glo_im1_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7362,
            "end": 7388
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7391,
              "end": 7406
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7407,
              "end": 7409
            },
            "optional": false,
            "computed": false,
            "start": 7391,
            "end": 7409
          },
          "definite": false,
          "start": 7362,
          "end": 7409
        }
      ],
      "declare": false,
      "start": 7358,
      "end": 7410
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
            "name": "glo_im1_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7415,
            "end": 7441
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7448,
                "end": 7463
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7464,
                "end": 7466
              },
              "optional": false,
              "computed": false,
              "start": 7448,
              "end": 7466
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7444,
            "end": 7468
          },
          "definite": false,
          "start": 7415,
          "end": 7468
        }
      ],
      "declare": false,
      "start": 7411,
      "end": 7469
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
            "name": "glo_im1_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7474,
            "end": 7500
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7503,
              "end": 7518
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7519,
              "end": 7521
            },
            "optional": false,
            "computed": false,
            "start": 7503,
            "end": 7521
          },
          "definite": false,
          "start": 7474,
          "end": 7521
        }
      ],
      "declare": false,
      "start": 7470,
      "end": 7522
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
            "name": "glo_im1_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7527,
            "end": 7553
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7556,
                "end": 7571
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7572,
                "end": 7574
              },
              "optional": false,
              "computed": false,
              "start": 7556,
              "end": 7574
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7556,
            "end": 7576
          },
          "definite": false,
          "start": 7527,
          "end": 7576
        }
      ],
      "declare": false,
      "start": 7523,
      "end": 7577
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8121,
        "end": 8136
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8139,
        "end": 8153
      },
      "importKind": "value",
      "start": 8114,
      "end": 8154
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
              "name": "glo_im3_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8166,
              "end": 8191
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8194,
                "end": 8209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8210,
                "end": 8212
              },
              "optional": false,
              "computed": false,
              "start": 8194,
              "end": 8212
            },
            "definite": false,
            "start": 8166,
            "end": 8212
          }
        ],
        "declare": false,
        "start": 8162,
        "end": 8213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8155,
      "end": 8213
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
              "name": "glo_im3_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8225,
              "end": 8250
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8257,
                  "end": 8272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8273,
                  "end": 8275
                },
                "optional": false,
                "computed": false,
                "start": 8257,
                "end": 8275
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8253,
              "end": 8277
            },
            "definite": false,
            "start": 8225,
            "end": 8277
          }
        ],
        "declare": false,
        "start": 8221,
        "end": 8278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8214,
      "end": 8278
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
              "name": "glo_im3_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8290,
              "end": 8315
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8318,
                "end": 8333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8334,
                "end": 8336
              },
              "optional": false,
              "computed": false,
              "start": 8318,
              "end": 8336
            },
            "definite": false,
            "start": 8290,
            "end": 8336
          }
        ],
        "declare": false,
        "start": 8286,
        "end": 8337
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8279,
      "end": 8337
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
              "name": "glo_im3_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8349,
              "end": 8374
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8377,
                  "end": 8392
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8393,
                  "end": 8395
                },
                "optional": false,
                "computed": false,
                "start": 8377,
                "end": 8395
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8377,
              "end": 8397
            },
            "definite": false,
            "start": 8349,
            "end": 8397
          }
        ],
        "declare": false,
        "start": 8345,
        "end": 8398
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8338,
      "end": 8398
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
            "name": "glo_im3_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8403,
            "end": 8429
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8432,
              "end": 8447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8448,
              "end": 8450
            },
            "optional": false,
            "computed": false,
            "start": 8432,
            "end": 8450
          },
          "definite": false,
          "start": 8403,
          "end": 8450
        }
      ],
      "declare": false,
      "start": 8399,
      "end": 8451
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
            "name": "glo_im3_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8456,
            "end": 8482
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8489,
                "end": 8504
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8505,
                "end": 8507
              },
              "optional": false,
              "computed": false,
              "start": 8489,
              "end": 8507
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8485,
            "end": 8509
          },
          "definite": false,
          "start": 8456,
          "end": 8509
        }
      ],
      "declare": false,
      "start": 8452,
      "end": 8510
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
            "name": "glo_im3_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8515,
            "end": 8541
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8544,
              "end": 8559
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8560,
              "end": 8562
            },
            "optional": false,
            "computed": false,
            "start": 8544,
            "end": 8562
          },
          "definite": false,
          "start": 8515,
          "end": 8562
        }
      ],
      "declare": false,
      "start": 8511,
      "end": 8563
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
            "name": "glo_im3_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8568,
            "end": 8594
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8597,
                "end": 8612
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8613,
                "end": 8615
              },
              "optional": false,
              "computed": false,
              "start": 8597,
              "end": 8615
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8597,
            "end": 8617
          },
          "definite": false,
          "start": 8568,
          "end": 8617
        }
      ],
      "declare": false,
      "start": 8564,
      "end": 8618
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9201,
          "end": 9215
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9218,
          "end": 9231
        },
        "importKind": "value",
        "start": 9194,
        "end": 9232
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9187,
      "end": 9232
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im2_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9247,
          "end": 9261
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 9264,
          "end": 9278
        },
        "importKind": "value",
        "start": 9240,
        "end": 9279
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9233,
      "end": 9279
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 12472,
        "end": 12474
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 12539,
              "end": 12541
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12556,
                        "end": 12557
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 12560,
                        "end": 12562
                      },
                      "definite": false,
                      "start": 12556,
                      "end": 12562
                    }
                  ],
                  "declare": false,
                  "start": 12552,
                  "end": 12563
                }
              ],
              "start": 12542,
              "end": 12621
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 12529,
            "end": 12621
          }
        ],
        "start": 12475,
        "end": 12624
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 12462,
      "end": 12624
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 12643,
          "end": 12645
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 12710,
                "end": 12712
              },
              "body": {
                "type": "TSModuleBlock",
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12727,
                          "end": 12728
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 12731,
                          "end": 12733
                        },
                        "definite": false,
                        "start": 12727,
                        "end": 12733
                      }
                    ],
                    "declare": false,
                    "start": 12723,
                    "end": 12734
                  }
                ],
                "start": 12713,
                "end": 12792
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 12700,
              "end": 12792
            }
          ],
          "start": 12646,
          "end": 12795
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 12633,
        "end": 12795
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12626,
      "end": 12795
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 12795
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
    "value": "m1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 33,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 43,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 137,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 170,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 228,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 238,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 262,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 269,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 298,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 333,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 366,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 394,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 812,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 819,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 836,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 854,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_public",
    "start": 865,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 892,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 907,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 915,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 922,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_public",
    "start": 926,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 953,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 957,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 982,
    "end": 988
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 989,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_public",
    "start": 993,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1020,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1043,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_public",
    "start": 1054,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1081,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_private",
    "start": 1110,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1138,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_private",
    "start": 1165,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1197,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
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
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_private",
    "start": 1226,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1254,
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
    "value": "f1",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_private",
    "start": 1281,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1309,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1336,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1343,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 1360,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1379,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_public",
    "start": 1390,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1417,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1432,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1440,
    "end": 1446
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1447,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_public",
    "start": 1451,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1478,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1482,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1497,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1507,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_public",
    "start": 1518,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1545,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1560,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1568,
    "end": 1574
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1575,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_public",
    "start": 1579,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1606,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1631,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_private",
    "start": 1635,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1663,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1678,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1686,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_private",
    "start": 1690,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1722,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1747,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_private",
    "start": 1751,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1779,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1794,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1802,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_private",
    "start": 1806,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1834,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1849,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2965,
    "end": 2971
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2972,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "m1_im1_public",
    "start": 2979,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 2995,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3013,
    "end": 3019
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3020,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "m1_im2_public",
    "start": 3027,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 3043,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3184,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 3194,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3203,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3210,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "m2_M1_public",
    "start": 3220,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3243,
    "end": 3249
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3250,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3256,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3279,
    "end": 3285
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3286,
    "end": 3294
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3295,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3314,
    "end": 3320
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3321,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3325,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3347,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3354,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3358,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3363,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3375,
    "end": 3381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3382,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3386,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3390,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3405,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "m2_M2_private",
    "start": 3415,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3439,
    "end": 3445
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3446,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3452,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3475,
    "end": 3481
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3482,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3491,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3510,
    "end": 3516
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3517,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3521,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3543,
    "end": 3549
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3550,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3554,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3559,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3571,
    "end": 3577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3578,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3582,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3586,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3989,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 3996,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "m2_M1_public",
    "start": 4013,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4031,
    "end": 4037
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4038,
    "end": 4041
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_public",
    "start": 4042,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4069,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4083,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4084,
    "end": 4086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4092,
    "end": 4098
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4099,
    "end": 4102
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_public",
    "start": 4103,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4130,
    "end": 4133
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4134,
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
    "value": "c1",
    "start": 4149,
    "end": 4151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4159,
    "end": 4165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4166,
    "end": 4169
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_public",
    "start": 4170,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4197,
    "end": 4211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4212,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4220,
    "end": 4226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4227,
    "end": 4230
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_public",
    "start": 4231,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4258,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4273,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4283,
    "end": 4286
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_private",
    "start": 4287,
    "end": 4312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4315,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4330,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4338,
    "end": 4341
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_private",
    "start": 4342,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4370,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4374,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4389,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4399,
    "end": 4402
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_private",
    "start": 4403,
    "end": 4428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4431,
    "end": 4445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4446,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4454,
    "end": 4457
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_private",
    "start": 4458,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4486,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4501,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4505,
    "end": 4506
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4513,
    "end": 4519
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4520,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Identifier",
    "value": "m2_M2_private",
    "start": 4537,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4556,
    "end": 4562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4563,
    "end": 4566
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_public",
    "start": 4567,
    "end": 4591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4594,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4609,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4617,
    "end": 4623
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4624,
    "end": 4627
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_public",
    "start": 4628,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4655,
    "end": 4658
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4659,
    "end": 4673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4674,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4677,
    "end": 4678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4684,
    "end": 4690
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4691,
    "end": 4694
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_public",
    "start": 4695,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4722,
    "end": 4736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4736,
    "end": 4737
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4737,
    "end": 4739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4745,
    "end": 4751
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4752,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_public",
    "start": 4756,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4783,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4798,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4801,
    "end": 4802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4802,
    "end": 4803
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4808,
    "end": 4811
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_private",
    "start": 4812,
    "end": 4837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4838,
    "end": 4839
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4840,
    "end": 4854
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4854,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4855,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4857,
    "end": 4858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4863,
    "end": 4866
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_private",
    "start": 4867,
    "end": 4892
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4893,
    "end": 4894
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4895,
    "end": 4898
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4899,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4914,
    "end": 4916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4916,
    "end": 4917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4917,
    "end": 4918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4918,
    "end": 4919
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4924,
    "end": 4927
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_private",
    "start": 4928,
    "end": 4953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4954,
    "end": 4955
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4956,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4971,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4979,
    "end": 4982
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_private",
    "start": 4983,
    "end": 5008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5009,
    "end": 5010
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 5011,
    "end": 5025
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5025,
    "end": 5026
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5026,
    "end": 5028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5028,
    "end": 5029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5029,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6178,
    "end": 6184
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 6185,
    "end": 6191
  },
  {
    "type": "Identifier",
    "value": "m1_im1_public",
    "start": 6192,
    "end": 6205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6206,
    "end": 6207
  },
  {
    "type": "Identifier",
    "value": "m2_M1_public",
    "start": 6208,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6220,
    "end": 6221
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6226,
    "end": 6232
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 6233,
    "end": 6239
  },
  {
    "type": "Identifier",
    "value": "m1_im2_public",
    "start": 6240,
    "end": 6253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6254,
    "end": 6255
  },
  {
    "type": "Identifier",
    "value": "m2_M2_private",
    "start": 6256,
    "end": 6269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6269,
    "end": 6270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6394,
    "end": 6395
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6397,
    "end": 6403
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6404,
    "end": 6413
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 6414,
    "end": 6427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6428,
    "end": 6429
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6434,
    "end": 6440
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6441,
    "end": 6446
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6447,
    "end": 6449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6450,
    "end": 6451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6456,
    "end": 6457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6462,
    "end": 6468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6469,
    "end": 6477
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 6478,
    "end": 6480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6480,
    "end": 6481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6481,
    "end": 6482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6483,
    "end": 6484
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6493,
    "end": 6499
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6500,
    "end": 6503
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6504,
    "end": 6506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6506,
    "end": 6507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6512,
    "end": 6513
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6518,
    "end": 6524
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6525,
    "end": 6528
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 6529,
    "end": 6531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6532,
    "end": 6533
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6534,
    "end": 6536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6536,
    "end": 6537
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6542,
    "end": 6548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6549,
    "end": 6552
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 6553,
    "end": 6555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6555,
    "end": 6556
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6557,
    "end": 6559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6559,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6561,
    "end": 6562
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6734,
    "end": 6740
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6741,
    "end": 6750
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 6751,
    "end": 6765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6766,
    "end": 6767
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6772,
    "end": 6778
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6779,
    "end": 6784
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6785,
    "end": 6787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6788,
    "end": 6789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6794,
    "end": 6795
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6800,
    "end": 6806
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6807,
    "end": 6815
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 6816,
    "end": 6818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6818,
    "end": 6819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6819,
    "end": 6820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6821,
    "end": 6822
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6831,
    "end": 6837
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6838,
    "end": 6841
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6842,
    "end": 6844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6844,
    "end": 6845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6850,
    "end": 6851
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6856,
    "end": 6862
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6863,
    "end": 6866
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 6867,
    "end": 6869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6870,
    "end": 6871
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6872,
    "end": 6874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6874,
    "end": 6875
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6880,
    "end": 6886
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6887,
    "end": 6890
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 6891,
    "end": 6893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6893,
    "end": 6894
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6895,
    "end": 6897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6897,
    "end": 6898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6899,
    "end": 6900
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 7074,
    "end": 7080
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7081,
    "end": 7096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7097,
    "end": 7098
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 7099,
    "end": 7112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7112,
    "end": 7113
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7114,
    "end": 7120
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7121,
    "end": 7124
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v1_public",
    "start": 7125,
    "end": 7150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7151,
    "end": 7152
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7153,
    "end": 7168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7168,
    "end": 7169
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7169,
    "end": 7171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7171,
    "end": 7172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7173,
    "end": 7179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7180,
    "end": 7183
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v2_public",
    "start": 7184,
    "end": 7209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7210,
    "end": 7211
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7212,
    "end": 7215
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7216,
    "end": 7231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7231,
    "end": 7232
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7232,
    "end": 7234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7234,
    "end": 7235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7235,
    "end": 7236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7236,
    "end": 7237
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7238,
    "end": 7244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7245,
    "end": 7248
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v3_public",
    "start": 7249,
    "end": 7274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7275,
    "end": 7276
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7277,
    "end": 7292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7292,
    "end": 7293
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7293,
    "end": 7295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7295,
    "end": 7296
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7297,
    "end": 7303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7304,
    "end": 7307
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v4_public",
    "start": 7308,
    "end": 7333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7334,
    "end": 7335
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7336,
    "end": 7351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7351,
    "end": 7352
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7352,
    "end": 7354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7354,
    "end": 7355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7355,
    "end": 7356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7356,
    "end": 7357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7358,
    "end": 7361
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v1_private",
    "start": 7362,
    "end": 7388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7389,
    "end": 7390
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7391,
    "end": 7406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7406,
    "end": 7407
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7407,
    "end": 7409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7409,
    "end": 7410
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7411,
    "end": 7414
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v2_private",
    "start": 7415,
    "end": 7441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7442,
    "end": 7443
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7444,
    "end": 7447
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7448,
    "end": 7463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7463,
    "end": 7464
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7464,
    "end": 7466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7466,
    "end": 7467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7467,
    "end": 7468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7468,
    "end": 7469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7470,
    "end": 7473
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v3_private",
    "start": 7474,
    "end": 7500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7501,
    "end": 7502
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7503,
    "end": 7518
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7518,
    "end": 7519
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7519,
    "end": 7521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7521,
    "end": 7522
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7523,
    "end": 7526
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v4_private",
    "start": 7527,
    "end": 7553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7554,
    "end": 7555
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7556,
    "end": 7571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7571,
    "end": 7572
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7572,
    "end": 7574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7574,
    "end": 7575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7575,
    "end": 7576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7576,
    "end": 7577
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 8114,
    "end": 8120
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8121,
    "end": 8136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8137,
    "end": 8138
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 8139,
    "end": 8153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8153,
    "end": 8154
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8155,
    "end": 8161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8162,
    "end": 8165
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v1_public",
    "start": 8166,
    "end": 8191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8192,
    "end": 8193
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8194,
    "end": 8209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8209,
    "end": 8210
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8210,
    "end": 8212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8212,
    "end": 8213
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8214,
    "end": 8220
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8221,
    "end": 8224
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v2_public",
    "start": 8225,
    "end": 8250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8251,
    "end": 8252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8253,
    "end": 8256
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8257,
    "end": 8272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8272,
    "end": 8273
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8273,
    "end": 8275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8275,
    "end": 8276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8276,
    "end": 8277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8277,
    "end": 8278
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8279,
    "end": 8285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8286,
    "end": 8289
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v3_public",
    "start": 8290,
    "end": 8315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8316,
    "end": 8317
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8318,
    "end": 8333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8333,
    "end": 8334
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8334,
    "end": 8336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8336,
    "end": 8337
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8338,
    "end": 8344
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8345,
    "end": 8348
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v4_public",
    "start": 8349,
    "end": 8374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8375,
    "end": 8376
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8377,
    "end": 8392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8392,
    "end": 8393
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8393,
    "end": 8395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8395,
    "end": 8396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8396,
    "end": 8397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8397,
    "end": 8398
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8399,
    "end": 8402
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v1_private",
    "start": 8403,
    "end": 8429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8430,
    "end": 8431
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8432,
    "end": 8447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8447,
    "end": 8448
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8448,
    "end": 8450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8450,
    "end": 8451
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8452,
    "end": 8455
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v2_private",
    "start": 8456,
    "end": 8482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8483,
    "end": 8484
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8485,
    "end": 8488
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8489,
    "end": 8504
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8504,
    "end": 8505
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8505,
    "end": 8507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8507,
    "end": 8508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8508,
    "end": 8509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8509,
    "end": 8510
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8511,
    "end": 8514
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v3_private",
    "start": 8515,
    "end": 8541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8542,
    "end": 8543
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8544,
    "end": 8559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8559,
    "end": 8560
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8560,
    "end": 8562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8562,
    "end": 8563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8564,
    "end": 8567
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v4_private",
    "start": 8568,
    "end": 8594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8595,
    "end": 8596
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8597,
    "end": 8612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8612,
    "end": 8613
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8613,
    "end": 8615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8615,
    "end": 8616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8616,
    "end": 8617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8617,
    "end": 8618
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9187,
    "end": 9193
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 9194,
    "end": 9200
  },
  {
    "type": "Identifier",
    "value": "glo_im1_public",
    "start": 9201,
    "end": 9215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9216,
    "end": 9217
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 9218,
    "end": 9231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9231,
    "end": 9232
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9233,
    "end": 9239
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 9240,
    "end": 9246
  },
  {
    "type": "Identifier",
    "value": "glo_im2_public",
    "start": 9247,
    "end": 9261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9262,
    "end": 9263
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 9264,
    "end": 9278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9278,
    "end": 9279
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12462,
    "end": 12471
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 12472,
    "end": 12474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12475,
    "end": 12476
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12529,
    "end": 12538
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 12539,
    "end": 12541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12542,
    "end": 12543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12552,
    "end": 12555
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12556,
    "end": 12557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12558,
    "end": 12559
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 12560,
    "end": 12562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12562,
    "end": 12563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12620,
    "end": 12621
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12623,
    "end": 12624
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12626,
    "end": 12632
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12633,
    "end": 12642
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 12643,
    "end": 12645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12646,
    "end": 12647
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12700,
    "end": 12709
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 12710,
    "end": 12712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12713,
    "end": 12714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12723,
    "end": 12726
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12727,
    "end": 12728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12729,
    "end": 12730
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 12731,
    "end": 12733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12733,
    "end": 12734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12791,
    "end": 12792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12794,
    "end": 12795
  }
]
```
