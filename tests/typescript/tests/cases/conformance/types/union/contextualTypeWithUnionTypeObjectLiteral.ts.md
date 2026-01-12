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
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
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
                "start": 42,
                "end": 48
              },
              "start": 40,
              "end": 48
            },
            "start": 37,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 48
        }
      ],
      "declare": true,
      "start": 25,
      "end": 49
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
            "name": "strOrNumber",
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
            "start": 54,
            "end": 82
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 88
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 95
            },
            "start": 85,
            "end": 95
          },
          "definite": false,
          "start": 54,
          "end": 95
        }
      ],
      "declare": false,
      "start": 50,
      "end": 96
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
            "name": "objStr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 123
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 125,
                        "end": 131
                      },
                      "start": 123,
                      "end": 131
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 119,
                    "end": 131
                  }
                ],
                "start": 117,
                "end": 133
              },
              "start": 115,
              "end": 133
            },
            "start": 109,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 133
        }
      ],
      "declare": true,
      "start": 97,
      "end": 134
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
            "name": "objNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 161
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 163,
                        "end": 169
                      },
                      "start": 161,
                      "end": 169
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 157,
                    "end": 169
                  }
                ],
                "start": 155,
                "end": 171
              },
              "start": 153,
              "end": 171
            },
            "start": 147,
            "end": 171
          },
          "init": null,
          "definite": false,
          "start": 147,
          "end": 171
        }
      ],
      "declare": true,
      "start": 135,
      "end": 172
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
            "name": "objStrOrNum1",
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
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 197
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 199,
                            "end": 205
                          },
                          "start": 197,
                          "end": 205
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 193,
                        "end": 205
                      }
                    ],
                    "start": 191,
                    "end": 207
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 216
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 218,
                            "end": 224
                          },
                          "start": 216,
                          "end": 224
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 212,
                        "end": 224
                      }
                    ],
                    "start": 210,
                    "end": 226
                  }
                ],
                "start": 191,
                "end": 226
              },
              "start": 189,
              "end": 226
            },
            "start": 177,
            "end": 226
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 235
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 245
            },
            "start": 229,
            "end": 245
          },
          "definite": false,
          "start": 177,
          "end": 245
        }
      ],
      "declare": false,
      "start": 173,
      "end": 246
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
            "name": "objStrOrNum2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 271
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 273,
                            "end": 279
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 282,
                            "end": 288
                          }
                        ],
                        "start": 273,
                        "end": 288
                      },
                      "start": 271,
                      "end": 288
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 267,
                    "end": 288
                  }
                ],
                "start": 265,
                "end": 290
              },
              "start": 263,
              "end": 290
            },
            "start": 251,
            "end": 290
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "objStr",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 299
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "objNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 309
            },
            "start": 293,
            "end": 309
          },
          "definite": false,
          "start": 251,
          "end": 309
        }
      ],
      "declare": false,
      "start": 247,
      "end": 310
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
            "name": "objStrOrNum3",
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
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 821,
                          "end": 825
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 827,
                            "end": 833
                          },
                          "start": 825,
                          "end": 833
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 821,
                        "end": 833
                      }
                    ],
                    "start": 819,
                    "end": 835
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 840,
                          "end": 844
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 846,
                            "end": 852
                          },
                          "start": 844,
                          "end": 852
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 840,
                        "end": 852
                      }
                    ],
                    "start": 838,
                    "end": 854
                  }
                ],
                "start": 819,
                "end": 854
              },
              "start": 817,
              "end": 854
            },
            "start": 805,
            "end": 854
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 867
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 869,
                  "end": 880
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 863,
                "end": 880
              }
            ],
            "start": 857,
            "end": 882
          },
          "definite": false,
          "start": 805,
          "end": 882
        }
      ],
      "declare": false,
      "start": 801,
      "end": 883
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
            "name": "objStrOrNum4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 904,
                      "end": 908
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 910,
                            "end": 916
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 919,
                            "end": 925
                          }
                        ],
                        "start": 910,
                        "end": 925
                      },
                      "start": 908,
                      "end": 925
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 904,
                    "end": 925
                  }
                ],
                "start": 902,
                "end": 927
              },
              "start": 900,
              "end": 927
            },
            "start": 888,
            "end": 927
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 936,
                  "end": 940
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 942,
                  "end": 953
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 936,
                "end": 953
              }
            ],
            "start": 930,
            "end": 955
          },
          "definite": false,
          "start": 888,
          "end": 955
        }
      ],
      "declare": false,
      "start": 884,
      "end": 956
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
            "name": "objStrOrNum5",
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
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 977,
                          "end": 981
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 983,
                            "end": 989
                          },
                          "start": 981,
                          "end": 989
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 977,
                        "end": 990
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 991,
                          "end": 999
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1001,
                            "end": 1007
                          },
                          "start": 999,
                          "end": 1007
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 991,
                        "end": 1008
                      }
                    ],
                    "start": 975,
                    "end": 1010
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1015,
                          "end": 1019
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1021,
                            "end": 1027
                          },
                          "start": 1019,
                          "end": 1027
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1015,
                        "end": 1027
                      }
                    ],
                    "start": 1013,
                    "end": 1029
                  }
                ],
                "start": 975,
                "end": 1029
              },
              "start": 973,
              "end": 1029
            },
            "start": 961,
            "end": 1029
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1038
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1040,
                  "end": 1051
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1034,
                "end": 1051
              }
            ],
            "start": 1032,
            "end": 1053
          },
          "definite": false,
          "start": 961,
          "end": 1053
        }
      ],
      "declare": false,
      "start": 957,
      "end": 1054
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
            "name": "objStrOrNum6",
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
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1075,
                          "end": 1079
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1081,
                            "end": 1087
                          },
                          "start": 1079,
                          "end": 1087
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1075,
                        "end": 1088
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1089,
                          "end": 1097
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1099,
                            "end": 1105
                          },
                          "start": 1097,
                          "end": 1105
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1089,
                        "end": 1106
                      }
                    ],
                    "start": 1073,
                    "end": 1108
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1113,
                          "end": 1117
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1119,
                            "end": 1125
                          },
                          "start": 1117,
                          "end": 1125
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1113,
                        "end": 1125
                      }
                    ],
                    "start": 1111,
                    "end": 1127
                  }
                ],
                "start": 1073,
                "end": 1127
              },
              "start": 1071,
              "end": 1127
            },
            "start": 1059,
            "end": 1127
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1136,
                  "end": 1140
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1142,
                  "end": 1153
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1136,
                "end": 1153
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1159,
                  "end": 1167
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1169,
                  "end": 1172
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1159,
                "end": 1172
              }
            ],
            "start": 1130,
            "end": 1174
          },
          "definite": false,
          "start": 1059,
          "end": 1174
        }
      ],
      "declare": false,
      "start": 1055,
      "end": 1175
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
            "name": "objStrOrNum7",
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
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1196,
                          "end": 1200
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1202,
                            "end": 1208
                          },
                          "start": 1200,
                          "end": 1208
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1196,
                        "end": 1209
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1210,
                          "end": 1218
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1220,
                            "end": 1226
                          },
                          "start": 1218,
                          "end": 1226
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1210,
                        "end": 1227
                      }
                    ],
                    "start": 1194,
                    "end": 1229
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1234,
                          "end": 1238
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1240,
                            "end": 1246
                          },
                          "start": 1238,
                          "end": 1246
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1234,
                        "end": 1247
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1248,
                          "end": 1257
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1259,
                            "end": 1265
                          },
                          "start": 1257,
                          "end": 1265
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1248,
                        "end": 1265
                      }
                    ],
                    "start": 1232,
                    "end": 1267
                  }
                ],
                "start": 1194,
                "end": 1267
              },
              "start": 1192,
              "end": 1267
            },
            "start": 1180,
            "end": 1267
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1276,
                  "end": 1280
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1282,
                  "end": 1293
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1276,
                "end": 1293
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1307
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1309,
                  "end": 1312
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1299,
                "end": 1312
              }
            ],
            "start": 1270,
            "end": 1314
          },
          "definite": false,
          "start": 1180,
          "end": 1314
        }
      ],
      "declare": false,
      "start": 1176,
      "end": 1315
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
            "name": "objStrOrNum8",
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
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1336,
                          "end": 1340
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1342,
                            "end": 1348
                          },
                          "start": 1340,
                          "end": 1348
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1336,
                        "end": 1349
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1350,
                          "end": 1358
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1360,
                            "end": 1366
                          },
                          "start": 1358,
                          "end": 1366
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1350,
                        "end": 1367
                      }
                    ],
                    "start": 1334,
                    "end": 1369
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1374,
                          "end": 1378
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1380,
                            "end": 1386
                          },
                          "start": 1378,
                          "end": 1386
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1374,
                        "end": 1387
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherP1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1388,
                          "end": 1397
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1399,
                            "end": 1405
                          },
                          "start": 1397,
                          "end": 1405
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1388,
                        "end": 1405
                      }
                    ],
                    "start": 1372,
                    "end": 1407
                  }
                ],
                "start": 1334,
                "end": 1407
              },
              "start": 1332,
              "end": 1407
            },
            "start": 1320,
            "end": 1407
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1416,
                  "end": 1420
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1422,
                  "end": 1433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1416,
                "end": 1433
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1439,
                  "end": 1447
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1452
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1439,
                "end": 1452
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anotherP1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1458,
                  "end": 1467
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1472
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1458,
                "end": 1472
              }
            ],
            "start": 1410,
            "end": 1474
          },
          "definite": false,
          "start": 1320,
          "end": 1474
        }
      ],
      "declare": false,
      "start": 1316,
      "end": 1475
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1486,
        "end": 1489
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1496,
              "end": 1527
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1531,
                    "end": 1537
                  },
                  "start": 1529,
                  "end": 1537
                },
                "start": 1528,
                "end": 1537
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
                    "start": 1542,
                    "end": 1548
                  },
                  "start": 1540,
                  "end": 1548
                },
                "start": 1539,
                "end": 1548
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1551,
                "end": 1557
              },
              "start": 1549,
              "end": 1557
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1496,
            "end": 1558
          }
        ],
        "start": 1490,
        "end": 1560
      },
      "declare": false,
      "start": 1476,
      "end": 1560
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1571,
        "end": 1574
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1581,
              "end": 1612
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 1616,
                    "end": 1622
                  },
                  "start": 1614,
                  "end": 1622
                },
                "start": 1613,
                "end": 1622
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
                    "start": 1627,
                    "end": 1633
                  },
                  "start": 1625,
                  "end": 1633
                },
                "start": 1624,
                "end": 1633
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1636,
                "end": 1642
              },
              "start": 1634,
              "end": 1642
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1581,
            "end": 1643
          }
        ],
        "start": 1575,
        "end": 1645
      },
      "declare": false,
      "start": 1561,
      "end": 1645
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
            "name": "i11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1663,
                  "end": 1666
                },
                "typeArguments": null,
                "start": 1663,
                "end": 1666
              },
              "start": 1661,
              "end": 1666
            },
            "start": 1658,
            "end": 1666
          },
          "init": null,
          "definite": false,
          "start": 1658,
          "end": 1666
        }
      ],
      "declare": true,
      "start": 1646,
      "end": 1667
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
            "name": "i21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I21",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1685,
                  "end": 1688
                },
                "typeArguments": null,
                "start": 1685,
                "end": 1688
              },
              "start": 1683,
              "end": 1688
            },
            "start": 1680,
            "end": 1688
          },
          "init": null,
          "definite": false,
          "start": 1680,
          "end": 1688
        }
      ],
      "declare": true,
      "start": 1668,
      "end": 1689
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1704,
                      "end": 1707
                    },
                    "typeArguments": null,
                    "start": 1704,
                    "end": 1707
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1710,
                      "end": 1713
                    },
                    "typeArguments": null,
                    "start": 1710,
                    "end": 1713
                  }
                ],
                "start": 1704,
                "end": 1713
              },
              "start": 1702,
              "end": 1713
            },
            "start": 1694,
            "end": 1713
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1716,
            "end": 1719
          },
          "definite": false,
          "start": 1694,
          "end": 1719
        }
      ],
      "declare": false,
      "start": 1690,
      "end": 1720
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1735,
                      "end": 1738
                    },
                    "typeArguments": null,
                    "start": 1735,
                    "end": 1738
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1741,
                      "end": 1744
                    },
                    "typeArguments": null,
                    "start": 1741,
                    "end": 1744
                  }
                ],
                "start": 1735,
                "end": 1744
              },
              "start": 1733,
              "end": 1744
            },
            "start": 1725,
            "end": 1744
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1747,
            "end": 1750
          },
          "definite": false,
          "start": 1725,
          "end": 1750
        }
      ],
      "declare": false,
      "start": 1721,
      "end": 1751
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1766,
                      "end": 1769
                    },
                    "typeArguments": null,
                    "start": 1766,
                    "end": 1769
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1772,
                      "end": 1775
                    },
                    "typeArguments": null,
                    "start": 1772,
                    "end": 1775
                  }
                ],
                "start": 1766,
                "end": 1775
              },
              "start": 1764,
              "end": 1775
            },
            "start": 1756,
            "end": 1775
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1795,
                  "end": 1826
                },
                "value": {
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
                      "typeAnnotation": null,
                      "start": 1829,
                      "end": 1830
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1832,
                      "end": 1833
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1852,
                              "end": 1853
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1856,
                                  "end": 1857
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charAt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1858,
                                  "end": 1864
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1856,
                                "end": 1864
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1865,
                                  "end": 1866
                                }
                              ],
                              "optional": false,
                              "start": 1856,
                              "end": 1867
                            },
                            "definite": false,
                            "start": 1852,
                            "end": 1867
                          }
                        ],
                        "declare": false,
                        "start": 1848,
                        "end": 1868
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1884,
                          "end": 1885
                        },
                        "start": 1877,
                        "end": 1886
                      }
                    ],
                    "start": 1838,
                    "end": 1892
                  },
                  "id": null,
                  "generator": false,
                  "start": 1828,
                  "end": 1892
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1795,
                "end": 1892
              }
            ],
            "start": 1778,
            "end": 1895
          },
          "definite": false,
          "start": 1756,
          "end": 1895
        }
      ],
      "declare": false,
      "start": 1752,
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1911,
                      "end": 1914
                    },
                    "typeArguments": null,
                    "start": 1911,
                    "end": 1914
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1917,
                      "end": 1920
                    },
                    "typeArguments": null,
                    "start": 1917,
                    "end": 1920
                  }
                ],
                "start": 1911,
                "end": 1920
              },
              "start": 1909,
              "end": 1920
            },
            "start": 1901,
            "end": 1920
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1940,
                  "end": 1971
                },
                "value": {
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
                      "typeAnnotation": null,
                      "start": 1974,
                      "end": 1975
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1977,
                      "end": 1978
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1997,
                              "end": 1998
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2001,
                                  "end": 2002
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "charCodeAt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2003,
                                  "end": 2013
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2001,
                                "end": 2013
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2014,
                                  "end": 2015
                                }
                              ],
                              "optional": false,
                              "start": 2001,
                              "end": 2016
                            },
                            "definite": false,
                            "start": 1997,
                            "end": 2016
                          }
                        ],
                        "declare": false,
                        "start": 1993,
                        "end": 2017
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2033,
                          "end": 2034
                        },
                        "start": 2026,
                        "end": 2035
                      }
                    ],
                    "start": 1983,
                    "end": 2041
                  },
                  "id": null,
                  "generator": false,
                  "start": 1973,
                  "end": 2041
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1940,
                "end": 2041
              }
            ],
            "start": 1923,
            "end": 2044
          },
          "definite": false,
          "start": 1901,
          "end": 2044
        }
      ],
      "declare": false,
      "start": 1897,
      "end": 2045
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
            "name": "strOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2071,
                    "end": 2077
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2080,
                    "end": 2086
                  }
                ],
                "start": 2071,
                "end": 2086
              },
              "start": 2069,
              "end": 2086
            },
            "start": 2058,
            "end": 2086
          },
          "init": null,
          "definite": false,
          "start": 2058,
          "end": 2086
        }
      ],
      "declare": true,
      "start": 2046,
      "end": 2087
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
            "name": "i11Ori21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2102,
                      "end": 2105
                    },
                    "typeArguments": null,
                    "start": 2102,
                    "end": 2105
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2108,
                      "end": 2111
                    },
                    "typeArguments": null,
                    "start": 2108,
                    "end": 2111
                  }
                ],
                "start": 2102,
                "end": 2111
              },
              "start": 2100,
              "end": 2111
            },
            "start": 2092,
            "end": 2111
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "commonMethodDifferentReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2143,
                  "end": 2174
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2177,
                      "end": 2178
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2180,
                      "end": 2181
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "strOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2186,
                    "end": 2197
                  },
                  "id": null,
                  "generator": false,
                  "start": 2176,
                  "end": 2197
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2143,
                "end": 2197
              }
            ],
            "start": 2114,
            "end": 2200
          },
          "definite": false,
          "start": 2092,
          "end": 2200
        }
      ],
      "declare": false,
      "start": 2088,
      "end": 2201
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2201
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
    "value": "str",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 25,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 54,
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
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 97,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "objStr",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 135,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 143,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "objNum",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 173,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum1",
    "start": 177,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "objStr",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "objNum",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum2",
    "start": 251,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 267,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "objStr",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 300,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "objNum",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum3",
    "start": 805,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 827,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 840,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 863,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 869,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "var",
    "start": 884,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum4",
    "start": 888,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 904,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 910,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 919,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 942,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 957,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum5",
    "start": 961,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 977,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 983,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 991,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1040,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum6",
    "start": 1059,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1075,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1081,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1089,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1113,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1119,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1136,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1142,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1159,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum7",
    "start": 1180,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1196,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1210,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1234,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "anotherP1",
    "start": 1248,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1259,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1276,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1282,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1299,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1309,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "objStrOrNum8",
    "start": 1320,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1336,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1342,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1350,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1374,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1380,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "anotherP1",
    "start": 1388,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1399,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 1422,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "anotherP",
    "start": 1439,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1449,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "anotherP1",
    "start": 1458,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1469,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1476,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1496,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1531,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1542,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1551,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1561,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1571,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1581,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1616,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1627,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1636,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1646,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1668,
    "end": 1675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1676,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1685,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1694,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1710,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "i11",
    "start": 1716,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1721,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1725,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1735,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1741,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "i21",
    "start": 1747,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1752,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1756,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1772,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1795,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1835,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1848,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "return",
    "start": 1877,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1894,
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
    "start": 1897,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 1901,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1911,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1940,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1980,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1993,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "charCodeAt",
    "start": 2003,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2026,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2046,
    "end": 2053
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2054,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 2058,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2071,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2080,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2088,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "i11Ori21",
    "start": 2092,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 2102,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "I21",
    "start": 2108,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 2143,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2183,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "strOrNumber",
    "start": 2186,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  }
]
```
