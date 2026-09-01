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
                "start": 38,
                "end": 42
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
                      "start": 43,
                      "end": 44
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 43,
                    "end": 44
                  }
                ],
                "start": 42,
                "end": 45
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
                      "start": 63,
                      "end": 67
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
                          "start": 69,
                          "end": 73
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
                                "start": 74,
                                "end": 75
                              },
                              "typeArguments": null,
                              "start": 74,
                              "end": 75
                            }
                          ],
                          "start": 73,
                          "end": 76
                        },
                        "start": 69,
                        "end": 76
                      },
                      "start": 67,
                      "end": 76
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
                    "start": 56,
                    "end": 77
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
                      "start": 93,
                      "end": 97
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
                          "start": 99,
                          "end": 103
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
                                "start": 104,
                                "end": 105
                              },
                              "typeArguments": null,
                              "start": 104,
                              "end": 105
                            }
                          ],
                          "start": 103,
                          "end": 106
                        },
                        "start": 99,
                        "end": 106
                      },
                      "start": 97,
                      "end": 106
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
                    "start": 86,
                    "end": 107
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
                      "start": 117,
                      "end": 128
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
                                "start": 144,
                                "end": 151
                              },
                              "start": 142,
                              "end": 151
                            },
                            "start": 136,
                            "end": 151
                          },
                          "readonly": false,
                          "static": false,
                          "start": 129,
                          "end": 151
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
                                  "start": 166,
                                  "end": 167
                                },
                                "typeArguments": null,
                                "start": 166,
                                "end": 167
                              },
                              "start": 164,
                              "end": 167
                            },
                            "start": 160,
                            "end": 167
                          },
                          "readonly": false,
                          "static": false,
                          "start": 153,
                          "end": 167
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 169,
                        "end": 189
                      },
                      "expression": false,
                      "start": 128,
                      "end": 189
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 117,
                    "end": 189
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeHead",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 221
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
                            "name": "List",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 229
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
                                  "start": 230,
                                  "end": 231
                                },
                                "typeArguments": null,
                                "start": 230,
                                "end": 231
                              }
                            ],
                            "start": 229,
                            "end": 232
                          },
                          "start": 225,
                          "end": 232
                        },
                        "start": 223,
                        "end": 232
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
                                        "start": 274,
                                        "end": 278
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
                                              "start": 279,
                                              "end": 280
                                            },
                                            "typeArguments": null,
                                            "start": 279,
                                            "end": 280
                                          }
                                        ],
                                        "start": 278,
                                        "end": 281
                                      },
                                      "start": 274,
                                      "end": 281
                                    },
                                    "start": 272,
                                    "end": 281
                                  },
                                  "start": 267,
                                  "end": 281
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 288,
                                    "end": 292
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
                                          "start": 293,
                                          "end": 294
                                        },
                                        "typeArguments": null,
                                        "start": 293,
                                        "end": 294
                                      }
                                    ],
                                    "start": 292,
                                    "end": 295
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 296,
                                      "end": 300
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 302,
                                      "end": 306
                                    }
                                  ],
                                  "start": 284,
                                  "end": 307
                                },
                                "definite": false,
                                "start": 267,
                                "end": 307
                              }
                            ],
                            "declare": false,
                            "start": 263,
                            "end": 308
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
                                  "start": 321,
                                  "end": 326
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 327,
                                  "end": 331
                                },
                                "optional": false,
                                "computed": false,
                                "start": 321,
                                "end": 331
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 334,
                                "end": 339
                              },
                              "start": 321,
                              "end": 339
                            },
                            "directive": null,
                            "start": 321,
                            "end": 340
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
                                  "start": 353,
                                  "end": 358
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 359,
                                  "end": 363
                                },
                                "optional": false,
                                "computed": false,
                                "start": 353,
                                "end": 363
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 366,
                                "end": 371
                              },
                              "start": 353,
                              "end": 371
                            },
                            "directive": null,
                            "start": 353,
                            "end": 372
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 392,
                              "end": 397
                            },
                            "start": 385,
                            "end": 398
                          }
                        ],
                        "start": 233,
                        "end": 408
                      },
                      "expression": false,
                      "start": 221,
                      "end": 408
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 199,
                    "end": 408
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeHead2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 449
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
                              "start": 450,
                              "end": 451
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 450,
                            "end": 451
                          }
                        ],
                        "start": 449,
                        "end": 452
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
                            "start": 456,
                            "end": 460
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
                                  "start": 461,
                                  "end": 462
                                },
                                "typeArguments": null,
                                "start": 461,
                                "end": 462
                              }
                            ],
                            "start": 460,
                            "end": 463
                          },
                          "start": 456,
                          "end": 463
                        },
                        "start": 454,
                        "end": 463
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
                                        "start": 509,
                                        "end": 513
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
                                              "start": 514,
                                              "end": 515
                                            },
                                            "typeArguments": null,
                                            "start": 514,
                                            "end": 515
                                          }
                                        ],
                                        "start": 513,
                                        "end": 516
                                      },
                                      "start": 509,
                                      "end": 516
                                    },
                                    "start": 507,
                                    "end": 516
                                  },
                                  "start": 502,
                                  "end": 516
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 523,
                                    "end": 527
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
                                          "start": 528,
                                          "end": 529
                                        },
                                        "typeArguments": null,
                                        "start": 528,
                                        "end": 529
                                      }
                                    ],
                                    "start": 527,
                                    "end": 530
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 531,
                                      "end": 535
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 537,
                                      "end": 541
                                    }
                                  ],
                                  "start": 519,
                                  "end": 542
                                },
                                "definite": false,
                                "start": 502,
                                "end": 542
                              }
                            ],
                            "declare": false,
                            "start": 498,
                            "end": 543
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
                                  "start": 556,
                                  "end": 561
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 562,
                                  "end": 566
                                },
                                "optional": false,
                                "computed": false,
                                "start": 556,
                                "end": 566
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 569,
                                "end": 574
                              },
                              "start": 556,
                              "end": 574
                            },
                            "directive": null,
                            "start": 556,
                            "end": 575
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
                                  "start": 588,
                                  "end": 593
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 594,
                                  "end": 598
                                },
                                "optional": false,
                                "computed": false,
                                "start": 588,
                                "end": 598
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 601,
                                "end": 606
                              },
                              "start": 588,
                              "end": 606
                            },
                            "directive": null,
                            "start": 588,
                            "end": 607
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 627,
                              "end": 632
                            },
                            "start": 620,
                            "end": 633
                          }
                        ],
                        "start": 464,
                        "end": 643
                      },
                      "expression": false,
                      "start": 449,
                      "end": 643
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 426,
                    "end": 643
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MakeHead3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 669,
                      "end": 678
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 679,
                              "end": 680
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 679,
                            "end": 680
                          }
                        ],
                        "start": 678,
                        "end": 681
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
                            "start": 685,
                            "end": 689
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 690,
                                  "end": 691
                                },
                                "typeArguments": null,
                                "start": 690,
                                "end": 691
                              }
                            ],
                            "start": 689,
                            "end": 692
                          },
                          "start": 685,
                          "end": 692
                        },
                        "start": 683,
                        "end": 692
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
                                        "start": 738,
                                        "end": 742
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "U",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 743,
                                              "end": 744
                                            },
                                            "typeArguments": null,
                                            "start": 743,
                                            "end": 744
                                          }
                                        ],
                                        "start": 742,
                                        "end": 745
                                      },
                                      "start": 738,
                                      "end": 745
                                    },
                                    "start": 736,
                                    "end": 745
                                  },
                                  "start": 731,
                                  "end": 745
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "List",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 752,
                                    "end": 756
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 757,
                                          "end": 758
                                        },
                                        "typeArguments": null,
                                        "start": 757,
                                        "end": 758
                                      }
                                    ],
                                    "start": 756,
                                    "end": 759
                                  },
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 760,
                                      "end": 764
                                    },
                                    {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 766,
                                      "end": 770
                                    }
                                  ],
                                  "start": 748,
                                  "end": 771
                                },
                                "definite": false,
                                "start": 731,
                                "end": 771
                              }
                            ],
                            "declare": false,
                            "start": 727,
                            "end": 772
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
                                  "start": 785,
                                  "end": 790
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "prev",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 791,
                                  "end": 795
                                },
                                "optional": false,
                                "computed": false,
                                "start": 785,
                                "end": 795
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 798,
                                "end": 803
                              },
                              "start": 785,
                              "end": 803
                            },
                            "directive": null,
                            "start": 785,
                            "end": 804
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
                                  "start": 817,
                                  "end": 822
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 823,
                                  "end": 827
                                },
                                "optional": false,
                                "computed": false,
                                "start": 817,
                                "end": 827
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 830,
                                "end": 835
                              },
                              "start": 817,
                              "end": 835
                            },
                            "directive": null,
                            "start": 817,
                            "end": 836
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 856,
                              "end": 861
                            },
                            "start": 849,
                            "end": 862
                          }
                        ],
                        "start": 693,
                        "end": 872
                      },
                      "expression": false,
                      "start": 678,
                      "end": 872
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 655,
                    "end": 872
                  }
                ],
                "start": 46,
                "end": 880
              },
              "abstract": false,
              "declare": false,
              "start": 32,
              "end": 880
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 880
          }
        ],
        "start": 17,
        "end": 882
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 882
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 882
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
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 56,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 63,
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
    "value": "List",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 86,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 93,
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
    "value": "List",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 117,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "isHead",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 144,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 153,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 199,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 206,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "MakeHead",
    "start": 213,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 225,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 267,
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
    "value": "List",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Null",
    "value": "null",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 327,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 353,
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
    "value": "next",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 385,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 426,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 433,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "MakeHead2",
    "start": 440,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 519,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 523,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Null",
    "value": "null",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 556,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 562,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 569,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 588,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 594,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 601,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 620,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 627,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 655,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 662,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "MakeHead3",
    "start": 669,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 727,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 731,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 738,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 748,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 752,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 760,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "Null",
    "value": "null",
    "start": 766,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 785,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "prev",
    "start": 791,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 798,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 817,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 823,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 849,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 856,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 881,
    "end": 882
  }
]
```
