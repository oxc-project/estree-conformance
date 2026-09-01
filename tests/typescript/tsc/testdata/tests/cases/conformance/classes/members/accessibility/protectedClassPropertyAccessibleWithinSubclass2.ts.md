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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "protected",
            "start": 17,
            "end": 38
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 49
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 69,
                                "end": 73
                              },
                              "typeArguments": null,
                              "start": 69,
                              "end": 73
                            },
                            "start": 67,
                            "end": 73
                          },
                          "start": 66,
                          "end": 73
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 76,
                            "end": 85
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 89,
                            "end": 92
                          },
                          "start": 76,
                          "end": 92
                        },
                        "definite": false,
                        "start": 66,
                        "end": 92
                      }
                    ],
                    "declare": false,
                    "start": 62,
                    "end": 93
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
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 110,
                                "end": 118
                              },
                              "typeArguments": null,
                              "start": 110,
                              "end": 118
                            },
                            "start": 108,
                            "end": 118
                          },
                          "start": 106,
                          "end": 118
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 121,
                            "end": 130
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 134,
                            "end": 137
                          },
                          "start": 121,
                          "end": 137
                        },
                        "definite": false,
                        "start": 106,
                        "end": 137
                      }
                    ],
                    "declare": false,
                    "start": 102,
                    "end": 138
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
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 155,
                                "end": 163
                              },
                              "typeArguments": null,
                              "start": 155,
                              "end": 163
                            },
                            "start": 153,
                            "end": 163
                          },
                          "start": 151,
                          "end": 163
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 166,
                            "end": 175
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 179,
                            "end": 182
                          },
                          "start": 166,
                          "end": 182
                        },
                        "definite": false,
                        "start": 151,
                        "end": 182
                      }
                    ],
                    "declare": false,
                    "start": 147,
                    "end": 183
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
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 200,
                                "end": 208
                              },
                              "typeArguments": null,
                              "start": 200,
                              "end": 208
                            },
                            "start": 198,
                            "end": 208
                          },
                          "start": 196,
                          "end": 208
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 220
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 224,
                            "end": 227
                          },
                          "start": 211,
                          "end": 227
                        },
                        "definite": false,
                        "start": 196,
                        "end": 227
                      }
                    ],
                    "declare": false,
                    "start": 192,
                    "end": 228
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
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 253
                              },
                              "typeArguments": null,
                              "start": 245,
                              "end": 253
                            },
                            "start": 243,
                            "end": 253
                          },
                          "start": 241,
                          "end": 253
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 256,
                            "end": 265
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 269,
                            "end": 272
                          },
                          "start": 256,
                          "end": 272
                        },
                        "definite": false,
                        "start": 241,
                        "end": 272
                      }
                    ],
                    "declare": false,
                    "start": 237,
                    "end": 273
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 286
                      },
                      "optional": false,
                      "computed": false,
                      "start": 283,
                      "end": 286
                    },
                    "directive": null,
                    "start": 283,
                    "end": 287
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 354
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 356
                      },
                      "optional": false,
                      "computed": false,
                      "start": 352,
                      "end": 356
                    },
                    "directive": null,
                    "start": 352,
                    "end": 357
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 421,
                        "end": 423
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 425
                      },
                      "optional": false,
                      "computed": false,
                      "start": 421,
                      "end": 425
                    },
                    "directive": null,
                    "start": 421,
                    "end": 426
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 490,
                        "end": 492
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 493,
                        "end": 494
                      },
                      "optional": false,
                      "computed": false,
                      "start": 490,
                      "end": 494
                    },
                    "directive": null,
                    "start": 490,
                    "end": 495
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 618,
                        "end": 620
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 622
                      },
                      "optional": false,
                      "computed": false,
                      "start": 618,
                      "end": 622
                    },
                    "directive": null,
                    "start": 618,
                    "end": 623
                  }
                ],
                "start": 52,
                "end": 684
              },
              "expression": false,
              "start": 49,
              "end": 684
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 43,
            "end": 684
          }
        ],
        "start": 11,
        "end": 686
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 686
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 694,
        "end": 702
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 715
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 729
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 749,
                                "end": 753
                              },
                              "typeArguments": null,
                              "start": 749,
                              "end": 753
                            },
                            "start": 747,
                            "end": 753
                          },
                          "start": 746,
                          "end": 753
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 756,
                            "end": 765
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 769,
                            "end": 772
                          },
                          "start": 756,
                          "end": 772
                        },
                        "definite": false,
                        "start": 746,
                        "end": 772
                      }
                    ],
                    "declare": false,
                    "start": 742,
                    "end": 773
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
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 790,
                                "end": 798
                              },
                              "typeArguments": null,
                              "start": 790,
                              "end": 798
                            },
                            "start": 788,
                            "end": 798
                          },
                          "start": 786,
                          "end": 798
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 801,
                            "end": 810
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 814,
                            "end": 817
                          },
                          "start": 801,
                          "end": 817
                        },
                        "definite": false,
                        "start": 786,
                        "end": 817
                      }
                    ],
                    "declare": false,
                    "start": 782,
                    "end": 818
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
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 835,
                                "end": 843
                              },
                              "typeArguments": null,
                              "start": 835,
                              "end": 843
                            },
                            "start": 833,
                            "end": 843
                          },
                          "start": 831,
                          "end": 843
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 846,
                            "end": 855
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 859,
                            "end": 862
                          },
                          "start": 846,
                          "end": 862
                        },
                        "definite": false,
                        "start": 831,
                        "end": 862
                      }
                    ],
                    "declare": false,
                    "start": 827,
                    "end": 863
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
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 880,
                                "end": 888
                              },
                              "typeArguments": null,
                              "start": 880,
                              "end": 888
                            },
                            "start": 878,
                            "end": 888
                          },
                          "start": 876,
                          "end": 888
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 891,
                            "end": 900
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 904,
                            "end": 907
                          },
                          "start": 891,
                          "end": 907
                        },
                        "definite": false,
                        "start": 876,
                        "end": 907
                      }
                    ],
                    "declare": false,
                    "start": 872,
                    "end": 908
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
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 925,
                                "end": 933
                              },
                              "typeArguments": null,
                              "start": 925,
                              "end": 933
                            },
                            "start": 923,
                            "end": 933
                          },
                          "start": 921,
                          "end": 933
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 936,
                            "end": 945
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 949,
                            "end": 952
                          },
                          "start": 936,
                          "end": 952
                        },
                        "definite": false,
                        "start": 921,
                        "end": 952
                      }
                    ],
                    "declare": false,
                    "start": 917,
                    "end": 953
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 963,
                        "end": 964
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 965,
                        "end": 966
                      },
                      "optional": false,
                      "computed": false,
                      "start": 963,
                      "end": 966
                    },
                    "directive": null,
                    "start": 963,
                    "end": 967
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1055,
                        "end": 1057
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1058,
                        "end": 1059
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1055,
                      "end": 1059
                    },
                    "directive": null,
                    "start": 1055,
                    "end": 1060
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1193,
                        "end": 1195
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1196,
                        "end": 1197
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1193,
                      "end": 1197
                    },
                    "directive": null,
                    "start": 1193,
                    "end": 1198
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1285,
                        "end": 1287
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1288,
                        "end": 1289
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1285,
                      "end": 1289
                    },
                    "directive": null,
                    "start": 1285,
                    "end": 1290
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1413,
                        "end": 1415
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1416,
                        "end": 1417
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1413,
                      "end": 1417
                    },
                    "directive": null,
                    "start": 1413,
                    "end": 1418
                  }
                ],
                "start": 732,
                "end": 1502
              },
              "expression": false,
              "start": 729,
              "end": 1502
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 722,
            "end": 1502
          }
        ],
        "start": 716,
        "end": 1504
      },
      "abstract": false,
      "declare": false,
      "start": 688,
      "end": 1504
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1512,
        "end": 1520
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1529,
        "end": 1533
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1540,
              "end": 1547
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1567,
                                "end": 1571
                              },
                              "typeArguments": null,
                              "start": 1567,
                              "end": 1571
                            },
                            "start": 1565,
                            "end": 1571
                          },
                          "start": 1564,
                          "end": 1571
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1574,
                            "end": 1583
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1587,
                            "end": 1590
                          },
                          "start": 1574,
                          "end": 1590
                        },
                        "definite": false,
                        "start": 1564,
                        "end": 1590
                      }
                    ],
                    "declare": false,
                    "start": 1560,
                    "end": 1591
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
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1608,
                                "end": 1616
                              },
                              "typeArguments": null,
                              "start": 1608,
                              "end": 1616
                            },
                            "start": 1606,
                            "end": 1616
                          },
                          "start": 1604,
                          "end": 1616
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1619,
                            "end": 1628
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1632,
                            "end": 1635
                          },
                          "start": 1619,
                          "end": 1635
                        },
                        "definite": false,
                        "start": 1604,
                        "end": 1635
                      }
                    ],
                    "declare": false,
                    "start": 1600,
                    "end": 1636
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
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1653,
                                "end": 1661
                              },
                              "typeArguments": null,
                              "start": 1653,
                              "end": 1661
                            },
                            "start": 1651,
                            "end": 1661
                          },
                          "start": 1649,
                          "end": 1661
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1664,
                            "end": 1673
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1677,
                            "end": 1680
                          },
                          "start": 1664,
                          "end": 1680
                        },
                        "definite": false,
                        "start": 1649,
                        "end": 1680
                      }
                    ],
                    "declare": false,
                    "start": 1645,
                    "end": 1681
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
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1698,
                                "end": 1706
                              },
                              "typeArguments": null,
                              "start": 1698,
                              "end": 1706
                            },
                            "start": 1696,
                            "end": 1706
                          },
                          "start": 1694,
                          "end": 1706
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1709,
                            "end": 1718
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1722,
                            "end": 1725
                          },
                          "start": 1709,
                          "end": 1725
                        },
                        "definite": false,
                        "start": 1694,
                        "end": 1725
                      }
                    ],
                    "declare": false,
                    "start": 1690,
                    "end": 1726
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
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1743,
                                "end": 1751
                              },
                              "typeArguments": null,
                              "start": 1743,
                              "end": 1751
                            },
                            "start": 1741,
                            "end": 1751
                          },
                          "start": 1739,
                          "end": 1751
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1754,
                            "end": 1763
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1767,
                            "end": 1770
                          },
                          "start": 1754,
                          "end": 1770
                        },
                        "definite": false,
                        "start": 1739,
                        "end": 1770
                      }
                    ],
                    "declare": false,
                    "start": 1735,
                    "end": 1771
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1781,
                        "end": 1782
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1783,
                        "end": 1784
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1781,
                      "end": 1784
                    },
                    "directive": null,
                    "start": 1781,
                    "end": 1785
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1873,
                        "end": 1875
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1876,
                        "end": 1877
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1873,
                      "end": 1877
                    },
                    "directive": null,
                    "start": 1873,
                    "end": 1878
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1965,
                        "end": 1967
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1968,
                        "end": 1969
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1965,
                      "end": 1969
                    },
                    "directive": null,
                    "start": 1965,
                    "end": 1970
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2103,
                        "end": 2105
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2106,
                        "end": 2107
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2103,
                      "end": 2107
                    },
                    "directive": null,
                    "start": 2103,
                    "end": 2108
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2231,
                        "end": 2233
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2234,
                        "end": 2235
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2231,
                      "end": 2235
                    },
                    "directive": null,
                    "start": 2231,
                    "end": 2236
                  }
                ],
                "start": 1550,
                "end": 2391
              },
              "expression": false,
              "start": 1547,
              "end": 2391
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1540,
            "end": 2391
          }
        ],
        "start": 1534,
        "end": 2393
      },
      "abstract": false,
      "declare": false,
      "start": 1506,
      "end": 2393
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2401,
        "end": 2409
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2418,
        "end": 2426
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2443,
              "end": 2444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2447,
                "end": 2453
              },
              "start": 2445,
              "end": 2453
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "protected",
            "start": 2433,
            "end": 2454
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2459,
              "end": 2466
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2486,
                                "end": 2490
                              },
                              "typeArguments": null,
                              "start": 2486,
                              "end": 2490
                            },
                            "start": 2484,
                            "end": 2490
                          },
                          "start": 2483,
                          "end": 2490
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2493,
                            "end": 2502
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2506,
                            "end": 2509
                          },
                          "start": 2493,
                          "end": 2509
                        },
                        "definite": false,
                        "start": 2483,
                        "end": 2509
                      }
                    ],
                    "declare": false,
                    "start": 2479,
                    "end": 2510
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
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2527,
                                "end": 2535
                              },
                              "typeArguments": null,
                              "start": 2527,
                              "end": 2535
                            },
                            "start": 2525,
                            "end": 2535
                          },
                          "start": 2523,
                          "end": 2535
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2538,
                            "end": 2547
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2551,
                            "end": 2554
                          },
                          "start": 2538,
                          "end": 2554
                        },
                        "definite": false,
                        "start": 2523,
                        "end": 2554
                      }
                    ],
                    "declare": false,
                    "start": 2519,
                    "end": 2555
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
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2572,
                                "end": 2580
                              },
                              "typeArguments": null,
                              "start": 2572,
                              "end": 2580
                            },
                            "start": 2570,
                            "end": 2580
                          },
                          "start": 2568,
                          "end": 2580
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2583,
                            "end": 2592
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2596,
                            "end": 2599
                          },
                          "start": 2583,
                          "end": 2599
                        },
                        "definite": false,
                        "start": 2568,
                        "end": 2599
                      }
                    ],
                    "declare": false,
                    "start": 2564,
                    "end": 2600
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
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2617,
                                "end": 2625
                              },
                              "typeArguments": null,
                              "start": 2617,
                              "end": 2625
                            },
                            "start": 2615,
                            "end": 2625
                          },
                          "start": 2613,
                          "end": 2625
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2628,
                            "end": 2637
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2641,
                            "end": 2644
                          },
                          "start": 2628,
                          "end": 2644
                        },
                        "definite": false,
                        "start": 2613,
                        "end": 2644
                      }
                    ],
                    "declare": false,
                    "start": 2609,
                    "end": 2645
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
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2662,
                                "end": 2670
                              },
                              "typeArguments": null,
                              "start": 2662,
                              "end": 2670
                            },
                            "start": 2660,
                            "end": 2670
                          },
                          "start": 2658,
                          "end": 2670
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2673,
                            "end": 2682
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2686,
                            "end": 2689
                          },
                          "start": 2673,
                          "end": 2689
                        },
                        "definite": false,
                        "start": 2658,
                        "end": 2689
                      }
                    ],
                    "declare": false,
                    "start": 2654,
                    "end": 2690
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2700,
                        "end": 2701
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2702,
                        "end": 2703
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2700,
                      "end": 2703
                    },
                    "directive": null,
                    "start": 2700,
                    "end": 2704
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2792,
                        "end": 2794
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2795,
                        "end": 2796
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2792,
                      "end": 2796
                    },
                    "directive": null,
                    "start": 2792,
                    "end": 2797
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2884,
                        "end": 2886
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2887,
                        "end": 2888
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2884,
                      "end": 2888
                    },
                    "directive": null,
                    "start": 2884,
                    "end": 2889
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2976,
                        "end": 2978
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2979,
                        "end": 2980
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2976,
                      "end": 2980
                    },
                    "directive": null,
                    "start": 2976,
                    "end": 2981
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3045,
                        "end": 3047
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3048,
                        "end": 3049
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3045,
                      "end": 3049
                    },
                    "directive": null,
                    "start": 3045,
                    "end": 3050
                  }
                ],
                "start": 2469,
                "end": 3134
              },
              "expression": false,
              "start": 2466,
              "end": 3134
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2459,
            "end": 3134
          }
        ],
        "start": 2427,
        "end": 3136
      },
      "abstract": false,
      "declare": false,
      "start": 2395,
      "end": 3136
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3144,
        "end": 3152
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3161,
        "end": 3169
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3176,
              "end": 3183
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3203,
                                "end": 3207
                              },
                              "typeArguments": null,
                              "start": 3203,
                              "end": 3207
                            },
                            "start": 3201,
                            "end": 3207
                          },
                          "start": 3200,
                          "end": 3207
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3210,
                            "end": 3219
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3223,
                            "end": 3226
                          },
                          "start": 3210,
                          "end": 3226
                        },
                        "definite": false,
                        "start": 3200,
                        "end": 3226
                      }
                    ],
                    "declare": false,
                    "start": 3196,
                    "end": 3227
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
                          "name": "d1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3244,
                                "end": 3252
                              },
                              "typeArguments": null,
                              "start": 3244,
                              "end": 3252
                            },
                            "start": 3242,
                            "end": 3252
                          },
                          "start": 3240,
                          "end": 3252
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3255,
                            "end": 3264
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3268,
                            "end": 3271
                          },
                          "start": 3255,
                          "end": 3271
                        },
                        "definite": false,
                        "start": 3240,
                        "end": 3271
                      }
                    ],
                    "declare": false,
                    "start": 3236,
                    "end": 3272
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
                          "name": "d2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3289,
                                "end": 3297
                              },
                              "typeArguments": null,
                              "start": 3289,
                              "end": 3297
                            },
                            "start": 3287,
                            "end": 3297
                          },
                          "start": 3285,
                          "end": 3297
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3300,
                            "end": 3309
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3313,
                            "end": 3316
                          },
                          "start": 3300,
                          "end": 3316
                        },
                        "definite": false,
                        "start": 3285,
                        "end": 3316
                      }
                    ],
                    "declare": false,
                    "start": 3281,
                    "end": 3317
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
                          "name": "d3",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3334,
                                "end": 3342
                              },
                              "typeArguments": null,
                              "start": 3334,
                              "end": 3342
                            },
                            "start": 3332,
                            "end": 3342
                          },
                          "start": 3330,
                          "end": 3342
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3345,
                            "end": 3354
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3358,
                            "end": 3361
                          },
                          "start": 3345,
                          "end": 3361
                        },
                        "definite": false,
                        "start": 3330,
                        "end": 3361
                      }
                    ],
                    "declare": false,
                    "start": 3326,
                    "end": 3362
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
                          "name": "d4",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3379,
                                "end": 3387
                              },
                              "typeArguments": null,
                              "start": 3379,
                              "end": 3387
                            },
                            "start": 3377,
                            "end": 3387
                          },
                          "start": 3375,
                          "end": 3387
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3390,
                            "end": 3399
                          },
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3403,
                            "end": 3406
                          },
                          "start": 3390,
                          "end": 3406
                        },
                        "definite": false,
                        "start": 3375,
                        "end": 3406
                      }
                    ],
                    "declare": false,
                    "start": 3371,
                    "end": 3407
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3417,
                        "end": 3418
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3419,
                        "end": 3420
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3417,
                      "end": 3420
                    },
                    "directive": null,
                    "start": 3417,
                    "end": 3421
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3509,
                        "end": 3511
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3512,
                        "end": 3513
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3509,
                      "end": 3513
                    },
                    "directive": null,
                    "start": 3509,
                    "end": 3514
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3601,
                        "end": 3603
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3604,
                        "end": 3605
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3601,
                      "end": 3605
                    },
                    "directive": null,
                    "start": 3601,
                    "end": 3606
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3693,
                        "end": 3695
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3696,
                        "end": 3697
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3693,
                      "end": 3697
                    },
                    "directive": null,
                    "start": 3693,
                    "end": 3698
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3821,
                        "end": 3823
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3824,
                        "end": 3825
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3821,
                      "end": 3825
                    },
                    "directive": null,
                    "start": 3821,
                    "end": 3826
                  }
                ],
                "start": 3186,
                "end": 3956
              },
              "expression": false,
              "start": 3183,
              "end": 3956
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3176,
            "end": 3956
          }
        ],
        "start": 3170,
        "end": 3958
      },
      "abstract": false,
      "declare": false,
      "start": 3138,
      "end": 3958
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3968,
                  "end": 3972
                },
                "typeArguments": null,
                "start": 3968,
                "end": 3972
              },
              "start": 3966,
              "end": 3972
            },
            "start": 3965,
            "end": 3972
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 3975,
              "end": 3984
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 3988,
              "end": 3991
            },
            "start": 3975,
            "end": 3991
          },
          "definite": false,
          "start": 3965,
          "end": 3991
        }
      ],
      "declare": false,
      "start": 3961,
      "end": 3992
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4001,
                  "end": 4009
                },
                "typeArguments": null,
                "start": 4001,
                "end": 4009
              },
              "start": 3999,
              "end": 4009
            },
            "start": 3997,
            "end": 4009
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4012,
              "end": 4021
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4025,
              "end": 4028
            },
            "start": 4012,
            "end": 4028
          },
          "definite": false,
          "start": 3997,
          "end": 4028
        }
      ],
      "declare": false,
      "start": 3993,
      "end": 4029
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4038,
                  "end": 4046
                },
                "typeArguments": null,
                "start": 4038,
                "end": 4046
              },
              "start": 4036,
              "end": 4046
            },
            "start": 4034,
            "end": 4046
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4049,
              "end": 4058
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4062,
              "end": 4065
            },
            "start": 4049,
            "end": 4065
          },
          "definite": false,
          "start": 4034,
          "end": 4065
        }
      ],
      "declare": false,
      "start": 4030,
      "end": 4066
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4075,
                  "end": 4083
                },
                "typeArguments": null,
                "start": 4075,
                "end": 4083
              },
              "start": 4073,
              "end": 4083
            },
            "start": 4071,
            "end": 4083
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4086,
              "end": 4095
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4099,
              "end": 4102
            },
            "start": 4086,
            "end": 4102
          },
          "definite": false,
          "start": 4071,
          "end": 4102
        }
      ],
      "declare": false,
      "start": 4067,
      "end": 4103
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4112,
                  "end": 4120
                },
                "typeArguments": null,
                "start": 4112,
                "end": 4120
              },
              "start": 4110,
              "end": 4120
            },
            "start": 4108,
            "end": 4120
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4123,
              "end": 4132
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4136,
              "end": 4139
            },
            "start": 4123,
            "end": 4139
          },
          "definite": false,
          "start": 4108,
          "end": 4139
        }
      ],
      "declare": false,
      "start": 4104,
      "end": 4140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4142,
          "end": 4143
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4144,
          "end": 4145
        },
        "optional": false,
        "computed": false,
        "start": 4142,
        "end": 4145
      },
      "directive": null,
      "start": 4142,
      "end": 4146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d1",
          "optional": false,
          "typeAnnotation": null,
          "start": 4260,
          "end": 4262
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4263,
          "end": 4264
        },
        "optional": false,
        "computed": false,
        "start": 4260,
        "end": 4264
      },
      "directive": null,
      "start": 4260,
      "end": 4265
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null,
          "start": 4378,
          "end": 4380
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4381,
          "end": 4382
        },
        "optional": false,
        "computed": false,
        "start": 4378,
        "end": 4382
      },
      "directive": null,
      "start": 4378,
      "end": 4383
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d3",
          "optional": false,
          "typeAnnotation": null,
          "start": 4496,
          "end": 4498
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4499,
          "end": 4500
        },
        "optional": false,
        "computed": false,
        "start": 4496,
        "end": 4500
      },
      "directive": null,
      "start": 4496,
      "end": 4501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d4",
          "optional": false,
          "typeAnnotation": null,
          "start": 4614,
          "end": 4616
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4617,
          "end": 4618
        },
        "optional": false,
        "computed": false,
        "start": 4614,
        "end": 4618
      },
      "directive": null,
      "start": 4614,
      "end": 4619
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4731
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
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 76,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 110,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 121,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 155,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 166,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 176,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 192,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 200,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 211,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 237,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 241,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 245,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 256,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 266,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 688,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 694,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 703,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 722,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 749,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 756,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 766,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 769,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 782,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 786,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 790,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 801,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 811,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 814,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 827,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 831,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 835,
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
    "value": "undefined",
    "start": 846,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 856,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 872,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 880,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 891,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 901,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 904,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 917,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 921,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 925,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 936,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 946,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 949,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1055,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1193,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1413,
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
    "value": "x",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1506,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1512,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1521,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1529,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1540,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1547,
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
    "value": "{",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1560,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1567,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1574,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1584,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1587,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1600,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1608,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1619,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1629,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1632,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1649,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1653,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1664,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1674,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1677,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1694,
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
    "value": "Derived3",
    "start": 1698,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1709,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1719,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1722,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1735,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1739,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 1743,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1754,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1764,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1767,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1873,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1965,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2103,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2105,
    "end": 2106
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
    "type": "Identifier",
    "value": "d4",
    "start": 2231,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2395,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2401,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2410,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 2418,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2433,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2447,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 2459,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2479,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2486,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2493,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2503,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2506,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2519,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2523,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 2527,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2538,
    "end": 2547
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2548,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2551,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2564,
    "end": 2567
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2572,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2583,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2593,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2596,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2609,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2613,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2617,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2628,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2638,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2641,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2654,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2658,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 2662,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2673,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2683,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2686,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2792,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2796,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2884,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2976,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 3045,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3138,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 3144,
    "end": 3152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3153,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3161,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "method4",
    "start": 3176,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3196,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3203,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3210,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3220,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3223,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3236,
    "end": 3239
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3240,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 3244,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3255,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3265,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3268,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3281,
    "end": 3284
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3285,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3289,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3300,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3310,
    "end": 3312
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3313,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3326,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3330,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 3334,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3345,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3355,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3358,
    "end": 3361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3371,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 3375,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 3379,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3390,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3400,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3403,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3509,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3601,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3693,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 3821,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3961,
    "end": 3964
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3968,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3975,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3985,
    "end": 3987
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3988,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3993,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3997,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 4001,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4012,
    "end": 4021
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4022,
    "end": 4024
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4025,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4030,
    "end": 4033
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 4034,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 4038,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4049,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4059,
    "end": 4061
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4062,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4067,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 4071,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 4075,
    "end": 4083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4086,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4096,
    "end": 4098
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4099,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4104,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 4108,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 4112,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4123,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4133,
    "end": 4135
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4136,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 4260,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 4378,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 4496,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 4614,
    "end": 4616
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4617,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4618,
    "end": 4619
  }
]
```
