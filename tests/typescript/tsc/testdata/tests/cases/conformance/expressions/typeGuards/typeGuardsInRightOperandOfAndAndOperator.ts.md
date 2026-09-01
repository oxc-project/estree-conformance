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
        "start": 153,
        "end": 156
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
                  "start": 160,
                  "end": 166
                },
                {
                  "type": "TSStringKeyword",
                  "start": 169,
                  "end": 175
                }
              ],
              "start": 160,
              "end": 175
            },
            "start": 158,
            "end": 175
          },
          "start": 157,
          "end": 175
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
                    "start": 197,
                    "end": 198
                  },
                  "prefix": true,
                  "start": 190,
                  "end": 198
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 203,
                  "end": 211
                },
                "start": 190,
                "end": 211
              },
              "operator": "&&",
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
                    "start": 215,
                    "end": 216
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 223
                  },
                  "optional": false,
                  "computed": false,
                  "start": 215,
                  "end": 223
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 228,
                  "end": 230
                },
                "start": 215,
                "end": 230
              },
              "start": 190,
              "end": 230
            },
            "start": 183,
            "end": 231
          }
        ],
        "start": 177,
        "end": 243
      },
      "expression": false,
      "start": 144,
      "end": 243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 257
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
                  "start": 261,
                  "end": 267
                },
                {
                  "type": "TSStringKeyword",
                  "start": 270,
                  "end": 276
                }
              ],
              "start": 261,
              "end": 276
            },
            "start": 259,
            "end": 276
          },
          "start": 258,
          "end": 276
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
                    "start": 336,
                    "end": 337
                  },
                  "prefix": true,
                  "start": 329,
                  "end": 337
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 342,
                  "end": 350
                },
                "start": 329,
                "end": 350
              },
              "operator": "&&",
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
                    "start": 356,
                    "end": 357
                  },
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 360,
                    "end": 362
                  },
                  "start": 356,
                  "end": 362
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "start": 355,
                "end": 368
              },
              "start": 329,
              "end": 369
            },
            "start": 322,
            "end": 370
          }
        ],
        "start": 278,
        "end": 391
      },
      "expression": false,
      "start": 244,
      "end": 391
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 405
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
                  "start": 409,
                  "end": 415
                },
                {
                  "type": "TSStringKeyword",
                  "start": 418,
                  "end": 424
                }
              ],
              "start": 409,
              "end": 424
            },
            "start": 407,
            "end": 424
          },
          "start": 406,
          "end": 424
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
                    "start": 508,
                    "end": 509
                  },
                  "prefix": true,
                  "start": 501,
                  "end": 509
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 514,
                  "end": 522
                },
                "start": 501,
                "end": 522
              },
              "operator": "&&",
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
                    "start": 528,
                    "end": 529
                  },
                  "right": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 532,
                    "end": 539
                  },
                  "start": 528,
                  "end": 539
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 545
                },
                "start": 527,
                "end": 545
              },
              "start": 501,
              "end": 546
            },
            "start": 494,
            "end": 547
          }
        ],
        "start": 426,
        "end": 568
      },
      "expression": false,
      "start": 392,
      "end": 568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 582
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
                  "start": 586,
                  "end": 592
                },
                {
                  "type": "TSStringKeyword",
                  "start": 595,
                  "end": 601
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 604,
                  "end": 611
                }
              ],
              "start": 586,
              "end": 611
            },
            "start": 584,
            "end": 611
          },
          "start": 583,
          "end": 611
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
                      "start": 633,
                      "end": 634
                    },
                    "prefix": true,
                    "start": 626,
                    "end": 634
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 639,
                    "end": 647
                  },
                  "start": 626,
                  "end": 647
                },
                "operator": "&&",
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
                      "start": 695,
                      "end": 696
                    },
                    "prefix": true,
                    "start": 688,
                    "end": 696
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 701,
                    "end": 709
                  },
                  "start": 688,
                  "end": 709
                },
                "start": 626,
                "end": 709
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              "start": 626,
              "end": 743
            },
            "start": 619,
            "end": 744
          }
        ],
        "start": 613,
        "end": 759
      },
      "expression": false,
      "start": 569,
      "end": 759
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 773
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
                  "start": 777,
                  "end": 783
                },
                {
                  "type": "TSStringKeyword",
                  "start": 786,
                  "end": 792
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 795,
                  "end": 802
                }
              ],
              "start": 777,
              "end": 802
            },
            "start": 775,
            "end": 802
          },
          "start": 774,
          "end": 802
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
                          "start": 912,
                          "end": 918
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 921,
                          "end": 928
                        }
                      ],
                      "start": 912,
                      "end": 928
                    },
                    "start": 910,
                    "end": 928
                  },
                  "start": 909,
                  "end": 928
                },
                "init": null,
                "definite": false,
                "start": 909,
                "end": 928
              }
            ],
            "declare": false,
            "start": 905,
            "end": 929
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
                    "start": 948,
                    "end": 949
                  },
                  "prefix": true,
                  "start": 941,
                  "end": 949
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 954,
                  "end": 962
                },
                "start": 941,
                "end": 962
              },
              "operator": "&&",
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
                    "start": 1005,
                    "end": 1006
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1009,
                    "end": 1010
                  },
                  "start": 1005,
                  "end": 1010
                },
                "operator": "&&",
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
                        "start": 1023,
                        "end": 1024
                      },
                      "prefix": true,
                      "start": 1016,
                      "end": 1024
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 1029,
                      "end": 1037
                    },
                    "start": 1016,
                    "end": 1037
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1070,
                    "end": 1071
                  },
                  "start": 1016,
                  "end": 1071
                },
                "start": 1004,
                "end": 1072
              },
              "start": 941,
              "end": 1073
            },
            "start": 934,
            "end": 1074
          }
        ],
        "start": 804,
        "end": 1089
      },
      "expression": false,
      "start": 760,
      "end": 1089
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1103
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
                  "start": 1107,
                  "end": 1113
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1116,
                  "end": 1122
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1125,
                  "end": 1132
                }
              ],
              "start": 1107,
              "end": 1132
            },
            "start": 1105,
            "end": 1132
          },
          "start": 1104,
          "end": 1132
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
                    "start": 1242,
                    "end": 1243
                  },
                  "prefix": true,
                  "start": 1235,
                  "end": 1243
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1248,
                  "end": 1256
                },
                "start": 1235,
                "end": 1256
              },
              "operator": "&&",
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
                      "start": 1305,
                      "end": 1306
                    },
                    "prefix": true,
                    "start": 1298,
                    "end": 1306
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 1311,
                    "end": 1319
                  },
                  "start": 1298,
                  "end": 1319
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1351
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1373,
                    "end": 1374
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 1379,
                    "end": 1381
                  },
                  "start": 1373,
                  "end": 1381
                },
                "start": 1298,
                "end": 1381
              },
              "start": 1235,
              "end": 1382
            },
            "start": 1228,
            "end": 1382
          }
        ],
        "start": 1134,
        "end": 1395
      },
      "expression": false,
      "start": 1090,
      "end": 1395
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1405,
        "end": 1409
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
                  "start": 1413,
                  "end": 1419
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1422,
                  "end": 1428
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 1431,
                  "end": 1438
                }
              ],
              "start": 1413,
              "end": 1438
            },
            "start": 1411,
            "end": 1438
          },
          "start": 1410,
          "end": 1438
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
                          "start": 1453,
                          "end": 1459
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1461,
                          "end": 1468
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1471,
                          "end": 1477
                        }
                      ],
                      "start": 1453,
                      "end": 1477
                    },
                    "start": 1451,
                    "end": 1477
                  },
                  "start": 1450,
                  "end": 1477
                },
                "init": null,
                "definite": false,
                "start": 1450,
                "end": 1477
              }
            ],
            "declare": false,
            "start": 1446,
            "end": 1478
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
                          "start": 1490,
                          "end": 1496
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1498,
                          "end": 1505
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 1508,
                          "end": 1514
                        }
                      ],
                      "start": 1490,
                      "end": 1514
                    },
                    "start": 1488,
                    "end": 1514
                  },
                  "start": 1487,
                  "end": 1514
                },
                "init": null,
                "definite": false,
                "start": 1487,
                "end": 1514
              }
            ],
            "declare": false,
            "start": 1483,
            "end": 1515
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
                    "start": 1568,
                    "end": 1569
                  },
                  "prefix": true,
                  "start": 1561,
                  "end": 1569
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 1574,
                  "end": 1582
                },
                "start": 1561,
                "end": 1582
              },
              "operator": "&&",
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
                    "start": 1596,
                    "end": 1597
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1600,
                    "end": 1601
                  },
                  "start": 1596,
                  "end": 1601
                },
                "operator": "&&",
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
                        "start": 1642,
                        "end": 1643
                      },
                      "prefix": true,
                      "start": 1635,
                      "end": 1643
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 1648,
                      "end": 1656
                    },
                    "start": 1635,
                    "end": 1656
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
                        "start": 1698,
                        "end": 1699
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1702,
                        "end": 1704
                      },
                      "start": 1698,
                      "end": 1704
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
                          "start": 1709,
                          "end": 1710
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1711,
                          "end": 1719
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1709,
                        "end": 1719
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1709,
                      "end": 1721
                    },
                    "start": 1697,
                    "end": 1721
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
                        "start": 1781,
                        "end": 1782
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1785,
                        "end": 1786
                      },
                      "start": 1781,
                      "end": 1786
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
                          "start": 1791,
                          "end": 1792
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1793,
                          "end": 1801
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1791,
                        "end": 1801
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1791,
                      "end": 1803
                    },
                    "start": 1780,
                    "end": 1803
                  },
                  "start": 1635,
                  "end": 1804
                },
                "start": 1595,
                "end": 1805
              },
              "start": 1561,
              "end": 1806
            },
            "start": 1554,
            "end": 1807
          }
        ],
        "start": 1440,
        "end": 1825
      },
      "expression": false,
      "start": 1396,
      "end": 1825
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 144,
  "end": 1825
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 199,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 203,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 212,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 224,
    "end": 227
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 244,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 322,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 329,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 338,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 342,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 351,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 360,
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
    "value": "&&",
    "start": 364,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 392,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 401,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 494,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "typeof",
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
    "value": "===",
    "start": 510,
    "end": 513
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 514,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 530,
    "end": 531
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 532,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 569,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 586,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 604,
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
    "start": 619,
    "end": 625
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 626,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 635,
    "end": 638
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 639,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 685,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 688,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 697,
    "end": 700
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 701,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 739,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 760,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 769,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 777,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 786,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 795,
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
    "value": "{",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 905,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 912,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 921,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 934,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 941,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 950,
    "end": 953
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 954,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1000,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1012,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1016,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1029,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1067,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1072,
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
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1090,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1099,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "number",
    "start": 1107,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1125,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1228,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1235,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1248,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1298,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1311,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1375,
    "end": 1378
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1379,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1396,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1405,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1422,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1431,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 1446,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1453,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1461,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1471,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1483,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "value": "number",
    "start": 1490,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1498,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1508,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1554,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1561,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1570,
    "end": 1573
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1574,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1591,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "&&",
    "start": 1631,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1635,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1644,
    "end": 1647
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1648,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1706,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1711,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1788,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1793,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825
  }
]
```
