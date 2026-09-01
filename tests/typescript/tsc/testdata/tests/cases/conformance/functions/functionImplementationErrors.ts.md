__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 112
          },
          "init": {
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
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 140,
                    "end": 142
                  },
                  "start": 133,
                  "end": 143
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 155,
                    "end": 156
                  },
                  "start": 148,
                  "end": 157
                }
              ],
              "start": 127,
              "end": 159
            },
            "expression": false,
            "start": 115,
            "end": 159
          },
          "definite": false,
          "start": 110,
          "end": 159
        }
      ],
      "declare": false,
      "start": 106,
      "end": 160
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 167
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
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
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 196,
                    "end": 198
                  },
                  "start": 189,
                  "end": 199
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 211,
                    "end": 212
                  },
                  "start": 204,
                  "end": 213
                }
              ],
              "start": 183,
              "end": 215
            },
            "expression": false,
            "start": 170,
            "end": 215
          },
          "definite": false,
          "start": 165,
          "end": 215
        }
      ],
      "declare": false,
      "start": 161,
      "end": 216
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 223
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 245,
                    "end": 247
                  },
                  "start": 238,
                  "end": 248
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 260,
                    "end": 261
                  },
                  "start": 253,
                  "end": 262
                }
              ],
              "start": 232,
              "end": 264
            },
            "id": null,
            "generator": false,
            "start": 226,
            "end": 264
          },
          "definite": false,
          "start": 221,
          "end": 264
        }
      ],
      "declare": false,
      "start": 217,
      "end": 265
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 379
          },
          "init": {
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
                  "type": "IfStatement",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 404,
                    "end": 408
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 428,
                              "end": 430
                            }
                          ],
                          "start": 427,
                          "end": 431
                        },
                        "start": 420,
                        "end": 432
                      }
                    ],
                    "start": 410,
                    "end": 438
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 462,
                              "end": 463
                            }
                          ],
                          "start": 461,
                          "end": 464
                        },
                        "start": 454,
                        "end": 465
                      }
                    ],
                    "start": 444,
                    "end": 471
                  },
                  "start": 400,
                  "end": 471
                }
              ],
              "start": 394,
              "end": 473
            },
            "expression": false,
            "start": 382,
            "end": 473
          },
          "definite": false,
          "start": 377,
          "end": 473
        }
      ],
      "declare": false,
      "start": 373,
      "end": 473
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 566
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 570,
          "end": 576
        },
        "start": 568,
        "end": 576
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 577,
        "end": 580
      },
      "expression": false,
      "start": 555,
      "end": 580
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 597,
                "end": 600
              },
              "start": 595,
              "end": 600
            },
            "start": 594,
            "end": 600
          },
          "init": null,
          "definite": false,
          "start": 594,
          "end": 600
        }
      ],
      "declare": true,
      "start": 582,
      "end": 601
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 698
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 700
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 704
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 699,
          "end": 704
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 717
                },
                "init": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 720,
                  "end": 721
                },
                "definite": false,
                "start": 716,
                "end": 721
              }
            ],
            "declare": false,
            "start": 712,
            "end": 722
          }
        ],
        "start": 706,
        "end": 724
      },
      "expression": false,
      "start": 687,
      "end": 724
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 817
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 819
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 822,
            "end": 823
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 818,
          "end": 823
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": true,
          "typeAnnotation": null,
          "start": 825,
          "end": 827
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 829,
        "end": 832
      },
      "expression": false,
      "start": 806,
      "end": 832
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 963,
          "end": 972
        },
        "operator": "===",
        "right": {
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
              "type": "TSNumberKeyword",
              "start": 990,
              "end": 996
            },
            "start": 988,
            "end": 996
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ThrowStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1009,
                  "end": 1018
                },
                "start": 1003,
                "end": 1019
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1028,
                      "end": 1029
                    },
                    "init": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1032,
                      "end": 1033
                    },
                    "definite": false,
                    "start": 1028,
                    "end": 1033
                  }
                ],
                "declare": false,
                "start": 1024,
                "end": 1034
              }
            ],
            "start": 997,
            "end": 1036
          },
          "expression": false,
          "start": 977,
          "end": 1036
        },
        "start": 963,
        "end": 1036
      },
      "directive": null,
      "start": 963,
      "end": 1037
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1045,
        "end": 1049
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1060,
              "end": 1061
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1052,
            "end": 1062
          }
        ],
        "start": 1050,
        "end": 1064
      },
      "abstract": false,
      "declare": false,
      "start": 1039,
      "end": 1064
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1071,
        "end": 1083
      },
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1094,
              "end": 1095
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1086,
            "end": 1096
          }
        ],
        "start": 1084,
        "end": 1098
      },
      "abstract": false,
      "declare": false,
      "start": 1065,
      "end": 1098
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1126
      },
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1138
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1129,
            "end": 1139
          }
        ],
        "start": 1127,
        "end": 1141
      },
      "abstract": false,
      "declare": false,
      "start": 1099,
      "end": 1141
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1148,
        "end": 1156
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1165,
        "end": 1169
      },
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1180,
              "end": 1181
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1172,
            "end": 1182
          }
        ],
        "start": 1170,
        "end": 1184
      },
      "abstract": false,
      "declare": false,
      "start": 1142,
      "end": 1184
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1194,
        "end": 1196
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
                "name": "Derived1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1216,
                "end": 1224
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1212,
              "end": 1226
            },
            "start": 1205,
            "end": 1227
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1243,
                "end": 1251
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1239,
              "end": 1253
            },
            "start": 1232,
            "end": 1254
          }
        ],
        "start": 1199,
        "end": 1260
      },
      "expression": false,
      "start": 1185,
      "end": 1260
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
            "name": "f9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1265,
            "end": 1267
          },
          "init": {
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
                      "name": "Derived1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1299,
                      "end": 1307
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1295,
                    "end": 1309
                  },
                  "start": 1288,
                  "end": 1310
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1326,
                      "end": 1334
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1322,
                    "end": 1336
                  },
                  "start": 1315,
                  "end": 1337
                }
              ],
              "start": 1282,
              "end": 1339
            },
            "expression": false,
            "start": 1270,
            "end": 1339
          },
          "definite": false,
          "start": 1265,
          "end": 1339
        }
      ],
      "declare": false,
      "start": 1261,
      "end": 1340
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
            "name": "f10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1348
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                      "name": "Derived1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1374,
                      "end": 1382
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1370,
                    "end": 1384
                  },
                  "start": 1363,
                  "end": 1385
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1401,
                      "end": 1409
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1397,
                    "end": 1411
                  },
                  "start": 1390,
                  "end": 1412
                }
              ],
              "start": 1357,
              "end": 1414
            },
            "id": null,
            "generator": false,
            "start": 1351,
            "end": 1414
          },
          "definite": false,
          "start": 1345,
          "end": 1414
        }
      ],
      "declare": false,
      "start": 1341,
      "end": 1415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1428
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
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 1448,
                "end": 1452
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1444,
              "end": 1454
            },
            "start": 1437,
            "end": 1455
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1483
              },
              "typeArguments": null,
              "arguments": [],
              "start": 1467,
              "end": 1485
            },
            "start": 1460,
            "end": 1486
          }
        ],
        "start": 1431,
        "end": 1488
      },
      "expression": false,
      "start": 1416,
      "end": 1488
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
            "name": "f12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1493,
            "end": 1496
          },
          "init": {
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1528,
                      "end": 1532
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1524,
                    "end": 1534
                  },
                  "start": 1517,
                  "end": 1535
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnotherClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1551,
                      "end": 1563
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1547,
                    "end": 1565
                  },
                  "start": 1540,
                  "end": 1566
                }
              ],
              "start": 1511,
              "end": 1568
            },
            "expression": false,
            "start": 1499,
            "end": 1568
          },
          "definite": false,
          "start": 1493,
          "end": 1568
        }
      ],
      "declare": false,
      "start": 1489,
      "end": 1569
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
            "name": "f13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1574,
            "end": 1577
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1603,
                      "end": 1607
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1599,
                    "end": 1609
                  },
                  "start": 1592,
                  "end": 1610
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AnotherClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1626,
                      "end": 1638
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1622,
                    "end": 1640
                  },
                  "start": 1615,
                  "end": 1641
                }
              ],
              "start": 1586,
              "end": 1643
            },
            "id": null,
            "generator": false,
            "start": 1580,
            "end": 1643
          },
          "definite": false,
          "start": 1574,
          "end": 1643
        }
      ],
      "declare": false,
      "start": 1570,
      "end": 1644
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 1644
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 110,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
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
    "start": 133,
    "end": 139
  },
  {
    "type": "String",
    "value": "''",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 148,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 165,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195
  },
  {
    "type": "String",
    "value": "''",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 204,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 229,
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
    "value": "return",
    "start": 238,
    "end": 244
  },
  {
    "type": "String",
    "value": "''",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 253,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
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
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "f4",
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
    "type": "Keyword",
    "value": "function",
    "start": 382,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "String",
    "value": "''",
    "start": 428,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 555,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 564,
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
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 582,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 687,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 696,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 712,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 723,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 806,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 815,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 963,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 973,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 977,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 990,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1003,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1009,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1045,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1052,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1065,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1071,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1086,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1099,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1105,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1114,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1122,
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
    "value": "private",
    "start": 1129,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1148,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1157,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1172,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1185,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1194,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1216,
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
    "type": "Keyword",
    "value": "return",
    "start": 1232,
    "end": 1238
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1243,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1261,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1265,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1270,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1288,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1299,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1315,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1326,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1354,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1363,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1374,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1390,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1401,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1410,
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
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1416,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1425,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1437,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1448,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1460,
    "end": 1466
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1467,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1471,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1489,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1493,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1499,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1517,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1528,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1540,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1551,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1570,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 1574,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1592,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1599,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "AnotherClass",
    "start": 1626,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  }
]
```
