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
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 154
      },
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
              "start": 155,
              "end": 156
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 156
          }
        ],
        "start": 154,
        "end": 157
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "typeArguments": null,
              "start": 161,
              "end": 162
            },
            "start": 159,
            "end": 162
          },
          "start": 158,
          "end": 162
        }
      ],
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
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 179
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 197
                      },
                      "typeArguments": null,
                      "start": 196,
                      "end": 197
                    },
                    "start": 194,
                    "end": 197
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 201
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 186,
                  "end": 202
                }
              ],
              "start": 180,
              "end": 206
            },
            "abstract": false,
            "declare": false,
            "start": 168,
            "end": 206
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "Inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 221
            },
            "start": 209,
            "end": 222
          }
        ],
        "start": 164,
        "end": 224
      },
      "expression": false,
      "start": 140,
      "end": 224
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 232,
                "end": 238
              },
              "start": 230,
              "end": 238
            },
            "start": 229,
            "end": 238
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 246
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 247,
                  "end": 248
                }
              ],
              "optional": false,
              "start": 241,
              "end": 249
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "optional": false,
            "computed": false,
            "start": 241,
            "end": 251
          },
          "definite": false,
          "start": 229,
          "end": 251
        }
      ],
      "declare": false,
      "start": 225,
      "end": 252
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListWrapper2",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 272
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
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 289
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
                      "start": 290,
                      "end": 291
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 290,
                    "end": 291
                  }
                ],
                "start": 289,
                "end": 292
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 298,
                      "end": 317
                    },
                    "start": 296,
                    "end": 317
                  },
                  "start": 293,
                  "end": 317
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 326,
                          "end": 327
                        },
                        "typeArguments": null,
                        "start": 326,
                        "end": 327
                      },
                      "start": 326,
                      "end": 329
                    },
                    "start": 324,
                    "end": 329
                  },
                  "start": 319,
                  "end": 329
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 333
                    },
                    "typeArguments": null,
                    "start": 332,
                    "end": 333
                  },
                  "start": 332,
                  "end": 335
                },
                "start": 330,
                "end": 335
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 350
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "slice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 351,
                          "end": 356
                        },
                        "optional": false,
                        "computed": false,
                        "start": 345,
                        "end": 356
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 357,
                          "end": 358
                        }
                      ],
                      "optional": false,
                      "start": 345,
                      "end": 359
                    },
                    "start": 338,
                    "end": 360
                  }
                ],
                "start": 336,
                "end": 362
              },
              "expression": false,
              "start": 289,
              "end": 362
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 277,
            "end": 362
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reversed",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 380
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
                      "start": 381,
                      "end": 382
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 381,
                    "end": 382
                  }
                ],
                "start": 380,
                "end": 383
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 408
                      },
                      "typeArguments": null,
                      "start": 389,
                      "end": 408
                    },
                    "start": 387,
                    "end": 408
                  },
                  "start": 384,
                  "end": 408
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 418
                        },
                        "typeArguments": null,
                        "start": 417,
                        "end": 418
                      },
                      "start": 417,
                      "end": 420
                    },
                    "start": 415,
                    "end": 420
                  },
                  "start": 410,
                  "end": 420
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 423,
                    "end": 424
                  },
                  "start": 423,
                  "end": 426
                },
                "start": 421,
                "end": 426
              },
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 437,
                          "end": 438
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ListWrapper2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 441,
                              "end": 453
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "clone",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 454,
                              "end": 459
                            },
                            "optional": false,
                            "computed": false,
                            "start": 441,
                            "end": 459
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dit",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 460,
                              "end": 463
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 465,
                              "end": 470
                            }
                          ],
                          "optional": false,
                          "start": 441,
                          "end": 471
                        },
                        "definite": false,
                        "start": 437,
                        "end": 471
                      }
                    ],
                    "declare": false,
                    "start": 433,
                    "end": 472
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 485
                    },
                    "start": 477,
                    "end": 486
                  }
                ],
                "start": 427,
                "end": 490
              },
              "expression": false,
              "start": 380,
              "end": 490
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 365,
            "end": 490
          }
        ],
        "start": 273,
        "end": 492
      },
      "abstract": false,
      "declare": false,
      "start": 254,
      "end": 492
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tessst",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 509
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "funkyFor",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 833
              },
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
                      "start": 834,
                      "end": 835
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 834,
                    "end": 835
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 838
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 837,
                    "end": 838
                  }
                ],
                "start": 833,
                "end": 839
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 847,
                          "end": 848
                        },
                        "typeArguments": null,
                        "start": 847,
                        "end": 848
                      },
                      "start": 847,
                      "end": 850
                    },
                    "start": 845,
                    "end": 850
                  },
                  "start": 840,
                  "end": 850
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "element",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 872,
                                "end": 873
                              },
                              "typeArguments": null,
                              "start": 872,
                              "end": 873
                            },
                            "start": 870,
                            "end": 873
                          },
                          "start": 863,
                          "end": 873
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 882,
                              "end": 888
                            },
                            "start": 880,
                            "end": 888
                          },
                          "start": 875,
                          "end": 888
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 893,
                            "end": 894
                          },
                          "typeArguments": null,
                          "start": 893,
                          "end": 894
                        },
                        "start": 890,
                        "end": 894
                      },
                      "start": 862,
                      "end": 894
                    },
                    "start": 860,
                    "end": 894
                  },
                  "start": 852,
                  "end": 894
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 898
                  },
                  "typeArguments": null,
                  "start": 897,
                  "end": 898
                },
                "start": 895,
                "end": 898
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 913,
                      "end": 918
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ForStatement",
                          "init": {
                            "type": "VariableDeclaration",
                            "kind": "let",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 943,
                                  "end": 944
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 947,
                                  "end": 948
                                },
                                "definite": false,
                                "start": 943,
                                "end": 948
                              },
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "len",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 950,
                                  "end": 953
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "array",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 956,
                                    "end": 961
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 962,
                                    "end": 968
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 956,
                                  "end": 968
                                },
                                "definite": false,
                                "start": 950,
                                "end": 968
                              }
                            ],
                            "declare": false,
                            "start": 939,
                            "end": 968
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 970,
                              "end": 971
                            },
                            "operator": "<",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "len",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 974,
                              "end": 977
                            },
                            "start": 970,
                            "end": 977
                          },
                          "update": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 979,
                              "end": 980
                            },
                            "start": 979,
                            "end": 982
                          },
                          "body": {
                            "type": "BlockStatement",
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
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1008,
                                      "end": 1014
                                    },
                                    "init": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "callback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1017,
                                        "end": 1025
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "array",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1026,
                                            "end": 1031
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "i",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1032,
                                            "end": 1033
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 1026,
                                          "end": 1034
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "i",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1036,
                                          "end": 1037
                                        }
                                      ],
                                      "optional": false,
                                      "start": 1017,
                                      "end": 1038
                                    },
                                    "definite": false,
                                    "start": 1008,
                                    "end": 1038
                                  }
                                ],
                                "declare": false,
                                "start": 1002,
                                "end": 1039
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1060,
                                  "end": 1066
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1097,
                                        "end": 1103
                                      },
                                      "start": 1090,
                                      "end": 1104
                                    }
                                  ],
                                  "start": 1068,
                                  "end": 1122
                                },
                                "alternate": null,
                                "start": 1056,
                                "end": 1122
                              }
                            ],
                            "start": 984,
                            "end": 1136
                          },
                          "start": 934,
                          "end": 1136
                        }
                      ],
                      "start": 920,
                      "end": 1146
                    },
                    "alternate": null,
                    "start": 909,
                    "end": 1146
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1171
                    },
                    "start": 1155,
                    "end": 1172
                  }
                ],
                "start": 899,
                "end": 1178
              },
              "expression": false,
              "start": 816,
              "end": 1178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 809,
            "end": 1178
          }
        ],
        "start": 510,
        "end": 1180
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 493,
      "end": 1180
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Scanner",
        "optional": false,
        "typeAnnotation": null,
        "start": 1191,
        "end": 1198
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
              "name": "scanRange",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1212
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
                    "start": 1213,
                    "end": 1214
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1213,
                  "end": 1214
                }
              ],
              "start": 1212,
              "end": 1215
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1223,
                    "end": 1229
                  },
                  "start": 1221,
                  "end": 1229
                },
                "start": 1216,
                "end": 1229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1239,
                    "end": 1245
                  },
                  "start": 1237,
                  "end": 1245
                },
                "start": 1231,
                "end": 1245
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1263,
                          "end": 1264
                        },
                        "typeArguments": null,
                        "start": 1263,
                        "end": 1264
                      },
                      "start": 1260,
                      "end": 1264
                    },
                    "start": 1257,
                    "end": 1264
                  },
                  "start": 1255,
                  "end": 1264
                },
                "start": 1247,
                "end": 1264
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1268
                },
                "typeArguments": null,
                "start": 1267,
                "end": 1268
              },
              "start": 1265,
              "end": 1268
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1203,
            "end": 1269
          }
        ],
        "start": 1199,
        "end": 1271
      },
      "declare": false,
      "start": 1181,
      "end": 1271
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ListWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 1278,
        "end": 1289
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
              "name": "createFixedSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1405,
              "end": 1420
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1433,
                        "end": 1444
                      },
                      "typeArguments": null,
                      "start": 1426,
                      "end": 1444
                    },
                    "start": 1424,
                    "end": 1444
                  },
                  "start": 1421,
                  "end": 1444
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1452,
                      "end": 1458
                    },
                    "start": 1450,
                    "end": 1458
                  },
                  "start": 1446,
                  "end": 1458
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1461,
                    "end": 1464
                  },
                  "start": 1461,
                  "end": 1466
                },
                "start": 1459,
                "end": 1466
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1480,
                        "end": 1485
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1486,
                          "end": 1490
                        }
                      ],
                      "start": 1476,
                      "end": 1491
                    },
                    "start": 1469,
                    "end": 1492
                  }
                ],
                "start": 1467,
                "end": 1494
              },
              "expression": false,
              "start": 1420,
              "end": 1494
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1398,
            "end": 1494
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "createGrowableSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 1504,
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1535,
                        "end": 1546
                      },
                      "typeArguments": null,
                      "start": 1528,
                      "end": 1546
                    },
                    "start": 1526,
                    "end": 1546
                  },
                  "start": 1523,
                  "end": 1546
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1554,
                      "end": 1560
                    },
                    "start": 1552,
                    "end": 1560
                  },
                  "start": 1548,
                  "end": 1560
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 1563,
                    "end": 1566
                  },
                  "start": 1563,
                  "end": 1568
                },
                "start": 1561,
                "end": 1568
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1587
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "size",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1588,
                          "end": 1592
                        }
                      ],
                      "start": 1578,
                      "end": 1593
                    },
                    "start": 1571,
                    "end": 1594
                  }
                ],
                "start": 1569,
                "end": 1596
              },
              "expression": false,
              "start": 1522,
              "end": 1596
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1497,
            "end": 1596
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null,
              "start": 1606,
              "end": 1611
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
                      "start": 1612,
                      "end": 1613
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1612,
                    "end": 1613
                  }
                ],
                "start": 1611,
                "end": 1614
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1627,
                        "end": 1638
                      },
                      "typeArguments": null,
                      "start": 1620,
                      "end": 1638
                    },
                    "start": 1618,
                    "end": 1638
                  },
                  "start": 1615,
                  "end": 1638
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1647,
                          "end": 1648
                        },
                        "typeArguments": null,
                        "start": 1647,
                        "end": 1648
                      },
                      "start": 1647,
                      "end": 1650
                    },
                    "start": 1645,
                    "end": 1650
                  },
                  "start": 1640,
                  "end": 1650
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1653,
                      "end": 1654
                    },
                    "typeArguments": null,
                    "start": 1653,
                    "end": 1654
                  },
                  "start": 1653,
                  "end": 1656
                },
                "start": 1651,
                "end": 1656
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1666,
                          "end": 1671
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "slice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1672,
                          "end": 1677
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1666,
                        "end": 1677
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1678,
                          "end": 1679
                        }
                      ],
                      "optional": false,
                      "start": 1666,
                      "end": 1680
                    },
                    "start": 1659,
                    "end": 1681
                  }
                ],
                "start": 1657,
                "end": 1683
              },
              "expression": false,
              "start": 1611,
              "end": 1683
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1599,
            "end": 1683
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEachWithIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1709
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
                      "start": 1710,
                      "end": 1711
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1710,
                    "end": 1711
                  }
                ],
                "start": 1709,
                "end": 1712
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1725,
                        "end": 1736
                      },
                      "typeArguments": null,
                      "start": 1718,
                      "end": 1736
                    },
                    "start": 1716,
                    "end": 1736
                  },
                  "start": 1713,
                  "end": 1736
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1745,
                          "end": 1746
                        },
                        "typeArguments": null,
                        "start": 1745,
                        "end": 1746
                      },
                      "start": 1745,
                      "end": 1748
                    },
                    "start": 1743,
                    "end": 1748
                  },
                  "start": 1738,
                  "end": 1748
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1758,
                                "end": 1759
                              },
                              "typeArguments": null,
                              "start": 1758,
                              "end": 1759
                            },
                            "start": 1756,
                            "end": 1759
                          },
                          "start": 1755,
                          "end": 1759
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1764,
                              "end": 1770
                            },
                            "start": 1762,
                            "end": 1770
                          },
                          "start": 1761,
                          "end": 1770
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1775,
                          "end": 1779
                        },
                        "start": 1772,
                        "end": 1779
                      },
                      "start": 1754,
                      "end": 1779
                    },
                    "start": 1752,
                    "end": 1779
                  },
                  "start": 1750,
                  "end": 1779
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1796,
                            "end": 1797
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1800,
                            "end": 1801
                          },
                          "definite": false,
                          "start": 1796,
                          "end": 1801
                        }
                      ],
                      "declare": false,
                      "start": 1792,
                      "end": 1801
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1803,
                        "end": 1804
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1807,
                          "end": 1812
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1813,
                          "end": 1819
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1807,
                        "end": 1819
                      },
                      "start": 1803,
                      "end": 1819
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1821,
                        "end": 1822
                      },
                      "start": 1821,
                      "end": 1824
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1834,
                              "end": 1836
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1837,
                                  "end": 1842
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1843,
                                  "end": 1844
                                },
                                "optional": false,
                                "computed": true,
                                "start": 1837,
                                "end": 1845
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1847,
                                "end": 1848
                              }
                            ],
                            "optional": false,
                            "start": 1834,
                            "end": 1849
                          },
                          "directive": null,
                          "start": 1834,
                          "end": 1850
                        }
                      ],
                      "start": 1826,
                      "end": 1856
                    },
                    "start": 1787,
                    "end": 1856
                  }
                ],
                "start": 1781,
                "end": 1860
              },
              "expression": false,
              "start": 1709,
              "end": 1860
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1686,
            "end": 1860
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "typeAnnotation": null,
              "start": 1870,
              "end": 1875
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
                      "start": 1876,
                      "end": 1877
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1876,
                    "end": 1877
                  }
                ],
                "start": 1875,
                "end": 1878
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1891,
                        "end": 1902
                      },
                      "typeArguments": null,
                      "start": 1884,
                      "end": 1902
                    },
                    "start": 1882,
                    "end": 1902
                  },
                  "start": 1879,
                  "end": 1902
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1911,
                          "end": 1912
                        },
                        "typeArguments": null,
                        "start": 1911,
                        "end": 1912
                      },
                      "start": 1911,
                      "end": 1914
                    },
                    "start": 1909,
                    "end": 1914
                  },
                  "start": 1904,
                  "end": 1914
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1917,
                    "end": 1918
                  },
                  "typeArguments": null,
                  "start": 1917,
                  "end": 1918
                },
                "start": 1915,
                "end": 1918
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1930,
                        "end": 1935
                      },
                      "prefix": true,
                      "start": 1929,
                      "end": 1935
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 1944,
                        "end": 1948
                      },
                      "start": 1937,
                      "end": 1949
                    },
                    "alternate": null,
                    "start": 1925,
                    "end": 1949
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1961,
                        "end": 1966
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1967,
                        "end": 1968
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1961,
                      "end": 1969
                    },
                    "start": 1954,
                    "end": 1970
                  }
                ],
                "start": 1919,
                "end": 1974
              },
              "expression": false,
              "start": 1875,
              "end": 1974
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1863,
            "end": 1974
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null,
              "start": 1984,
              "end": 1988
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
                      "start": 1989,
                      "end": 1990
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1989,
                    "end": 1990
                  }
                ],
                "start": 1988,
                "end": 1991
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2004,
                        "end": 2015
                      },
                      "typeArguments": null,
                      "start": 1997,
                      "end": 2015
                    },
                    "start": 1995,
                    "end": 2015
                  },
                  "start": 1992,
                  "end": 2015
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2024,
                          "end": 2025
                        },
                        "typeArguments": null,
                        "start": 2024,
                        "end": 2025
                      },
                      "start": 2024,
                      "end": 2027
                    },
                    "start": 2022,
                    "end": 2027
                  },
                  "start": 2017,
                  "end": 2027
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2030,
                    "end": 2031
                  },
                  "typeArguments": null,
                  "start": 2030,
                  "end": 2031
                },
                "start": 2028,
                "end": 2031
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2043,
                          "end": 2048
                        },
                        "prefix": true,
                        "start": 2042,
                        "end": 2048
                      },
                      "operator": "||",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2052,
                            "end": 2057
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2058,
                            "end": 2064
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2052,
                          "end": 2064
                        },
                        "operator": "==",
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2068,
                          "end": 2069
                        },
                        "start": 2052,
                        "end": 2069
                      },
                      "start": 2042,
                      "end": 2069
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 2078,
                        "end": 2082
                      },
                      "start": 2071,
                      "end": 2083
                    },
                    "alternate": null,
                    "start": 2038,
                    "end": 2083
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2100
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2101,
                            "end": 2106
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2107,
                            "end": 2113
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2101,
                          "end": 2113
                        },
                        "operator": "-",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2116,
                          "end": 2117
                        },
                        "start": 2101,
                        "end": 2117
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2095,
                      "end": 2118
                    },
                    "start": 2088,
                    "end": 2119
                  }
                ],
                "start": 2032,
                "end": 2123
              },
              "expression": false,
              "start": 1988,
              "end": 2123
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1977,
            "end": 2123
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2133,
              "end": 2140
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
                      "start": 2141,
                      "end": 2142
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2141,
                    "end": 2142
                  }
                ],
                "start": 2140,
                "end": 2143
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2156,
                        "end": 2167
                      },
                      "typeArguments": null,
                      "start": 2149,
                      "end": 2167
                    },
                    "start": 2147,
                    "end": 2167
                  },
                  "start": 2144,
                  "end": 2167
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2176,
                          "end": 2177
                        },
                        "typeArguments": null,
                        "start": 2176,
                        "end": 2177
                      },
                      "start": 2176,
                      "end": 2179
                    },
                    "start": 2174,
                    "end": 2179
                  },
                  "start": 2169,
                  "end": 2179
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2188,
                        "end": 2189
                      },
                      "typeArguments": null,
                      "start": 2188,
                      "end": 2189
                    },
                    "start": 2186,
                    "end": 2189
                  },
                  "start": 2181,
                  "end": 2189
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2203,
                        "end": 2209
                      },
                      "start": 2201,
                      "end": 2209
                    },
                    "start": 2191,
                    "end": 2209
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2212,
                    "end": 2213
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2213
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 2216,
                  "end": 2222
                },
                "start": 2214,
                "end": 2222
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2236,
                          "end": 2241
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "indexOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2242,
                          "end": 2249
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2236,
                        "end": 2249
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2250,
                          "end": 2255
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "startIndex",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2257,
                          "end": 2267
                        }
                      ],
                      "optional": false,
                      "start": 2236,
                      "end": 2268
                    },
                    "start": 2229,
                    "end": 2269
                  }
                ],
                "start": 2223,
                "end": 2273
              },
              "expression": false,
              "start": 2140,
              "end": 2273
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2126,
            "end": 2273
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "contains",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2291
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
                      "start": 2292,
                      "end": 2293
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2292,
                    "end": 2293
                  }
                ],
                "start": 2291,
                "end": 2294
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2307,
                        "end": 2318
                      },
                      "typeArguments": null,
                      "start": 2300,
                      "end": 2318
                    },
                    "start": 2298,
                    "end": 2318
                  },
                  "start": 2295,
                  "end": 2318
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2326,
                          "end": 2327
                        },
                        "typeArguments": null,
                        "start": 2326,
                        "end": 2327
                      },
                      "start": 2326,
                      "end": 2329
                    },
                    "start": 2324,
                    "end": 2329
                  },
                  "start": 2320,
                  "end": 2329
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2335,
                        "end": 2336
                      },
                      "typeArguments": null,
                      "start": 2335,
                      "end": 2336
                    },
                    "start": 2333,
                    "end": 2336
                  },
                  "start": 2331,
                  "end": 2336
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 2339,
                  "end": 2346
                },
                "start": 2337,
                "end": 2346
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2360
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "indexOf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2361,
                            "end": 2368
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2356,
                          "end": 2368
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "el",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2369,
                            "end": 2371
                          }
                        ],
                        "optional": false,
                        "start": 2356,
                        "end": 2372
                      },
                      "operator": "!==",
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2378,
                          "end": 2379
                        },
                        "prefix": true,
                        "start": 2377,
                        "end": 2379
                      },
                      "start": 2356,
                      "end": 2379
                    },
                    "start": 2349,
                    "end": 2380
                  }
                ],
                "start": 2347,
                "end": 2382
              },
              "expression": false,
              "start": 2291,
              "end": 2382
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2276,
            "end": 2382
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reversed",
              "optional": false,
              "typeAnnotation": null,
              "start": 2392,
              "end": 2400
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
                      "start": 2401,
                      "end": 2402
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2401,
                    "end": 2402
                  }
                ],
                "start": 2400,
                "end": 2403
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2416,
                        "end": 2427
                      },
                      "typeArguments": null,
                      "start": 2409,
                      "end": 2427
                    },
                    "start": 2407,
                    "end": 2427
                  },
                  "start": 2404,
                  "end": 2427
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2436,
                          "end": 2437
                        },
                        "typeArguments": null,
                        "start": 2436,
                        "end": 2437
                      },
                      "start": 2436,
                      "end": 2439
                    },
                    "start": 2434,
                    "end": 2439
                  },
                  "start": 2429,
                  "end": 2439
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2442,
                      "end": 2443
                    },
                    "typeArguments": null,
                    "start": 2442,
                    "end": 2443
                  },
                  "start": 2442,
                  "end": 2445
                },
                "start": 2440,
                "end": 2445
              },
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2456,
                          "end": 2457
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ListWrapper",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2460,
                              "end": 2471
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "clone",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2472,
                              "end": 2477
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2460,
                            "end": 2477
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dit",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2478,
                              "end": 2481
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2483,
                              "end": 2488
                            }
                          ],
                          "optional": false,
                          "start": 2460,
                          "end": 2489
                        },
                        "definite": false,
                        "start": 2456,
                        "end": 2489
                      }
                    ],
                    "declare": false,
                    "start": 2452,
                    "end": 2490
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
                          "name": "scanner",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Scanner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2508,
                                "end": 2515
                              },
                              "typeArguments": null,
                              "start": 2508,
                              "end": 2515
                            },
                            "start": 2506,
                            "end": 2515
                          },
                          "start": 2499,
                          "end": 2515
                        },
                        "init": null,
                        "definite": false,
                        "start": 2499,
                        "end": 2515
                      }
                    ],
                    "declare": false,
                    "start": 2495,
                    "end": 2516
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scanner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2521,
                          "end": 2528
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "scanRange",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2529,
                          "end": 2538
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2521,
                        "end": 2538
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 2539,
                          "end": 2540
                        },
                        {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2542,
                          "end": 2543
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 2551,
                            "end": 2555
                          },
                          "id": null,
                          "generator": false,
                          "start": 2545,
                          "end": 2555
                        }
                      ],
                      "optional": false,
                      "start": 2521,
                      "end": 2556
                    },
                    "directive": null,
                    "start": 2521,
                    "end": 2557
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tessst",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2569,
                            "end": 2575
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "funkyFor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2576,
                            "end": 2584
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2569,
                          "end": 2584
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2585,
                            "end": 2590
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2592,
                                "end": 2593
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2597,
                                  "end": 2598
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "toString",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2599,
                                  "end": 2607
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2597,
                                "end": 2607
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 2597,
                              "end": 2609
                            },
                            "id": null,
                            "generator": false,
                            "start": 2592,
                            "end": 2609
                          }
                        ],
                        "optional": false,
                        "start": 2569,
                        "end": 2610
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2613,
                            "end": 2614
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reverse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2615,
                            "end": 2622
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2613,
                          "end": 2622
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 2613,
                        "end": 2624
                      },
                      "alternate": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2627,
                        "end": 2628
                      },
                      "start": 2569,
                      "end": 2628
                    },
                    "start": 2562,
                    "end": 2629
                  }
                ],
                "start": 2446,
                "end": 2633
              },
              "expression": false,
              "start": 2400,
              "end": 2633
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2385,
            "end": 2633
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 2643,
              "end": 2649
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2662,
                        "end": 2673
                      },
                      "typeArguments": null,
                      "start": 2655,
                      "end": 2673
                    },
                    "start": 2653,
                    "end": 2673
                  },
                  "start": 2650,
                  "end": 2673
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2678,
                        "end": 2681
                      },
                      "start": 2678,
                      "end": 2683
                    },
                    "start": 2676,
                    "end": 2683
                  },
                  "start": 2675,
                  "end": 2683
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2688,
                        "end": 2691
                      },
                      "start": 2688,
                      "end": 2693
                    },
                    "start": 2686,
                    "end": 2693
                  },
                  "start": 2685,
                  "end": 2693
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 2696,
                    "end": 2699
                  },
                  "start": 2696,
                  "end": 2701
                },
                "start": 2694,
                "end": 2701
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2711,
                          "end": 2712
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "concat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2713,
                          "end": 2719
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2711,
                        "end": 2719
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2720,
                          "end": 2721
                        }
                      ],
                      "optional": false,
                      "start": 2711,
                      "end": 2722
                    },
                    "start": 2704,
                    "end": 2723
                  }
                ],
                "start": 2702,
                "end": 2725
              },
              "expression": false,
              "start": 2649,
              "end": 2725
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2636,
            "end": 2725
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insert",
              "optional": false,
              "typeAnnotation": null,
              "start": 2735,
              "end": 2741
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
                      "start": 2742,
                      "end": 2743
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2742,
                    "end": 2743
                  }
                ],
                "start": 2741,
                "end": 2744
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2757,
                        "end": 2768
                      },
                      "typeArguments": null,
                      "start": 2750,
                      "end": 2768
                    },
                    "start": 2748,
                    "end": 2768
                  },
                  "start": 2745,
                  "end": 2768
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2776,
                          "end": 2777
                        },
                        "typeArguments": null,
                        "start": 2776,
                        "end": 2777
                      },
                      "start": 2776,
                      "end": 2779
                    },
                    "start": 2774,
                    "end": 2779
                  },
                  "start": 2770,
                  "end": 2779
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2788,
                      "end": 2794
                    },
                    "start": 2786,
                    "end": 2794
                  },
                  "start": 2781,
                  "end": 2794
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2803,
                        "end": 2804
                      },
                      "typeArguments": null,
                      "start": 2803,
                      "end": 2804
                    },
                    "start": 2801,
                    "end": 2804
                  },
                  "start": 2796,
                  "end": 2804
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2808,
                          "end": 2812
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "splice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2813,
                          "end": 2819
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2808,
                        "end": 2819
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2820,
                          "end": 2825
                        },
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2827,
                          "end": 2828
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2830,
                          "end": 2835
                        }
                      ],
                      "optional": false,
                      "start": 2808,
                      "end": 2836
                    },
                    "directive": null,
                    "start": 2808,
                    "end": 2837
                  }
                ],
                "start": 2806,
                "end": 2839
              },
              "expression": false,
              "start": 2741,
              "end": 2839
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2728,
            "end": 2839
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2849,
              "end": 2857
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
                      "start": 2858,
                      "end": 2859
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2858,
                    "end": 2859
                  }
                ],
                "start": 2857,
                "end": 2860
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2873,
                        "end": 2884
                      },
                      "typeArguments": null,
                      "start": 2866,
                      "end": 2884
                    },
                    "start": 2864,
                    "end": 2884
                  },
                  "start": 2861,
                  "end": 2884
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2892,
                          "end": 2893
                        },
                        "typeArguments": null,
                        "start": 2892,
                        "end": 2893
                      },
                      "start": 2892,
                      "end": 2895
                    },
                    "start": 2890,
                    "end": 2895
                  },
                  "start": 2886,
                  "end": 2895
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2904,
                      "end": 2910
                    },
                    "start": 2902,
                    "end": 2910
                  },
                  "start": 2897,
                  "end": 2910
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2913,
                    "end": 2914
                  },
                  "typeArguments": null,
                  "start": 2913,
                  "end": 2914
                },
                "start": 2911,
                "end": 2914
              },
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
                          "name": "res",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2925,
                          "end": 2928
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "list",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2931,
                            "end": 2935
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2936,
                            "end": 2941
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2931,
                          "end": 2942
                        },
                        "definite": false,
                        "start": 2925,
                        "end": 2942
                      }
                    ],
                    "declare": false,
                    "start": 2921,
                    "end": 2943
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2948,
                          "end": 2952
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "splice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2953,
                          "end": 2959
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2948,
                        "end": 2959
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2960,
                          "end": 2965
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2967,
                          "end": 2968
                        }
                      ],
                      "optional": false,
                      "start": 2948,
                      "end": 2969
                    },
                    "directive": null,
                    "start": 2948,
                    "end": 2970
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "res",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2982,
                      "end": 2985
                    },
                    "start": 2975,
                    "end": 2986
                  }
                ],
                "start": 2915,
                "end": 2990
              },
              "expression": false,
              "start": 2857,
              "end": 2990
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2842,
            "end": 2990
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 3000,
              "end": 3009
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
                      "start": 3010,
                      "end": 3011
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3010,
                    "end": 3011
                  }
                ],
                "start": 3009,
                "end": 3012
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3025,
                        "end": 3036
                      },
                      "typeArguments": null,
                      "start": 3018,
                      "end": 3036
                    },
                    "start": 3016,
                    "end": 3036
                  },
                  "start": 3013,
                  "end": 3036
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3044,
                          "end": 3045
                        },
                        "typeArguments": null,
                        "start": 3044,
                        "end": 3045
                      },
                      "start": 3044,
                      "end": 3047
                    },
                    "start": 3042,
                    "end": 3047
                  },
                  "start": 3038,
                  "end": 3047
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3056,
                          "end": 3057
                        },
                        "typeArguments": null,
                        "start": 3056,
                        "end": 3057
                      },
                      "start": 3056,
                      "end": 3059
                    },
                    "start": 3054,
                    "end": 3059
                  },
                  "start": 3049,
                  "end": 3059
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3076,
                            "end": 3077
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 3080,
                            "end": 3081
                          },
                          "definite": false,
                          "start": 3076,
                          "end": 3081
                        }
                      ],
                      "declare": false,
                      "start": 3072,
                      "end": 3081
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3083,
                        "end": 3084
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3087,
                          "end": 3092
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3093,
                          "end": 3099
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3087,
                        "end": 3099
                      },
                      "start": 3083,
                      "end": 3099
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3103,
                        "end": 3104
                      },
                      "start": 3101,
                      "end": 3104
                    },
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
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3118,
                                "end": 3123
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "list",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3126,
                                    "end": 3130
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "indexOf",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3131,
                                    "end": 3138
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 3126,
                                  "end": 3138
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "items",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3139,
                                      "end": 3144
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3145,
                                      "end": 3146
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 3139,
                                    "end": 3147
                                  }
                                ],
                                "optional": false,
                                "start": 3126,
                                "end": 3148
                              },
                              "definite": false,
                              "start": 3118,
                              "end": 3148
                            }
                          ],
                          "declare": false,
                          "start": 3114,
                          "end": 3149
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3156,
                                "end": 3160
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "splice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3161,
                                "end": 3167
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3156,
                              "end": 3167
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3168,
                                "end": 3173
                              },
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 3175,
                                "end": 3176
                              }
                            ],
                            "optional": false,
                            "start": 3156,
                            "end": 3177
                          },
                          "directive": null,
                          "start": 3156,
                          "end": 3178
                        }
                      ],
                      "start": 3106,
                      "end": 3184
                    },
                    "start": 3067,
                    "end": 3184
                  }
                ],
                "start": 3061,
                "end": 3188
              },
              "expression": false,
              "start": 3009,
              "end": 3188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2993,
            "end": 3188
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null,
              "start": 3198,
              "end": 3204
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
                      "start": 3205,
                      "end": 3206
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3205,
                    "end": 3206
                  }
                ],
                "start": 3204,
                "end": 3207
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3220,
                        "end": 3231
                      },
                      "typeArguments": null,
                      "start": 3213,
                      "end": 3231
                    },
                    "start": 3211,
                    "end": 3231
                  },
                  "start": 3208,
                  "end": 3231
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3239,
                          "end": 3240
                        },
                        "typeArguments": null,
                        "start": 3239,
                        "end": 3240
                      },
                      "start": 3239,
                      "end": 3242
                    },
                    "start": 3237,
                    "end": 3242
                  },
                  "start": 3233,
                  "end": 3242
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3248,
                        "end": 3249
                      },
                      "typeArguments": null,
                      "start": 3248,
                      "end": 3249
                    },
                    "start": 3246,
                    "end": 3249
                  },
                  "start": 3244,
                  "end": 3249
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3252,
                  "end": 3259
                },
                "start": 3250,
                "end": 3259
              },
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
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3270,
                          "end": 3275
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "list",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3278,
                              "end": 3282
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "indexOf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3283,
                              "end": 3290
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3278,
                            "end": 3290
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "el",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3291,
                              "end": 3293
                            }
                          ],
                          "optional": false,
                          "start": 3278,
                          "end": 3294
                        },
                        "definite": false,
                        "start": 3270,
                        "end": 3294
                      }
                    ],
                    "declare": false,
                    "start": 3266,
                    "end": 3295
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3304,
                        "end": 3309
                      },
                      "operator": ">",
                      "right": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3313,
                          "end": 3314
                        },
                        "prefix": true,
                        "start": 3312,
                        "end": 3314
                      },
                      "start": 3304,
                      "end": 3314
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "list",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3324,
                                "end": 3328
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "splice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3329,
                                "end": 3335
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3324,
                              "end": 3335
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3336,
                                "end": 3341
                              },
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 3343,
                                "end": 3344
                              }
                            ],
                            "optional": false,
                            "start": 3324,
                            "end": 3345
                          },
                          "directive": null,
                          "start": 3324,
                          "end": 3346
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 3360,
                            "end": 3364
                          },
                          "start": 3353,
                          "end": 3365
                        }
                      ],
                      "start": 3316,
                      "end": 3371
                    },
                    "alternate": null,
                    "start": 3300,
                    "end": 3371
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 3383,
                      "end": 3388
                    },
                    "start": 3376,
                    "end": 3389
                  }
                ],
                "start": 3260,
                "end": 3393
              },
              "expression": false,
              "start": 3204,
              "end": 3393
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3191,
            "end": 3393
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "clear",
              "optional": false,
              "typeAnnotation": null,
              "start": 3403,
              "end": 3408
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3421,
                        "end": 3432
                      },
                      "typeArguments": null,
                      "start": 3414,
                      "end": 3432
                    },
                    "start": 3412,
                    "end": 3432
                  },
                  "start": 3409,
                  "end": 3432
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3440,
                        "end": 3443
                      },
                      "start": 3440,
                      "end": 3445
                    },
                    "start": 3438,
                    "end": 3445
                  },
                  "start": 3434,
                  "end": 3445
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3449,
                          "end": 3453
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3454,
                          "end": 3460
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3449,
                        "end": 3460
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 3463,
                        "end": 3464
                      },
                      "start": 3449,
                      "end": 3464
                    },
                    "directive": null,
                    "start": 3449,
                    "end": 3465
                  }
                ],
                "start": 3447,
                "end": 3467
              },
              "expression": false,
              "start": 3408,
              "end": 3467
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3396,
            "end": 3467
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isEmpty",
              "optional": false,
              "typeAnnotation": null,
              "start": 3477,
              "end": 3484
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3497,
                        "end": 3508
                      },
                      "typeArguments": null,
                      "start": 3490,
                      "end": 3508
                    },
                    "start": 3488,
                    "end": 3508
                  },
                  "start": 3485,
                  "end": 3508
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3516,
                        "end": 3519
                      },
                      "start": 3516,
                      "end": 3521
                    },
                    "start": 3514,
                    "end": 3521
                  },
                  "start": 3510,
                  "end": 3521
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3524,
                  "end": 3531
                },
                "start": 3522,
                "end": 3531
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3541,
                          "end": 3545
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3546,
                          "end": 3552
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3541,
                        "end": 3552
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 3556,
                        "end": 3557
                      },
                      "start": 3541,
                      "end": 3557
                    },
                    "start": 3534,
                    "end": 3558
                  }
                ],
                "start": 3532,
                "end": 3560
              },
              "expression": false,
              "start": 3484,
              "end": 3560
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3470,
            "end": 3560
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fill",
              "optional": false,
              "typeAnnotation": null,
              "start": 3570,
              "end": 3574
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3587,
                        "end": 3598
                      },
                      "typeArguments": null,
                      "start": 3580,
                      "end": 3598
                    },
                    "start": 3578,
                    "end": 3598
                  },
                  "start": 3575,
                  "end": 3598
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3606,
                        "end": 3609
                      },
                      "start": 3606,
                      "end": 3611
                    },
                    "start": 3604,
                    "end": 3611
                  },
                  "start": 3600,
                  "end": 3611
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3620,
                      "end": 3623
                    },
                    "start": 3618,
                    "end": 3623
                  },
                  "start": 3613,
                  "end": 3623
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "start",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3632,
                        "end": 3638
                      },
                      "start": 3630,
                      "end": 3638
                    },
                    "start": 3625,
                    "end": 3638
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3641,
                    "end": 3642
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3625,
                  "end": 3642
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "end",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3649,
                        "end": 3655
                      },
                      "start": 3647,
                      "end": 3655
                    },
                    "start": 3644,
                    "end": 3655
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 3658,
                    "end": 3662
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3644,
                  "end": 3662
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3670,
                          "end": 3674
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fill",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3675,
                          "end": 3679
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3670,
                        "end": 3679
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3680,
                          "end": 3685
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3687,
                          "end": 3692
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "end",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3694,
                              "end": 3697
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 3702,
                              "end": 3706
                            },
                            "start": 3694,
                            "end": 3706
                          },
                          "consequent": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "list",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3709,
                              "end": 3713
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3714,
                              "end": 3720
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3709,
                            "end": 3720
                          },
                          "alternate": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3723,
                            "end": 3726
                          },
                          "start": 3694,
                          "end": 3726
                        }
                      ],
                      "optional": false,
                      "start": 3670,
                      "end": 3727
                    },
                    "directive": null,
                    "start": 3670,
                    "end": 3728
                  }
                ],
                "start": 3664,
                "end": 3732
              },
              "expression": false,
              "start": 3574,
              "end": 3732
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3563,
            "end": 3732
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "equals",
              "optional": false,
              "typeAnnotation": null,
              "start": 3742,
              "end": 3748
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
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3761,
                        "end": 3772
                      },
                      "typeArguments": null,
                      "start": 3754,
                      "end": 3772
                    },
                    "start": 3752,
                    "end": 3772
                  },
                  "start": 3749,
                  "end": 3772
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3777,
                        "end": 3780
                      },
                      "start": 3777,
                      "end": 3782
                    },
                    "start": 3775,
                    "end": 3782
                  },
                  "start": 3774,
                  "end": 3782
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3787,
                        "end": 3790
                      },
                      "start": 3787,
                      "end": 3792
                    },
                    "start": 3785,
                    "end": 3792
                  },
                  "start": 3784,
                  "end": 3792
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3795,
                  "end": 3802
                },
                "start": 3793,
                "end": 3802
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3813,
                          "end": 3814
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3815,
                          "end": 3821
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3813,
                        "end": 3821
                      },
                      "operator": "!=",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3825,
                          "end": 3826
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3827,
                          "end": 3833
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3825,
                        "end": 3833
                      },
                      "start": 3813,
                      "end": 3833
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3842,
                        "end": 3847
                      },
                      "start": 3835,
                      "end": 3848
                    },
                    "alternate": null,
                    "start": 3809,
                    "end": 3848
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3862,
                            "end": 3863
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 3866,
                            "end": 3867
                          },
                          "definite": false,
                          "start": 3862,
                          "end": 3867
                        }
                      ],
                      "declare": false,
                      "start": 3858,
                      "end": 3867
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3869,
                        "end": 3870
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3873,
                          "end": 3874
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3875,
                          "end": 3881
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3873,
                        "end": 3881
                      },
                      "start": 3869,
                      "end": 3881
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3885,
                        "end": 3886
                      },
                      "start": 3883,
                      "end": 3886
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3900,
                                "end": 3901
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3902,
                                "end": 3903
                              },
                              "optional": false,
                              "computed": true,
                              "start": 3900,
                              "end": 3904
                            },
                            "operator": "!==",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3909,
                                "end": 3910
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3911,
                                "end": 3912
                              },
                              "optional": false,
                              "computed": true,
                              "start": 3909,
                              "end": 3913
                            },
                            "start": 3900,
                            "end": 3913
                          },
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 3922,
                              "end": 3927
                            },
                            "start": 3915,
                            "end": 3928
                          },
                          "alternate": null,
                          "start": 3896,
                          "end": 3928
                        }
                      ],
                      "start": 3888,
                      "end": 3934
                    },
                    "start": 3853,
                    "end": 3934
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 3946,
                      "end": 3950
                    },
                    "start": 3939,
                    "end": 3951
                  }
                ],
                "start": 3803,
                "end": 3955
              },
              "expression": false,
              "start": 3748,
              "end": 3955
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3735,
            "end": 3955
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 3965,
              "end": 3970
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
                      "start": 3971,
                      "end": 3972
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3971,
                    "end": 3972
                  }
                ],
                "start": 3970,
                "end": 3973
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3986,
                        "end": 3997
                      },
                      "typeArguments": null,
                      "start": 3979,
                      "end": 3997
                    },
                    "start": 3977,
                    "end": 3997
                  },
                  "start": 3974,
                  "end": 3997
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4002,
                          "end": 4003
                        },
                        "typeArguments": null,
                        "start": 4002,
                        "end": 4003
                      },
                      "start": 4002,
                      "end": 4005
                    },
                    "start": 4000,
                    "end": 4005
                  },
                  "start": 3999,
                  "end": 4005
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "from",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4013,
                        "end": 4019
                      },
                      "start": 4011,
                      "end": 4019
                    },
                    "start": 4007,
                    "end": 4019
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4022,
                    "end": 4023
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4007,
                  "end": 4023
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "to",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4029,
                        "end": 4035
                      },
                      "start": 4027,
                      "end": 4035
                    },
                    "start": 4025,
                    "end": 4035
                  },
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 4038,
                    "end": 4042
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4025,
                  "end": 4042
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4045,
                      "end": 4046
                    },
                    "typeArguments": null,
                    "start": 4045,
                    "end": 4046
                  },
                  "start": 4045,
                  "end": 4048
                },
                "start": 4043,
                "end": 4048
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4062,
                          "end": 4063
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "slice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4064,
                          "end": 4069
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4062,
                        "end": 4069
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4070,
                          "end": 4074
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "to",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4076,
                              "end": 4078
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 4083,
                              "end": 4087
                            },
                            "start": 4076,
                            "end": 4087
                          },
                          "consequent": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4090,
                            "end": 4099
                          },
                          "alternate": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "to",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4102,
                            "end": 4104
                          },
                          "start": 4076,
                          "end": 4104
                        }
                      ],
                      "optional": false,
                      "start": 4062,
                      "end": 4105
                    },
                    "start": 4055,
                    "end": 4106
                  }
                ],
                "start": 4049,
                "end": 4110
              },
              "expression": false,
              "start": 3970,
              "end": 4110
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3958,
            "end": 4110
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null,
              "start": 4120,
              "end": 4126
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
                      "start": 4127,
                      "end": 4128
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4127,
                    "end": 4128
                  }
                ],
                "start": 4126,
                "end": 4129
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4142,
                        "end": 4153
                      },
                      "typeArguments": null,
                      "start": 4135,
                      "end": 4153
                    },
                    "start": 4133,
                    "end": 4153
                  },
                  "start": 4130,
                  "end": 4153
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4158,
                          "end": 4159
                        },
                        "typeArguments": null,
                        "start": 4158,
                        "end": 4159
                      },
                      "start": 4158,
                      "end": 4161
                    },
                    "start": 4156,
                    "end": 4161
                  },
                  "start": 4155,
                  "end": 4161
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4169,
                      "end": 4175
                    },
                    "start": 4167,
                    "end": 4175
                  },
                  "start": 4163,
                  "end": 4175
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4185,
                      "end": 4191
                    },
                    "start": 4183,
                    "end": 4191
                  },
                  "start": 4177,
                  "end": 4191
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4194,
                      "end": 4195
                    },
                    "typeArguments": null,
                    "start": 4194,
                    "end": 4195
                  },
                  "start": 4194,
                  "end": 4197
                },
                "start": 4192,
                "end": 4197
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4207,
                          "end": 4208
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "splice",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4209,
                          "end": 4215
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4207,
                        "end": 4215
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4216,
                          "end": 4220
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4222,
                          "end": 4228
                        }
                      ],
                      "optional": false,
                      "start": 4207,
                      "end": 4229
                    },
                    "start": 4200,
                    "end": 4230
                  }
                ],
                "start": 4198,
                "end": 4232
              },
              "expression": false,
              "start": 4126,
              "end": 4232
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4113,
            "end": 4232
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null,
              "start": 4242,
              "end": 4246
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
                      "start": 4247,
                      "end": 4248
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4247,
                    "end": 4248
                  }
                ],
                "start": 4246,
                "end": 4249
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4262,
                        "end": 4273
                      },
                      "typeArguments": null,
                      "start": 4255,
                      "end": 4273
                    },
                    "start": 4253,
                    "end": 4273
                  },
                  "start": 4250,
                  "end": 4273
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4278,
                          "end": 4279
                        },
                        "typeArguments": null,
                        "start": 4278,
                        "end": 4279
                      },
                      "start": 4278,
                      "end": 4281
                    },
                    "start": 4276,
                    "end": 4281
                  },
                  "start": 4275,
                  "end": 4281
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "compareFn",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4299,
                                "end": 4300
                              },
                              "typeArguments": null,
                              "start": 4299,
                              "end": 4300
                            },
                            "start": 4297,
                            "end": 4300
                          },
                          "start": 4296,
                          "end": 4300
                        },
                        {
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4305,
                                "end": 4306
                              },
                              "typeArguments": null,
                              "start": 4305,
                              "end": 4306
                            },
                            "start": 4303,
                            "end": 4306
                          },
                          "start": 4302,
                          "end": 4306
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4311,
                          "end": 4317
                        },
                        "start": 4308,
                        "end": 4317
                      },
                      "start": 4295,
                      "end": 4317
                    },
                    "start": 4293,
                    "end": 4317
                  },
                  "start": 4283,
                  "end": 4317
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isPresent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4329,
                        "end": 4338
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "compareFn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4339,
                          "end": 4348
                        }
                      ],
                      "optional": false,
                      "start": 4329,
                      "end": 4349
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "l",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4359,
                                "end": 4360
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sort",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4361,
                                "end": 4365
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4359,
                              "end": 4365
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "compareFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4366,
                                "end": 4375
                              }
                            ],
                            "optional": false,
                            "start": 4359,
                            "end": 4376
                          },
                          "directive": null,
                          "start": 4359,
                          "end": 4377
                        }
                      ],
                      "start": 4351,
                      "end": 4383
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "l",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4397,
                                "end": 4398
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sort",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4399,
                                "end": 4403
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4397,
                              "end": 4403
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 4397,
                            "end": 4405
                          },
                          "directive": null,
                          "start": 4397,
                          "end": 4406
                        }
                      ],
                      "start": 4389,
                      "end": 4412
                    },
                    "start": 4325,
                    "end": 4412
                  }
                ],
                "start": 4319,
                "end": 4416
              },
              "expression": false,
              "start": 4246,
              "end": 4416
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4235,
            "end": 4416
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null,
              "start": 4426,
              "end": 4434
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
                      "start": 4435,
                      "end": 4436
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4435,
                    "end": 4436
                  }
                ],
                "start": 4434,
                "end": 4437
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4450,
                        "end": 4461
                      },
                      "typeArguments": null,
                      "start": 4443,
                      "end": 4461
                    },
                    "start": 4441,
                    "end": 4461
                  },
                  "start": 4438,
                  "end": 4461
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4466,
                          "end": 4467
                        },
                        "typeArguments": null,
                        "start": 4466,
                        "end": 4467
                      },
                      "start": 4466,
                      "end": 4469
                    },
                    "start": 4464,
                    "end": 4469
                  },
                  "start": 4463,
                  "end": 4469
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4472,
                  "end": 4478
                },
                "start": 4470,
                "end": 4478
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4488,
                          "end": 4489
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4490,
                          "end": 4498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4488,
                        "end": 4498
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4488,
                      "end": 4500
                    },
                    "start": 4481,
                    "end": 4501
                  }
                ],
                "start": 4479,
                "end": 4503
              },
              "expression": false,
              "start": 4434,
              "end": 4503
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4419,
            "end": 4503
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 4513,
              "end": 4519
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
                      "start": 4520,
                      "end": 4521
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4520,
                    "end": 4521
                  }
                ],
                "start": 4519,
                "end": 4522
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4535,
                        "end": 4546
                      },
                      "typeArguments": null,
                      "start": 4528,
                      "end": 4546
                    },
                    "start": 4526,
                    "end": 4546
                  },
                  "start": 4523,
                  "end": 4546
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4551,
                          "end": 4552
                        },
                        "typeArguments": null,
                        "start": 4551,
                        "end": 4552
                      },
                      "start": 4551,
                      "end": 4554
                    },
                    "start": 4549,
                    "end": 4554
                  },
                  "start": 4548,
                  "end": 4554
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4557,
                  "end": 4563
                },
                "start": 4555,
                "end": 4563
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSON",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4573,
                          "end": 4577
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stringify",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4578,
                          "end": 4587
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4573,
                        "end": 4587
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4588,
                          "end": 4589
                        }
                      ],
                      "optional": false,
                      "start": 4573,
                      "end": 4590
                    },
                    "start": 4566,
                    "end": 4591
                  }
                ],
                "start": 4564,
                "end": 4593
              },
              "expression": false,
              "start": 4519,
              "end": 4593
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4506,
            "end": 4593
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maximum",
              "optional": false,
              "typeAnnotation": null,
              "start": 4604,
              "end": 4611
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
                      "start": 4612,
                      "end": 4613
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4612,
                    "end": 4613
                  }
                ],
                "start": 4611,
                "end": 4614
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dit",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListWrapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4627,
                        "end": 4638
                      },
                      "typeArguments": null,
                      "start": 4620,
                      "end": 4638
                    },
                    "start": 4618,
                    "end": 4638
                  },
                  "start": 4615,
                  "end": 4638
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4646,
                          "end": 4647
                        },
                        "typeArguments": null,
                        "start": 4646,
                        "end": 4647
                      },
                      "start": 4646,
                      "end": 4649
                    },
                    "start": 4644,
                    "end": 4649
                  },
                  "start": 4640,
                  "end": 4649
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4666,
                                "end": 4667
                              },
                              "typeArguments": null,
                              "start": 4666,
                              "end": 4667
                            },
                            "start": 4664,
                            "end": 4667
                          },
                          "start": 4663,
                          "end": 4667
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4672,
                          "end": 4678
                        },
                        "start": 4669,
                        "end": 4678
                      },
                      "start": 4662,
                      "end": 4678
                    },
                    "start": 4660,
                    "end": 4678
                  },
                  "start": 4651,
                  "end": 4678
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4681,
                    "end": 4682
                  },
                  "typeArguments": null,
                  "start": 4681,
                  "end": 4682
                },
                "start": 4679,
                "end": 4682
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4693,
                          "end": 4697
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4698,
                          "end": 4704
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4693,
                        "end": 4704
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 4708,
                        "end": 4709
                      },
                      "start": 4693,
                      "end": 4709
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 4726,
                            "end": 4730
                          },
                          "start": 4719,
                          "end": 4731
                        }
                      ],
                      "start": 4711,
                      "end": 4737
                    },
                    "alternate": null,
                    "start": 4689,
                    "end": 4737
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
                          "name": "solution",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4756,
                                "end": 4757
                              },
                              "typeArguments": null,
                              "start": 4756,
                              "end": 4757
                            },
                            "start": 4754,
                            "end": 4757
                          },
                          "start": 4746,
                          "end": 4757
                        },
                        "init": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 4760,
                          "end": 4764
                        },
                        "definite": false,
                        "start": 4746,
                        "end": 4764
                      }
                    ],
                    "declare": false,
                    "start": 4742,
                    "end": 4765
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
                          "name": "maxValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4774,
                          "end": 4782
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Infinity",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4786,
                            "end": 4794
                          },
                          "prefix": true,
                          "start": 4785,
                          "end": 4794
                        },
                        "definite": false,
                        "start": 4774,
                        "end": 4794
                      }
                    ],
                    "declare": false,
                    "start": 4770,
                    "end": 4795
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4809,
                            "end": 4814
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4817,
                            "end": 4818
                          },
                          "definite": false,
                          "start": 4809,
                          "end": 4818
                        }
                      ],
                      "declare": false,
                      "start": 4805,
                      "end": 4818
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4820,
                        "end": 4825
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4828,
                          "end": 4832
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4833,
                          "end": 4839
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4828,
                        "end": 4839
                      },
                      "start": 4820,
                      "end": 4839
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4841,
                        "end": 4846
                      },
                      "start": 4841,
                      "end": 4848
                    },
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
                                "name": "candidate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4862,
                                "end": 4871
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "list",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4874,
                                  "end": 4878
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "index",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4879,
                                  "end": 4884
                                },
                                "optional": false,
                                "computed": true,
                                "start": 4874,
                                "end": 4885
                              },
                              "definite": false,
                              "start": 4862,
                              "end": 4885
                            }
                          ],
                          "declare": false,
                          "start": 4858,
                          "end": 4886
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isBlank",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4897,
                              "end": 4904
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "candidate",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4905,
                                "end": 4914
                              }
                            ],
                            "optional": false,
                            "start": 4897,
                            "end": 4915
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ContinueStatement",
                                "label": null,
                                "start": 4927,
                                "end": 4936
                              }
                            ],
                            "start": 4917,
                            "end": 4944
                          },
                          "alternate": null,
                          "start": 4893,
                          "end": 4944
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
                                "name": "candidateValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4955,
                                "end": 4969
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "predicate",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4972,
                                  "end": 4981
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "candidate",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4982,
                                    "end": 4991
                                  }
                                ],
                                "optional": false,
                                "start": 4972,
                                "end": 4992
                              },
                              "definite": false,
                              "start": 4955,
                              "end": 4992
                            }
                          ],
                          "declare": false,
                          "start": 4951,
                          "end": 4993
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "candidateValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5004,
                              "end": 5018
                            },
                            "operator": ">",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "maxValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5021,
                              "end": 5029
                            },
                            "start": 5004,
                            "end": 5029
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
                                    "name": "solution",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5041,
                                    "end": 5049
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "candidate",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5052,
                                    "end": 5061
                                  },
                                  "start": 5041,
                                  "end": 5061
                                },
                                "directive": null,
                                "start": 5041,
                                "end": 5062
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "maxValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5071,
                                    "end": 5079
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "candidateValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5082,
                                    "end": 5096
                                  },
                                  "start": 5071,
                                  "end": 5096
                                },
                                "directive": null,
                                "start": 5071,
                                "end": 5097
                              }
                            ],
                            "start": 5031,
                            "end": 5105
                          },
                          "alternate": null,
                          "start": 5000,
                          "end": 5105
                        }
                      ],
                      "start": 4850,
                      "end": 5111
                    },
                    "start": 4800,
                    "end": 5111
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "solution",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5123,
                      "end": 5131
                    },
                    "start": 5116,
                    "end": 5132
                  }
                ],
                "start": 4683,
                "end": 5136
              },
              "expression": false,
              "start": 4611,
              "end": 5136
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4597,
            "end": 5136
          }
        ],
        "start": 1290,
        "end": 5138
      },
      "abstract": false,
      "declare": false,
      "start": 1272,
      "end": 5138
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
            "name": "cloned",
            "optional": false,
            "typeAnnotation": null,
            "start": 5143,
            "end": 5149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListWrapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 5152,
                "end": 5163
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clone",
                "optional": false,
                "typeAnnotation": null,
                "start": 5164,
                "end": 5169
              },
              "optional": false,
              "computed": false,
              "start": 5152,
              "end": 5169
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ListWrapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 5170,
                "end": 5181
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5184,
                    "end": 5185
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5186,
                    "end": 5187
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 5188,
                    "end": 5189
                  },
                  {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4",
                    "start": 5190,
                    "end": 5191
                  }
                ],
                "start": 5183,
                "end": 5192
              }
            ],
            "optional": false,
            "start": 5152,
            "end": 5193
          },
          "definite": false,
          "start": 5143,
          "end": 5193
        }
      ],
      "declare": false,
      "start": 5139,
      "end": 5194
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBlank",
        "optional": false,
        "typeAnnotation": null,
        "start": 5212,
        "end": 5219
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 5223,
              "end": 5226
            },
            "start": 5221,
            "end": 5226
          },
          "start": 5220,
          "end": 5226
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5229,
          "end": 5236
        },
        "start": 5227,
        "end": 5236
      },
      "body": null,
      "expression": false,
      "start": 5195,
      "end": 5237
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isPresent",
        "optional": false,
        "typeAnnotation": null,
        "start": 5255,
        "end": 5264
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
              "start": 5265,
              "end": 5266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5265,
            "end": 5266
          }
        ],
        "start": 5264,
        "end": 5267
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "compareFn",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5284,
                        "end": 5285
                      },
                      "typeArguments": null,
                      "start": 5284,
                      "end": 5285
                    },
                    "start": 5282,
                    "end": 5285
                  },
                  "start": 5281,
                  "end": 5285
                },
                {
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5290,
                        "end": 5291
                      },
                      "typeArguments": null,
                      "start": 5290,
                      "end": 5291
                    },
                    "start": 5288,
                    "end": 5291
                  },
                  "start": 5287,
                  "end": 5291
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 5296,
                  "end": 5302
                },
                "start": 5293,
                "end": 5302
              },
              "start": 5280,
              "end": 5302
            },
            "start": 5278,
            "end": 5302
          },
          "start": 5268,
          "end": 5302
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5305,
          "end": 5312
        },
        "start": 5303,
        "end": 5312
      },
      "body": null,
      "expression": false,
      "start": 5238,
      "end": 5313
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 5324,
        "end": 5329
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
              "start": 5330,
              "end": 5331
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5330,
            "end": 5331
          }
        ],
        "start": 5329,
        "end": 5332
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fill",
              "optional": false,
              "typeAnnotation": null,
              "start": 5336,
              "end": 5340
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 5348,
                    "end": 5351
                  },
                  "start": 5346,
                  "end": 5351
                },
                "start": 5341,
                "end": 5351
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5360,
                    "end": 5366
                  },
                  "start": 5358,
                  "end": 5366
                },
                "start": 5353,
                "end": 5366
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5373,
                    "end": 5379
                  },
                  "start": 5371,
                  "end": 5379
                },
                "start": 5368,
                "end": 5379
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5382,
                "end": 5386
              },
              "start": 5380,
              "end": 5386
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5336,
            "end": 5387
          }
        ],
        "start": 5333,
        "end": 5389
      },
      "declare": false,
      "start": 5314,
      "end": 5389
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 140,
  "end": 5389
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 186,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 209,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 254,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "ListWrapper2",
    "start": 260,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 277,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 298,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "ListWrapper2",
    "start": 305,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 319,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 338,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 345,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 356,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 365,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "reversed",
    "start": 372,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 389,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "ListWrapper2",
    "start": 396,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 410,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "ListWrapper2",
    "start": 441,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 454,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 465,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 477,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 493,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "tessst",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 809,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 816,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "funkyFor",
    "start": 825,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 840,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 852,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 863,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 875,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 882,
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
    "value": "=>",
    "start": 890,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 899,
    "end": 900
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
    "type": "Identifier",
    "value": "array",
    "start": 913,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 939,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 956,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 962,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 974,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1002,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1017,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1060,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1090,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "interface",
    "start": 1181,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "Scanner",
    "start": 1191,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "scanRange",
    "start": 1203,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 1216,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1247,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1272,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 1278,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1398,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "createFixedSize",
    "start": 1405,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1426,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 1433,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1446,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1452,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1469,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1480,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1486,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1497,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "createGrowableSize",
    "start": 1504,
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
    "value": "dit",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 1528,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 1535,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1548,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1554,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1563,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1571,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1578,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1582,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 1588,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1599,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 1606,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1615,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 1627,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1640,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1650,
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
    "value": "T",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1659,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1666,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 1672,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1686,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "forEachWithIndex",
    "start": 1693,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1713,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1718,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 1725,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1738,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1750,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1764,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1772,
    "end": 1774
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1775,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1787,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1792,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1807,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1813,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1822,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1834,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1837,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1863,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1870,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1879,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1884,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 1891,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1904,
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
    "value": "T",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1925,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1930,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1937,
    "end": 1943
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1944,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1954,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 1961,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1977,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 1984,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1992,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1997,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2004,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2017,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2038,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2043,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 2049,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2052,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2058,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2065,
    "end": 2067
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "return",
    "start": 2071,
    "end": 2077
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2078,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2088,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2095,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2101,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2126,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 2133,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2144,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2149,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2156,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2169,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2181,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 2191,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2203,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2216,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2229,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2236,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 2242,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2250,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 2257,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2276,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "contains",
    "start": 2283,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2295,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2300,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2307,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2320,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 2331,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2339,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2349,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2356,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 2361,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 2369,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2373,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2385,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "reversed",
    "start": 2392,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2404,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2409,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2416,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2429,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2452,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2460,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 2472,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2478,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2483,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2495,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "scanner",
    "start": 2499,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "Scanner",
    "start": 2508,
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
    "value": "scanner",
    "start": 2521,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "scanRange",
    "start": 2529,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2548,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2562,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "tessst",
    "start": 2569,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "funkyFor",
    "start": 2576,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 2585,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2594,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 2599,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2609,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "reverse",
    "start": 2615,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2636,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 2643,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2650,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2655,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2662,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2678,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2685,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2688,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2696,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2704,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 2713,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2728,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "insert",
    "start": 2735,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2745,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2750,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2757,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2770,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2781,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2788,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2796,
    "end": 2801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2808,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 2813,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2820,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2830,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2842,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "removeAt",
    "start": 2849,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2861,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2866,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 2873,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2886,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2897,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2904,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2921,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 2925,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2931,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2936,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 2948,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 2953,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2960,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2975,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 2982,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2993,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "removeAll",
    "start": 3000,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3013,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3018,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 3025,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3038,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 3049,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3067,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3072,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 3087,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3093,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3101,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3114,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3118,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3126,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 3131,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 3139,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3156,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 3161,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3168,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3191,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "remove",
    "start": 3198,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3208,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3213,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 3220,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3233,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3242,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 3244,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3252,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3266,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3270,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3278,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "indexOf",
    "start": 3283,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 3291,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3300,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3304,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3324,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 3329,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3336,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3353,
    "end": 3359
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3360,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3376,
    "end": 3382
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3383,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3396,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "clear",
    "start": 3403,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3409,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3414,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 3421,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3434,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3440,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3449,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3454,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3470,
    "end": 3476
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 3477,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3485,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3490,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 3497,
    "end": 3508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3510,
    "end": 3514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3516,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3524,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3534,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3541,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3546,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3553,
    "end": 3555
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3563,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 3570,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3575,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3580,
    "end": 3586
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 3587,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3600,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3606,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3613,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3620,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 3625,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3632,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3642,
    "end": 3643
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 3644,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3649,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3658,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3670,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 3675,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3680,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 3687,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 3694,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3698,
    "end": 3701
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3702,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 3709,
    "end": 3713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3714,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 3723,
    "end": 3726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3731,
    "end": 3732
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3735,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 3742,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3749,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3752,
    "end": 3753
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3754,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 3761,
    "end": 3772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3772,
    "end": 3773
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3777,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3787,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3795,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3809,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3812,
    "end": 3813
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3815,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 3822,
    "end": 3824
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3827,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3835,
    "end": 3841
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3842,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3853,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3858,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3875,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 3883,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3896,
    "end": 3898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3902,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 3905,
    "end": 3908
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3915,
    "end": 3921
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3922,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3939,
    "end": 3945
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3946,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3958,
    "end": 3964
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 3965,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3974,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3979,
    "end": 3985
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 3986,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 4007,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4013,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 4025,
    "end": 4027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4029,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4038,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4055,
    "end": 4061
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 4064,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 4070,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 4076,
    "end": 4078
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4079,
    "end": 4082
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4083,
    "end": 4087
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4090,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Identifier",
    "value": "to",
    "start": 4102,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4113,
    "end": 4119
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 4120,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4128,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4130,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4135,
    "end": 4141
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 4142,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 4163,
    "end": 4167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4169,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4177,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4185,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4191,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4200,
    "end": 4206
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Identifier",
    "value": "splice",
    "start": 4209,
    "end": 4215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 4216,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4222,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4235,
    "end": 4241
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 4242,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4250,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4255,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 4262,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Identifier",
    "value": "compareFn",
    "start": 4283,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4300,
    "end": 4301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4308,
    "end": 4310
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4311,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4325,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Identifier",
    "value": "isPresent",
    "start": 4329,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "compareFn",
    "start": 4339,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 4361,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Identifier",
    "value": "compareFn",
    "start": 4366,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4375,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4384,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Identifier",
    "value": "sort",
    "start": 4399,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4419,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 4426,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4436,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4438,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4443,
    "end": 4449
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 4450,
    "end": 4461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4461,
    "end": 4462
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4464,
    "end": 4465
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4472,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4481,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4488,
    "end": 4489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 4490,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4506,
    "end": 4512
  },
  {
    "type": "Identifier",
    "value": "toJSON",
    "start": 4513,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4523,
    "end": 4526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4528,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 4535,
    "end": 4546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4549,
    "end": 4550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4553,
    "end": 4554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4554,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4557,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4566,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 4573,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Identifier",
    "value": "stringify",
    "start": 4578,
    "end": 4587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 4588,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4597,
    "end": 4603
  },
  {
    "type": "Identifier",
    "value": "maximum",
    "start": 4604,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4615,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4620,
    "end": 4626
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 4627,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 4640,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4647,
    "end": 4648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4649,
    "end": 4650
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 4651,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 4663,
    "end": 4664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4664,
    "end": 4665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4666,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4669,
    "end": 4671
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4672,
    "end": 4678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4679,
    "end": 4680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4689,
    "end": 4691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 4693,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4698,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4705,
    "end": 4707
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4709,
    "end": 4710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4711,
    "end": 4712
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4719,
    "end": 4725
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4726,
    "end": 4730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4736,
    "end": 4737
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4742,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "solution",
    "start": 4746,
    "end": 4754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4760,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4770,
    "end": 4773
  },
  {
    "type": "Identifier",
    "value": "maxValue",
    "start": 4774,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4783,
    "end": 4784
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Identifier",
    "value": "Infinity",
    "start": 4786,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4794,
    "end": 4795
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4800,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4805,
    "end": 4808
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4809,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4815,
    "end": 4816
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4820,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 4828,
    "end": 4832
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4832,
    "end": 4833
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4833,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4841,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4846,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4848,
    "end": 4849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4850,
    "end": 4851
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4858,
    "end": 4861
  },
  {
    "type": "Identifier",
    "value": "candidate",
    "start": 4862,
    "end": 4871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 4874,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4879,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4884,
    "end": 4885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4885,
    "end": 4886
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4893,
    "end": 4895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4896,
    "end": 4897
  },
  {
    "type": "Identifier",
    "value": "isBlank",
    "start": 4897,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "candidate",
    "start": 4905,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4915,
    "end": 4916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4917,
    "end": 4918
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 4927,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4943,
    "end": 4944
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4951,
    "end": 4954
  },
  {
    "type": "Identifier",
    "value": "candidateValue",
    "start": 4955,
    "end": 4969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 4972,
    "end": 4981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "Identifier",
    "value": "candidate",
    "start": 4982,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4992,
    "end": 4993
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5000,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5003,
    "end": 5004
  },
  {
    "type": "Identifier",
    "value": "candidateValue",
    "start": 5004,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Identifier",
    "value": "maxValue",
    "start": 5021,
    "end": 5029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5029,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Identifier",
    "value": "solution",
    "start": 5041,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Identifier",
    "value": "candidate",
    "start": 5052,
    "end": 5061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5061,
    "end": 5062
  },
  {
    "type": "Identifier",
    "value": "maxValue",
    "start": 5071,
    "end": 5079
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5080,
    "end": 5081
  },
  {
    "type": "Identifier",
    "value": "candidateValue",
    "start": 5082,
    "end": 5096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5096,
    "end": 5097
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5110,
    "end": 5111
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5116,
    "end": 5122
  },
  {
    "type": "Identifier",
    "value": "solution",
    "start": 5123,
    "end": 5131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5131,
    "end": 5132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5139,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "cloned",
    "start": 5143,
    "end": 5149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 5152,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 5164,
    "end": 5169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5169,
    "end": 5170
  },
  {
    "type": "Identifier",
    "value": "ListWrapper",
    "start": 5170,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5193,
    "end": 5194
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5195,
    "end": 5202
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5203,
    "end": 5211
  },
  {
    "type": "Identifier",
    "value": "isBlank",
    "start": 5212,
    "end": 5219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5219,
    "end": 5220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5220,
    "end": 5221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5221,
    "end": 5222
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5223,
    "end": 5226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5226,
    "end": 5227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5229,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5236,
    "end": 5237
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5238,
    "end": 5245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5246,
    "end": 5254
  },
  {
    "type": "Identifier",
    "value": "isPresent",
    "start": 5255,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5264,
    "end": 5265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5265,
    "end": 5266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5267,
    "end": 5268
  },
  {
    "type": "Identifier",
    "value": "compareFn",
    "start": 5268,
    "end": 5277
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5281,
    "end": 5282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5282,
    "end": 5283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5285,
    "end": 5286
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5287,
    "end": 5288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5288,
    "end": 5289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5291,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5293,
    "end": 5295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5296,
    "end": 5302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5302,
    "end": 5303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5303,
    "end": 5304
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5305,
    "end": 5312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5314,
    "end": 5323
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5324,
    "end": 5329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5330,
    "end": 5331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 5336,
    "end": 5340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5340,
    "end": 5341
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5341,
    "end": 5346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5348,
    "end": 5351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 5353,
    "end": 5358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5358,
    "end": 5359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5360,
    "end": 5366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5366,
    "end": 5367
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 5368,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5373,
    "end": 5379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5380,
    "end": 5381
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5382,
    "end": 5386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5386,
    "end": 5387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5388,
    "end": 5389
  }
]
```
