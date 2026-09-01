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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 69
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
                            "name": "methoda",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 91
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
                                              "start": 119,
                                              "end": 123
                                            },
                                            "typeArguments": null,
                                            "start": 119,
                                            "end": 123
                                          },
                                          "start": 117,
                                          "end": 123
                                        },
                                        "start": 116,
                                        "end": 123
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 126,
                                          "end": 135
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 139,
                                          "end": 142
                                        },
                                        "start": 126,
                                        "end": 142
                                      },
                                      "definite": false,
                                      "start": 116,
                                      "end": 142
                                    }
                                  ],
                                  "declare": false,
                                  "start": 112,
                                  "end": 143
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
                                              "start": 168,
                                              "end": 176
                                            },
                                            "typeArguments": null,
                                            "start": 168,
                                            "end": 176
                                          },
                                          "start": 166,
                                          "end": 176
                                        },
                                        "start": 164,
                                        "end": 176
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 179,
                                          "end": 188
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 192,
                                          "end": 195
                                        },
                                        "start": 179,
                                        "end": 195
                                      },
                                      "definite": false,
                                      "start": 164,
                                      "end": 195
                                    }
                                  ],
                                  "declare": false,
                                  "start": 160,
                                  "end": 196
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
                                              "start": 221,
                                              "end": 229
                                            },
                                            "typeArguments": null,
                                            "start": 221,
                                            "end": 229
                                          },
                                          "start": 219,
                                          "end": 229
                                        },
                                        "start": 217,
                                        "end": 229
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 232,
                                          "end": 241
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 245,
                                          "end": 248
                                        },
                                        "start": 232,
                                        "end": 248
                                      },
                                      "definite": false,
                                      "start": 217,
                                      "end": 248
                                    }
                                  ],
                                  "declare": false,
                                  "start": 213,
                                  "end": 249
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
                                              "start": 274,
                                              "end": 282
                                            },
                                            "typeArguments": null,
                                            "start": 274,
                                            "end": 282
                                          },
                                          "start": 272,
                                          "end": 282
                                        },
                                        "start": 270,
                                        "end": 282
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 285,
                                          "end": 294
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 298,
                                          "end": 301
                                        },
                                        "start": 285,
                                        "end": 301
                                      },
                                      "definite": false,
                                      "start": 270,
                                      "end": 301
                                    }
                                  ],
                                  "declare": false,
                                  "start": 266,
                                  "end": 302
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
                                              "start": 327,
                                              "end": 335
                                            },
                                            "typeArguments": null,
                                            "start": 327,
                                            "end": 335
                                          },
                                          "start": 325,
                                          "end": 335
                                        },
                                        "start": 323,
                                        "end": 335
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 338,
                                          "end": 347
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 351,
                                          "end": 354
                                        },
                                        "start": 338,
                                        "end": 354
                                      },
                                      "definite": false,
                                      "start": 323,
                                      "end": 354
                                    }
                                  ],
                                  "declare": false,
                                  "start": 319,
                                  "end": 355
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
                                      "start": 373,
                                      "end": 374
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 375,
                                      "end": 376
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 373,
                                    "end": 376
                                  },
                                  "directive": null,
                                  "start": 373,
                                  "end": 377
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
                                      "start": 450,
                                      "end": 452
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 453,
                                      "end": 454
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 450,
                                    "end": 454
                                  },
                                  "directive": null,
                                  "start": 450,
                                  "end": 455
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
                                      "start": 527,
                                      "end": 529
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 530,
                                      "end": 531
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 527,
                                    "end": 531
                                  },
                                  "directive": null,
                                  "start": 527,
                                  "end": 532
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
                                      "start": 604,
                                      "end": 606
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 607,
                                      "end": 608
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 604,
                                    "end": 608
                                  },
                                  "directive": null,
                                  "start": 604,
                                  "end": 609
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
                                      "start": 740,
                                      "end": 742
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 743,
                                      "end": 744
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 740,
                                    "end": 744
                                  },
                                  "directive": null,
                                  "start": 740,
                                  "end": 745
                                }
                              ],
                              "start": 94,
                              "end": 814
                            },
                            "expression": false,
                            "start": 91,
                            "end": 814
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 84,
                          "end": 814
                        }
                      ],
                      "start": 70,
                      "end": 824
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 62,
                    "end": 824
                  }
                ],
                "start": 52,
                "end": 830
              },
              "expression": false,
              "start": 49,
              "end": 830
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 43,
            "end": 830
          }
        ],
        "start": 11,
        "end": 832
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 832
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
        "start": 840,
        "end": 848
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 857,
        "end": 861
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
              "start": 868,
              "end": 875
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 894,
                      "end": 895
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
                            "name": "method1b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 910,
                            "end": 918
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
                                              "start": 946,
                                              "end": 950
                                            },
                                            "typeArguments": null,
                                            "start": 946,
                                            "end": 950
                                          },
                                          "start": 944,
                                          "end": 950
                                        },
                                        "start": 943,
                                        "end": 950
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 953,
                                          "end": 962
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 966,
                                          "end": 969
                                        },
                                        "start": 953,
                                        "end": 969
                                      },
                                      "definite": false,
                                      "start": 943,
                                      "end": 969
                                    }
                                  ],
                                  "declare": false,
                                  "start": 939,
                                  "end": 970
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
                                              "start": 995,
                                              "end": 1003
                                            },
                                            "typeArguments": null,
                                            "start": 995,
                                            "end": 1003
                                          },
                                          "start": 993,
                                          "end": 1003
                                        },
                                        "start": 991,
                                        "end": 1003
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1006,
                                          "end": 1015
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 1019,
                                          "end": 1022
                                        },
                                        "start": 1006,
                                        "end": 1022
                                      },
                                      "definite": false,
                                      "start": 991,
                                      "end": 1022
                                    }
                                  ],
                                  "declare": false,
                                  "start": 987,
                                  "end": 1023
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
                                              "start": 1048,
                                              "end": 1056
                                            },
                                            "typeArguments": null,
                                            "start": 1048,
                                            "end": 1056
                                          },
                                          "start": 1046,
                                          "end": 1056
                                        },
                                        "start": 1044,
                                        "end": 1056
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1059,
                                          "end": 1068
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 1072,
                                          "end": 1075
                                        },
                                        "start": 1059,
                                        "end": 1075
                                      },
                                      "definite": false,
                                      "start": 1044,
                                      "end": 1075
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1040,
                                  "end": 1076
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
                                              "start": 1101,
                                              "end": 1109
                                            },
                                            "typeArguments": null,
                                            "start": 1101,
                                            "end": 1109
                                          },
                                          "start": 1099,
                                          "end": 1109
                                        },
                                        "start": 1097,
                                        "end": 1109
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1112,
                                          "end": 1121
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 1125,
                                          "end": 1128
                                        },
                                        "start": 1112,
                                        "end": 1128
                                      },
                                      "definite": false,
                                      "start": 1097,
                                      "end": 1128
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1093,
                                  "end": 1129
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
                                              "start": 1154,
                                              "end": 1162
                                            },
                                            "typeArguments": null,
                                            "start": 1154,
                                            "end": 1162
                                          },
                                          "start": 1152,
                                          "end": 1162
                                        },
                                        "start": 1150,
                                        "end": 1162
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1165,
                                          "end": 1174
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 1178,
                                          "end": 1181
                                        },
                                        "start": 1165,
                                        "end": 1181
                                      },
                                      "definite": false,
                                      "start": 1150,
                                      "end": 1181
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1146,
                                  "end": 1182
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
                                      "start": 1200,
                                      "end": 1201
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1202,
                                      "end": 1203
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1200,
                                    "end": 1203
                                  },
                                  "directive": null,
                                  "start": 1200,
                                  "end": 1204
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
                                      "start": 1300,
                                      "end": 1302
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1303,
                                      "end": 1304
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1300,
                                    "end": 1304
                                  },
                                  "directive": null,
                                  "start": 1300,
                                  "end": 1305
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
                                      "start": 1446,
                                      "end": 1448
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1449,
                                      "end": 1450
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1446,
                                    "end": 1450
                                  },
                                  "directive": null,
                                  "start": 1446,
                                  "end": 1451
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
                                      "start": 1546,
                                      "end": 1548
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1549,
                                      "end": 1550
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1546,
                                    "end": 1550
                                  },
                                  "directive": null,
                                  "start": 1546,
                                  "end": 1551
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
                                      "start": 1682,
                                      "end": 1684
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1685,
                                      "end": 1686
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1682,
                                    "end": 1686
                                  },
                                  "directive": null,
                                  "start": 1682,
                                  "end": 1687
                                }
                              ],
                              "start": 921,
                              "end": 1779
                            },
                            "expression": false,
                            "start": 918,
                            "end": 1779
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 910,
                          "end": 1779
                        }
                      ],
                      "start": 896,
                      "end": 1789
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 888,
                    "end": 1789
                  }
                ],
                "start": 878,
                "end": 1795
              },
              "expression": false,
              "start": 875,
              "end": 1795
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 868,
            "end": 1795
          }
        ],
        "start": 862,
        "end": 1797
      },
      "abstract": false,
      "declare": false,
      "start": 834,
      "end": 1797
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
        "start": 1805,
        "end": 1813
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 1822,
        "end": 1826
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
              "start": 1833,
              "end": 1840
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1859,
                      "end": 1860
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
                            "name": "method2c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1875,
                            "end": 1883
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
                                              "start": 1911,
                                              "end": 1915
                                            },
                                            "typeArguments": null,
                                            "start": 1911,
                                            "end": 1915
                                          },
                                          "start": 1909,
                                          "end": 1915
                                        },
                                        "start": 1908,
                                        "end": 1915
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1918,
                                          "end": 1927
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 1931,
                                          "end": 1934
                                        },
                                        "start": 1918,
                                        "end": 1934
                                      },
                                      "definite": false,
                                      "start": 1908,
                                      "end": 1934
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1904,
                                  "end": 1935
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
                                              "start": 1960,
                                              "end": 1968
                                            },
                                            "typeArguments": null,
                                            "start": 1960,
                                            "end": 1968
                                          },
                                          "start": 1958,
                                          "end": 1968
                                        },
                                        "start": 1956,
                                        "end": 1968
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1971,
                                          "end": 1980
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 1984,
                                          "end": 1987
                                        },
                                        "start": 1971,
                                        "end": 1987
                                      },
                                      "definite": false,
                                      "start": 1956,
                                      "end": 1987
                                    }
                                  ],
                                  "declare": false,
                                  "start": 1952,
                                  "end": 1988
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
                                              "start": 2013,
                                              "end": 2021
                                            },
                                            "typeArguments": null,
                                            "start": 2013,
                                            "end": 2021
                                          },
                                          "start": 2011,
                                          "end": 2021
                                        },
                                        "start": 2009,
                                        "end": 2021
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2024,
                                          "end": 2033
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 2037,
                                          "end": 2040
                                        },
                                        "start": 2024,
                                        "end": 2040
                                      },
                                      "definite": false,
                                      "start": 2009,
                                      "end": 2040
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2005,
                                  "end": 2041
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
                                              "start": 2066,
                                              "end": 2074
                                            },
                                            "typeArguments": null,
                                            "start": 2066,
                                            "end": 2074
                                          },
                                          "start": 2064,
                                          "end": 2074
                                        },
                                        "start": 2062,
                                        "end": 2074
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2077,
                                          "end": 2086
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 2090,
                                          "end": 2093
                                        },
                                        "start": 2077,
                                        "end": 2093
                                      },
                                      "definite": false,
                                      "start": 2062,
                                      "end": 2093
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2058,
                                  "end": 2094
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
                                              "start": 2119,
                                              "end": 2127
                                            },
                                            "typeArguments": null,
                                            "start": 2119,
                                            "end": 2127
                                          },
                                          "start": 2117,
                                          "end": 2127
                                        },
                                        "start": 2115,
                                        "end": 2127
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2130,
                                          "end": 2139
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 2143,
                                          "end": 2146
                                        },
                                        "start": 2130,
                                        "end": 2146
                                      },
                                      "definite": false,
                                      "start": 2115,
                                      "end": 2146
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2111,
                                  "end": 2147
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
                                      "start": 2165,
                                      "end": 2166
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2167,
                                      "end": 2168
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2165,
                                    "end": 2168
                                  },
                                  "directive": null,
                                  "start": 2165,
                                  "end": 2169
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
                                      "start": 2265,
                                      "end": 2267
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2268,
                                      "end": 2269
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2265,
                                    "end": 2269
                                  },
                                  "directive": null,
                                  "start": 2265,
                                  "end": 2270
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
                                      "start": 2365,
                                      "end": 2367
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2368,
                                      "end": 2369
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2365,
                                    "end": 2369
                                  },
                                  "directive": null,
                                  "start": 2365,
                                  "end": 2370
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
                                      "start": 2511,
                                      "end": 2513
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2514,
                                      "end": 2515
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2511,
                                    "end": 2515
                                  },
                                  "directive": null,
                                  "start": 2511,
                                  "end": 2516
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
                                      "start": 2647,
                                      "end": 2649
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2650,
                                      "end": 2651
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2647,
                                    "end": 2651
                                  },
                                  "directive": null,
                                  "start": 2647,
                                  "end": 2652
                                }
                              ],
                              "start": 1886,
                              "end": 2815
                            },
                            "expression": false,
                            "start": 1883,
                            "end": 2815
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 1875,
                          "end": 2815
                        }
                      ],
                      "start": 1861,
                      "end": 2825
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 1853,
                    "end": 2825
                  }
                ],
                "start": 1843,
                "end": 2831
              },
              "expression": false,
              "start": 1840,
              "end": 2831
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1833,
            "end": 2831
          }
        ],
        "start": 1827,
        "end": 2833
      },
      "abstract": false,
      "declare": false,
      "start": 1799,
      "end": 2833
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
        "start": 2841,
        "end": 2849
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2858,
        "end": 2866
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
              "start": 2883,
              "end": 2884
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2887,
                "end": 2893
              },
              "start": 2885,
              "end": 2893
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
            "start": 2873,
            "end": 2894
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
              "start": 2899,
              "end": 2906
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2925,
                      "end": 2926
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
                            "name": "method3d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2941,
                            "end": 2949
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
                                              "start": 2977,
                                              "end": 2981
                                            },
                                            "typeArguments": null,
                                            "start": 2977,
                                            "end": 2981
                                          },
                                          "start": 2975,
                                          "end": 2981
                                        },
                                        "start": 2974,
                                        "end": 2981
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2984,
                                          "end": 2993
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 2997,
                                          "end": 3000
                                        },
                                        "start": 2984,
                                        "end": 3000
                                      },
                                      "definite": false,
                                      "start": 2974,
                                      "end": 3000
                                    }
                                  ],
                                  "declare": false,
                                  "start": 2970,
                                  "end": 3001
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
                                              "start": 3026,
                                              "end": 3034
                                            },
                                            "typeArguments": null,
                                            "start": 3026,
                                            "end": 3034
                                          },
                                          "start": 3024,
                                          "end": 3034
                                        },
                                        "start": 3022,
                                        "end": 3034
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3037,
                                          "end": 3046
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3050,
                                          "end": 3053
                                        },
                                        "start": 3037,
                                        "end": 3053
                                      },
                                      "definite": false,
                                      "start": 3022,
                                      "end": 3053
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3018,
                                  "end": 3054
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
                                              "start": 3079,
                                              "end": 3087
                                            },
                                            "typeArguments": null,
                                            "start": 3079,
                                            "end": 3087
                                          },
                                          "start": 3077,
                                          "end": 3087
                                        },
                                        "start": 3075,
                                        "end": 3087
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3090,
                                          "end": 3099
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3103,
                                          "end": 3106
                                        },
                                        "start": 3090,
                                        "end": 3106
                                      },
                                      "definite": false,
                                      "start": 3075,
                                      "end": 3106
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3071,
                                  "end": 3107
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
                                              "start": 3132,
                                              "end": 3140
                                            },
                                            "typeArguments": null,
                                            "start": 3132,
                                            "end": 3140
                                          },
                                          "start": 3130,
                                          "end": 3140
                                        },
                                        "start": 3128,
                                        "end": 3140
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3143,
                                          "end": 3152
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3156,
                                          "end": 3159
                                        },
                                        "start": 3143,
                                        "end": 3159
                                      },
                                      "definite": false,
                                      "start": 3128,
                                      "end": 3159
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3124,
                                  "end": 3160
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
                                              "start": 3185,
                                              "end": 3193
                                            },
                                            "typeArguments": null,
                                            "start": 3185,
                                            "end": 3193
                                          },
                                          "start": 3183,
                                          "end": 3193
                                        },
                                        "start": 3181,
                                        "end": 3193
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3196,
                                          "end": 3205
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3209,
                                          "end": 3212
                                        },
                                        "start": 3196,
                                        "end": 3212
                                      },
                                      "definite": false,
                                      "start": 3181,
                                      "end": 3212
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3177,
                                  "end": 3213
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
                                      "start": 3231,
                                      "end": 3232
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3233,
                                      "end": 3234
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3231,
                                    "end": 3234
                                  },
                                  "directive": null,
                                  "start": 3231,
                                  "end": 3235
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
                                      "start": 3331,
                                      "end": 3333
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3334,
                                      "end": 3335
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3331,
                                    "end": 3335
                                  },
                                  "directive": null,
                                  "start": 3331,
                                  "end": 3336
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
                                      "start": 3431,
                                      "end": 3433
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3434,
                                      "end": 3435
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3431,
                                    "end": 3435
                                  },
                                  "directive": null,
                                  "start": 3431,
                                  "end": 3436
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
                                      "start": 3531,
                                      "end": 3533
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3534,
                                      "end": 3535
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3531,
                                    "end": 3535
                                  },
                                  "directive": null,
                                  "start": 3531,
                                  "end": 3536
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
                                      "start": 3608,
                                      "end": 3610
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3611,
                                      "end": 3612
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3608,
                                    "end": 3612
                                  },
                                  "directive": null,
                                  "start": 3608,
                                  "end": 3613
                                }
                              ],
                              "start": 2952,
                              "end": 3705
                            },
                            "expression": false,
                            "start": 2949,
                            "end": 3705
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 2941,
                          "end": 3705
                        }
                      ],
                      "start": 2927,
                      "end": 3715
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 2919,
                    "end": 3715
                  }
                ],
                "start": 2909,
                "end": 3721
              },
              "expression": false,
              "start": 2906,
              "end": 3721
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2899,
            "end": 3721
          }
        ],
        "start": 2867,
        "end": 3723
      },
      "abstract": false,
      "declare": false,
      "start": 2835,
      "end": 3723
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
        "start": 3731,
        "end": 3739
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3748,
        "end": 3756
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
              "start": 3763,
              "end": 3770
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3789,
                      "end": 3790
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
                            "name": "method4e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3805,
                            "end": 3813
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
                                              "start": 3841,
                                              "end": 3845
                                            },
                                            "typeArguments": null,
                                            "start": 3841,
                                            "end": 3845
                                          },
                                          "start": 3839,
                                          "end": 3845
                                        },
                                        "start": 3838,
                                        "end": 3845
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3848,
                                          "end": 3857
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3861,
                                          "end": 3864
                                        },
                                        "start": 3848,
                                        "end": 3864
                                      },
                                      "definite": false,
                                      "start": 3838,
                                      "end": 3864
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3834,
                                  "end": 3865
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
                                              "start": 3890,
                                              "end": 3898
                                            },
                                            "typeArguments": null,
                                            "start": 3890,
                                            "end": 3898
                                          },
                                          "start": 3888,
                                          "end": 3898
                                        },
                                        "start": 3886,
                                        "end": 3898
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3901,
                                          "end": 3910
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3914,
                                          "end": 3917
                                        },
                                        "start": 3901,
                                        "end": 3917
                                      },
                                      "definite": false,
                                      "start": 3886,
                                      "end": 3917
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3882,
                                  "end": 3918
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
                                              "start": 3943,
                                              "end": 3951
                                            },
                                            "typeArguments": null,
                                            "start": 3943,
                                            "end": 3951
                                          },
                                          "start": 3941,
                                          "end": 3951
                                        },
                                        "start": 3939,
                                        "end": 3951
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3954,
                                          "end": 3963
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 3967,
                                          "end": 3970
                                        },
                                        "start": 3954,
                                        "end": 3970
                                      },
                                      "definite": false,
                                      "start": 3939,
                                      "end": 3970
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3935,
                                  "end": 3971
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
                                              "start": 3996,
                                              "end": 4004
                                            },
                                            "typeArguments": null,
                                            "start": 3996,
                                            "end": 4004
                                          },
                                          "start": 3994,
                                          "end": 4004
                                        },
                                        "start": 3992,
                                        "end": 4004
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4007,
                                          "end": 4016
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 4020,
                                          "end": 4023
                                        },
                                        "start": 4007,
                                        "end": 4023
                                      },
                                      "definite": false,
                                      "start": 3992,
                                      "end": 4023
                                    }
                                  ],
                                  "declare": false,
                                  "start": 3988,
                                  "end": 4024
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
                                              "start": 4049,
                                              "end": 4057
                                            },
                                            "typeArguments": null,
                                            "start": 4049,
                                            "end": 4057
                                          },
                                          "start": 4047,
                                          "end": 4057
                                        },
                                        "start": 4045,
                                        "end": 4057
                                      },
                                      "init": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "undefined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4060,
                                          "end": 4069
                                        },
                                        "typeAnnotation": {
                                          "type": "TSAnyKeyword",
                                          "start": 4073,
                                          "end": 4076
                                        },
                                        "start": 4060,
                                        "end": 4076
                                      },
                                      "definite": false,
                                      "start": 4045,
                                      "end": 4076
                                    }
                                  ],
                                  "declare": false,
                                  "start": 4041,
                                  "end": 4077
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
                                      "start": 4095,
                                      "end": 4096
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4097,
                                      "end": 4098
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4095,
                                    "end": 4098
                                  },
                                  "directive": null,
                                  "start": 4095,
                                  "end": 4099
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
                                      "start": 4195,
                                      "end": 4197
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4198,
                                      "end": 4199
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4195,
                                    "end": 4199
                                  },
                                  "directive": null,
                                  "start": 4195,
                                  "end": 4200
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
                                      "start": 4295,
                                      "end": 4297
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4298,
                                      "end": 4299
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4295,
                                    "end": 4299
                                  },
                                  "directive": null,
                                  "start": 4295,
                                  "end": 4300
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
                                      "start": 4395,
                                      "end": 4397
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4398,
                                      "end": 4399
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4395,
                                    "end": 4399
                                  },
                                  "directive": null,
                                  "start": 4395,
                                  "end": 4400
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
                                      "start": 4531,
                                      "end": 4533
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4534,
                                      "end": 4535
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4531,
                                    "end": 4535
                                  },
                                  "directive": null,
                                  "start": 4531,
                                  "end": 4536
                                }
                              ],
                              "start": 3816,
                              "end": 4674
                            },
                            "expression": false,
                            "start": 3813,
                            "end": 4674
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 3805,
                          "end": 4674
                        }
                      ],
                      "start": 3791,
                      "end": 4684
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3783,
                    "end": 4684
                  }
                ],
                "start": 3773,
                "end": 4690
              },
              "expression": false,
              "start": 3770,
              "end": 4690
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3763,
            "end": 4690
          }
        ],
        "start": 3757,
        "end": 4692
      },
      "abstract": false,
      "declare": false,
      "start": 3725,
      "end": 4692
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
                  "start": 4702,
                  "end": 4706
                },
                "typeArguments": null,
                "start": 4702,
                "end": 4706
              },
              "start": 4700,
              "end": 4706
            },
            "start": 4699,
            "end": 4706
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4709,
              "end": 4718
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4722,
              "end": 4725
            },
            "start": 4709,
            "end": 4725
          },
          "definite": false,
          "start": 4699,
          "end": 4725
        }
      ],
      "declare": false,
      "start": 4695,
      "end": 4726
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
                  "start": 4735,
                  "end": 4743
                },
                "typeArguments": null,
                "start": 4735,
                "end": 4743
              },
              "start": 4733,
              "end": 4743
            },
            "start": 4731,
            "end": 4743
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4746,
              "end": 4755
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4759,
              "end": 4762
            },
            "start": 4746,
            "end": 4762
          },
          "definite": false,
          "start": 4731,
          "end": 4762
        }
      ],
      "declare": false,
      "start": 4727,
      "end": 4763
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
                  "start": 4772,
                  "end": 4780
                },
                "typeArguments": null,
                "start": 4772,
                "end": 4780
              },
              "start": 4770,
              "end": 4780
            },
            "start": 4768,
            "end": 4780
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4783,
              "end": 4792
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4796,
              "end": 4799
            },
            "start": 4783,
            "end": 4799
          },
          "definite": false,
          "start": 4768,
          "end": 4799
        }
      ],
      "declare": false,
      "start": 4764,
      "end": 4800
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
                  "start": 4809,
                  "end": 4817
                },
                "typeArguments": null,
                "start": 4809,
                "end": 4817
              },
              "start": 4807,
              "end": 4817
            },
            "start": 4805,
            "end": 4817
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4820,
              "end": 4829
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4833,
              "end": 4836
            },
            "start": 4820,
            "end": 4836
          },
          "definite": false,
          "start": 4805,
          "end": 4836
        }
      ],
      "declare": false,
      "start": 4801,
      "end": 4837
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
                  "start": 4846,
                  "end": 4854
                },
                "typeArguments": null,
                "start": 4846,
                "end": 4854
              },
              "start": 4844,
              "end": 4854
            },
            "start": 4842,
            "end": 4854
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 4857,
              "end": 4866
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 4870,
              "end": 4873
            },
            "start": 4857,
            "end": 4873
          },
          "definite": false,
          "start": 4842,
          "end": 4873
        }
      ],
      "declare": false,
      "start": 4838,
      "end": 4874
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
          "start": 4876,
          "end": 4877
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4878,
          "end": 4879
        },
        "optional": false,
        "computed": false,
        "start": 4876,
        "end": 4879
      },
      "directive": null,
      "start": 4876,
      "end": 4880
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
          "start": 4994,
          "end": 4996
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4997,
          "end": 4998
        },
        "optional": false,
        "computed": false,
        "start": 4994,
        "end": 4998
      },
      "directive": null,
      "start": 4994,
      "end": 4999
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
          "start": 5112,
          "end": 5114
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 5115,
          "end": 5116
        },
        "optional": false,
        "computed": false,
        "start": 5112,
        "end": 5116
      },
      "directive": null,
      "start": 5112,
      "end": 5117
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
          "start": 5230,
          "end": 5232
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 5233,
          "end": 5234
        },
        "optional": false,
        "computed": false,
        "start": 5230,
        "end": 5234
      },
      "directive": null,
      "start": 5230,
      "end": 5235
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
          "start": 5348,
          "end": 5350
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 5351,
          "end": 5352
        },
        "optional": false,
        "computed": false,
        "start": 5348,
        "end": 5352
      },
      "directive": null,
      "start": 5348,
      "end": 5353
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5465
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
    "value": "class",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "methoda",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 126,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 136,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 160,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 164,
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
    "value": "Derived1",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 179,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 189,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 232,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 274,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 285,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 327,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 338,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 348,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 450,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 530,
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
    "value": "d3",
    "start": 604,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 740,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 834,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 840,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 849,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 868,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 888,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "method1b",
    "start": 910,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 939,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 946,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 953,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 963,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 987,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 991,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 995,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1006,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1016,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1044,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1048,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1059,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1069,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1072,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1097,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 1101,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1112,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1122,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1125,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1146,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1150,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 1154,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1165,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1175,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1178,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1300,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 1546,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 1682,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1799,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1805,
    "end": 1813
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1814,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1822,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 1833,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1853,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "method2c",
    "start": 1875,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1904,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1908,
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
    "value": "Base",
    "start": 1911,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1918,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1928,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1952,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 1956,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 1960,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1971,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1981,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1984,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2005,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2009,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2013,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2024,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2034,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2037,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2058,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2062,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2066,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2077,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2087,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2090,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2111,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2115,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 2119,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2130,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2140,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2143,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 2265,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 2365,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 2511,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 2647,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2835,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 2841,
    "end": 2849
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2850,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 2858,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 2873,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2887,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "method3",
    "start": 2899,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2919,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "method3d",
    "start": 2941,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2970,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2977,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2984,
    "end": 2993
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2994,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2997,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3018,
    "end": 3021
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3022,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 3026,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3037,
    "end": 3046
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3047,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3050,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3071,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3075,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3079,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3090,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3100,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3103,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3124,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3128,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 3132,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3143,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3153,
    "end": 3155
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3156,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3177,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 3181,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 3185,
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
    "value": "undefined",
    "start": 3196,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3206,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3209,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3331,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3431,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3531,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 3608,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3725,
    "end": 3730
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 3731,
    "end": 3739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3740,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3748,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "method4",
    "start": 3763,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3770,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3783,
    "end": 3788
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Identifier",
    "value": "method4e",
    "start": 3805,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3834,
    "end": 3837
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3841,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3848,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3858,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3861,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3882,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 3886,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 3890,
    "end": 3898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3901,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3911,
    "end": 3913
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3914,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3935,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 3939,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 3943,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3954,
    "end": 3963
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3964,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3967,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3988,
    "end": 3991
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 3992,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 3996,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4007,
    "end": 4016
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4017,
    "end": 4019
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4020,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4041,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 4045,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 4049,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4060,
    "end": 4069
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4070,
    "end": 4072
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4073,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4097,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 4195,
    "end": 4197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 4295,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 4395,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 4531,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4533,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4691,
    "end": 4692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4695,
    "end": 4698
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4700,
    "end": 4701
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 4702,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4707,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4709,
    "end": 4718
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4719,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4722,
    "end": 4725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4727,
    "end": 4730
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 4731,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 4735,
    "end": 4743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4746,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4756,
    "end": 4758
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4759,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4764,
    "end": 4767
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 4768,
    "end": 4770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4770,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 4772,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4783,
    "end": 4792
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4793,
    "end": 4795
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4796,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4801,
    "end": 4804
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 4805,
    "end": 4807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Identifier",
    "value": "Derived3",
    "start": 4809,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4820,
    "end": 4829
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4830,
    "end": 4832
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4833,
    "end": 4836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4836,
    "end": 4837
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4838,
    "end": 4841
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 4842,
    "end": 4844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4844,
    "end": 4845
  },
  {
    "type": "Identifier",
    "value": "Derived4",
    "start": 4846,
    "end": 4854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4855,
    "end": 4856
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4857,
    "end": 4866
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 4867,
    "end": 4869
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4870,
    "end": 4873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4873,
    "end": 4874
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4876,
    "end": 4877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4879,
    "end": 4880
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 4994,
    "end": 4996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4996,
    "end": 4997
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4997,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5112,
    "end": 5114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5115,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5116,
    "end": 5117
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 5230,
    "end": 5232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5232,
    "end": 5233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5233,
    "end": 5234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5234,
    "end": 5235
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 5348,
    "end": 5350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5350,
    "end": 5351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5352,
    "end": 5353
  }
]
```
