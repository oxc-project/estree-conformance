__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClassErr",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 16
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 65
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 78,
                        "end": 84
                      },
                      "start": 76,
                      "end": 84
                    },
                    "start": 73,
                    "end": 84
                  },
                  "readonly": false,
                  "static": false,
                  "start": 66,
                  "end": 84
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 86,
                "end": 89
              },
              "expression": false,
              "start": 65,
              "end": 89
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 54,
            "end": 89
          }
        ],
        "start": 17,
        "end": 91
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 91
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 129
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 153,
                    "end": 154
                  },
                  "definite": false,
                  "start": 149,
                  "end": 154
                }
              ],
              "declare": false,
              "start": 143,
              "end": 155
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 136,
            "end": 155
          }
        ],
        "start": 130,
        "end": 157
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 93,
      "end": 157
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlsoIllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 199
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
              "name": "PrivateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 224
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 225,
              "end": 233
            },
            "abstract": false,
            "declare": false,
            "start": 206,
            "end": 233
          }
        ],
        "start": 200,
        "end": 235
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 159,
      "end": 235
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IllegalBecauseNestedInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 279
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 302
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 327
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 330,
                          "end": 331
                        },
                        "definite": false,
                        "start": 326,
                        "end": 331
                      }
                    ],
                    "declare": false,
                    "start": 320,
                    "end": 332
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 313,
                  "end": 332
                }
              ],
              "start": 303,
              "end": 338
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 286,
            "end": 338
          }
        ],
        "start": 280,
        "end": 340
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 237,
      "end": 340
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 347,
        "end": 359
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 370,
              "end": 371
            },
            "computed": false,
            "start": 366,
            "end": 371
          }
        ],
        "start": 360,
        "end": 373
      },
      "const": false,
      "declare": false,
      "start": 342,
      "end": 373
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoGoodAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 393
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NotLegalEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 408
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 410
        },
        "start": 396,
        "end": 410
      },
      "importKind": "value",
      "start": 375,
      "end": 411
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalConstEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 441
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 452,
              "end": 453
            },
            "computed": false,
            "start": 448,
            "end": 453
          }
        ],
        "start": 442,
        "end": 455
      },
      "const": true,
      "declare": false,
      "start": 413,
      "end": 455
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClassOk",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 502
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 556
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 562,
                      "end": 568
                    },
                    "start": 560,
                    "end": 568
                  },
                  "start": 557,
                  "end": 568
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 570,
                "end": 573
              },
              "expression": false,
              "start": 556,
              "end": 573
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 545,
            "end": 573
          }
        ],
        "start": 503,
        "end": 575
      },
      "abstract": false,
      "declare": false,
      "start": 487,
      "end": 575
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 706
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
                "name": "JustAType",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 739
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 740,
                "end": 743
              },
              "declare": false,
              "start": 720,
              "end": 743
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 713,
            "end": 743
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ATypeInANamespace",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 777
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 780,
                "end": 782
              },
              "declare": false,
              "start": 755,
              "end": 783
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 748,
            "end": 783
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 804
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ATypeInANamespace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 827,
                      "end": 844
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 847,
                      "end": 849
                    },
                    "declare": false,
                    "start": 822,
                    "end": 850
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 815,
                  "end": 850
                }
              ],
              "start": 805,
              "end": 856
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 788,
            "end": 856
          }
        ],
        "start": 707,
        "end": 858
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 681,
      "end": 858
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientIsNotInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 877,
        "end": 901
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stillOk",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 921,
                    "end": 928
                  },
                  "init": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 931,
                    "end": 933
                  },
                  "definite": false,
                  "start": 921,
                  "end": 933
                }
              ],
              "declare": false,
              "start": 915,
              "end": 934
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 908,
            "end": 934
          }
        ],
        "start": 902,
        "end": 936
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 859,
      "end": 936
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LegalEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 951,
        "end": 960
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 967,
              "end": 968
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 971,
              "end": 972
            },
            "computed": false,
            "start": 967,
            "end": 972
          }
        ],
        "start": 961,
        "end": 974
      },
      "const": false,
      "declare": true,
      "start": 938,
      "end": 974
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientStuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 1006
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1029
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stillOk",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1053,
                          "end": 1060
                        },
                        "init": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 1063,
                          "end": 1065
                        },
                        "definite": false,
                        "start": 1053,
                        "end": 1065
                      }
                    ],
                    "declare": false,
                    "start": 1047,
                    "end": 1066
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1040,
                  "end": 1066
                }
              ],
              "start": 1030,
              "end": 1072
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1013,
            "end": 1072
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumInAmbientContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 1082,
              "end": 1102
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1114
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1117,
                    "end": 1118
                  },
                  "computed": false,
                  "start": 1113,
                  "end": 1118
                }
              ],
              "start": 1103,
              "end": 1124
            },
            "const": false,
            "declare": false,
            "start": 1077,
            "end": 1124
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FineAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1146
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumInAmbientContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 1149,
                "end": 1169
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1171
              },
              "start": 1149,
              "end": 1171
            },
            "importKind": "value",
            "start": 1130,
            "end": 1172
          }
        ],
        "start": 1007,
        "end": 1174
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 976,
      "end": 1174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1198,
              "end": 1201
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1202,
              "end": 1204
            },
            "start": 1197,
            "end": 1204
          },
          "id": null,
          "generator": false,
          "start": 1193,
          "end": 1204
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1192,
        "end": 1207
      },
      "directive": null,
      "start": 1192,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1216,
              "end": 1219
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1221,
              "end": 1223
            },
            "start": 1214,
            "end": 1223
          },
          "id": null,
          "generator": false,
          "start": 1210,
          "end": 1223
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1209,
        "end": 1226
      },
      "directive": null,
      "start": 1209,
      "end": 1227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1236,
              "end": 1239
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1242,
              "end": 1244
            },
            "start": 1234,
            "end": 1244
          },
          "id": null,
          "generator": false,
          "start": 1229,
          "end": 1244
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1228,
        "end": 1247
      },
      "directive": null,
      "start": 1228,
      "end": 1248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1268,
              "end": 1271
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1273,
              "end": 1275
            },
            "start": 1267,
            "end": 1276
          },
          "id": null,
          "generator": false,
          "start": 1263,
          "end": 1276
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1262,
        "end": 1279
      },
      "directive": null,
      "start": 1262,
      "end": 1280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1288,
              "end": 1291
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1292,
              "end": 1294
            },
            "start": 1287,
            "end": 1294
          },
          "id": null,
          "generator": false,
          "start": 1282,
          "end": 1295
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1281,
        "end": 1298
      },
      "directive": null,
      "start": 1281,
      "end": 1299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1301,
          "end": 1304
        },
        "expression": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 1305,
          "end": 1307
        },
        "start": 1300,
        "end": 1307
      },
      "directive": null,
      "start": 1300,
      "end": 1308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 1345,
        "end": 1348
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1364,
                  "end": 1367
                },
                "expression": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1377,
                  "end": 1378
                },
                "start": 1363,
                "end": 1378
              },
              "start": 1357,
              "end": 1378
            },
            "directive": null,
            "start": 1357,
            "end": 1379
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1392,
                "end": 1395
              },
              "expression": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1405,
                "end": 1406
              },
              "start": 1391,
              "end": 1406
            },
            "start": 1384,
            "end": 1407
          }
        ],
        "start": 1351,
        "end": 1409
      },
      "expression": false,
      "start": 1335,
      "end": 1409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1535,
          "end": 1542
        },
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1544,
                    "end": 1547
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
                      "body": [],
                      "start": 1550,
                      "end": 1552
                    },
                    "expression": false,
                    "start": 1547,
                    "end": 1552
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1544,
                  "end": 1552
                }
              ],
              "start": 1543,
              "end": 1553
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1554,
              "end": 1557
            },
            "optional": false,
            "computed": false,
            "start": 1543,
            "end": 1557
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1543,
          "end": 1559
        },
        "start": 1534,
        "end": 1559
      },
      "directive": null,
      "start": 1534,
      "end": 1560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1637,
          "end": 1644
        },
        "expression": {
          "type": "CallExpression",
          "callee": {
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
              "body": [],
              "start": 1656,
              "end": 1658
            },
            "expression": false,
            "start": 1645,
            "end": 1658
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1645,
          "end": 1660
        },
        "start": 1636,
        "end": 1660
      },
      "directive": null,
      "start": 1636,
      "end": 1661
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1663,
          "end": 1670
        },
        "expression": {
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
            "body": [],
            "start": 1682,
            "end": 1684
          },
          "expression": false,
          "start": 1671,
          "end": 1684
        },
        "start": 1662,
        "end": 1684
      },
      "directive": null,
      "start": 1662,
      "end": 1685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1880,
          "end": 1887
        },
        "expression": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 1894,
            "end": 1896
          },
          "abstract": false,
          "declare": false,
          "start": 1888,
          "end": 1896
        },
        "start": 1879,
        "end": 1896
      },
      "directive": null,
      "start": 1879,
      "end": 1896
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1897
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "MyClassErr",
    "start": 6,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 54,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 66,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 93,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "IllegalBecauseInstantiated",
    "start": 103,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 136,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 159,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "AlsoIllegalBecauseInstantiated",
    "start": 169,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 206,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "PrivateClass",
    "start": 212,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 237,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "IllegalBecauseNestedInstantiated",
    "start": 247,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 286,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 313,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 342,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "NotLegalEnum",
    "start": 347,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 375,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "NoGoodAlias",
    "start": 382,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "NotLegalEnum",
    "start": 396,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 413,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 419,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "NotLegalConstEnum",
    "start": 424,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 487,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "MyClassOk",
    "start": 493,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 545,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 562,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 681,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "NotInstantiated",
    "start": 691,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 713,
    "end": 719
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 720,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "JustAType",
    "start": 730,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 748,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 755,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "ATypeInANamespace",
    "start": 760,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 788,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 815,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 822,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "ATypeInANamespace",
    "start": 827,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 859,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 867,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "AmbientIsNotInstantiated",
    "start": 877,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 908,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 915,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "stillOk",
    "start": 921,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 929,
    "end": 930
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 938,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 946,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "LegalEnum",
    "start": 951,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 969,
    "end": 970
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 976,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 984,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "AmbientStuff",
    "start": 994,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1013,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1047,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "stillOk",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1063,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1077,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "EnumInAmbientContext",
    "start": 1082,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1130,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "FineAlias",
    "start": 1137,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "EnumInAmbientContext",
    "start": 1149,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1193,
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
    "value": "=>",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1216,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1231,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1265,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1284,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1288,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1335,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1384,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1535,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1544,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1554,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1637,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1645,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1663,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1671,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1880,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1888,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1895,
    "end": 1896
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./other.cjs",
          "raw": "\"./other.cjs\"",
          "start": 21,
          "end": 34
        },
        "start": 13,
        "end": 35
      },
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "start": 37,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
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
    "type": "Identifier",
    "value": "foo",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"./other.cjs\"",
    "start": 21,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        },
        "start": 22,
        "end": 28
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 42
      },
      "start": 30,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": 1234,
            "raw": "1234",
            "start": 12,
            "end": 16
          },
          "definite": false,
          "start": 6,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 36
      },
      "exportKind": "value",
      "start": 18,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 25,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  }
]
```
