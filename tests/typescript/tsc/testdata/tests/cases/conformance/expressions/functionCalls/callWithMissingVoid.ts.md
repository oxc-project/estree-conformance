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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
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
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
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
                        "start": 36,
                        "end": 37
                      },
                      "typeArguments": null,
                      "start": 36,
                      "end": 37
                    },
                    "start": 34,
                    "end": 37
                  },
                  "start": 33,
                  "end": 37
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 58,
                            "end": 59
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 61,
                            "end": 62
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 58,
                          "end": 62
                        }
                      ],
                      "start": 56,
                      "end": 64
                    },
                    "start": 49,
                    "end": 65
                  }
                ],
                "start": 39,
                "end": 71
              },
              "expression": false,
              "start": 32,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 71
          }
        ],
        "start": 25,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 14,
      "end": 73
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 94,
                      "end": 98
                    }
                  ],
                  "start": 93,
                  "end": 99
                },
                "start": 92,
                "end": 99
              },
              "start": 90,
              "end": 99
            },
            "start": 89,
            "end": 99
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 99
        }
      ],
      "declare": true,
      "start": 75,
      "end": 100
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "optional": false,
          "computed": false,
          "start": 101,
          "end": 104
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 101,
        "end": 106
      },
      "directive": null,
      "start": 101,
      "end": 106
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
            "name": "xUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 167,
                          "end": 171
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 174,
                          "end": 180
                        }
                      ],
                      "start": 167,
                      "end": 180
                    }
                  ],
                  "start": 166,
                  "end": 181
                },
                "start": 165,
                "end": 181
              },
              "start": 163,
              "end": 181
            },
            "start": 157,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 157,
          "end": 181
        }
      ],
      "declare": true,
      "start": 143,
      "end": 182
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
            "name": "xUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 189
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 191
          },
          "optional": false,
          "computed": false,
          "start": 183,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 192,
            "end": 194
          }
        ],
        "optional": false,
        "start": 183,
        "end": 195
      },
      "directive": null,
      "start": 183,
      "end": 195
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
            "name": "xUnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 239
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "optional": false,
          "computed": false,
          "start": 233,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 233,
        "end": 243
      },
      "directive": null,
      "start": 233,
      "end": 243
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
            "name": "xAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 301
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 302,
                      "end": 305
                    }
                  ],
                  "start": 301,
                  "end": 306
                },
                "start": 300,
                "end": 306
              },
              "start": 298,
              "end": 306
            },
            "start": 294,
            "end": 306
          },
          "init": null,
          "definite": false,
          "start": 294,
          "end": 306
        }
      ],
      "declare": true,
      "start": 280,
      "end": 307
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
            "name": "xAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 314
          },
          "optional": false,
          "computed": false,
          "start": 308,
          "end": 314
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 308,
        "end": 316
      },
      "directive": null,
      "start": 308,
      "end": 316
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
            "name": "xUnknown",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 382,
                  "end": 383
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 384,
                      "end": 391
                    }
                  ],
                  "start": 383,
                  "end": 392
                },
                "start": 382,
                "end": 392
              },
              "start": 380,
              "end": 392
            },
            "start": 372,
            "end": 392
          },
          "init": null,
          "definite": false,
          "start": 372,
          "end": 392
        }
      ],
      "declare": true,
      "start": 358,
      "end": 393
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
            "name": "xUnknown",
            "optional": false,
            "typeAnnotation": null,
            "start": 394,
            "end": 402
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 404
          },
          "optional": false,
          "computed": false,
          "start": 394,
          "end": 404
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 394,
        "end": 406
      },
      "directive": null,
      "start": 394,
      "end": 406
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
            "name": "xNever",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 475
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNeverKeyword",
                      "start": 476,
                      "end": 481
                    }
                  ],
                  "start": 475,
                  "end": 482
                },
                "start": 474,
                "end": 482
              },
              "start": 472,
              "end": 482
            },
            "start": 466,
            "end": 482
          },
          "init": null,
          "definite": false,
          "start": 466,
          "end": 482
        }
      ],
      "declare": true,
      "start": 452,
      "end": 483
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
            "name": "xNever",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 490
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 491,
            "end": 492
          },
          "optional": false,
          "computed": false,
          "start": 484,
          "end": 492
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 484,
        "end": 494
      },
      "directive": null,
      "start": 484,
      "end": 494
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 650,
        "end": 659
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 661
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 661
          }
        ],
        "start": 659,
        "end": 662
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 680
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
                  "name": "executor",
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
                          "name": "resolve",
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 709,
                                        "end": 710
                                      },
                                      "typeArguments": null,
                                      "start": 709,
                                      "end": 710
                                    },
                                    "start": 707,
                                    "end": 710
                                  },
                                  "start": 702,
                                  "end": 710
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 715,
                                  "end": 719
                                },
                                "start": 712,
                                "end": 719
                              },
                              "start": 701,
                              "end": 719
                            },
                            "start": 699,
                            "end": 719
                          },
                          "start": 692,
                          "end": 719
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 724,
                          "end": 728
                        },
                        "start": 721,
                        "end": 728
                      },
                      "start": 691,
                      "end": 728
                    },
                    "start": 689,
                    "end": 728
                  },
                  "start": 681,
                  "end": 728
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 730,
                "end": 738
              },
              "expression": false,
              "start": 680,
              "end": 738
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 669,
            "end": 738
          }
        ],
        "start": 663,
        "end": 740
      },
      "abstract": false,
      "declare": false,
      "start": 644,
      "end": 740
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 755
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSVoidKeyword",
              "start": 756,
              "end": 760
            }
          ],
          "start": 755,
          "end": 761
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 769
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 773,
                "end": 780
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 773,
              "end": 782
            },
            "id": null,
            "generator": false,
            "start": 762,
            "end": 782
          }
        ],
        "start": 742,
        "end": 783
      },
      "directive": null,
      "start": 742,
      "end": 784
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 801,
          "end": 810
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 811,
                  "end": 815
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 818,
                  "end": 824
                }
              ],
              "start": 811,
              "end": 824
            }
          ],
          "start": 810,
          "end": 825
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 833
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 844
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 837,
              "end": 846
            },
            "id": null,
            "generator": false,
            "start": 826,
            "end": 846
          }
        ],
        "start": 797,
        "end": 847
      },
      "directive": null,
      "start": 797,
      "end": 848
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 865,
          "end": 874
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 875,
              "end": 878
            }
          ],
          "start": 874,
          "end": 879
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 880,
                "end": 887
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 898
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 891,
              "end": 900
            },
            "id": null,
            "generator": false,
            "start": 880,
            "end": 900
          }
        ],
        "start": 861,
        "end": 901
      },
      "directive": null,
      "start": 861,
      "end": 902
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 960
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 961,
              "end": 968
            }
          ],
          "start": 960,
          "end": 969
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 970,
                "end": 977
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 981,
                "end": 988
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 981,
              "end": 990
            },
            "id": null,
            "generator": false,
            "start": 970,
            "end": 990
          }
        ],
        "start": 947,
        "end": 991
      },
      "directive": null,
      "start": 947,
      "end": 992
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1054
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1055,
              "end": 1060
            }
          ],
          "start": 1054,
          "end": 1061
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 1062,
                "end": 1069
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1080
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1073,
              "end": 1082
            },
            "id": null,
            "generator": false,
            "start": 1062,
            "end": 1082
          }
        ],
        "start": 1041,
        "end": 1083
      },
      "directive": null,
      "start": 1041,
      "end": 1084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1166,
        "end": 1167
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 1171,
              "end": 1177
            },
            "start": 1169,
            "end": 1177
          },
          "start": 1168,
          "end": 1177
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1182,
              "end": 1188
            },
            "start": 1180,
            "end": 1188
          },
          "start": 1179,
          "end": 1188
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1193,
              "end": 1197
            },
            "start": 1191,
            "end": 1197
          },
          "start": 1190,
          "end": 1197
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1200,
          "end": 1204
        },
        "start": 1198,
        "end": 1204
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1206,
        "end": 1214
      },
      "expression": false,
      "start": 1157,
      "end": 1214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1216,
          "end": 1217
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1218,
            "end": 1219
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1221,
            "end": 1228
          }
        ],
        "optional": false,
        "start": 1216,
        "end": 1229
      },
      "directive": null,
      "start": 1216,
      "end": 1230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1237,
          "end": 1238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1239,
            "end": 1240
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1242,
            "end": 1249
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1256,
              "end": 1257
            },
            "prefix": true,
            "start": 1251,
            "end": 1257
          }
        ],
        "optional": false,
        "start": 1237,
        "end": 1258
      },
      "directive": null,
      "start": 1237,
      "end": 1259
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1266,
          "end": 1267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1268,
            "end": 1269
          }
        ],
        "optional": false,
        "start": 1266,
        "end": 1270
      },
      "directive": null,
      "start": 1266,
      "end": 1271
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1293
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 1297,
              "end": 1303
            },
            "start": 1295,
            "end": 1303
          },
          "start": 1294,
          "end": 1303
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1308,
              "end": 1314
            },
            "start": 1306,
            "end": 1314
          },
          "start": 1305,
          "end": 1314
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1319,
              "end": 1323
            },
            "start": 1317,
            "end": 1323
          },
          "start": 1316,
          "end": 1323
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "what",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1331,
              "end": 1337
            },
            "start": 1329,
            "end": 1337
          },
          "start": 1325,
          "end": 1337
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1340,
          "end": 1344
        },
        "start": 1338,
        "end": 1344
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1346,
        "end": 1354
      },
      "expression": false,
      "start": 1283,
      "end": 1354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1356,
          "end": 1357
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1358,
            "end": 1359
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1361,
            "end": 1368
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1375,
              "end": 1376
            },
            "prefix": true,
            "start": 1370,
            "end": 1376
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1378,
            "end": 1379
          }
        ],
        "optional": false,
        "start": 1356,
        "end": 1380
      },
      "directive": null,
      "start": 1356,
      "end": 1381
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1388,
          "end": 1389
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1390,
            "end": 1391
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1393,
            "end": 1400
          }
        ],
        "optional": false,
        "start": 1388,
        "end": 1401
      },
      "directive": null,
      "start": 1388,
      "end": 1402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1413,
          "end": 1414
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1415,
            "end": 1416
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1418,
            "end": 1425
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1432,
              "end": 1433
            },
            "prefix": true,
            "start": 1427,
            "end": 1433
          }
        ],
        "optional": false,
        "start": 1413,
        "end": 1434
      },
      "directive": null,
      "start": 1413,
      "end": 1435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1446,
          "end": 1447
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1448,
            "end": 1449
          }
        ],
        "optional": false,
        "start": 1446,
        "end": 1450
      },
      "directive": null,
      "start": 1446,
      "end": 1451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1472,
        "end": 1473
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1477,
                  "end": 1483
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 1486,
                  "end": 1490
                }
              ],
              "start": 1477,
              "end": 1490
            },
            "start": 1475,
            "end": 1490
          },
          "start": 1474,
          "end": 1490
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 1495,
              "end": 1499
            },
            "start": 1493,
            "end": 1499
          },
          "start": 1492,
          "end": 1499
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 1504,
                  "end": 1508
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1511,
                  "end": 1517
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1520,
                  "end": 1526
                }
              ],
              "start": 1504,
              "end": 1526
            },
            "start": 1502,
            "end": 1526
          },
          "start": 1501,
          "end": 1526
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1529,
          "end": 1533
        },
        "start": 1527,
        "end": 1533
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1535,
        "end": 1543
      },
      "expression": false,
      "start": 1463,
      "end": 1543
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1545,
          "end": 1546
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1547,
            "end": 1548
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1555,
              "end": 1556
            },
            "prefix": true,
            "start": 1550,
            "end": 1556
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1563,
              "end": 1564
            },
            "prefix": true,
            "start": 1558,
            "end": 1564
          }
        ],
        "optional": false,
        "start": 1545,
        "end": 1565
      },
      "directive": null,
      "start": 1545,
      "end": 1566
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1573,
          "end": 1574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1575,
            "end": 1576
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1583,
              "end": 1584
            },
            "prefix": true,
            "start": 1578,
            "end": 1584
          }
        ],
        "optional": false,
        "start": 1573,
        "end": 1585
      },
      "directive": null,
      "start": 1573,
      "end": 1586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1593,
          "end": 1594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1595,
            "end": 1596
          }
        ],
        "optional": false,
        "start": 1593,
        "end": 1597
      },
      "directive": null,
      "start": 1593,
      "end": 1598
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 1605,
          "end": 1606
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1605,
        "end": 1608
      },
      "directive": null,
      "start": 1605,
      "end": 1609
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 1657,
        "end": 1661
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
              "name": "TS",
              "optional": false,
              "typeAnnotation": null,
              "start": 1662,
              "end": 1664
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1673,
                "end": 1680
              },
              "start": 1673,
              "end": 1682
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1662,
            "end": 1682
          }
        ],
        "start": 1661,
        "end": 1683
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                    "start": 1702,
                    "end": 1706
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1708,
                        "end": 1710
                      },
                      "typeArguments": null,
                      "start": 1708,
                      "end": 1710
                    },
                    "start": 1706,
                    "end": 1710
                  },
                  "value": null,
                  "start": 1699,
                  "end": 1710
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 1715,
                  "end": 1722
                },
                "start": 1712,
                "end": 1722
              },
              "start": 1698,
              "end": 1722
            },
            "start": 1696,
            "end": 1722
          },
          "start": 1689,
          "end": 1722
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1731,
            "end": 1735
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TS",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1739
              },
              "typeArguments": null,
              "start": 1737,
              "end": 1739
            },
            "start": 1735,
            "end": 1739
          },
          "value": null,
          "start": 1728,
          "end": 1739
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1742,
          "end": 1746
        },
        "start": 1740,
        "end": 1746
      },
      "body": null,
      "expression": false,
      "start": 1640,
      "end": 1747
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1749,
          "end": 1753
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSNumberKeyword",
                    "start": 1758,
                    "end": 1764
                  },
                  "start": 1756,
                  "end": 1764
                },
                "start": 1755,
                "end": 1764
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1769,
                    "end": 1775
                  },
                  "start": 1767,
                  "end": 1775
                },
                "start": 1766,
                "end": 1775
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1781
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1784,
                "end": 1785
              },
              "start": 1780,
              "end": 1785
            },
            "id": null,
            "generator": false,
            "start": 1754,
            "end": 1785
          }
        ],
        "optional": false,
        "start": 1749,
        "end": 1786
      },
      "directive": null,
      "start": 1749,
      "end": 1786
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1796,
          "end": 1800
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSNumberKeyword",
                    "start": 1805,
                    "end": 1811
                  },
                  "start": 1803,
                  "end": 1811
                },
                "start": 1802,
                "end": 1811
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1816,
                    "end": 1822
                  },
                  "start": 1814,
                  "end": 1822
                },
                "start": 1813,
                "end": 1822
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1827,
                "end": 1828
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1831,
                "end": 1832
              },
              "start": 1827,
              "end": 1832
            },
            "id": null,
            "generator": false,
            "start": 1801,
            "end": 1832
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1834,
            "end": 1835
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1837,
            "end": 1838
          }
        ],
        "optional": false,
        "start": 1796,
        "end": 1839
      },
      "directive": null,
      "start": 1796,
      "end": 1839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1847,
          "end": 1851
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSNumberKeyword",
                    "start": 1856,
                    "end": 1862
                  },
                  "start": 1854,
                  "end": 1862
                },
                "start": 1853,
                "end": 1862
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1867,
                    "end": 1871
                  },
                  "start": 1865,
                  "end": 1871
                },
                "start": 1864,
                "end": 1871
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1876,
              "end": 1877
            },
            "id": null,
            "generator": false,
            "start": 1852,
            "end": 1877
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1879,
            "end": 1880
          },
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1887,
              "end": 1888
            },
            "prefix": true,
            "start": 1882,
            "end": 1888
          }
        ],
        "optional": false,
        "start": 1847,
        "end": 1889
      },
      "directive": null,
      "start": 1847,
      "end": 1889
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1896,
          "end": 1900
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSNumberKeyword",
                    "start": 1905,
                    "end": 1911
                  },
                  "start": 1903,
                  "end": 1911
                },
                "start": 1902,
                "end": 1911
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1916,
                    "end": 1920
                  },
                  "start": 1914,
                  "end": 1920
                },
                "start": 1913,
                "end": 1920
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1925,
              "end": 1926
            },
            "id": null,
            "generator": false,
            "start": 1901,
            "end": 1926
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1928,
            "end": 1929
          }
        ],
        "optional": false,
        "start": 1896,
        "end": 1930
      },
      "directive": null,
      "start": 1896,
      "end": 1930
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1937,
          "end": 1941
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSVoidKeyword",
                    "start": 1946,
                    "end": 1950
                  },
                  "start": 1944,
                  "end": 1950
                },
                "start": 1943,
                "end": 1950
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1955,
                    "end": 1959
                  },
                  "start": 1953,
                  "end": 1959
                },
                "start": 1952,
                "end": 1959
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 1964,
              "end": 1966
            },
            "id": null,
            "generator": false,
            "start": 1942,
            "end": 1966
          }
        ],
        "optional": false,
        "start": 1937,
        "end": 1967
      },
      "directive": null,
      "start": 1937,
      "end": 1967
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 1974,
          "end": 1978
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1983,
                        "end": 1989
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 1992,
                        "end": 1996
                      }
                    ],
                    "start": 1983,
                    "end": 1996
                  },
                  "start": 1981,
                  "end": 1996
                },
                "start": 1980,
                "end": 1996
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2001,
                        "end": 2007
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2010,
                        "end": 2014
                      }
                    ],
                    "start": 2001,
                    "end": 2014
                  },
                  "start": 1999,
                  "end": 2014
                },
                "start": 1998,
                "end": 2014
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 2019,
              "end": 2021
            },
            "id": null,
            "generator": false,
            "start": 1979,
            "end": 2021
          }
        ],
        "optional": false,
        "start": 1974,
        "end": 2022
      },
      "directive": null,
      "start": 1974,
      "end": 2022
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 2029,
          "end": 2033
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2038,
                        "end": 2044
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2047,
                        "end": 2051
                      }
                    ],
                    "start": 2038,
                    "end": 2051
                  },
                  "start": 2036,
                  "end": 2051
                },
                "start": 2035,
                "end": 2051
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2056,
                        "end": 2062
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2065,
                        "end": 2069
                      }
                    ],
                    "start": 2056,
                    "end": 2069
                  },
                  "start": 2054,
                  "end": 2069
                },
                "start": 2053,
                "end": 2069
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 2074,
              "end": 2076
            },
            "id": null,
            "generator": false,
            "start": 2034,
            "end": 2076
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 2078,
            "end": 2079
          }
        ],
        "optional": false,
        "start": 2029,
        "end": 2080
      },
      "directive": null,
      "start": 2029,
      "end": 2080
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 2087,
          "end": 2091
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2096,
                        "end": 2102
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2105,
                        "end": 2109
                      }
                    ],
                    "start": 2096,
                    "end": 2109
                  },
                  "start": 2094,
                  "end": 2109
                },
                "start": 2093,
                "end": 2109
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2114,
                        "end": 2120
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 2123,
                        "end": 2127
                      }
                    ],
                    "start": 2114,
                    "end": 2127
                  },
                  "start": 2112,
                  "end": 2127
                },
                "start": 2111,
                "end": 2127
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 2132,
              "end": 2134
            },
            "id": null,
            "generator": false,
            "start": 2092,
            "end": 2134
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 2136,
            "end": 2137
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 2139,
            "end": 2140
          }
        ],
        "optional": false,
        "start": 2087,
        "end": 2141
      },
      "directive": null,
      "start": 2087,
      "end": 2141
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 2147
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 14,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 143,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "xUnion",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
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
    "value": "xUnion",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 192,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "xUnion",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 280,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 288,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "xAny",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "xAny",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 358,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 372,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 384,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 394,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 452,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 460,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "xNever",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 476,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "xNever",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 644,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 650,
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
    "value": "X",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 669,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "executor",
    "start": 681,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 692,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 702,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 712,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 721,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 724,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 746,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 756,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 762,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 773,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 797,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 801,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 818,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 826,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 834,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 837,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 865,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 880,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 891,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 947,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 951,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 961,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 970,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 978,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 981,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "MyPromise",
    "start": 1045,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1055,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1070,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1157,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1193,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1200,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1221,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1242,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1283,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1297,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1308,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1319,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "what",
    "start": 1325,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1331,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1361,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1370,
    "end": 1374
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1393,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1418,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1463,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1486,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1495,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1504,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1511,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1529,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1550,
    "end": 1554
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1558,
    "end": 1562
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1578,
    "end": 1582
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1640,
    "end": 1647
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1648,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1657,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "TS",
    "start": 1662,
    "end": 1664
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1665,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1673,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 1689,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1699,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1702,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "TS",
    "start": 1708,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1715,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1728,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1731,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "TS",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1742,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1749,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 1758,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1769,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1777,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1796,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1805,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1816,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1824,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1847,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1856,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1867,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1873,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1882,
    "end": 1886
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1896,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1905,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1916,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1922,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1937,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1946,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1955,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1961,
    "end": 1963
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1964,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1974,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1983,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1992,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2001,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2010,
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
    "value": "=>",
    "start": 2016,
    "end": 2018
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2019,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2029,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2038,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2047,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2056,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2065,
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
    "value": "=>",
    "start": 2071,
    "end": 2073
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2074,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 2087,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2096,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2105,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2114,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2123,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2129,
    "end": 2131
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2132,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2140,
    "end": 2141
  }
]
```
