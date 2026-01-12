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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 434,
                                "end": 440
                              },
                              "start": 432,
                              "end": 440
                            },
                            "start": 431,
                            "end": 440
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 443,
                            "end": 449
                          },
                          "start": 441,
                          "end": 449
                        },
                        "start": 430,
                        "end": 450
                      }
                    ],
                    "start": 428,
                    "end": 452
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 461,
                                "end": 467
                              },
                              "start": 459,
                              "end": 467
                            },
                            "start": 458,
                            "end": 467
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
                              "start": 470,
                              "end": 474
                            },
                            "typeArguments": null,
                            "start": 470,
                            "end": 474
                          },
                          "start": 468,
                          "end": 474
                        },
                        "start": 457,
                        "end": 475
                      }
                    ],
                    "start": 455,
                    "end": 477
                  }
                ],
                "start": 428,
                "end": 477
              },
              "start": 426,
              "end": 477
            },
            "start": 400,
            "end": 477
          },
          "init": null,
          "definite": false,
          "start": 400,
          "end": 477
        }
      ],
      "declare": true,
      "start": 388,
      "end": 478
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
          "start": 479,
          "end": 488
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 517
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 518,
              "end": 520
            }
          ],
          "optional": false,
          "start": 491,
          "end": 521
        },
        "start": 479,
        "end": 521
      },
      "directive": null,
      "start": 479,
      "end": 522
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
          "start": 523,
          "end": 535
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 538,
            "end": 564
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 565,
              "end": 572
            }
          ],
          "optional": false,
          "start": 538,
          "end": 573
        },
        "start": 523,
        "end": 573
      },
      "directive": null,
      "start": 523,
      "end": 574
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 612
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 613,
            "end": 617
          }
        ],
        "optional": false,
        "start": 585,
        "end": 618
      },
      "directive": null,
      "start": 585,
      "end": 619
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 698,
                                "end": 704
                              },
                              "start": 696,
                              "end": 704
                            },
                            "start": 695,
                            "end": 704
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 707,
                            "end": 713
                          },
                          "start": 705,
                          "end": 713
                        },
                        "start": 694,
                        "end": 714
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 719,
                                "end": 725
                              },
                              "start": 717,
                              "end": 725
                            },
                            "start": 716,
                            "end": 725
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 728,
                            "end": 734
                          },
                          "start": 726,
                          "end": 734
                        },
                        "start": 715,
                        "end": 735
                      }
                    ],
                    "start": 692,
                    "end": 737
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 746,
                                "end": 752
                              },
                              "start": 744,
                              "end": 752
                            },
                            "start": 743,
                            "end": 752
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
                              "start": 755,
                              "end": 759
                            },
                            "typeArguments": null,
                            "start": 755,
                            "end": 759
                          },
                          "start": 753,
                          "end": 759
                        },
                        "start": 742,
                        "end": 760
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                            "type": "TSBooleanKeyword",
                            "start": 774,
                            "end": 781
                          },
                          "start": 772,
                          "end": 781
                        },
                        "start": 761,
                        "end": 782
                      }
                    ],
                    "start": 740,
                    "end": 784
                  }
                ],
                "start": 692,
                "end": 784
              },
              "start": 690,
              "end": 784
            },
            "start": 663,
            "end": 784
          },
          "init": null,
          "definite": false,
          "start": 663,
          "end": 784
        }
      ],
      "declare": true,
      "start": 651,
      "end": 785
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
          "start": 786,
          "end": 795
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 825
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 826,
              "end": 828
            }
          ],
          "optional": false,
          "start": 798,
          "end": 829
        },
        "start": 786,
        "end": 829
      },
      "directive": null,
      "start": 786,
      "end": 830
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
          "start": 831,
          "end": 843
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionOfDifferentReturnType1",
            "optional": false,
            "typeAnnotation": null,
            "start": 846,
            "end": 873
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 874,
              "end": 881
            }
          ],
          "optional": false,
          "start": 846,
          "end": 882
        },
        "start": 831,
        "end": 882
      },
      "directive": null,
      "start": 831,
      "end": 883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 884,
          "end": 911
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 912,
            "end": 916
          }
        ],
        "optional": false,
        "start": 884,
        "end": 917
      },
      "directive": null,
      "start": 884,
      "end": 918
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentReturnType1",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 976
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 949,
        "end": 978
      },
      "directive": null,
      "start": 949,
      "end": 979
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1058,
                                "end": 1064
                              },
                              "start": 1056,
                              "end": 1064
                            },
                            "start": 1055,
                            "end": 1064
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1067,
                            "end": 1073
                          },
                          "start": 1065,
                          "end": 1073
                        },
                        "start": 1054,
                        "end": 1074
                      }
                    ],
                    "start": 1052,
                    "end": 1076
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1085,
                                "end": 1091
                              },
                              "start": 1083,
                              "end": 1091
                            },
                            "start": 1082,
                            "end": 1091
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
                              "start": 1094,
                              "end": 1098
                            },
                            "typeArguments": null,
                            "start": 1094,
                            "end": 1098
                          },
                          "start": 1092,
                          "end": 1098
                        },
                        "start": 1081,
                        "end": 1099
                      }
                    ],
                    "start": 1079,
                    "end": 1101
                  }
                ],
                "start": 1052,
                "end": 1101
              },
              "start": 1050,
              "end": 1101
            },
            "start": 1020,
            "end": 1101
          },
          "init": null,
          "definite": false,
          "start": 1020,
          "end": 1101
        }
      ],
      "declare": true,
      "start": 1008,
      "end": 1102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1103,
          "end": 1133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1134,
            "end": 1136
          }
        ],
        "optional": false,
        "start": 1103,
        "end": 1137
      },
      "directive": null,
      "start": 1103,
      "end": 1138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1168,
          "end": 1198
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1199,
            "end": 1206
          }
        ],
        "optional": false,
        "start": 1168,
        "end": 1207
      },
      "directive": null,
      "start": 1168,
      "end": 1208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentParameterTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 1238,
          "end": 1268
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1238,
        "end": 1270
      },
      "directive": null,
      "start": 1238,
      "end": 1271
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1356,
                                "end": 1362
                              },
                              "start": 1354,
                              "end": 1362
                            },
                            "start": 1353,
                            "end": 1362
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1365,
                            "end": 1371
                          },
                          "start": 1363,
                          "end": 1371
                        },
                        "start": 1352,
                        "end": 1372
                      }
                    ],
                    "start": 1350,
                    "end": 1374
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1383,
                                "end": 1389
                              },
                              "start": 1381,
                              "end": 1389
                            },
                            "start": 1380,
                            "end": 1389
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
                              "start": 1392,
                              "end": 1396
                            },
                            "typeArguments": null,
                            "start": 1392,
                            "end": 1396
                          },
                          "start": 1390,
                          "end": 1396
                        },
                        "start": 1379,
                        "end": 1397
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1402,
                                "end": 1408
                              },
                              "start": 1400,
                              "end": 1408
                            },
                            "start": 1399,
                            "end": 1408
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1411,
                            "end": 1418
                          },
                          "start": 1409,
                          "end": 1418
                        },
                        "start": 1398,
                        "end": 1419
                      }
                    ],
                    "start": 1377,
                    "end": 1421
                  }
                ],
                "start": 1350,
                "end": 1421
              },
              "start": 1348,
              "end": 1421
            },
            "start": 1314,
            "end": 1421
          },
          "init": null,
          "definite": false,
          "start": 1314,
          "end": 1421
        }
      ],
      "declare": true,
      "start": 1302,
      "end": 1422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1423,
          "end": 1457
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1423,
        "end": 1459
      },
      "directive": null,
      "start": 1423,
      "end": 1460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1491,
          "end": 1525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1526,
            "end": 1528
          }
        ],
        "optional": false,
        "start": 1491,
        "end": 1529
      },
      "directive": null,
      "start": 1491,
      "end": 1530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionOfDifferentNumberOfSignatures",
          "optional": false,
          "typeAnnotation": null,
          "start": 1561,
          "end": 1595
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1596,
            "end": 1603
          }
        ],
        "optional": false,
        "start": 1561,
        "end": 1604
      },
      "directive": null,
      "start": 1561,
      "end": 1605
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1689,
                                "end": 1695
                              },
                              "start": 1687,
                              "end": 1695
                            },
                            "start": 1686,
                            "end": 1695
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1698,
                            "end": 1704
                          },
                          "start": 1696,
                          "end": 1704
                        },
                        "start": 1685,
                        "end": 1705
                      }
                    ],
                    "start": 1683,
                    "end": 1707
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1716,
                                "end": 1722
                              },
                              "start": 1714,
                              "end": 1722
                            },
                            "start": 1713,
                            "end": 1722
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
                                "start": 1727,
                                "end": 1733
                              },
                              "start": 1725,
                              "end": 1733
                            },
                            "start": 1724,
                            "end": 1733
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1736,
                            "end": 1742
                          },
                          "start": 1734,
                          "end": 1742
                        },
                        "start": 1712,
                        "end": 1743
                      }
                    ],
                    "start": 1710,
                    "end": 1745
                  }
                ],
                "start": 1683,
                "end": 1745
              },
              "start": 1681,
              "end": 1745
            },
            "start": 1649,
            "end": 1745
          },
          "init": null,
          "definite": false,
          "start": 1649,
          "end": 1745
        }
      ],
      "declare": true,
      "start": 1637,
      "end": 1747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1748,
          "end": 1780
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1748,
        "end": 1782
      },
      "directive": null,
      "start": 1748,
      "end": 1783
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1802,
          "end": 1834
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1835,
            "end": 1842
          }
        ],
        "optional": false,
        "start": 1802,
        "end": 1843
      },
      "directive": null,
      "start": 1802,
      "end": 1844
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "unionWithDifferentParameterCount",
          "optional": false,
          "typeAnnotation": null,
          "start": 1863,
          "end": 1895
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1896,
            "end": 1903
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1905,
            "end": 1907
          }
        ],
        "optional": false,
        "start": 1863,
        "end": 1908
      },
      "directive": null,
      "start": 1863,
      "end": 1909
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 1963,
                                "end": 1969
                              },
                              "start": 1961,
                              "end": 1969
                            },
                            "start": 1960,
                            "end": 1969
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
                                "start": 1975,
                                "end": 1981
                              },
                              "start": 1973,
                              "end": 1981
                            },
                            "start": 1971,
                            "end": 1981
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1984,
                            "end": 1990
                          },
                          "start": 1982,
                          "end": 1990
                        },
                        "start": 1959,
                        "end": 1991
                      }
                    ],
                    "start": 1957,
                    "end": 1993
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 2002,
                                "end": 2008
                              },
                              "start": 2000,
                              "end": 2008
                            },
                            "start": 1999,
                            "end": 2008
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
                                "start": 2014,
                                "end": 2020
                              },
                              "start": 2012,
                              "end": 2020
                            },
                            "start": 2010,
                            "end": 2020
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2023,
                            "end": 2029
                          },
                          "start": 2021,
                          "end": 2029
                        },
                        "start": 1998,
                        "end": 2030
                      }
                    ],
                    "start": 1996,
                    "end": 2032
                  }
                ],
                "start": 1957,
                "end": 2032
              },
              "start": 1955,
              "end": 2032
            },
            "start": 1928,
            "end": 2032
          },
          "init": null,
          "definite": false,
          "start": 1928,
          "end": 2032
        }
      ],
      "declare": true,
      "start": 1916,
      "end": 2033
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
          "start": 2034,
          "end": 2042
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2045,
            "end": 2072
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2073,
              "end": 2080
            }
          ],
          "optional": false,
          "start": 2045,
          "end": 2081
        },
        "start": 2034,
        "end": 2081
      },
      "directive": null,
      "start": 2034,
      "end": 2082
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
          "start": 2083,
          "end": 2091
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2094,
            "end": 2121
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2122,
              "end": 2129
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2131,
              "end": 2133
            }
          ],
          "optional": false,
          "start": 2094,
          "end": 2134
        },
        "start": 2083,
        "end": 2134
      },
      "directive": null,
      "start": 2083,
      "end": 2135
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
          "start": 2136,
          "end": 2144
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2147,
            "end": 2174
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2175,
              "end": 2182
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2184,
              "end": 2191
            }
          ],
          "optional": false,
          "start": 2147,
          "end": 2192
        },
        "start": 2136,
        "end": 2192
      },
      "directive": null,
      "start": 2136,
      "end": 2193
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
          "start": 2221,
          "end": 2229
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2232,
            "end": 2259
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2232,
          "end": 2261
        },
        "start": 2221,
        "end": 2261
      },
      "directive": null,
      "start": 2221,
      "end": 2262
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 2320,
                                "end": 2326
                              },
                              "start": 2318,
                              "end": 2326
                            },
                            "start": 2317,
                            "end": 2326
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
                                "start": 2332,
                                "end": 2338
                              },
                              "start": 2330,
                              "end": 2338
                            },
                            "start": 2328,
                            "end": 2338
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2341,
                            "end": 2347
                          },
                          "start": 2339,
                          "end": 2347
                        },
                        "start": 2316,
                        "end": 2348
                      }
                    ],
                    "start": 2314,
                    "end": 2350
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 2359,
                                "end": 2365
                              },
                              "start": 2357,
                              "end": 2365
                            },
                            "start": 2356,
                            "end": 2365
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
                                "start": 2370,
                                "end": 2376
                              },
                              "start": 2368,
                              "end": 2376
                            },
                            "start": 2367,
                            "end": 2376
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2379,
                            "end": 2385
                          },
                          "start": 2377,
                          "end": 2385
                        },
                        "start": 2355,
                        "end": 2385
                      }
                    ],
                    "start": 2353,
                    "end": 2387
                  }
                ],
                "start": 2314,
                "end": 2387
              },
              "start": 2312,
              "end": 2387
            },
            "start": 2285,
            "end": 2387
          },
          "init": null,
          "definite": false,
          "start": 2285,
          "end": 2387
        }
      ],
      "declare": true,
      "start": 2273,
      "end": 2388
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
          "start": 2389,
          "end": 2397
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2400,
            "end": 2427
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2428,
              "end": 2435
            }
          ],
          "optional": false,
          "start": 2400,
          "end": 2436
        },
        "start": 2389,
        "end": 2436
      },
      "directive": null,
      "start": 2389,
      "end": 2437
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
          "start": 2465,
          "end": 2473
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2476,
            "end": 2503
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2504,
              "end": 2511
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2513,
              "end": 2515
            }
          ],
          "optional": false,
          "start": 2476,
          "end": 2516
        },
        "start": 2465,
        "end": 2516
      },
      "directive": null,
      "start": 2465,
      "end": 2517
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
          "start": 2545,
          "end": 2553
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2556,
            "end": 2583
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2584,
              "end": 2591
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2593,
              "end": 2600
            }
          ],
          "optional": false,
          "start": 2556,
          "end": 2601
        },
        "start": 2545,
        "end": 2601
      },
      "directive": null,
      "start": 2545,
      "end": 2602
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
          "start": 2630,
          "end": 2638
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2641,
            "end": 2668
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 2641,
          "end": 2670
        },
        "start": 2630,
        "end": 2670
      },
      "directive": null,
      "start": 2630,
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 2747,
                                "end": 2753
                              },
                              "start": 2745,
                              "end": 2753
                            },
                            "start": 2744,
                            "end": 2753
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
                                "start": 2759,
                                "end": 2765
                              },
                              "start": 2757,
                              "end": 2765
                            },
                            "start": 2755,
                            "end": 2765
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2768,
                            "end": 2774
                          },
                          "start": 2766,
                          "end": 2774
                        },
                        "start": 2743,
                        "end": 2775
                      }
                    ],
                    "start": 2741,
                    "end": 2777
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 2786,
                                "end": 2792
                              },
                              "start": 2784,
                              "end": 2792
                            },
                            "start": 2783,
                            "end": 2792
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2795,
                            "end": 2801
                          },
                          "start": 2793,
                          "end": 2801
                        },
                        "start": 2782,
                        "end": 2802
                      }
                    ],
                    "start": 2780,
                    "end": 2804
                  }
                ],
                "start": 2741,
                "end": 2804
              },
              "start": 2739,
              "end": 2804
            },
            "start": 2712,
            "end": 2804
          },
          "init": null,
          "definite": false,
          "start": 2712,
          "end": 2804
        }
      ],
      "declare": true,
      "start": 2700,
      "end": 2805
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
          "start": 2806,
          "end": 2814
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2817,
            "end": 2844
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2845,
              "end": 2852
            }
          ],
          "optional": false,
          "start": 2817,
          "end": 2853
        },
        "start": 2806,
        "end": 2853
      },
      "directive": null,
      "start": 2806,
      "end": 2854
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
          "start": 2855,
          "end": 2863
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2866,
            "end": 2893
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2894,
              "end": 2901
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2903,
              "end": 2905
            }
          ],
          "optional": false,
          "start": 2866,
          "end": 2906
        },
        "start": 2855,
        "end": 2906
      },
      "directive": null,
      "start": 2855,
      "end": 2907
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
          "start": 2914,
          "end": 2922
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2925,
            "end": 2952
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 2953,
              "end": 2960
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 2962,
              "end": 2969
            }
          ],
          "optional": false,
          "start": 2925,
          "end": 2970
        },
        "start": 2914,
        "end": 2970
      },
      "directive": null,
      "start": 2914,
      "end": 2971
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
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithOptionalParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3006,
            "end": 3033
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 3006,
          "end": 3035
        },
        "start": 2995,
        "end": 3035
      },
      "directive": null,
      "start": 2995,
      "end": 3036
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 3100,
                                "end": 3106
                              },
                              "start": 3098,
                              "end": 3106
                            },
                            "start": 3097,
                            "end": 3106
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
                              "start": 3111,
                              "end": 3112
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3114,
                                  "end": 3120
                                },
                                "start": 3114,
                                "end": 3122
                              },
                              "start": 3112,
                              "end": 3122
                            },
                            "value": null,
                            "start": 3108,
                            "end": 3122
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3125,
                            "end": 3131
                          },
                          "start": 3123,
                          "end": 3131
                        },
                        "start": 3096,
                        "end": 3132
                      }
                    ],
                    "start": 3094,
                    "end": 3134
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 3143,
                                "end": 3149
                              },
                              "start": 3141,
                              "end": 3149
                            },
                            "start": 3140,
                            "end": 3149
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
                              "start": 3154,
                              "end": 3155
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3157,
                                  "end": 3163
                                },
                                "start": 3157,
                                "end": 3165
                              },
                              "start": 3155,
                              "end": 3165
                            },
                            "value": null,
                            "start": 3151,
                            "end": 3165
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3168,
                            "end": 3174
                          },
                          "start": 3166,
                          "end": 3174
                        },
                        "start": 3139,
                        "end": 3174
                      }
                    ],
                    "start": 3137,
                    "end": 3176
                  }
                ],
                "start": 3094,
                "end": 3176
              },
              "start": 3092,
              "end": 3176
            },
            "start": 3069,
            "end": 3176
          },
          "init": null,
          "definite": false,
          "start": 3069,
          "end": 3176
        }
      ],
      "declare": true,
      "start": 3057,
      "end": 3177
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
          "start": 3178,
          "end": 3186
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3189,
            "end": 3212
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3213,
              "end": 3220
            }
          ],
          "optional": false,
          "start": 3189,
          "end": 3221
        },
        "start": 3178,
        "end": 3221
      },
      "directive": null,
      "start": 3178,
      "end": 3222
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
          "start": 3223,
          "end": 3231
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3234,
            "end": 3257
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3258,
              "end": 3265
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3267,
              "end": 3269
            }
          ],
          "optional": false,
          "start": 3234,
          "end": 3270
        },
        "start": 3223,
        "end": 3270
      },
      "directive": null,
      "start": 3223,
      "end": 3271
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
          "start": 3272,
          "end": 3280
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3283,
            "end": 3306
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3307,
              "end": 3314
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3316,
              "end": 3318
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 3320,
              "end": 3322
            }
          ],
          "optional": false,
          "start": 3283,
          "end": 3323
        },
        "start": 3272,
        "end": 3323
      },
      "directive": null,
      "start": 3272,
      "end": 3324
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
          "start": 3325,
          "end": 3333
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3336,
            "end": 3359
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3360,
              "end": 3367
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3369,
              "end": 3376
            }
          ],
          "optional": false,
          "start": 3336,
          "end": 3377
        },
        "start": 3325,
        "end": 3377
      },
      "directive": null,
      "start": 3325,
      "end": 3378
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
          "start": 3406,
          "end": 3414
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3417,
            "end": 3440
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 3417,
          "end": 3442
        },
        "start": 3406,
        "end": 3442
      },
      "directive": null,
      "start": 3406,
      "end": 3443
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 3497,
                                "end": 3503
                              },
                              "start": 3495,
                              "end": 3503
                            },
                            "start": 3494,
                            "end": 3503
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
                              "start": 3508,
                              "end": 3509
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 3511,
                                  "end": 3517
                                },
                                "start": 3511,
                                "end": 3519
                              },
                              "start": 3509,
                              "end": 3519
                            },
                            "value": null,
                            "start": 3505,
                            "end": 3519
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3522,
                            "end": 3528
                          },
                          "start": 3520,
                          "end": 3528
                        },
                        "start": 3493,
                        "end": 3529
                      }
                    ],
                    "start": 3491,
                    "end": 3531
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 3540,
                                "end": 3546
                              },
                              "start": 3538,
                              "end": 3546
                            },
                            "start": 3537,
                            "end": 3546
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
                                "start": 3551,
                                "end": 3557
                              },
                              "start": 3549,
                              "end": 3557
                            },
                            "start": 3548,
                            "end": 3557
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3560,
                            "end": 3566
                          },
                          "start": 3558,
                          "end": 3566
                        },
                        "start": 3536,
                        "end": 3566
                      }
                    ],
                    "start": 3534,
                    "end": 3568
                  }
                ],
                "start": 3491,
                "end": 3568
              },
              "start": 3489,
              "end": 3568
            },
            "start": 3466,
            "end": 3568
          },
          "init": null,
          "definite": false,
          "start": 3466,
          "end": 3568
        }
      ],
      "declare": true,
      "start": 3454,
      "end": 3569
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
          "start": 3570,
          "end": 3578
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3581,
            "end": 3604
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3605,
              "end": 3612
            }
          ],
          "optional": false,
          "start": 3581,
          "end": 3613
        },
        "start": 3570,
        "end": 3613
      },
      "directive": null,
      "start": 3570,
      "end": 3614
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
          "start": 3642,
          "end": 3650
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3653,
            "end": 3676
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3677,
              "end": 3684
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3686,
              "end": 3688
            }
          ],
          "optional": false,
          "start": 3653,
          "end": 3689
        },
        "start": 3642,
        "end": 3689
      },
      "directive": null,
      "start": 3642,
      "end": 3690
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
          "start": 3718,
          "end": 3726
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3729,
            "end": 3752
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3753,
              "end": 3760
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 3762,
              "end": 3764
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 3766,
              "end": 3768
            }
          ],
          "optional": false,
          "start": 3729,
          "end": 3769
        },
        "start": 3718,
        "end": 3769
      },
      "directive": null,
      "start": 3718,
      "end": 3770
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
          "start": 3798,
          "end": 3806
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3809,
            "end": 3832
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 3833,
              "end": 3840
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 3842,
              "end": 3849
            }
          ],
          "optional": false,
          "start": 3809,
          "end": 3850
        },
        "start": 3798,
        "end": 3850
      },
      "directive": null,
      "start": 3798,
      "end": 3851
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
          "start": 3879,
          "end": 3887
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3890,
            "end": 3913
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 3890,
          "end": 3915
        },
        "start": 3879,
        "end": 3915
      },
      "directive": null,
      "start": 3879,
      "end": 3916
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
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 3988,
                                "end": 3994
                              },
                              "start": 3986,
                              "end": 3994
                            },
                            "start": 3985,
                            "end": 3994
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
                              "start": 3999,
                              "end": 4000
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSNumberKeyword",
                                  "start": 4002,
                                  "end": 4008
                                },
                                "start": 4002,
                                "end": 4010
                              },
                              "start": 4000,
                              "end": 4010
                            },
                            "value": null,
                            "start": 3996,
                            "end": 4010
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4013,
                            "end": 4019
                          },
                          "start": 4011,
                          "end": 4019
                        },
                        "start": 3984,
                        "end": 4020
                      }
                    ],
                    "start": 3982,
                    "end": 4022
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 4031,
                                "end": 4037
                              },
                              "start": 4029,
                              "end": 4037
                            },
                            "start": 4028,
                            "end": 4037
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4040,
                            "end": 4046
                          },
                          "start": 4038,
                          "end": 4046
                        },
                        "start": 4027,
                        "end": 4046
                      }
                    ],
                    "start": 4025,
                    "end": 4048
                  }
                ],
                "start": 3982,
                "end": 4048
              },
              "start": 3980,
              "end": 4048
            },
            "start": 3957,
            "end": 4048
          },
          "init": null,
          "definite": false,
          "start": 3957,
          "end": 4048
        }
      ],
      "declare": true,
      "start": 3945,
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
          "start": 4050,
          "end": 4058
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4061,
            "end": 4084
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4085,
              "end": 4092
            }
          ],
          "optional": false,
          "start": 4061,
          "end": 4093
        },
        "start": 4050,
        "end": 4093
      },
      "directive": null,
      "start": 4050,
      "end": 4094
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
          "start": 4095,
          "end": 4103
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4106,
            "end": 4129
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4130,
              "end": 4137
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4139,
              "end": 4141
            }
          ],
          "optional": false,
          "start": 4106,
          "end": 4142
        },
        "start": 4095,
        "end": 4142
      },
      "directive": null,
      "start": 4095,
      "end": 4143
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
          "start": 4171,
          "end": 4179
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4182,
            "end": 4205
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4206,
              "end": 4213
            },
            {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 4215,
              "end": 4217
            },
            {
              "type": "Literal",
              "value": 11,
              "raw": "11",
              "start": 4219,
              "end": 4221
            }
          ],
          "optional": false,
          "start": 4182,
          "end": 4222
        },
        "start": 4171,
        "end": 4222
      },
      "directive": null,
      "start": 4171,
      "end": 4223
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
          "start": 4251,
          "end": 4259
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4262,
            "end": 4285
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 4286,
              "end": 4293
            },
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4295,
              "end": 4302
            }
          ],
          "optional": false,
          "start": 4262,
          "end": 4303
        },
        "start": 4251,
        "end": 4303
      },
      "directive": null,
      "start": 4251,
      "end": 4304
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
          "start": 4328,
          "end": 4336
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4339,
            "end": 4362
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 4339,
          "end": 4364
        },
        "start": 4328,
        "end": 4364
      },
      "directive": null,
      "start": 4328,
      "end": 4365
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
            "name": "unionWithRestParameter4",
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
                        "type": "TSCallSignatureDeclaration",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4437,
                              "end": 4438
                            },
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 4440,
                                  "end": 4446
                                },
                                "start": 4440,
                                "end": 4448
                              },
                              "start": 4438,
                              "end": 4448
                            },
                            "value": null,
                            "start": 4434,
                            "end": 4448
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4451,
                            "end": 4457
                          },
                          "start": 4449,
                          "end": 4457
                        },
                        "start": 4433,
                        "end": 4458
                      }
                    ],
                    "start": 4431,
                    "end": 4460
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "start": 4469,
                                "end": 4475
                              },
                              "start": 4467,
                              "end": 4475
                            },
                            "start": 4466,
                            "end": 4475
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 4480,
                                "end": 4486
                              },
                              "start": 4478,
                              "end": 4486
                            },
                            "start": 4477,
                            "end": 4486
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4489,
                            "end": 4495
                          },
                          "start": 4487,
                          "end": 4495
                        },
                        "start": 4465,
                        "end": 4496
                      }
                    ],
                    "start": 4463,
                    "end": 4498
                  }
                ],
                "start": 4431,
                "end": 4498
              },
              "start": 4429,
              "end": 4498
            },
            "start": 4406,
            "end": 4498
          },
          "init": null,
          "definite": false,
          "start": 4406,
          "end": 4498
        }
      ],
      "declare": true,
      "start": 4394,
      "end": 4499
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
          "start": 4500,
          "end": 4508
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": null,
            "start": 4511,
            "end": 4534
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4535,
              "end": 4542
            }
          ],
          "optional": false,
          "start": 4511,
          "end": 4543
        },
        "start": 4500,
        "end": 4543
      },
      "directive": null,
      "start": 4500,
      "end": 4544
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
          "start": 4606,
          "end": 4614
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "unionWithRestParameter4",
            "optional": false,
            "typeAnnotation": null,
            "start": 4617,
            "end": 4640
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 4641,
              "end": 4648
            },
            {
              "type": "Literal",
              "value": "world",
              "raw": "\"world\"",
              "start": 4650,
              "end": 4657
            }
          ],
          "optional": false,
          "start": 4617,
          "end": 4658
        },
        "start": 4606,
        "end": 4658
      },
      "directive": null,
      "start": 4606,
      "end": 4659
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4659
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
    "start": 388,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 400,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 461,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 479,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 491,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 523,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType",
    "start": 538,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 565,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 585,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 613,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 651,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 659,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 663,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 698,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 704,
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
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 719,
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
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 755,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
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
    "value": "boolean",
    "start": 774,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "numOrDate",
    "start": 786,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 798,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 826,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "strOrBoolean",
    "start": 831,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 846,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 874,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 884,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 912,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentReturnType1",
    "start": 949,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1008,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1020,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1058,
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
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1067,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1085,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1094,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1103,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1168,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1199,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentParameterTypes",
    "start": 1238,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1302,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1314,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1356,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1365,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1383,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1392,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1402,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1411,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1423,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
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
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1491,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1526,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "unionOfDifferentNumberOfSignatures",
    "start": 1561,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1596,
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
    "value": ";",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1637,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1649,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1689,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1716,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1727,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1736,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1748,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1802,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1835,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "unionWithDifferentParameterCount",
    "start": 1863,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1896,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1905,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1916,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1924,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 1928,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1963,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1975,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1984,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2002,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2014,
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
    "value": ":",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2023,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2034,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2045,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2073,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2083,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2094,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2122,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2131,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2133,
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
    "value": "strOrNum",
    "start": 2136,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2147,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2175,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2184,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2221,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter1",
    "start": 2232,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2273,
    "end": 2280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2281,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2285,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2320,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2332,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2341,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2356,
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
    "value": "string",
    "start": 2359,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2370,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2379,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2389,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2400,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2428,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2465,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2476,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2504,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2513,
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
    "value": ";",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2545,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2556,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2584,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2593,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2630,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter2",
    "start": 2641,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2700,
    "end": 2707
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2708,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2712,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2747,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2759,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2768,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2786,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2795,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2806,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2817,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2845,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2853,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2855,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2866,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2894,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2903,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2914,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 2925,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 2953,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2962,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2970,
    "end": 2971
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
    "type": "Identifier",
    "value": "unionWithOptionalParameter3",
    "start": 3006,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3057,
    "end": 3064
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3065,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3069,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3100,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3108,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3114,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3125,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3143,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3151,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3157,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3168,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3178,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3189,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3213,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3223,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3234,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3258,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3267,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3272,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3283,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3307,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3316,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3320,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3325,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3336,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3360,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3369,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3406,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter1",
    "start": 3417,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3454,
    "end": 3461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3462,
    "end": 3465
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3466,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3497,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3505,
    "end": 3508
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3511,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3522,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3540,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3551,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3560,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3570,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3581,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3605,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3642,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3653,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3677,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3686,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3718,
    "end": 3726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3729,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3753,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 3762,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 3766,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 3798,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3809,
    "end": 3832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 3833,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 3842,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3849,
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
    "value": "strOrNum",
    "start": 3879,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter2",
    "start": 3890,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3945,
    "end": 3952
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3953,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 3957,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3988,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3996,
    "end": 3999
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4002,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4013,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4031,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4040,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 4050,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4061,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4085,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4095,
    "end": 4103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4106,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4130,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4139,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4171,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4182,
    "end": 4205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4206,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 4215,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 4219,
    "end": 4221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4251,
    "end": 4259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4262,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4286,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4295,
    "end": 4302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4328,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter3",
    "start": 4339,
    "end": 4362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4362,
    "end": 4363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4363,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4394,
    "end": 4401
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4402,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter4",
    "start": 4406,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4434,
    "end": 4437
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4440,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4451,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4469,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4480,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4487,
    "end": 4488
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4489,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4495,
    "end": 4496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4500,
    "end": 4508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter4",
    "start": 4511,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4535,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 4606,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4615,
    "end": 4616
  },
  {
    "type": "Identifier",
    "value": "unionWithRestParameter4",
    "start": 4617,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4641,
    "end": 4648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 4650,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4657,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4658,
    "end": 4659
  }
]
```
