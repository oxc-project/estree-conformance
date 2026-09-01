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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              },
              "start": 25,
              "end": 34
            },
            "start": 21,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 34
        }
      ],
      "declare": false,
      "start": 17,
      "end": 35
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "start": 40,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 51
        }
      ],
      "declare": false,
      "start": 36,
      "end": 52
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 76,
                    "end": 82
                  }
                ],
                "start": 67,
                "end": 82
              },
              "start": 65,
              "end": 82
            },
            "start": 57,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 82
        }
      ],
      "declare": false,
      "start": 53,
      "end": 83
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
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 104,
                    "end": 110
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 113,
                    "end": 119
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 122,
                    "end": 129
                  }
                ],
                "start": 104,
                "end": 129
              },
              "start": 102,
              "end": 129
            },
            "start": 88,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 129
        }
      ],
      "declare": false,
      "start": 84,
      "end": 130
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 155,
                    "end": 162
                  }
                ],
                "start": 146,
                "end": 162
              },
              "start": 144,
              "end": 162
            },
            "start": 135,
            "end": 162
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 162
        }
      ],
      "declare": false,
      "start": 131,
      "end": 163
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 171
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
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
            "start": 174,
            "end": 184
          }
        ],
        "start": 172,
        "end": 186
      },
      "abstract": false,
      "declare": false,
      "start": 164,
      "end": 186
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 195
                },
                "typeArguments": null,
                "start": 194,
                "end": 195
              },
              "start": 192,
              "end": 195
            },
            "start": 191,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 191,
          "end": 195
        }
      ],
      "declare": false,
      "start": 187,
      "end": 196
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
            "name": "cOrBool",
            "optional": false,
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
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 211
                    },
                    "typeArguments": null,
                    "start": 210,
                    "end": 211
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 213,
                    "end": 220
                  }
                ],
                "start": 210,
                "end": 220
              },
              "start": 208,
              "end": 220
            },
            "start": 201,
            "end": 220
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 220
        }
      ],
      "declare": false,
      "start": 197,
      "end": 221
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
            "name": "strOrNumOrBoolOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 263,
                    "end": 270
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 273,
                    "end": 274
                  }
                ],
                "start": 245,
                "end": 274
              },
              "start": 243,
              "end": 274
            },
            "start": 226,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 226,
          "end": 274
        }
      ],
      "declare": false,
      "start": 222,
      "end": 275
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNumOrBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 664
            },
            "prefix": true,
            "start": 643,
            "end": 664
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 669,
            "end": 677
          },
          "start": 643,
          "end": 677
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNumOrBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 688,
              "end": 702
            },
            "prefix": true,
            "start": 681,
            "end": 702
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 707,
            "end": 715
          },
          "start": 681,
          "end": 715
        },
        "start": 643,
        "end": 715
      },
      "consequent": {
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
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 731
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 748
              },
              "start": 723,
              "end": 748
            },
            "directive": null,
            "start": 723,
            "end": 749
          }
        ],
        "start": 717,
        "end": 770
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
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 786
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 803
              },
              "start": 782,
              "end": 803
            },
            "directive": null,
            "start": 782,
            "end": 804
          }
        ],
        "start": 776,
        "end": 817
      },
      "start": 639,
      "end": 817
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 890
              },
              "prefix": true,
              "start": 866,
              "end": 890
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 895,
              "end": 903
            },
            "start": 866,
            "end": 903
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 914,
                "end": 931
              },
              "prefix": true,
              "start": 907,
              "end": 931
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 936,
              "end": 944
            },
            "start": 907,
            "end": 944
          },
          "start": 866,
          "end": 944
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNumOrBoolOrC",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 972
            },
            "prefix": true,
            "start": 948,
            "end": 972
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 977,
            "end": 986
          },
          "start": 948,
          "end": 986
        },
        "start": 866,
        "end": 986
      },
      "consequent": {
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 994,
                "end": 1008
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1028
              },
              "start": 994,
              "end": 1028
            },
            "directive": null,
            "start": 994,
            "end": 1029
          }
        ],
        "start": 988,
        "end": 1060
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1072,
                "end": 1073
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1093
              },
              "start": 1072,
              "end": 1093
            },
            "directive": null,
            "start": 1072,
            "end": 1094
          }
        ],
        "start": 1066,
        "end": 1101
      },
      "start": 862,
      "end": 1101
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1190
              },
              "prefix": true,
              "start": 1166,
              "end": 1190
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1195,
              "end": 1203
            },
            "start": 1166,
            "end": 1203
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1231
              },
              "prefix": true,
              "start": 1207,
              "end": 1231
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 1236,
              "end": 1244
            },
            "start": 1207,
            "end": 1244
          },
          "start": 1166,
          "end": 1244
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNumOrBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1269
            },
            "prefix": true,
            "start": 1248,
            "end": 1269
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 1274,
            "end": 1283
          },
          "start": 1248,
          "end": 1283
        },
        "start": 1166,
        "end": 1283
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1299,
                          "end": 1305
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1308,
                          "end": 1314
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1317,
                          "end": 1324
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1327,
                            "end": 1328
                          },
                          "typeArguments": null,
                          "start": 1327,
                          "end": 1328
                        }
                      ],
                      "start": 1299,
                      "end": 1328
                    },
                    "start": 1297,
                    "end": 1328
                  },
                  "start": 1295,
                  "end": 1328
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBoolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1331,
                  "end": 1348
                },
                "definite": false,
                "start": 1295,
                "end": 1348
              }
            ],
            "declare": false,
            "start": 1291,
            "end": 1349
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1395,
                          "end": 1401
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1404,
                          "end": 1410
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1413,
                          "end": 1420
                        }
                      ],
                      "start": 1395,
                      "end": 1420
                    },
                    "start": 1393,
                    "end": 1420
                  },
                  "start": 1391,
                  "end": 1420
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1423,
                  "end": 1437
                },
                "definite": false,
                "start": 1391,
                "end": 1437
              }
            ],
            "declare": false,
            "start": 1387,
            "end": 1438
          }
        ],
        "start": 1285,
        "end": 1440
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
                "name": "cOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1452,
                "end": 1459
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1462,
                "end": 1479
              },
              "start": 1452,
              "end": 1479
            },
            "directive": null,
            "start": 1452,
            "end": 1480
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1500,
                "end": 1504
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1507,
                "end": 1521
              },
              "start": 1500,
              "end": 1521
            },
            "directive": null,
            "start": 1500,
            "end": 1522
          }
        ],
        "start": 1446,
        "end": 1535
      },
      "start": 1162,
      "end": 1535
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNumOrBool",
              "optional": false,
              "typeAnnotation": null,
              "start": 1577,
              "end": 1591
            },
            "prefix": true,
            "start": 1570,
            "end": 1591
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1596,
            "end": 1604
          },
          "start": 1570,
          "end": 1604
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1608,
            "end": 1617
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1622,
            "end": 1636
          },
          "start": 1608,
          "end": 1636
        },
        "start": 1570,
        "end": 1636
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1652,
                          "end": 1658
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1661,
                          "end": 1667
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1670,
                          "end": 1677
                        }
                      ],
                      "start": 1652,
                      "end": 1677
                    },
                    "start": 1650,
                    "end": 1677
                  },
                  "start": 1648,
                  "end": 1677
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1680,
                  "end": 1694
                },
                "definite": false,
                "start": 1648,
                "end": 1694
              }
            ],
            "declare": false,
            "start": 1644,
            "end": 1695
          }
        ],
        "start": 1638,
        "end": 1726
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
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1738,
                "end": 1747
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1750,
                "end": 1764
              },
              "start": 1738,
              "end": 1764
            },
            "directive": null,
            "start": 1738,
            "end": 1765
          }
        ],
        "start": 1732,
        "end": 1787
      },
      "start": 1566,
      "end": 1787
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1787
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 57,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 88,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 135,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 174,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "cOrBool",
    "start": 201,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 213,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 226,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 263,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 639,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 643,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 650,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 665,
    "end": 668
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 669,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 678,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 681,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 688,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 703,
    "end": 706
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 707,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 723,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 734,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 771,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 782,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 789,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 866,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 873,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 891,
    "end": 894
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 895,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 904,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 907,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 914,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 932,
    "end": 935
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 936,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 945,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 948,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 955,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 973,
    "end": 976
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 977,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 994,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1011,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1076,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1162,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1166,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1173,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1195,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1204,
    "end": 1206
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1207,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1214,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1232,
    "end": 1235
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1236,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1255,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1274,
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
    "value": "{",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1295,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1299,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1308,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1317,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1331,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1391,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1413,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1423,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1441,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "cOrBool",
    "start": 1452,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1462,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1500,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1507,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1566,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1577,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1596,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1605,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1608,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1618,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1622,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1648,
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
    "value": "string",
    "start": 1652,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1661,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1670,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1680,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1727,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1738,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1750,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1786,
    "end": 1787
  }
]
```
