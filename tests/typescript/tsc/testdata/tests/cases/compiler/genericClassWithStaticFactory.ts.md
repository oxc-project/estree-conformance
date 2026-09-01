__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 41
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
                      "start": 42,
                      "end": 43
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 42,
                    "end": 43
                  }
                ],
                "start": 41,
                "end": 44
              },
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
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 62,
                      "end": 66
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 68,
                          "end": 72
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 73,
                                "end": 74
                              },
                              "typeArguments": null,
                              "start": 73,
                              "end": 74
                            }
                          ],
                          "start": 72,
                          "end": 75
                        },
                        "start": 68,
                        "end": 75
                      },
                      "start": 66,
                      "end": 75
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 55,
                    "end": 76
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prev",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 96
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 102
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 103,
                                "end": 104
                              },
                              "typeArguments": null,
                              "start": 103,
                              "end": 104
                            }
                          ],
                          "start": 102,
                          "end": 105
                        },
                        "start": 98,
                        "end": 105
                      },
                      "start": 96,
                      "end": 105
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 85,
                    "end": 106
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listFactory",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 134
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ListFactory",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 147
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 148,
                                "end": 149
                              },
                              "typeArguments": null,
                              "start": 148,
                              "end": 149
                            }
                          ],
                          "start": 147,
                          "end": 150
                        },
                        "start": 136,
                        "end": 150
                      },
                      "start": 134,
                      "end": 150
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
                    "start": 115,
                    "end": 151
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 172
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isHead",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSBooleanKeyword",
                                "start": 188,
                                "end": 195
                              },
                              "start": 186,
                              "end": 195
                            },
                            "start": 180,
                            "end": 195
                          },
                          "readonly": false,
                          "static": false,
                          "start": 173,
                          "end": 195
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
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
                                  "start": 210,
                                  "end": 211
                                },
                                "typeArguments": null,
                                "start": 210,
                                "end": 211
                              },
                              "start": 208,
                              "end": 211
                            },
                            "start": 204,
                            "end": 211
                          },
                          "readonly": false,
                          "static": false,
                          "start": 197,
                          "end": 211
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
                                  "type": "ThisExpression",
                                  "start": 227,
                                  "end": 231
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "listFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 232,
                                  "end": 243
                                },
                                "optional": false,
                                "computed": false,
                                "start": 227,
                                "end": 243
                              },
                              "right": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ListFactory",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 250,
                                  "end": 261
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 262,
                                        "end": 263
                                      },
                                      "typeArguments": null,
                                      "start": 262,
                                      "end": 263
                                    }
                                  ],
                                  "start": 261,
                                  "end": 264
                                },
                                "arguments": [],
                                "start": 246,
                                "end": 266
                              },
                              "start": 227,
                              "end": 266
                            },
                            "directive": null,
                            "start": 227,
                            "end": 267
                          }
                        ],
                        "start": 213,
                        "end": 289
                      },
                      "expression": false,
                      "start": 172,
                      "end": 289
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 161,
                    "end": 289
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "add",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 309
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
                          "name": "data",
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
                                "start": 316,
                                "end": 317
                              },
                              "typeArguments": null,
                              "start": 316,
                              "end": 317
                            },
                            "start": 314,
                            "end": 317
                          },
                          "start": 310,
                          "end": 317
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 320,
                            "end": 324
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 325,
                                  "end": 326
                                },
                                "typeArguments": null,
                                "start": 325,
                                "end": 326
                              }
                            ],
                            "start": 324,
                            "end": 327
                          },
                          "start": 320,
                          "end": 327
                        },
                        "start": 318,
                        "end": 327
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 346,
                                  "end": 351
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 354,
                                        "end": 358
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 359,
                                        "end": 370
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 354,
                                      "end": 370
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 371,
                                      "end": 380
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 354,
                                    "end": 380
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 381,
                                      "end": 385
                                    }
                                  ],
                                  "optional": false,
                                  "start": 354,
                                  "end": 386
                                },
                                "definite": false,
                                "start": 346,
                                "end": 386
                              }
                            ],
                            "declare": false,
                            "start": 342,
                            "end": 387
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 413,
                                    "end": 417
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 418,
                                    "end": 422
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 413,
                                  "end": 422
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 423,
                                  "end": 427
                                },
                                "optional": false,
                                "computed": false,
                                "start": 413,
                                "end": 427
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 430,
                                "end": 435
                              },
                              "start": 413,
                              "end": 435
                            },
                            "directive": null,
                            "start": 413,
                            "end": 436
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 449,
                                  "end": 454
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 455,
                                  "end": 459
                                },
                                "optional": false,
                                "computed": false,
                                "start": 449,
                                "end": 459
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 462,
                                "end": 466
                              },
                              "start": 449,
                              "end": 466
                            },
                            "directive": null,
                            "start": 449,
                            "end": 467
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 485
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 486,
                                  "end": 490
                                },
                                "optional": false,
                                "computed": false,
                                "start": 480,
                                "end": 490
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 493,
                                  "end": 497
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 498,
                                  "end": 502
                                },
                                "optional": false,
                                "computed": false,
                                "start": 493,
                                "end": 502
                              },
                              "start": 480,
                              "end": 502
                            },
                            "directive": null,
                            "start": 480,
                            "end": 503
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 516,
                                  "end": 520
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 521,
                                  "end": 525
                                },
                                "optional": false,
                                "computed": false,
                                "start": 516,
                                "end": 525
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 528,
                                "end": 533
                              },
                              "start": 516,
                              "end": 533
                            },
                            "directive": null,
                            "start": 516,
                            "end": 534
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 554,
                              "end": 559
                            },
                            "start": 547,
                            "end": 560
                          }
                        ],
                        "start": 328,
                        "end": 570
                      },
                      "expression": false,
                      "start": 309,
                      "end": 570
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 299,
                    "end": 570
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "count",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 587,
                      "end": 592
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
                          "type": "TSNumberKeyword",
                          "start": 596,
                          "end": 602
                        },
                        "start": 594,
                        "end": 602
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 628,
                                        "end": 632
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 633,
                                              "end": 634
                                            },
                                            "typeArguments": null,
                                            "start": 633,
                                            "end": 634
                                          }
                                        ],
                                        "start": 632,
                                        "end": 635
                                      },
                                      "start": 628,
                                      "end": 635
                                    },
                                    "start": 626,
                                    "end": 635
                                  },
                                  "start": 621,
                                  "end": 635
                                },
                                "init": null,
                                "definite": false,
                                "start": 621,
                                "end": 635
                              }
                            ],
                            "declare": false,
                            "start": 617,
                            "end": 636
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
                                  "name": "i",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 656,
                                      "end": 662
                                    },
                                    "start": 654,
                                    "end": 662
                                  },
                                  "start": 653,
                                  "end": 662
                                },
                                "init": null,
                                "definite": false,
                                "start": 653,
                                "end": 662
                              }
                            ],
                            "declare": false,
                            "start": 649,
                            "end": 663
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 677,
                                "end": 682
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 685,
                                  "end": 689
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 690,
                                  "end": 694
                                },
                                "optional": false,
                                "computed": false,
                                "start": 685,
                                "end": 694
                              },
                              "start": 677,
                              "end": 694
                            },
                            "directive": null,
                            "start": 677,
                            "end": 695
                          },
                          {
                            "type": "ForStatement",
                            "init": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 713,
                                "end": 714
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 717,
                                "end": 718
                              },
                              "start": 713,
                              "end": 718
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 722,
                                  "end": 727
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 728,
                                  "end": 734
                                },
                                "optional": false,
                                "computed": false,
                                "start": 722,
                                "end": 734
                              },
                              "prefix": true,
                              "start": 720,
                              "end": 735
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
                                "start": 737,
                                "end": 738
                              },
                              "start": 737,
                              "end": 740
                            },
                            "body": {
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
                                      "name": "entry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 760,
                                      "end": 765
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "entry",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 768,
                                        "end": 773
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 774,
                                        "end": 778
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 768,
                                      "end": 778
                                    },
                                    "start": 760,
                                    "end": 778
                                  },
                                  "directive": null,
                                  "start": 760,
                                  "end": 779
                                }
                              ],
                              "start": 742,
                              "end": 793
                            },
                            "start": 708,
                            "end": 793
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 815,
                              "end": 816
                            },
                            "start": 807,
                            "end": 818
                          }
                        ],
                        "start": 603,
                        "end": 828
                      },
                      "expression": false,
                      "start": 592,
                      "end": 828
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 580,
                    "end": 828
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
                      "start": 845,
                      "end": 852
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
                          "type": "TSBooleanKeyword",
                          "start": 856,
                          "end": 863
                        },
                        "start": 854,
                        "end": 863
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
                                  "type": "ThisExpression",
                                  "start": 886,
                                  "end": 890
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 891,
                                  "end": 895
                                },
                                "optional": false,
                                "computed": false,
                                "start": 886,
                                "end": 895
                              },
                              "operator": "==",
                              "right": {
                                "type": "ThisExpression",
                                "start": 899,
                                "end": 903
                              },
                              "start": 886,
                              "end": 903
                            },
                            "start": 878,
                            "end": 905
                          }
                        ],
                        "start": 864,
                        "end": 915
                      },
                      "expression": false,
                      "start": 852,
                      "end": 915
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 838,
                    "end": 915
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
                      "start": 932,
                      "end": 937
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 941,
                            "end": 942
                          },
                          "typeArguments": null,
                          "start": 941,
                          "end": 942
                        },
                        "start": 939,
                        "end": 942
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 961,
                                  "end": 965
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isEmpty",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 966,
                                  "end": 973
                                },
                                "optional": false,
                                "computed": false,
                                "start": 961,
                                "end": 973
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 961,
                              "end": 975
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1014,
                                        "end": 1018
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1019,
                                        "end": 1023
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1014,
                                      "end": 1023
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1024,
                                      "end": 1028
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1014,
                                    "end": 1028
                                  },
                                  "start": 1007,
                                  "end": 1029
                                }
                              ],
                              "start": 989,
                              "end": 1043
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 1086,
                                    "end": 1090
                                  },
                                  "start": 1079,
                                  "end": 1091
                                }
                              ],
                              "start": 1061,
                              "end": 1105
                            },
                            "start": 957,
                            "end": 1105
                          }
                        ],
                        "start": 943,
                        "end": 1115
                      },
                      "expression": false,
                      "start": 937,
                      "end": 1115
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 925,
                    "end": 1115
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pushEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1132,
                      "end": 1141
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
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1149,
                                "end": 1153
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1154,
                                      "end": 1155
                                    },
                                    "typeArguments": null,
                                    "start": 1154,
                                    "end": 1155
                                  }
                                ],
                                "start": 1153,
                                "end": 1156
                              },
                              "start": 1149,
                              "end": 1156
                            },
                            "start": 1147,
                            "end": 1156
                          },
                          "start": 1142,
                          "end": 1156
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1159,
                          "end": 1163
                        },
                        "start": 1157,
                        "end": 1163
                      },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1178,
                                  "end": 1183
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1184,
                                  "end": 1190
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1178,
                                "end": 1190
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 1193,
                                "end": 1198
                              },
                              "start": 1178,
                              "end": 1198
                            },
                            "directive": null,
                            "start": 1178,
                            "end": 1199
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1212,
                                  "end": 1217
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1218,
                                  "end": 1222
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1212,
                                "end": 1222
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1225,
                                  "end": 1229
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1230,
                                  "end": 1234
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1225,
                                "end": 1234
                              },
                              "start": 1212,
                              "end": 1234
                            },
                            "directive": null,
                            "start": 1212,
                            "end": 1235
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1248,
                                  "end": 1253
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1254,
                                  "end": 1258
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1248,
                                "end": 1258
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1261,
                                "end": 1265
                              },
                              "start": 1248,
                              "end": 1265
                            },
                            "directive": null,
                            "start": 1248,
                            "end": 1266
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1279,
                                  "end": 1283
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1284,
                                  "end": 1288
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1279,
                                "end": 1288
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1291,
                                "end": 1296
                              },
                              "start": 1279,
                              "end": 1296
                            },
                            "directive": null,
                            "start": 1279,
                            "end": 1297
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1310,
                                    "end": 1315
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1316,
                                    "end": 1320
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1310,
                                  "end": 1320
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1321,
                                  "end": 1325
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1310,
                                "end": 1325
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1328,
                                "end": 1333
                              },
                              "start": 1310,
                              "end": 1333
                            },
                            "directive": null,
                            "start": 1310,
                            "end": 1334
                          }
                        ],
                        "start": 1164,
                        "end": 1416
                      },
                      "expression": false,
                      "start": 1141,
                      "end": 1416
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1125,
                    "end": 1416
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "push",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1433,
                      "end": 1437
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
                          "name": "data",
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
                                "start": 1444,
                                "end": 1445
                              },
                              "typeArguments": null,
                              "start": 1444,
                              "end": 1445
                            },
                            "start": 1442,
                            "end": 1445
                          },
                          "start": 1438,
                          "end": 1445
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1448,
                          "end": 1452
                        },
                        "start": 1446,
                        "end": 1452
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1471,
                                  "end": 1476
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 1479,
                                        "end": 1483
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1484,
                                        "end": 1495
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1479,
                                      "end": 1495
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1496,
                                      "end": 1505
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1479,
                                    "end": 1505
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1506,
                                      "end": 1510
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1479,
                                  "end": 1511
                                },
                                "definite": false,
                                "start": 1471,
                                "end": 1511
                              }
                            ],
                            "declare": false,
                            "start": 1467,
                            "end": 1512
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1525,
                                  "end": 1530
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1531,
                                  "end": 1535
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1525,
                                "end": 1535
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1538,
                                "end": 1542
                              },
                              "start": 1525,
                              "end": 1542
                            },
                            "directive": null,
                            "start": 1525,
                            "end": 1543
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1556,
                                  "end": 1561
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1562,
                                  "end": 1568
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1556,
                                "end": 1568
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 1571,
                                "end": 1576
                              },
                              "start": 1556,
                              "end": 1576
                            },
                            "directive": null,
                            "start": 1556,
                            "end": 1577
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1590,
                                  "end": 1595
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1596,
                                  "end": 1600
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1590,
                                "end": 1600
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1603,
                                  "end": 1607
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1608,
                                  "end": 1612
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1603,
                                "end": 1612
                              },
                              "start": 1590,
                              "end": 1612
                            },
                            "directive": null,
                            "start": 1590,
                            "end": 1613
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1626,
                                  "end": 1631
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1632,
                                  "end": 1636
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1626,
                                "end": 1636
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 1639,
                                "end": 1643
                              },
                              "start": 1626,
                              "end": 1643
                            },
                            "directive": null,
                            "start": 1626,
                            "end": 1644
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1657,
                                  "end": 1661
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1662,
                                  "end": 1666
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1657,
                                "end": 1666
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1669,
                                "end": 1674
                              },
                              "start": 1657,
                              "end": 1674
                            },
                            "directive": null,
                            "start": 1657,
                            "end": 1675
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1688,
                                    "end": 1693
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1694,
                                    "end": 1698
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1688,
                                  "end": 1698
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1699,
                                  "end": 1703
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1688,
                                "end": 1703
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1706,
                                "end": 1711
                              },
                              "start": 1688,
                              "end": 1711
                            },
                            "directive": null,
                            "start": 1688,
                            "end": 1712
                          }
                        ],
                        "start": 1453,
                        "end": 1795
                      },
                      "expression": false,
                      "start": 1437,
                      "end": 1795
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1426,
                    "end": 1795
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "popEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1812,
                      "end": 1820
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
                          "name": "head",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1827,
                                "end": 1831
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1832,
                                      "end": 1833
                                    },
                                    "typeArguments": null,
                                    "start": 1832,
                                    "end": 1833
                                  }
                                ],
                                "start": 1831,
                                "end": 1834
                              },
                              "start": 1827,
                              "end": 1834
                            },
                            "start": 1825,
                            "end": 1834
                          },
                          "start": 1821,
                          "end": 1834
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1837,
                            "end": 1841
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1842,
                                  "end": 1843
                                },
                                "typeArguments": null,
                                "start": 1842,
                                "end": 1843
                              }
                            ],
                            "start": 1841,
                            "end": 1844
                          },
                          "start": 1837,
                          "end": 1844
                        },
                        "start": 1835,
                        "end": 1844
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1863,
                                  "end": 1867
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1868,
                                  "end": 1872
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1863,
                                "end": 1872
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isHead",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1873,
                                "end": 1879
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1863,
                              "end": 1879
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
                                    "start": 1906,
                                    "end": 1910
                                  },
                                  "start": 1899,
                                  "end": 1911
                                }
                              ],
                              "start": 1881,
                              "end": 1925
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1968,
                                          "end": 1972
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "listFactory",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1973,
                                          "end": 1984
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1968,
                                        "end": 1984
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "RemoveEntry",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1985,
                                        "end": 1996
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1968,
                                      "end": 1996
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1997,
                                          "end": 2001
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2002,
                                          "end": 2006
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 1997,
                                        "end": 2006
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1968,
                                    "end": 2007
                                  },
                                  "start": 1961,
                                  "end": 2008
                                }
                              ],
                              "start": 1943,
                              "end": 2022
                            },
                            "start": 1859,
                            "end": 2022
                          }
                        ],
                        "start": 1845,
                        "end": 2032
                      },
                      "expression": false,
                      "start": 1820,
                      "end": 2032
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1805,
                    "end": 2032
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2049,
                      "end": 2060
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
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2068,
                                "end": 2072
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2073,
                                      "end": 2074
                                    },
                                    "typeArguments": null,
                                    "start": 2073,
                                    "end": 2074
                                  }
                                ],
                                "start": 2072,
                                "end": 2075
                              },
                              "start": 2068,
                              "end": 2075
                            },
                            "start": 2066,
                            "end": 2075
                          },
                          "start": 2061,
                          "end": 2075
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2078,
                            "end": 2082
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2083,
                                  "end": 2084
                                },
                                "typeArguments": null,
                                "start": 2083,
                                "end": 2084
                              }
                            ],
                            "start": 2082,
                            "end": 2085
                          },
                          "start": 2078,
                          "end": 2085
                        },
                        "start": 2076,
                        "end": 2085
                      },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2100,
                                  "end": 2105
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2106,
                                  "end": 2112
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2100,
                                "end": 2112
                              },
                              "right": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 2115,
                                "end": 2120
                              },
                              "start": 2100,
                              "end": 2120
                            },
                            "directive": null,
                            "start": 2100,
                            "end": 2121
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2134,
                                    "end": 2138
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2139,
                                    "end": 2143
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2134,
                                  "end": 2143
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2144,
                                  "end": 2148
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2134,
                                "end": 2148
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2151,
                                "end": 2156
                              },
                              "start": 2134,
                              "end": 2156
                            },
                            "directive": null,
                            "start": 2134,
                            "end": 2157
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2170,
                                  "end": 2175
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2176,
                                  "end": 2180
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2170,
                                "end": 2180
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2183,
                                "end": 2187
                              },
                              "start": 2170,
                              "end": 2187
                            },
                            "directive": null,
                            "start": 2170,
                            "end": 2188
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2201,
                                  "end": 2206
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2207,
                                  "end": 2211
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2201,
                                "end": 2211
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2214,
                                  "end": 2218
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2219,
                                  "end": 2223
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2214,
                                "end": 2223
                              },
                              "start": 2201,
                              "end": 2223
                            },
                            "directive": null,
                            "start": 2201,
                            "end": 2224
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2237,
                                  "end": 2241
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2242,
                                  "end": 2246
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2237,
                                "end": 2246
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2249,
                                "end": 2254
                              },
                              "start": 2237,
                              "end": 2254
                            },
                            "directive": null,
                            "start": 2237,
                            "end": 2255
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2275,
                              "end": 2280
                            },
                            "start": 2268,
                            "end": 2281
                          }
                        ],
                        "start": 2086,
                        "end": 2291
                      },
                      "expression": false,
                      "start": 2060,
                      "end": 2291
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2042,
                    "end": 2291
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertAfter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2308,
                      "end": 2319
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
                          "name": "data",
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
                                "start": 2326,
                                "end": 2327
                              },
                              "typeArguments": null,
                              "start": 2326,
                              "end": 2327
                            },
                            "start": 2324,
                            "end": 2327
                          },
                          "start": 2320,
                          "end": 2327
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2330,
                            "end": 2334
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
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
                              }
                            ],
                            "start": 2334,
                            "end": 2337
                          },
                          "start": 2330,
                          "end": 2337
                        },
                        "start": 2328,
                        "end": 2337
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2363,
                                        "end": 2367
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2368,
                                              "end": 2369
                                            },
                                            "typeArguments": null,
                                            "start": 2368,
                                            "end": 2369
                                          }
                                        ],
                                        "start": 2367,
                                        "end": 2370
                                      },
                                      "start": 2363,
                                      "end": 2370
                                    },
                                    "start": 2361,
                                    "end": 2370
                                  },
                                  "start": 2356,
                                  "end": 2370
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2373,
                                        "end": 2377
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2378,
                                        "end": 2389
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2373,
                                      "end": 2389
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2390,
                                      "end": 2399
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2373,
                                    "end": 2399
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2400,
                                      "end": 2404
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2373,
                                  "end": 2405
                                },
                                "definite": false,
                                "start": 2356,
                                "end": 2405
                              }
                            ],
                            "declare": false,
                            "start": 2352,
                            "end": 2406
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2419,
                                  "end": 2424
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2425,
                                  "end": 2429
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2419,
                                "end": 2429
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2432,
                                  "end": 2436
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2437,
                                  "end": 2441
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2432,
                                "end": 2441
                              },
                              "start": 2419,
                              "end": 2441
                            },
                            "directive": null,
                            "start": 2419,
                            "end": 2442
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2455,
                                  "end": 2460
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2461,
                                  "end": 2465
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2455,
                                "end": 2465
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2468,
                                "end": 2472
                              },
                              "start": 2455,
                              "end": 2472
                            },
                            "directive": null,
                            "start": 2455,
                            "end": 2473
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2486,
                                  "end": 2490
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2491,
                                  "end": 2495
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2486,
                                "end": 2495
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2498,
                                "end": 2503
                              },
                              "start": 2486,
                              "end": 2503
                            },
                            "directive": null,
                            "start": 2486,
                            "end": 2504
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entry",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2517,
                                    "end": 2522
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "next",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2523,
                                    "end": 2527
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2517,
                                  "end": 2527
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2528,
                                  "end": 2532
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2517,
                                "end": 2532
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2535,
                                "end": 2540
                              },
                              "start": 2517,
                              "end": 2540
                            },
                            "directive": null,
                            "start": 2517,
                            "end": 2541
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2632,
                              "end": 2637
                            },
                            "start": 2625,
                            "end": 2638
                          }
                        ],
                        "start": 2338,
                        "end": 2648
                      },
                      "expression": false,
                      "start": 2319,
                      "end": 2648
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2301,
                    "end": 2648
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertEntryBefore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2665,
                      "end": 2682
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
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2690,
                                "end": 2694
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2695,
                                      "end": 2696
                                    },
                                    "typeArguments": null,
                                    "start": 2695,
                                    "end": 2696
                                  }
                                ],
                                "start": 2694,
                                "end": 2697
                              },
                              "start": 2690,
                              "end": 2697
                            },
                            "start": 2688,
                            "end": 2697
                          },
                          "start": 2683,
                          "end": 2697
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2700,
                            "end": 2704
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2705,
                                  "end": 2706
                                },
                                "typeArguments": null,
                                "start": 2705,
                                "end": 2706
                              }
                            ],
                            "start": 2704,
                            "end": 2707
                          },
                          "start": 2700,
                          "end": 2707
                        },
                        "start": 2698,
                        "end": 2707
                      },
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 2722,
                                    "end": 2726
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prev",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2727,
                                    "end": 2731
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 2722,
                                  "end": 2731
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2732,
                                  "end": 2736
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2722,
                                "end": 2736
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2739,
                                "end": 2744
                              },
                              "start": 2722,
                              "end": 2744
                            },
                            "directive": null,
                            "start": 2722,
                            "end": 2745
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2759,
                                  "end": 2764
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2765,
                                  "end": 2769
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2759,
                                "end": 2769
                              },
                              "right": {
                                "type": "ThisExpression",
                                "start": 2772,
                                "end": 2776
                              },
                              "start": 2759,
                              "end": 2776
                            },
                            "directive": null,
                            "start": 2759,
                            "end": 2777
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2790,
                                  "end": 2795
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2796,
                                  "end": 2800
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2790,
                                "end": 2800
                              },
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2803,
                                  "end": 2807
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2808,
                                  "end": 2812
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2803,
                                "end": 2812
                              },
                              "start": 2790,
                              "end": 2812
                            },
                            "directive": null,
                            "start": 2790,
                            "end": 2813
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 2826,
                                  "end": 2830
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2831,
                                  "end": 2835
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2826,
                                "end": 2835
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2838,
                                "end": 2843
                              },
                              "start": 2826,
                              "end": 2843
                            },
                            "directive": null,
                            "start": 2826,
                            "end": 2844
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2864,
                              "end": 2869
                            },
                            "start": 2857,
                            "end": 2870
                          }
                        ],
                        "start": 2708,
                        "end": 2880
                      },
                      "expression": false,
                      "start": 2682,
                      "end": 2880
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2658,
                    "end": 2880
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "insertBefore",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2897,
                      "end": 2909
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
                          "name": "data",
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
                                "start": 2916,
                                "end": 2917
                              },
                              "typeArguments": null,
                              "start": 2916,
                              "end": 2917
                            },
                            "start": 2914,
                            "end": 2917
                          },
                          "start": 2910,
                          "end": 2917
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2920,
                            "end": 2924
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2925,
                                  "end": 2926
                                },
                                "typeArguments": null,
                                "start": 2925,
                                "end": 2926
                              }
                            ],
                            "start": 2924,
                            "end": 2927
                          },
                          "start": 2920,
                          "end": 2927
                        },
                        "start": 2918,
                        "end": 2927
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2946,
                                  "end": 2951
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2954,
                                        "end": 2958
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "listFactory",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2959,
                                        "end": 2970
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2954,
                                      "end": 2970
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "MakeEntry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2971,
                                      "end": 2980
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2954,
                                    "end": 2980
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2981,
                                      "end": 2985
                                    }
                                  ],
                                  "optional": false,
                                  "start": 2954,
                                  "end": 2986
                                },
                                "definite": false,
                                "start": 2946,
                                "end": 2986
                              }
                            ],
                            "declare": false,
                            "start": 2942,
                            "end": 2987
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 3007,
                                  "end": 3011
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "insertEntryBefore",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3012,
                                  "end": 3029
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3007,
                                "end": 3029
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3030,
                                  "end": 3035
                                }
                              ],
                              "optional": false,
                              "start": 3007,
                              "end": 3036
                            },
                            "start": 3000,
                            "end": 3037
                          }
                        ],
                        "start": 2928,
                        "end": 3047
                      },
                      "expression": false,
                      "start": 2909,
                      "end": 3047
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2890,
                    "end": 3047
                  }
                ],
                "start": 45,
                "end": 3053
              },
              "abstract": false,
              "declare": false,
              "start": 31,
              "end": 3053
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 24,
            "end": 3053
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListFactory",
                "optional": false,
                "typeAnnotation": null,
                "start": 3072,
                "end": 3083
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
                      "start": 3084,
                      "end": 3085
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3084,
                    "end": 3085
                  }
                ],
                "start": 3083,
                "end": 3086
              },
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
                      "name": "MakeHead",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3105,
                      "end": 3113
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
                              "start": 3114,
                              "end": 3115
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3114,
                            "end": 3115
                          }
                        ],
                        "start": 3113,
                        "end": 3116
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3120,
                            "end": 3124
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3125,
                                  "end": 3126
                                },
                                "typeArguments": null,
                                "start": 3125,
                                "end": 3126
                              }
                            ],
                            "start": 3124,
                            "end": 3127
                          },
                          "start": 3120,
                          "end": 3127
                        },
                        "start": 3118,
                        "end": 3127
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3153,
                                        "end": 3157
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3158,
                                              "end": 3159
                                            },
                                            "typeArguments": null,
                                            "start": 3158,
                                            "end": 3159
                                          }
                                        ],
                                        "start": 3157,
                                        "end": 3160
                                      },
                                      "start": 3153,
                                      "end": 3160
                                    },
                                    "start": 3151,
                                    "end": 3160
                                  },
                                  "start": 3146,
                                  "end": 3160
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3167,
                                    "end": 3171
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3172,
                                          "end": 3173
                                        },
                                        "typeArguments": null,
                                        "start": 3172,
                                        "end": 3173
                                      }
                                    ],
                                    "start": 3171,
                                    "end": 3174
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 3175,
                                      "end": 3179
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 3181,
                                      "end": 3185
                                    }
                                  ],
                                  "start": 3163,
                                  "end": 3186
                                },
                                "definite": false,
                                "start": 3146,
                                "end": 3186
                              }
                            ],
                            "declare": false,
                            "start": 3142,
                            "end": 3187
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3200,
                                  "end": 3205
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3206,
                                  "end": 3210
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3200,
                                "end": 3210
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3213,
                                "end": 3218
                              },
                              "start": 3200,
                              "end": 3218
                            },
                            "directive": null,
                            "start": 3200,
                            "end": 3219
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3232,
                                  "end": 3237
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3238,
                                  "end": 3242
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3232,
                                "end": 3242
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3245,
                                "end": 3250
                              },
                              "start": 3232,
                              "end": 3250
                            },
                            "directive": null,
                            "start": 3232,
                            "end": 3251
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3271,
                              "end": 3276
                            },
                            "start": 3264,
                            "end": 3277
                          }
                        ],
                        "start": 3128,
                        "end": 3287
                      },
                      "expression": false,
                      "start": 3113,
                      "end": 3287
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3098,
                    "end": 3287
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3304,
                      "end": 3313
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
                              "start": 3314,
                              "end": 3315
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3314,
                            "end": 3315
                          }
                        ],
                        "start": 3313,
                        "end": 3316
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
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
                                "start": 3323,
                                "end": 3324
                              },
                              "typeArguments": null,
                              "start": 3323,
                              "end": 3324
                            },
                            "start": 3321,
                            "end": 3324
                          },
                          "start": 3317,
                          "end": 3324
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3327,
                            "end": 3331
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3332,
                                  "end": 3333
                                },
                                "typeArguments": null,
                                "start": 3332,
                                "end": 3333
                              }
                            ],
                            "start": 3331,
                            "end": 3334
                          },
                          "start": 3327,
                          "end": 3334
                        },
                        "start": 3325,
                        "end": 3334
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "List",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3360,
                                        "end": 3364
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 3365,
                                              "end": 3366
                                            },
                                            "typeArguments": null,
                                            "start": 3365,
                                            "end": 3366
                                          }
                                        ],
                                        "start": 3364,
                                        "end": 3367
                                      },
                                      "start": 3360,
                                      "end": 3367
                                    },
                                    "start": 3358,
                                    "end": 3367
                                  },
                                  "start": 3353,
                                  "end": 3367
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3374,
                                    "end": 3378
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3379,
                                          "end": 3380
                                        },
                                        "typeArguments": null,
                                        "start": 3379,
                                        "end": 3380
                                      }
                                    ],
                                    "start": 3378,
                                    "end": 3381
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 3382,
                                      "end": 3387
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3389,
                                      "end": 3393
                                    }
                                  ],
                                  "start": 3370,
                                  "end": 3394
                                },
                                "definite": false,
                                "start": 3353,
                                "end": 3394
                              }
                            ],
                            "declare": false,
                            "start": 3349,
                            "end": 3395
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3408,
                                  "end": 3413
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3414,
                                  "end": 3418
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3408,
                                "end": 3418
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3421,
                                "end": 3426
                              },
                              "start": 3408,
                              "end": 3426
                            },
                            "directive": null,
                            "start": 3408,
                            "end": 3427
                          },
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
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3440,
                                  "end": 3445
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3446,
                                  "end": 3450
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3440,
                                "end": 3450
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3453,
                                "end": 3458
                              },
                              "start": 3440,
                              "end": 3458
                            },
                            "directive": null,
                            "start": 3440,
                            "end": 3459
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3479,
                              "end": 3484
                            },
                            "start": 3472,
                            "end": 3485
                          }
                        ],
                        "start": 3335,
                        "end": 3495
                      },
                      "expression": false,
                      "start": 3313,
                      "end": 3495
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3297,
                    "end": 3495
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RemoveEntry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3512,
                      "end": 3523
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
                              "start": 3524,
                              "end": 3525
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3524,
                            "end": 3525
                          }
                        ],
                        "start": 3523,
                        "end": 3526
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "List",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3534,
                                "end": 3538
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3539,
                                      "end": 3540
                                    },
                                    "typeArguments": null,
                                    "start": 3539,
                                    "end": 3540
                                  }
                                ],
                                "start": 3538,
                                "end": 3541
                              },
                              "start": 3534,
                              "end": 3541
                            },
                            "start": 3532,
                            "end": 3541
                          },
                          "start": 3527,
                          "end": 3541
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3544,
                            "end": 3548
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3549,
                                  "end": 3550
                                },
                                "typeArguments": null,
                                "start": 3549,
                                "end": 3550
                              }
                            ],
                            "start": 3548,
                            "end": 3551
                          },
                          "start": 3544,
                          "end": 3551
                        },
                        "start": 3542,
                        "end": 3551
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3570,
                                "end": 3575
                              },
                              "operator": "==",
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 3579,
                                "end": 3583
                              },
                              "start": 3570,
                              "end": 3583
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
                                    "start": 3610,
                                    "end": 3614
                                  },
                                  "start": 3603,
                                  "end": 3615
                                }
                              ],
                              "start": 3585,
                              "end": 3629
                            },
                            "alternate": {
                              "type": "IfStatement",
                              "test": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3651,
                                  "end": 3656
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isHead",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3657,
                                  "end": 3663
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3651,
                                "end": 3663
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
                                      "start": 3738,
                                      "end": 3742
                                    },
                                    "start": 3731,
                                    "end": 3743
                                  }
                                ],
                                "start": 3665,
                                "end": 3757
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
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "entry",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3793,
                                            "end": 3798
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "next",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3799,
                                            "end": 3803
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3793,
                                          "end": 3803
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3804,
                                          "end": 3808
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3793,
                                        "end": 3808
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3811,
                                          "end": 3816
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "prev",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3817,
                                          "end": 3821
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3811,
                                        "end": 3821
                                      },
                                      "start": 3793,
                                      "end": 3821
                                    },
                                    "directive": null,
                                    "start": 3793,
                                    "end": 3822
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "entry",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3839,
                                            "end": 3844
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prev",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3845,
                                            "end": 3849
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 3839,
                                          "end": 3849
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3850,
                                          "end": 3854
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3839,
                                        "end": 3854
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "entry",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3857,
                                          "end": 3862
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "next",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3863,
                                          "end": 3867
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3857,
                                        "end": 3867
                                      },
                                      "start": 3839,
                                      "end": 3867
                                    },
                                    "directive": null,
                                    "start": 3839,
                                    "end": 3868
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "entry",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3893,
                                      "end": 3898
                                    },
                                    "start": 3886,
                                    "end": 3899
                                  }
                                ],
                                "start": 3775,
                                "end": 3913
                              },
                              "start": 3647,
                              "end": 3913
                            },
                            "start": 3566,
                            "end": 3913
                          }
                        ],
                        "start": 3552,
                        "end": 3923
                      },
                      "expression": false,
                      "start": 3523,
                      "end": 3923
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3505,
                    "end": 3923
                  }
                ],
                "start": 3087,
                "end": 3929
              },
              "abstract": false,
              "declare": false,
              "start": 3066,
              "end": 3929
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3059,
            "end": 3929
          }
        ],
        "start": 17,
        "end": 3931
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3931
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3931
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Editor",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 24,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "listFactory",
    "start": 123,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "ListFactory",
    "start": 136,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 161,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 173,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "isHead",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 197,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 227,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "listFactory",
    "start": 232,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "ListFactory",
    "start": 250,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 342,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 346,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "listFactory",
    "start": 359,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "MakeEntry",
    "start": 371,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 381,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 413,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 449,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 480,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 521,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 528,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 547,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 580,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 587,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 596,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 617,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 621,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 649,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 656,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 708,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "isHead",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 738,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 768,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 774,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 838,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 845,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 856,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 878,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 886,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 891,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 896,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 899,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 914,
    "end": 915
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 925,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 932,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 957,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 966,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
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
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1007,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1014,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1019,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
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
    "start": 1056,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "pushEntry",
    "start": 1132,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1159,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1178,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "isHead",
    "start": 1184,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1193,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1212,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1218,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1225,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1230,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1261,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1279,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1284,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1291,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1310,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1316,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1328,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1426,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1433,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1438,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1448,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1467,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1471,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1479,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "listFactory",
    "start": 1484,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "MakeEntry",
    "start": 1496,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1506,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1525,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1531,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1538,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1556,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "isHead",
    "start": 1562,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1571,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1590,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1596,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1626,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 1632,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1639,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1657,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1662,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1669,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1688,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1694,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 1699,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 1706,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "popEntry",
    "start": 1812,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 1821,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1827,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 1837,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1843,
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
    "value": "if",
    "start": 1859,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1863,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1868,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "isHead",
    "start": 1873,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1899,
    "end": 1905
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1906,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1938,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1961,
    "end": 1967
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1968,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "listFactory",
    "start": 1973,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "RemoveEntry",
    "start": 1985,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1997,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2002,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2042,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "insertEntry",
    "start": 2049,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2061,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2068,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2078,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2100,
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
    "value": "isHead",
    "start": 2106,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2115,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2134,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2139,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2144,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2151,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2170,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2176,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2183,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2201,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2207,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2214,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2219,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2237,
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
    "value": "prev",
    "start": 2242,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2249,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2268,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2275,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2301,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "insertAfter",
    "start": 2308,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "data",
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
    "value": ")",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2330,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2352,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2356,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2363,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2373,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "listFactory",
    "start": 2378,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "MakeEntry",
    "start": 2390,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2400,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2419,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2425,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2432,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2437,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2455,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2461,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2468,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2486,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2491,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2498,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2517,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2523,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2528,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2535,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2625,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2632,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2658,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "insertEntryBefore",
    "start": 2665,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2683,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2690,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2700,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2722,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2727,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2732,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2739,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2759,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 2765,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2772,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2790,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2796,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2803,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2808,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2826,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 2831,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2838,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2857,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2864,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2890,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "insertBefore",
    "start": 2897,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2910,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 2920,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2942,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 2946,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2954,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "listFactory",
    "start": 2959,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Identifier",
    "value": "MakeEntry",
    "start": 2971,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2981,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3000,
    "end": 3006
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3007,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "insertEntryBefore",
    "start": 3012,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3030,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3059,
    "end": 3065
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3066,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "ListFactory",
    "start": 3072,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3098,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "MakeHead",
    "start": 3105,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3120,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3142,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3146,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3153,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3163,
    "end": 3166
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3167,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3175,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3181,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3200,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 3206,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3213,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3232,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3238,
    "end": 3242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3245,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3264,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3271,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3297,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "MakeEntry",
    "start": 3304,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3317,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3327,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3349,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3353,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3360,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3370,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3374,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3382,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3389,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3408,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 3414,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3421,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3440,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3446,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3453,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3472,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3479,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3494,
    "end": 3495
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3505,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "RemoveEntry",
    "start": 3512,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3527,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3534,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 3544,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3566,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3570,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3576,
    "end": 3578
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3579,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3603,
    "end": 3609
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3610,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3642,
    "end": 3646
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3647,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3651,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "isHead",
    "start": 3657,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3731,
    "end": 3737
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3738,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3770,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3793,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3799,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 3804,
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
    "value": "entry",
    "start": 3811,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 3817,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3839,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 3845,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3850,
    "end": 3854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3857,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3863,
    "end": 3867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3867,
    "end": 3868
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3886,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 3893,
    "end": 3898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3898,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3930,
    "end": 3931
  }
]
```
