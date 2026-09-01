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
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 502
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
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 520
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
                      "raw": "''",
                      "start": 540,
                      "end": 542
                    },
                    "start": 533,
                    "end": 543
                  }
                ],
                "start": 523,
                "end": 549
              },
              "expression": false,
              "start": 520,
              "end": 549
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 509,
            "end": 549
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 566
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
                      "value": 3,
                      "raw": "3",
                      "start": 586,
                      "end": 587
                    },
                    "start": 579,
                    "end": 588
                  }
                ],
                "start": 569,
                "end": 594
              },
              "expression": false,
              "start": 566,
              "end": 594
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 555,
            "end": 594
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 600,
              "end": 610
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
                      "type": "ThisExpression",
                      "start": 630,
                      "end": 634
                    },
                    "start": 623,
                    "end": 635
                  }
                ],
                "start": 613,
                "end": 641
              },
              "expression": false,
              "start": 610,
              "end": 641
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 600,
            "end": 641
          }
        ],
        "start": 503,
        "end": 643
      },
      "abstract": false,
      "declare": false,
      "start": 483,
      "end": 643
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeDerivedClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 667
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeBaseClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 689
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
              "start": 696,
              "end": 707
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
                        "start": 720,
                        "end": 725
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 720,
                      "end": 727
                    },
                    "directive": null,
                    "start": 720,
                    "end": 728
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
                          "start": 741,
                          "end": 742
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 745,
                              "end": 750
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 755
                            },
                            "optional": false,
                            "computed": false,
                            "start": 745,
                            "end": 755
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 745,
                          "end": 757
                        },
                        "definite": false,
                        "start": 741,
                        "end": 757
                      }
                    ],
                    "declare": false,
                    "start": 737,
                    "end": 758
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
                              "type": "TSStringKeyword",
                              "start": 774,
                              "end": 780
                            },
                            "start": 772,
                            "end": 780
                          },
                          "start": 771,
                          "end": 780
                        },
                        "init": null,
                        "definite": false,
                        "start": 771,
                        "end": 780
                      }
                    ],
                    "declare": false,
                    "start": 767,
                    "end": 781
                  }
                ],
                "start": 710,
                "end": 787
              },
              "expression": false,
              "start": 707,
              "end": 787
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 696,
            "end": 787
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
              "start": 793,
              "end": 795
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
                          "start": 812,
                          "end": 813
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 816,
                              "end": 821
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 822,
                              "end": 826
                            },
                            "optional": false,
                            "computed": false,
                            "start": 816,
                            "end": 826
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 816,
                          "end": 828
                        },
                        "definite": false,
                        "start": 812,
                        "end": 828
                      }
                    ],
                    "declare": false,
                    "start": 808,
                    "end": 829
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
                              "type": "TSStringKeyword",
                              "start": 845,
                              "end": 851
                            },
                            "start": 843,
                            "end": 851
                          },
                          "start": 842,
                          "end": 851
                        },
                        "init": null,
                        "definite": false,
                        "start": 842,
                        "end": 851
                      }
                    ],
                    "declare": false,
                    "start": 838,
                    "end": 852
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
                          "start": 865,
                          "end": 866
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Super",
                                "start": 875,
                                "end": 880
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "func",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 881,
                                "end": 885
                              },
                              "optional": false,
                              "computed": false,
                              "start": 875,
                              "end": 885
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 875,
                            "end": 887
                          },
                          "id": null,
                          "generator": false,
                          "start": 869,
                          "end": 887
                        },
                        "definite": false,
                        "start": 865,
                        "end": 887
                      }
                    ],
                    "declare": false,
                    "start": 861,
                    "end": 888
                  }
                ],
                "start": 798,
                "end": 894
              },
              "expression": false,
              "start": 795,
              "end": 894
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 793,
            "end": 894
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
              "start": 904,
              "end": 905
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
                          "start": 922,
                          "end": 923
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 926,
                              "end": 931
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 932,
                              "end": 936
                            },
                            "optional": false,
                            "computed": false,
                            "start": 926,
                            "end": 936
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 926,
                          "end": 938
                        },
                        "definite": false,
                        "start": 922,
                        "end": 938
                      }
                    ],
                    "declare": false,
                    "start": 918,
                    "end": 939
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
                              "type": "TSStringKeyword",
                              "start": 955,
                              "end": 961
                            },
                            "start": 953,
                            "end": 961
                          },
                          "start": 952,
                          "end": 961
                        },
                        "init": null,
                        "definite": false,
                        "start": 952,
                        "end": 961
                      }
                    ],
                    "declare": false,
                    "start": 948,
                    "end": 962
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 978,
                      "end": 982
                    },
                    "start": 971,
                    "end": 983
                  }
                ],
                "start": 908,
                "end": 989
              },
              "expression": false,
              "start": 905,
              "end": 989
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 900,
            "end": 989
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
              "start": 999,
              "end": 1000
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
                  "start": 1001,
                  "end": 1002
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1018,
                          "end": 1019
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1022,
                              "end": 1027
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1028,
                              "end": 1032
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1022,
                            "end": 1032
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1022,
                          "end": 1034
                        },
                        "definite": false,
                        "start": 1018,
                        "end": 1034
                      }
                    ],
                    "declare": false,
                    "start": 1014,
                    "end": 1035
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
                              "type": "TSStringKeyword",
                              "start": 1051,
                              "end": 1057
                            },
                            "start": 1049,
                            "end": 1057
                          },
                          "start": 1048,
                          "end": 1057
                        },
                        "init": null,
                        "definite": false,
                        "start": 1048,
                        "end": 1057
                      }
                    ],
                    "declare": false,
                    "start": 1044,
                    "end": 1058
                  }
                ],
                "start": 1004,
                "end": 1064
              },
              "expression": false,
              "start": 1000,
              "end": 1064
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 995,
            "end": 1064
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
              "start": 1077,
              "end": 1079
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
                          "start": 1096,
                          "end": 1097
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1100,
                              "end": 1105
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1106,
                              "end": 1110
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1100,
                            "end": 1110
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1100,
                          "end": 1112
                        },
                        "definite": false,
                        "start": 1096,
                        "end": 1112
                      }
                    ],
                    "declare": false,
                    "start": 1092,
                    "end": 1113
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
                              "type": "TSNumberKeyword",
                              "start": 1129,
                              "end": 1135
                            },
                            "start": 1127,
                            "end": 1135
                          },
                          "start": 1126,
                          "end": 1135
                        },
                        "init": null,
                        "definite": false,
                        "start": 1126,
                        "end": 1135
                      }
                    ],
                    "declare": false,
                    "start": 1122,
                    "end": 1136
                  }
                ],
                "start": 1082,
                "end": 1142
              },
              "expression": false,
              "start": 1079,
              "end": 1142
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1070,
            "end": 1142
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
              "start": 1159,
              "end": 1160
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
                          "start": 1177,
                          "end": 1178
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1181,
                              "end": 1186
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1187,
                              "end": 1191
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1181,
                            "end": 1191
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1181,
                          "end": 1193
                        },
                        "definite": false,
                        "start": 1177,
                        "end": 1193
                      }
                    ],
                    "declare": false,
                    "start": 1173,
                    "end": 1194
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
                              "type": "TSNumberKeyword",
                              "start": 1210,
                              "end": 1216
                            },
                            "start": 1208,
                            "end": 1216
                          },
                          "start": 1207,
                          "end": 1216
                        },
                        "init": null,
                        "definite": false,
                        "start": 1207,
                        "end": 1216
                      }
                    ],
                    "declare": false,
                    "start": 1203,
                    "end": 1217
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1233,
                      "end": 1237
                    },
                    "start": 1226,
                    "end": 1238
                  }
                ],
                "start": 1163,
                "end": 1244
              },
              "expression": false,
              "start": 1160,
              "end": 1244
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1148,
            "end": 1244
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
              "start": 1261,
              "end": 1262
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
                  "start": 1263,
                  "end": 1264
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1280,
                          "end": 1281
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 1284,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "func",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1294
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1284,
                            "end": 1294
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1284,
                          "end": 1296
                        },
                        "definite": false,
                        "start": 1280,
                        "end": 1296
                      }
                    ],
                    "declare": false,
                    "start": 1276,
                    "end": 1297
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
                              "type": "TSNumberKeyword",
                              "start": 1313,
                              "end": 1319
                            },
                            "start": 1311,
                            "end": 1319
                          },
                          "start": 1310,
                          "end": 1319
                        },
                        "init": null,
                        "definite": false,
                        "start": 1310,
                        "end": 1319
                      }
                    ],
                    "declare": false,
                    "start": 1306,
                    "end": 1320
                  }
                ],
                "start": 1266,
                "end": 1326
              },
              "expression": false,
              "start": 1262,
              "end": 1326
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1250,
            "end": 1326
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "returnThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 1332,
              "end": 1342
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
                          "start": 1362,
                          "end": 1367
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "returnThis",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1368,
                          "end": 1378
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1362,
                        "end": 1378
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1362,
                      "end": 1380
                    },
                    "start": 1355,
                    "end": 1381
                  }
                ],
                "start": 1345,
                "end": 1387
              },
              "expression": false,
              "start": 1342,
              "end": 1387
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1332,
            "end": 1387
          }
        ],
        "start": 690,
        "end": 1389
      },
      "abstract": false,
      "declare": false,
      "start": 645,
      "end": 1389
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "instance",
            "optional": false,
            "typeAnnotation": null,
            "start": 1395,
            "end": 1403
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SomeDerivedClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 1410,
              "end": 1426
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1406,
            "end": 1428
          },
          "definite": false,
          "start": 1395,
          "end": 1428
        }
      ],
      "declare": false,
      "start": 1391,
      "end": 1429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "instance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1430,
                "end": 1438
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "returnThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1449
              },
              "optional": false,
              "computed": false,
              "start": 1430,
              "end": 1449
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1430,
            "end": 1451
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1452,
            "end": 1454
          },
          "optional": false,
          "computed": false,
          "start": 1430,
          "end": 1454
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1430,
        "end": 1456
      },
      "directive": null,
      "start": 1430,
      "end": 1457
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 483,
  "end": 1457
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 483,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "SomeBaseClass",
    "start": 489,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 509,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 533,
    "end": 539
  },
  {
    "type": "String",
    "value": "''",
    "start": 540,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 555,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 562,
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
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 579,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "returnThis",
    "start": 600,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 623,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 630,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 645,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "SomeDerivedClass",
    "start": 651,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 668,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "SomeBaseClass",
    "start": 676,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 696,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 720,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 737,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 745,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 774,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 808,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 822,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 838,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 845,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 872,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 875,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 881,
    "end": 885
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
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 900,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 918,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 926,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 932,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 948,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 971,
    "end": 977
  },
  {
    "type": "Null",
    "value": "null",
    "start": 978,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 995,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1022,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "func",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1051,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1077,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1100,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1106,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1122,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1148,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1155,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1181,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1187,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1210,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1226,
    "end": 1232
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1257,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1276,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1284,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1290,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1306,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1313,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "returnThis",
    "start": 1332,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1355,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "returnThis",
    "start": 1368,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 1395,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "SomeDerivedClass",
    "start": 1410,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 1430,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "returnThis",
    "start": 1439,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1452,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1456,
    "end": 1457
  }
]
```
