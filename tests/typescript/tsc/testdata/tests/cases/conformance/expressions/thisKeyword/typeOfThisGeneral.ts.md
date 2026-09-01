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
        "name": "MyTestClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 17
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
              "name": "canary",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
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
            "start": 24,
            "end": 47
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 71
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 52,
            "end": 80
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
              "start": 86,
              "end": 97
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 187
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 190,
                            "end": 194
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 195,
                            "end": 201
                          },
                          "optional": false,
                          "computed": false,
                          "start": 190,
                          "end": 201
                        },
                        "definite": false,
                        "start": 186,
                        "end": 201
                      }
                    ],
                    "declare": false,
                    "start": 182,
                    "end": 202
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 219,
                              "end": 225
                            },
                            "start": 217,
                            "end": 225
                          },
                          "start": 215,
                          "end": 225
                        },
                        "init": null,
                        "definite": true,
                        "start": 215,
                        "end": 225
                      }
                    ],
                    "declare": false,
                    "start": 211,
                    "end": 226
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
                          "start": 235,
                          "end": 239
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 240,
                          "end": 246
                        },
                        "optional": false,
                        "computed": false,
                        "start": 235,
                        "end": 246
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 249,
                        "end": 250
                      },
                      "start": 235,
                      "end": 250
                    },
                    "directive": null,
                    "start": 235,
                    "end": 251
                  }
                ],
                "start": 100,
                "end": 257
              },
              "expression": false,
              "start": 97,
              "end": 257
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 86,
            "end": 257
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memberFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 341,
              "end": 351
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 352,
                    "end": 353
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 356,
                    "end": 360
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 360
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 380,
                                "end": 391
                              },
                              "typeArguments": null,
                              "start": 380,
                              "end": 391
                            },
                            "start": 378,
                            "end": 391
                          },
                          "start": 376,
                          "end": 391
                        },
                        "init": null,
                        "definite": true,
                        "start": 376,
                        "end": 391
                      }
                    ],
                    "declare": false,
                    "start": 372,
                    "end": 392
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 482,
                          "end": 483
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 486,
                          "end": 490
                        },
                        "definite": false,
                        "start": 482,
                        "end": 490
                      }
                    ],
                    "declare": false,
                    "start": 478,
                    "end": 491
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 508,
                                "end": 519
                              },
                              "typeArguments": null,
                              "start": 508,
                              "end": 519
                            },
                            "start": 506,
                            "end": 519
                          },
                          "start": 504,
                          "end": 519
                        },
                        "init": null,
                        "definite": true,
                        "start": 504,
                        "end": 519
                      }
                    ],
                    "declare": false,
                    "start": 500,
                    "end": 520
                  }
                ],
                "start": 362,
                "end": 526
              },
              "expression": false,
              "start": 351,
              "end": 526
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 341,
            "end": 526
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 625
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 643
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 646,
                          "end": 650
                        },
                        "definite": false,
                        "start": 642,
                        "end": 650
                      }
                    ],
                    "declare": false,
                    "start": 638,
                    "end": 651
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 668,
                                "end": 679
                              },
                              "typeArguments": null,
                              "start": 668,
                              "end": 679
                            },
                            "start": 666,
                            "end": 679
                          },
                          "start": 664,
                          "end": 679
                        },
                        "init": null,
                        "definite": true,
                        "start": 664,
                        "end": 679
                      }
                    ],
                    "declare": false,
                    "start": 660,
                    "end": 680
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 696,
                      "end": 700
                    },
                    "start": 689,
                    "end": 701
                  }
                ],
                "start": 628,
                "end": 707
              },
              "expression": false,
              "start": 625,
              "end": 707
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 617,
            "end": 707
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 720
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
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 722
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 738,
                          "end": 739
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 742,
                          "end": 746
                        },
                        "definite": false,
                        "start": 738,
                        "end": 746
                      }
                    ],
                    "declare": false,
                    "start": 734,
                    "end": 747
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 764,
                                "end": 775
                              },
                              "typeArguments": null,
                              "start": 764,
                              "end": 775
                            },
                            "start": 762,
                            "end": 775
                          },
                          "start": 760,
                          "end": 775
                        },
                        "init": null,
                        "definite": true,
                        "start": 760,
                        "end": 775
                      }
                    ],
                    "declare": false,
                    "start": 756,
                    "end": 776
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 785,
                        "end": 786
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 790
                      },
                      "start": 785,
                      "end": 790
                    },
                    "directive": null,
                    "start": 785,
                    "end": 791
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 800,
                        "end": 801
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 804,
                        "end": 805
                      },
                      "start": 800,
                      "end": 805
                    },
                    "directive": null,
                    "start": 800,
                    "end": 806
                  }
                ],
                "start": 724,
                "end": 812
              },
              "expression": false,
              "start": 720,
              "end": 812
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 712,
            "end": 812
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 826
            },
            "typeAnnotation": null,
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 932,
                          "end": 933
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 936,
                          "end": 940
                        },
                        "definite": false,
                        "start": 932,
                        "end": 940
                      }
                    ],
                    "declare": false,
                    "start": 928,
                    "end": 941
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 958,
                                "end": 969
                              },
                              "typeArguments": null,
                              "start": 958,
                              "end": 969
                            },
                            "start": 956,
                            "end": 969
                          },
                          "start": 954,
                          "end": 969
                        },
                        "init": null,
                        "definite": true,
                        "start": 954,
                        "end": 969
                      }
                    ],
                    "declare": false,
                    "start": 950,
                    "end": 970
                  }
                ],
                "start": 835,
                "end": 976
              },
              "id": null,
              "generator": false,
              "start": 829,
              "end": 976
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 818,
            "end": 977
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1078
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1080
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 1083,
                    "end": 1087
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1087
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1114,
                                "end": 1125
                              },
                              "typeArguments": null,
                              "start": 1107,
                              "end": 1125
                            },
                            "start": 1105,
                            "end": 1125
                          },
                          "start": 1103,
                          "end": 1125
                        },
                        "init": null,
                        "definite": true,
                        "start": 1103,
                        "end": 1125
                      }
                    ],
                    "declare": false,
                    "start": 1099,
                    "end": 1126
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1139,
                          "end": 1140
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1143,
                          "end": 1154
                        },
                        "definite": false,
                        "start": 1139,
                        "end": 1154
                      }
                    ],
                    "declare": false,
                    "start": 1135,
                    "end": 1155
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1164,
                        "end": 1165
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1166,
                        "end": 1178
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1164,
                      "end": 1178
                    },
                    "directive": null,
                    "start": 1164,
                    "end": 1179
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1271,
                          "end": 1272
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1275,
                          "end": 1279
                        },
                        "definite": false,
                        "start": 1271,
                        "end": 1279
                      }
                    ],
                    "declare": false,
                    "start": 1267,
                    "end": 1280
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1304,
                                "end": 1315
                              },
                              "typeArguments": null,
                              "start": 1297,
                              "end": 1315
                            },
                            "start": 1295,
                            "end": 1315
                          },
                          "start": 1293,
                          "end": 1315
                        },
                        "init": null,
                        "definite": true,
                        "start": 1293,
                        "end": 1315
                      }
                    ],
                    "declare": false,
                    "start": 1289,
                    "end": 1316
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1329,
                          "end": 1330
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1333,
                          "end": 1344
                        },
                        "definite": false,
                        "start": 1329,
                        "end": 1344
                      }
                    ],
                    "declare": false,
                    "start": 1325,
                    "end": 1345
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1354,
                        "end": 1355
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1356,
                        "end": 1368
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1354,
                      "end": 1368
                    },
                    "directive": null,
                    "start": 1354,
                    "end": 1369
                  }
                ],
                "start": 1089,
                "end": 1375
              },
              "expression": false,
              "start": 1078,
              "end": 1375
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1063,
            "end": 1375
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1392,
              "end": 1402
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1497,
                          "end": 1498
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1501,
                          "end": 1505
                        },
                        "definite": false,
                        "start": 1497,
                        "end": 1505
                      }
                    ],
                    "declare": false,
                    "start": 1493,
                    "end": 1506
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1530,
                                "end": 1541
                              },
                              "typeArguments": null,
                              "start": 1523,
                              "end": 1541
                            },
                            "start": 1521,
                            "end": 1541
                          },
                          "start": 1519,
                          "end": 1541
                        },
                        "init": null,
                        "definite": true,
                        "start": 1519,
                        "end": 1541
                      }
                    ],
                    "declare": false,
                    "start": 1515,
                    "end": 1542
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1555,
                          "end": 1556
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1559,
                          "end": 1570
                        },
                        "definite": false,
                        "start": 1555,
                        "end": 1570
                      }
                    ],
                    "declare": false,
                    "start": 1551,
                    "end": 1571
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1580,
                        "end": 1581
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1594
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1580,
                      "end": 1594
                    },
                    "directive": null,
                    "start": 1580,
                    "end": 1595
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 1611,
                      "end": 1615
                    },
                    "start": 1604,
                    "end": 1616
                  }
                ],
                "start": 1405,
                "end": 1622
              },
              "expression": false,
              "start": 1402,
              "end": 1622
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1381,
            "end": 1622
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 1638,
              "end": 1648
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyTestClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1659,
                        "end": 1670
                      },
                      "typeArguments": null,
                      "start": 1652,
                      "end": 1670
                    },
                    "start": 1650,
                    "end": 1670
                  },
                  "start": 1649,
                  "end": 1670
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1764,
                          "end": 1765
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1768,
                          "end": 1772
                        },
                        "definite": false,
                        "start": 1764,
                        "end": 1772
                      }
                    ],
                    "declare": false,
                    "start": 1760,
                    "end": 1773
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1797,
                                "end": 1808
                              },
                              "typeArguments": null,
                              "start": 1790,
                              "end": 1808
                            },
                            "start": 1788,
                            "end": 1808
                          },
                          "start": 1786,
                          "end": 1808
                        },
                        "init": null,
                        "definite": true,
                        "start": 1786,
                        "end": 1808
                      }
                    ],
                    "declare": false,
                    "start": 1782,
                    "end": 1809
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1822,
                          "end": 1823
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1826,
                          "end": 1837
                        },
                        "definite": false,
                        "start": 1822,
                        "end": 1837
                      }
                    ],
                    "declare": false,
                    "start": 1818,
                    "end": 1838
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1847,
                        "end": 1848
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1849,
                        "end": 1861
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1847,
                      "end": 1861
                    },
                    "directive": null,
                    "start": 1847,
                    "end": 1862
                  }
                ],
                "start": 1672,
                "end": 1868
              },
              "expression": false,
              "start": 1648,
              "end": 1868
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1627,
            "end": 1868
          }
        ],
        "start": 18,
        "end": 1870
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 1870
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyGenericTestClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1878,
        "end": 1896
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1898
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1897,
            "end": 1898
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1901
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1900,
            "end": 1901
          }
        ],
        "start": 1896,
        "end": 1902
      },
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
              "name": "canary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1917,
              "end": 1923
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1925,
                "end": 1931
              },
              "start": 1923,
              "end": 1931
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
            "start": 1909,
            "end": 1932
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticCanary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1944,
              "end": 1956
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1958,
                "end": 1964
              },
              "start": 1956,
              "end": 1964
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
            "start": 1937,
            "end": 1965
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
              "start": 1971,
              "end": 1982
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2071,
                          "end": 2072
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2075,
                            "end": 2079
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2080,
                            "end": 2086
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2075,
                          "end": 2086
                        },
                        "definite": false,
                        "start": 2071,
                        "end": 2086
                      }
                    ],
                    "declare": false,
                    "start": 2067,
                    "end": 2087
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2104,
                              "end": 2110
                            },
                            "start": 2102,
                            "end": 2110
                          },
                          "start": 2100,
                          "end": 2110
                        },
                        "init": null,
                        "definite": true,
                        "start": 2100,
                        "end": 2110
                      }
                    ],
                    "declare": false,
                    "start": 2096,
                    "end": 2111
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
                          "start": 2120,
                          "end": 2124
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2125,
                          "end": 2131
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2120,
                        "end": 2131
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 2134,
                        "end": 2135
                      },
                      "start": 2120,
                      "end": 2135
                    },
                    "directive": null,
                    "start": 2120,
                    "end": 2136
                  }
                ],
                "start": 1985,
                "end": 2142
              },
              "expression": false,
              "start": 1982,
              "end": 2142
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1971,
            "end": 2142
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memberFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 2226,
              "end": 2236
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2237,
                    "end": 2238
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 2241,
                    "end": 2245
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2237,
                  "end": 2245
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2265,
                                "end": 2283
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2284,
                                      "end": 2285
                                    },
                                    "typeArguments": null,
                                    "start": 2284,
                                    "end": 2285
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2287,
                                      "end": 2288
                                    },
                                    "typeArguments": null,
                                    "start": 2287,
                                    "end": 2288
                                  }
                                ],
                                "start": 2283,
                                "end": 2289
                              },
                              "start": 2265,
                              "end": 2289
                            },
                            "start": 2263,
                            "end": 2289
                          },
                          "start": 2261,
                          "end": 2289
                        },
                        "init": null,
                        "definite": true,
                        "start": 2261,
                        "end": 2289
                      }
                    ],
                    "declare": false,
                    "start": 2257,
                    "end": 2290
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2380,
                          "end": 2381
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2384,
                          "end": 2388
                        },
                        "definite": false,
                        "start": 2380,
                        "end": 2388
                      }
                    ],
                    "declare": false,
                    "start": 2376,
                    "end": 2389
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2406,
                                "end": 2424
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2425,
                                      "end": 2426
                                    },
                                    "typeArguments": null,
                                    "start": 2425,
                                    "end": 2426
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2428,
                                      "end": 2429
                                    },
                                    "typeArguments": null,
                                    "start": 2428,
                                    "end": 2429
                                  }
                                ],
                                "start": 2424,
                                "end": 2430
                              },
                              "start": 2406,
                              "end": 2430
                            },
                            "start": 2404,
                            "end": 2430
                          },
                          "start": 2402,
                          "end": 2430
                        },
                        "init": null,
                        "definite": true,
                        "start": 2402,
                        "end": 2430
                      }
                    ],
                    "declare": false,
                    "start": 2398,
                    "end": 2431
                  }
                ],
                "start": 2247,
                "end": 2437
              },
              "expression": false,
              "start": 2236,
              "end": 2437
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2226,
            "end": 2437
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2532,
              "end": 2536
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2553,
                          "end": 2554
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2557,
                          "end": 2561
                        },
                        "definite": false,
                        "start": 2553,
                        "end": 2561
                      }
                    ],
                    "declare": false,
                    "start": 2549,
                    "end": 2562
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2579,
                                "end": 2597
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2598,
                                      "end": 2599
                                    },
                                    "typeArguments": null,
                                    "start": 2598,
                                    "end": 2599
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2601,
                                      "end": 2602
                                    },
                                    "typeArguments": null,
                                    "start": 2601,
                                    "end": 2602
                                  }
                                ],
                                "start": 2597,
                                "end": 2603
                              },
                              "start": 2579,
                              "end": 2603
                            },
                            "start": 2577,
                            "end": 2603
                          },
                          "start": 2575,
                          "end": 2603
                        },
                        "init": null,
                        "definite": true,
                        "start": 2575,
                        "end": 2603
                      }
                    ],
                    "declare": false,
                    "start": 2571,
                    "end": 2604
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 2620,
                      "end": 2624
                    },
                    "start": 2613,
                    "end": 2625
                  }
                ],
                "start": 2539,
                "end": 2631
              },
              "expression": false,
              "start": 2536,
              "end": 2631
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2528,
            "end": 2631
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2640,
              "end": 2644
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
                  "typeAnnotation": null,
                  "start": 2645,
                  "end": 2646
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2662,
                          "end": 2663
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2666,
                          "end": 2670
                        },
                        "definite": false,
                        "start": 2662,
                        "end": 2670
                      }
                    ],
                    "declare": false,
                    "start": 2658,
                    "end": 2671
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2688,
                                "end": 2706
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2707,
                                      "end": 2708
                                    },
                                    "typeArguments": null,
                                    "start": 2707,
                                    "end": 2708
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2710,
                                      "end": 2711
                                    },
                                    "typeArguments": null,
                                    "start": 2710,
                                    "end": 2711
                                  }
                                ],
                                "start": 2706,
                                "end": 2712
                              },
                              "start": 2688,
                              "end": 2712
                            },
                            "start": 2686,
                            "end": 2712
                          },
                          "start": 2684,
                          "end": 2712
                        },
                        "init": null,
                        "definite": true,
                        "start": 2684,
                        "end": 2712
                      }
                    ],
                    "declare": false,
                    "start": 2680,
                    "end": 2713
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2722,
                        "end": 2723
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2726,
                        "end": 2727
                      },
                      "start": 2722,
                      "end": 2727
                    },
                    "directive": null,
                    "start": 2722,
                    "end": 2728
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2737,
                        "end": 2738
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2741,
                        "end": 2742
                      },
                      "start": 2737,
                      "end": 2742
                    },
                    "directive": null,
                    "start": 2737,
                    "end": 2743
                  }
                ],
                "start": 2648,
                "end": 2749
              },
              "expression": false,
              "start": 2644,
              "end": 2749
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2636,
            "end": 2749
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "someFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 2755,
              "end": 2763
            },
            "typeAnnotation": null,
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2869,
                          "end": 2870
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 2873,
                          "end": 2877
                        },
                        "definite": false,
                        "start": 2869,
                        "end": 2877
                      }
                    ],
                    "declare": false,
                    "start": 2865,
                    "end": 2878
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2895,
                                "end": 2913
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2914,
                                      "end": 2915
                                    },
                                    "typeArguments": null,
                                    "start": 2914,
                                    "end": 2915
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2917,
                                      "end": 2918
                                    },
                                    "typeArguments": null,
                                    "start": 2917,
                                    "end": 2918
                                  }
                                ],
                                "start": 2913,
                                "end": 2919
                              },
                              "start": 2895,
                              "end": 2919
                            },
                            "start": 2893,
                            "end": 2919
                          },
                          "start": 2891,
                          "end": 2919
                        },
                        "init": null,
                        "definite": true,
                        "start": 2891,
                        "end": 2919
                      }
                    ],
                    "declare": false,
                    "start": 2887,
                    "end": 2920
                  }
                ],
                "start": 2772,
                "end": 2926
              },
              "id": null,
              "generator": false,
              "start": 2766,
              "end": 2926
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2755,
            "end": 2927
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 3020,
              "end": 3028
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3029,
                    "end": 3030
                  },
                  "right": {
                    "type": "ThisExpression",
                    "start": 3033,
                    "end": 3037
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3029,
                  "end": 3037
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3064,
                                "end": 3082
                              },
                              "typeArguments": null,
                              "start": 3057,
                              "end": 3082
                            },
                            "start": 3055,
                            "end": 3082
                          },
                          "start": 3053,
                          "end": 3082
                        },
                        "init": null,
                        "definite": true,
                        "start": 3053,
                        "end": 3082
                      }
                    ],
                    "declare": false,
                    "start": 3049,
                    "end": 3083
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3096,
                          "end": 3097
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3100,
                          "end": 3118
                        },
                        "definite": false,
                        "start": 3096,
                        "end": 3118
                      }
                    ],
                    "declare": false,
                    "start": 3092,
                    "end": 3119
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3128,
                        "end": 3129
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3130,
                        "end": 3142
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3128,
                      "end": 3142
                    },
                    "directive": null,
                    "start": 3128,
                    "end": 3143
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3235,
                          "end": 3236
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3239,
                          "end": 3243
                        },
                        "definite": false,
                        "start": 3235,
                        "end": 3243
                      }
                    ],
                    "declare": false,
                    "start": 3231,
                    "end": 3244
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3268,
                                "end": 3286
                              },
                              "typeArguments": null,
                              "start": 3261,
                              "end": 3286
                            },
                            "start": 3259,
                            "end": 3286
                          },
                          "start": 3257,
                          "end": 3286
                        },
                        "init": null,
                        "definite": true,
                        "start": 3257,
                        "end": 3286
                      }
                    ],
                    "declare": false,
                    "start": 3253,
                    "end": 3287
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3300,
                          "end": 3301
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3304,
                          "end": 3322
                        },
                        "definite": false,
                        "start": 3300,
                        "end": 3322
                      }
                    ],
                    "declare": false,
                    "start": 3296,
                    "end": 3323
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3332,
                        "end": 3333
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3334,
                        "end": 3346
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3332,
                      "end": 3346
                    },
                    "directive": null,
                    "start": 3332,
                    "end": 3347
                  }
                ],
                "start": 3039,
                "end": 3353
              },
              "expression": false,
              "start": 3028,
              "end": 3353
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3013,
            "end": 3353
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3370,
              "end": 3380
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3475,
                          "end": 3476
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3479,
                          "end": 3483
                        },
                        "definite": false,
                        "start": 3475,
                        "end": 3483
                      }
                    ],
                    "declare": false,
                    "start": 3471,
                    "end": 3484
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3508,
                                "end": 3526
                              },
                              "typeArguments": null,
                              "start": 3501,
                              "end": 3526
                            },
                            "start": 3499,
                            "end": 3526
                          },
                          "start": 3497,
                          "end": 3526
                        },
                        "init": null,
                        "definite": true,
                        "start": 3497,
                        "end": 3526
                      }
                    ],
                    "declare": false,
                    "start": 3493,
                    "end": 3527
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3540,
                          "end": 3541
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3544,
                          "end": 3562
                        },
                        "definite": false,
                        "start": 3540,
                        "end": 3562
                      }
                    ],
                    "declare": false,
                    "start": 3536,
                    "end": 3563
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3572,
                        "end": 3573
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3574,
                        "end": 3586
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3572,
                      "end": 3586
                    },
                    "directive": null,
                    "start": 3572,
                    "end": 3587
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 3603,
                      "end": 3607
                    },
                    "start": 3596,
                    "end": 3608
                  }
                ],
                "start": 3383,
                "end": 3614
              },
              "expression": false,
              "start": 3380,
              "end": 3614
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3359,
            "end": 3614
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3630,
              "end": 3640
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyGenericTestClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3651,
                        "end": 3669
                      },
                      "typeArguments": null,
                      "start": 3644,
                      "end": 3669
                    },
                    "start": 3642,
                    "end": 3669
                  },
                  "start": 3641,
                  "end": 3669
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3763,
                          "end": 3764
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 3767,
                          "end": 3771
                        },
                        "definite": false,
                        "start": 3763,
                        "end": 3771
                      }
                    ],
                    "declare": false,
                    "start": 3759,
                    "end": 3772
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3796,
                                "end": 3814
                              },
                              "typeArguments": null,
                              "start": 3789,
                              "end": 3814
                            },
                            "start": 3787,
                            "end": 3814
                          },
                          "start": 3785,
                          "end": 3814
                        },
                        "init": null,
                        "definite": true,
                        "start": 3785,
                        "end": 3814
                      }
                    ],
                    "declare": false,
                    "start": 3781,
                    "end": 3815
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3828,
                          "end": 3829
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3832,
                          "end": 3850
                        },
                        "definite": false,
                        "start": 3828,
                        "end": 3850
                      }
                    ],
                    "declare": false,
                    "start": 3824,
                    "end": 3851
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3860,
                        "end": 3861
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3862,
                        "end": 3874
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3860,
                      "end": 3874
                    },
                    "directive": null,
                    "start": 3860,
                    "end": 3875
                  }
                ],
                "start": 3671,
                "end": 3881
              },
              "expression": false,
              "start": 3640,
              "end": 3881
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3619,
            "end": 3881
          }
        ],
        "start": 1903,
        "end": 3883
      },
      "abstract": false,
      "declare": false,
      "start": 1872,
      "end": 3883
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 3955,
        "end": 3957
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 3958,
            "end": 3959
          },
          "right": {
            "type": "ThisExpression",
            "start": 3962,
            "end": 3966
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 3958,
          "end": 3966
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3982,
                      "end": 3985
                    },
                    "start": 3980,
                    "end": 3985
                  },
                  "start": 3978,
                  "end": 3985
                },
                "init": null,
                "definite": true,
                "start": 3978,
                "end": 3985
              }
            ],
            "declare": false,
            "start": 3974,
            "end": 3986
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3991,
                  "end": 3992
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spaaaaaaace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3993,
                  "end": 4004
                },
                "optional": false,
                "computed": false,
                "start": 3991,
                "end": 4004
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 4007,
                "end": 4008
              },
              "start": 3991,
              "end": 4008
            },
            "directive": null,
            "start": 3991,
            "end": 4009
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4082,
                      "end": 4085
                    },
                    "start": 4080,
                    "end": 4085
                  },
                  "start": 4078,
                  "end": 4085
                },
                "init": null,
                "definite": true,
                "start": 4078,
                "end": 4085
              }
            ],
            "declare": false,
            "start": 4074,
            "end": 4086
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4095,
                  "end": 4096
                },
                "init": {
                  "type": "ThisExpression",
                  "start": 4099,
                  "end": 4103
                },
                "definite": false,
                "start": 4095,
                "end": 4103
              }
            ],
            "declare": false,
            "start": 4091,
            "end": 4104
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
                  "start": 4109,
                  "end": 4113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spaaaaace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4114,
                  "end": 4123
                },
                "optional": false,
                "computed": false,
                "start": 4109,
                "end": 4123
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 4126,
                "end": 4127
              },
              "start": 4109,
              "end": 4127
            },
            "directive": null,
            "start": 4109,
            "end": 4128
          }
        ],
        "start": 3968,
        "end": 4130
      },
      "expression": false,
      "start": 3946,
      "end": 4130
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
            "name": "q1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4201,
            "end": 4203
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4216,
                  "end": 4217
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4220,
                  "end": 4224
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 4216,
                "end": 4224
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4240,
                            "end": 4243
                          },
                          "start": 4238,
                          "end": 4243
                        },
                        "start": 4236,
                        "end": 4243
                      },
                      "init": null,
                      "definite": true,
                      "start": 4236,
                      "end": 4243
                    }
                  ],
                  "declare": false,
                  "start": 4232,
                  "end": 4244
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4249,
                        "end": 4250
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4251,
                        "end": 4262
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4249,
                      "end": 4262
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4265,
                      "end": 4266
                    },
                    "start": 4249,
                    "end": 4266
                  },
                  "directive": null,
                  "start": 4249,
                  "end": 4267
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 4339,
                            "end": 4342
                          },
                          "start": 4337,
                          "end": 4342
                        },
                        "start": 4335,
                        "end": 4342
                      },
                      "init": null,
                      "definite": true,
                      "start": 4335,
                      "end": 4342
                    }
                  ],
                  "declare": false,
                  "start": 4331,
                  "end": 4343
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4352,
                        "end": 4353
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4356,
                        "end": 4360
                      },
                      "definite": false,
                      "start": 4352,
                      "end": 4360
                    }
                  ],
                  "declare": false,
                  "start": 4348,
                  "end": 4361
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
                        "start": 4366,
                        "end": 4370
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4371,
                        "end": 4380
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4366,
                      "end": 4380
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4383,
                      "end": 4384
                    },
                    "start": 4366,
                    "end": 4384
                  },
                  "directive": null,
                  "start": 4366,
                  "end": 4385
                }
              ],
              "start": 4226,
              "end": 4387
            },
            "expression": false,
            "start": 4206,
            "end": 4387
          },
          "definite": false,
          "start": 4201,
          "end": 4387
        }
      ],
      "declare": false,
      "start": 4197,
      "end": 4387
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
            "name": "q2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4468,
            "end": 4470
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4474,
                  "end": 4475
                },
                "right": {
                  "type": "ThisExpression",
                  "start": 4478,
                  "end": 4482
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 4474,
                "end": 4482
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "globalThis",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4508,
                              "end": 4518
                            },
                            "typeArguments": null,
                            "start": 4501,
                            "end": 4518
                          },
                          "start": 4499,
                          "end": 4518
                        },
                        "start": 4497,
                        "end": 4518
                      },
                      "init": null,
                      "definite": true,
                      "start": 4497,
                      "end": 4518
                    }
                  ],
                  "declare": false,
                  "start": 4493,
                  "end": 4519
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4524,
                        "end": 4525
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4526,
                        "end": 4537
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4524,
                      "end": 4537
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4540,
                      "end": 4541
                    },
                    "start": 4524,
                    "end": 4541
                  },
                  "directive": null,
                  "start": 4524,
                  "end": 4542
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "globalThis",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4636,
                              "end": 4646
                            },
                            "typeArguments": null,
                            "start": 4629,
                            "end": 4646
                          },
                          "start": 4627,
                          "end": 4646
                        },
                        "start": 4625,
                        "end": 4646
                      },
                      "init": null,
                      "definite": true,
                      "start": 4625,
                      "end": 4646
                    }
                  ],
                  "declare": false,
                  "start": 4621,
                  "end": 4647
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4656,
                        "end": 4657
                      },
                      "init": {
                        "type": "ThisExpression",
                        "start": 4660,
                        "end": 4664
                      },
                      "definite": false,
                      "start": 4656,
                      "end": 4664
                    }
                  ],
                  "declare": false,
                  "start": 4652,
                  "end": 4665
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
                        "start": 4670,
                        "end": 4674
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4675,
                        "end": 4684
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4670,
                      "end": 4684
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 4687,
                      "end": 4688
                    },
                    "start": 4670,
                    "end": 4688
                  },
                  "directive": null,
                  "start": 4670,
                  "end": 4689
                }
              ],
              "start": 4487,
              "end": 4691
            },
            "id": null,
            "generator": false,
            "start": 4473,
            "end": 4691
          },
          "definite": false,
          "start": 4468,
          "end": 4691
        }
      ],
      "declare": false,
      "start": 4464,
      "end": 4691
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "globalThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4759,
                  "end": 4769
                },
                "typeArguments": null,
                "start": 4752,
                "end": 4769
              },
              "start": 4750,
              "end": 4769
            },
            "start": 4748,
            "end": 4769
          },
          "init": null,
          "definite": true,
          "start": 4748,
          "end": 4769
        }
      ],
      "declare": false,
      "start": 4744,
      "end": 4770
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 4775,
            "end": 4776
          },
          "init": {
            "type": "ThisExpression",
            "start": 4779,
            "end": 4783
          },
          "definite": false,
          "start": 4775,
          "end": 4783
        }
      ],
      "declare": false,
      "start": 4771,
      "end": 4784
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
            "start": 4785,
            "end": 4789
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "spaaaaace",
            "optional": false,
            "typeAnnotation": null,
            "start": 4790,
            "end": 4799
          },
          "optional": false,
          "computed": false,
          "start": 4785,
          "end": 4799
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 4802,
          "end": 4803
        },
        "start": 4785,
        "end": 4803
      },
      "directive": null,
      "start": 4785,
      "end": 4804
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4805
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
    "value": "MyTestClass",
    "start": 6,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 24,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 59,
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
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 86,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 182,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 216,
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
    "value": "number",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "memberFunc",
    "start": 341,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 380,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 508,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 638,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 646,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 660,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 668,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 689,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 712,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "var",
    "start": 734,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 742,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 756,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 764,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 785,
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
    "value": "v",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "someFunc",
    "start": 818,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 832,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 928,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 932,
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
    "value": "this",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 958,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1063,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "staticFn",
    "start": 1070,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1083,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1114,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1143,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1166,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1275,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1297,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1304,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1325,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1333,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1356,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1381,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 1392,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1493,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1501,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1515,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1523,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1530,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1559,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1582,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1611,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1627,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1634,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 1638,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1652,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1659,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1760,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1768,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1782,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1790,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1797,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1818,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "MyTestClass",
    "start": 1826,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1849,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1872,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 1878,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1909,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1937,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 1944,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1958,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1971,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
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
    "value": "{",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2067,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2075,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 2080,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2096,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2104,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2120,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "canary",
    "start": 2125,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "memberFunc",
    "start": 2226,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2241,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2257,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2265,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2376,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2384,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2398,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2406,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2528,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2532,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2549,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2557,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2571,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2579,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2613,
    "end": 2619
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2620,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2636,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2640,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2658,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2666,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2680,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2688,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "someFunc",
    "start": 2755,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2769,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2865,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2873,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2887,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 2895,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3013,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "staticFn",
    "start": 3020,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3033,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3049,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3057,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3064,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3092,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3100,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3130,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3231,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3239,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3253,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3261,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3268,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3296,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3304,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3334,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3359,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3366,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 3370,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3471,
    "end": 3474
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3479,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3493,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3501,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3508,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3536,
    "end": 3539
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3544,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3574,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3596,
    "end": 3602
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3603,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3619,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3626,
    "end": 3629
  },
  {
    "type": "Identifier",
    "value": "staticProp",
    "start": 3630,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3644,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3651,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3759,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3767,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3781,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3789,
    "end": 3795
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3796,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3824,
    "end": 3827
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Identifier",
    "value": "MyGenericTestClass",
    "start": 3832,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "staticCanary",
    "start": 3862,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3946,
    "end": 3954
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 3955,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3962,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3974,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3982,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Identifier",
    "value": "spaaaaaaace",
    "start": 3993,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4074,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4082,
    "end": 4085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4091,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4099,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4103,
    "end": 4104
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4109,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4114,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4197,
    "end": 4200
  },
  {
    "type": "Identifier",
    "value": "q1",
    "start": 4201,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4206,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4220,
    "end": 4224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4232,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4240,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "spaaaaaaace",
    "start": 4251,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4331,
    "end": 4334
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4339,
    "end": 4342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4348,
    "end": 4351
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4356,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4366,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4371,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4383,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4464,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 4468,
    "end": 4470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4471,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4478,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4484,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4493,
    "end": 4496
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4501,
    "end": 4507
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 4508,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Identifier",
    "value": "spaaaaaaace",
    "start": 4526,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4621,
    "end": 4624
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4626,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4629,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 4636,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4652,
    "end": 4655
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4660,
    "end": 4664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4664,
    "end": 4665
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4670,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4674,
    "end": 4675
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4675,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4688,
    "end": 4689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4690,
    "end": 4691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4744,
    "end": 4747
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4748,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4750,
    "end": 4751
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4752,
    "end": 4758
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 4759,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4771,
    "end": 4774
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4777,
    "end": 4778
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4779,
    "end": 4783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4783,
    "end": 4784
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4785,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4789,
    "end": 4790
  },
  {
    "type": "Identifier",
    "value": "spaaaaace",
    "start": 4790,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4802,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4803,
    "end": 4804
  }
]
```
