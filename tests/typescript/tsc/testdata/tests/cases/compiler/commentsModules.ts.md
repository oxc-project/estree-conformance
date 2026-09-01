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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 76,
                        "end": 82
                      },
                      "start": 74,
                      "end": 82
                    },
                    "start": 73,
                    "end": 82
                  },
                  "init": null,
                  "definite": false,
                  "start": 73,
                  "end": 82
                }
              ],
              "declare": false,
              "start": 69,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 62,
            "end": 83
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 124
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 145
                  },
                  "start": 137,
                  "end": 146
                }
              ],
              "start": 127,
              "end": 152
            },
            "expression": false,
            "start": 112,
            "end": 152
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 198
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
                        "start": 251,
                        "end": 252
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 253,
                        "end": 264
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 245,
                      "end": 264
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 238,
                    "end": 264
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 264,
                    "end": 265
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
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 301,
                            "end": 302
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 309,
                              "end": 310
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 305,
                            "end": 312
                          },
                          "definite": false,
                          "start": 301,
                          "end": 312
                        }
                      ],
                      "declare": false,
                      "start": 297,
                      "end": 313
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 290,
                    "end": 313
                  }
                ],
                "start": 199,
                "end": 319
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 186,
              "end": 319
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 179,
            "end": 319
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooExport",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 377
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 400
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 397,
                      "end": 402
                    },
                    "start": 390,
                    "end": 403
                  }
                ],
                "start": 380,
                "end": 409
              },
              "expression": false,
              "start": 359,
              "end": 409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 352,
            "end": 409
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2Export",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 465
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 477,
                      "end": 483
                    },
                    "start": 475,
                    "end": 483
                  },
                  "start": 474,
                  "end": 483
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 485,
                "end": 492
              },
              "expression": false,
              "start": 446,
              "end": 492
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 439,
            "end": 492
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3Export",
                "optional": false,
                "typeAnnotation": null,
                "start": 556,
                "end": 566
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 569,
                "end": 576
              },
              "expression": false,
              "start": 547,
              "end": 576
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 540,
            "end": 576
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4Export",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 643
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 646,
              "end": 653
            },
            "expression": false,
            "start": 624,
            "end": 653
          }
        ],
        "start": 34,
        "end": 655
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 21,
      "end": 655
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 683,
            "end": 685
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 695
          },
          "optional": false,
          "computed": false,
          "start": 683,
          "end": 695
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 683,
        "end": 697
      },
      "directive": null,
      "start": 683,
      "end": 698
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
            "name": "myvar",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 708
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 717
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 720
                },
                "optional": false,
                "computed": false,
                "start": 715,
                "end": 720
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 722
              },
              "optional": false,
              "computed": false,
              "start": 715,
              "end": 722
            },
            "typeArguments": null,
            "arguments": [],
            "start": 711,
            "end": 724
          },
          "definite": false,
          "start": 703,
          "end": 724
        }
      ],
      "declare": false,
      "start": 699,
      "end": 725
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 768
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 769,
          "end": 771
        },
        "start": 766,
        "end": 771
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
                "start": 824,
                "end": 825
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 826,
                "end": 833
              },
              "abstract": false,
              "declare": false,
              "start": 818,
              "end": 833
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 811,
            "end": 833
          }
        ],
        "start": 772,
        "end": 835
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 756,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 878
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 881
            },
            "optional": false,
            "computed": false,
            "start": 876,
            "end": 881
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 882,
            "end": 883
          },
          "optional": false,
          "computed": false,
          "start": 876,
          "end": 883
        },
        "typeArguments": null,
        "arguments": [],
        "start": 872,
        "end": 885
      },
      "directive": null,
      "start": 872,
      "end": 886
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 932
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 935
          },
          "start": 930,
          "end": 935
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m5",
          "optional": false,
          "typeAnnotation": null,
          "start": 936,
          "end": 938
        },
        "start": 930,
        "end": 938
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
                "start": 991,
                "end": 992
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 993,
                "end": 1000
              },
              "abstract": false,
              "declare": false,
              "start": 985,
              "end": 1000
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 978,
            "end": 1000
          }
        ],
        "start": 939,
        "end": 1002
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 920,
      "end": 1002
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1035,
                "end": 1037
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1038,
                "end": 1040
              },
              "optional": false,
              "computed": false,
              "start": 1035,
              "end": 1040
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1041,
              "end": 1043
            },
            "optional": false,
            "computed": false,
            "start": 1035,
            "end": 1043
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1045
          },
          "optional": false,
          "computed": false,
          "start": 1035,
          "end": 1045
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1031,
        "end": 1047
      },
      "directive": null,
      "start": 1031,
      "end": 1048
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1092,
            "end": 1094
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1097
          },
          "start": 1092,
          "end": 1097
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1098,
          "end": 1100
        },
        "start": 1092,
        "end": 1100
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
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1124,
                "end": 1126
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
                        "start": 1187,
                        "end": 1188
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1189,
                        "end": 1200
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1181,
                      "end": 1200
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1174,
                    "end": 1200
                  }
                ],
                "start": 1127,
                "end": 1206
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1114,
              "end": 1206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1107,
            "end": 1206
          }
        ],
        "start": 1101,
        "end": 1259
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1082,
      "end": 1259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1264,
                  "end": 1266
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1269
                },
                "optional": false,
                "computed": false,
                "start": 1264,
                "end": 1269
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1270,
                "end": 1272
              },
              "optional": false,
              "computed": false,
              "start": 1264,
              "end": 1272
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1275
            },
            "optional": false,
            "computed": false,
            "start": 1264,
            "end": 1275
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1276,
            "end": 1277
          },
          "optional": false,
          "computed": false,
          "start": 1264,
          "end": 1277
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1260,
        "end": 1279
      },
      "directive": null,
      "start": 1260,
      "end": 1280
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1324,
            "end": 1326
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1327,
            "end": 1329
          },
          "start": 1324,
          "end": 1329
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1330,
          "end": 1332
        },
        "start": 1324,
        "end": 1332
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
                "name": "m8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1384,
                "end": 1386
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
                        "start": 1447,
                        "end": 1448
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1449,
                        "end": 1460
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1441,
                      "end": 1460
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1434,
                    "end": 1460
                  }
                ],
                "start": 1387,
                "end": 1466
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1374,
              "end": 1466
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1367,
            "end": 1466
          }
        ],
        "start": 1333,
        "end": 1468
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1314,
      "end": 1468
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1473,
                  "end": 1475
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1476,
                  "end": 1478
                },
                "optional": false,
                "computed": false,
                "start": 1473,
                "end": 1478
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1479,
                "end": 1481
              },
              "optional": false,
              "computed": false,
              "start": 1473,
              "end": 1481
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1482,
              "end": 1484
            },
            "optional": false,
            "computed": false,
            "start": 1473,
            "end": 1484
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1485,
            "end": 1486
          },
          "optional": false,
          "computed": false,
          "start": 1473,
          "end": 1486
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1469,
        "end": 1488
      },
      "directive": null,
      "start": 1469,
      "end": 1489
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1500,
          "end": 1502
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1503,
          "end": 1505
        },
        "start": 1500,
        "end": 1505
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
                "name": "m8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1529,
                "end": 1531
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
                        "start": 1592,
                        "end": 1593
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1594,
                        "end": 1605
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1586,
                      "end": 1605
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1579,
                    "end": 1605
                  }
                ],
                "start": 1532,
                "end": 1611
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1519,
              "end": 1611
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1512,
            "end": 1611
          }
        ],
        "start": 1506,
        "end": 1613
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1490,
      "end": 1613
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1618,
                "end": 1620
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1623
              },
              "optional": false,
              "computed": false,
              "start": 1618,
              "end": 1623
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1624,
              "end": 1626
            },
            "optional": false,
            "computed": false,
            "start": 1618,
            "end": 1626
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1627,
            "end": 1628
          },
          "optional": false,
          "computed": false,
          "start": 1618,
          "end": 1628
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1614,
        "end": 1630
      },
      "directive": null,
      "start": 1614,
      "end": 1631
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1642,
          "end": 1644
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1645,
          "end": 1647
        },
        "start": 1642,
        "end": 1647
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
                "name": "m9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1699,
                "end": 1701
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
                        "start": 1762,
                        "end": 1763
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1764,
                        "end": 1775
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1756,
                      "end": 1775
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1749,
                    "end": 1775
                  },
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1814,
                      "end": 1815
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 1816,
                      "end": 1827
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1808,
                    "end": 1827
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1869,
                        "end": 1870
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 1871,
                        "end": 1882
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1863,
                      "end": 1882
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1856,
                    "end": 1882
                  }
                ],
                "start": 1702,
                "end": 1888
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1689,
              "end": 1888
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1682,
            "end": 1888
          }
        ],
        "start": 1648,
        "end": 1890
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1632,
      "end": 1890
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1895,
                "end": 1897
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1898,
                "end": 1900
              },
              "optional": false,
              "computed": false,
              "start": 1895,
              "end": 1900
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "m9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1901,
              "end": 1903
            },
            "optional": false,
            "computed": false,
            "start": 1895,
            "end": 1903
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1904,
            "end": 1905
          },
          "optional": false,
          "computed": false,
          "start": 1895,
          "end": 1905
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1891,
        "end": 1907
      },
      "directive": null,
      "start": 1891,
      "end": 1908
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 1908
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 21,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 137,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 186,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 238,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 290,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 297,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 352,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 359,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 368,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 439,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 446,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "foo2Export",
    "start": 455,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 540,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 547,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "foo3Export",
    "start": 556,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 624,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "foo4Export",
    "start": 633,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "fooExport",
    "start": 686,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "myvar",
    "start": 703,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 715,
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
    "value": "m2",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 756,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 811,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 818,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 872,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
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
    "value": ";",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 920,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 930,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 933,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 978,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 985,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1035,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1038,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1041,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1082,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1092,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1095,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1098,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1114,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1174,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1181,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1273,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1314,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1324,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1330,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1367,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1374,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1434,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1441,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1473,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1476,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1479,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1482,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1490,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1500,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1503,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1519,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1579,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1586,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1614,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1618,
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
    "value": "m7",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1624,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1632,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1642,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1645,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1682,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1689,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 1699,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1749,
    "end": 1755
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1756,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1808,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1863,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1891,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "m7",
    "start": 1895,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "m8",
    "start": 1898,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "m9",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  }
]
```
