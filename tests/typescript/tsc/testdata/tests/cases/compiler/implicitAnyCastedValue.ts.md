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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 34,
                      "end": 37
                    },
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 38,
                      "end": 39
                    },
                    "start": 33,
                    "end": 39
                  },
                  "start": 26,
                  "end": 40
                }
              ],
              "start": 20,
              "end": 74
            },
            "expression": false,
            "start": 8,
            "end": 74
          },
          "definite": false,
          "start": 4,
          "end": 74
        }
      ],
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 88
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
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 105,
                "end": 108
              },
              "expression": {
                "type": "Literal",
                "value": "hello world",
                "raw": "\"hello world\"",
                "start": 109,
                "end": 122
              },
              "start": 104,
              "end": 122
            },
            "start": 97,
            "end": 123
          }
        ],
        "start": 91,
        "end": 157
      },
      "expression": false,
      "start": 76,
      "end": 157
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
        "start": 165,
        "end": 166
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 176
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 179,
              "end": 183
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 173,
            "end": 184
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 232
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 217,
            "end": 233
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tempVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 284
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
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 305,
                        "end": 308
                      },
                      "expression": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 309,
                        "end": 310
                      },
                      "start": 304,
                      "end": 310
                    },
                    "start": 297,
                    "end": 311
                  }
                ],
                "start": 287,
                "end": 349
              },
              "expression": false,
              "start": 284,
              "end": 349
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 266,
            "end": 349
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnBarWithCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 379
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
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 434,
                        "end": 437
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 438,
                          "end": 442
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 446
                        },
                        "optional": false,
                        "computed": false,
                        "start": 438,
                        "end": 446
                      },
                      "start": 433,
                      "end": 446
                    },
                    "start": 426,
                    "end": 447
                  }
                ],
                "start": 382,
                "end": 453
              },
              "expression": false,
              "start": 379,
              "end": 453
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 355,
            "end": 453
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnFooWithCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 483
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
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 504,
                        "end": 507
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 508,
                          "end": 512
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 513,
                          "end": 516
                        },
                        "optional": false,
                        "computed": false,
                        "start": 508,
                        "end": 516
                      },
                      "start": 503,
                      "end": 516
                    },
                    "start": 496,
                    "end": 517
                  }
                ],
                "start": 486,
                "end": 555
              },
              "expression": false,
              "start": 483,
              "end": 555
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 459,
            "end": 555
          }
        ],
        "start": 167,
        "end": 557
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 557
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 565,
        "end": 567
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
              "name": "getValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 574,
              "end": 582
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 585,
              "end": 589
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 574,
            "end": 590
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "castedGet",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 644
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
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 665,
                        "end": 668
                      },
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 669,
                          "end": 673
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 674,
                          "end": 682
                        },
                        "optional": false,
                        "computed": false,
                        "start": 669,
                        "end": 682
                      },
                      "start": 664,
                      "end": 682
                    },
                    "start": 657,
                    "end": 683
                  }
                ],
                "start": 647,
                "end": 721
              },
              "expression": false,
              "start": 644,
              "end": 721
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 624,
            "end": 721
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "notCastedGet",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 750
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 770,
                        "end": 774
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 775,
                        "end": 783
                      },
                      "optional": false,
                      "computed": false,
                      "start": 770,
                      "end": 783
                    },
                    "start": 763,
                    "end": 784
                  }
                ],
                "start": 753,
                "end": 822
              },
              "expression": false,
              "start": 750,
              "end": 822
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 727,
            "end": 822
          }
        ],
        "start": 568,
        "end": 824
      },
      "abstract": false,
      "declare": false,
      "start": 559,
      "end": 824
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "castedNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 835,
        "end": 845
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
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 862,
                "end": 865
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 866,
                "end": 870
              },
              "start": 861,
              "end": 870
            },
            "start": 854,
            "end": 871
          }
        ],
        "start": 848,
        "end": 905
      },
      "expression": false,
      "start": 826,
      "end": 905
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notCastedNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 916,
        "end": 929
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
              "value": null,
              "raw": "null",
              "start": 945,
              "end": 949
            },
            "start": 938,
            "end": 950
          }
        ],
        "start": 932,
        "end": 980
      },
      "expression": false,
      "start": 907,
      "end": 980
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnTypeBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 991,
        "end": 1004
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1008,
          "end": 1011
        },
        "start": 1006,
        "end": 1011
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1025,
              "end": 1029
            },
            "start": 1018,
            "end": 1030
          }
        ],
        "start": 1012,
        "end": 1064
      },
      "expression": false,
      "start": 982,
      "end": 1064
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefinedBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1075,
        "end": 1087
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
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1104,
                "end": 1107
              },
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1117
              },
              "start": 1103,
              "end": 1117
            },
            "start": 1096,
            "end": 1118
          }
        ],
        "start": 1090,
        "end": 1152
      },
      "expression": false,
      "start": 1066,
      "end": 1152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleRets1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1163,
        "end": 1176
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1177,
          "end": 1178
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1224,
              "end": 1225
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1245,
                      "end": 1248
                    },
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1249,
                      "end": 1250
                    },
                    "start": 1244,
                    "end": 1250
                  },
                  "start": 1237,
                  "end": 1251
                }
              ],
              "start": 1227,
              "end": 1257
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1284,
                    "end": 1288
                  },
                  "start": 1277,
                  "end": 1289
                }
              ],
              "start": 1267,
              "end": 1295
            },
            "start": 1220,
            "end": 1295
          }
        ],
        "start": 1180,
        "end": 1297
      },
      "expression": false,
      "start": 1154,
      "end": 1297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleRets2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1308,
        "end": 1321
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1322,
          "end": 1323
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1369,
              "end": 1370
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1389,
                    "end": 1393
                  },
                  "start": 1382,
                  "end": 1394
                }
              ],
              "start": 1372,
              "end": 1400
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1414,
                  "end": 1415
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1419,
                  "end": 1420
                },
                "start": 1414,
                "end": 1420
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1440,
                        "end": 1443
                      },
                      "expression": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1444,
                        "end": 1445
                      },
                      "start": 1439,
                      "end": 1445
                    },
                    "start": 1432,
                    "end": 1446
                  }
                ],
                "start": 1422,
                "end": 1452
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1479,
                      "end": 1488
                    },
                    "start": 1472,
                    "end": 1489
                  }
                ],
                "start": 1462,
                "end": 1495
              },
              "start": 1410,
              "end": 1495
            },
            "start": 1365,
            "end": 1495
          }
        ],
        "start": 1325,
        "end": 1497
      },
      "expression": false,
      "start": 1299,
      "end": 1497
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
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1534,
            "end": 1538
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1542,
              "end": 1545
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1546,
              "end": 1550
            },
            "start": 1541,
            "end": 1550
          },
          "definite": false,
          "start": 1534,
          "end": 1550
        }
      ],
      "declare": false,
      "start": 1530,
      "end": 1551
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
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1556,
            "end": 1560
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1564,
              "end": 1567
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1577
            },
            "start": 1563,
            "end": 1577
          },
          "definite": false,
          "start": 1556,
          "end": 1577
        }
      ],
      "declare": false,
      "start": 1552,
      "end": 1578
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
            "name": "bar3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1583,
            "end": 1587
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1591,
              "end": 1594
            },
            "expression": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1595,
              "end": 1596
            },
            "start": 1590,
            "end": 1596
          },
          "definite": false,
          "start": 1583,
          "end": 1596
        }
      ],
      "declare": false,
      "start": 1579,
      "end": 1597
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1602,
            "end": 1607
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1611,
              "end": 1614
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1616,
                  "end": 1620
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1622,
                  "end": 1631
                }
              ],
              "start": 1615,
              "end": 1632
            },
            "start": 1610,
            "end": 1632
          },
          "definite": false,
          "start": 1602,
          "end": 1632
        }
      ],
      "declare": false,
      "start": 1598,
      "end": 1633
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1633
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
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
    "value": "return",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 76,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109
  },
  {
    "type": "String",
    "value": "\"hello world\"",
    "start": 109,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 173,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Null",
    "value": "null",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 223,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 266,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 273,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "tempVar",
    "start": 277,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 308,
    "end": 309
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 355,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "returnBarWithCase",
    "start": 362,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 459,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "returnFooWithCase",
    "start": 466,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 513,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 559,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 565,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 574,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Null",
    "value": "null",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 624,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "castedGet",
    "start": 635,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 647,
    "end": 648
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 665,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 674,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 727,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 734,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "notCastedGet",
    "start": 738,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 763,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 770,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "getValue",
    "start": 775,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 826,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "castedNull",
    "start": 835,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 862,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866
  },
  {
    "type": "Null",
    "value": "null",
    "start": 866,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 907,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "notCastedNull",
    "start": 916,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 938,
    "end": 944
  },
  {
    "type": "Null",
    "value": "null",
    "start": 945,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 982,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "returnTypeBar",
    "start": 991,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1018,
    "end": 1024
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1025,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1066,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "undefinedBar",
    "start": 1075,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1096,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1108,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1154,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "multipleRets1",
    "start": 1163,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1220,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1262,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1277,
    "end": 1283
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1284,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1299,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "multipleRets2",
    "start": 1308,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1382,
    "end": 1388
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1389,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1405,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1410,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1416,
    "end": 1418
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1432,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1440,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1472,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1479,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1534,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1546,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1552,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1556,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1564,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1568,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1579,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 1583,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1602,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1611,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1616,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1622,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1632,
    "end": 1633
  }
]
```
