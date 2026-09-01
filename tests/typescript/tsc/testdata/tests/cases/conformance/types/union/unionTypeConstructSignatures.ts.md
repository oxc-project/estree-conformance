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
            "name": "numOrDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 36
                    },
                    "typeArguments": null,
                    "start": 32,
                    "end": 36
                  }
                ],
                "start": 23,
                "end": 36
              },
              "start": 21,
              "end": 36
            },
            "start": 12,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 36
        }
      ],
      "declare": true,
      "start": 0,
      "end": 37
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
            "name": "strOrBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 64,
                    "end": 70
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 73,
                    "end": 80
                  }
                ],
                "start": 64,
                "end": 80
              },
              "start": 62,
              "end": 80
            },
            "start": 50,
            "end": 80
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 80
        }
      ],
      "declare": true,
      "start": 38,
      "end": 81
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
                    "start": 104,
                    "end": 110
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 113,
                    "end": 119
                  }
                ],
                "start": 104,
                "end": 119
              },
              "start": 102,
              "end": 119
            },
            "start": 94,
            "end": 119
          },
          "init": null,
          "definite": false,
          "start": 94,
          "end": 119
        }
      ],
      "declare": true,
      "start": 82,
      "end": 120
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
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 457,
                                "end": 463
                              },
                              "start": 455,
                              "end": 463
                            },
                            "start": 454,
                            "end": 463
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 466,
                            "end": 472
                          },
                          "start": 464,
                          "end": 472
                        },
                        "start": 449,
                        "end": 473
                      }
                    ],
                    "start": 447,
                    "end": 475
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 488,
                                "end": 494
                              },
                              "start": 486,
                              "end": 494
                            },
                            "start": 485,
                            "end": 494
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 497,
                              "end": 501
                            },
                            "typeArguments": null,
                            "start": 497,
                            "end": 501
                          },
                          "start": 495,
                          "end": 501
                        },
                        "start": 480,
                        "end": 502
                      }
                    ],
                    "start": 478,
                    "end": 504
                  }
                ],
                "start": 447,
                "end": 504
              },
              "start": 445,
              "end": 504
            },
            "start": 419,
            "end": 504
          },
          "init": null,
          "definite": false,
          "start": 419,
          "end": 504
        }
      ],
      "declare": true,
      "start": 407,
      "end": 505
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 506,
          "end": 515
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 522,
            "end": 548
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 549,
              "end": 551
            }
          ],
          "start": 518,
          "end": 552
        },
        "start": 506,
        "end": 552
      },
      "directive": null,
      "start": 506,
      "end": 553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 566
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 599
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 600,
              "end": 607
            }
          ],
          "start": 569,
          "end": 608
        },
        "start": 554,
        "end": 608
      },
      "directive": null,
      "start": 554,
      "end": 609
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 623,
          "end": 650
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 651,
            "end": 655
          }
        ],
        "start": 619,
        "end": 656
      },
      "directive": null,
      "start": 619,
      "end": 657
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
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 740,
                                "end": 746
                              },
                              "start": 738,
                              "end": 746
                            },
                            "start": 737,
                            "end": 746
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 749,
                            "end": 755
                          },
                          "start": 747,
                          "end": 755
                        },
                        "start": 732,
                        "end": 756
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 765,
                                "end": 771
                              },
                              "start": 763,
                              "end": 771
                            },
                            "start": 762,
                            "end": 771
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 774,
                            "end": 780
                          },
                          "start": 772,
                          "end": 780
                        },
                        "start": 757,
                        "end": 781
                      }
                    ],
                    "start": 730,
                    "end": 783
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 796,
                                "end": 802
                              },
                              "start": 794,
                              "end": 802
                            },
                            "start": 793,
                            "end": 802
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 805,
                              "end": 809
                            },
                            "typeArguments": null,
                            "start": 805,
                            "end": 809
                          },
                          "start": 803,
                          "end": 809
                        },
                        "start": 788,
                        "end": 810
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 819,
                                "end": 825
                              },
                              "start": 817,
                              "end": 825
                            },
                            "start": 816,
                            "end": 825
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 828,
                            "end": 835
                          },
                          "start": 826,
                          "end": 835
                        },
                        "start": 811,
                        "end": 836
                      }
                    ],
                    "start": 786,
                    "end": 838
                  }
                ],
                "start": 730,
                "end": 838
              },
              "start": 728,
              "end": 838
            },
            "start": 701,
            "end": 838
          },
          "init": null,
          "definite": false,
          "start": 701,
          "end": 838
        }
      ],
      "declare": true,
      "start": 689,
      "end": 839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numOrDate",
          "optional": false,
          "typeAnnotation": null,
          "start": 840,
          "end": 849
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 883
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 884,
              "end": 886
            }
          ],
          "start": 852,
          "end": 887
        },
        "start": 840,
        "end": 887
      },
      "directive": null,
      "start": 840,
      "end": 888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 889,
          "end": 901
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 935
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 936,
              "end": 943
            }
          ],
          "start": 904,
          "end": 944
        },
        "start": 889,
        "end": 944
      },
      "directive": null,
      "start": 889,
      "end": 945
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 950,
          "end": 977
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 978,
            "end": 982
          }
        ],
        "start": 946,
        "end": 983
      },
      "directive": null,
      "start": 946,
      "end": 984
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1019,
          "end": 1046
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1015,
        "end": 1048
      },
      "directive": null,
      "start": 1015,
      "end": 1049
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
            "name": "unionOfDifferentParameterTypes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1132,
                                "end": 1138
                              },
                              "start": 1130,
                              "end": 1138
                            },
                            "start": 1129,
                            "end": 1138
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1141,
                            "end": 1147
                          },
                          "start": 1139,
                          "end": 1147
                        },
                        "start": 1124,
                        "end": 1148
                      }
                    ],
                    "start": 1122,
                    "end": 1150
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1163,
                                "end": 1169
                              },
                              "start": 1161,
                              "end": 1169
                            },
                            "start": 1160,
                            "end": 1169
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1172,
                              "end": 1176
                            },
                            "typeArguments": null,
                            "start": 1172,
                            "end": 1176
                          },
                          "start": 1170,
                          "end": 1176
                        },
                        "start": 1155,
                        "end": 1177
                      }
                    ],
                    "start": 1153,
                    "end": 1179
                  }
                ],
                "start": 1122,
                "end": 1179
              },
              "start": 1120,
              "end": 1179
            },
            "start": 1090,
            "end": 1179
          },
          "init": null,
          "definite": false,
          "start": 1090,
          "end": 1179
        }
      ],
      "declare": true,
      "start": 1078,
      "end": 1180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1185,
          "end": 1215
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1216,
            "end": 1218
          }
        ],
        "start": 1181,
        "end": 1219
      },
      "directive": null,
      "start": 1181,
      "end": 1220
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1284
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1285,
            "end": 1292
          }
        ],
        "start": 1250,
        "end": 1293
      },
      "directive": null,
      "start": 1250,
      "end": 1294
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1328,
          "end": 1358
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1324,
        "end": 1360
      },
      "directive": null,
      "start": 1324,
      "end": 1361
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
            "name": "unionOfDifferentNumberOfSignatures",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1450,
                                "end": 1456
                              },
                              "start": 1448,
                              "end": 1456
                            },
                            "start": 1447,
                            "end": 1456
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1459,
                            "end": 1465
                          },
                          "start": 1457,
                          "end": 1465
                        },
                        "start": 1442,
                        "end": 1466
                      }
                    ],
                    "start": 1440,
                    "end": 1468
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1481,
                                "end": 1487
                              },
                              "start": 1479,
                              "end": 1487
                            },
                            "start": 1478,
                            "end": 1487
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1490,
                              "end": 1494
                            },
                            "typeArguments": null,
                            "start": 1490,
                            "end": 1494
                          },
                          "start": 1488,
                          "end": 1494
                        },
                        "start": 1473,
                        "end": 1495
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1504,
                                "end": 1510
                              },
                              "start": 1502,
                              "end": 1510
                            },
                            "start": 1501,
                            "end": 1510
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1513,
                            "end": 1520
                          },
                          "start": 1511,
                          "end": 1520
                        },
                        "start": 1496,
                        "end": 1521
                      }
                    ],
                    "start": 1471,
                    "end": 1523
                  }
                ],
                "start": 1440,
                "end": 1523
              },
              "start": 1438,
              "end": 1523
            },
            "start": 1404,
            "end": 1523
          },
          "init": null,
          "definite": false,
          "start": 1404,
          "end": 1523
        }
      ],
      "declare": true,
      "start": 1392,
      "end": 1524
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1529,
          "end": 1563
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1525,
        "end": 1565
      },
      "directive": null,
      "start": 1525,
      "end": 1566
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1601,
          "end": 1635
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1636,
            "end": 1638
          }
        ],
        "start": 1597,
        "end": 1639
      },
      "directive": null,
      "start": 1597,
      "end": 1640
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1675,
          "end": 1709
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1710,
            "end": 1717
          }
        ],
        "start": 1671,
        "end": 1718
      },
      "directive": null,
      "start": 1671,
      "end": 1719
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
            "name": "unionWithDifferentParameterCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1807,
                                "end": 1813
                              },
                              "start": 1805,
                              "end": 1813
                            },
                            "start": 1804,
                            "end": 1813
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1816,
                            "end": 1822
                          },
                          "start": 1814,
                          "end": 1822
                        },
                        "start": 1799,
                        "end": 1823
                      }
                    ],
                    "start": 1797,
                    "end": 1825
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 1838,
                                "end": 1844
                              },
                              "start": 1836,
                              "end": 1844
                            },
                            "start": 1835,
                            "end": 1844
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1849,
                                "end": 1855
                              },
                              "start": 1847,
                              "end": 1855
                            },
                            "start": 1846,
                            "end": 1855
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1858,
                            "end": 1864
                          },
                          "start": 1856,
                          "end": 1864
                        },
                        "start": 1830,
                        "end": 1865
                      }
                    ],
                    "start": 1828,
                    "end": 1867
                  }
                ],
                "start": 1797,
                "end": 1867
              },
              "start": 1795,
              "end": 1867
            },
            "start": 1763,
            "end": 1867
          },
          "init": null,
          "definite": false,
          "start": 1763,
          "end": 1867
        }
      ],
      "declare": true,
      "start": 1751,
      "end": 1868
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1873,
          "end": 1905
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1869,
        "end": 1907
      },
      "directive": null,
      "start": 1869,
      "end": 1908
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1931,
          "end": 1963
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1964,
            "end": 1971
          }
        ],
        "start": 1927,
        "end": 1972
      },
      "directive": null,
      "start": 1927,
      "end": 1973
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1996,
          "end": 2028
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 2029,
            "end": 2036
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2038,
            "end": 2040
          }
        ],
        "start": 1992,
        "end": 2041
      },
      "directive": null,
      "start": 1992,
      "end": 2042
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
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2100,
                                "end": 2106
                              },
                              "start": 2098,
                              "end": 2106
                            },
                            "start": 2097,
                            "end": 2106
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2112,
                                "end": 2118
                              },
                              "start": 2110,
                              "end": 2118
                            },
                            "start": 2108,
                            "end": 2118
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2121,
                            "end": 2127
                          },
                          "start": 2119,
                          "end": 2127
                        },
                        "start": 2092,
                        "end": 2128
                      }
                    ],
                    "start": 2090,
                    "end": 2130
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2143,
                                "end": 2149
                              },
                              "start": 2141,
                              "end": 2149
                            },
                            "start": 2140,
                            "end": 2149
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2155,
                                "end": 2161
                              },
                              "start": 2153,
                              "end": 2161
                            },
                            "start": 2151,
                            "end": 2161
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2164,
                            "end": 2170
                          },
                          "start": 2162,
                          "end": 2170
                        },
                        "start": 2135,
                        "end": 2171
                      }
                    ],
                    "start": 2133,
                    "end": 2173
                  }
                ],
                "start": 2090,
                "end": 2173
              },
              "start": 2088,
              "end": 2173
            },
            "start": 2061,
            "end": 2173
          },
          "init": null,
          "definite": false,
          "start": 2061,
          "end": 2173
        }
      ],
      "declare": true,
      "start": 2049,
      "end": 2174
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
          "start": 2175,
          "end": 2183
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2190,
            "end": 2217
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2218,
              "end": 2225
            }
          ],
          "start": 2186,
          "end": 2226
        },
        "start": 2175,
        "end": 2226
      },
      "directive": null,
      "start": 2175,
      "end": 2227
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
          "start": 2228,
          "end": 2236
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2243,
            "end": 2270
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2271,
              "end": 2278
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2280,
              "end": 2282
            }
          ],
          "start": 2239,
          "end": 2283
        },
        "start": 2228,
        "end": 2283
      },
      "directive": null,
      "start": 2228,
      "end": 2284
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
          "start": 2285,
          "end": 2293
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2300,
            "end": 2327
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2328,
              "end": 2335
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2337,
              "end": 2344
            }
          ],
          "start": 2296,
          "end": 2345
        },
        "start": 2285,
        "end": 2345
      },
      "directive": null,
      "start": 2285,
      "end": 2346
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
          "start": 2374,
          "end": 2382
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2389,
            "end": 2416
          },
          "typeArguments": null,
          "arguments": [],
          "start": 2385,
          "end": 2418
        },
        "start": 2374,
        "end": 2418
      },
      "directive": null,
      "start": 2374,
      "end": 2419
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
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2481,
                                "end": 2487
                              },
                              "start": 2479,
                              "end": 2487
                            },
                            "start": 2478,
                            "end": 2487
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2493,
                                "end": 2499
                              },
                              "start": 2491,
                              "end": 2499
                            },
                            "start": 2489,
                            "end": 2499
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2502,
                            "end": 2508
                          },
                          "start": 2500,
                          "end": 2508
                        },
                        "start": 2473,
                        "end": 2509
                      }
                    ],
                    "start": 2471,
                    "end": 2511
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2524,
                                "end": 2530
                              },
                              "start": 2522,
                              "end": 2530
                            },
                            "start": 2521,
                            "end": 2530
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2535,
                                "end": 2541
                              },
                              "start": 2533,
                              "end": 2541
                            },
                            "start": 2532,
                            "end": 2541
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2544,
                            "end": 2550
                          },
                          "start": 2542,
                          "end": 2550
                        },
                        "start": 2516,
                        "end": 2550
                      }
                    ],
                    "start": 2514,
                    "end": 2552
                  }
                ],
                "start": 2471,
                "end": 2552
              },
              "start": 2469,
              "end": 2552
            },
            "start": 2442,
            "end": 2552
          },
          "init": null,
          "definite": false,
          "start": 2442,
          "end": 2552
        }
      ],
      "declare": true,
      "start": 2430,
      "end": 2553
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
          "start": 2554,
          "end": 2562
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2569,
            "end": 2596
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2597,
              "end": 2604
            }
          ],
          "start": 2565,
          "end": 2605
        },
        "start": 2554,
        "end": 2605
      },
      "directive": null,
      "start": 2554,
      "end": 2606
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
          "start": 2634,
          "end": 2642
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2649,
            "end": 2676
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2677,
              "end": 2684
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2686,
              "end": 2688
            }
          ],
          "start": 2645,
          "end": 2689
        },
        "start": 2634,
        "end": 2689
      },
      "directive": null,
      "start": 2634,
      "end": 2690
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
          "start": 2718,
          "end": 2726
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2733,
            "end": 2760
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2761,
              "end": 2768
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2770,
              "end": 2777
            }
          ],
          "start": 2729,
          "end": 2778
        },
        "start": 2718,
        "end": 2778
      },
      "directive": null,
      "start": 2718,
      "end": 2779
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
          "start": 2807,
          "end": 2815
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2822,
            "end": 2849
          },
          "typeArguments": null,
          "arguments": [],
          "start": 2818,
          "end": 2851
        },
        "start": 2807,
        "end": 2851
      },
      "directive": null,
      "start": 2807,
      "end": 2852
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
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2932,
                                "end": 2938
                              },
                              "start": 2930,
                              "end": 2938
                            },
                            "start": 2929,
                            "end": 2938
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2944,
                                "end": 2950
                              },
                              "start": 2942,
                              "end": 2950
                            },
                            "start": 2940,
                            "end": 2950
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2953,
                            "end": 2959
                          },
                          "start": 2951,
                          "end": 2959
                        },
                        "start": 2924,
                        "end": 2960
                      }
                    ],
                    "start": 2922,
                    "end": 2962
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 2975,
                                "end": 2981
                              },
                              "start": 2973,
                              "end": 2981
                            },
                            "start": 2972,
                            "end": 2981
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2984,
                            "end": 2990
                          },
                          "start": 2982,
                          "end": 2990
                        },
                        "start": 2967,
                        "end": 2991
                      }
                    ],
                    "start": 2965,
                    "end": 2993
                  }
                ],
                "start": 2922,
                "end": 2993
              },
              "start": 2920,
              "end": 2993
            },
            "start": 2893,
            "end": 2993
          },
          "init": null,
          "definite": false,
          "start": 2893,
          "end": 2993
        }
      ],
      "declare": true,
      "start": 2881,
      "end": 2994
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
          "start": 2995,
          "end": 3003
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3010,
            "end": 3037
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3038,
              "end": 3045
            }
          ],
          "start": 3006,
          "end": 3046
        },
        "start": 2995,
        "end": 3046
      },
      "directive": null,
      "start": 2995,
      "end": 3047
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
          "start": 3075,
          "end": 3083
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3090,
            "end": 3117
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3118,
              "end": 3125
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3127,
              "end": 3129
            }
          ],
          "start": 3086,
          "end": 3130
        },
        "start": 3075,
        "end": 3130
      },
      "directive": null,
      "start": 3075,
      "end": 3131
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
          "start": 3138,
          "end": 3146
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3153,
            "end": 3180
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3181,
              "end": 3188
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3190,
              "end": 3197
            }
          ],
          "start": 3149,
          "end": 3198
        },
        "start": 3138,
        "end": 3198
      },
      "directive": null,
      "start": 3138,
      "end": 3199
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
          "start": 3214,
          "end": 3222
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3229,
            "end": 3256
          },
          "typeArguments": null,
          "arguments": [],
          "start": 3225,
          "end": 3258
        },
        "start": 3214,
        "end": 3258
      },
      "directive": null,
      "start": 3214,
      "end": 3259
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
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3335,
                                "end": 3341
                              },
                              "start": 3333,
                              "end": 3341
                            },
                            "start": 3332,
                            "end": 3341
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3346,
                              "end": 3347
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3349,
                                  "end": 3355
                                },
                                "start": 3349,
                                "end": 3357
                              },
                              "start": 3347,
                              "end": 3357
                            },
                            "value": null,
                            "start": 3343,
                            "end": 3357
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3360,
                            "end": 3366
                          },
                          "start": 3358,
                          "end": 3366
                        },
                        "start": 3327,
                        "end": 3367
                      }
                    ],
                    "start": 3325,
                    "end": 3369
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3382,
                                "end": 3388
                              },
                              "start": 3380,
                              "end": 3388
                            },
                            "start": 3379,
                            "end": 3388
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3393,
                              "end": 3394
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3396,
                                  "end": 3402
                                },
                                "start": 3396,
                                "end": 3404
                              },
                              "start": 3394,
                              "end": 3404
                            },
                            "value": null,
                            "start": 3390,
                            "end": 3404
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3407,
                            "end": 3413
                          },
                          "start": 3405,
                          "end": 3413
                        },
                        "start": 3374,
                        "end": 3413
                      }
                    ],
                    "start": 3372,
                    "end": 3415
                  }
                ],
                "start": 3325,
                "end": 3415
              },
              "start": 3323,
              "end": 3415
            },
            "start": 3300,
            "end": 3415
          },
          "init": null,
          "definite": false,
          "start": 3300,
          "end": 3415
        }
      ],
      "declare": true,
      "start": 3288,
      "end": 3416
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
          "start": 3417,
          "end": 3425
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3432,
            "end": 3455
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3456,
              "end": 3463
            }
          ],
          "start": 3428,
          "end": 3464
        },
        "start": 3417,
        "end": 3464
      },
      "directive": null,
      "start": 3417,
      "end": 3465
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
          "start": 3466,
          "end": 3474
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3481,
            "end": 3504
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3505,
              "end": 3512
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3514,
              "end": 3516
            }
          ],
          "start": 3477,
          "end": 3517
        },
        "start": 3466,
        "end": 3517
      },
      "directive": null,
      "start": 3466,
      "end": 3518
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
          "start": 3519,
          "end": 3527
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3534,
            "end": 3557
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3558,
              "end": 3565
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3567,
              "end": 3569
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 3571,
              "end": 3573
            }
          ],
          "start": 3530,
          "end": 3574
        },
        "start": 3519,
        "end": 3574
      },
      "directive": null,
      "start": 3519,
      "end": 3575
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
          "start": 3576,
          "end": 3584
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3591,
            "end": 3614
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3615,
              "end": 3622
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3624,
              "end": 3631
            }
          ],
          "start": 3587,
          "end": 3632
        },
        "start": 3576,
        "end": 3632
      },
      "directive": null,
      "start": 3576,
      "end": 3633
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
          "start": 3661,
          "end": 3669
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3676,
            "end": 3699
          },
          "typeArguments": null,
          "arguments": [],
          "start": 3672,
          "end": 3701
        },
        "start": 3661,
        "end": 3701
      },
      "directive": null,
      "start": 3661,
      "end": 3702
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
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3760,
                                "end": 3766
                              },
                              "start": 3758,
                              "end": 3766
                            },
                            "start": 3757,
                            "end": 3766
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3771,
                              "end": 3772
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3774,
                                  "end": 3780
                                },
                                "start": 3774,
                                "end": 3782
                              },
                              "start": 3772,
                              "end": 3782
                            },
                            "value": null,
                            "start": 3768,
                            "end": 3782
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3785,
                            "end": 3791
                          },
                          "start": 3783,
                          "end": 3791
                        },
                        "start": 3752,
                        "end": 3792
                      }
                    ],
                    "start": 3750,
                    "end": 3794
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 3807,
                                "end": 3813
                              },
                              "start": 3805,
                              "end": 3813
                            },
                            "start": 3804,
                            "end": 3813
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3818,
                                "end": 3824
                              },
                              "start": 3816,
                              "end": 3824
                            },
                            "start": 3815,
                            "end": 3824
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3827,
                            "end": 3833
                          },
                          "start": 3825,
                          "end": 3833
                        },
                        "start": 3799,
                        "end": 3833
                      }
                    ],
                    "start": 3797,
                    "end": 3835
                  }
                ],
                "start": 3750,
                "end": 3835
              },
              "start": 3748,
              "end": 3835
            },
            "start": 3725,
            "end": 3835
          },
          "init": null,
          "definite": false,
          "start": 3725,
          "end": 3835
        }
      ],
      "declare": true,
      "start": 3713,
      "end": 3836
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
          "start": 3837,
          "end": 3845
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3852,
            "end": 3875
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3876,
              "end": 3883
            }
          ],
          "start": 3848,
          "end": 3884
        },
        "start": 3837,
        "end": 3884
      },
      "directive": null,
      "start": 3837,
      "end": 3885
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
          "start": 3913,
          "end": 3921
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3928,
            "end": 3951
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3952,
              "end": 3959
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3961,
              "end": 3963
            }
          ],
          "start": 3924,
          "end": 3964
        },
        "start": 3913,
        "end": 3964
      },
      "directive": null,
      "start": 3913,
      "end": 3965
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
          "start": 3993,
          "end": 4001
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4008,
            "end": 4031
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4032,
              "end": 4039
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4041,
              "end": 4043
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 4045,
              "end": 4047
            }
          ],
          "start": 4004,
          "end": 4048
        },
        "start": 3993,
        "end": 4048
      },
      "directive": null,
      "start": 3993,
      "end": 4049
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
          "start": 4077,
          "end": 4085
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4092,
            "end": 4115
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4116,
              "end": 4123
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4125,
              "end": 4132
            }
          ],
          "start": 4088,
          "end": 4133
        },
        "start": 4077,
        "end": 4133
      },
      "directive": null,
      "start": 4077,
      "end": 4134
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
          "start": 4162,
          "end": 4170
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4177,
            "end": 4200
          },
          "typeArguments": null,
          "arguments": [],
          "start": 4173,
          "end": 4202
        },
        "start": 4162,
        "end": 4202
      },
      "directive": null,
      "start": 4162,
      "end": 4203
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
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 4279,
                                "end": 4285
                              },
                              "start": 4277,
                              "end": 4285
                            },
                            "start": 4276,
                            "end": 4285
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4290,
                              "end": 4291
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4293,
                                  "end": 4299
                                },
                                "start": 4293,
                                "end": 4301
                              },
                              "start": 4291,
                              "end": 4301
                            },
                            "value": null,
                            "start": 4287,
                            "end": 4301
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4304,
                            "end": 4310
                          },
                          "start": 4302,
                          "end": 4310
                        },
                        "start": 4271,
                        "end": 4311
                      }
                    ],
                    "start": 4269,
                    "end": 4313
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "start": 4326,
                                "end": 4332
                              },
                              "start": 4324,
                              "end": 4332
                            },
                            "start": 4323,
                            "end": 4332
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4335,
                            "end": 4341
                          },
                          "start": 4333,
                          "end": 4341
                        },
                        "start": 4318,
                        "end": 4341
                      }
                    ],
                    "start": 4316,
                    "end": 4343
                  }
                ],
                "start": 4269,
                "end": 4343
              },
              "start": 4267,
              "end": 4343
            },
            "start": 4244,
            "end": 4343
          },
          "init": null,
          "definite": false,
          "start": 4244,
          "end": 4343
        }
      ],
      "declare": true,
      "start": 4232,
      "end": 4344
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
          "start": 4345,
          "end": 4353
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4360,
            "end": 4383
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4384,
              "end": 4391
            }
          ],
          "start": 4356,
          "end": 4392
        },
        "start": 4345,
        "end": 4392
      },
      "directive": null,
      "start": 4345,
      "end": 4393
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
          "start": 4421,
          "end": 4429
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4436,
            "end": 4459
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4460,
              "end": 4467
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4469,
              "end": 4471
            }
          ],
          "start": 4432,
          "end": 4472
        },
        "start": 4421,
        "end": 4472
      },
      "directive": null,
      "start": 4421,
      "end": 4473
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
          "start": 4480,
          "end": 4488
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4495,
            "end": 4518
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4519,
              "end": 4526
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4528,
              "end": 4530
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 4532,
              "end": 4534
            }
          ],
          "start": 4491,
          "end": 4535
        },
        "start": 4480,
        "end": 4535
      },
      "directive": null,
      "start": 4480,
      "end": 4536
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
          "start": 4543,
          "end": 4551
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4558,
            "end": 4581
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4582,
              "end": 4589
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4591,
              "end": 4598
            }
          ],
          "start": 4554,
          "end": 4599
        },
        "start": 4543,
        "end": 4599
      },
      "directive": null,
      "start": 4543,
      "end": 4600
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
          "start": 4615,
          "end": 4623
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4630,
            "end": 4653
          },
          "typeArguments": null,
          "arguments": [],
          "start": 4626,
          "end": 4655
        },
        "start": 4615,
        "end": 4655
      },
      "directive": null,
      "start": 4615,
      "end": 4656
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
            "name": "unionWithAbstractSignature",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSConstructorType",
                    "abstract": true,
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
                            "start": 4743,
                            "end": 4749
                          },
                          "start": 4741,
                          "end": 4749
                        },
                        "start": 4740,
                        "end": 4749
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4754,
                        "end": 4760
                      },
                      "start": 4751,
                      "end": 4760
                    },
                    "start": 4726,
                    "end": 4760
                  },
                  {
                    "type": "TSConstructorType",
                    "abstract": false,
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
                            "start": 4773,
                            "end": 4779
                          },
                          "start": 4771,
                          "end": 4779
                        },
                        "start": 4770,
                        "end": 4779
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4784,
                        "end": 4790
                      },
                      "start": 4781,
                      "end": 4790
                    },
                    "start": 4765,
                    "end": 4790
                  }
                ],
                "start": 4725,
                "end": 4791
              },
              "start": 4723,
              "end": 4791
            },
            "start": 4697,
            "end": 4791
          },
          "init": null,
          "definite": false,
          "start": 4697,
          "end": 4791
        }
      ],
      "declare": true,
      "start": 4685,
      "end": 4792
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithAbstractSignature",
          "optional": false,
          "typeAnnotation": null,
          "start": 4797,
          "end": 4823
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "start": 4824,
            "end": 4831
          }
        ],
        "start": 4793,
        "end": 4832
      },
      "directive": null,
      "start": 4793,
      "end": 4833
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4833
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 12,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 38,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 50,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 73,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 82,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 94,
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
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 407,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 415,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 419,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Keyword",
    "value": "new",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "numOrDate",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 518,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 522,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 554,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 573,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 600,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 619,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 623,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 689,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 701,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 757,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 796,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 805,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 811,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 819,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 828,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 840,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 852,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 856,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 884,
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
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 889,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 908,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 936,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 946,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 950,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 978,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 1019,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1090,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1132,
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
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1141,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1155,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1160,
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
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1185,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1254,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1285,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1328,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1392,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1404,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1450,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1459,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1473,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1481,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1490,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1513,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1529,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1597,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1601,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1636,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1671,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1675,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1710,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1751,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1759,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1763,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1799,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1807,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1830,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1838,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1849,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1873,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1931,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1964,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1992,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1996,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2029,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2038,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2049,
    "end": 2056
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2057,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2061,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2092,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2100,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2112,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2121,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ",",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2155,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2164,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2175,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2186,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2190,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2218,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2228,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2239,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2243,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2271,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2280,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2285,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2300,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2328,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2337,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2374,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2385,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2389,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2430,
    "end": 2437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2438,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2442,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2473,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2481,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2493,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2502,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": "|",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2516,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2524,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2535,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2544,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2554,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2565,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2569,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2597,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2634,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2645,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2649,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2677,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2686,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2718,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2729,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2733,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2761,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2770,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2807,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2818,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2822,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2881,
    "end": 2888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2889,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2893,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2924,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2932,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2944,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2953,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2967,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2975,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2984,
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
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2995,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3006,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3010,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3038,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3075,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3086,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3090,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3118,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3127,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3138,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3149,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3153,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3181,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3190,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3214,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3225,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3229,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3288,
    "end": 3295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3296,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3300,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3327,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3335,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3343,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3349,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3360,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3374,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3382,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3390,
    "end": 3393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3396,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3407,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3417,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3428,
    "end": 3431
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3432,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3456,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3466,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3477,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3481,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3505,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3514,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3519,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3530,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3534,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3558,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3567,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3571,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3576,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3587,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3591,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3615,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3624,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3661,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3672,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3676,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3713,
    "end": 3720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3721,
    "end": 3724
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3725,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3752,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3760,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3768,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3774,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3785,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3799,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3807,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3818,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3827,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3837,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3848,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3852,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3876,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3913,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3924,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3928,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3952,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3961,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3993,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4004,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 4008,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4032,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4041,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 4045,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4077,
    "end": 4085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4088,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 4092,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4116,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4125,
    "end": 4132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4162,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4173,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 4177,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4232,
    "end": 4239
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4240,
    "end": 4243
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4244,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4269,
    "end": 4270
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4271,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4279,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4287,
    "end": 4290
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4291,
    "end": 4292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4293,
    "end": 4299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4300,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4304,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4314,
    "end": 4315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4318,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4326,
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
    "value": ":",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4335,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4343,
    "end": 4344
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4345,
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
    "value": "new",
    "start": 4356,
    "end": 4359
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4360,
    "end": 4383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4383,
    "end": 4384
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4384,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4421,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4432,
    "end": 4435
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4436,
    "end": 4459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4460,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4469,
    "end": 4471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4471,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4480,
    "end": 4488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4491,
    "end": 4494
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4495,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4519,
    "end": 4526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4528,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 4532,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4543,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4554,
    "end": 4557
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4558,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4582,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4591,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4599,
    "end": 4600
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4615,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4626,
    "end": 4629
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4630,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4685,
    "end": 4692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4693,
    "end": 4696
  },
  {
    "type": "Identifier",
    "value": "unionWithAbstractSignature",
    "start": 4697,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 4726,
    "end": 4734
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4735,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4740,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4743,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4751,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4754,
    "end": 4760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4760,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4765,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4770,
    "end": 4771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4771,
    "end": 4772
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4773,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4781,
    "end": 4783
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4784,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4793,
    "end": 4796
  },
  {
    "type": "Identifier",
    "value": "unionWithAbstractSignature",
    "start": 4797,
    "end": 4823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4824,
    "end": 4831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4832,
    "end": 4833
  }
]
```
