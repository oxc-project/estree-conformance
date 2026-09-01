__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidUniqueType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 56,
                  "end": 62
                },
                "start": 49,
                "end": 62
              },
              "start": 47,
              "end": 62
            },
            "start": 30,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 30,
          "end": 62
        }
      ],
      "declare": true,
      "start": 16,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 89,
                  "end": 95
                },
                "start": 82,
                "end": 95
              },
              "start": 80,
              "end": 95
            },
            "start": 78,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 78,
          "end": 95
        }
      ],
      "declare": true,
      "start": 64,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidLetType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 132,
                  "end": 138
                },
                "start": 125,
                "end": 138
              },
              "start": 123,
              "end": 138
            },
            "start": 109,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 138
        }
      ],
      "declare": true,
      "start": 97,
      "end": 139
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
            "name": "invalidVarType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 175,
                  "end": 181
                },
                "start": 168,
                "end": 181
              },
              "start": 166,
              "end": 181
            },
            "start": 152,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 181
        }
      ],
      "declare": true,
      "start": 140,
      "end": 182
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidArgType",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 254
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 267,
                "end": 273
              },
              "start": 260,
              "end": 273
            },
            "start": 258,
            "end": 273
          },
          "start": 255,
          "end": 273
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 276,
          "end": 280
        },
        "start": 274,
        "end": 280
      },
      "body": null,
      "expression": false,
      "start": 223,
      "end": 281
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidRestArgType",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 317
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 324
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 334,
                  "end": 340
                },
                "start": 327,
                "end": 340
              },
              "start": 326,
              "end": 343
            },
            "start": 324,
            "end": 343
          },
          "value": null,
          "start": 318,
          "end": 343
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 346,
          "end": 350
        },
        "start": 344,
        "end": 350
      },
      "body": null,
      "expression": false,
      "start": 282,
      "end": 351
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 386
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "unique",
          "typeAnnotation": {
            "type": "TSSymbolKeyword",
            "start": 397,
            "end": 403
          },
          "start": 390,
          "end": 403
        },
        "start": 388,
        "end": 403
      },
      "body": null,
      "expression": false,
      "start": 352,
      "end": 404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidThisType",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 437
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 451,
                "end": 457
              },
              "start": 444,
              "end": 457
            },
            "start": 442,
            "end": 457
          },
          "start": 438,
          "end": 457
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 460,
          "end": 464
        },
        "start": 458,
        "end": 464
      },
      "body": null,
      "expression": false,
      "start": 405,
      "end": 465
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidTypePredicate",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 503
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 507,
              "end": 510
            },
            "start": 505,
            "end": 510
          },
          "start": 504,
          "end": 510
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 514
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 525,
                "end": 531
              },
              "start": 518,
              "end": 531
            },
            "start": 518,
            "end": 531
          },
          "start": 513,
          "end": 531
        },
        "start": 511,
        "end": 531
      },
      "body": null,
      "expression": false,
      "start": 466,
      "end": 532
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidTypeParameterConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 580
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 582
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 598,
                "end": 604
              },
              "start": 591,
              "end": 604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 581,
            "end": 604
          }
        ],
        "start": 580,
        "end": 605
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 609,
          "end": 613
        },
        "start": 607,
        "end": 613
      },
      "body": null,
      "expression": false,
      "start": 533,
      "end": 614
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidTypeParameterDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 659
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "constraint": null,
            "default": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 671,
                "end": 677
              },
              "start": 664,
              "end": 677
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 677
          }
        ],
        "start": 659,
        "end": 678
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 682,
          "end": 686
        },
        "start": 680,
        "end": 686
      },
      "body": null,
      "expression": false,
      "start": 615,
      "end": 687
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 706,
        "end": 718
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 736
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "invalidConstructorArgType",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 771,
                        "end": 777
                      },
                      "start": 764,
                      "end": 777
                    },
                    "start": 762,
                    "end": 777
                  },
                  "start": 737,
                  "end": 777
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 779,
                "end": 781
              },
              "expression": false,
              "start": 736,
              "end": 781
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 725,
            "end": 781
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReadonlyPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 796,
              "end": 823
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 832,
                  "end": 838
                },
                "start": 825,
                "end": 838
              },
              "start": 823,
              "end": 838
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null,
            "start": 787,
            "end": 839
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 863
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 872,
                  "end": 878
                },
                "start": 865,
                "end": 878
              },
              "start": 863,
              "end": 878
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 844,
            "end": 879
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 898
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 911,
                        "end": 917
                      },
                      "start": 904,
                      "end": 917
                    },
                    "start": 902,
                    "end": 917
                  },
                  "start": 899,
                  "end": 917
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 920,
                  "end": 924
                },
                "start": 918,
                "end": 924
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 927,
                    "end": 934
                  }
                ],
                "start": 925,
                "end": 936
              },
              "expression": false,
              "start": 898,
              "end": 936
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 884,
            "end": 936
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 959
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 963,
                    "end": 967
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 977,
                          "end": 983
                        },
                        "start": 970,
                        "end": 983
                      },
                      "start": 969,
                      "end": 986
                    },
                    "start": 967,
                    "end": 986
                  },
                  "value": null,
                  "start": 960,
                  "end": 986
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 989,
                  "end": 993
                },
                "start": 987,
                "end": 993
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 996,
                    "end": 1003
                  }
                ],
                "start": 994,
                "end": 1005
              },
              "expression": false,
              "start": 959,
              "end": 1005
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 941,
            "end": 1005
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1027
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1038,
                    "end": 1044
                  },
                  "start": 1031,
                  "end": 1044
                },
                "start": 1029,
                "end": 1044
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1047,
                    "end": 1054
                  }
                ],
                "start": 1045,
                "end": 1056
              },
              "expression": false,
              "start": 1027,
              "end": 1056
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1010,
            "end": 1056
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1061,
              "end": 1076
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1090,
                        "end": 1096
                      },
                      "start": 1083,
                      "end": 1096
                    },
                    "start": 1081,
                    "end": 1096
                  },
                  "start": 1077,
                  "end": 1096
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1099,
                  "end": 1103
                },
                "start": 1097,
                "end": 1103
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1106,
                    "end": 1113
                  }
                ],
                "start": 1104,
                "end": 1115
              },
              "expression": false,
              "start": 1076,
              "end": 1115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1061,
            "end": 1115
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1140
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1144,
                      "end": 1147
                    },
                    "start": 1142,
                    "end": 1147
                  },
                  "start": 1141,
                  "end": 1147
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1162,
                        "end": 1168
                      },
                      "start": 1155,
                      "end": 1168
                    },
                    "start": 1155,
                    "end": 1168
                  },
                  "start": 1150,
                  "end": 1168
                },
                "start": 1148,
                "end": 1168
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1171,
                    "end": 1178
                  }
                ],
                "start": 1169,
                "end": 1180
              },
              "expression": false,
              "start": 1140,
              "end": 1180
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1120,
            "end": 1180
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1185,
              "end": 1215
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1216,
                      "end": 1217
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1233,
                        "end": 1239
                      },
                      "start": 1226,
                      "end": 1239
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1216,
                    "end": 1239
                  }
                ],
                "start": 1215,
                "end": 1240
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1244,
                  "end": 1248
                },
                "start": 1242,
                "end": 1248
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1251,
                    "end": 1258
                  }
                ],
                "start": 1249,
                "end": 1260
              },
              "expression": false,
              "start": 1215,
              "end": 1260
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1185,
            "end": 1260
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1292
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1293,
                      "end": 1294
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1304,
                        "end": 1310
                      },
                      "start": 1297,
                      "end": 1310
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1293,
                    "end": 1310
                  }
                ],
                "start": 1292,
                "end": 1311
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1315,
                  "end": 1319
                },
                "start": 1313,
                "end": 1319
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1322,
                    "end": 1329
                  }
                ],
                "start": 1320,
                "end": 1331
              },
              "expression": false,
              "start": 1292,
              "end": 1331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1265,
            "end": 1331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1340,
              "end": 1353
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1364,
                    "end": 1370
                  },
                  "start": 1357,
                  "end": 1370
                },
                "start": 1355,
                "end": 1370
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1373,
                    "end": 1380
                  }
                ],
                "start": 1371,
                "end": 1382
              },
              "expression": false,
              "start": 1353,
              "end": 1382
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1336,
            "end": 1382
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidSetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1404
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1417,
                        "end": 1423
                      },
                      "start": 1410,
                      "end": 1423
                    },
                    "start": 1408,
                    "end": 1423
                  },
                  "start": 1405,
                  "end": 1423
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1427,
                    "end": 1434
                  }
                ],
                "start": 1425,
                "end": 1436
              },
              "expression": false,
              "start": 1404,
              "end": 1436
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1387,
            "end": 1436
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1474
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1483,
                  "end": 1489
                },
                "start": 1476,
                "end": 1489
              },
              "start": 1474,
              "end": 1489
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1442,
            "end": 1490
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1502,
              "end": 1522
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1535,
                        "end": 1541
                      },
                      "start": 1528,
                      "end": 1541
                    },
                    "start": 1526,
                    "end": 1541
                  },
                  "start": 1523,
                  "end": 1541
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1544,
                  "end": 1548
                },
                "start": 1542,
                "end": 1548
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1551,
                    "end": 1558
                  }
                ],
                "start": 1549,
                "end": 1560
              },
              "expression": false,
              "start": 1522,
              "end": 1560
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1495,
            "end": 1560
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1596
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1600,
                    "end": 1604
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeOperator",
                        "operator": "unique",
                        "typeAnnotation": {
                          "type": "TSSymbolKeyword",
                          "start": 1614,
                          "end": 1620
                        },
                        "start": 1607,
                        "end": 1620
                      },
                      "start": 1606,
                      "end": 1623
                    },
                    "start": 1604,
                    "end": 1623
                  },
                  "value": null,
                  "start": 1597,
                  "end": 1623
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1626,
                  "end": 1630
                },
                "start": 1624,
                "end": 1630
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1633,
                    "end": 1640
                  }
                ],
                "start": 1631,
                "end": 1642
              },
              "expression": false,
              "start": 1596,
              "end": 1642
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1565,
            "end": 1642
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1654,
              "end": 1677
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 1688,
                    "end": 1694
                  },
                  "start": 1681,
                  "end": 1694
                },
                "start": 1679,
                "end": 1694
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1697,
                    "end": 1704
                  }
                ],
                "start": 1695,
                "end": 1706
              },
              "expression": false,
              "start": 1677,
              "end": 1706
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1647,
            "end": 1706
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1739
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1753,
                        "end": 1759
                      },
                      "start": 1746,
                      "end": 1759
                    },
                    "start": 1744,
                    "end": 1759
                  },
                  "start": 1740,
                  "end": 1759
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1762,
                  "end": 1766
                },
                "start": 1760,
                "end": 1766
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1769,
                    "end": 1776
                  }
                ],
                "start": 1767,
                "end": 1778
              },
              "expression": false,
              "start": 1739,
              "end": 1778
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1711,
            "end": 1778
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1790,
              "end": 1816
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1820,
                      "end": 1823
                    },
                    "start": 1818,
                    "end": 1823
                  },
                  "start": 1817,
                  "end": 1823
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1826,
                    "end": 1827
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1838,
                        "end": 1844
                      },
                      "start": 1831,
                      "end": 1844
                    },
                    "start": 1831,
                    "end": 1844
                  },
                  "start": 1826,
                  "end": 1844
                },
                "start": 1824,
                "end": 1844
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1847,
                    "end": 1854
                  }
                ],
                "start": 1845,
                "end": 1856
              },
              "expression": false,
              "start": 1816,
              "end": 1856
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1783,
            "end": 1856
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1904
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1905,
                      "end": 1906
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 1922,
                        "end": 1928
                      },
                      "start": 1915,
                      "end": 1928
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1905,
                    "end": 1928
                  }
                ],
                "start": 1904,
                "end": 1929
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1933,
                  "end": 1937
                },
                "start": 1931,
                "end": 1937
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1940,
                    "end": 1947
                  }
                ],
                "start": 1938,
                "end": 1949
              },
              "expression": false,
              "start": 1904,
              "end": 1949
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1861,
            "end": 1949
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 1961,
              "end": 1994
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1995,
                      "end": 1996
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2006,
                        "end": 2012
                      },
                      "start": 1999,
                      "end": 2012
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1995,
                    "end": 2012
                  }
                ],
                "start": 1994,
                "end": 2013
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2017,
                  "end": 2021
                },
                "start": 2015,
                "end": 2021
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2024,
                    "end": 2031
                  }
                ],
                "start": 2022,
                "end": 2033
              },
              "expression": false,
              "start": 1994,
              "end": 2033
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1954,
            "end": 2033
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticGetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 2049,
              "end": 2068
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 2079,
                    "end": 2085
                  },
                  "start": 2072,
                  "end": 2085
                },
                "start": 2070,
                "end": 2085
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2088,
                    "end": 2095
                  }
                ],
                "start": 2086,
                "end": 2097
              },
              "expression": false,
              "start": 2068,
              "end": 2097
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2038,
            "end": 2097
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidStaticSetter",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2132
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2145,
                        "end": 2151
                      },
                      "start": 2138,
                      "end": 2151
                    },
                    "start": 2136,
                    "end": 2151
                  },
                  "start": 2133,
                  "end": 2151
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2155,
                    "end": 2162
                  }
                ],
                "start": 2153,
                "end": 2164
              },
              "expression": false,
              "start": 2132,
              "end": 2164
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2102,
            "end": 2164
          }
        ],
        "start": 719,
        "end": 2166
      },
      "abstract": false,
      "declare": false,
      "start": 700,
      "end": 2166
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 2192,
        "end": 2208
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2215,
              "end": 2234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2243,
                  "end": 2249
                },
                "start": 2236,
                "end": 2249
              },
              "start": 2234,
              "end": 2249
            },
            "accessibility": null,
            "static": false,
            "start": 2215,
            "end": 2250
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2255,
              "end": 2269
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2282,
                      "end": 2288
                    },
                    "start": 2275,
                    "end": 2288
                  },
                  "start": 2273,
                  "end": 2288
                },
                "start": 2270,
                "end": 2288
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2291,
                "end": 2295
              },
              "start": 2289,
              "end": 2295
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2255,
            "end": 2296
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2301,
              "end": 2319
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2323,
                  "end": 2327
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2337,
                        "end": 2343
                      },
                      "start": 2330,
                      "end": 2343
                    },
                    "start": 2329,
                    "end": 2346
                  },
                  "start": 2327,
                  "end": 2346
                },
                "value": null,
                "start": 2320,
                "end": 2346
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2349,
                "end": 2353
              },
              "start": 2347,
              "end": 2353
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2301,
            "end": 2354
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2359,
              "end": 2376
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2387,
                  "end": 2393
                },
                "start": 2380,
                "end": 2393
              },
              "start": 2378,
              "end": 2393
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2359,
            "end": 2394
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2399,
              "end": 2414
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2428,
                      "end": 2434
                    },
                    "start": 2421,
                    "end": 2434
                  },
                  "start": 2419,
                  "end": 2434
                },
                "start": 2415,
                "end": 2434
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2399,
            "end": 2436
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2441,
              "end": 2461
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2465,
                    "end": 2468
                  },
                  "start": 2463,
                  "end": 2468
                },
                "start": 2462,
                "end": 2468
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2471,
                  "end": 2472
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2483,
                      "end": 2489
                    },
                    "start": 2476,
                    "end": 2489
                  },
                  "start": 2476,
                  "end": 2489
                },
                "start": 2471,
                "end": 2489
              },
              "start": 2469,
              "end": 2489
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2441,
            "end": 2489
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 2494,
              "end": 2524
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2525,
                    "end": 2526
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2542,
                      "end": 2548
                    },
                    "start": 2535,
                    "end": 2548
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2525,
                  "end": 2548
                }
              ],
              "start": 2524,
              "end": 2549
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2553,
                "end": 2557
              },
              "start": 2551,
              "end": 2557
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2494,
            "end": 2558
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 2563,
              "end": 2590
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2591,
                    "end": 2592
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2602,
                      "end": 2608
                    },
                    "start": 2595,
                    "end": 2608
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2591,
                  "end": 2608
                }
              ],
              "start": 2590,
              "end": 2609
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2613,
                "end": 2617
              },
              "start": 2611,
              "end": 2617
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2563,
            "end": 2618
          }
        ],
        "start": 2209,
        "end": 2620
      },
      "declare": false,
      "start": 2182,
      "end": 2620
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidTypeLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 2644,
        "end": 2662
      },
      "typeParameters": null,
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
              "name": "invalidPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2671,
              "end": 2690
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2699,
                  "end": 2705
                },
                "start": 2692,
                "end": 2705
              },
              "start": 2690,
              "end": 2705
            },
            "accessibility": null,
            "static": false,
            "start": 2671,
            "end": 2706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2711,
              "end": 2725
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2738,
                      "end": 2744
                    },
                    "start": 2731,
                    "end": 2744
                  },
                  "start": 2729,
                  "end": 2744
                },
                "start": 2726,
                "end": 2744
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2747,
                "end": 2751
              },
              "start": 2745,
              "end": 2751
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2711,
            "end": 2752
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidRestArgType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2757,
              "end": 2775
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2779,
                  "end": 2783
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 2793,
                        "end": 2799
                      },
                      "start": 2786,
                      "end": 2799
                    },
                    "start": 2785,
                    "end": 2802
                  },
                  "start": 2783,
                  "end": 2802
                },
                "value": null,
                "start": 2776,
                "end": 2802
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 2805,
                "end": 2809
              },
              "start": 2803,
              "end": 2809
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2757,
            "end": 2810
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2815,
              "end": 2832
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2843,
                  "end": 2849
                },
                "start": 2836,
                "end": 2849
              },
              "start": 2834,
              "end": 2849
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2815,
            "end": 2850
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2855,
              "end": 2870
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2884,
                      "end": 2890
                    },
                    "start": 2877,
                    "end": 2890
                  },
                  "start": 2875,
                  "end": 2890
                },
                "start": 2871,
                "end": 2890
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2855,
            "end": 2892
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypePredicate",
              "optional": false,
              "typeAnnotation": null,
              "start": 2897,
              "end": 2917
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2921,
                    "end": 2924
                  },
                  "start": 2919,
                  "end": 2924
                },
                "start": 2918,
                "end": 2924
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2927,
                  "end": 2928
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2939,
                      "end": 2945
                    },
                    "start": 2932,
                    "end": 2945
                  },
                  "start": 2932,
                  "end": 2945
                },
                "start": 2927,
                "end": 2945
              },
              "start": 2925,
              "end": 2945
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2897,
            "end": 2945
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterConstraint",
              "optional": false,
              "typeAnnotation": null,
              "start": 2950,
              "end": 2980
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2981,
                    "end": 2982
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 2998,
                      "end": 3004
                    },
                    "start": 2991,
                    "end": 3004
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2981,
                  "end": 3004
                }
              ],
              "start": 2980,
              "end": 3005
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3009,
                "end": 3013
              },
              "start": 3007,
              "end": 3013
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2950,
            "end": 3014
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "invalidTypeParameterDefault",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3046
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3047,
                    "end": 3048
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3058,
                      "end": 3064
                    },
                    "start": 3051,
                    "end": 3064
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3047,
                  "end": 3064
                }
              ],
              "start": 3046,
              "end": 3065
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3069,
                "end": 3073
              },
              "start": 3067,
              "end": 3073
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3019,
            "end": 3074
          }
        ],
        "start": 2665,
        "end": 3076
      },
      "declare": false,
      "start": 2639,
      "end": 3077
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 3098,
        "end": 3110
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "unique",
        "typeAnnotation": {
          "type": "TSSymbolKeyword",
          "start": 3120,
          "end": 3126
        },
        "start": 3113,
        "end": 3126
      },
      "declare": false,
      "start": 3093,
      "end": 3127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidAliasTypeParameterConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 3133,
        "end": 3168
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3169,
              "end": 3170
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 3186,
                "end": 3192
              },
              "start": 3179,
              "end": 3192
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3169,
            "end": 3192
          }
        ],
        "start": 3168,
        "end": 3193
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3196,
        "end": 3201
      },
      "declare": false,
      "start": 3128,
      "end": 3202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InvalidAliasTypeParameterDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 3208,
        "end": 3240
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3241,
              "end": 3242
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "unique",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 3258,
                "end": 3264
              },
              "start": 3251,
              "end": 3264
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3241,
            "end": 3264
          }
        ],
        "start": 3240,
        "end": 3265
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3268,
        "end": 3273
      },
      "declare": false,
      "start": 3203,
      "end": 3274
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidTypeArgument",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3330,
                  "end": 3337
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "unique",
                      "typeAnnotation": {
                        "type": "TSSymbolKeyword",
                        "start": 3345,
                        "end": 3351
                      },
                      "start": 3338,
                      "end": 3351
                    }
                  ],
                  "start": 3337,
                  "end": 3352
                },
                "start": 3330,
                "end": 3352
              },
              "start": 3328,
              "end": 3352
            },
            "start": 3309,
            "end": 3352
          },
          "init": null,
          "definite": false,
          "start": 3309,
          "end": 3352
        }
      ],
      "declare": true,
      "start": 3295,
      "end": 3353
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 3394,
                    "end": 3400
                  },
                  "start": 3387,
                  "end": 3400
                },
                "start": 3386,
                "end": 3403
              },
              "start": 3384,
              "end": 3403
            },
            "start": 3368,
            "end": 3403
          },
          "init": null,
          "definite": false,
          "start": 3368,
          "end": 3403
        }
      ],
      "declare": true,
      "start": 3354,
      "end": 3404
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidTupleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3445,
                      "end": 3451
                    },
                    "start": 3438,
                    "end": 3451
                  }
                ],
                "start": 3437,
                "end": 3452
              },
              "start": 3435,
              "end": 3452
            },
            "start": 3419,
            "end": 3452
          },
          "init": null,
          "definite": false,
          "start": 3419,
          "end": 3452
        }
      ],
      "declare": true,
      "start": 3405,
      "end": 3453
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidMappedType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3507,
                  "end": 3508
                },
                "constraint": {
                  "type": "TSStringKeyword",
                  "start": 3512,
                  "end": 3518
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 3528,
                    "end": 3534
                  },
                  "start": 3521,
                  "end": 3534
                },
                "optional": false,
                "readonly": null,
                "start": 3504,
                "end": 3536
              },
              "start": 3502,
              "end": 3536
            },
            "start": 3485,
            "end": 3536
          },
          "init": null,
          "definite": false,
          "start": 3485,
          "end": 3536
        }
      ],
      "declare": true,
      "start": 3471,
      "end": 3537
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3597,
                      "end": 3603
                    },
                    "start": 3590,
                    "end": 3603
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3613,
                      "end": 3619
                    },
                    "start": 3606,
                    "end": 3619
                  }
                ],
                "start": 3590,
                "end": 3619
              },
              "start": 3588,
              "end": 3619
            },
            "start": 3576,
            "end": 3619
          },
          "init": null,
          "definite": false,
          "start": 3576,
          "end": 3619
        }
      ],
      "declare": true,
      "start": 3562,
      "end": 3620
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3663,
                      "end": 3669
                    },
                    "start": 3656,
                    "end": 3669
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "unique",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 3679,
                      "end": 3685
                    },
                    "start": 3672,
                    "end": 3685
                  }
                ],
                "start": 3656,
                "end": 3685
              },
              "start": 3654,
              "end": 3685
            },
            "start": 3635,
            "end": 3685
          },
          "init": null,
          "definite": false,
          "start": 3635,
          "end": 3685
        }
      ],
      "declare": true,
      "start": 3621,
      "end": 3686
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldNotBeAssignable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3802,
                "end": 3808
              },
              "start": 3800,
              "end": 3808
            },
            "start": 3779,
            "end": 3808
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 3811,
              "end": 3817
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3811,
            "end": 3819
          },
          "definite": false,
          "start": 3779,
          "end": 3819
        }
      ],
      "declare": false,
      "start": 3773,
      "end": 3820
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 3820
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 16,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 24,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "invalidUniqueType",
    "start": 30,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 64,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 82,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 89,
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
    "value": "let",
    "start": 105,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "invalidLetType",
    "start": 109,
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
    "value": "unique",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "invalidVarType",
    "start": 152,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 168,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 223,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 231,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 240,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 260,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 267,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 282,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 290,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 299,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 318,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 327,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 352,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 360,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 369,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 390,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 405,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 413,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 422,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 438,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 444,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 466,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 474,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 483,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 507,
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
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 515,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 518,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 533,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 541,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 550,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 583,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 591,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 609,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 615,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 623,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 632,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 664,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 671,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 700,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "InvalidClass",
    "start": 706,
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
    "value": "constructor",
    "start": 725,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "invalidConstructorArgType",
    "start": 737,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 764,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 771,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 787,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "invalidReadonlyPropertyType",
    "start": 796,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 825,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 832,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "invalidPropertyType",
    "start": 844,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 865,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 884,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 904,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 911,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 920,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 941,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 960,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 963,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 970,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 977,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 989,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 1010,
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
    "value": ":",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1047,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 1061,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1077,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1090,
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
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1099,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1106,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 1120,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 1185,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1218,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1226,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1233,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1244,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1251,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 1265,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1297,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1315,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1322,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "invalidGetter",
    "start": 1340,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1357,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1364,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1387,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "invalidSetter",
    "start": 1391,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1410,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1417,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1442,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "invalidStaticPropertyType",
    "start": 1449,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1476,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1495,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "invalidStaticArgType",
    "start": 1502,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1528,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1535,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1544,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "return",
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
    "value": "static",
    "start": 1565,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "invalidStaticRestArgType",
    "start": 1572,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1597,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1600,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1607,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1614,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1626,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1633,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1647,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "invalidStaticReturnType",
    "start": 1654,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1681,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1688,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1697,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1711,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "invalidStaticThisType",
    "start": 1718,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1740,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1746,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1753,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1762,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1769,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1783,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "invalidStaticTypePredicate",
    "start": 1790,
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
    "value": "n",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1828,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1831,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1838,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1847,
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
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1861,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "invalidStaticTypeParameterConstraint",
    "start": 1868,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1907,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1915,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1922,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1933,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1940,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1954,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "invalidStaticTypeParameterDefault",
    "start": 1961,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1999,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2006,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2017,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2024,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2038,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2045,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "invalidStaticGetter",
    "start": 2049,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2072,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2079,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2102,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2109,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "invalidStaticSetter",
    "start": 2113,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2133,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2138,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2145,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2155,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2182,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "InvalidInterface",
    "start": 2192,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "invalidPropertyType",
    "start": 2215,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2236,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 2255,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2270,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2275,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2282,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2291,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 2301,
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
    "value": "...",
    "start": 2320,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2323,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2330,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2337,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2349,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 2359,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2380,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2387,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 2399,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2415,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2421,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2428,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 2441,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2465,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2476,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2483,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 2494,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2527,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2535,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2542,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2553,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 2563,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2595,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2602,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2613,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2639,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "InvalidTypeLiteral",
    "start": 2644,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "invalidPropertyType",
    "start": 2671,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2692,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2699,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "invalidArgType",
    "start": 2711,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2726,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2731,
    "end": 2737
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2738,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2747,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "invalidRestArgType",
    "start": 2757,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2776,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2779,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2786,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2793,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2805,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "invalidReturnType",
    "start": 2815,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2836,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2843,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "invalidThisType",
    "start": 2855,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2871,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2877,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2884,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "invalidTypePredicate",
    "start": 2897,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2921,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2929,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2932,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2939,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterConstraint",
    "start": 2950,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2983,
    "end": 2990
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2991,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2998,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3009,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "invalidTypeParameterDefault",
    "start": 3019,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3051,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3058,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3069,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3093,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "InvalidAlias",
    "start": 3098,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3113,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3120,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3128,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "InvalidAliasTypeParameterConstraint",
    "start": 3133,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3171,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3179,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3186,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3196,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3203,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "InvalidAliasTypeParameterDefault",
    "start": 3208,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3243,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3251,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3258,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3268,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3295,
    "end": 3302
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3303,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "invalidTypeArgument",
    "start": 3309,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3330,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3338,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3345,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3354,
    "end": 3361
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3362,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "invalidArrayType",
    "start": 3368,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3387,
    "end": 3393
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3394,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3405,
    "end": 3412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3413,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "invalidTupleType",
    "start": 3419,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3438,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3445,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3471,
    "end": 3478
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3479,
    "end": 3484
  },
  {
    "type": "Identifier",
    "value": "invalidMappedType",
    "start": 3485,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3509,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3512,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3521,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3528,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3562,
    "end": 3569
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3570,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "invalidUnion",
    "start": 3576,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3590,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3597,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3606,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3613,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3621,
    "end": 3628
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3629,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "invalidIntersection",
    "start": 3635,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3656,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3663,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 3672,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 3679,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3773,
    "end": 3778
  },
  {
    "type": "Identifier",
    "value": "shouldNotBeAssignable",
    "start": 3779,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3800,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3802,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3811,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3819,
    "end": 3820
  }
]
```
