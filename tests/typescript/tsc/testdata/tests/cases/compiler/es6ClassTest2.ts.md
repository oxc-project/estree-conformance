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
        "name": "BasicMonster",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
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
              "start": 25,
              "end": 36
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 50,
                        "end": 56
                      },
                      "start": 48,
                      "end": 56
                    },
                    "start": 44,
                    "end": 56
                  },
                  "readonly": false,
                  "static": false,
                  "start": 37,
                  "end": 56
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "health",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "start": 65,
                    "end": 79
                  },
                  "readonly": false,
                  "static": false,
                  "start": 58,
                  "end": 79
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 81,
                "end": 89
              },
              "expression": false,
              "start": 36,
              "end": 89
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 25,
            "end": 89
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 101
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 108
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 110,
                "end": 161
              },
              "expression": false,
              "start": 101,
              "end": 161
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 95,
            "end": 161
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isAlive",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 174
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 177,
              "end": 181
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 167,
            "end": 182
          }
        ],
        "start": 19,
        "end": 184
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 184
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
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 192
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 211
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 212,
                "end": 215
              },
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 217,
                "end": 220
              }
            ],
            "start": 195,
            "end": 221
          },
          "definite": false,
          "start": 190,
          "end": 221
        }
      ],
      "declare": false,
      "start": 186,
      "end": 222
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
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 229
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 248
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 249,
                "end": 252
              },
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 254,
                "end": 257
              }
            ],
            "start": 232,
            "end": 258
          },
          "definite": false,
          "start": 227,
          "end": 258
        }
      ],
      "declare": false,
      "start": 223,
      "end": 259
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
            "start": 260,
            "end": 262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "attack",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 269
          },
          "optional": false,
          "computed": false,
          "start": 260,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 272
          }
        ],
        "optional": false,
        "start": 260,
        "end": 273
      },
      "directive": null,
      "start": 260,
      "end": 274
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 277
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "health",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 275,
          "end": 284
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 287,
          "end": 288
        },
        "start": 275,
        "end": 288
      },
      "directive": null,
      "start": 275,
      "end": 289
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "optional": false,
          "computed": false,
          "start": 290,
          "end": 301
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 304,
                  "end": 307
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 310
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isAlive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 318
                  },
                  "optional": false,
                  "computed": false,
                  "start": 308,
                  "end": 318
                },
                "start": 303,
                "end": 318
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 328
              },
              "optional": false,
              "computed": false,
              "start": 302,
              "end": 328
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 302,
            "end": 330
          }
        ],
        "optional": false,
        "start": 290,
        "end": 331
      },
      "directive": null,
      "start": 290,
      "end": 332
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetSetMonster",
        "optional": false,
        "typeAnnotation": null,
        "start": 340,
        "end": 353
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
              "start": 360,
              "end": 371
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 385,
                        "end": 391
                      },
                      "start": 383,
                      "end": 391
                    },
                    "start": 379,
                    "end": 391
                  },
                  "readonly": false,
                  "static": false,
                  "start": 372,
                  "end": 391
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_health",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 410,
                        "end": 416
                      },
                      "start": 408,
                      "end": 416
                    },
                    "start": 401,
                    "end": 416
                  },
                  "readonly": false,
                  "static": false,
                  "start": 393,
                  "end": 416
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 418,
                "end": 426
              },
              "expression": false,
              "start": 371,
              "end": 426
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 360,
            "end": 426
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 438
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 445
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 447,
                "end": 498
              },
              "expression": false,
              "start": 438,
              "end": 498
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 432,
            "end": 498
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isAlive",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 679
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 699,
                          "end": 703
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_health",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 704,
                          "end": 711
                        },
                        "optional": false,
                        "computed": false,
                        "start": 699,
                        "end": 711
                      },
                      "operator": ">",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 714,
                        "end": 715
                      },
                      "start": 699,
                      "end": 715
                    },
                    "start": 692,
                    "end": 716
                  }
                ],
                "start": 682,
                "end": 722
              },
              "expression": false,
              "start": 679,
              "end": 722
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 668,
            "end": 722
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "health",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 790
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 798,
                      "end": 804
                    },
                    "start": 796,
                    "end": 804
                  },
                  "start": 791,
                  "end": 804
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 820,
                        "end": 825
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 828,
                        "end": 829
                      },
                      "start": 820,
                      "end": 829
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 855,
                              "end": 860
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Health must be non-negative.",
                                "raw": "'Health must be non-negative.'",
                                "start": 861,
                                "end": 891
                              }
                            ],
                            "start": 851,
                            "end": 892
                          },
                          "start": 845,
                          "end": 892
                        }
                      ],
                      "start": 831,
                      "end": 898
                    },
                    "alternate": null,
                    "start": 816,
                    "end": 898
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 907,
                          "end": 911
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_health",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 919
                        },
                        "optional": false,
                        "computed": false,
                        "start": 907,
                        "end": 919
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 922,
                        "end": 927
                      },
                      "start": 907,
                      "end": 927
                    },
                    "directive": null,
                    "start": 907,
                    "end": 927
                  }
                ],
                "start": 806,
                "end": 931
              },
              "expression": false,
              "start": 790,
              "end": 931
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 780,
            "end": 931
          }
        ],
        "start": 354,
        "end": 933
      },
      "abstract": false,
      "declare": false,
      "start": 334,
      "end": 933
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
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 939,
            "end": 941
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 960
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 961,
                "end": 964
              },
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 966,
                "end": 969
              }
            ],
            "start": 944,
            "end": 970
          },
          "definite": false,
          "start": 939,
          "end": 970
        }
      ],
      "declare": false,
      "start": 935,
      "end": 971
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
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 976,
            "end": 978
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BasicMonster",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 997
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 998,
                "end": 1001
              },
              {
                "type": "Literal",
                "value": 100,
                "raw": "100",
                "start": 1003,
                "end": 1006
              }
            ],
            "start": 981,
            "end": 1007
          },
          "definite": false,
          "start": 976,
          "end": 1007
        }
      ],
      "declare": false,
      "start": 972,
      "end": 1008
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
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1009,
            "end": 1011
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "attack",
            "optional": false,
            "typeAnnotation": null,
            "start": 1012,
            "end": 1018
          },
          "optional": false,
          "computed": false,
          "start": 1009,
          "end": 1018
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "m4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1021
          }
        ],
        "optional": false,
        "start": 1009,
        "end": 1022
      },
      "directive": null,
      "start": 1009,
      "end": 1023
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1024,
            "end": 1026
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "health",
            "optional": false,
            "typeAnnotation": null,
            "start": 1027,
            "end": 1033
          },
          "optional": false,
          "computed": false,
          "start": 1024,
          "end": 1033
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1036,
          "end": 1037
        },
        "start": 1024,
        "end": 1037
      },
      "directive": null,
      "start": 1024,
      "end": 1038
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
            "start": 1043,
            "end": 1044
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1049,
                  "end": 1052
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1053,
                    "end": 1055
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isAlive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1056,
                    "end": 1063
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1053,
                  "end": 1063
                },
                "start": 1048,
                "end": 1063
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 1065,
                "end": 1073
              },
              "optional": false,
              "computed": false,
              "start": 1047,
              "end": 1073
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1047,
            "end": 1075
          },
          "definite": false,
          "start": 1043,
          "end": 1075
        }
      ],
      "declare": false,
      "start": 1039,
      "end": 1075
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadedMonster",
        "optional": false,
        "typeAnnotation": null,
        "start": 1083,
        "end": 1100
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
              "start": 1107,
              "end": 1118
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1125,
                      "end": 1131
                    },
                    "start": 1123,
                    "end": 1131
                  },
                  "start": 1119,
                  "end": 1131
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1118,
              "end": 1133
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1107,
            "end": 1133
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1149
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1163,
                        "end": 1169
                      },
                      "start": 1161,
                      "end": 1169
                    },
                    "start": 1157,
                    "end": 1169
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1150,
                  "end": 1169
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "health",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1187,
                        "end": 1193
                      },
                      "start": 1185,
                      "end": 1193
                    },
                    "start": 1178,
                    "end": 1193
                  },
                  "readonly": false,
                  "static": false,
                  "start": 1171,
                  "end": 1193
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1195,
                "end": 1203
              },
              "expression": false,
              "start": 1149,
              "end": 1203
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1138,
            "end": 1203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null,
              "start": 1209,
              "end": 1215
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1215,
              "end": 1218
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1209,
            "end": 1218
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1229
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "type": "TSAnyKeyword",
                      "start": 1233,
                      "end": 1236
                    },
                    "start": 1231,
                    "end": 1236
                  },
                  "start": 1230,
                  "end": 1236
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1229,
              "end": 1238
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1223,
            "end": 1238
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attack",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1249
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
                  "name": "target",
                  "optional": true,
                  "typeAnnotation": null,
                  "start": 1250,
                  "end": 1257
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1259,
                "end": 1311
              },
              "expression": false,
              "start": 1249,
              "end": 1311
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1243,
            "end": 1311
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isAlive",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1324
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1327,
              "end": 1331
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1317,
            "end": 1332
          }
        ],
        "start": 1101,
        "end": 1334
      },
      "abstract": false,
      "declare": false,
      "start": 1077,
      "end": 1334
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
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1340,
            "end": 1342
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "OverloadedMonster",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1366
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 1367,
                "end": 1370
              }
            ],
            "start": 1345,
            "end": 1371
          },
          "definite": false,
          "start": 1340,
          "end": 1371
        }
      ],
      "declare": false,
      "start": 1336,
      "end": 1372
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
            "name": "m6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1377,
            "end": 1379
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "OverloadedMonster",
              "optional": false,
              "typeAnnotation": null,
              "start": 1386,
              "end": 1403
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 1404,
                "end": 1407
              }
            ],
            "start": 1382,
            "end": 1408
          },
          "definite": false,
          "start": 1377,
          "end": 1408
        }
      ],
      "declare": false,
      "start": 1373,
      "end": 1409
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
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1410,
            "end": 1412
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "attack",
            "optional": false,
            "typeAnnotation": null,
            "start": 1413,
            "end": 1419
          },
          "optional": false,
          "computed": false,
          "start": 1410,
          "end": 1419
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "m6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1420,
            "end": 1422
          }
        ],
        "optional": false,
        "start": 1410,
        "end": 1423
      },
      "directive": null,
      "start": 1410,
      "end": 1424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m5",
            "optional": false,
            "typeAnnotation": null,
            "start": 1425,
            "end": 1427
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "health",
            "optional": false,
            "typeAnnotation": null,
            "start": 1428,
            "end": 1434
          },
          "optional": false,
          "computed": false,
          "start": 1425,
          "end": 1434
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 1437,
          "end": 1438
        },
        "start": 1425,
        "end": 1438
      },
      "directive": null,
      "start": 1425,
      "end": 1439
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1444,
            "end": 1445
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1450,
                  "end": 1453
                },
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1454,
                    "end": 1456
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isAlive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1457,
                    "end": 1464
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1454,
                  "end": 1464
                },
                "start": 1449,
                "end": 1464
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 1466,
                "end": 1474
              },
              "optional": false,
              "computed": false,
              "start": 1448,
              "end": 1474
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1448,
            "end": 1476
          },
          "definite": false,
          "start": 1444,
          "end": 1476
        }
      ],
      "declare": false,
      "start": 1440,
      "end": 1476
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SplatMonster",
        "optional": false,
        "typeAnnotation": null,
        "start": 1484,
        "end": 1496
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
              "start": 1503,
              "end": 1514
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1518,
                    "end": 1522
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 1524,
                        "end": 1530
                      },
                      "start": 1524,
                      "end": 1532
                    },
                    "start": 1522,
                    "end": 1532
                  },
                  "value": null,
                  "start": 1515,
                  "end": 1532
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1534,
                "end": 1537
              },
              "expression": false,
              "start": 1514,
              "end": 1537
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1503,
            "end": 1537
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "roar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1546
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1553,
                      "end": 1559
                    },
                    "start": 1551,
                    "end": 1559
                  },
                  "start": 1547,
                  "end": 1559
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1564,
                    "end": 1568
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1570,
                        "end": 1576
                      },
                      "start": 1570,
                      "end": 1578
                    },
                    "start": 1568,
                    "end": 1578
                  },
                  "value": null,
                  "start": 1561,
                  "end": 1578
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1580,
                "end": 1583
              },
              "expression": false,
              "start": 1546,
              "end": 1583
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1542,
            "end": 1583
          }
        ],
        "start": 1497,
        "end": 1585
      },
      "abstract": false,
      "declare": false,
      "start": 1478,
      "end": 1585
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1597,
        "end": 1600
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
              "value": true,
              "raw": "true",
              "start": 1612,
              "end": 1616
            },
            "start": 1605,
            "end": 1617
          }
        ],
        "start": 1603,
        "end": 1619
      },
      "expression": false,
      "start": 1588,
      "end": 1619
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrototypeMonster",
        "optional": false,
        "typeAnnotation": null,
        "start": 1626,
        "end": 1642
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
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 1649,
              "end": 1652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1654,
                "end": 1660
              },
              "start": 1652,
              "end": 1660
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1663,
              "end": 1664
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1649,
            "end": 1665
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1670,
              "end": 1674
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1676,
                "end": 1682
              },
              "start": 1674,
              "end": 1682
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1670,
            "end": 1683
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1688,
              "end": 1689
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1692,
                "end": 1695
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1692,
              "end": 1697
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1688,
            "end": 1698
          }
        ],
        "start": 1643,
        "end": 1700
      },
      "abstract": false,
      "declare": false,
      "start": 1620,
      "end": 1700
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperParent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1708,
        "end": 1719
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
              "start": 1726,
              "end": 1737
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
                      "type": "TSNumberKeyword",
                      "start": 1741,
                      "end": 1747
                    },
                    "start": 1739,
                    "end": 1747
                  },
                  "start": 1738,
                  "end": 1747
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1749,
                "end": 1757
              },
              "expression": false,
              "start": 1737,
              "end": 1757
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1726,
            "end": 1757
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1763,
              "end": 1764
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1768,
                      "end": 1774
                    },
                    "start": 1766,
                    "end": 1774
                  },
                  "start": 1765,
                  "end": 1774
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1776,
                "end": 1784
              },
              "expression": false,
              "start": 1764,
              "end": 1784
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1763,
            "end": 1784
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1790,
              "end": 1791
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
                "start": 1794,
                "end": 1802
              },
              "expression": false,
              "start": 1791,
              "end": 1802
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1790,
            "end": 1802
          }
        ],
        "start": 1720,
        "end": 1804
      },
      "abstract": false,
      "declare": false,
      "start": 1702,
      "end": 1804
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperChild",
        "optional": false,
        "typeAnnotation": null,
        "start": 1812,
        "end": 1822
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperParent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1831,
        "end": 1842
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
              "start": 1849,
              "end": 1860
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
                        "start": 1873,
                        "end": 1878
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1879,
                          "end": 1880
                        }
                      ],
                      "optional": false,
                      "start": 1873,
                      "end": 1881
                    },
                    "directive": null,
                    "start": 1873,
                    "end": 1882
                  }
                ],
                "start": 1863,
                "end": 1888
              },
              "expression": false,
              "start": 1860,
              "end": 1888
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1849,
            "end": 1888
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1894,
              "end": 1895
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
                          "start": 1908,
                          "end": 1913
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1914,
                          "end": 1915
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1908,
                        "end": 1915
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "str",
                          "raw": "'str'",
                          "start": 1916,
                          "end": 1921
                        }
                      ],
                      "optional": false,
                      "start": 1908,
                      "end": 1922
                    },
                    "directive": null,
                    "start": 1908,
                    "end": 1923
                  }
                ],
                "start": 1898,
                "end": 1929
              },
              "expression": false,
              "start": 1895,
              "end": 1929
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1894,
            "end": 1929
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1935,
              "end": 1936
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
                          "start": 1949,
                          "end": 1954
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1955,
                          "end": 1956
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1949,
                        "end": 1956
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1949,
                      "end": 1958
                    },
                    "directive": null,
                    "start": 1949,
                    "end": 1959
                  }
                ],
                "start": 1939,
                "end": 1965
              },
              "expression": false,
              "start": 1936,
              "end": 1965
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1935,
            "end": 1965
          }
        ],
        "start": 1843,
        "end": 1967
      },
      "abstract": false,
      "declare": false,
      "start": 1806,
      "end": 1967
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Statics",
        "optional": false,
        "typeAnnotation": null,
        "start": 1975,
        "end": 1982
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1996,
              "end": 1999
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2002,
              "end": 2003
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1989,
            "end": 2004
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2016,
              "end": 2019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2021,
                "end": 2027
              },
              "start": 2019,
              "end": 2027
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2009,
            "end": 2028
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 2041,
              "end": 2044
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 2064,
                      "end": 2066
                    },
                    "start": 2057,
                    "end": 2067
                  }
                ],
                "start": 2047,
                "end": 2073
              },
              "expression": false,
              "start": 2044,
              "end": 2073
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2034,
            "end": 2073
          }
        ],
        "start": 1983,
        "end": 2075
      },
      "abstract": false,
      "declare": false,
      "start": 1969,
      "end": 2075
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
            "name": "stat",
            "optional": false,
            "typeAnnotation": null,
            "start": 2081,
            "end": 2085
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Statics",
              "optional": false,
              "typeAnnotation": null,
              "start": 2092,
              "end": 2099
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2088,
            "end": 2101
          },
          "definite": false,
          "start": 2081,
          "end": 2101
        }
      ],
      "declare": false,
      "start": 2077,
      "end": 2102
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2114,
        "end": 2118
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2125,
              "end": 2126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2128,
                "end": 2134
              },
              "start": 2126,
              "end": 2134
            },
            "accessibility": null,
            "static": false,
            "start": 2125,
            "end": 2135
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2140,
              "end": 2141
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2143,
                "end": 2149
              },
              "start": 2141,
              "end": 2149
            },
            "accessibility": null,
            "static": false,
            "start": 2140,
            "end": 2150
          }
        ],
        "start": 2119,
        "end": 2152
      },
      "declare": false,
      "start": 2104,
      "end": 2152
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImplementsInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2160,
        "end": 2179
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2191,
            "end": 2195
          },
          "typeArguments": null,
          "start": 2191,
          "end": 2195
        }
      ],
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
              "start": 2209,
              "end": 2210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2212,
                "end": 2218
              },
              "start": 2210,
              "end": 2218
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2202,
            "end": 2219
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2231,
              "end": 2232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2234,
                "end": 2240
              },
              "start": 2232,
              "end": 2240
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2224,
            "end": 2241
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2246,
              "end": 2257
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
                          "type": "ThisExpression",
                          "start": 2270,
                          "end": 2274
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2275,
                          "end": 2276
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2270,
                        "end": 2276
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2279,
                        "end": 2280
                      },
                      "start": 2270,
                      "end": 2280
                    },
                    "directive": null,
                    "start": 2270,
                    "end": 2281
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2290,
                          "end": 2294
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2295,
                          "end": 2296
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2290,
                        "end": 2296
                      },
                      "right": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 2299,
                        "end": 2304
                      },
                      "start": 2290,
                      "end": 2304
                    },
                    "directive": null,
                    "start": 2290,
                    "end": 2305
                  }
                ],
                "start": 2260,
                "end": 2311
              },
              "expression": false,
              "start": 2257,
              "end": 2311
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2246,
            "end": 2311
          }
        ],
        "start": 2196,
        "end": 2313
      },
      "abstract": false,
      "declare": false,
      "start": 2154,
      "end": 2313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Visibility",
        "optional": false,
        "typeAnnotation": null,
        "start": 2321,
        "end": 2331
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2345,
              "end": 2348
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
                "start": 2351,
                "end": 2354
              },
              "expression": false,
              "start": 2348,
              "end": 2354
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2338,
            "end": 2354
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2367,
              "end": 2370
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
                "start": 2373,
                "end": 2376
              },
              "expression": false,
              "start": 2370,
              "end": 2376
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2359,
            "end": 2376
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2389,
              "end": 2390
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2392,
                "end": 2398
              },
              "start": 2390,
              "end": 2398
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2381,
            "end": 2399
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2411,
              "end": 2412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2414,
                "end": 2420
              },
              "start": 2412,
              "end": 2420
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2404,
            "end": 2421
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2433,
              "end": 2434
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2436,
                "end": 2442
              },
              "start": 2434,
              "end": 2442
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2426,
            "end": 2443
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2448,
              "end": 2459
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
                          "type": "ThisExpression",
                          "start": 2472,
                          "end": 2476
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2477,
                          "end": 2478
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2472,
                        "end": 2478
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2481,
                        "end": 2482
                      },
                      "start": 2472,
                      "end": 2482
                    },
                    "directive": null,
                    "start": 2472,
                    "end": 2483
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2492,
                          "end": 2496
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2497,
                          "end": 2498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2492,
                        "end": 2498
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 2501,
                        "end": 2502
                      },
                      "start": 2492,
                      "end": 2502
                    },
                    "directive": null,
                    "start": 2492,
                    "end": 2503
                  }
                ],
                "start": 2462,
                "end": 2509
              },
              "expression": false,
              "start": 2459,
              "end": 2509
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2448,
            "end": 2509
          }
        ],
        "start": 2332,
        "end": 2511
      },
      "abstract": false,
      "declare": false,
      "start": 2315,
      "end": 2511
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClassWithConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2519,
        "end": 2543
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
              "start": 2550,
              "end": 2561
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2572,
                        "end": 2578
                      },
                      "start": 2570,
                      "end": 2578
                    },
                    "start": 2569,
                    "end": 2578
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2562,
                  "end": 2578
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2590,
                        "end": 2596
                      },
                      "start": 2588,
                      "end": 2596
                    },
                    "start": 2587,
                    "end": 2596
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2580,
                  "end": 2596
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2598,
                "end": 2601
              },
              "expression": false,
              "start": 2561,
              "end": 2601
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2550,
            "end": 2601
          }
        ],
        "start": 2544,
        "end": 2603
      },
      "abstract": false,
      "declare": false,
      "start": 2513,
      "end": 2603
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ChildClassWithoutConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2635,
        "end": 2663
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseClassWithConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2672,
        "end": 2696
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2697,
        "end": 2700
      },
      "abstract": false,
      "declare": false,
      "start": 2629,
      "end": 2700
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
            "name": "ccwc",
            "optional": false,
            "typeAnnotation": null,
            "start": 2707,
            "end": 2711
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ChildClassWithoutConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2718,
              "end": 2746
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2747,
                "end": 2748
              },
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 2750,
                "end": 2753
              }
            ],
            "start": 2714,
            "end": 2754
          },
          "definite": false,
          "start": 2707,
          "end": 2754
        }
      ],
      "declare": false,
      "start": 2703,
      "end": 2755
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2756
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
    "value": "BasicMonster",
    "start": 6,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 25,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 37,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "health",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "attack",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "isAlive",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "BasicMonster",
    "start": 199,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 232,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "BasicMonster",
    "start": 236,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 254,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "attack",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "health",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 290,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "isAlive",
    "start": 311,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 320,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "class",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "GetSetMonster",
    "start": 340,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 360,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 372,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 393,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "_health",
    "start": 401,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "attack",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 668,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "isAlive",
    "start": 672,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 692,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "_health",
    "start": 704,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 712,
    "end": 713
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 780,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "health",
    "start": 784,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 791,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 806,
    "end": 807
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 820,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 826,
    "end": 827
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 845,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 851,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 855,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "String",
    "value": "'Health must be non-negative.'",
    "start": 861,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 907,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "_health",
    "start": 912,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 922,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 935,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 944,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "BasicMonster",
    "start": 948,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 961,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 972,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 976,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "BasicMonster",
    "start": 985,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1009,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "attack",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 1019,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1024,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "health",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1036,
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
    "value": "var",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1053,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "isAlive",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1065,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1077,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "OverloadedMonster",
    "start": 1083,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1107,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1138,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1150,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1157,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "health",
    "start": 1178,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "attack",
    "start": 1209,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "attack",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "attack",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "isAlive",
    "start": 1317,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1327,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1340,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "OverloadedMonster",
    "start": 1349,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1367,
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
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1373,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1377,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1382,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "OverloadedMonster",
    "start": 1386,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1410,
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
    "value": "attack",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "m6",
    "start": 1420,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1425,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "health",
    "start": 1428,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "var",
    "start": 1440,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1450,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 1454,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "isAlive",
    "start": 1457,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1466,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1478,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "SplatMonster",
    "start": 1484,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1503,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1518,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1524,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "roar",
    "start": 1542,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1547,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1553,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1564,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1588,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1597,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1605,
    "end": 1611
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1612,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1620,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "PrototypeMonster",
    "start": 1626,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 1649,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1654,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1670,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1676,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1692,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1702,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "SuperParent",
    "start": 1708,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1726,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1741,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1768,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1806,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "SuperChild",
    "start": 1812,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1823,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "SuperParent",
    "start": 1831,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1849,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1873,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "b",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1908,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 1916,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1949,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1969,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "Statics",
    "start": 1975,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1989,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1996,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2009,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2016,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2021,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2034,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2041,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2057,
    "end": 2063
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2064,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2077,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "stat",
    "start": 2081,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2088,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "Statics",
    "start": 2092,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2104,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2114,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2128,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2143,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2154,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "ImplementsInterface",
    "start": 2160,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 2180,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "IFoo",
    "start": 2191,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2202,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2212,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2224,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2234,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2246,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2270,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2290,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2299,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2315,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "Visibility",
    "start": 2321,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2338,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2345,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2359,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2367,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2381,
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
    "value": ":",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2392,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2404,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2414,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2426,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2436,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2448,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2472,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2492,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2513,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "BaseClassWithConstructor",
    "start": 2519,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2550,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2562,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2572,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2580,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2590,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2629,
    "end": 2634
  },
  {
    "type": "Identifier",
    "value": "ChildClassWithoutConstructor",
    "start": 2635,
    "end": 2663
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2664,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "BaseClassWithConstructor",
    "start": 2672,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2703,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "ccwc",
    "start": 2707,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2714,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "ChildClassWithoutConstructor",
    "start": 2718,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 2750,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2754,
    "end": 2755
  }
]
```
