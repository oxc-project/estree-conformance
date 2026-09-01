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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "start": 165,
            "end": 176
          },
          "init": null,
          "definite": false,
          "start": 165,
          "end": 176
        }
      ],
      "declare": false,
      "start": 161,
      "end": 177
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
                    "start": 192,
                    "end": 198
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 201,
                    "end": 207
                  }
                ],
                "start": 192,
                "end": 207
              },
              "start": 190,
              "end": 207
            },
            "start": 182,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 207
        }
      ],
      "declare": false,
      "start": 178,
      "end": 208
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 219,
                    "end": 225
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 228,
                    "end": 234
                  }
                ],
                "start": 219,
                "end": 234
              },
              "start": 217,
              "end": 234
            },
            "start": 213,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 234
        }
      ],
      "declare": false,
      "start": 209,
      "end": 235
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 244
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 280
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
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 288,
                              "end": 294
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 297,
                              "end": 303
                            }
                          ],
                          "start": 288,
                          "end": 303
                        },
                        "start": 286,
                        "end": 303
                      },
                      "start": 281,
                      "end": 303
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 362,
                            "end": 365
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 375,
                                  "end": 379
                                },
                                "prefix": true,
                                "start": 368,
                                "end": 379
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 384,
                                "end": 392
                              },
                              "start": 368,
                              "end": 392
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "var1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 396,
                                "end": 400
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 401,
                                "end": 407
                              },
                              "optional": false,
                              "computed": false,
                              "start": 396,
                              "end": 407
                            },
                            "start": 368,
                            "end": 407
                          },
                          "start": 362,
                          "end": 407
                        },
                        "directive": null,
                        "start": 362,
                        "end": 408
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
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 483,
                                      "end": 489
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 492,
                                      "end": 498
                                    }
                                  ],
                                  "start": 483,
                                  "end": 498
                                },
                                "start": 481,
                                "end": 498
                              },
                              "start": 477,
                              "end": 498
                            },
                            "init": null,
                            "definite": false,
                            "start": 477,
                            "end": 498
                          }
                        ],
                        "declare": false,
                        "start": 473,
                        "end": 499
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 511
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 521,
                                  "end": 525
                                },
                                "prefix": true,
                                "start": 514,
                                "end": 525
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 530,
                                "end": 538
                              },
                              "start": 514,
                              "end": 538
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "var2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 542,
                                "end": 546
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 553
                              },
                              "optional": false,
                              "computed": false,
                              "start": 542,
                              "end": 553
                            },
                            "start": 514,
                            "end": 553
                          },
                          "start": 508,
                          "end": 553
                        },
                        "directive": null,
                        "start": 508,
                        "end": 554
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 620,
                            "end": 623
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 633,
                                  "end": 638
                                },
                                "prefix": true,
                                "start": 626,
                                "end": 638
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 643,
                                "end": 651
                              },
                              "start": 626,
                              "end": 651
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 655,
                                "end": 660
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 661,
                                "end": 667
                              },
                              "optional": false,
                              "computed": false,
                              "start": 655,
                              "end": 667
                            },
                            "start": 626,
                            "end": 667
                          },
                          "start": 620,
                          "end": 667
                        },
                        "directive": null,
                        "start": 620,
                        "end": 668
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "strOrNum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 703
                        },
                        "start": 688,
                        "end": 704
                      }
                    ],
                    "start": 305,
                    "end": 710
                  },
                  "expression": false,
                  "start": 280,
                  "end": 710
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 274,
                "end": 710
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 724
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 784,
                            "end": 787
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 797,
                                  "end": 801
                                },
                                "prefix": true,
                                "start": 790,
                                "end": 801
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 806,
                                "end": 814
                              },
                              "start": 790,
                              "end": 814
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "var1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 818,
                                "end": 822
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 823,
                                "end": 829
                              },
                              "optional": false,
                              "computed": false,
                              "start": 818,
                              "end": 829
                            },
                            "start": 790,
                            "end": 829
                          },
                          "start": 784,
                          "end": 829
                        },
                        "directive": null,
                        "start": 784,
                        "end": 830
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
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 905,
                                      "end": 911
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 914,
                                      "end": 920
                                    }
                                  ],
                                  "start": 905,
                                  "end": 920
                                },
                                "start": 903,
                                "end": 920
                              },
                              "start": 899,
                              "end": 920
                            },
                            "init": null,
                            "definite": false,
                            "start": 899,
                            "end": 920
                          }
                        ],
                        "declare": false,
                        "start": 895,
                        "end": 921
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 930,
                            "end": 933
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 943,
                                  "end": 947
                                },
                                "prefix": true,
                                "start": 936,
                                "end": 947
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 952,
                                "end": 960
                              },
                              "start": 936,
                              "end": 960
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "var2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 964,
                                "end": 968
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 969,
                                "end": 975
                              },
                              "optional": false,
                              "computed": false,
                              "start": 964,
                              "end": 975
                            },
                            "start": 936,
                            "end": 975
                          },
                          "start": 930,
                          "end": 975
                        },
                        "directive": null,
                        "start": 930,
                        "end": 976
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "strOrNum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1003,
                          "end": 1011
                        },
                        "start": 996,
                        "end": 1012
                      }
                    ],
                    "start": 727,
                    "end": 1018
                  },
                  "expression": false,
                  "start": 724,
                  "end": 1018
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 716,
                "end": 1018
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1028,
                  "end": 1032
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
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1040,
                              "end": 1046
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 1049,
                              "end": 1055
                            }
                          ],
                          "start": 1040,
                          "end": 1055
                        },
                        "start": 1038,
                        "end": 1055
                      },
                      "start": 1033,
                      "end": 1055
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1114,
                            "end": 1117
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1127,
                                  "end": 1131
                                },
                                "prefix": true,
                                "start": 1120,
                                "end": 1131
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 1136,
                                "end": 1144
                              },
                              "start": 1120,
                              "end": 1144
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "var1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1148,
                                "end": 1152
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1153,
                                "end": 1159
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1148,
                              "end": 1159
                            },
                            "start": 1120,
                            "end": 1159
                          },
                          "start": 1114,
                          "end": 1159
                        },
                        "directive": null,
                        "start": 1114,
                        "end": 1160
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
                              "name": "var2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 1235,
                                      "end": 1241
                                    },
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 1244,
                                      "end": 1250
                                    }
                                  ],
                                  "start": 1235,
                                  "end": 1250
                                },
                                "start": 1233,
                                "end": 1250
                              },
                              "start": 1229,
                              "end": 1250
                            },
                            "init": null,
                            "definite": false,
                            "start": 1229,
                            "end": 1250
                          }
                        ],
                        "declare": false,
                        "start": 1225,
                        "end": 1251
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1260,
                            "end": 1263
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "var2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1273,
                                  "end": 1277
                                },
                                "prefix": true,
                                "start": 1266,
                                "end": 1277
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 1282,
                                "end": 1290
                              },
                              "start": 1266,
                              "end": 1290
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "var2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1294,
                                "end": 1298
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1299,
                                "end": 1305
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1294,
                              "end": 1305
                            },
                            "start": 1266,
                            "end": 1305
                          },
                          "start": 1260,
                          "end": 1305
                        },
                        "directive": null,
                        "start": 1260,
                        "end": 1306
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1372,
                            "end": 1375
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "param",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1385,
                                  "end": 1390
                                },
                                "prefix": true,
                                "start": 1378,
                                "end": 1390
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "\"string\"",
                                "start": 1395,
                                "end": 1403
                              },
                              "start": 1378,
                              "end": 1403
                            },
                            "operator": "&&",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1407,
                                "end": 1412
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1413,
                                "end": 1419
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1407,
                              "end": 1419
                            },
                            "start": 1378,
                            "end": 1419
                          },
                          "start": 1372,
                          "end": 1419
                        },
                        "directive": null,
                        "start": 1372,
                        "end": 1420
                      }
                    ],
                    "start": 1057,
                    "end": 1436
                  },
                  "expression": false,
                  "start": 1032,
                  "end": 1436
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1024,
                "end": 1436
              }
            ],
            "start": 247,
            "end": 1438
          },
          "definite": false,
          "start": 240,
          "end": 1438
        }
      ],
      "declare": false,
      "start": 236,
      "end": 1439
    },
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
          "start": 1475,
          "end": 1483
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1493,
                    "end": 1497
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1504
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1493,
                  "end": 1504
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrNum",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1505,
                    "end": 1513
                  }
                ],
                "optional": false,
                "start": 1493,
                "end": 1514
              },
              "prefix": true,
              "start": 1486,
              "end": 1514
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1519,
              "end": 1527
            },
            "start": 1486,
            "end": 1527
          },
          "operator": "&&",
          "right": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1531,
                "end": 1535
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1542
              },
              "optional": false,
              "computed": false,
              "start": 1531,
              "end": 1542
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1551
              }
            ],
            "optional": false,
            "start": 1531,
            "end": 1552
          },
          "start": 1486,
          "end": 1552
        },
        "start": 1475,
        "end": 1552
      },
      "directive": null,
      "start": 1475,
      "end": 1553
    },
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
          "start": 1585,
          "end": 1593
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1603,
                  "end": 1607
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1608,
                  "end": 1612
                },
                "optional": false,
                "computed": false,
                "start": 1603,
                "end": 1612
              },
              "prefix": true,
              "start": 1596,
              "end": 1612
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1617,
              "end": 1625
            },
            "start": 1596,
            "end": 1625
          },
          "operator": "&&",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1633
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1634,
              "end": 1638
            },
            "optional": false,
            "computed": false,
            "start": 1629,
            "end": 1638
          },
          "start": 1596,
          "end": 1638
        },
        "start": 1585,
        "end": 1638
      },
      "directive": null,
      "start": 1585,
      "end": 1639
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 1640
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 182,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 288,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 368,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 380,
    "end": 383
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 384,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 393,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 514,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 526,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 539,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 547,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 620,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 626,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 639,
    "end": 642
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 643,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 652,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 655,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 688,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 784,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 790,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 797,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 802,
    "end": 805
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 806,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 815,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 818,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 895,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 899,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 905,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 914,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 930,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 936,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 943,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 948,
    "end": 951
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 952,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 961,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 964,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1003,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1028,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1033,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1049,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1120,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1127,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1136,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1148,
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
    "value": "length",
    "start": 1153,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1225,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1229,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1235,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1260,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1266,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1273,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1278,
    "end": 1281
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1282,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1291,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1294,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1299,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1372,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1378,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1385,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1395,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 1407,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1475,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1486,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1493,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1498,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1505,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1519,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1528,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1531,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1536,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1543,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1585,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1596,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1617,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1629,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1634,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  }
]
```
