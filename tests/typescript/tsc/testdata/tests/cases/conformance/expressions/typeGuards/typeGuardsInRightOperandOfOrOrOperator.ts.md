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
        "start": 239,
        "end": 242
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
                  "start": 246,
                  "end": 252
                },
                {
                  "type": "TSStringKeyword",
                  "start": 255,
                  "end": 261
                }
              ],
              "start": 246,
              "end": 261
            },
            "start": 244,
            "end": 261
          },
          "start": 243,
          "end": 261
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
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
                    "start": 283,
                    "end": 284
                  },
                  "prefix": true,
                  "start": 276,
                  "end": 284
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 289,
                  "end": 297
                },
                "start": 276,
                "end": 297
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 309
                  },
                  "optional": false,
                  "computed": false,
                  "start": 301,
                  "end": 309
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 314,
                  "end": 316
                },
                "start": 301,
                "end": 316
              },
              "start": 276,
              "end": 316
            },
            "start": 269,
            "end": 317
          }
        ],
        "start": 263,
        "end": 329
      },
      "expression": false,
      "start": 230,
      "end": 329
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 343
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
                  "start": 347,
                  "end": 353
                },
                {
                  "type": "TSStringKeyword",
                  "start": 356,
                  "end": 362
                }
              ],
              "start": 347,
              "end": 362
            },
            "start": 345,
            "end": 362
          },
          "start": 344,
          "end": 362
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
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
                    "start": 422,
                    "end": 423
                  },
                  "prefix": true,
                  "start": 415,
                  "end": 423
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 428,
                  "end": 436
                },
                "start": 415,
                "end": 436
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 446,
                    "end": 448
                  },
                  "start": 442,
                  "end": 448
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 454
                },
                "start": 441,
                "end": 454
              },
              "start": 415,
              "end": 455
            },
            "start": 408,
            "end": 456
          }
        ],
        "start": 364,
        "end": 477
      },
      "expression": false,
      "start": 330,
      "end": 477
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 487,
        "end": 491
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
                  "start": 495,
                  "end": 501
                },
                {
                  "type": "TSStringKeyword",
                  "start": 504,
                  "end": 510
                }
              ],
              "start": 495,
              "end": 510
            },
            "start": 493,
            "end": 510
          },
          "start": 492,
          "end": 510
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
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
                    "start": 594,
                    "end": 595
                  },
                  "prefix": true,
                  "start": 587,
                  "end": 595
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 600,
                  "end": 608
                },
                "start": 587,
                "end": 608
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 618,
                    "end": 625
                  },
                  "start": 614,
                  "end": 625
                },
                "operator": "||",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 631
                },
                "start": 613,
                "end": 631
              },
              "start": 587,
              "end": 632
            },
            "start": 580,
            "end": 633
          }
        ],
        "start": 512,
        "end": 654
      },
      "expression": false,
      "start": 478,
      "end": 654
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 668
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
                  "start": 672,
                  "end": 678
                },
                {
                  "type": "TSStringKeyword",
                  "start": 681,
                  "end": 687
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 690,
                  "end": 697
                }
              ],
              "start": 672,
              "end": 697
            },
            "start": 670,
            "end": 697
          },
          "start": 669,
          "end": 697
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
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
                      "start": 719,
                      "end": 720
                    },
                    "prefix": true,
                    "start": 712,
                    "end": 720
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 725,
                    "end": 733
                  },
                  "start": 712,
                  "end": 733
                },
                "operator": "||",
                "right": {
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
                      "start": 781,
                      "end": 782
                    },
                    "prefix": true,
                    "start": 774,
                    "end": 782
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 787,
                    "end": 795
                  },
                  "start": 774,
                  "end": 795
                },
                "start": 712,
                "end": 795
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 829
              },
              "start": 712,
              "end": 829
            },
            "start": 705,
            "end": 830
          }
        ],
        "start": 699,
        "end": 845
      },
      "expression": false,
      "start": 655,
      "end": 845
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 859
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
                  "start": 863,
                  "end": 869
                },
                {
                  "type": "TSStringKeyword",
                  "start": 872,
                  "end": 878
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 881,
                  "end": 888
                }
              ],
              "start": 863,
              "end": 888
            },
            "start": 861,
            "end": 888
          },
          "start": 860,
          "end": 888
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 998,
                          "end": 1004
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1007,
                          "end": 1014
                        }
                      ],
                      "start": 998,
                      "end": 1014
                    },
                    "start": 996,
                    "end": 1014
                  },
                  "start": 995,
                  "end": 1014
                },
                "init": null,
                "definite": false,
                "start": 995,
                "end": 1014
              }
            ],
            "declare": false,
            "start": 991,
            "end": 1015
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
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
                    "start": 1034,
                    "end": 1035
                  },
                  "prefix": true,
                  "start": 1027,
                  "end": 1035
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1040,
                  "end": 1048
                },
                "start": 1027,
                "end": 1048
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1091,
                    "end": 1092
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1095,
                    "end": 1096
                  },
                  "start": 1091,
                  "end": 1096
                },
                "operator": "||",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1109,
                        "end": 1110
                      },
                      "prefix": true,
                      "start": 1102,
                      "end": 1110
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 1115,
                      "end": 1123
                    },
                    "start": 1102,
                    "end": 1123
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1156,
                    "end": 1157
                  },
                  "start": 1102,
                  "end": 1157
                },
                "start": 1090,
                "end": 1158
              },
              "start": 1027,
              "end": 1159
            },
            "start": 1020,
            "end": 1160
          }
        ],
        "start": 890,
        "end": 1175
      },
      "expression": false,
      "start": 846,
      "end": 1175
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1185,
        "end": 1189
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
                  "start": 1193,
                  "end": 1199
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1202,
                  "end": 1208
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1211,
                  "end": 1218
                }
              ],
              "start": 1193,
              "end": 1218
            },
            "start": 1191,
            "end": 1218
          },
          "start": 1190,
          "end": 1218
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
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
                    "start": 1264,
                    "end": 1265
                  },
                  "prefix": true,
                  "start": 1257,
                  "end": 1265
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1270,
                  "end": 1278
                },
                "start": 1257,
                "end": 1278
              },
              "operator": "||",
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
                      "start": 1327,
                      "end": 1328
                    },
                    "prefix": true,
                    "start": 1320,
                    "end": 1328
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 1333,
                    "end": 1341
                  },
                  "start": 1320,
                  "end": 1341
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1373
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1395,
                    "end": 1396
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1401,
                    "end": 1403
                  },
                  "start": 1395,
                  "end": 1403
                },
                "start": 1320,
                "end": 1403
              },
              "start": 1257,
              "end": 1404
            },
            "start": 1250,
            "end": 1404
          }
        ],
        "start": 1220,
        "end": 1417
      },
      "expression": false,
      "start": 1176,
      "end": 1417
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1427,
        "end": 1431
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
                  "start": 1435,
                  "end": 1441
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1444,
                  "end": 1450
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1453,
                  "end": 1460
                }
              ],
              "start": 1435,
              "end": 1460
            },
            "start": 1433,
            "end": 1460
          },
          "start": 1432,
          "end": 1460
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1475,
                          "end": 1481
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1483,
                          "end": 1490
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1493,
                          "end": 1499
                        }
                      ],
                      "start": 1475,
                      "end": 1499
                    },
                    "start": 1473,
                    "end": 1499
                  },
                  "start": 1472,
                  "end": 1499
                },
                "init": null,
                "definite": false,
                "start": 1472,
                "end": 1499
              }
            ],
            "declare": false,
            "start": 1468,
            "end": 1500
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1512,
                          "end": 1518
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1520,
                          "end": 1527
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1530,
                          "end": 1536
                        }
                      ],
                      "start": 1512,
                      "end": 1536
                    },
                    "start": 1510,
                    "end": 1536
                  },
                  "start": 1509,
                  "end": 1536
                },
                "init": null,
                "definite": false,
                "start": 1509,
                "end": 1536
              }
            ],
            "declare": false,
            "start": 1505,
            "end": 1537
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
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
                    "start": 1590,
                    "end": 1591
                  },
                  "prefix": true,
                  "start": 1583,
                  "end": 1591
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1596,
                  "end": 1604
                },
                "start": 1583,
                "end": 1604
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1618,
                    "end": 1619
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1622,
                    "end": 1623
                  },
                  "start": 1618,
                  "end": 1623
                },
                "operator": "||",
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
                        "start": 1664,
                        "end": 1665
                      },
                      "prefix": true,
                      "start": 1657,
                      "end": 1665
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 1670,
                      "end": 1678
                    },
                    "start": 1657,
                    "end": 1678
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1720,
                        "end": 1721
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1724,
                        "end": 1726
                      },
                      "start": 1720,
                      "end": 1726
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1731,
                          "end": 1732
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1733,
                          "end": 1741
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1731,
                        "end": 1741
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1731,
                      "end": 1743
                    },
                    "start": 1719,
                    "end": 1743
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1817,
                        "end": 1818
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1821,
                        "end": 1822
                      },
                      "start": 1817,
                      "end": 1822
                    },
                    "operator": "&&",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1827,
                          "end": 1828
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1829,
                          "end": 1837
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1827,
                        "end": 1837
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1827,
                      "end": 1839
                    },
                    "start": 1816,
                    "end": 1839
                  },
                  "start": 1657,
                  "end": 1840
                },
                "start": 1617,
                "end": 1841
              },
              "start": 1583,
              "end": 1842
            },
            "start": 1576,
            "end": 1843
          }
        ],
        "start": 1462,
        "end": 1874
      },
      "expression": false,
      "start": 1418,
      "end": 1874
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 230,
  "end": 1874
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 230,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 269,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 276,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 285,
    "end": 288
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 289,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 298,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 310,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 330,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 408,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 415,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 424,
    "end": 427
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 428,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 478,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 580,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 587,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 596,
    "end": 599
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 600,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 609,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 618,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 627,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 655,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 690,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 705,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 712,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 721,
    "end": 724
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 725,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 771,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 774,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 783,
    "end": 786
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 787,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 825,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 846,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 855,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 991,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1007,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1020,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1036,
    "end": 1039
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1040,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1086,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1098,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1102,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1109,
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
    "value": "\"number\"",
    "start": 1115,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1176,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1185,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1211,
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
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1257,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1270,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1320,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1333,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1401,
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
    "value": "}",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1418,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1435,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1444,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1453,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1468,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1475,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1483,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1493,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1505,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1512,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1520,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1530,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1576,
    "end": 1582
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1583,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1596,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1613,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1653,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1657,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1666,
    "end": 1669
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1670,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1724,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1728,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
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
    "value": "toString",
    "start": 1733,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1824,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1829,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1873,
    "end": 1874
  }
]
```
