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
        "name": "NoBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 249
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
              "start": 256,
              "end": 267
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
                          "start": 284,
                          "end": 285
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 288,
                            "end": 293
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 294,
                            "end": 303
                          },
                          "optional": false,
                          "computed": false,
                          "start": 288,
                          "end": 303
                        },
                        "definite": false,
                        "start": 284,
                        "end": 303
                      }
                    ],
                    "declare": false,
                    "start": 280,
                    "end": 304
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 318
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 321,
                              "end": 326
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "hasOwnProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 327,
                              "end": 341
                            },
                            "optional": false,
                            "computed": false,
                            "start": 321,
                            "end": 341
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 342,
                              "end": 344
                            }
                          ],
                          "optional": false,
                          "start": 321,
                          "end": 345
                        },
                        "definite": false,
                        "start": 317,
                        "end": 345
                      }
                    ],
                    "declare": false,
                    "start": 313,
                    "end": 346
                  }
                ],
                "start": 270,
                "end": 352
              },
              "expression": false,
              "start": 267,
              "end": 352
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 256,
            "end": 352
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 360
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
                          "start": 377,
                          "end": 378
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 381,
                            "end": 386
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prototype",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 387,
                            "end": 396
                          },
                          "optional": false,
                          "computed": false,
                          "start": 381,
                          "end": 396
                        },
                        "definite": false,
                        "start": 377,
                        "end": 396
                      }
                    ],
                    "declare": false,
                    "start": 373,
                    "end": 397
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 411
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 414,
                              "end": 419
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "hasOwnProperty",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 420,
                              "end": 434
                            },
                            "optional": false,
                            "computed": false,
                            "start": 414,
                            "end": 434
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 435,
                              "end": 437
                            }
                          ],
                          "optional": false,
                          "start": 414,
                          "end": 438
                        },
                        "definite": false,
                        "start": 410,
                        "end": 438
                      }
                    ],
                    "declare": false,
                    "start": 406,
                    "end": 439
                  }
                ],
                "start": 363,
                "end": 445
              },
              "expression": false,
              "start": 360,
              "end": 445
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 358,
            "end": 445
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 452
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 455,
                "end": 460
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 470
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 470
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 451,
            "end": 471
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 480,
                  "end": 485
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasOwnProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 500
                },
                "optional": false,
                "computed": false,
                "start": 480,
                "end": 500
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 501,
                  "end": 503
                }
              ],
              "optional": false,
              "start": 480,
              "end": 504
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 476,
            "end": 505
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "static1",
              "optional": false,
              "typeAnnotation": null,
              "start": 714,
              "end": 721
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
                          "start": 734,
                          "end": 739
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 754
                        },
                        "optional": false,
                        "computed": false,
                        "start": 734,
                        "end": 754
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 755,
                          "end": 757
                        }
                      ],
                      "optional": false,
                      "start": 734,
                      "end": 758
                    },
                    "directive": null,
                    "start": 734,
                    "end": 759
                  }
                ],
                "start": 724,
                "end": 765
              },
              "expression": false,
              "start": 721,
              "end": 765
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 700,
            "end": 765
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "static2",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 796
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
                          "start": 809,
                          "end": 814
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 815,
                          "end": 829
                        },
                        "optional": false,
                        "computed": false,
                        "start": 809,
                        "end": 829
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 830,
                          "end": 832
                        }
                      ],
                      "optional": false,
                      "start": 809,
                      "end": 833
                    },
                    "directive": null,
                    "start": 809,
                    "end": 834
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 850,
                      "end": 852
                    },
                    "start": 843,
                    "end": 853
                  }
                ],
                "start": 799,
                "end": 859
              },
              "expression": false,
              "start": 796,
              "end": 859
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 771,
            "end": 859
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "static2",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 890
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 891,
                  "end": 892
                }
              ],
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
                          "start": 904,
                          "end": 909
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasOwnProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 910,
                          "end": 924
                        },
                        "optional": false,
                        "computed": false,
                        "start": 904,
                        "end": 924
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 925,
                          "end": 927
                        }
                      ],
                      "optional": false,
                      "start": 904,
                      "end": 928
                    },
                    "directive": null,
                    "start": 904,
                    "end": 929
                  }
                ],
                "start": 894,
                "end": 935
              },
              "expression": false,
              "start": 890,
              "end": 935
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 865,
            "end": 935
          }
        ],
        "start": 250,
        "end": 937
      },
      "abstract": false,
      "declare": false,
      "start": 237,
      "end": 937
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 945,
        "end": 953
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
              "name": "privateFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 979
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
                "start": 982,
                "end": 985
              },
              "expression": false,
              "start": 979,
              "end": 985
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 960,
            "end": 985
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 1011
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1014,
              "end": 1015
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 990,
            "end": 1016
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1039
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
                "start": 1042,
                "end": 1045
              },
              "expression": false,
              "start": 1039,
              "end": 1045
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1022,
            "end": 1045
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1069
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1072,
              "end": 1073
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1050,
            "end": 1074
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1112
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
                "start": 1115,
                "end": 1118
              },
              "expression": false,
              "start": 1112,
              "end": 1118
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1080,
            "end": 1118
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1157
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1160,
              "end": 1161
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1123,
            "end": 1162
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicStaticFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 1182,
              "end": 1198
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
                "start": 1201,
                "end": 1204
              },
              "expression": false,
              "start": 1198,
              "end": 1204
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1168,
            "end": 1204
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publicStaticMember",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1241
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1244,
              "end": 1245
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1209,
            "end": 1246
          }
        ],
        "start": 954,
        "end": 1249
      },
      "abstract": false,
      "declare": false,
      "start": 939,
      "end": 1249
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1568,
        "end": 1580
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1589,
        "end": 1597
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1604,
              "end": 1615
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
                        "type": "Super",
                        "start": 1628,
                        "end": 1633
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1628,
                      "end": 1635
                    },
                    "directive": null,
                    "start": 1628,
                    "end": 1636
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
                          "start": 1645,
                          "end": 1650
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1651,
                          "end": 1663
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1645,
                        "end": 1663
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1666,
                        "end": 1667
                      },
                      "start": 1645,
                      "end": 1667
                    },
                    "directive": null,
                    "start": 1645,
                    "end": 1668
                  }
                ],
                "start": 1618,
                "end": 1674
              },
              "expression": false,
              "start": 1615,
              "end": 1674
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1604,
            "end": 1674
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1680,
              "end": 1682
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
                          "start": 1699,
                          "end": 1700
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1703,
                            "end": 1708
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1709,
                            "end": 1721
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1703,
                          "end": 1721
                        },
                        "definite": false,
                        "start": 1699,
                        "end": 1721
                      }
                    ],
                    "declare": false,
                    "start": 1695,
                    "end": 1722
                  }
                ],
                "start": 1685,
                "end": 1728
              },
              "expression": false,
              "start": 1682,
              "end": 1728
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1680,
            "end": 1728
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1738,
              "end": 1739
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
                          "start": 1756,
                          "end": 1757
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1760,
                            "end": 1765
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1766,
                            "end": 1778
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1760,
                          "end": 1778
                        },
                        "definite": false,
                        "start": 1756,
                        "end": 1778
                      }
                    ],
                    "declare": false,
                    "start": 1752,
                    "end": 1779
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1795,
                      "end": 1804
                    },
                    "start": 1788,
                    "end": 1805
                  }
                ],
                "start": 1742,
                "end": 1811
              },
              "expression": false,
              "start": 1739,
              "end": 1811
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1734,
            "end": 1811
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1820,
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1822,
                  "end": 1823
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1835,
                        "end": 1836
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1839,
                          "end": 1844
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1845,
                          "end": 1857
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1839,
                        "end": 1857
                      },
                      "start": 1835,
                      "end": 1857
                    },
                    "directive": null,
                    "start": 1835,
                    "end": 1858
                  }
                ],
                "start": 1825,
                "end": 1864
              },
              "expression": false,
              "start": 1821,
              "end": 1864
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1816,
            "end": 1864
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1869,
              "end": 1872
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1894,
                      "end": 1899
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 1916,
                                "end": 1921
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicFunc",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1922,
                                "end": 1932
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1916,
                              "end": 1932
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1916,
                            "end": 1934
                          },
                          "directive": null,
                          "start": 1916,
                          "end": 1935
                        }
                      ],
                      "start": 1902,
                      "end": 1945
                    },
                    "expression": false,
                    "start": 1885,
                    "end": 1945
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
                          "start": 1958,
                          "end": 1959
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
                                "name": "test",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1976,
                                "end": 1980
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
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Super",
                                            "start": 2003,
                                            "end": 2008
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "publicFunc",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2009,
                                            "end": 2019
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 2003,
                                          "end": 2019
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 2003,
                                        "end": 2021
                                      },
                                      "start": 1996,
                                      "end": 2022
                                    }
                                  ],
                                  "start": 1994,
                                  "end": 2024
                                },
                                "expression": false,
                                "start": 1982,
                                "end": 2024
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1976,
                              "end": 2024
                            }
                          ],
                          "start": 1962,
                          "end": 2034
                        },
                        "definite": false,
                        "start": 1958,
                        "end": 2034
                      }
                    ],
                    "declare": false,
                    "start": 1954,
                    "end": 2034
                  }
                ],
                "start": 1875,
                "end": 2040
              },
              "expression": false,
              "start": 1872,
              "end": 2040
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1869,
            "end": 2040
          }
        ],
        "start": 1598,
        "end": 2042
      },
      "abstract": false,
      "declare": false,
      "start": 1562,
      "end": 2042
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2257,
        "end": 2269
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2278,
        "end": 2286
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2293,
              "end": 2304
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
                        "type": "Super",
                        "start": 2317,
                        "end": 2322
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2317,
                      "end": 2324
                    },
                    "directive": null,
                    "start": 2317,
                    "end": 2325
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
                          "start": 2334,
                          "end": 2339
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2340,
                          "end": 2353
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2334,
                        "end": 2353
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2356,
                        "end": 2357
                      },
                      "start": 2334,
                      "end": 2357
                    },
                    "directive": null,
                    "start": 2334,
                    "end": 2358
                  }
                ],
                "start": 2307,
                "end": 2364
              },
              "expression": false,
              "start": 2304,
              "end": 2364
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2293,
            "end": 2364
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2370,
              "end": 2372
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
                          "start": 2389,
                          "end": 2390
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2393,
                            "end": 2398
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2399,
                            "end": 2412
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2393,
                          "end": 2412
                        },
                        "definite": false,
                        "start": 2389,
                        "end": 2412
                      }
                    ],
                    "declare": false,
                    "start": 2385,
                    "end": 2413
                  }
                ],
                "start": 2375,
                "end": 2419
              },
              "expression": false,
              "start": 2372,
              "end": 2419
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2370,
            "end": 2419
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2430
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
                          "start": 2447,
                          "end": 2448
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 2451,
                            "end": 2456
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateMember",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2457,
                            "end": 2470
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2451,
                          "end": 2470
                        },
                        "definite": false,
                        "start": 2447,
                        "end": 2470
                      }
                    ],
                    "declare": false,
                    "start": 2443,
                    "end": 2471
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2487,
                      "end": 2496
                    },
                    "start": 2480,
                    "end": 2497
                  }
                ],
                "start": 2433,
                "end": 2503
              },
              "expression": false,
              "start": 2430,
              "end": 2503
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2425,
            "end": 2503
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2512,
              "end": 2513
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2514,
                  "end": 2515
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2527,
                        "end": 2528
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2531,
                          "end": 2536
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2537,
                          "end": 2550
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2531,
                        "end": 2550
                      },
                      "start": 2527,
                      "end": 2550
                    },
                    "directive": null,
                    "start": 2527,
                    "end": 2551
                  }
                ],
                "start": 2517,
                "end": 2557
              },
              "expression": false,
              "start": 2513,
              "end": 2557
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2508,
            "end": 2557
          }
        ],
        "start": 2287,
        "end": 2559
      },
      "abstract": false,
      "declare": false,
      "start": 2251,
      "end": 2559
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2901,
        "end": 2913
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 2922,
        "end": 2930
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 2944,
              "end": 2946
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 2959,
                          "end": 2964
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2965,
                          "end": 2983
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2959,
                        "end": 2983
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2986,
                        "end": 2987
                      },
                      "start": 2959,
                      "end": 2987
                    },
                    "directive": null,
                    "start": 2959,
                    "end": 2988
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
                          "start": 2997,
                          "end": 3002
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3003,
                          "end": 3022
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2997,
                        "end": 3022
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3025,
                        "end": 3026
                      },
                      "start": 2997,
                      "end": 3026
                    },
                    "directive": null,
                    "start": 2997,
                    "end": 3027
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3036,
                          "end": 3041
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticFunc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3042,
                          "end": 3059
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3036,
                        "end": 3059
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3036,
                      "end": 3061
                    },
                    "directive": null,
                    "start": 3036,
                    "end": 3062
                  }
                ],
                "start": 2949,
                "end": 3068
              },
              "expression": false,
              "start": 2946,
              "end": 3068
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2937,
            "end": 3068
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3084,
              "end": 3085
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3098,
                          "end": 3103
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3104,
                          "end": 3122
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3098,
                        "end": 3122
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3125,
                        "end": 3126
                      },
                      "start": 3098,
                      "end": 3126
                    },
                    "directive": null,
                    "start": 3098,
                    "end": 3127
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
                          "start": 3136,
                          "end": 3141
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3142,
                          "end": 3161
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3136,
                        "end": 3161
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3164,
                        "end": 3165
                      },
                      "start": 3136,
                      "end": 3165
                    },
                    "directive": null,
                    "start": 3136,
                    "end": 3166
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3175,
                          "end": 3180
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticFunc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3181,
                          "end": 3198
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3175,
                        "end": 3198
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3175,
                      "end": 3200
                    },
                    "directive": null,
                    "start": 3175,
                    "end": 3201
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 3217,
                      "end": 3219
                    },
                    "start": 3210,
                    "end": 3220
                  }
                ],
                "start": 3088,
                "end": 3226
              },
              "expression": false,
              "start": 3085,
              "end": 3226
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3073,
            "end": 3226
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3242,
              "end": 3243
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3244,
                  "end": 3245
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3257,
                          "end": 3262
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3263,
                          "end": 3281
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3257,
                        "end": 3281
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3284,
                        "end": 3285
                      },
                      "start": 3257,
                      "end": 3285
                    },
                    "directive": null,
                    "start": 3257,
                    "end": 3286
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
                          "start": 3295,
                          "end": 3300
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticMember",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3301,
                          "end": 3320
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3295,
                        "end": 3320
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 3323,
                        "end": 3324
                      },
                      "start": 3295,
                      "end": 3324
                    },
                    "directive": null,
                    "start": 3295,
                    "end": 3325
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 3334,
                          "end": 3339
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateStaticFunc",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3340,
                          "end": 3357
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3334,
                        "end": 3357
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3334,
                      "end": 3359
                    },
                    "directive": null,
                    "start": 3334,
                    "end": 3360
                  }
                ],
                "start": 3247,
                "end": 3366
              },
              "expression": false,
              "start": 3243,
              "end": 3366
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3231,
            "end": 3366
          }
        ],
        "start": 2931,
        "end": 3368
      },
      "abstract": false,
      "declare": false,
      "start": 2895,
      "end": 3368
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 3395,
            "end": 3398
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3403,
                  "end": 3404
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Super",
                    "start": 3406,
                    "end": 3411
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "wat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3412,
                    "end": 3415
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3406,
                  "end": 3415
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3403,
                "end": 3415
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3417,
                  "end": 3418
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 3420,
                      "end": 3425
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3426,
                      "end": 3429
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3420,
                    "end": 3429
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3420,
                  "end": 3431
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3417,
                "end": 3431
              }
            ],
            "start": 3401,
            "end": 3433
          },
          "definite": false,
          "start": 3395,
          "end": 3433
        }
      ],
      "declare": false,
      "start": 3391,
      "end": 3434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 237,
  "end": 3434
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "NoBase",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 256,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 327,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "String",
    "value": "''",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 381,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 387,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 420,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "String",
    "value": "''",
    "start": 435,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 461,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 486,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501
  },
  {
    "type": "String",
    "value": "''",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 700,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 707,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "static1",
    "start": 714,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 734,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 740,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "String",
    "value": "''",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 771,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 778,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 785,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "static2",
    "start": 789,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 809,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 815,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "String",
    "value": "''",
    "start": 830,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 843,
    "end": 849
  },
  {
    "type": "String",
    "value": "''",
    "start": 850,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 865,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 872,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 879,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "static2",
    "start": 883,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 910,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925
  },
  {
    "type": "String",
    "value": "''",
    "start": 925,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 939,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 945,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 960,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "privateFunc",
    "start": 968,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 990,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "privateMember",
    "start": 998,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1022,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "publicFunc",
    "start": 1029,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "publicMember",
    "start": 1057,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1080,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "privateStaticFunc",
    "start": 1095,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1123,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1131,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "privateStaticMember",
    "start": 1138,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1168,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "publicStaticFunc",
    "start": 1182,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1209,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "publicStaticMember",
    "start": 1223,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1562,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "SomeDerived1",
    "start": 1568,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1581,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 1589,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1604,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1628,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1645,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "publicMember",
    "start": 1651,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1680,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1703,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "publicMember",
    "start": 1709,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1734,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1738,
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
    "value": "{",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1752,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1760,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "publicMember",
    "start": 1766,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1795,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1820,
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
    "value": "n",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1839,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "publicMember",
    "start": 1845,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1885,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1894,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1916,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "publicFunc",
    "start": 1922,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1954,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1976,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1982,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1996,
    "end": 2002
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2003,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "publicFunc",
    "start": 2009,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2251,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "SomeDerived2",
    "start": 2257,
    "end": 2269
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2270,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 2278,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2293,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2317,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2334,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "privateMember",
    "start": 2340,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2370,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2385,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2393,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "privateMember",
    "start": 2399,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2425,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2443,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2451,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "privateMember",
    "start": 2457,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2480,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2487,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2508,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2531,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "privateMember",
    "start": 2537,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2895,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "SomeDerived3",
    "start": 2901,
    "end": 2913
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2914,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "SomeBase",
    "start": 2922,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2937,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2944,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2959,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "publicStaticMember",
    "start": 2965,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 2997,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "privateStaticMember",
    "start": 3003,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3036,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "privateStaticFunc",
    "start": 3042,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3073,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3080,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3098,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "publicStaticMember",
    "start": 3104,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3136,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "privateStaticMember",
    "start": 3142,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3175,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "privateStaticFunc",
    "start": 3181,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3210,
    "end": 3216
  },
  {
    "type": "String",
    "value": "''",
    "start": 3217,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3231,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3238,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3257,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "publicStaticMember",
    "start": 3263,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3295,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "privateStaticMember",
    "start": 3301,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3334,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "privateStaticFunc",
    "start": 3340,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3391,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3395,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3406,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "wat",
    "start": 3412,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 3420,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3426,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3433,
    "end": 3434
  }
]
```
