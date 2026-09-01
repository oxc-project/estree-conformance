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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
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
            "start": 10,
            "end": 27
          }
        ],
        "start": 8,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "start": 36,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 47
        }
      ],
      "declare": false,
      "start": 32,
      "end": 48
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
                "start": 59,
                "end": 66
              },
              "start": 57,
              "end": 66
            },
            "start": 53,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 66
        }
      ],
      "declare": false,
      "start": 49,
      "end": 67
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
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "start": 72,
            "end": 83
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 83
        }
      ],
      "declare": false,
      "start": 68,
      "end": 84
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
                    "start": 99,
                    "end": 105
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 108,
                    "end": 114
                  }
                ],
                "start": 99,
                "end": 114
              },
              "start": 97,
              "end": 114
            },
            "start": 89,
            "end": 114
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 114
        }
      ],
      "declare": false,
      "start": 85,
      "end": 115
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 131,
                    "end": 137
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 140,
                    "end": 147
                  }
                ],
                "start": 131,
                "end": 147
              },
              "start": 129,
              "end": 147
            },
            "start": 120,
            "end": 147
          },
          "init": null,
          "definite": false,
          "start": 120,
          "end": 147
        }
      ],
      "declare": false,
      "start": 116,
      "end": 148
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
                    "start": 164,
                    "end": 170
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 173,
                    "end": 180
                  }
                ],
                "start": 164,
                "end": 180
              },
              "start": 162,
              "end": 180
            },
            "start": 153,
            "end": 180
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 180
        }
      ],
      "declare": false,
      "start": 149,
      "end": 180
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
                    "start": 201,
                    "end": 207
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 210,
                    "end": 216
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 219,
                    "end": 226
                  }
                ],
                "start": 201,
                "end": 226
              },
              "start": 199,
              "end": 226
            },
            "start": 185,
            "end": 226
          },
          "init": null,
          "definite": false,
          "start": 185,
          "end": 226
        }
      ],
      "declare": false,
      "start": 181,
      "end": 227
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
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 240,
                    "end": 246
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 250
                    },
                    "typeArguments": null,
                    "start": 249,
                    "end": 250
                  }
                ],
                "start": 240,
                "end": 250
              },
              "start": 238,
              "end": 250
            },
            "start": 232,
            "end": 250
          },
          "init": null,
          "definite": false,
          "start": 232,
          "end": 250
        }
      ],
      "declare": false,
      "start": 228,
      "end": 251
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
            "name": "numOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 264,
                    "end": 270
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 273,
                    "end": 274
                  }
                ],
                "start": 264,
                "end": 274
              },
              "start": 262,
              "end": 274
            },
            "start": 256,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 274
        }
      ],
      "declare": false,
      "start": 252,
      "end": 275
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
            "name": "boolOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 289,
                    "end": 296
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 300
                  }
                ],
                "start": 289,
                "end": 300
              },
              "start": 287,
              "end": 300
            },
            "start": 280,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 280,
          "end": 300
        }
      ],
      "declare": false,
      "start": 276,
      "end": 301
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "typeArguments": null,
                "start": 309,
                "end": 310
              },
              "start": 307,
              "end": 310
            },
            "start": 306,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 310
        }
      ],
      "declare": false,
      "start": 302,
      "end": 311
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 586,
            "end": 595
          },
          "prefix": true,
          "start": 579,
          "end": 595
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 600,
          "end": 609
        },
        "start": 579,
        "end": 609
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
                "start": 617,
                "end": 621
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 633
              },
              "start": 617,
              "end": 633
            },
            "directive": null,
            "start": 617,
            "end": 634
          }
        ],
        "start": 611,
        "end": 647
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
                "start": 659,
                "end": 662
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 665,
                "end": 674
              },
              "start": 659,
              "end": 674
            },
            "directive": null,
            "start": 659,
            "end": 675
          }
        ],
        "start": 653,
        "end": 687
      },
      "start": 575,
      "end": 687
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 708
          },
          "prefix": true,
          "start": 692,
          "end": 708
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 713,
          "end": 722
        },
        "start": 692,
        "end": 722
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
                "start": 730,
                "end": 734
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 737,
                "end": 746
              },
              "start": 730,
              "end": 746
            },
            "directive": null,
            "start": 730,
            "end": 747
          }
        ],
        "start": 724,
        "end": 760
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
                "start": 772,
                "end": 775
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 787
              },
              "start": 772,
              "end": 787
            },
            "directive": null,
            "start": 772,
            "end": 788
          }
        ],
        "start": 766,
        "end": 800
      },
      "start": 688,
      "end": 800
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
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 812,
            "end": 826
          },
          "prefix": true,
          "start": 805,
          "end": 826
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 831,
          "end": 840
        },
        "start": 805,
        "end": 840
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
                "start": 848,
                "end": 852
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 869
              },
              "start": 848,
              "end": 869
            },
            "directive": null,
            "start": 848,
            "end": 870
          }
        ],
        "start": 842,
        "end": 883
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
                "start": 895,
                "end": 903
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 906,
                "end": 920
              },
              "start": 895,
              "end": 920
            },
            "directive": null,
            "start": 895,
            "end": 921
          }
        ],
        "start": 889,
        "end": 942
      },
      "start": 801,
      "end": 942
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
            "name": "boolOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 961
          },
          "prefix": true,
          "start": 947,
          "end": 961
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 966,
          "end": 975
        },
        "start": 947,
        "end": 975
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
                "start": 983,
                "end": 987
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 997
              },
              "start": 983,
              "end": 997
            },
            "directive": null,
            "start": 983,
            "end": 998
          }
        ],
        "start": 977,
        "end": 1011
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1024
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1027,
                "end": 1034
              },
              "start": 1023,
              "end": 1034
            },
            "directive": null,
            "start": 1023,
            "end": 1035
          }
        ],
        "start": 1017,
        "end": 1042
      },
      "start": 943,
      "end": 1042
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1063
          },
          "prefix": true,
          "start": 1048,
          "end": 1063
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 1068,
          "end": 1077
        },
        "start": 1048,
        "end": 1077
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1093,
                      "end": 1095
                    },
                    "start": 1091,
                    "end": 1095
                  },
                  "start": 1089,
                  "end": 1095
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1098,
                  "end": 1106
                },
                "definite": false,
                "start": 1089,
                "end": 1106
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1107
          }
        ],
        "start": 1079,
        "end": 1115
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1135,
                          "end": 1141
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1144,
                          "end": 1150
                        }
                      ],
                      "start": 1135,
                      "end": 1150
                    },
                    "start": 1133,
                    "end": 1150
                  },
                  "start": 1131,
                  "end": 1150
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1153,
                  "end": 1161
                },
                "definite": false,
                "start": 1131,
                "end": 1161
              }
            ],
            "declare": false,
            "start": 1127,
            "end": 1162
          }
        ],
        "start": 1121,
        "end": 1183
      },
      "start": 1044,
      "end": 1183
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
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1411,
            "end": 1420
          },
          "prefix": true,
          "start": 1404,
          "end": 1420
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 1425,
          "end": 1434
        },
        "start": 1404,
        "end": 1434
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
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1442,
                "end": 1445
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1448,
                "end": 1457
              },
              "start": 1442,
              "end": 1457
            },
            "directive": null,
            "start": 1442,
            "end": 1458
          }
        ],
        "start": 1436,
        "end": 1470
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
                "start": 1482,
                "end": 1486
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1489,
                "end": 1498
              },
              "start": 1482,
              "end": 1498
            },
            "directive": null,
            "start": 1482,
            "end": 1499
          }
        ],
        "start": 1476,
        "end": 1512
      },
      "start": 1400,
      "end": 1512
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1524,
            "end": 1533
          },
          "prefix": true,
          "start": 1517,
          "end": 1533
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 1538,
          "end": 1547
        },
        "start": 1517,
        "end": 1547
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
                "start": 1555,
                "end": 1558
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1561,
                "end": 1570
              },
              "start": 1555,
              "end": 1570
            },
            "directive": null,
            "start": 1555,
            "end": 1571
          }
        ],
        "start": 1549,
        "end": 1583
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
                "start": 1595,
                "end": 1599
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1602,
                "end": 1611
              },
              "start": 1595,
              "end": 1611
            },
            "directive": null,
            "start": 1595,
            "end": 1612
          }
        ],
        "start": 1589,
        "end": 1625
      },
      "start": 1513,
      "end": 1625
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
            "name": "strOrNumOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 1637,
            "end": 1651
          },
          "prefix": true,
          "start": 1630,
          "end": 1651
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 1656,
          "end": 1665
        },
        "start": 1630,
        "end": 1665
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
                "start": 1673,
                "end": 1681
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1684,
                "end": 1698
              },
              "start": 1673,
              "end": 1698
            },
            "directive": null,
            "start": 1673,
            "end": 1699
          }
        ],
        "start": 1667,
        "end": 1720
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
                "start": 1732,
                "end": 1736
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1739,
                "end": 1753
              },
              "start": 1732,
              "end": 1753
            },
            "directive": null,
            "start": 1732,
            "end": 1754
          }
        ],
        "start": 1726,
        "end": 1767
      },
      "start": 1626,
      "end": 1767
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
            "name": "boolOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1779,
            "end": 1786
          },
          "prefix": true,
          "start": 1772,
          "end": 1786
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 1791,
          "end": 1800
        },
        "start": 1772,
        "end": 1800
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1808,
                "end": 1809
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1812,
                "end": 1819
              },
              "start": 1808,
              "end": 1819
            },
            "directive": null,
            "start": 1808,
            "end": 1820
          }
        ],
        "start": 1802,
        "end": 1827
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
                "start": 1839,
                "end": 1843
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1846,
                "end": 1853
              },
              "start": 1839,
              "end": 1853
            },
            "directive": null,
            "start": 1839,
            "end": 1854
          }
        ],
        "start": 1833,
        "end": 1867
      },
      "start": 1768,
      "end": 1867
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1880,
            "end": 1888
          },
          "prefix": true,
          "start": 1873,
          "end": 1888
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 1893,
          "end": 1902
        },
        "start": 1873,
        "end": 1902
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1918,
                          "end": 1924
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1927,
                          "end": 1933
                        }
                      ],
                      "start": 1918,
                      "end": 1933
                    },
                    "start": 1916,
                    "end": 1933
                  },
                  "start": 1914,
                  "end": 1933
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1944
                },
                "definite": false,
                "start": 1914,
                "end": 1944
              }
            ],
            "declare": false,
            "start": 1910,
            "end": 1945
          }
        ],
        "start": 1904,
        "end": 1966
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1986,
                      "end": 1988
                    },
                    "start": 1984,
                    "end": 1988
                  },
                  "start": 1982,
                  "end": 1988
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1991,
                  "end": 1999
                },
                "definite": false,
                "start": 1982,
                "end": 1999
              }
            ],
            "declare": false,
            "start": 1978,
            "end": 2000
          }
        ],
        "start": 1972,
        "end": 2008
      },
      "start": 1869,
      "end": 2008
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2008
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
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 10,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 68,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 72,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 116,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 120,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 153,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 173,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 185,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 579,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 586,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 596,
    "end": 599
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 600,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 617,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 624,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 665,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 692,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 699,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 709,
    "end": 712
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 713,
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
    "type": "Identifier",
    "value": "bool",
    "start": 730,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 737,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 761,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 778,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 805,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 812,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 827,
    "end": 830
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 831,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 848,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 855,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 895,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 906,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 943,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 947,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 954,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 962,
    "end": 965
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 966,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 983,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 990,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1027,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1044,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1055,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1068,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1089,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1098,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1116,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1135,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1144,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1153,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1411,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1425,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1448,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1471,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1482,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1489,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1513,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1517,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1524,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1538,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1555,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1561,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1584,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1595,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1602,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1630,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1637,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1652,
    "end": 1655
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1656,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1673,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1684,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1721,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1732,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1739,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1772,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1779,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1787,
    "end": 1790
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1791,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1812,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1828,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "bool",
    "start": 1839,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1846,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1869,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1873,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1880,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1889,
    "end": 1892
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 1893,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1910,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1914,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1918,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1927,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1936,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1967,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1978,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 1982,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1991,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2007,
    "end": 2008
  }
]
```
