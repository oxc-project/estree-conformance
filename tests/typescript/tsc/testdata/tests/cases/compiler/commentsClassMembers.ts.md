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
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
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
            "start": 75,
            "end": 93
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 135
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
                      "type": "TSNumberKeyword",
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "start": 155,
                  "end": 164
                }
              ],
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
                          "start": 183,
                          "end": 187
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 188,
                          "end": 190
                        },
                        "optional": false,
                        "computed": false,
                        "start": 183,
                        "end": 190
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 194
                      },
                      "start": 183,
                      "end": 194
                    },
                    "start": 176,
                    "end": 195
                  }
                ],
                "start": 166,
                "end": 201
              },
              "expression": false,
              "start": 135,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 126,
            "end": 201
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 277
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
                          "type": "ThisExpression",
                          "start": 297,
                          "end": 301
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 302,
                          "end": 304
                        },
                        "optional": false,
                        "computed": false,
                        "start": 297,
                        "end": 304
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 305,
                            "end": 309
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 310,
                            "end": 312
                          },
                          "optional": false,
                          "computed": false,
                          "start": 305,
                          "end": 312
                        }
                      ],
                      "optional": false,
                      "start": 297,
                      "end": 313
                    },
                    "start": 290,
                    "end": 314
                  }
                ],
                "start": 280,
                "end": 320
              },
              "expression": false,
              "start": 277,
              "end": 320
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 264,
            "end": 320
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 390
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
                      "start": 417,
                      "end": 423
                    },
                    "start": 415,
                    "end": 423
                  },
                  "start": 410,
                  "end": 423
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
                          "type": "ThisExpression",
                          "start": 435,
                          "end": 439
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 440,
                          "end": 442
                        },
                        "optional": false,
                        "computed": false,
                        "start": 435,
                        "end": 442
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 445,
                            "end": 449
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 452
                          },
                          "optional": false,
                          "computed": false,
                          "start": 445,
                          "end": 452
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 453,
                            "end": 458
                          }
                        ],
                        "optional": false,
                        "start": 445,
                        "end": 459
                      },
                      "start": 435,
                      "end": 459
                    },
                    "directive": null,
                    "start": 435,
                    "end": 460
                  }
                ],
                "start": 425,
                "end": 466
              },
              "expression": false,
              "start": 390,
              "end": 466
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 377,
            "end": 466
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 540
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 542,
                "end": 548
              },
              "start": 540,
              "end": 548
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
            "start": 529,
            "end": 549
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 593
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
                      "type": "TSNumberKeyword",
                      "start": 616,
                      "end": 622
                    },
                    "start": 614,
                    "end": 622
                  },
                  "start": 613,
                  "end": 622
                }
              ],
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
                          "start": 641,
                          "end": 645
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 646,
                          "end": 648
                        },
                        "optional": false,
                        "computed": false,
                        "start": 641,
                        "end": 648
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 652
                      },
                      "start": 641,
                      "end": 652
                    },
                    "start": 634,
                    "end": 653
                  }
                ],
                "start": 624,
                "end": 659
              },
              "expression": false,
              "start": 593,
              "end": 659
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 582,
            "end": 659
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 735
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
                          "type": "ThisExpression",
                          "start": 755,
                          "end": 759
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 763
                        },
                        "optional": false,
                        "computed": false,
                        "start": 755,
                        "end": 763
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 764,
                            "end": 768
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 769,
                            "end": 772
                          },
                          "optional": false,
                          "computed": false,
                          "start": 764,
                          "end": 772
                        }
                      ],
                      "optional": false,
                      "start": 755,
                      "end": 773
                    },
                    "start": 748,
                    "end": 774
                  }
                ],
                "start": 738,
                "end": 780
              },
              "expression": false,
              "start": 735,
              "end": 780
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 720,
            "end": 780
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 826
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
                      "start": 854,
                      "end": 860
                    },
                    "start": 852,
                    "end": 860
                  },
                  "start": 847,
                  "end": 860
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
                          "type": "ThisExpression",
                          "start": 872,
                          "end": 876
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 880
                        },
                        "optional": false,
                        "computed": false,
                        "start": 872,
                        "end": 880
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 883,
                            "end": 887
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 888,
                            "end": 891
                          },
                          "optional": false,
                          "computed": false,
                          "start": 883,
                          "end": 891
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 892,
                            "end": 897
                          }
                        ],
                        "optional": false,
                        "start": 883,
                        "end": 898
                      },
                      "start": 872,
                      "end": 898
                    },
                    "directive": null,
                    "start": 872,
                    "end": 899
                  }
                ],
                "start": 862,
                "end": 905
              },
              "expression": false,
              "start": 826,
              "end": 905
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 811,
            "end": 905
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
              "start": 939,
              "end": 950
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
                "start": 953,
                "end": 960
              },
              "expression": false,
              "start": 950,
              "end": 960
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 939,
            "end": 960
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1012
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1014,
                "end": 1020
              },
              "start": 1012,
              "end": 1020
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
            "start": 1003,
            "end": 1021
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1068,
              "end": 1070
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
                      "type": "TSNumberKeyword",
                      "start": 1093,
                      "end": 1099
                    },
                    "start": 1091,
                    "end": 1099
                  },
                  "start": 1090,
                  "end": 1099
                }
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1118,
                          "end": 1120
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1121,
                          "end": 1123
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1118,
                        "end": 1123
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1126,
                        "end": 1127
                      },
                      "start": 1118,
                      "end": 1127
                    },
                    "start": 1111,
                    "end": 1128
                  }
                ],
                "start": 1101,
                "end": 1134
              },
              "expression": false,
              "start": 1070,
              "end": 1134
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1061,
            "end": 1134
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1185
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1205,
                          "end": 1207
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1208,
                          "end": 1210
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1205,
                        "end": 1210
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1211,
                            "end": 1213
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1214,
                            "end": 1216
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1211,
                          "end": 1216
                        }
                      ],
                      "optional": false,
                      "start": 1205,
                      "end": 1217
                    },
                    "start": 1198,
                    "end": 1218
                  }
                ],
                "start": 1188,
                "end": 1224
              },
              "expression": false,
              "start": 1185,
              "end": 1224
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1172,
            "end": 1224
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1298
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
                      "start": 1326,
                      "end": 1332
                    },
                    "start": 1324,
                    "end": 1332
                  },
                  "start": 1319,
                  "end": 1332
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1344,
                          "end": 1346
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1347,
                          "end": 1349
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1344,
                        "end": 1349
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1352,
                            "end": 1354
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1357
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1352,
                          "end": 1357
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1358,
                            "end": 1363
                          }
                        ],
                        "optional": false,
                        "start": 1352,
                        "end": 1364
                      },
                      "start": 1344,
                      "end": 1364
                    },
                    "directive": null,
                    "start": 1344,
                    "end": 1365
                  }
                ],
                "start": 1334,
                "end": 1371
              },
              "expression": false,
              "start": 1298,
              "end": 1371
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1285,
            "end": 1371
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1422
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1424,
                "end": 1430
              },
              "start": 1422,
              "end": 1430
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
            "start": 1410,
            "end": 1431
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1443,
              "end": 1448
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
                      "type": "TSNumberKeyword",
                      "start": 1452,
                      "end": 1458
                    },
                    "start": 1450,
                    "end": 1458
                  },
                  "start": 1449,
                  "end": 1458
                }
              ],
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
                          "start": 1477,
                          "end": 1481
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1482,
                          "end": 1487
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1477,
                        "end": 1487
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1490,
                        "end": 1491
                      },
                      "start": 1477,
                      "end": 1491
                    },
                    "start": 1470,
                    "end": 1492
                  }
                ],
                "start": 1460,
                "end": 1498
              },
              "expression": false,
              "start": 1448,
              "end": 1498
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1436,
            "end": 1498
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1514,
              "end": 1519
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
                          "type": "ThisExpression",
                          "start": 1539,
                          "end": 1543
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1544,
                          "end": 1549
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1539,
                        "end": 1549
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1550,
                            "end": 1554
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1555,
                            "end": 1560
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1550,
                          "end": 1560
                        }
                      ],
                      "optional": false,
                      "start": 1539,
                      "end": 1561
                    },
                    "start": 1532,
                    "end": 1562
                  }
                ],
                "start": 1522,
                "end": 1568
              },
              "expression": false,
              "start": 1519,
              "end": 1568
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1503,
            "end": 1568
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1584,
              "end": 1589
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
                      "start": 1597,
                      "end": 1603
                    },
                    "start": 1595,
                    "end": 1603
                  },
                  "start": 1590,
                  "end": 1603
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
                          "type": "ThisExpression",
                          "start": 1615,
                          "end": 1619
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1620,
                          "end": 1625
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1615,
                        "end": 1625
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1628,
                            "end": 1632
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1633,
                            "end": 1638
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1628,
                          "end": 1638
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1639,
                            "end": 1644
                          }
                        ],
                        "optional": false,
                        "start": 1628,
                        "end": 1645
                      },
                      "start": 1615,
                      "end": 1645
                    },
                    "directive": null,
                    "start": 1615,
                    "end": 1646
                  }
                ],
                "start": 1605,
                "end": 1652
              },
              "expression": false,
              "start": 1589,
              "end": 1652
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1573,
            "end": 1652
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1665,
              "end": 1671
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1673,
                "end": 1679
              },
              "start": 1671,
              "end": 1679
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
            "start": 1657,
            "end": 1680
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1699
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
                      "type": "TSNumberKeyword",
                      "start": 1703,
                      "end": 1709
                    },
                    "start": 1701,
                    "end": 1709
                  },
                  "start": 1700,
                  "end": 1709
                }
              ],
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
                          "start": 1728,
                          "end": 1732
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1733,
                          "end": 1739
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1728,
                        "end": 1739
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1742,
                        "end": 1743
                      },
                      "start": 1728,
                      "end": 1743
                    },
                    "start": 1721,
                    "end": 1744
                  }
                ],
                "start": 1711,
                "end": 1750
              },
              "expression": false,
              "start": 1699,
              "end": 1750
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1685,
            "end": 1750
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1767,
              "end": 1773
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
                          "type": "ThisExpression",
                          "start": 1793,
                          "end": 1797
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1798,
                          "end": 1804
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1793,
                        "end": 1804
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1805,
                            "end": 1809
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1810,
                            "end": 1816
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1805,
                          "end": 1816
                        }
                      ],
                      "optional": false,
                      "start": 1793,
                      "end": 1817
                    },
                    "start": 1786,
                    "end": 1818
                  }
                ],
                "start": 1776,
                "end": 1824
              },
              "expression": false,
              "start": 1773,
              "end": 1824
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1755,
            "end": 1824
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1847
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
                      "start": 1855,
                      "end": 1861
                    },
                    "start": 1853,
                    "end": 1861
                  },
                  "start": 1848,
                  "end": 1861
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
                          "type": "ThisExpression",
                          "start": 1873,
                          "end": 1877
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1878,
                          "end": 1884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1873,
                        "end": 1884
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1887,
                            "end": 1891
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1892,
                            "end": 1898
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1887,
                          "end": 1898
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1899,
                            "end": 1904
                          }
                        ],
                        "optional": false,
                        "start": 1887,
                        "end": 1905
                      },
                      "start": 1873,
                      "end": 1905
                    },
                    "directive": null,
                    "start": 1873,
                    "end": 1906
                  }
                ],
                "start": 1863,
                "end": 1912
              },
              "expression": false,
              "start": 1847,
              "end": 1912
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1829,
            "end": 1912
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1929
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1931,
                "end": 1937
              },
              "start": 1929,
              "end": 1937
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
            "start": 1917,
            "end": 1938
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1950,
              "end": 1955
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
                      "type": "TSNumberKeyword",
                      "start": 1959,
                      "end": 1965
                    },
                    "start": 1957,
                    "end": 1965
                  },
                  "start": 1956,
                  "end": 1965
                }
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1984,
                          "end": 1986
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1987,
                          "end": 1992
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1984,
                        "end": 1992
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 1996
                      },
                      "start": 1984,
                      "end": 1996
                    },
                    "start": 1977,
                    "end": 1997
                  }
                ],
                "start": 1967,
                "end": 2003
              },
              "expression": false,
              "start": 1955,
              "end": 2003
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1943,
            "end": 2003
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2019,
              "end": 2024
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2044,
                          "end": 2046
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2047,
                          "end": 2052
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2044,
                        "end": 2052
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2053,
                            "end": 2055
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2056,
                            "end": 2061
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2053,
                          "end": 2061
                        }
                      ],
                      "optional": false,
                      "start": 2044,
                      "end": 2062
                    },
                    "start": 2037,
                    "end": 2063
                  }
                ],
                "start": 2027,
                "end": 2069
              },
              "expression": false,
              "start": 2024,
              "end": 2069
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2008,
            "end": 2069
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2085,
              "end": 2090
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
                      "start": 2098,
                      "end": 2104
                    },
                    "start": 2096,
                    "end": 2104
                  },
                  "start": 2091,
                  "end": 2104
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2116,
                          "end": 2118
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "nc_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2119,
                          "end": 2124
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2116,
                        "end": 2124
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2127,
                            "end": 2129
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nc_s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2130,
                            "end": 2135
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2127,
                          "end": 2135
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2136,
                            "end": 2141
                          }
                        ],
                        "optional": false,
                        "start": 2127,
                        "end": 2142
                      },
                      "start": 2116,
                      "end": 2142
                    },
                    "directive": null,
                    "start": 2116,
                    "end": 2143
                  }
                ],
                "start": 2106,
                "end": 2149
              },
              "expression": false,
              "start": 2090,
              "end": 2149
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2074,
            "end": 2149
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2190,
              "end": 2194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2196,
                "end": 2202
              },
              "start": 2194,
              "end": 2202
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
            "start": 2183,
            "end": 2203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2240,
              "end": 2244
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
                      "type": "TSNumberKeyword",
                      "start": 2248,
                      "end": 2254
                    },
                    "start": 2246,
                    "end": 2254
                  },
                  "start": 2245,
                  "end": 2254
                }
              ],
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
                          "start": 2273,
                          "end": 2277
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2278,
                          "end": 2282
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2273,
                        "end": 2282
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2285,
                        "end": 2286
                      },
                      "start": 2273,
                      "end": 2286
                    },
                    "start": 2266,
                    "end": 2287
                  }
                ],
                "start": 2256,
                "end": 2293
              },
              "expression": false,
              "start": 2244,
              "end": 2293
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2233,
            "end": 2293
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2332,
              "end": 2336
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
                          "type": "ThisExpression",
                          "start": 2356,
                          "end": 2360
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2361,
                          "end": 2365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2356,
                        "end": 2365
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2366,
                            "end": 2370
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2371,
                            "end": 2375
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2366,
                          "end": 2375
                        }
                      ],
                      "optional": false,
                      "start": 2356,
                      "end": 2376
                    },
                    "start": 2349,
                    "end": 2377
                  }
                ],
                "start": 2339,
                "end": 2383
              },
              "expression": false,
              "start": 2336,
              "end": 2383
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2321,
            "end": 2383
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2422,
              "end": 2426
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
                      "start": 2434,
                      "end": 2440
                    },
                    "start": 2432,
                    "end": 2440
                  },
                  "start": 2427,
                  "end": 2440
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
                          "type": "ThisExpression",
                          "start": 2452,
                          "end": 2456
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2457,
                          "end": 2461
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2452,
                        "end": 2461
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2464,
                            "end": 2468
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2469,
                            "end": 2473
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2464,
                          "end": 2473
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2474,
                            "end": 2479
                          }
                        ],
                        "optional": false,
                        "start": 2464,
                        "end": 2480
                      },
                      "start": 2452,
                      "end": 2480
                    },
                    "directive": null,
                    "start": 2452,
                    "end": 2481
                  }
                ],
                "start": 2442,
                "end": 2487
              },
              "expression": false,
              "start": 2426,
              "end": 2487
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 2411,
            "end": 2487
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2529,
              "end": 2534
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2536,
                "end": 2542
              },
              "start": 2534,
              "end": 2542
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
            "start": 2521,
            "end": 2543
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2581,
              "end": 2586
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
                      "type": "TSNumberKeyword",
                      "start": 2590,
                      "end": 2596
                    },
                    "start": 2588,
                    "end": 2596
                  },
                  "start": 2587,
                  "end": 2596
                }
              ],
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
                          "start": 2615,
                          "end": 2619
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2620,
                          "end": 2624
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2615,
                        "end": 2624
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2627,
                        "end": 2628
                      },
                      "start": 2615,
                      "end": 2628
                    },
                    "start": 2608,
                    "end": 2629
                  }
                ],
                "start": 2598,
                "end": 2635
              },
              "expression": false,
              "start": 2586,
              "end": 2635
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2573,
            "end": 2635
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2675,
              "end": 2680
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
                          "type": "ThisExpression",
                          "start": 2700,
                          "end": 2704
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2705,
                          "end": 2710
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2700,
                        "end": 2710
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2711,
                            "end": 2715
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2716,
                            "end": 2721
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2711,
                          "end": 2721
                        }
                      ],
                      "optional": false,
                      "start": 2700,
                      "end": 2722
                    },
                    "start": 2693,
                    "end": 2723
                  }
                ],
                "start": 2683,
                "end": 2729
              },
              "expression": false,
              "start": 2680,
              "end": 2729
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2663,
            "end": 2729
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2769,
              "end": 2774
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
                      "start": 2782,
                      "end": 2788
                    },
                    "start": 2780,
                    "end": 2788
                  },
                  "start": 2775,
                  "end": 2788
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
                          "type": "ThisExpression",
                          "start": 2800,
                          "end": 2804
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2805,
                          "end": 2810
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2800,
                        "end": 2810
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 2813,
                            "end": 2817
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2818,
                            "end": 2823
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2813,
                          "end": 2823
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2824,
                            "end": 2829
                          }
                        ],
                        "optional": false,
                        "start": 2813,
                        "end": 2830
                      },
                      "start": 2800,
                      "end": 2830
                    },
                    "directive": null,
                    "start": 2800,
                    "end": 2831
                  }
                ],
                "start": 2790,
                "end": 2837
              },
              "expression": false,
              "start": 2774,
              "end": 2837
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2757,
            "end": 2837
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2889,
              "end": 2893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2895,
                "end": 2901
              },
              "start": 2893,
              "end": 2901
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
            "start": 2882,
            "end": 2902
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2946,
              "end": 2950
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
                      "type": "TSNumberKeyword",
                      "start": 2954,
                      "end": 2960
                    },
                    "start": 2952,
                    "end": 2960
                  },
                  "start": 2951,
                  "end": 2960
                }
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2979,
                          "end": 2981
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2982,
                          "end": 2986
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2979,
                        "end": 2986
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2989,
                        "end": 2990
                      },
                      "start": 2979,
                      "end": 2990
                    },
                    "start": 2972,
                    "end": 2991
                  }
                ],
                "start": 2962,
                "end": 2997
              },
              "expression": false,
              "start": 2950,
              "end": 2997
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2939,
            "end": 2997
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3043,
              "end": 3047
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3067,
                          "end": 3069
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3070,
                          "end": 3072
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3067,
                        "end": 3072
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3073,
                            "end": 3075
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3076,
                            "end": 3078
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3073,
                          "end": 3078
                        }
                      ],
                      "optional": false,
                      "start": 3067,
                      "end": 3079
                    },
                    "start": 3060,
                    "end": 3080
                  }
                ],
                "start": 3050,
                "end": 3086
              },
              "expression": false,
              "start": 3047,
              "end": 3086
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3032,
            "end": 3086
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3130,
              "end": 3134
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
                      "start": 3142,
                      "end": 3148
                    },
                    "start": 3140,
                    "end": 3148
                  },
                  "start": 3135,
                  "end": 3148
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3160,
                          "end": 3162
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3163,
                          "end": 3167
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3160,
                        "end": 3167
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3170,
                            "end": 3172
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a_s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3173,
                            "end": 3177
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3170,
                          "end": 3177
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3178,
                            "end": 3183
                          }
                        ],
                        "optional": false,
                        "start": 3170,
                        "end": 3184
                      },
                      "start": 3160,
                      "end": 3184
                    },
                    "directive": null,
                    "start": 3160,
                    "end": 3185
                  }
                ],
                "start": 3150,
                "end": 3191
              },
              "expression": false,
              "start": 3134,
              "end": 3191
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3119,
            "end": 3191
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3236,
              "end": 3240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3242,
                "end": 3248
              },
              "start": 3240,
              "end": 3248
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
            "start": 3229,
            "end": 3249
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3290,
              "end": 3294
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
                      "type": "TSNumberKeyword",
                      "start": 3298,
                      "end": 3304
                    },
                    "start": 3296,
                    "end": 3304
                  },
                  "start": 3295,
                  "end": 3304
                }
              ],
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
                          "start": 3323,
                          "end": 3327
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3328,
                          "end": 3332
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3323,
                        "end": 3332
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3335,
                        "end": 3336
                      },
                      "start": 3323,
                      "end": 3336
                    },
                    "start": 3316,
                    "end": 3337
                  }
                ],
                "start": 3306,
                "end": 3343
              },
              "expression": false,
              "start": 3294,
              "end": 3343
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3283,
            "end": 3343
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3386,
              "end": 3390
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
                          "type": "ThisExpression",
                          "start": 3410,
                          "end": 3414
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3415,
                          "end": 3419
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3410,
                        "end": 3419
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3420,
                            "end": 3424
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3425,
                            "end": 3429
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3420,
                          "end": 3429
                        }
                      ],
                      "optional": false,
                      "start": 3410,
                      "end": 3430
                    },
                    "start": 3403,
                    "end": 3431
                  }
                ],
                "start": 3393,
                "end": 3437
              },
              "expression": false,
              "start": 3390,
              "end": 3437
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3375,
            "end": 3437
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3480,
              "end": 3484
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
                      "start": 3492,
                      "end": 3498
                    },
                    "start": 3490,
                    "end": 3498
                  },
                  "start": 3485,
                  "end": 3498
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
                          "type": "ThisExpression",
                          "start": 3510,
                          "end": 3514
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3515,
                          "end": 3519
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3510,
                        "end": 3519
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3522,
                            "end": 3526
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3527,
                            "end": 3531
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3522,
                          "end": 3531
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3532,
                            "end": 3537
                          }
                        ],
                        "optional": false,
                        "start": 3522,
                        "end": 3538
                      },
                      "start": 3510,
                      "end": 3538
                    },
                    "directive": null,
                    "start": 3510,
                    "end": 3539
                  }
                ],
                "start": 3500,
                "end": 3545
              },
              "expression": false,
              "start": 3484,
              "end": 3545
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3469,
            "end": 3545
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3591,
              "end": 3596
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3598,
                "end": 3604
              },
              "start": 3596,
              "end": 3604
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
            "start": 3583,
            "end": 3605
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3647,
              "end": 3652
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
                      "type": "TSNumberKeyword",
                      "start": 3656,
                      "end": 3662
                    },
                    "start": 3654,
                    "end": 3662
                  },
                  "start": 3653,
                  "end": 3662
                }
              ],
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
                          "start": 3681,
                          "end": 3685
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_p1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3686,
                          "end": 3690
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3681,
                        "end": 3690
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3693,
                        "end": 3694
                      },
                      "start": 3681,
                      "end": 3694
                    },
                    "start": 3674,
                    "end": 3695
                  }
                ],
                "start": 3664,
                "end": 3701
              },
              "expression": false,
              "start": 3652,
              "end": 3701
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3639,
            "end": 3701
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3745,
              "end": 3750
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
                          "type": "ThisExpression",
                          "start": 3770,
                          "end": 3774
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_pp2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3775,
                          "end": 3780
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3770,
                        "end": 3780
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3781,
                            "end": 3785
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_pp1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3786,
                            "end": 3791
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3781,
                          "end": 3791
                        }
                      ],
                      "optional": false,
                      "start": 3770,
                      "end": 3792
                    },
                    "start": 3763,
                    "end": 3793
                  }
                ],
                "start": 3753,
                "end": 3799
              },
              "expression": false,
              "start": 3750,
              "end": 3799
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3733,
            "end": 3799
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_pp3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3843,
              "end": 3848
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
                      "start": 3856,
                      "end": 3862
                    },
                    "start": 3854,
                    "end": 3862
                  },
                  "start": 3849,
                  "end": 3862
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
                          "type": "ThisExpression",
                          "start": 3874,
                          "end": 3878
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_pp1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3879,
                          "end": 3884
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3874,
                        "end": 3884
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 3887,
                            "end": 3891
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_pp2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3892,
                            "end": 3897
                          },
                          "optional": false,
                          "computed": false,
                          "start": 3887,
                          "end": 3897
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3898,
                            "end": 3903
                          }
                        ],
                        "optional": false,
                        "start": 3887,
                        "end": 3904
                      },
                      "start": 3874,
                      "end": 3904
                    },
                    "directive": null,
                    "start": 3874,
                    "end": 3905
                  }
                ],
                "start": 3864,
                "end": 3911
              },
              "expression": false,
              "start": 3848,
              "end": 3911
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3831,
            "end": 3911
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3967,
              "end": 3971
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3973,
                "end": 3979
              },
              "start": 3971,
              "end": 3979
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
            "start": 3960,
            "end": 3980
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4028,
              "end": 4032
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
                      "type": "TSNumberKeyword",
                      "start": 4036,
                      "end": 4042
                    },
                    "start": 4034,
                    "end": 4042
                  },
                  "start": 4033,
                  "end": 4042
                }
              ],
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4061,
                          "end": 4063
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4064,
                          "end": 4068
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4061,
                        "end": 4068
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4071,
                        "end": 4072
                      },
                      "start": 4061,
                      "end": 4072
                    },
                    "start": 4054,
                    "end": 4073
                  }
                ],
                "start": 4044,
                "end": 4079
              },
              "expression": false,
              "start": 4032,
              "end": 4079
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4021,
            "end": 4079
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4134,
              "end": 4138
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4158,
                          "end": 4160
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4161,
                          "end": 4163
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4158,
                        "end": 4163
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4164,
                            "end": 4166
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4167,
                            "end": 4169
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4164,
                          "end": 4169
                        }
                      ],
                      "optional": false,
                      "start": 4158,
                      "end": 4170
                    },
                    "start": 4151,
                    "end": 4171
                  }
                ],
                "start": 4141,
                "end": 4177
              },
              "expression": false,
              "start": 4138,
              "end": 4177
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4123,
            "end": 4177
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4230,
              "end": 4234
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
                      "start": 4242,
                      "end": 4248
                    },
                    "start": 4240,
                    "end": 4248
                  },
                  "start": 4235,
                  "end": 4248
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4282,
                          "end": 4284
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b_s1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4285,
                          "end": 4289
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4282,
                        "end": 4289
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4292,
                            "end": 4294
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b_s2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4295,
                            "end": 4299
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4292,
                          "end": 4299
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4300,
                            "end": 4305
                          }
                        ],
                        "optional": false,
                        "start": 4292,
                        "end": 4306
                      },
                      "start": 4282,
                      "end": 4306
                    },
                    "directive": null,
                    "start": 4282,
                    "end": 4307
                  }
                ],
                "start": 4250,
                "end": 4313
              },
              "expression": false,
              "start": 4234,
              "end": 4313
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4219,
            "end": 4313
          }
        ],
        "start": 38,
        "end": 4315
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 4315
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4320,
            "end": 4322
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4329,
              "end": 4331
            },
            "typeArguments": null,
            "arguments": [],
            "start": 4325,
            "end": 4333
          },
          "definite": false,
          "start": 4320,
          "end": 4333
        }
      ],
      "declare": false,
      "start": 4316,
      "end": 4334
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
            "name": "i1_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4339,
            "end": 4343
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4346,
              "end": 4348
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4349,
              "end": 4351
            },
            "optional": false,
            "computed": false,
            "start": 4346,
            "end": 4351
          },
          "definite": false,
          "start": 4339,
          "end": 4351
        }
      ],
      "declare": false,
      "start": 4335,
      "end": 4352
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
            "name": "i1_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4357,
            "end": 4361
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4364,
              "end": 4366
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4367,
              "end": 4369
            },
            "optional": false,
            "computed": false,
            "start": 4364,
            "end": 4369
          },
          "definite": false,
          "start": 4357,
          "end": 4369
        }
      ],
      "declare": false,
      "start": 4353,
      "end": 4370
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
            "name": "i1_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 4375,
            "end": 4379
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4382,
                "end": 4384
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4385,
                "end": 4387
              },
              "optional": false,
              "computed": false,
              "start": 4382,
              "end": 4387
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4388,
                "end": 4390
              }
            ],
            "optional": false,
            "start": 4382,
            "end": 4391
          },
          "definite": false,
          "start": 4375,
          "end": 4391
        }
      ],
      "declare": false,
      "start": 4371,
      "end": 4392
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
            "name": "i1_prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4397,
            "end": 4404
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4407,
              "end": 4409
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4410,
              "end": 4412
            },
            "optional": false,
            "computed": false,
            "start": 4407,
            "end": 4412
          },
          "definite": false,
          "start": 4397,
          "end": 4412
        }
      ],
      "declare": false,
      "start": 4393,
      "end": 4413
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4414,
            "end": 4416
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4417,
            "end": 4419
          },
          "optional": false,
          "computed": false,
          "start": 4414,
          "end": 4419
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4422,
          "end": 4429
        },
        "start": 4414,
        "end": 4429
      },
      "directive": null,
      "start": 4414,
      "end": 4430
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
            "name": "i1_nc_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4435,
            "end": 4442
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4445,
              "end": 4447
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4448,
              "end": 4453
            },
            "optional": false,
            "computed": false,
            "start": 4445,
            "end": 4453
          },
          "definite": false,
          "start": 4435,
          "end": 4453
        }
      ],
      "declare": false,
      "start": 4431,
      "end": 4454
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
            "name": "i1_ncf",
            "optional": false,
            "typeAnnotation": null,
            "start": 4459,
            "end": 4465
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4468,
              "end": 4470
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4471,
              "end": 4476
            },
            "optional": false,
            "computed": false,
            "start": 4468,
            "end": 4476
          },
          "definite": false,
          "start": 4459,
          "end": 4476
        }
      ],
      "declare": false,
      "start": 4455,
      "end": 4477
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
            "name": "i1_ncr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4482,
            "end": 4488
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4491,
                "end": 4493
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4494,
                "end": 4499
              },
              "optional": false,
              "computed": false,
              "start": 4491,
              "end": 4499
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4500,
                "end": 4502
              }
            ],
            "optional": false,
            "start": 4491,
            "end": 4503
          },
          "definite": false,
          "start": 4482,
          "end": 4503
        }
      ],
      "declare": false,
      "start": 4478,
      "end": 4504
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
            "name": "i1_ncprop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4509,
            "end": 4518
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4521,
              "end": 4523
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4524,
              "end": 4529
            },
            "optional": false,
            "computed": false,
            "start": 4521,
            "end": 4529
          },
          "definite": false,
          "start": 4509,
          "end": 4529
        }
      ],
      "declare": false,
      "start": 4505,
      "end": 4530
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
            "name": "i1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4531,
            "end": 4533
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4534,
            "end": 4539
          },
          "optional": false,
          "computed": false,
          "start": 4531,
          "end": 4539
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_ncprop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4542,
          "end": 4551
        },
        "start": 4531,
        "end": 4551
      },
      "directive": null,
      "start": 4531,
      "end": 4552
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
            "name": "i1_s_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4557,
            "end": 4563
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4566,
              "end": 4568
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4569,
              "end": 4571
            },
            "optional": false,
            "computed": false,
            "start": 4566,
            "end": 4571
          },
          "definite": false,
          "start": 4557,
          "end": 4571
        }
      ],
      "declare": false,
      "start": 4553,
      "end": 4572
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
            "name": "i1_s_f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4577,
            "end": 4583
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4586,
              "end": 4588
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4589,
              "end": 4591
            },
            "optional": false,
            "computed": false,
            "start": 4586,
            "end": 4591
          },
          "definite": false,
          "start": 4577,
          "end": 4591
        }
      ],
      "declare": false,
      "start": 4573,
      "end": 4592
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
            "name": "i1_s_r",
            "optional": false,
            "typeAnnotation": null,
            "start": 4597,
            "end": 4603
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4606,
                "end": 4608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4609,
                "end": 4611
              },
              "optional": false,
              "computed": false,
              "start": 4606,
              "end": 4611
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4612,
                "end": 4614
              }
            ],
            "optional": false,
            "start": 4606,
            "end": 4615
          },
          "definite": false,
          "start": 4597,
          "end": 4615
        }
      ],
      "declare": false,
      "start": 4593,
      "end": 4616
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
            "name": "i1_s_prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4621,
            "end": 4630
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4633,
              "end": 4635
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4636,
              "end": 4638
            },
            "optional": false,
            "computed": false,
            "start": 4633,
            "end": 4638
          },
          "definite": false,
          "start": 4621,
          "end": 4638
        }
      ],
      "declare": false,
      "start": 4617,
      "end": 4639
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4640,
            "end": 4642
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4643,
            "end": 4645
          },
          "optional": false,
          "computed": false,
          "start": 4640,
          "end": 4645
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_s_prop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4648,
          "end": 4657
        },
        "start": 4640,
        "end": 4657
      },
      "directive": null,
      "start": 4640,
      "end": 4658
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
            "name": "i1_s_nc_p",
            "optional": false,
            "typeAnnotation": null,
            "start": 4663,
            "end": 4672
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4675,
              "end": 4677
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4678,
              "end": 4683
            },
            "optional": false,
            "computed": false,
            "start": 4675,
            "end": 4683
          },
          "definite": false,
          "start": 4663,
          "end": 4683
        }
      ],
      "declare": false,
      "start": 4659,
      "end": 4684
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
            "name": "i1_s_ncf",
            "optional": false,
            "typeAnnotation": null,
            "start": 4689,
            "end": 4697
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4700,
              "end": 4702
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4703,
              "end": 4708
            },
            "optional": false,
            "computed": false,
            "start": 4700,
            "end": 4708
          },
          "definite": false,
          "start": 4689,
          "end": 4708
        }
      ],
      "declare": false,
      "start": 4685,
      "end": 4709
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
            "name": "i1_s_ncr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4714,
            "end": 4722
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4725,
                "end": 4727
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "nc_s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4728,
                "end": 4733
              },
              "optional": false,
              "computed": false,
              "start": 4725,
              "end": 4733
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 4734,
                "end": 4736
              }
            ],
            "optional": false,
            "start": 4725,
            "end": 4737
          },
          "definite": false,
          "start": 4714,
          "end": 4737
        }
      ],
      "declare": false,
      "start": 4710,
      "end": 4738
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
            "name": "i1_s_ncprop",
            "optional": false,
            "typeAnnotation": null,
            "start": 4743,
            "end": 4754
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4757,
              "end": 4759
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4760,
              "end": 4765
            },
            "optional": false,
            "computed": false,
            "start": 4757,
            "end": 4765
          },
          "definite": false,
          "start": 4743,
          "end": 4765
        }
      ],
      "declare": false,
      "start": 4739,
      "end": 4766
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4767,
            "end": 4769
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_s3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4770,
            "end": 4775
          },
          "optional": false,
          "computed": false,
          "start": 4767,
          "end": 4775
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1_s_ncprop",
          "optional": false,
          "typeAnnotation": null,
          "start": 4778,
          "end": 4789
        },
        "start": 4767,
        "end": 4789
      },
      "directive": null,
      "start": 4767,
      "end": 4790
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
            "name": "i1_c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4795,
            "end": 4799
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4802,
            "end": 4804
          },
          "definite": false,
          "start": 4795,
          "end": 4804
        }
      ],
      "declare": false,
      "start": 4791,
      "end": 4805
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "cProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 4812,
        "end": 4823
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
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 4838,
              "end": 4841
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4843,
                "end": 4849
              },
              "start": 4841,
              "end": 4849
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
            "start": 4830,
            "end": 4850
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
              "start": 4897,
              "end": 4899
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
                        "start": 4919,
                        "end": 4923
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4924,
                        "end": 4927
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4919,
                      "end": 4927
                    },
                    "start": 4912,
                    "end": 4928
                  }
                ],
                "start": 4902,
                "end": 4934
              },
              "expression": false,
              "start": 4899,
              "end": 4934
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4886,
            "end": 4934
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4985,
              "end": 4990
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
                        "start": 5010,
                        "end": 5014
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5015,
                        "end": 5018
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5010,
                      "end": 5018
                    },
                    "start": 5003,
                    "end": 5019
                  }
                ],
                "start": 4993,
                "end": 5025
              },
              "expression": false,
              "start": 4990,
              "end": 5025
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4974,
            "end": 5025
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5071,
              "end": 5073
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
                      "start": 5081,
                      "end": 5087
                    },
                    "start": 5079,
                    "end": 5087
                  },
                  "start": 5074,
                  "end": 5087
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
                          "type": "ThisExpression",
                          "start": 5099,
                          "end": 5103
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5104,
                          "end": 5107
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5099,
                        "end": 5107
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5110,
                        "end": 5115
                      },
                      "start": 5099,
                      "end": 5115
                    },
                    "directive": null,
                    "start": 5099,
                    "end": 5116
                  }
                ],
                "start": 5089,
                "end": 5122
              },
              "expression": false,
              "start": 5073,
              "end": 5122
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 5060,
            "end": 5122
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nc_p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5138,
              "end": 5143
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
                      "start": 5151,
                      "end": 5157
                    },
                    "start": 5149,
                    "end": 5157
                  },
                  "start": 5144,
                  "end": 5157
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
                          "type": "ThisExpression",
                          "start": 5169,
                          "end": 5173
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5174,
                          "end": 5177
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5169,
                        "end": 5177
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5180,
                        "end": 5185
                      },
                      "start": 5169,
                      "end": 5185
                    },
                    "directive": null,
                    "start": 5169,
                    "end": 5186
                  }
                ],
                "start": 5159,
                "end": 5192
              },
              "expression": false,
              "start": 5143,
              "end": 5192
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 5127,
            "end": 5192
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
              "start": 5242,
              "end": 5243
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 5246,
              "end": 5248
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 5235,
            "end": 5249
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
              "start": 5296,
              "end": 5297
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 5300,
              "end": 5302
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 5288,
            "end": 5303
          }
        ],
        "start": 4824,
        "end": 5337
      },
      "abstract": false,
      "declare": false,
      "start": 4806,
      "end": 5337
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
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5342,
            "end": 5355
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "cProperties",
              "optional": false,
              "typeAnnotation": null,
              "start": 5362,
              "end": 5373
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5358,
            "end": 5375
          },
          "definite": false,
          "start": 5342,
          "end": 5375
        }
      ],
      "declare": false,
      "start": 5338,
      "end": 5376
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
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5377,
            "end": 5390
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5391,
            "end": 5393
          },
          "optional": false,
          "computed": false,
          "start": 5377,
          "end": 5393
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5396,
            "end": 5409
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5410,
            "end": 5412
          },
          "optional": false,
          "computed": false,
          "start": 5396,
          "end": 5412
        },
        "start": 5377,
        "end": 5412
      },
      "directive": null,
      "start": 5377,
      "end": 5413
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
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5414,
            "end": 5427
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5428,
            "end": 5433
          },
          "optional": false,
          "computed": false,
          "start": 5414,
          "end": 5433
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "cProperties_i",
            "optional": false,
            "typeAnnotation": null,
            "start": 5436,
            "end": 5449
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nc_p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5450,
            "end": 5455
          },
          "optional": false,
          "computed": false,
          "start": 5436,
          "end": 5455
        },
        "start": 5414,
        "end": 5455
      },
      "directive": null,
      "start": 5414,
      "end": 5456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 5456
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 176,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 310,
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
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 435,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 529,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 542,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 582,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "pp2",
    "start": 590,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 616,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 634,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 641,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 646,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 720,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 728,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "pp3",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 748,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "pp2",
    "start": 760,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 811,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 819,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "pp3",
    "start": 823,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 847,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 872,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "pp1",
    "start": 877,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 883,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "pp2",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 892,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 939,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1068,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1093,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1111,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1118,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1121,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1179,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 1183,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1198,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1211,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1214,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1292,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1319,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1326,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1344,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 1347,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1352,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1355,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1358,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "nc_p1",
    "start": 1417,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1424,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "nc_p2",
    "start": 1443,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1470,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1477,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "nc_p1",
    "start": 1482,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1503,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "nc_p3",
    "start": 1514,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1532,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1539,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "nc_p2",
    "start": 1544,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1550,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "nc_p1",
    "start": 1555,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1580,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "nc_p3",
    "start": 1584,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1590,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1597,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1615,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "nc_p1",
    "start": 1620,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1628,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "nc_p2",
    "start": 1633,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1639,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1657,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "nc_pp1",
    "start": 1665,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1673,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1685,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "nc_pp2",
    "start": 1693,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1703,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1728,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "nc_pp1",
    "start": 1733,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1755,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1763,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "nc_pp3",
    "start": 1767,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1773,
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
    "type": "Keyword",
    "value": "return",
    "start": 1786,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1793,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "nc_pp2",
    "start": 1798,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1805,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "nc_pp1",
    "start": 1810,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1829,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1837,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "nc_pp3",
    "start": 1841,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1848,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1855,
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
    "value": "this",
    "start": 1873,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "nc_pp1",
    "start": 1878,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1887,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "nc_pp2",
    "start": 1892,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1899,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "nc_s1",
    "start": 1924,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1931,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1943,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "nc_s2",
    "start": 1950,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1959,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1977,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1984,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "nc_s1",
    "start": 1987,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2008,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2015,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "nc_s3",
    "start": 2019,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2037,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2044,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "nc_s2",
    "start": 2047,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2053,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "nc_s1",
    "start": 2056,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2074,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2081,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "nc_s3",
    "start": 2085,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2091,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2098,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2116,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "nc_s1",
    "start": 2119,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2127,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "nc_s2",
    "start": 2130,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2136,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2183,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "a_p1",
    "start": 2190,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2196,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2233,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "a_p2",
    "start": 2240,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2248,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2266,
    "end": 2272
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2273,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "a_p1",
    "start": 2278,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2321,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2328,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "a_p3",
    "start": 2332,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2349,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2356,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "a_p2",
    "start": 2361,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2366,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "a_p1",
    "start": 2371,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2411,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2418,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "a_p3",
    "start": 2422,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2427,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2434,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2452,
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
    "value": "a_p1",
    "start": 2457,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2464,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "a_p2",
    "start": 2469,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2474,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2521,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "a_pp1",
    "start": 2529,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2536,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2573,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "a_pp2",
    "start": 2581,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
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
    "type": "Keyword",
    "value": "return",
    "start": 2608,
    "end": 2614
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2615,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "a_p1",
    "start": 2620,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2663,
    "end": 2670
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2671,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "a_pp3",
    "start": 2675,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2693,
    "end": 2699
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2700,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "a_pp2",
    "start": 2705,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2711,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "a_pp1",
    "start": 2716,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2757,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2765,
    "end": 2768
  },
  {
    "type": "Identifier",
    "value": "a_pp3",
    "start": 2769,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2775,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2782,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2800,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "a_pp1",
    "start": 2805,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2811,
    "end": 2812
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2813,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "a_pp2",
    "start": 2818,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2824,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2882,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "a_s1",
    "start": 2889,
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
    "value": "number",
    "start": 2895,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2939,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "a_s2",
    "start": 2946,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2954,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2972,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2979,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "a_s1",
    "start": 2982,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3032,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3039,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "a_s3",
    "start": 3043,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3060,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3067,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3070,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3073,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3076,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3119,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3126,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "a_s3",
    "start": 3130,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3135,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3142,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3160,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "a_s1",
    "start": 3163,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3170,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "a_s2",
    "start": 3173,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3178,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3229,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "b_p1",
    "start": 3236,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3242,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3283,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "b_p2",
    "start": 3290,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3298,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3316,
    "end": 3322
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3323,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "b_p1",
    "start": 3328,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3375,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3382,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "b_p3",
    "start": 3386,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3403,
    "end": 3409
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3410,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "b_p2",
    "start": 3415,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3420,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Identifier",
    "value": "b_p1",
    "start": 3425,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3469,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3476,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "b_p3",
    "start": 3480,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3485,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3492,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3510,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Identifier",
    "value": "b_p1",
    "start": 3515,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3522,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "b_p2",
    "start": 3527,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3532,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3583,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "b_pp1",
    "start": 3591,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3598,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3639,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "b_pp2",
    "start": 3647,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3656,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3674,
    "end": 3680
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3681,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "b_p1",
    "start": 3686,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3691,
    "end": 3692
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3694,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3733,
    "end": 3740
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3741,
    "end": 3744
  },
  {
    "type": "Identifier",
    "value": "b_pp3",
    "start": 3745,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3763,
    "end": 3769
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3770,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "b_pp2",
    "start": 3775,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3781,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "b_pp1",
    "start": 3786,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3831,
    "end": 3838
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3839,
    "end": 3842
  },
  {
    "type": "Identifier",
    "value": "b_pp3",
    "start": 3843,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3849,
    "end": 3854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3856,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3874,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Identifier",
    "value": "b_pp1",
    "start": 3879,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3887,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "b_pp2",
    "start": 3892,
    "end": 3897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3898,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3960,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "b_s1",
    "start": 3967,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3973,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4021,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "b_s2",
    "start": 4028,
    "end": 4032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4036,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4054,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4061,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "b_s1",
    "start": 4064,
    "end": 4068
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4123,
    "end": 4129
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4130,
    "end": 4133
  },
  {
    "type": "Identifier",
    "value": "b_s3",
    "start": 4134,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4151,
    "end": 4157
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4158,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4161,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4164,
    "end": 4166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4166,
    "end": 4167
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 4167,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4219,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 4226,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "b_s3",
    "start": 4230,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4235,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4240,
    "end": 4241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4242,
    "end": 4248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4282,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Identifier",
    "value": "b_s1",
    "start": 4285,
    "end": 4289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4292,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Identifier",
    "value": "b_s2",
    "start": 4295,
    "end": 4299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4300,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4316,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4320,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4325,
    "end": 4328
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4329,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4335,
    "end": 4338
  },
  {
    "type": "Identifier",
    "value": "i1_p",
    "start": 4339,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4346,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 4349,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4353,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "i1_f",
    "start": 4357,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4364,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 4367,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4369,
    "end": 4370
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4371,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "i1_r",
    "start": 4375,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4382,
    "end": 4384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4384,
    "end": 4385
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 4385,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 4388,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4393,
    "end": 4396
  },
  {
    "type": "Identifier",
    "value": "i1_prop",
    "start": 4397,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4407,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 4410,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4414,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 4417,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "i1_prop",
    "start": 4422,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4431,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "i1_nc_p",
    "start": 4435,
    "end": 4442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4445,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Identifier",
    "value": "nc_p1",
    "start": 4448,
    "end": 4453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4453,
    "end": 4454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4455,
    "end": 4458
  },
  {
    "type": "Identifier",
    "value": "i1_ncf",
    "start": 4459,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4468,
    "end": 4470
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Identifier",
    "value": "nc_p2",
    "start": 4471,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4478,
    "end": 4481
  },
  {
    "type": "Identifier",
    "value": "i1_ncr",
    "start": 4482,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4491,
    "end": 4493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4493,
    "end": 4494
  },
  {
    "type": "Identifier",
    "value": "nc_p2",
    "start": 4494,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 4500,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4505,
    "end": 4508
  },
  {
    "type": "Identifier",
    "value": "i1_ncprop",
    "start": 4509,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4521,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "nc_p3",
    "start": 4524,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 4531,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "nc_p3",
    "start": 4534,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Identifier",
    "value": "i1_ncprop",
    "start": 4542,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4553,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "i1_s_p",
    "start": 4557,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4566,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4568,
    "end": 4569
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 4569,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4573,
    "end": 4576
  },
  {
    "type": "Identifier",
    "value": "i1_s_f",
    "start": 4577,
    "end": 4583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4586,
    "end": 4588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4589,
    "end": 4591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4593,
    "end": 4596
  },
  {
    "type": "Identifier",
    "value": "i1_s_r",
    "start": 4597,
    "end": 4603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4606,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 4609,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 4612,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4615,
    "end": 4616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4617,
    "end": 4620
  },
  {
    "type": "Identifier",
    "value": "i1_s_prop",
    "start": 4621,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4631,
    "end": 4632
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4633,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4636,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4640,
    "end": 4642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4643,
    "end": 4645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "i1_s_prop",
    "start": 4648,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4657,
    "end": 4658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4659,
    "end": 4662
  },
  {
    "type": "Identifier",
    "value": "i1_s_nc_p",
    "start": 4663,
    "end": 4672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4675,
    "end": 4677
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4677,
    "end": 4678
  },
  {
    "type": "Identifier",
    "value": "nc_s1",
    "start": 4678,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4685,
    "end": 4688
  },
  {
    "type": "Identifier",
    "value": "i1_s_ncf",
    "start": 4689,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4700,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Identifier",
    "value": "nc_s2",
    "start": 4703,
    "end": 4708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4710,
    "end": 4713
  },
  {
    "type": "Identifier",
    "value": "i1_s_ncr",
    "start": 4714,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4725,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Identifier",
    "value": "nc_s2",
    "start": 4728,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 4734,
    "end": 4736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4736,
    "end": 4737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4737,
    "end": 4738
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4739,
    "end": 4742
  },
  {
    "type": "Identifier",
    "value": "i1_s_ncprop",
    "start": 4743,
    "end": 4754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4755,
    "end": 4756
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4757,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "nc_s3",
    "start": 4760,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4767,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Identifier",
    "value": "nc_s3",
    "start": 4770,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Identifier",
    "value": "i1_s_ncprop",
    "start": 4778,
    "end": 4789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4789,
    "end": 4790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4791,
    "end": 4794
  },
  {
    "type": "Identifier",
    "value": "i1_c",
    "start": 4795,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4802,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4806,
    "end": 4811
  },
  {
    "type": "Identifier",
    "value": "cProperties",
    "start": 4812,
    "end": 4823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4830,
    "end": 4837
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 4838,
    "end": 4841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4843,
    "end": 4849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4886,
    "end": 4892
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4893,
    "end": 4896
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 4897,
    "end": 4899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4899,
    "end": 4900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4900,
    "end": 4901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4902,
    "end": 4903
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4912,
    "end": 4918
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4919,
    "end": 4923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4923,
    "end": 4924
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 4924,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4974,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4981,
    "end": 4984
  },
  {
    "type": "Identifier",
    "value": "nc_p1",
    "start": 4985,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5003,
    "end": 5009
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5010,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 5015,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5018,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5060,
    "end": 5066
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 5067,
    "end": 5070
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 5071,
    "end": 5073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5073,
    "end": 5074
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5074,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5079,
    "end": 5080
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5081,
    "end": 5087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5087,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5089,
    "end": 5090
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5099,
    "end": 5103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5103,
    "end": 5104
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 5104,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5108,
    "end": 5109
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5110,
    "end": 5115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5115,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5127,
    "end": 5133
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 5134,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "nc_p2",
    "start": 5138,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5144,
    "end": 5149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5151,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5169,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5173,
    "end": 5174
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 5174,
    "end": 5177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5178,
    "end": 5179
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5180,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5235,
    "end": 5241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5242,
    "end": 5243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5244,
    "end": 5245
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5246,
    "end": 5248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5248,
    "end": 5249
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5288,
    "end": 5295
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5300,
    "end": 5302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5302,
    "end": 5303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5336,
    "end": 5337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5338,
    "end": 5341
  },
  {
    "type": "Identifier",
    "value": "cProperties_i",
    "start": 5342,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5358,
    "end": 5361
  },
  {
    "type": "Identifier",
    "value": "cProperties",
    "start": 5362,
    "end": 5373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5374,
    "end": 5375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5375,
    "end": 5376
  },
  {
    "type": "Identifier",
    "value": "cProperties_i",
    "start": 5377,
    "end": 5390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 5391,
    "end": 5393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Identifier",
    "value": "cProperties_i",
    "start": 5396,
    "end": 5409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 5410,
    "end": 5412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5412,
    "end": 5413
  },
  {
    "type": "Identifier",
    "value": "cProperties_i",
    "start": 5414,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Identifier",
    "value": "nc_p2",
    "start": 5428,
    "end": 5433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Identifier",
    "value": "cProperties_i",
    "start": 5436,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Identifier",
    "value": "nc_p1",
    "start": 5450,
    "end": 5455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5455,
    "end": 5456
  }
]
```
