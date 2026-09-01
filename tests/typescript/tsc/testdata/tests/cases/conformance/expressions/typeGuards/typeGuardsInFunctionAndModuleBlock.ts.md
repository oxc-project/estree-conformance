__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 63
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 67,
                  "end": 73
                },
                {
                  "type": "TSStringKeyword",
                  "start": 76,
                  "end": 82
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 85,
                  "end": 92
                }
              ],
              "start": 67,
              "end": 92
            },
            "start": 65,
            "end": 92
          },
          "start": 64,
          "end": 92
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "prefix": true,
                  "start": 107,
                  "end": 115
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 120,
                  "end": 128
                },
                "start": 107,
                "end": 128
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
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
                              "start": 182,
                              "end": 183
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "definite": false,
                            "start": 182,
                            "end": 187
                          }
                        ],
                        "declare": false,
                        "start": 178,
                        "end": 188
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 235,
                                "end": 236
                              },
                              "prefix": true,
                              "start": 228,
                              "end": 236
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 241,
                              "end": 250
                            },
                            "start": 228,
                            "end": 250
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 269,
                                "end": 270
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 271,
                                "end": 279
                              },
                              "optional": false,
                              "computed": false,
                              "start": 269,
                              "end": 279
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 269,
                            "end": 281
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 311,
                                "end": 312
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 313,
                                "end": 321
                              },
                              "optional": false,
                              "computed": false,
                              "start": 311,
                              "end": 321
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 311,
                            "end": 323
                          },
                          "start": 228,
                          "end": 323
                        },
                        "start": 221,
                        "end": 324
                      }
                    ],
                    "start": 164,
                    "end": 344
                  },
                  "expression": false,
                  "start": 151,
                  "end": 344
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 151,
                "end": 347
              },
              "start": 107,
              "end": 347
            },
            "start": 100,
            "end": 348
          }
        ],
        "start": 94,
        "end": 350
      },
      "expression": false,
      "start": 51,
      "end": 350
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 360,
        "end": 364
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 368,
                  "end": 374
                },
                {
                  "type": "TSStringKeyword",
                  "start": 377,
                  "end": 383
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 386,
                  "end": 393
                }
              ],
              "start": 368,
              "end": 393
            },
            "start": 366,
            "end": 393
          },
          "start": 365,
          "end": 393
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "prefix": true,
                  "start": 408,
                  "end": 416
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 421,
                  "end": 429
                },
                "start": 408,
                "end": 429
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
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
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 466,
                              "end": 472
                            },
                            {
                              "type": "TSBooleanKeyword",
                              "start": 475,
                              "end": 482
                            }
                          ],
                          "start": 466,
                          "end": 482
                        },
                        "start": 464,
                        "end": 482
                      },
                      "start": 463,
                      "end": 482
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 503
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 506,
                              "end": 507
                            },
                            "definite": false,
                            "start": 502,
                            "end": 507
                          }
                        ],
                        "declare": false,
                        "start": 498,
                        "end": 508
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 567,
                                "end": 568
                              },
                              "prefix": true,
                              "start": 560,
                              "end": 568
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 573,
                              "end": 582
                            },
                            "start": 560,
                            "end": 582
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 601,
                                "end": 602
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 603,
                                "end": 611
                              },
                              "optional": false,
                              "computed": false,
                              "start": 601,
                              "end": 611
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 601,
                            "end": 613
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 643,
                                "end": 644
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 645,
                                "end": 653
                              },
                              "optional": false,
                              "computed": false,
                              "start": 643,
                              "end": 653
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 643,
                            "end": 655
                          },
                          "start": 560,
                          "end": 655
                        },
                        "start": 553,
                        "end": 656
                      }
                    ],
                    "start": 484,
                    "end": 676
                  },
                  "expression": false,
                  "start": 452,
                  "end": 676
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  }
                ],
                "optional": false,
                "start": 452,
                "end": 680
              },
              "start": 408,
              "end": 680
            },
            "start": 401,
            "end": 681
          }
        ],
        "start": 395,
        "end": 725
      },
      "expression": false,
      "start": 351,
      "end": 725
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 735,
        "end": 739
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 743,
                  "end": 749
                },
                {
                  "type": "TSStringKeyword",
                  "start": 752,
                  "end": 758
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 761,
                  "end": 768
                }
              ],
              "start": 743,
              "end": 768
            },
            "start": 741,
            "end": 768
          },
          "start": 740,
          "end": 768
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 790,
                    "end": 791
                  },
                  "prefix": true,
                  "start": 783,
                  "end": 791
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 796,
                  "end": 804
                },
                "start": 783,
                "end": 804
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 815,
                "end": 816
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 852,
                              "end": 853
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 856,
                              "end": 857
                            },
                            "definite": false,
                            "start": 852,
                            "end": 857
                          }
                        ],
                        "declare": false,
                        "start": 848,
                        "end": 858
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 917,
                                "end": 918
                              },
                              "prefix": true,
                              "start": 910,
                              "end": 918
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 923,
                              "end": 932
                            },
                            "start": 910,
                            "end": 932
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 951,
                                "end": 952
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 953,
                                "end": 961
                              },
                              "optional": false,
                              "computed": false,
                              "start": 951,
                              "end": 961
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 951,
                            "end": 963
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 993,
                                "end": 994
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 995,
                                "end": 1003
                              },
                              "optional": false,
                              "computed": false,
                              "start": 993,
                              "end": 1003
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 993,
                            "end": 1005
                          },
                          "start": 910,
                          "end": 1005
                        },
                        "start": 903,
                        "end": 1006
                      }
                    ],
                    "start": 834,
                    "end": 1026
                  },
                  "id": null,
                  "generator": false,
                  "start": 828,
                  "end": 1026
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 827,
                "end": 1029
              },
              "start": 783,
              "end": 1029
            },
            "start": 776,
            "end": 1030
          }
        ],
        "start": 770,
        "end": 1032
      },
      "expression": false,
      "start": 726,
      "end": 1032
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1042,
        "end": 1046
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1050,
                  "end": 1056
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1059,
                  "end": 1065
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1068,
                  "end": 1075
                }
              ],
              "start": 1050,
              "end": 1075
            },
            "start": 1048,
            "end": 1075
          },
          "start": 1047,
          "end": 1075
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1097,
                    "end": 1098
                  },
                  "prefix": true,
                  "start": 1090,
                  "end": 1098
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1103,
                  "end": 1111
                },
                "start": 1090,
                "end": 1111
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1122,
                "end": 1123
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
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
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1139,
                              "end": 1145
                            },
                            {
                              "type": "TSBooleanKeyword",
                              "start": 1148,
                              "end": 1155
                            }
                          ],
                          "start": 1139,
                          "end": 1155
                        },
                        "start": 1137,
                        "end": 1155
                      },
                      "start": 1136,
                      "end": 1155
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1178,
                              "end": 1179
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1182,
                              "end": 1183
                            },
                            "definite": false,
                            "start": 1178,
                            "end": 1183
                          }
                        ],
                        "declare": false,
                        "start": 1174,
                        "end": 1184
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1243,
                                "end": 1244
                              },
                              "prefix": true,
                              "start": 1236,
                              "end": 1244
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "boolean",
                              "raw": "\"boolean\"",
                              "start": 1249,
                              "end": 1258
                            },
                            "start": 1236,
                            "end": 1258
                          },
                          "consequent": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1277,
                                "end": 1278
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1279,
                                "end": 1287
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1277,
                              "end": 1287
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1277,
                            "end": 1289
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1319,
                                "end": 1320
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1321,
                                "end": 1329
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1319,
                              "end": 1329
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1319,
                            "end": 1331
                          },
                          "start": 1236,
                          "end": 1331
                        },
                        "start": 1229,
                        "end": 1332
                      }
                    ],
                    "start": 1160,
                    "end": 1352
                  },
                  "id": null,
                  "generator": false,
                  "start": 1135,
                  "end": 1352
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1354,
                    "end": 1355
                  }
                ],
                "optional": false,
                "start": 1134,
                "end": 1356
              },
              "start": 1090,
              "end": 1356
            },
            "start": 1083,
            "end": 1357
          }
        ],
        "start": 1077,
        "end": 1401
      },
      "expression": false,
      "start": 1033,
      "end": 1401
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1469,
        "end": 1473
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1477,
                  "end": 1483
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1486,
                  "end": 1492
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1495,
                  "end": 1502
                }
              ],
              "start": 1477,
              "end": 1502
            },
            "start": 1475,
            "end": 1502
          },
          "start": 1474,
          "end": 1502
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1521,
                  "end": 1522
                },
                "prefix": true,
                "start": 1514,
                "end": 1522
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1527,
                "end": 1535
              },
              "start": 1514,
              "end": 1535
            },
            "consequent": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1551,
                        "end": 1552
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1555,
                        "end": 1556
                      },
                      "definite": false,
                      "start": 1551,
                      "end": 1556
                    }
                  ],
                  "declare": false,
                  "start": 1547,
                  "end": 1557
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1586,
                    "end": 1589
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
                              "start": 1610,
                              "end": 1611
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1614,
                              "end": 1615
                            },
                            "definite": false,
                            "start": 1610,
                            "end": 1615
                          }
                        ],
                        "declare": false,
                        "start": 1606,
                        "end": 1616
                      }
                    ],
                    "start": 1592,
                    "end": 1636
                  },
                  "expression": false,
                  "start": 1577,
                  "end": 1636
                }
              ],
              "start": 1537,
              "end": 1642
            },
            "alternate": null,
            "start": 1510,
            "end": 1642
          }
        ],
        "start": 1504,
        "end": 1644
      },
      "expression": false,
      "start": 1460,
      "end": 1644
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1655,
        "end": 1656
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1670,
                          "end": 1676
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1679,
                          "end": 1685
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1688,
                          "end": 1695
                        }
                      ],
                      "start": 1670,
                      "end": 1695
                    },
                    "start": 1668,
                    "end": 1695
                  },
                  "start": 1667,
                  "end": 1695
                },
                "init": null,
                "definite": false,
                "start": 1667,
                "end": 1695
              }
            ],
            "declare": false,
            "start": 1663,
            "end": 1696
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1711,
              "end": 1713
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1728,
                        "end": 1729
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1732,
                        "end": 1733
                      },
                      "definite": false,
                      "start": 1728,
                      "end": 1733
                    }
                  ],
                  "declare": false,
                  "start": 1724,
                  "end": 1734
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1791,
                            "end": 1797
                          },
                          "start": 1789,
                          "end": 1797
                        },
                        "start": 1788,
                        "end": 1797
                      },
                      "init": null,
                      "definite": false,
                      "start": 1788,
                      "end": 1797
                    }
                  ],
                  "declare": false,
                  "start": 1784,
                  "end": 1798
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1818,
                        "end": 1819
                      },
                      "prefix": true,
                      "start": 1811,
                      "end": 1819
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1824,
                      "end": 1832
                    },
                    "start": 1811,
                    "end": 1832
                  },
                  "consequent": {
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1848,
                            "end": 1849
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1852,
                            "end": 1853
                          },
                          "start": 1848,
                          "end": 1853
                        },
                        "directive": null,
                        "start": 1848,
                        "end": 1853
                      }
                    ],
                    "start": 1834,
                    "end": 1874
                  },
                  "alternate": {
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1894,
                            "end": 1895
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1905,
                                  "end": 1906
                                },
                                "prefix": true,
                                "start": 1898,
                                "end": 1906
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "boolean",
                                "raw": "\"boolean\"",
                                "start": 1911,
                                "end": 1920
                              },
                              "start": 1898,
                              "end": 1920
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1935,
                                  "end": 1936
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1937,
                                  "end": 1945
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1935,
                                "end": 1945
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1935,
                              "end": 1947
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1973,
                                  "end": 1974
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1975,
                                  "end": 1983
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1973,
                                "end": 1983
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1973,
                              "end": 1985
                            },
                            "start": 1898,
                            "end": 1985
                          },
                          "start": 1894,
                          "end": 1985
                        },
                        "directive": null,
                        "start": 1894,
                        "end": 1986
                      }
                    ],
                    "start": 1880,
                    "end": 2006
                  },
                  "start": 1807,
                  "end": 2006
                }
              ],
              "start": 1714,
              "end": 2012
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1701,
            "end": 2012
          }
        ],
        "start": 1657,
        "end": 2014
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1645,
      "end": 2014
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2027
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2041,
                          "end": 2047
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 2050,
                          "end": 2056
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 2059,
                          "end": 2066
                        }
                      ],
                      "start": 2041,
                      "end": 2066
                    },
                    "start": 2039,
                    "end": 2066
                  },
                  "start": 2038,
                  "end": 2066
                },
                "init": null,
                "definite": false,
                "start": 2038,
                "end": 2066
              }
            ],
            "declare": false,
            "start": 2034,
            "end": 2067
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2082,
                "end": 2084
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2085,
                "end": 2087
              },
              "start": 2082,
              "end": 2087
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2102,
                        "end": 2103
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2106,
                        "end": 2107
                      },
                      "definite": false,
                      "start": 2102,
                      "end": 2107
                    }
                  ],
                  "declare": false,
                  "start": 2098,
                  "end": 2108
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2165,
                            "end": 2171
                          },
                          "start": 2163,
                          "end": 2171
                        },
                        "start": 2162,
                        "end": 2171
                      },
                      "init": null,
                      "definite": false,
                      "start": 2162,
                      "end": 2171
                    }
                  ],
                  "declare": false,
                  "start": 2158,
                  "end": 2172
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2192,
                        "end": 2193
                      },
                      "prefix": true,
                      "start": 2185,
                      "end": 2193
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 2198,
                      "end": 2206
                    },
                    "start": 2185,
                    "end": 2206
                  },
                  "consequent": {
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2222,
                            "end": 2223
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2226,
                            "end": 2227
                          },
                          "start": 2222,
                          "end": 2227
                        },
                        "directive": null,
                        "start": 2222,
                        "end": 2227
                      }
                    ],
                    "start": 2208,
                    "end": 2248
                  },
                  "alternate": {
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2268,
                            "end": 2269
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2279,
                                  "end": 2280
                                },
                                "prefix": true,
                                "start": 2272,
                                "end": 2280
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "boolean",
                                "raw": "\"boolean\"",
                                "start": 2285,
                                "end": 2294
                              },
                              "start": 2272,
                              "end": 2294
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2309,
                                  "end": 2310
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2311,
                                  "end": 2319
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2309,
                                "end": 2319
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2309,
                              "end": 2321
                            },
                            "alternate": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2347,
                                  "end": 2348
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2349,
                                  "end": 2357
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2347,
                                "end": 2357
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2347,
                              "end": 2359
                            },
                            "start": 2272,
                            "end": 2359
                          },
                          "start": 2268,
                          "end": 2359
                        },
                        "directive": null,
                        "start": 2268,
                        "end": 2360
                      }
                    ],
                    "start": 2254,
                    "end": 2380
                  },
                  "start": 2181,
                  "end": 2380
                }
              ],
              "start": 2088,
              "end": 2386
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 2072,
            "end": 2386
          }
        ],
        "start": 2028,
        "end": 2388
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2015,
      "end": 2388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 51,
  "end": 2388
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 51,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 100,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 107,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 116,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 120,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 151,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 221,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 228,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 237,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 241,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 271,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 313,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 351,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 386,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 401,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 408,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 417,
    "end": 420
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 452,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "|",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 475,
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
    "value": "{",
    "start": 484,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 553,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 560,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 569,
    "end": 572
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 573,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 603,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 724,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 726,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 735,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 743,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 752,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 761,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 776,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 783,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 792,
    "end": 795
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 796,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 831,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 848,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 903,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 910,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 919,
    "end": 922
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 923,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 953,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 995,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
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
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1033,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1042,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1059,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1068,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1103,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1148,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1157,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1174,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1236,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1245,
    "end": 1248
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1249,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1279,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1321,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
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
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1460,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1469,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1486,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1495,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1510,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1514,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1527,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1577,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1586,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1614,
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
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1645,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1670,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1679,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1688,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1701,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1711,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1724,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1791,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1807,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1811,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1824,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1875,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1898,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1911,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1937,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1975,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2015,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 2025,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2034,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2050,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2059,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2072,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 2082,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 2085,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2098,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2158,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2165,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2181,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2185,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2194,
    "end": 2197
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2198,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2249,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2272,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2281,
    "end": 2284
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 2285,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2311,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2349,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2387,
    "end": 2388
  }
]
```
