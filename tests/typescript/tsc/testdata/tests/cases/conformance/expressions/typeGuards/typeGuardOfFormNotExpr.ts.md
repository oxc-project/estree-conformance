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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              },
              "start": 25,
              "end": 34
            },
            "start": 21,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 34
        }
      ],
      "declare": false,
      "start": 17,
      "end": 35
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "start": 40,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 51
        }
      ],
      "declare": false,
      "start": 36,
      "end": 52
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
                    "start": 67,
                    "end": 73
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 76,
                    "end": 82
                  }
                ],
                "start": 67,
                "end": 82
              },
              "start": 65,
              "end": 82
            },
            "start": 57,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 57,
          "end": 82
        }
      ],
      "declare": false,
      "start": 53,
      "end": 83
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
            "name": "strOrNumOrBool",
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
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 122,
                    "end": 129
                  }
                ],
                "start": 104,
                "end": 129
              },
              "start": 102,
              "end": 129
            },
            "start": 88,
            "end": 129
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 129
        }
      ],
      "declare": false,
      "start": 84,
      "end": 130
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 155,
                    "end": 162
                  }
                ],
                "start": 146,
                "end": 162
              },
              "start": 144,
              "end": 162
            },
            "start": 135,
            "end": 162
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 162
        }
      ],
      "declare": false,
      "start": 131,
      "end": 163
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 355
            },
            "prefix": true,
            "start": 340,
            "end": 355
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 360,
            "end": 368
          },
          "start": 340,
          "end": 368
        },
        "prefix": true,
        "start": 338,
        "end": 369
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 380
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 393
              },
              "start": 377,
              "end": 393
            },
            "directive": null,
            "start": 377,
            "end": 394
          }
        ],
        "start": 371,
        "end": 406
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
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 421
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 432
              },
              "start": 418,
              "end": 432
            },
            "directive": null,
            "start": 418,
            "end": 433
          }
        ],
        "start": 412,
        "end": 445
      },
      "start": 334,
      "end": 445
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 504
              },
              "prefix": true,
              "start": 483,
              "end": 504
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 509,
              "end": 517
            },
            "start": 483,
            "end": 517
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 542
              },
              "prefix": true,
              "start": 521,
              "end": 542
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 547,
              "end": 555
            },
            "start": 521,
            "end": 555
          },
          "start": 483,
          "end": 555
        },
        "prefix": true,
        "start": 481,
        "end": 556
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
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 568
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 585
              },
              "start": 564,
              "end": 585
            },
            "directive": null,
            "start": 564,
            "end": 586
          }
        ],
        "start": 558,
        "end": 599
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
                "start": 611,
                "end": 619
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 636
              },
              "start": 611,
              "end": 636
            },
            "directive": null,
            "start": 611,
            "end": 637
          }
        ],
        "start": 605,
        "end": 658
      },
      "start": 477,
      "end": 658
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 720
              },
              "prefix": true,
              "start": 699,
              "end": 720
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 725,
              "end": 733
            },
            "start": 699,
            "end": 733
          },
          "prefix": true,
          "start": 697,
          "end": 734
        },
        "operator": "||",
        "right": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 761
              },
              "prefix": true,
              "start": 740,
              "end": 761
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 766,
              "end": 774
            },
            "start": 740,
            "end": 774
          },
          "prefix": true,
          "start": 738,
          "end": 775
        },
        "start": 697,
        "end": 775
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
                "start": 783,
                "end": 791
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 808
              },
              "start": 783,
              "end": 808
            },
            "directive": null,
            "start": 783,
            "end": 809
          }
        ],
        "start": 777,
        "end": 830
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
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 842,
                "end": 846
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 863
              },
              "start": 842,
              "end": 863
            },
            "directive": null,
            "start": 842,
            "end": 864
          }
        ],
        "start": 836,
        "end": 877
      },
      "start": 693,
      "end": 877
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 936
              },
              "prefix": true,
              "start": 915,
              "end": 936
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 941,
              "end": 949
            },
            "start": 915,
            "end": 949
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
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 974
              },
              "prefix": true,
              "start": 953,
              "end": 974
            },
            "operator": "!==",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 979,
              "end": 987
            },
            "start": 953,
            "end": 987
          },
          "start": 915,
          "end": 987
        },
        "prefix": true,
        "start": 913,
        "end": 988
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
                "start": 996,
                "end": 1004
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1021
              },
              "start": 996,
              "end": 1021
            },
            "directive": null,
            "start": 996,
            "end": 1022
          }
        ],
        "start": 990,
        "end": 1043
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
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1059
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1076
              },
              "start": 1055,
              "end": 1076
            },
            "directive": null,
            "start": 1055,
            "end": 1077
          }
        ],
        "start": 1049,
        "end": 1090
      },
      "start": 909,
      "end": 1090
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1138,
                "end": 1152
              },
              "prefix": true,
              "start": 1131,
              "end": 1152
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1157,
              "end": 1165
            },
            "start": 1131,
            "end": 1165
          },
          "prefix": true,
          "start": 1129,
          "end": 1166
        },
        "operator": "&&",
        "right": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1193
              },
              "prefix": true,
              "start": 1172,
              "end": 1193
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "number",
              "raw": "\"number\"",
              "start": 1198,
              "end": 1206
            },
            "start": 1172,
            "end": 1206
          },
          "prefix": true,
          "start": 1170,
          "end": 1207
        },
        "start": 1129,
        "end": 1207
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
                "name": "bool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1219
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1236
              },
              "start": 1215,
              "end": 1236
            },
            "directive": null,
            "start": 1215,
            "end": 1237
          }
        ],
        "start": 1209,
        "end": 1250
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
                "start": 1262,
                "end": 1270
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1273,
                "end": 1287
              },
              "start": 1262,
              "end": 1287
            },
            "directive": null,
            "start": 1262,
            "end": 1288
          }
        ],
        "start": 1256,
        "end": 1309
      },
      "start": 1125,
      "end": 1309
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1354,
                "end": 1368
              },
              "prefix": true,
              "start": 1347,
              "end": 1368
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "\"string\"",
              "start": 1373,
              "end": 1381
            },
            "start": 1347,
            "end": 1381
          },
          "prefix": true,
          "start": 1345,
          "end": 1382
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1386,
            "end": 1395
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1400,
            "end": 1414
          },
          "start": 1386,
          "end": 1414
        },
        "start": 1345,
        "end": 1414
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
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1422,
                "end": 1431
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1434,
                "end": 1448
              },
              "start": 1422,
              "end": 1448
            },
            "directive": null,
            "start": 1422,
            "end": 1449
          }
        ],
        "start": 1416,
        "end": 1471
      },
      "alternate": {
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
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1491,
                          "end": 1497
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1500,
                          "end": 1506
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1509,
                          "end": 1516
                        }
                      ],
                      "start": 1491,
                      "end": 1516
                    },
                    "start": 1489,
                    "end": 1516
                  },
                  "start": 1487,
                  "end": 1516
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1519,
                  "end": 1533
                },
                "definite": false,
                "start": 1487,
                "end": 1533
              }
            ],
            "declare": false,
            "start": 1483,
            "end": 1534
          }
        ],
        "start": 1477,
        "end": 1565
      },
      "start": 1341,
      "end": 1565
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1565
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 17,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 53,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 57,
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
    "value": "string",
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
    "value": "number",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 88,
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
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 135,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 340,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 347,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 356,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 360,
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
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 377,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 385,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 418,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 424,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 483,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 490,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 505,
    "end": 508
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 509,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 518,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 521,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 528,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 543,
    "end": 546
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 547,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 571,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 611,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 622,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 699,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 706,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "!==",
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
    "value": ")",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 740,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 747,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 762,
    "end": 765
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 766,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 783,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 794,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 831,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 842,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 849,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 915,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 922,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 937,
    "end": 940
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 941,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 950,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 953,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 960,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 975,
    "end": 978
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 979,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 996,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1007,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1055,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1062,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1131,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1138,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1153,
    "end": 1156
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1157,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1167,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1179,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1198,
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
    "value": ")",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1215,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1222,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1262,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1273,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1341,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1354,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 1373,
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
    "value": "&&",
    "start": 1383,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1386,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1396,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1400,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1422,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1434,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1472,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "r1",
    "start": 1487,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1491,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1500,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1509,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1519,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565
  }
]
```
