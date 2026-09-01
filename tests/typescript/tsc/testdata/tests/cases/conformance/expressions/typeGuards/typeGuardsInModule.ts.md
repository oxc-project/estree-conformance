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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
            },
            "start": 165,
            "end": 176
          },
          "init": null,
          "definite": false,
          "start": 165,
          "end": 176
        }
      ],
      "declare": false,
      "start": 161,
      "end": 177
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
                    "start": 192,
                    "end": 198
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 201,
                    "end": 207
                  }
                ],
                "start": 192,
                "end": 207
              },
              "start": 190,
              "end": 207
            },
            "start": 182,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 182,
          "end": 207
        }
      ],
      "declare": false,
      "start": 178,
      "end": 208
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 219,
                    "end": 225
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 228,
                    "end": 234
                  }
                ],
                "start": 219,
                "end": 234
              },
              "start": 217,
              "end": 234
            },
            "start": 213,
            "end": 234
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 234
        }
      ],
      "declare": false,
      "start": 209,
      "end": 235
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 265
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 318
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 332
                    },
                    "prefix": true,
                    "start": 321,
                    "end": 332
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 337,
                    "end": 345
                  },
                  "start": 321,
                  "end": 345
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 353
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 354,
                    "end": 360
                  },
                  "optional": false,
                  "computed": false,
                  "start": 349,
                  "end": 360
                },
                "start": 321,
                "end": 360
              },
              "start": 315,
              "end": 360
            },
            "directive": null,
            "start": 315,
            "end": 361
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 426,
                          "end": 432
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 435,
                          "end": 441
                        }
                      ],
                      "start": 426,
                      "end": 441
                    },
                    "start": 424,
                    "end": 441
                  },
                  "start": 420,
                  "end": 441
                },
                "init": null,
                "definite": false,
                "start": 420,
                "end": 441
              }
            ],
            "declare": false,
            "start": 416,
            "end": 442
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 462
                },
                "prefix": true,
                "start": 451,
                "end": 462
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 467,
                "end": 475
              },
              "start": 451,
              "end": 475
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 487,
                      "end": 490
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 493,
                        "end": 497
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 504
                      },
                      "optional": false,
                      "computed": false,
                      "start": 493,
                      "end": 504
                    },
                    "start": 487,
                    "end": 504
                  },
                  "directive": null,
                  "start": 487,
                  "end": 505
                }
              ],
              "start": 477,
              "end": 521
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 544
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 551
                    },
                    "start": 541,
                    "end": 551
                  },
                  "directive": null,
                  "start": 541,
                  "end": 552
                }
              ],
              "start": 531,
              "end": 568
            },
            "start": 447,
            "end": 568
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 630,
                            "end": 636
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 639,
                            "end": 645
                          }
                        ],
                        "start": 630,
                        "end": 645
                      },
                      "start": 628,
                      "end": 645
                    },
                    "start": 624,
                    "end": 645
                  },
                  "init": null,
                  "definite": false,
                  "start": 624,
                  "end": 645
                }
              ],
              "declare": false,
              "start": 620,
              "end": 646
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 613,
            "end": 646
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
                  "name": "var3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 666
                },
                "prefix": true,
                "start": 655,
                "end": 666
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 671,
                "end": 679
              },
              "start": 655,
              "end": 679
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 691,
                      "end": 699
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 702,
                      "end": 706
                    },
                    "start": 691,
                    "end": 706
                  },
                  "directive": null,
                  "start": 691,
                  "end": 707
                }
              ],
              "start": 681,
              "end": 732
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 752,
                      "end": 760
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 763,
                      "end": 767
                    },
                    "start": 752,
                    "end": 767
                  },
                  "directive": null,
                  "start": 752,
                  "end": 768
                }
              ],
              "start": 742,
              "end": 793
            },
            "start": 651,
            "end": 793
          }
        ],
        "start": 266,
        "end": 795
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 253,
      "end": 795
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 822,
        "end": 824
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 841,
                          "end": 847
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 850,
                          "end": 856
                        }
                      ],
                      "start": 841,
                      "end": 856
                    },
                    "start": 839,
                    "end": 856
                  },
                  "start": 835,
                  "end": 856
                },
                "init": null,
                "definite": false,
                "start": 835,
                "end": 856
              }
            ],
            "declare": false,
            "start": 831,
            "end": 857
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 879,
                            "end": 885
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 888,
                            "end": 894
                          }
                        ],
                        "start": 879,
                        "end": 894
                      },
                      "start": 877,
                      "end": 894
                    },
                    "start": 873,
                    "end": 894
                  },
                  "init": null,
                  "definite": false,
                  "start": 873,
                  "end": 894
                }
              ],
              "declare": false,
              "start": 869,
              "end": 895
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 862,
            "end": 895
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 912
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 970,
                      "end": 973
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 983,
                            "end": 987
                          },
                          "prefix": true,
                          "start": 976,
                          "end": 987
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 992,
                          "end": 1000
                        },
                        "start": 976,
                        "end": 1000
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1004,
                          "end": 1008
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1009,
                          "end": 1015
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1004,
                        "end": 1015
                      },
                      "start": 976,
                      "end": 1015
                    },
                    "start": 970,
                    "end": 1015
                  },
                  "directive": null,
                  "start": 970,
                  "end": 1016
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1093,
                      "end": 1096
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1106,
                            "end": 1110
                          },
                          "prefix": true,
                          "start": 1099,
                          "end": 1110
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1115,
                          "end": 1123
                        },
                        "start": 1099,
                        "end": 1123
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1127,
                          "end": 1131
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1132,
                          "end": 1138
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1127,
                        "end": 1138
                      },
                      "start": 1099,
                      "end": 1138
                    },
                    "start": 1093,
                    "end": 1138
                  },
                  "directive": null,
                  "start": 1093,
                  "end": 1139
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
                      "start": 1210,
                      "end": 1218
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1228,
                            "end": 1232
                          },
                          "prefix": true,
                          "start": 1221,
                          "end": 1232
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 1237,
                          "end": 1245
                        },
                        "start": 1221,
                        "end": 1245
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1249,
                        "end": 1253
                      },
                      "start": 1221,
                      "end": 1253
                    },
                    "start": 1210,
                    "end": 1253
                  },
                  "directive": null,
                  "start": 1210,
                  "end": 1254
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
                        "name": "var4",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 1336,
                                "end": 1342
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 1345,
                                "end": 1351
                              }
                            ],
                            "start": 1336,
                            "end": 1351
                          },
                          "start": 1334,
                          "end": 1351
                        },
                        "start": 1330,
                        "end": 1351
                      },
                      "init": null,
                      "definite": false,
                      "start": 1330,
                      "end": 1351
                    }
                  ],
                  "declare": false,
                  "start": 1326,
                  "end": 1352
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
                        "name": "var4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1372,
                        "end": 1376
                      },
                      "prefix": true,
                      "start": 1365,
                      "end": 1376
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1381,
                      "end": 1389
                    },
                    "start": 1365,
                    "end": 1389
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
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1405,
                            "end": 1408
                          },
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "var4",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1411,
                              "end": 1415
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1416,
                              "end": 1422
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1411,
                            "end": 1422
                          },
                          "start": 1405,
                          "end": 1422
                        },
                        "directive": null,
                        "start": 1405,
                        "end": 1423
                      }
                    ],
                    "start": 1391,
                    "end": 1443
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
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1471,
                            "end": 1474
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var4",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1477,
                            "end": 1481
                          },
                          "start": 1471,
                          "end": 1481
                        },
                        "directive": null,
                        "start": 1471,
                        "end": 1482
                      }
                    ],
                    "start": 1457,
                    "end": 1502
                  },
                  "start": 1361,
                  "end": 1502
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "var5",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1572,
                                  "end": 1578
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1581,
                                  "end": 1587
                                }
                              ],
                              "start": 1572,
                              "end": 1587
                            },
                            "start": 1570,
                            "end": 1587
                          },
                          "start": 1566,
                          "end": 1587
                        },
                        "init": null,
                        "definite": false,
                        "start": 1566,
                        "end": 1587
                      }
                    ],
                    "declare": false,
                    "start": 1562,
                    "end": 1588
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 1555,
                  "end": 1588
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
                        "name": "var5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1608,
                        "end": 1612
                      },
                      "prefix": true,
                      "start": 1601,
                      "end": 1612
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 1617,
                      "end": 1625
                    },
                    "start": 1601,
                    "end": 1625
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
                            "name": "strOrNum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1641,
                            "end": 1649
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1652,
                            "end": 1656
                          },
                          "start": 1641,
                          "end": 1656
                        },
                        "directive": null,
                        "start": 1641,
                        "end": 1657
                      }
                    ],
                    "start": 1627,
                    "end": 1686
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
                            "name": "strOrNum",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1714,
                            "end": 1722
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1725,
                            "end": 1729
                          },
                          "start": 1714,
                          "end": 1729
                        },
                        "directive": null,
                        "start": 1714,
                        "end": 1730
                      }
                    ],
                    "start": 1700,
                    "end": 1759
                  },
                  "start": 1597,
                  "end": 1759
                }
              ],
              "start": 913,
              "end": 1765
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 900,
            "end": 1765
          }
        ],
        "start": 825,
        "end": 1767
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 812,
      "end": 1767
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1795,
          "end": 1797
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "m4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1798,
          "end": 1800
        },
        "start": 1795,
        "end": 1800
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 1850,
                "end": 1853
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1863,
                      "end": 1867
                    },
                    "prefix": true,
                    "start": 1856,
                    "end": 1867
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 1872,
                    "end": 1880
                  },
                  "start": 1856,
                  "end": 1880
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1884,
                    "end": 1888
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1889,
                    "end": 1895
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1884,
                  "end": 1895
                },
                "start": 1856,
                "end": 1895
              },
              "start": 1850,
              "end": 1895
            },
            "directive": null,
            "start": 1850,
            "end": 1896
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1961,
                          "end": 1967
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1970,
                          "end": 1976
                        }
                      ],
                      "start": 1961,
                      "end": 1976
                    },
                    "start": 1959,
                    "end": 1976
                  },
                  "start": 1955,
                  "end": 1976
                },
                "init": null,
                "definite": false,
                "start": 1955,
                "end": 1976
              }
            ],
            "declare": false,
            "start": 1951,
            "end": 1977
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
                  "name": "var2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1993,
                  "end": 1997
                },
                "prefix": true,
                "start": 1986,
                "end": 1997
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2002,
                "end": 2010
              },
              "start": 1986,
              "end": 2010
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2022,
                      "end": 2025
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "var2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2028,
                        "end": 2032
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2033,
                        "end": 2039
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2028,
                      "end": 2039
                    },
                    "start": 2022,
                    "end": 2039
                  },
                  "directive": null,
                  "start": 2022,
                  "end": 2040
                }
              ],
              "start": 2012,
              "end": 2056
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
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2076,
                      "end": 2079
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2082,
                      "end": 2086
                    },
                    "start": 2076,
                    "end": 2086
                  },
                  "directive": null,
                  "start": 2076,
                  "end": 2087
                }
              ],
              "start": 2066,
              "end": 2103
            },
            "start": 1982,
            "end": 2103
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var3",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2165,
                            "end": 2171
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2174,
                            "end": 2180
                          }
                        ],
                        "start": 2165,
                        "end": 2180
                      },
                      "start": 2163,
                      "end": 2180
                    },
                    "start": 2159,
                    "end": 2180
                  },
                  "init": null,
                  "definite": false,
                  "start": 2159,
                  "end": 2180
                }
              ],
              "declare": false,
              "start": 2155,
              "end": 2181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2148,
            "end": 2181
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
                  "name": "var3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2197,
                  "end": 2201
                },
                "prefix": true,
                "start": 2190,
                "end": 2201
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2206,
                "end": 2214
              },
              "start": 2190,
              "end": 2214
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2226,
                      "end": 2234
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2237,
                      "end": 2241
                    },
                    "start": 2226,
                    "end": 2241
                  },
                  "directive": null,
                  "start": 2226,
                  "end": 2242
                }
              ],
              "start": 2216,
              "end": 2267
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
                      "name": "strOrNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2287,
                      "end": 2295
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "var3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2298,
                      "end": 2302
                    },
                    "start": 2287,
                    "end": 2302
                  },
                  "directive": null,
                  "start": 2287,
                  "end": 2303
                }
              ],
              "start": 2277,
              "end": 2328
            },
            "start": 2186,
            "end": 2328
          }
        ],
        "start": 1801,
        "end": 2330
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1785,
      "end": 2330
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 161,
  "end": 2330
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 182,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 213,
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
    "value": "string",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 253,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 315,
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
    "value": "typeof",
    "start": 321,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 333,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 337,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 346,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 447,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 451,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 463,
    "end": 466
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 467,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 526,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 547,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 613,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 630,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 639,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 651,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 655,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 667,
    "end": 670
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 671,
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
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 691,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 702,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 737,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 752,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 812,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 822,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 831,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 835,
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
    "value": "string",
    "start": 841,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 850,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 862,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 869,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 879,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 900,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 910,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 976,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 988,
    "end": 991
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 992,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1004,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1106,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1115,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1127,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1210,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1221,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1228,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1233,
    "end": 1236
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1237,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1246,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 1249,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "var4",
    "start": 1330,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1336,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1345,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1365,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "var4",
    "start": 1372,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1381,
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
    "value": "{",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "var4",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1416,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1452,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "var4",
    "start": 1477,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1555,
    "end": 1561
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "var5",
    "start": 1566,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1572,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1581,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1597,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1601,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "var5",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1617,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1641,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "var5",
    "start": 1652,
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
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1695,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1714,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "var5",
    "start": 1725,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1785,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1795,
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
    "value": "m4",
    "start": 1798,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1850,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1863,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1868,
    "end": 1871
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1872,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1881,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "var1",
    "start": 1884,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1889,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1951,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1955,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1961,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1970,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1982,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1986,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 1993,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1998,
    "end": 2001
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2002,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2022,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2028,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2033,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2061,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 2076,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "var2",
    "start": 2082,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2148,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2155,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 2159,
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
    "value": "|",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2174,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2186,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2190,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 2197,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2202,
    "end": 2205
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 2206,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2226,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 2237,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2272,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 2287,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "var3",
    "start": 2298,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2329,
    "end": 2330
  }
]
```
