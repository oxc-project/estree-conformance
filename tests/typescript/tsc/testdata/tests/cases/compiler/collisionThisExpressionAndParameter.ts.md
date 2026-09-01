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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
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
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 34,
                          "end": 39
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 42,
                          "end": 44
                        },
                        "definite": false,
                        "start": 34,
                        "end": 44
                      }
                    ],
                    "declare": false,
                    "start": 30,
                    "end": 45
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 122
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 130,
                            "end": 136
                          },
                          "start": 128,
                          "end": 136
                        },
                        "start": 123,
                        "end": 136
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 169,
                                "end": 170
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ThisExpression",
                              "start": 174,
                              "end": 178
                            },
                            "id": null,
                            "generator": false,
                            "start": 169,
                            "end": 178
                          },
                          "start": 162,
                          "end": 179
                        }
                      ],
                      "start": 138,
                      "end": 261
                    },
                    "expression": false,
                    "start": 108,
                    "end": 261
                  }
                ],
                "start": 20,
                "end": 267
              },
              "expression": false,
              "start": 17,
              "end": 267
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 267
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
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
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 295
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 306,
                                  "end": 312
                                },
                                "start": 304,
                                "end": 312
                              },
                              "start": 299,
                              "end": 312
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 348,
                                      "end": 349
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 353,
                                    "end": 357
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 348,
                                  "end": 357
                                },
                                "start": 341,
                                "end": 358
                              }
                            ],
                            "start": 317,
                            "end": 420
                          },
                          "id": null,
                          "generator": false,
                          "start": 298,
                          "end": 420
                        },
                        "definite": false,
                        "start": 290,
                        "end": 420
                      }
                    ],
                    "declare": false,
                    "start": 286,
                    "end": 420
                  }
                ],
                "start": 276,
                "end": 426
              },
              "expression": false,
              "start": 273,
              "end": 426
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 272,
            "end": 426
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 440,
                      "end": 446
                    },
                    "start": 438,
                    "end": 446
                  },
                  "start": 433,
                  "end": 446
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
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 472,
                          "end": 478
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
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 508,
                                      "end": 509
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 513,
                                    "end": 517
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 508,
                                  "end": 517
                                },
                                "start": 501,
                                "end": 518
                              }
                            ],
                            "start": 487,
                            "end": 580
                          },
                          "id": null,
                          "generator": false,
                          "start": 481,
                          "end": 580
                        },
                        "definite": false,
                        "start": 472,
                        "end": 580
                      }
                    ],
                    "declare": false,
                    "start": 468,
                    "end": 580
                  }
                ],
                "start": 448,
                "end": 586
              },
              "expression": false,
              "start": 432,
              "end": 586
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 431,
            "end": 586
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 594
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
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 616
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 619,
                          "end": 621
                        },
                        "definite": false,
                        "start": 611,
                        "end": 621
                      }
                    ],
                    "declare": false,
                    "start": 607,
                    "end": 622
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 694,
                      "end": 699
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 707,
                            "end": 713
                          },
                          "start": 705,
                          "end": 713
                        },
                        "start": 700,
                        "end": 713
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 715,
                      "end": 739
                    },
                    "expression": false,
                    "start": 685,
                    "end": 739
                  }
                ],
                "start": 597,
                "end": 745
              },
              "expression": false,
              "start": 594,
              "end": 745
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 592,
            "end": 745
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 752
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
                          "name": "lamda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 769,
                          "end": 774
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 785,
                                  "end": 791
                                },
                                "start": 783,
                                "end": 791
                              },
                              "start": 778,
                              "end": 791
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 796,
                            "end": 820
                          },
                          "id": null,
                          "generator": false,
                          "start": 777,
                          "end": 820
                        },
                        "definite": false,
                        "start": 769,
                        "end": 820
                      }
                    ],
                    "declare": false,
                    "start": 765,
                    "end": 820
                  }
                ],
                "start": 755,
                "end": 826
              },
              "expression": false,
              "start": 752,
              "end": 826
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 750,
            "end": 826
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 833
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 841,
                      "end": 847
                    },
                    "start": 839,
                    "end": 847
                  },
                  "start": 834,
                  "end": 847
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
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 876,
                          "end": 882
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
                            "body": [],
                            "start": 891,
                            "end": 902
                          },
                          "id": null,
                          "generator": false,
                          "start": 885,
                          "end": 902
                        },
                        "definite": false,
                        "start": 876,
                        "end": 902
                      }
                    ],
                    "declare": false,
                    "start": 872,
                    "end": 902
                  }
                ],
                "start": 849,
                "end": 908
              },
              "expression": false,
              "start": 833,
              "end": 908
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 831,
            "end": 908
          }
        ],
        "start": 10,
        "end": 910
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 910
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 921
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
              "start": 928,
              "end": 939
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 947,
                      "end": 953
                    },
                    "start": 945,
                    "end": 953
                  },
                  "start": 940,
                  "end": 953
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
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 978,
                          "end": 980
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
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 997,
                                "end": 1004
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1007,
                                    "end": 1015
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1051,
                                            "end": 1059
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1060,
                                              "end": 1064
                                            }
                                          ],
                                          "optional": false,
                                          "start": 1051,
                                          "end": 1065
                                        },
                                        "start": 1044,
                                        "end": 1066
                                      }
                                    ],
                                    "start": 1026,
                                    "end": 1080
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1020,
                                  "end": 1080
                                },
                                "id": null,
                                "generator": false,
                                "start": 1006,
                                "end": 1080
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 997,
                              "end": 1080
                            }
                          ],
                          "start": 983,
                          "end": 1090
                        },
                        "definite": false,
                        "start": 978,
                        "end": 1090
                      }
                    ],
                    "declare": false,
                    "start": 974,
                    "end": 1090
                  }
                ],
                "start": 955,
                "end": 1096
              },
              "expression": false,
              "start": 939,
              "end": 1096
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 928,
            "end": 1096
          }
        ],
        "start": 922,
        "end": 1098
      },
      "abstract": false,
      "declare": false,
      "start": 911,
      "end": 1098
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1126,
                      "end": 1129
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1135,
                            "end": 1138
                          },
                          "start": 1133,
                          "end": 1138
                        },
                        "start": 1130,
                        "end": 1138
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1126,
                    "end": 1140
                  }
                ],
                "start": 1120,
                "end": 1142
              },
              "start": 1118,
              "end": 1142
            },
            "start": 1111,
            "end": 1142
          },
          "init": null,
          "definite": false,
          "start": 1111,
          "end": 1142
        }
      ],
      "declare": true,
      "start": 1099,
      "end": 1142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1153,
        "end": 1155
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1163,
              "end": 1169
            },
            "start": 1161,
            "end": 1169
          },
          "start": 1156,
          "end": 1169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                          "start": 1184,
                          "end": 1191
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1192,
                          "end": 1195
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1184,
                        "end": 1195
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1196,
                            "end": 1200
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1201,
                            "end": 1202
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1196,
                          "end": 1202
                        }
                      ],
                      "optional": false,
                      "start": 1184,
                      "end": 1203
                    },
                    "directive": null,
                    "start": 1184,
                    "end": 1204
                  }
                ],
                "start": 1182,
                "end": 1206
              },
              "id": null,
              "generator": false,
              "start": 1177,
              "end": 1206
            },
            "directive": null,
            "start": 1177,
            "end": 1207
          }
        ],
        "start": 1171,
        "end": 1209
      },
      "expression": false,
      "start": 1144,
      "end": 1209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1225,
        "end": 1229
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
              "start": 1236,
              "end": 1247
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1255,
                      "end": 1261
                    },
                    "start": 1253,
                    "end": 1261
                  },
                  "start": 1248,
                  "end": 1261
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1247,
              "end": 1263
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1236,
            "end": 1263
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1295
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1303,
                      "end": 1309
                    },
                    "start": 1301,
                    "end": 1309
                  },
                  "start": 1296,
                  "end": 1309
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1295,
              "end": 1311
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1294,
            "end": 1311
          }
        ],
        "start": 1230,
        "end": 1339
      },
      "abstract": false,
      "declare": true,
      "start": 1211,
      "end": 1339
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1357,
        "end": 1359
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1367,
              "end": 1373
            },
            "start": 1365,
            "end": 1373
          },
          "start": 1360,
          "end": 1373
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1340,
      "end": 1375
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1395,
        "end": 1399
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
              "start": 1406,
              "end": 1417
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1425,
                      "end": 1431
                    },
                    "start": 1423,
                    "end": 1431
                  },
                  "start": 1418,
                  "end": 1431
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1417,
              "end": 1433
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1406,
            "end": 1433
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
              "start": 1464,
              "end": 1475
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1483,
                      "end": 1489
                    },
                    "start": 1481,
                    "end": 1489
                  },
                  "start": 1476,
                  "end": 1489
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1475,
              "end": 1491
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1464,
            "end": 1491
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
              "start": 1522,
              "end": 1533
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1541,
                      "end": 1544
                    },
                    "start": 1539,
                    "end": 1544
                  },
                  "start": 1534,
                  "end": 1544
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
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1569,
                          "end": 1571
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
                                "name": "doStuff",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1588,
                                "end": 1595
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1598,
                                    "end": 1606
                                  }
                                ],
                                "returnType": null,
                                "body": {
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
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "callback",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1642,
                                            "end": 1650
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1651,
                                              "end": 1655
                                            }
                                          ],
                                          "optional": false,
                                          "start": 1642,
                                          "end": 1656
                                        },
                                        "start": 1635,
                                        "end": 1657
                                      }
                                    ],
                                    "start": 1617,
                                    "end": 1671
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1611,
                                  "end": 1671
                                },
                                "id": null,
                                "generator": false,
                                "start": 1597,
                                "end": 1671
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 1588,
                              "end": 1671
                            }
                          ],
                          "start": 1574,
                          "end": 1681
                        },
                        "definite": false,
                        "start": 1569,
                        "end": 1681
                      }
                    ],
                    "declare": false,
                    "start": 1565,
                    "end": 1681
                  }
                ],
                "start": 1546,
                "end": 1687
              },
              "expression": false,
              "start": 1533,
              "end": 1687
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1522,
            "end": 1687
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1694
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1702,
                      "end": 1708
                    },
                    "start": 1700,
                    "end": 1708
                  },
                  "start": 1695,
                  "end": 1708
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1694,
              "end": 1710
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1693,
            "end": 1710
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1742
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1750,
                      "end": 1756
                    },
                    "start": 1748,
                    "end": 1756
                  },
                  "start": 1743,
                  "end": 1756
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1742,
              "end": 1758
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1741,
            "end": 1758
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1789,
              "end": 1790
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1798,
                      "end": 1801
                    },
                    "start": 1796,
                    "end": 1801
                  },
                  "start": 1791,
                  "end": 1801
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
                          "name": "lambda",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1827,
                          "end": 1833
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
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1863,
                                      "end": 1864
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "ThisExpression",
                                    "start": 1868,
                                    "end": 1872
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1863,
                                  "end": 1872
                                },
                                "start": 1856,
                                "end": 1873
                              }
                            ],
                            "start": 1842,
                            "end": 1935
                          },
                          "id": null,
                          "generator": false,
                          "start": 1836,
                          "end": 1935
                        },
                        "definite": false,
                        "start": 1827,
                        "end": 1935
                      }
                    ],
                    "declare": false,
                    "start": 1823,
                    "end": 1935
                  }
                ],
                "start": 1803,
                "end": 1941
              },
              "expression": false,
              "start": 1790,
              "end": 1941
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1789,
            "end": 1941
          }
        ],
        "start": 1400,
        "end": 1943
      },
      "abstract": false,
      "declare": false,
      "start": 1389,
      "end": 1943
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1971,
                      "end": 1974
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1980,
                            "end": 1983
                          },
                          "start": 1978,
                          "end": 1983
                        },
                        "start": 1975,
                        "end": 1983
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1971,
                    "end": 1985
                  }
                ],
                "start": 1965,
                "end": 1987
              },
              "start": 1963,
              "end": 1987
            },
            "start": 1956,
            "end": 1987
          },
          "init": null,
          "definite": false,
          "start": 1956,
          "end": 1987
        }
      ],
      "declare": true,
      "start": 1944,
      "end": 1987
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1998,
        "end": 2000
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2008,
              "end": 2014
            },
            "start": 2006,
            "end": 2014
          },
          "start": 2001,
          "end": 2014
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1989,
      "end": 2016
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2052,
        "end": 2054
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2062,
              "end": 2068
            },
            "start": 2060,
            "end": 2068
          },
          "start": 2055,
          "end": 2068
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2043,
      "end": 2070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2106,
        "end": 2108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2116,
              "end": 2119
            },
            "start": 2114,
            "end": 2119
          },
          "start": 2109,
          "end": 2119
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2127,
                  "end": 2128
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2134,
                          "end": 2141
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2142,
                          "end": 2145
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2134,
                        "end": 2145
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2146,
                            "end": 2150
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2151,
                            "end": 2152
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2146,
                          "end": 2152
                        }
                      ],
                      "optional": false,
                      "start": 2134,
                      "end": 2153
                    },
                    "directive": null,
                    "start": 2134,
                    "end": 2154
                  }
                ],
                "start": 2132,
                "end": 2156
              },
              "id": null,
              "generator": false,
              "start": 2127,
              "end": 2156
            },
            "directive": null,
            "start": 2127,
            "end": 2157
          }
        ],
        "start": 2121,
        "end": 2159
      },
      "expression": false,
      "start": 2097,
      "end": 2159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2175,
        "end": 2179
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
              "start": 2186,
              "end": 2197
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2205,
                      "end": 2211
                    },
                    "start": 2203,
                    "end": 2211
                  },
                  "start": 2198,
                  "end": 2211
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2197,
              "end": 2213
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2186,
            "end": 2213
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
              "start": 2244,
              "end": 2255
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2263,
                      "end": 2269
                    },
                    "start": 2261,
                    "end": 2269
                  },
                  "start": 2256,
                  "end": 2269
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2255,
              "end": 2271
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2244,
            "end": 2271
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2302,
              "end": 2303
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2311,
                      "end": 2317
                    },
                    "start": 2309,
                    "end": 2317
                  },
                  "start": 2304,
                  "end": 2317
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2303,
              "end": 2319
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2302,
            "end": 2319
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 2350,
              "end": 2351
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
                  "name": "_this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2359,
                      "end": 2365
                    },
                    "start": 2357,
                    "end": 2365
                  },
                  "start": 2352,
                  "end": 2365
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2351,
              "end": 2367
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2350,
            "end": 2367
          }
        ],
        "start": 2180,
        "end": 2395
      },
      "abstract": false,
      "declare": true,
      "start": 2161,
      "end": 2395
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2414,
        "end": 2416
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2424,
              "end": 2430
            },
            "start": 2422,
            "end": 2430
          },
          "start": 2417,
          "end": 2430
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2397,
      "end": 2432
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2476,
        "end": 2478
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2486,
              "end": 2492
            },
            "start": 2484,
            "end": 2492
          },
          "start": 2479,
          "end": 2492
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2459,
      "end": 2494
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2520
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
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 16,
    "end": 17
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
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 162,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "lamda",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 341,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 350,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 484,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 501,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 510,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 611,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 617,
    "end": 618
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 619,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 685,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 700,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 707,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "lamda",
    "start": 769,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 778,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 785,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 831,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 834,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 872,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 876,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 911,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 917,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 928,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 940,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 947,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 974,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "doStuff",
    "start": 997,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1007,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1017,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1020,
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
    "value": "=>",
    "start": 1023,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1051,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1060,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
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
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1099,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1107,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1111,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 1130,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1144,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1156,
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
    "value": "number",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1179,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1184,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1192,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1196,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1211,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1219,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 1225,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1236,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1255,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1296,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1303,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1340,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1348,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1360,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1367,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1389,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 1395,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1406,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1418,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1425,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1464,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1476,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1522,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1534,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1541,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1565,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1569,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "doStuff",
    "start": 1588,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1598,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1608,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1614,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1635,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1642,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1651,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1695,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1702,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1743,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1750,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 1791,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1798,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "lambda",
    "start": 1827,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1839,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1865,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1868,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1944,
    "end": 1951
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1952,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1956,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1971,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "msg",
    "start": 1975,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1980,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1989,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1998,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2001,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2008,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2043,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2052,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2055,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2062,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2097,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2106,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2109,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2116,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2129,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 2134,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2142,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2146,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2161,
    "end": 2168
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2169,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "Foo4",
    "start": 2175,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2186,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2198,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2205,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2244,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2256,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2263,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2304,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2311,
    "end": 2317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2352,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2359,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2397,
    "end": 2404
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2405,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2414,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2417,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2424,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2459,
    "end": 2466
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2467,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2476,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 2479,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2486,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2493,
    "end": 2494
  }
]
```
