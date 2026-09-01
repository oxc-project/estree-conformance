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
              "start": 649,
              "end": 663
            },
            "prefix": true,
            "start": 642,
            "end": 663
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 668,
            "end": 676
          },
          "start": 642,
          "end": 676
        },
        "operator": "&&",
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
              "start": 687,
              "end": 701
            },
            "prefix": true,
            "start": 680,
            "end": 701
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "number",
            "raw": "\"number\"",
            "start": 706,
            "end": 714
          },
          "start": 680,
          "end": 714
        },
        "start": 642,
        "end": 714
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
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 726
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 743
              },
              "start": 722,
              "end": 743
            },
            "directive": null,
            "start": 722,
            "end": 744
          }
        ],
        "start": 716,
        "end": 757
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
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 777
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 794
              },
              "start": 769,
              "end": 794
            },
            "directive": null,
            "start": 769,
            "end": 795
          }
        ],
        "start": 763,
        "end": 816
      },
      "start": 638,
      "end": 816
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
                "start": 872,
                "end": 889
              },
              "prefix": true,
              "start": 865,
              "end": 889
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 894,
              "end": 902
            },
            "start": 865,
            "end": 902
          },
          "operator": "&&",
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
                "start": 913,
                "end": 930
              },
              "prefix": true,
              "start": 906,
              "end": 930
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 935,
              "end": 943
            },
            "start": 906,
            "end": 943
          },
          "start": 865,
          "end": 943
        },
        "operator": "&&",
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
              "start": 954,
              "end": 971
            },
            "prefix": true,
            "start": 947,
            "end": 971
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 976,
            "end": 985
          },
          "start": 947,
          "end": 985
        },
        "start": 865,
        "end": 985
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 994
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 997,
                "end": 1014
              },
              "start": 993,
              "end": 1014
            },
            "directive": null,
            "start": 993,
            "end": 1015
          }
        ],
        "start": 987,
        "end": 1022
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1048
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1068
              },
              "start": 1034,
              "end": 1068
            },
            "directive": null,
            "start": 1034,
            "end": 1069
          }
        ],
        "start": 1028,
        "end": 1100
      },
      "start": 861,
      "end": 1100
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
                "start": 1172,
                "end": 1189
              },
              "prefix": true,
              "start": 1165,
              "end": 1189
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1194,
              "end": 1202
            },
            "start": 1165,
            "end": 1202
          },
          "operator": "&&",
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
                "start": 1213,
                "end": 1230
              },
              "prefix": true,
              "start": 1206,
              "end": 1230
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 1235,
              "end": 1243
            },
            "start": 1206,
            "end": 1243
          },
          "start": 1165,
          "end": 1243
        },
        "operator": "&&",
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
              "start": 1254,
              "end": 1268
            },
            "prefix": true,
            "start": 1247,
            "end": 1268
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "boolean",
            "raw": "\"boolean\"",
            "start": 1273,
            "end": 1282
          },
          "start": 1247,
          "end": 1282
        },
        "start": 1165,
        "end": 1282
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
                "name": "cOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1297
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBoolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1317
              },
              "start": 1290,
              "end": 1317
            },
            "directive": null,
            "start": 1290,
            "end": 1318
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
                "start": 1338,
                "end": 1342
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1359
              },
              "start": 1338,
              "end": 1359
            },
            "directive": null,
            "start": 1338,
            "end": 1360
          }
        ],
        "start": 1284,
        "end": 1373
      },
      "alternate": {
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
                          "start": 1393,
                          "end": 1399
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1402,
                          "end": 1408
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1411,
                          "end": 1418
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1421,
                            "end": 1422
                          },
                          "typeArguments": null,
                          "start": 1421,
                          "end": 1422
                        }
                      ],
                      "start": 1393,
                      "end": 1422
                    },
                    "start": 1391,
                    "end": 1422
                  },
                  "start": 1389,
                  "end": 1422
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBoolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1442
                },
                "definite": false,
                "start": 1389,
                "end": 1442
              }
            ],
            "declare": false,
            "start": 1385,
            "end": 1443
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
                          "start": 1489,
                          "end": 1495
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1498,
                          "end": 1504
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1507,
                          "end": 1514
                        }
                      ],
                      "start": 1489,
                      "end": 1514
                    },
                    "start": 1487,
                    "end": 1514
                  },
                  "start": 1485,
                  "end": 1514
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1531
                },
                "definite": false,
                "start": 1485,
                "end": 1531
              }
            ],
            "declare": false,
            "start": 1481,
            "end": 1532
          }
        ],
        "start": 1379,
        "end": 1534
      },
      "start": 1161,
      "end": 1534
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
              "start": 1576,
              "end": 1590
            },
            "prefix": true,
            "start": 1569,
            "end": 1590
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 1595,
            "end": 1603
          },
          "start": 1569,
          "end": 1603
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1607,
            "end": 1616
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1621,
            "end": 1635
          },
          "start": 1607,
          "end": 1635
        },
        "start": 1569,
        "end": 1635
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
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1643,
                "end": 1652
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1655,
                "end": 1669
              },
              "start": 1643,
              "end": 1669
            },
            "directive": null,
            "start": 1643,
            "end": 1670
          }
        ],
        "start": 1637,
        "end": 1692
      },
      "alternate": {
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
                          "start": 1712,
                          "end": 1718
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1721,
                          "end": 1727
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1730,
                          "end": 1737
                        }
                      ],
                      "start": 1712,
                      "end": 1737
                    },
                    "start": 1710,
                    "end": 1737
                  },
                  "start": 1708,
                  "end": 1737
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1740,
                  "end": 1754
                },
                "definite": false,
                "start": 1708,
                "end": 1754
              }
            ],
            "declare": false,
            "start": 1704,
            "end": 1755
          }
        ],
        "start": 1698,
        "end": 1786
      },
      "start": 1565,
      "end": 1786
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1786
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
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 642,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 649,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 664,
    "end": 667
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 668,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 677,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 680,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 687,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 702,
    "end": 705
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 706,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 722,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 729,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 758,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 769,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 780,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 861,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 865,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 872,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 890,
    "end": 893
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 894,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 903,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 906,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 913,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 931,
    "end": 934
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 935,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 944,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 947,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 954,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 972,
    "end": 975
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 976,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 997,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1023,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1034,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1051,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1161,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1165,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1172,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1194,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1203,
    "end": 1205
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1206,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1213,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1231,
    "end": 1234
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1235,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1244,
    "end": 1246
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1247,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1254,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1273,
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
    "value": "{",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "cOrBool",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1300,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1345,
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
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1374,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1385,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1389,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1393,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1402,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1411,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBoolOrC",
    "start": 1425,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1481,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1485,
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
    "value": "string",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1498,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1507,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1517,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1565,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1569,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1576,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1595,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1607,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1617,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1621,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1643,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1655,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1693,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1708,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1712,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1730,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1740,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786
  }
]
```
