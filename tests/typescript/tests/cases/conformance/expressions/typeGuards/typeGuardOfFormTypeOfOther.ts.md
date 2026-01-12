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
                    "start": 248,
                    "end": 254
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 258
                    },
                    "typeArguments": null,
                    "start": 257,
                    "end": 258
                  }
                ],
                "start": 248,
                "end": 258
              },
              "start": 246,
              "end": 258
            },
            "start": 240,
            "end": 258
          },
          "init": null,
          "definite": false,
          "start": 240,
          "end": 258
        }
      ],
      "declare": true,
      "start": 228,
      "end": 259
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
                    "start": 280,
                    "end": 286
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 290
                    },
                    "typeArguments": null,
                    "start": 289,
                    "end": 290
                  }
                ],
                "start": 280,
                "end": 290
              },
              "start": 278,
              "end": 290
            },
            "start": 272,
            "end": 290
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 290
        }
      ],
      "declare": true,
      "start": 260,
      "end": 291
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
                    "start": 313,
                    "end": 320
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 324
                    },
                    "typeArguments": null,
                    "start": 323,
                    "end": 324
                  }
                ],
                "start": 313,
                "end": 324
              },
              "start": 311,
              "end": 324
            },
            "start": 304,
            "end": 324
          },
          "init": null,
          "definite": false,
          "start": 304,
          "end": 324
        }
      ],
      "declare": true,
      "start": 292,
      "end": 325
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
            "name": "emptyObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 340,
                "end": 342
              },
              "start": 338,
              "end": 342
            },
            "start": 330,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 330,
          "end": 342
        }
      ],
      "declare": false,
      "start": 326,
      "end": 343
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
                  "start": 351,
                  "end": 352
                },
                "typeArguments": null,
                "start": 351,
                "end": 352
              },
              "start": 349,
              "end": 352
            },
            "start": 348,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 348,
          "end": 352
        }
      ],
      "declare": false,
      "start": 344,
      "end": 353
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
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 647
          },
          "prefix": true,
          "start": 634,
          "end": 647
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 652,
          "end": 660
        },
        "start": 634,
        "end": 660
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
                "start": 668,
                "end": 669
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 678
              },
              "start": 668,
              "end": 678
            },
            "directive": null,
            "start": 668,
            "end": 679
          }
        ],
        "start": 662,
        "end": 686
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 706,
                      "end": 712
                    },
                    "start": 704,
                    "end": 712
                  },
                  "start": 702,
                  "end": 712
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 721
                },
                "definite": false,
                "start": 702,
                "end": 721
              }
            ],
            "declare": false,
            "start": 698,
            "end": 722
          }
        ],
        "start": 692,
        "end": 734
      },
      "start": 630,
      "end": 734
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
            "name": "numOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 752
          },
          "prefix": true,
          "start": 739,
          "end": 752
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 757,
          "end": 765
        },
        "start": 739,
        "end": 765
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
                "start": 773,
                "end": 774
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 783
              },
              "start": 773,
              "end": 783
            },
            "directive": null,
            "start": 773,
            "end": 784
          }
        ],
        "start": 767,
        "end": 791
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 811,
                      "end": 817
                    },
                    "start": 809,
                    "end": 817
                  },
                  "start": 807,
                  "end": 817
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 827
                },
                "definite": false,
                "start": 807,
                "end": 827
              }
            ],
            "declare": false,
            "start": 803,
            "end": 828
          }
        ],
        "start": 797,
        "end": 840
      },
      "start": 735,
      "end": 840
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
            "start": 852,
            "end": 859
          },
          "prefix": true,
          "start": 845,
          "end": 859
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 864,
          "end": 872
        },
        "start": 845,
        "end": 872
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
                "start": 880,
                "end": 881
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 891
              },
              "start": 880,
              "end": 891
            },
            "directive": null,
            "start": 880,
            "end": 892
          }
        ],
        "start": 874,
        "end": 899
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 919,
                      "end": 926
                    },
                    "start": 917,
                    "end": 926
                  },
                  "start": 915,
                  "end": 926
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 936
                },
                "definite": false,
                "start": 915,
                "end": 936
              }
            ],
            "declare": false,
            "start": 911,
            "end": 937
          }
        ],
        "start": 905,
        "end": 950
      },
      "start": 841,
      "end": 950
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
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 968
          },
          "prefix": true,
          "start": 955,
          "end": 968
        },
        "operator": "===",
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "Object",
            "raw": "\"Object\"",
            "start": 973,
            "end": 981
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 985,
            "end": 991
          },
          "start": 973,
          "end": 991
        },
        "start": 955,
        "end": 991
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
                "start": 1029,
                "end": 1030
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1033,
                "end": 1039
              },
              "start": 1029,
              "end": 1039
            },
            "directive": null,
            "start": 1029,
            "end": 1040
          }
        ],
        "start": 993,
        "end": 1074
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1094,
                      "end": 1100
                    },
                    "start": 1092,
                    "end": 1100
                  },
                  "start": 1090,
                  "end": 1100
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1103,
                  "end": 1109
                },
                "definite": false,
                "start": 1090,
                "end": 1109
              }
            ],
            "declare": false,
            "start": 1086,
            "end": 1110
          }
        ],
        "start": 1080,
        "end": 1145
      },
      "start": 951,
      "end": 1145
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
            "start": 1158,
            "end": 1172
          },
          "prefix": true,
          "start": 1151,
          "end": 1172
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1177,
          "end": 1185
        },
        "start": 1151,
        "end": 1185
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
                  "name": "q1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1201,
                      "end": 1203
                    },
                    "start": 1199,
                    "end": 1203
                  },
                  "start": 1197,
                  "end": 1203
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1206,
                  "end": 1220
                },
                "definite": false,
                "start": 1197,
                "end": 1220
              }
            ],
            "declare": false,
            "start": 1193,
            "end": 1221
          }
        ],
        "start": 1187,
        "end": 1229
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
                  "name": "q2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1249,
                          "end": 1255
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1258,
                          "end": 1264
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1267,
                          "end": 1274
                        }
                      ],
                      "start": 1249,
                      "end": 1274
                    },
                    "start": 1247,
                    "end": 1274
                  },
                  "start": 1245,
                  "end": 1274
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1291
                },
                "definite": false,
                "start": 1245,
                "end": 1291
              }
            ],
            "declare": false,
            "start": 1241,
            "end": 1292
          }
        ],
        "start": 1235,
        "end": 1323
      },
      "start": 1147,
      "end": 1323
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
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1550,
            "end": 1556
          },
          "prefix": true,
          "start": 1543,
          "end": 1556
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1561,
          "end": 1569
        },
        "start": 1543,
        "end": 1569
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1585,
                      "end": 1591
                    },
                    "start": 1583,
                    "end": 1591
                  },
                  "start": 1581,
                  "end": 1591
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1594,
                  "end": 1600
                },
                "definite": false,
                "start": 1581,
                "end": 1600
              }
            ],
            "declare": false,
            "start": 1577,
            "end": 1601
          }
        ],
        "start": 1571,
        "end": 1613
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
                "start": 1625,
                "end": 1626
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1629,
                "end": 1635
              },
              "start": 1625,
              "end": 1635
            },
            "directive": null,
            "start": 1625,
            "end": 1636
          }
        ],
        "start": 1619,
        "end": 1643
      },
      "start": 1539,
      "end": 1643
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
            "name": "numOrC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1655,
            "end": 1661
          },
          "prefix": true,
          "start": 1648,
          "end": 1661
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1666,
          "end": 1674
        },
        "start": 1648,
        "end": 1674
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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1690,
                      "end": 1696
                    },
                    "start": 1688,
                    "end": 1696
                  },
                  "start": 1686,
                  "end": 1696
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1699,
                  "end": 1705
                },
                "definite": false,
                "start": 1686,
                "end": 1705
              }
            ],
            "declare": false,
            "start": 1682,
            "end": 1706
          }
        ],
        "start": 1676,
        "end": 1718
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
                "start": 1730,
                "end": 1731
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1734,
                "end": 1740
              },
              "start": 1730,
              "end": 1740
            },
            "directive": null,
            "start": 1730,
            "end": 1741
          }
        ],
        "start": 1724,
        "end": 1748
      },
      "start": 1644,
      "end": 1748
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
            "start": 1760,
            "end": 1767
          },
          "prefix": true,
          "start": 1753,
          "end": 1767
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1772,
          "end": 1780
        },
        "start": 1753,
        "end": 1780
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1796,
                      "end": 1803
                    },
                    "start": 1794,
                    "end": 1803
                  },
                  "start": 1792,
                  "end": 1803
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "boolOrC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1806,
                  "end": 1813
                },
                "definite": false,
                "start": 1792,
                "end": 1813
              }
            ],
            "declare": false,
            "start": 1788,
            "end": 1814
          }
        ],
        "start": 1782,
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1840
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "boolOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1843,
                "end": 1850
              },
              "start": 1839,
              "end": 1850
            },
            "directive": null,
            "start": 1839,
            "end": 1851
          }
        ],
        "start": 1833,
        "end": 1858
      },
      "start": 1749,
      "end": 1858
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
            "start": 1871,
            "end": 1885
          },
          "prefix": true,
          "start": 1864,
          "end": 1885
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "Object",
          "raw": "\"Object\"",
          "start": 1890,
          "end": 1898
        },
        "start": 1864,
        "end": 1898
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
                  "name": "q1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1914,
                          "end": 1920
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1923,
                          "end": 1929
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1932,
                          "end": 1939
                        }
                      ],
                      "start": 1914,
                      "end": 1939
                    },
                    "start": 1912,
                    "end": 1939
                  },
                  "start": 1910,
                  "end": 1939
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1942,
                  "end": 1956
                },
                "definite": false,
                "start": 1910,
                "end": 1956
              }
            ],
            "declare": false,
            "start": 1906,
            "end": 1957
          }
        ],
        "start": 1900,
        "end": 1988
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
                  "name": "q2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2008,
                      "end": 2010
                    },
                    "start": 2006,
                    "end": 2010
                  },
                  "start": 2004,
                  "end": 2010
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2027
                },
                "definite": false,
                "start": 2004,
                "end": 2027
              }
            ],
            "declare": false,
            "start": 2000,
            "end": 2028
          }
        ],
        "start": 1994,
        "end": 2036
      },
      "start": 1860,
      "end": 2036
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2036
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
    "type": "Identifier",
    "value": "declare",
    "start": 228,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 240,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 260,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 272,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 292,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 300,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 313,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "emptyObj",
    "start": 330,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 634,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 641,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 648,
    "end": 651
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 652,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 687,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 698,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 739,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 746,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 753,
    "end": 756
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 757,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 777,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 792,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 803,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 811,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 821,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 845,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 852,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 860,
    "end": 863
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 864,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 884,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 900,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 911,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 915,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 919,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 955,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 962,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 969,
    "end": 972
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 973,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 982,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 985,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1086,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1090,
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
    "value": "string",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1151,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1158,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1177,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "q1",
    "start": 1197,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1206,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1249,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1258,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1267,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1277,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1539,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1543,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1550,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1561,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1577,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1585,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1594,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1614,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "strOrC",
    "start": 1629,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1644,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1648,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1655,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1662,
    "end": 1665
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1666,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1682,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1686,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1690,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1699,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1719,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1734,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1749,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1753,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1760,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1768,
    "end": 1771
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1772,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1788,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1792,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1796,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1806,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1813,
    "end": 1814
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
    "value": "c",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "boolOrC",
    "start": 1843,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1860,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1871,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1886,
    "end": 1889
  },
  {
    "type": "String",
    "value": "\"Object\"",
    "start": 1890,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1906,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "q1",
    "start": 1910,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1914,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1923,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1932,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1942,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1989,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2000,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 2004,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 2013,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2035,
    "end": 2036
  }
]
```
