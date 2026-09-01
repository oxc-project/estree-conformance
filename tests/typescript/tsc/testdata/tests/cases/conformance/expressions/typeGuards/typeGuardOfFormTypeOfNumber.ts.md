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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 586,
            "end": 594
          },
          "prefix": true,
          "start": 579,
          "end": 594
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 599,
          "end": 607
        },
        "start": 579,
        "end": 607
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
                "start": 615,
                "end": 618
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 629
              },
              "start": 615,
              "end": 629
            },
            "directive": null,
            "start": 615,
            "end": 630
          }
        ],
        "start": 609,
        "end": 642
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 654,
                "end": 657
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 670
              },
              "start": 654,
              "end": 670
            },
            "directive": null,
            "start": 654,
            "end": 671
          }
        ],
        "start": 648,
        "end": 683
      },
      "start": 575,
      "end": 683
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
            "start": 695,
            "end": 704
          },
          "prefix": true,
          "start": 688,
          "end": 704
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 709,
          "end": 717
        },
        "start": 688,
        "end": 717
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
                "start": 725,
                "end": 728
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 740
              },
              "start": 725,
              "end": 740
            },
            "directive": null,
            "start": 725,
            "end": 741
          }
        ],
        "start": 719,
        "end": 753
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 772,
                          "end": 778
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 781,
                          "end": 788
                        }
                      ],
                      "start": 772,
                      "end": 788
                    },
                    "start": 770,
                    "end": 788
                  },
                  "start": 769,
                  "end": 788
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 800
                },
                "definite": false,
                "start": 769,
                "end": 800
              }
            ],
            "declare": false,
            "start": 765,
            "end": 801
          }
        ],
        "start": 759,
        "end": 823
      },
      "start": 684,
      "end": 823
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
            "start": 835,
            "end": 849
          },
          "prefix": true,
          "start": 828,
          "end": 849
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 854,
          "end": 862
        },
        "start": 828,
        "end": 862
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
                "start": 870,
                "end": 873
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 876,
                "end": 890
              },
              "start": 870,
              "end": 890
            },
            "directive": null,
            "start": 870,
            "end": 891
          }
        ],
        "start": 864,
        "end": 903
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
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 924
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 927,
                "end": 941
              },
              "start": 915,
              "end": 941
            },
            "directive": null,
            "start": 915,
            "end": 942
          }
        ],
        "start": 909,
        "end": 964
      },
      "start": 824,
      "end": 964
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
            "start": 976,
            "end": 982
          },
          "prefix": true,
          "start": 969,
          "end": 982
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 987,
          "end": 995
        },
        "start": 969,
        "end": 995
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
                "start": 1003,
                "end": 1006
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1009,
                "end": 1015
              },
              "start": 1003,
              "end": 1015
            },
            "directive": null,
            "start": 1003,
            "end": 1016
          }
        ],
        "start": 997,
        "end": 1028
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
                "start": 1040,
                "end": 1041
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1050
              },
              "start": 1040,
              "end": 1050
            },
            "directive": null,
            "start": 1040,
            "end": 1051
          }
        ],
        "start": 1034,
        "end": 1058
      },
      "start": 965,
      "end": 1058
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
            "start": 1071,
            "end": 1080
          },
          "prefix": true,
          "start": 1064,
          "end": 1080
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1085,
          "end": 1093
        },
        "start": 1064,
        "end": 1093
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1109,
                      "end": 1111
                    },
                    "start": 1107,
                    "end": 1111
                  },
                  "start": 1105,
                  "end": 1111
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1114,
                  "end": 1123
                },
                "definite": false,
                "start": 1105,
                "end": 1123
              }
            ],
            "declare": false,
            "start": 1101,
            "end": 1124
          }
        ],
        "start": 1095,
        "end": 1132
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1152,
                          "end": 1158
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1161,
                          "end": 1168
                        }
                      ],
                      "start": 1152,
                      "end": 1168
                    },
                    "start": 1150,
                    "end": 1168
                  },
                  "start": 1148,
                  "end": 1168
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1180
                },
                "definite": false,
                "start": 1148,
                "end": 1180
              }
            ],
            "declare": false,
            "start": 1144,
            "end": 1181
          }
        ],
        "start": 1138,
        "end": 1203
      },
      "start": 1060,
      "end": 1203
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
            "start": 1430,
            "end": 1438
          },
          "prefix": true,
          "start": 1423,
          "end": 1438
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1443,
          "end": 1451
        },
        "start": 1423,
        "end": 1451
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
                "name": "str",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1462
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1467,
                "end": 1475
              },
              "start": 1459,
              "end": 1475
            },
            "directive": null,
            "start": 1459,
            "end": 1476
          }
        ],
        "start": 1453,
        "end": 1488
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
                "start": 1500,
                "end": 1503
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 1506,
                "end": 1514
              },
              "start": 1500,
              "end": 1514
            },
            "directive": null,
            "start": 1500,
            "end": 1515
          }
        ],
        "start": 1494,
        "end": 1527
      },
      "start": 1419,
      "end": 1527
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
            "start": 1539,
            "end": 1548
          },
          "prefix": true,
          "start": 1532,
          "end": 1548
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1553,
          "end": 1561
        },
        "start": 1532,
        "end": 1561
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1576,
                          "end": 1582
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1585,
                          "end": 1592
                        }
                      ],
                      "start": 1576,
                      "end": 1592
                    },
                    "start": 1574,
                    "end": 1592
                  },
                  "start": 1573,
                  "end": 1592
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1595,
                  "end": 1604
                },
                "definite": false,
                "start": 1573,
                "end": 1604
              }
            ],
            "declare": false,
            "start": 1569,
            "end": 1605
          }
        ],
        "start": 1563,
        "end": 1627
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
                "start": 1639,
                "end": 1642
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1645,
                "end": 1654
              },
              "start": 1639,
              "end": 1654
            },
            "directive": null,
            "start": 1639,
            "end": 1655
          }
        ],
        "start": 1633,
        "end": 1667
      },
      "start": 1528,
      "end": 1667
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
            "start": 1679,
            "end": 1693
          },
          "prefix": true,
          "start": 1672,
          "end": 1693
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1698,
          "end": 1706
        },
        "start": 1672,
        "end": 1706
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
                "name": "strOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1714,
                "end": 1723
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1726,
                "end": 1740
              },
              "start": 1714,
              "end": 1740
            },
            "directive": null,
            "start": 1714,
            "end": 1741
          }
        ],
        "start": 1708,
        "end": 1763
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
                "start": 1775,
                "end": 1778
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNumOrBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 1781,
                "end": 1795
              },
              "start": 1775,
              "end": 1795
            },
            "directive": null,
            "start": 1775,
            "end": 1796
          }
        ],
        "start": 1769,
        "end": 1808
      },
      "start": 1668,
      "end": 1808
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
            "start": 1820,
            "end": 1826
          },
          "prefix": true,
          "start": 1813,
          "end": 1826
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1831,
          "end": 1839
        },
        "start": 1813,
        "end": 1839
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
                "start": 1847,
                "end": 1848
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1851,
                "end": 1857
              },
              "start": 1847,
              "end": 1857
            },
            "directive": null,
            "start": 1847,
            "end": 1858
          }
        ],
        "start": 1841,
        "end": 1865
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
                "start": 1877,
                "end": 1880
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "numOrC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1889
              },
              "start": 1877,
              "end": 1889
            },
            "directive": null,
            "start": 1877,
            "end": 1890
          }
        ],
        "start": 1871,
        "end": 1902
      },
      "start": 1809,
      "end": 1902
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
            "start": 1915,
            "end": 1924
          },
          "prefix": true,
          "start": 1908,
          "end": 1924
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 1929,
          "end": 1937
        },
        "start": 1908,
        "end": 1937
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1953,
                          "end": 1959
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1962,
                          "end": 1969
                        }
                      ],
                      "start": 1953,
                      "end": 1969
                    },
                    "start": 1951,
                    "end": 1969
                  },
                  "start": 1949,
                  "end": 1969
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1972,
                  "end": 1981
                },
                "definite": false,
                "start": 1949,
                "end": 1981
              }
            ],
            "declare": false,
            "start": 1945,
            "end": 1982
          }
        ],
        "start": 1939,
        "end": 2004
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 2024,
                      "end": 2026
                    },
                    "start": 2022,
                    "end": 2026
                  },
                  "start": 2020,
                  "end": 2026
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2029,
                  "end": 2038
                },
                "definite": false,
                "start": 2020,
                "end": 2038
              }
            ],
            "declare": false,
            "start": 2016,
            "end": 2039
          }
        ],
        "start": 2010,
        "end": 2047
      },
      "start": 1904,
      "end": 2047
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2047
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
    "value": "strOrNum",
    "start": 586,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 595,
    "end": 598
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 599,
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
    "value": "{",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 615,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 621,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 662,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 688,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 695,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 705,
    "end": 708
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 709,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 731,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 772,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 781,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 791,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 824,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 828,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 835,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 850,
    "end": 853
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 854,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 870,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 876,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 904,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 915,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 927,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 965,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 969,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 976,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 983,
    "end": 986
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 987,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1003,
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
    "value": "numOrC",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1029,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1064,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1071,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1085,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1105,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1114,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 1148,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1152,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1171,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1419,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1423,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1430,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1439,
    "end": 1442
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1443,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1459,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1463,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1467,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1489,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1500,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1506,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1528,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1532,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1539,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1549,
    "end": 1552
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1553,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1576,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1585,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1595,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1628,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1639,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "numOrBool",
    "start": 1645,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1668,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1672,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1679,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1694,
    "end": 1697
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1698,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1714,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1726,
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
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1764,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "strOrNumOrBool",
    "start": 1781,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1809,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1813,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1820,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1831,
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
    "value": "{",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1851,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1866,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1877,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "numOrC",
    "start": 1883,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1904,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1915,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1925,
    "end": 1928
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 1929,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1945,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 1949,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1953,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1962,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 1972,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2005,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2016,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 2020,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "strOrBool",
    "start": 2029,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2046,
    "end": 2047
  }
]
```
