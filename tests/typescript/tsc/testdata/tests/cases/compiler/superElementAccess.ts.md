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
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 21
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 25,
                      "end": 31
                    },
                    "start": 23,
                    "end": 31
                  },
                  "start": 22,
                  "end": 31
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "start": 35,
                    "end": 44
                  }
                ],
                "start": 33,
                "end": 46
              },
              "expression": false,
              "start": 21,
              "end": 46
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 19,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 61
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
                "start": 64,
                "end": 67
              },
              "expression": false,
              "start": 61,
              "end": 67
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 51,
            "end": 67
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 74
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
                    "type": "TSVoidKeyword",
                    "start": 82,
                    "end": 86
                  },
                  "start": 79,
                  "end": 86
                },
                "start": 76,
                "end": 86
              },
              "start": 74,
              "end": 86
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
                "start": 101,
                "end": 104
              },
              "expression": false,
              "start": 89,
              "end": 104
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 72,
            "end": 104
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              },
              "start": 111,
              "end": 119
            },
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 122,
              "end": 124
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 109,
            "end": 125
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 151,
              "end": 153
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 130,
            "end": 154
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 168
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 179,
                      "end": 180
                    },
                    "start": 172,
                    "end": 180
                  }
                ],
                "start": 171,
                "end": 182
              },
              "expression": false,
              "start": 168,
              "end": 182
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 159,
            "end": 182
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 196
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 200,
                      "end": 206
                    },
                    "start": 198,
                    "end": 206
                  },
                  "start": 197,
                  "end": 206
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 208,
                "end": 211
              },
              "expression": false,
              "start": 196,
              "end": 211
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 187,
            "end": 211
          }
        ],
        "start": 13,
        "end": 213
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 213
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 231
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 246
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 257
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 270,
                          "end": 275
                        },
                        "property": {
                          "type": "Literal",
                          "value": "m1",
                          "raw": "\"m1\"",
                          "start": 276,
                          "end": 280
                        },
                        "optional": false,
                        "computed": true,
                        "start": 270,
                        "end": 281
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "\"hi\"",
                          "start": 282,
                          "end": 286
                        }
                      ],
                      "optional": false,
                      "start": 270,
                      "end": 287
                    },
                    "directive": null,
                    "start": 270,
                    "end": 288
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
                          "name": "l2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 385,
                          "end": 387
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 390,
                                "end": 395
                              },
                              "property": {
                                "type": "Literal",
                                "value": "m1",
                                "raw": "\"m1\"",
                                "start": 396,
                                "end": 400
                              },
                              "optional": false,
                              "computed": true,
                              "start": 390,
                              "end": 401
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 402,
                              "end": 406
                            },
                            "optional": false,
                            "computed": false,
                            "start": 390,
                            "end": 406
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 407,
                              "end": 411
                            }
                          ],
                          "optional": false,
                          "start": 390,
                          "end": 412
                        },
                        "definite": false,
                        "start": 385,
                        "end": 412
                      }
                    ],
                    "declare": false,
                    "start": 381,
                    "end": 413
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
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
                                      "start": 518,
                                      "end": 524
                                    },
                                    "start": 516,
                                    "end": 524
                                  },
                                  "start": 515,
                                  "end": 524
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 529,
                                  "end": 535
                                },
                                "start": 526,
                                "end": 535
                              },
                              "start": 514,
                              "end": 535
                            },
                            "start": 512,
                            "end": 535
                          },
                          "start": 511,
                          "end": 535
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 538,
                            "end": 543
                          },
                          "property": {
                            "type": "Literal",
                            "value": "m1",
                            "raw": "\"m1\"",
                            "start": 544,
                            "end": 548
                          },
                          "optional": false,
                          "computed": true,
                          "start": 538,
                          "end": 549
                        },
                        "definite": false,
                        "start": 511,
                        "end": 549
                      }
                    ],
                    "declare": false,
                    "start": 507,
                    "end": 550
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 637,
                            "end": 642
                          },
                          "property": {
                            "type": "Literal",
                            "value": "m2",
                            "raw": "\"m2\"",
                            "start": 643,
                            "end": 647
                          },
                          "optional": false,
                          "computed": true,
                          "start": 637,
                          "end": 648
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 649,
                          "end": 653
                        },
                        "optional": false,
                        "computed": false,
                        "start": 637,
                        "end": 653
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 654,
                          "end": 658
                        }
                      ],
                      "optional": false,
                      "start": 637,
                      "end": 659
                    },
                    "directive": null,
                    "start": 637,
                    "end": 660
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 775,
                          "end": 780
                        },
                        "property": {
                          "type": "Literal",
                          "value": "p1",
                          "raw": "\"p1\"",
                          "start": 781,
                          "end": 785
                        },
                        "optional": false,
                        "computed": true,
                        "start": 775,
                        "end": 786
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 775,
                      "end": 788
                    },
                    "directive": null,
                    "start": 775,
                    "end": 789
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 904,
                          "end": 906
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 909,
                            "end": 914
                          },
                          "property": {
                            "type": "Literal",
                            "value": "d1",
                            "raw": "\"d1\"",
                            "start": 915,
                            "end": 919
                          },
                          "optional": false,
                          "computed": true,
                          "start": 909,
                          "end": 920
                        },
                        "definite": false,
                        "start": 904,
                        "end": 920
                      }
                    ],
                    "declare": false,
                    "start": 900,
                    "end": 921
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
                          "name": "l1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1046,
                          "end": 1048
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1051,
                            "end": 1056
                          },
                          "property": {
                            "type": "Literal",
                            "value": "d2",
                            "raw": "\"d2\"",
                            "start": 1057,
                            "end": 1061
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1051,
                          "end": 1062
                        },
                        "definite": false,
                        "start": 1046,
                        "end": 1062
                      }
                    ],
                    "declare": false,
                    "start": 1042,
                    "end": 1063
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1184,
                          "end": 1189
                        },
                        "property": {
                          "type": "Literal",
                          "value": "m1",
                          "raw": "\"m1\"",
                          "start": 1190,
                          "end": 1194
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1184,
                        "end": 1195
                      },
                      "right": {
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1211,
                                "end": 1217
                              },
                              "start": 1209,
                              "end": 1217
                            },
                            "start": 1208,
                            "end": 1217
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": "",
                                "raw": "\"\"",
                                "start": 1228,
                                "end": 1230
                              },
                              "start": 1221,
                              "end": 1231
                            }
                          ],
                          "start": 1219,
                          "end": 1233
                        },
                        "expression": false,
                        "start": 1198,
                        "end": 1233
                      },
                      "start": 1184,
                      "end": 1233
                    },
                    "directive": null,
                    "start": 1184,
                    "end": 1234
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1302,
                          "end": 1307
                        },
                        "property": {
                          "type": "Literal",
                          "value": "value",
                          "raw": "\"value\"",
                          "start": 1308,
                          "end": 1315
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1302,
                        "end": 1316
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1319,
                        "end": 1320
                      },
                      "start": 1302,
                      "end": 1320
                    },
                    "directive": null,
                    "start": 1302,
                    "end": 1321
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1456,
                          "end": 1457
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1460,
                            "end": 1465
                          },
                          "property": {
                            "type": "Literal",
                            "value": "value",
                            "raw": "\"value\"",
                            "start": 1466,
                            "end": 1473
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1460,
                          "end": 1474
                        },
                        "definite": false,
                        "start": 1456,
                        "end": 1474
                      }
                    ],
                    "declare": false,
                    "start": 1452,
                    "end": 1475
                  }
                ],
                "start": 260,
                "end": 1590
              },
              "expression": false,
              "start": 257,
              "end": 1590
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 254,
            "end": 1590
          }
        ],
        "start": 247,
        "end": 1592
      },
      "abstract": false,
      "declare": false,
      "start": 216,
      "end": 1592
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1592
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
    "value": "MyBase",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 51,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 130,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 172,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "MyDerived",
    "start": 222,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 232,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "MyBase",
    "start": 240,
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
    "value": "foo",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 275,
    "end": 276
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 526,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 543,
    "end": 544
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 544,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 642,
    "end": 643
  },
  {
    "type": "String",
    "value": "\"m2\"",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 775,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 780,
    "end": 781
  },
  {
    "type": "String",
    "value": "\"p1\"",
    "start": 781,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 900,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 904,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 909,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 914,
    "end": 915
  },
  {
    "type": "String",
    "value": "\"d1\"",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1042,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 1046,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "String",
    "value": "\"d2\"",
    "start": 1057,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "String",
    "value": "\"m1\"",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1211,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1221,
    "end": 1227
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1302,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 1308,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1452,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1460,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 1466,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1591,
    "end": 1592
  }
]
```
