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
        "name": "action",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 27
              },
              "typeArguments": null,
              "start": 19,
              "end": 27
            },
            "start": 17,
            "end": 27
          },
          "start": 16,
          "end": 27
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 29,
        "end": 31
      },
      "expression": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 114
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
                  "type": "TSStringKeyword",
                  "start": 118,
                  "end": 124
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 127,
                  "end": 133
                }
              ],
              "start": 118,
              "end": 133
            },
            "start": 116,
            "end": 133
          },
          "start": 115,
          "end": 133
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 145,
                "end": 150
              },
              "start": 141,
              "end": 150
            },
            "directive": null,
            "start": 141,
            "end": 151
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 162
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 172
                        },
                        "directive": null,
                        "start": 171,
                        "end": 172
                      }
                    ],
                    "start": 169,
                    "end": 196
                  },
                  "id": null,
                  "generator": false,
                  "start": 163,
                  "end": 196
                }
              ],
              "optional": false,
              "start": 156,
              "end": 197
            },
            "directive": null,
            "start": 156,
            "end": 198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 207,
                "end": 209
              },
              "start": 203,
              "end": 209
            },
            "directive": null,
            "start": 203,
            "end": 210
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 221
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 230,
                          "end": 231
                        },
                        "directive": null,
                        "start": 230,
                        "end": 231
                      }
                    ],
                    "start": 228,
                    "end": 246
                  },
                  "id": null,
                  "generator": false,
                  "start": 222,
                  "end": 246
                }
              ],
              "optional": false,
              "start": 215,
              "end": 247
            },
            "directive": null,
            "start": 215,
            "end": 248
          }
        ],
        "start": 135,
        "end": 250
      },
      "expression": false,
      "start": 103,
      "end": 250
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 355
      },
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
            "kind": "let",
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
                          "type": "TSStringKeyword",
                          "start": 371,
                          "end": 377
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 380,
                          "end": 386
                        }
                      ],
                      "start": 371,
                      "end": 386
                    },
                    "start": 369,
                    "end": 386
                  },
                  "start": 368,
                  "end": 386
                },
                "init": null,
                "definite": false,
                "start": 368,
                "end": 386
              }
            ],
            "declare": false,
            "start": 364,
            "end": 387
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 393
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 396,
                "end": 398
              },
              "start": 392,
              "end": 398
            },
            "directive": null,
            "start": 392,
            "end": 399
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 409
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 421
                        },
                        "directive": null,
                        "start": 420,
                        "end": 421
                      }
                    ],
                    "start": 418,
                    "end": 436
                  },
                  "id": null,
                  "generator": false,
                  "start": 412,
                  "end": 436
                },
                "definite": false,
                "start": 408,
                "end": 436
              }
            ],
            "declare": false,
            "start": 404,
            "end": 437
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "init": {
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 463,
                          "end": 464
                        },
                        "directive": null,
                        "start": 463,
                        "end": 464
                      }
                    ],
                    "start": 461,
                    "end": 479
                  },
                  "expression": false,
                  "start": 450,
                  "end": 479
                },
                "definite": false,
                "start": 446,
                "end": 479
              }
            ],
            "declare": false,
            "start": 442,
            "end": 480
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 509,
                          "end": 512
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 517,
                                  "end": 518
                                },
                                "directive": null,
                                "start": 517,
                                "end": 518
                              }
                            ],
                            "start": 515,
                            "end": 533
                          },
                          "expression": false,
                          "start": 512,
                          "end": 533
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 509,
                        "end": 533
                      }
                    ],
                    "start": 499,
                    "end": 539
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 493,
                  "end": 539
                },
                "definite": false,
                "start": 489,
                "end": 539
              }
            ],
            "declare": false,
            "start": 485,
            "end": 540
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 550
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 566
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 571,
                                "end": 572
                              },
                              "directive": null,
                              "start": 571,
                              "end": 572
                            }
                          ],
                          "start": 569,
                          "end": 587
                        },
                        "expression": false,
                        "start": 566,
                        "end": 587
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 563,
                      "end": 587
                    }
                  ],
                  "start": 553,
                  "end": 593
                },
                "definite": false,
                "start": 549,
                "end": 593
              }
            ],
            "declare": false,
            "start": 545,
            "end": 594
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 608,
              "end": 609
            },
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 615
                  },
                  "directive": null,
                  "start": 614,
                  "end": 615
                }
              ],
              "start": 612,
              "end": 639
            },
            "expression": false,
            "start": 599,
            "end": 639
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 651
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 662,
                    "end": 665
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 670,
                            "end": 671
                          },
                          "directive": null,
                          "start": 670,
                          "end": 671
                        }
                      ],
                      "start": 668,
                      "end": 695
                    },
                    "expression": false,
                    "start": 665,
                    "end": 695
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 662,
                  "end": 695
                }
              ],
              "start": 652,
              "end": 701
            },
            "abstract": false,
            "declare": false,
            "start": 644,
            "end": 701
          }
        ],
        "start": 358,
        "end": 703
      },
      "expression": false,
      "start": 344,
      "end": 703
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 791
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
                  "type": "TSStringKeyword",
                  "start": 795,
                  "end": 801
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 804,
                  "end": 810
                }
              ],
              "start": 795,
              "end": 810
            },
            "start": 793,
            "end": 810
          },
          "start": 792,
          "end": 810
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
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 824
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 833,
                            "end": 834
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 837,
                            "end": 842
                          },
                          "start": 833,
                          "end": 842
                        },
                        "directive": null,
                        "start": 833,
                        "end": 842
                      }
                    ],
                    "start": 831,
                    "end": 844
                  },
                  "id": null,
                  "generator": false,
                  "start": 825,
                  "end": 844
                }
              ],
              "optional": false,
              "start": 818,
              "end": 845
            },
            "directive": null,
            "start": 818,
            "end": 846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 851,
                "end": 852
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 855,
                "end": 857
              },
              "start": 851,
              "end": 857
            },
            "directive": null,
            "start": 851,
            "end": 858
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 869
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 878,
                          "end": 879
                        },
                        "directive": null,
                        "start": 878,
                        "end": 879
                      }
                    ],
                    "start": 876,
                    "end": 903
                  },
                  "id": null,
                  "generator": false,
                  "start": 870,
                  "end": 903
                }
              ],
              "optional": false,
              "start": 863,
              "end": 904
            },
            "directive": null,
            "start": 863,
            "end": 905
          }
        ],
        "start": 812,
        "end": 907
      },
      "expression": false,
      "start": 780,
      "end": 907
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 996
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
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
                  "type": "TSBooleanKeyword",
                  "start": 1009,
                  "end": 1016
                },
                "start": 1006,
                "end": 1016
              },
              "start": 1003,
              "end": 1016
            },
            "start": 1001,
            "end": 1016
          },
          "start": 997,
          "end": 1016
        }
      ],
      "returnType": null,
      "body": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1031,
                          "end": 1037
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1040,
                          "end": 1046
                        }
                      ],
                      "start": 1031,
                      "end": 1046
                    },
                    "start": 1029,
                    "end": 1046
                  },
                  "start": 1028,
                  "end": 1046
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1049,
                  "end": 1050
                },
                "definite": false,
                "start": 1028,
                "end": 1050
              }
            ],
            "declare": false,
            "start": 1024,
            "end": 1051
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1063,
                "end": 1067
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1063,
              "end": 1069
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1081,
                      "end": 1082
                    },
                    "right": {
                      "type": "Literal",
                      "value": "abc",
                      "raw": "\"abc\"",
                      "start": 1085,
                      "end": 1090
                    },
                    "start": 1081,
                    "end": 1090
                  },
                  "directive": null,
                  "start": 1081,
                  "end": 1091
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1106
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1115,
                                "end": 1116
                              },
                              "directive": null,
                              "start": 1115,
                              "end": 1116
                            }
                          ],
                          "start": 1113,
                          "end": 1140
                        },
                        "id": null,
                        "generator": false,
                        "start": 1107,
                        "end": 1140
                      }
                    ],
                    "optional": false,
                    "start": 1100,
                    "end": 1141
                  },
                  "directive": null,
                  "start": 1100,
                  "end": 1142
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1151,
                      "end": 1152
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 1155,
                      "end": 1157
                    },
                    "start": 1151,
                    "end": 1157
                  },
                  "directive": null,
                  "start": 1151,
                  "end": 1158
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1167,
                      "end": 1173
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1182,
                                "end": 1183
                              },
                              "directive": null,
                              "start": 1182,
                              "end": 1183
                            }
                          ],
                          "start": 1180,
                          "end": 1207
                        },
                        "id": null,
                        "generator": false,
                        "start": 1174,
                        "end": 1207
                      }
                    ],
                    "optional": false,
                    "start": 1167,
                    "end": 1208
                  },
                  "directive": null,
                  "start": 1167,
                  "end": 1209
                }
              ],
              "start": 1071,
              "end": 1215
            },
            "start": 1056,
            "end": 1215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 1220,
                "end": 1226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1235,
                          "end": 1236
                        },
                        "directive": null,
                        "start": 1235,
                        "end": 1236
                      }
                    ],
                    "start": 1233,
                    "end": 1251
                  },
                  "id": null,
                  "generator": false,
                  "start": 1227,
                  "end": 1251
                }
              ],
              "optional": false,
              "start": 1220,
              "end": 1252
            },
            "directive": null,
            "start": 1220,
            "end": 1253
          }
        ],
        "start": 1018,
        "end": 1255
      },
      "expression": false,
      "start": 985,
      "end": 1255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1266,
        "end": 1268
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
                  "type": "TSStringKeyword",
                  "start": 1272,
                  "end": 1278
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1281,
                  "end": 1287
                }
              ],
              "start": 1272,
              "end": 1287
            },
            "start": 1270,
            "end": 1287
          },
          "start": 1269,
          "end": 1287
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
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
                  "type": "TSBooleanKeyword",
                  "start": 1301,
                  "end": 1308
                },
                "start": 1298,
                "end": 1308
              },
              "start": 1295,
              "end": 1308
            },
            "start": 1293,
            "end": 1308
          },
          "start": 1289,
          "end": 1308
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
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1324
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1320,
              "end": 1326
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1338,
                      "end": 1339
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1342,
                      "end": 1343
                    },
                    "start": 1338,
                    "end": 1343
                  },
                  "directive": null,
                  "start": 1338,
                  "end": 1344
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1353,
                      "end": 1359
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1368,
                                "end": 1369
                              },
                              "directive": null,
                              "start": 1368,
                              "end": 1369
                            }
                          ],
                          "start": 1366,
                          "end": 1393
                        },
                        "id": null,
                        "generator": false,
                        "start": 1360,
                        "end": 1393
                      }
                    ],
                    "optional": false,
                    "start": 1353,
                    "end": 1394
                  },
                  "directive": null,
                  "start": 1353,
                  "end": 1395
                }
              ],
              "start": 1328,
              "end": 1401
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1421,
                      "end": 1422
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1425,
                      "end": 1426
                    },
                    "start": 1421,
                    "end": 1426
                  },
                  "directive": null,
                  "start": 1421,
                  "end": 1427
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1436,
                      "end": 1442
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1451,
                                "end": 1452
                              },
                              "directive": null,
                              "start": 1451,
                              "end": 1452
                            }
                          ],
                          "start": 1449,
                          "end": 1476
                        },
                        "id": null,
                        "generator": false,
                        "start": 1443,
                        "end": 1476
                      }
                    ],
                    "optional": false,
                    "start": 1436,
                    "end": 1477
                  },
                  "directive": null,
                  "start": 1436,
                  "end": 1478
                }
              ],
              "start": 1411,
              "end": 1484
            },
            "start": 1316,
            "end": 1484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 1489,
                "end": 1495
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1504,
                          "end": 1505
                        },
                        "directive": null,
                        "start": 1504,
                        "end": 1505
                      }
                    ],
                    "start": 1502,
                    "end": 1520
                  },
                  "id": null,
                  "generator": false,
                  "start": 1496,
                  "end": 1520
                }
              ],
              "optional": false,
              "start": 1489,
              "end": 1521
            },
            "directive": null,
            "start": 1489,
            "end": 1522
          }
        ],
        "start": 1310,
        "end": 1524
      },
      "expression": false,
      "start": 1257,
      "end": 1524
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1535,
        "end": 1538
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1545,
              "end": 1552
            },
            "start": 1543,
            "end": 1552
          },
          "start": 1539,
          "end": 1552
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1564,
              "end": 1568
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1587,
                                "end": 1593
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1596,
                                "end": 1605
                              }
                            ],
                            "start": 1587,
                            "end": 1605
                          },
                          "start": 1585,
                          "end": 1605
                        },
                        "start": 1584,
                        "end": 1605
                      },
                      "init": null,
                      "definite": false,
                      "start": 1584,
                      "end": 1605
                    }
                  ],
                  "declare": false,
                  "start": 1580,
                  "end": 1606
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1615,
                      "end": 1616
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1619,
                      "end": 1620
                    },
                    "start": 1615,
                    "end": 1620
                  },
                  "directive": null,
                  "start": 1615,
                  "end": 1621
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1630,
                      "end": 1636
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1645,
                                "end": 1646
                              },
                              "directive": null,
                              "start": 1645,
                              "end": 1646
                            }
                          ],
                          "start": 1643,
                          "end": 1661
                        },
                        "id": null,
                        "generator": false,
                        "start": 1637,
                        "end": 1661
                      }
                    ],
                    "optional": false,
                    "start": 1630,
                    "end": 1662
                  },
                  "directive": null,
                  "start": 1630,
                  "end": 1663
                }
              ],
              "start": 1570,
              "end": 1669
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1696,
                                "end": 1702
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 1705,
                                "end": 1714
                              }
                            ],
                            "start": 1696,
                            "end": 1714
                          },
                          "start": 1694,
                          "end": 1714
                        },
                        "start": 1693,
                        "end": 1714
                      },
                      "init": null,
                      "definite": false,
                      "start": 1693,
                      "end": 1714
                    }
                  ],
                  "declare": false,
                  "start": 1689,
                  "end": 1715
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1725
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1728,
                      "end": 1729
                    },
                    "start": 1724,
                    "end": 1729
                  },
                  "directive": null,
                  "start": 1724,
                  "end": 1730
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1739,
                      "end": 1745
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1754,
                                "end": 1755
                              },
                              "directive": null,
                              "start": 1754,
                              "end": 1755
                            }
                          ],
                          "start": 1752,
                          "end": 1770
                        },
                        "id": null,
                        "generator": false,
                        "start": 1746,
                        "end": 1770
                      }
                    ],
                    "optional": false,
                    "start": 1739,
                    "end": 1771
                  },
                  "directive": null,
                  "start": 1739,
                  "end": 1772
                }
              ],
              "start": 1679,
              "end": 1778
            },
            "start": 1560,
            "end": 1778
          }
        ],
        "start": 1554,
        "end": 1780
      },
      "expression": false,
      "start": 1526,
      "end": 1780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1791,
        "end": 1794
      },
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1812,
                    "end": 1813
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1816,
                    "end": 1817
                  },
                  "definite": false,
                  "start": 1812,
                  "end": 1817
                }
              ],
              "declare": false,
              "start": 1808,
              "end": 1817
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1819,
                "end": 1820
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1823,
                "end": 1825
              },
              "start": 1819,
              "end": 1825
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1827,
                "end": 1828
              },
              "start": 1827,
              "end": 1830
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1846,
                        "end": 1847
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1852,
                        "end": 1853
                      },
                      "start": 1846,
                      "end": 1853
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1857,
                        "end": 1858
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1863,
                        "end": 1864
                      },
                      "start": 1857,
                      "end": 1864
                    },
                    "start": 1846,
                    "end": 1864
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1880,
                            "end": 1886
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1895,
                                      "end": 1896
                                    },
                                    "directive": null,
                                    "start": 1895,
                                    "end": 1896
                                  }
                                ],
                                "start": 1893,
                                "end": 1910
                              },
                              "id": null,
                              "generator": false,
                              "start": 1887,
                              "end": 1910
                            }
                          ],
                          "optional": false,
                          "start": 1880,
                          "end": 1911
                        },
                        "directive": null,
                        "start": 1880,
                        "end": 1911
                      }
                    ],
                    "start": 1866,
                    "end": 1921
                  },
                  "alternate": null,
                  "start": 1842,
                  "end": 1921
                }
              ],
              "start": 1832,
              "end": 1927
            },
            "start": 1803,
            "end": 1927
          }
        ],
        "start": 1797,
        "end": 1929
      },
      "expression": false,
      "start": 1782,
      "end": 1929
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2011,
        "end": 2013
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2026,
                  "end": 2027
                },
                "init": null,
                "definite": false,
                "start": 2026,
                "end": 2027
              }
            ],
            "declare": false,
            "start": 2022,
            "end": 2028
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2033,
                "end": 2034
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2037,
                "end": 2042
              },
              "start": 2033,
              "end": 2042
            },
            "directive": null,
            "start": 2033,
            "end": 2043
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2048,
                "end": 2054
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2063,
                          "end": 2064
                        },
                        "directive": null,
                        "start": 2063,
                        "end": 2064
                      }
                    ],
                    "start": 2061,
                    "end": 2066
                  },
                  "id": null,
                  "generator": false,
                  "start": 2055,
                  "end": 2066
                }
              ],
              "optional": false,
              "start": 2048,
              "end": 2067
            },
            "directive": null,
            "start": 2048,
            "end": 2068
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2083,
                "end": 2084
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2087,
                "end": 2089
              },
              "start": 2083,
              "end": 2089
            },
            "directive": null,
            "start": 2083,
            "end": 2090
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2095,
                "end": 2101
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2110,
                          "end": 2111
                        },
                        "directive": null,
                        "start": 2110,
                        "end": 2111
                      }
                    ],
                    "start": 2108,
                    "end": 2126
                  },
                  "id": null,
                  "generator": false,
                  "start": 2102,
                  "end": 2126
                }
              ],
              "optional": false,
              "start": 2095,
              "end": 2127
            },
            "directive": null,
            "start": 2095,
            "end": 2128
          }
        ],
        "start": 2016,
        "end": 2130
      },
      "expression": false,
      "start": 2002,
      "end": 2130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2210,
        "end": 2212
      },
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 2225,
              "end": 2232
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 2244,
                "end": 2245
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
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2261,
                        "end": 2262
                      },
                      "operator": "instanceof",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2274,
                        "end": 2279
                      },
                      "start": 2261,
                      "end": 2279
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2299,
                                "end": 2300
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2311,
                                        "end": 2312
                                      },
                                      "directive": null,
                                      "start": 2311,
                                      "end": 2312
                                    }
                                  ],
                                  "start": 2309,
                                  "end": 2326
                                },
                                "id": null,
                                "generator": false,
                                "start": 2303,
                                "end": 2326
                              },
                              "definite": false,
                              "start": 2299,
                              "end": 2326
                            }
                          ],
                          "declare": false,
                          "start": 2295,
                          "end": 2326
                        }
                      ],
                      "start": 2281,
                      "end": 2336
                    },
                    "alternate": null,
                    "start": 2257,
                    "end": 2336
                  }
                ],
                "start": 2247,
                "end": 2342
              },
              "start": 2237,
              "end": 2342
            },
            "finalizer": null,
            "start": 2221,
            "end": 2342
          }
        ],
        "start": 2215,
        "end": 2344
      },
      "expression": false,
      "start": 2201,
      "end": 2344
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2407,
                    "end": 2413
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2416,
                    "end": 2422
                  }
                ],
                "start": 2407,
                "end": 2422
              },
              "start": 2405,
              "end": 2422
            },
            "start": 2404,
            "end": 2422
          },
          "init": null,
          "definite": false,
          "start": 2404,
          "end": 2422
        }
      ],
      "declare": false,
      "start": 2400,
      "end": 2423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 2424,
          "end": 2425
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 2428,
          "end": 2433
        },
        "start": 2424,
        "end": 2433
      },
      "directive": null,
      "start": 2424,
      "end": 2434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 2435,
          "end": 2441
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2450,
                    "end": 2451
                  },
                  "directive": null,
                  "start": 2450,
                  "end": 2451
                }
              ],
              "start": 2448,
              "end": 2475
            },
            "id": null,
            "generator": false,
            "start": 2442,
            "end": 2475
          }
        ],
        "optional": false,
        "start": 2435,
        "end": 2476
      },
      "directive": null,
      "start": 2435,
      "end": 2477
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2553,
        "end": 2556
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
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
                            "type": "TSStringKeyword",
                            "start": 2577,
                            "end": 2583
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2586,
                            "end": 2592
                          }
                        ],
                        "start": 2577,
                        "end": 2592
                      },
                      "start": 2575,
                      "end": 2592
                    },
                    "start": 2574,
                    "end": 2592
                  },
                  "init": null,
                  "definite": false,
                  "start": 2574,
                  "end": 2592
                }
              ],
              "declare": false,
              "start": 2570,
              "end": 2593
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2563,
            "end": 2593
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2598,
                "end": 2599
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2602,
                "end": 2607
              },
              "start": 2598,
              "end": 2607
            },
            "directive": null,
            "start": 2598,
            "end": 2608
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2613,
                "end": 2619
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2628,
                          "end": 2629
                        },
                        "directive": null,
                        "start": 2628,
                        "end": 2629
                      }
                    ],
                    "start": 2626,
                    "end": 2653
                  },
                  "id": null,
                  "generator": false,
                  "start": 2620,
                  "end": 2653
                }
              ],
              "optional": false,
              "start": 2613,
              "end": 2654
            },
            "directive": null,
            "start": 2613,
            "end": 2655
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2667,
                          "end": 2673
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2676,
                          "end": 2682
                        }
                      ],
                      "start": 2667,
                      "end": 2682
                    },
                    "start": 2665,
                    "end": 2682
                  },
                  "start": 2664,
                  "end": 2682
                },
                "init": null,
                "definite": false,
                "start": 2664,
                "end": 2682
              }
            ],
            "declare": false,
            "start": 2660,
            "end": 2683
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2688,
                "end": 2689
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 2692,
                "end": 2697
              },
              "start": 2688,
              "end": 2697
            },
            "directive": null,
            "start": 2688,
            "end": 2698
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 2703,
                "end": 2709
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2718,
                          "end": 2719
                        },
                        "directive": null,
                        "start": 2718,
                        "end": 2719
                      }
                    ],
                    "start": 2716,
                    "end": 2734
                  },
                  "id": null,
                  "generator": false,
                  "start": 2710,
                  "end": 2734
                }
              ],
              "optional": false,
              "start": 2703,
              "end": 2735
            },
            "directive": null,
            "start": 2703,
            "end": 2736
          }
        ],
        "start": 2557,
        "end": 2738
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2543,
      "end": 2738
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2772,
        "end": 2775
      },
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
            "kind": "let",
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2791,
                          "end": 2797
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2800,
                          "end": 2809
                        }
                      ],
                      "start": 2791,
                      "end": 2809
                    },
                    "start": 2789,
                    "end": 2809
                  },
                  "start": 2788,
                  "end": 2809
                },
                "init": null,
                "definite": false,
                "start": 2788,
                "end": 2809
              }
            ],
            "declare": false,
            "start": 2784,
            "end": 2810
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 2815,
                "end": 2816
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2819,
                "end": 2820
              },
              "start": 2815,
              "end": 2820
            },
            "directive": null,
            "start": 2815,
            "end": 2821
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2837,
                      "end": 2843
                    },
                    "start": 2835,
                    "end": 2843
                  },
                  "start": 2834,
                  "end": 2843
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2848,
                  "end": 2849
                },
                "operator": "===",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2854,
                    "end": 2855
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2858,
                    "end": 2859
                  },
                  "start": 2854,
                  "end": 2859
                },
                "start": 2848,
                "end": 2859
              },
              "id": null,
              "generator": false,
              "start": 2833,
              "end": 2859
            },
            "start": 2826,
            "end": 2860
          }
        ],
        "start": 2778,
        "end": 2862
      },
      "expression": false,
      "start": 2763,
      "end": 2862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeAdder",
        "optional": false,
        "typeAnnotation": null,
        "start": 2873,
        "end": 2882
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2887,
              "end": 2893
            },
            "start": 2885,
            "end": 2893
          },
          "start": 2883,
          "end": 2893
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
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2901,
                "end": 2902
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2907,
                "end": 2908
              },
              "start": 2901,
              "end": 2908
            },
            "directive": null,
            "start": 2901,
            "end": 2909
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2925,
                      "end": 2931
                    },
                    "start": 2923,
                    "end": 2931
                  },
                  "start": 2922,
                  "end": 2931
                }
              ],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2936,
                  "end": 2937
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2940,
                  "end": 2941
                },
                "start": 2936,
                "end": 2941
              },
              "id": null,
              "generator": false,
              "start": 2921,
              "end": 2941
            },
            "start": 2914,
            "end": 2942
          }
        ],
        "start": 2895,
        "end": 2944
      },
      "expression": false,
      "start": 2864,
      "end": 2944
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2955,
        "end": 2958
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2971,
                  "end": 2972
                },
                "init": null,
                "definite": false,
                "start": 2971,
                "end": 2972
              }
            ],
            "declare": false,
            "start": 2967,
            "end": 2973
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 2978,
                "end": 2979
              },
              "right": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 2982,
                "end": 2985
              },
              "start": 2978,
              "end": 2985
            },
            "directive": null,
            "start": 2978,
            "end": 2986
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 2997,
                "end": 2998
              },
              "id": null,
              "generator": false,
              "start": 2991,
              "end": 2998
            },
            "directive": null,
            "start": 2991,
            "end": 2999
          }
        ],
        "start": 2961,
        "end": 3001
      },
      "expression": false,
      "start": 2946,
      "end": 3001
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3034,
        "end": 3037
      },
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooMap",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3060,
                        "end": 3063
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 3064,
                            "end": 3070
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3071,
                              "end": 3076
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3077,
                                  "end": 3083
                                }
                              ],
                              "start": 3076,
                              "end": 3084
                            },
                            "start": 3071,
                            "end": 3084
                          }
                        ],
                        "start": 3063,
                        "end": 3085
                      },
                      "start": 3060,
                      "end": 3085
                    },
                    "start": 3058,
                    "end": 3085
                  },
                  "start": 3052,
                  "end": 3085
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3092,
                    "end": 3095
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 3088,
                  "end": 3097
                },
                "definite": false,
                "start": 3052,
                "end": 3097
              }
            ],
            "declare": false,
            "start": 3046,
            "end": 3097
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3108,
                  "end": 3114
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3118,
                      "end": 3119
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 3121,
                      "end": 3122
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 3124,
                      "end": 3125
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 3127,
                      "end": 3128
                    },
                    {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 3130,
                      "end": 3131
                    }
                  ],
                  "start": 3117,
                  "end": 3132
                },
                "definite": false,
                "start": 3108,
                "end": 3132
              }
            ],
            "declare": false,
            "start": 3102,
            "end": 3133
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3142,
                  "end": 3145
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fooMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3148,
                      "end": 3154
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3155,
                      "end": 3158
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3148,
                    "end": 3158
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3159,
                      "end": 3162
                    }
                  ],
                  "optional": false,
                  "start": 3148,
                  "end": 3163
                },
                "definite": false,
                "start": 3142,
                "end": 3163
              }
            ],
            "declare": false,
            "start": 3138,
            "end": 3164
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3173,
                "end": 3176
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3180,
                "end": 3184
              },
              "start": 3173,
              "end": 3184
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3196,
                      "end": 3199
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 3202,
                      "end": 3204
                    },
                    "start": 3196,
                    "end": 3204
                  },
                  "directive": null,
                  "start": 3196,
                  "end": 3205
                }
              ],
              "start": 3186,
              "end": 3211
            },
            "alternate": null,
            "start": 3169,
            "end": 3211
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
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3216,
                  "end": 3222
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3223,
                  "end": 3230
                },
                "optional": false,
                "computed": false,
                "start": 3216,
                "end": 3230
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3231,
                      "end": 3232
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3236,
                        "end": 3239
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3240,
                        "end": 3244
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3236,
                      "end": 3244
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3245,
                        "end": 3246
                      }
                    ],
                    "optional": false,
                    "start": 3236,
                    "end": 3247
                  },
                  "id": null,
                  "generator": false,
                  "start": 3231,
                  "end": 3247
                }
              ],
              "optional": false,
              "start": 3216,
              "end": 3248
            },
            "directive": null,
            "start": 3216,
            "end": 3249
          }
        ],
        "start": 3040,
        "end": 3251
      },
      "expression": false,
      "start": 3025,
      "end": 3251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3262,
        "end": 3265
      },
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 3366,
                          "end": 3372
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 3375,
                          "end": 3384
                        }
                      ],
                      "start": 3366,
                      "end": 3384
                    },
                    "start": 3364,
                    "end": 3384
                  },
                  "start": 3361,
                  "end": 3384
                },
                "init": null,
                "definite": false,
                "start": 3361,
                "end": 3384
              }
            ],
            "declare": false,
            "start": 3357,
            "end": 3385
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3390,
                "end": 3393
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 3396,
                "end": 3398
              },
              "start": 3390,
              "end": 3398
            },
            "directive": null,
            "start": 3390,
            "end": 3399
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
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
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3428,
                          "end": 3431
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toLocaleLowerCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3432,
                          "end": 3449
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3428,
                        "end": 3449
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 3428,
                      "end": 3451
                    },
                    "directive": null,
                    "start": 3428,
                    "end": 3452
                  }
                ],
                "start": 3418,
                "end": 3458
              },
              "id": null,
              "generator": false,
              "start": 3412,
              "end": 3458
            },
            "start": 3405,
            "end": 3458
          }
        ],
        "start": 3268,
        "end": 3460
      },
      "expression": false,
      "start": 3253,
      "end": 3460
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3460
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 103,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 145,
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
    "value": "action",
    "start": 156,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 215,
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
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 344,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 364,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 371,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 450,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 489,
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
    "value": "class",
    "start": 493,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 509,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 545,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 599,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 644,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 780,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 795,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 818,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 837,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 873,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 902,
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
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 985,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 994,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 997,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1009,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1024,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 1031,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1040,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1056,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 1085,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1100,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1110,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1155,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1167,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1177,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
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
    "value": "=>",
    "start": 1230,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1257,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1266,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1298,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1301,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1320,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1363,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1446,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1499,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1526,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "f5a",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1539,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1545,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1560,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1564,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1580,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1587,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1596,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1630,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1640,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1696,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1705,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1739,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1749,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1769,
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
    "value": ";",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1782,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "f5b",
    "start": 1791,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1803,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1808,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1823,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
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
    "value": "++",
    "start": 1828,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1842,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1848,
    "end": 1851
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 1854,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1880,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "=>",
    "start": 1890,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2002,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2011,
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
    "value": "{",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2022,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 2037,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2048,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2058,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2087,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2095,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2105,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2201,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 2210,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 2221,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 2237,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2257,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2263,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2274,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2295,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2306,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2400,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2407,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2416,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 2428,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2435,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2445,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2543,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2553,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2563,
    "end": 2569
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2570,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2577,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2586,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 2602,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2613,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2623,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2660,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2667,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2676,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 2692,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 2703,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2713,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2763,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2772,
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
    "value": ")",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2784,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2791,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2800,
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
    "value": "i",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2826,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2837,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2845,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2850,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2854,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2864,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "makeAdder",
    "start": 2873,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "number",
    "start": 2887,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 2903,
    "end": 2906
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2914,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2925,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2933,
    "end": 2935
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2946,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 2955,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2967,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "String",
    "value": "\"b\"",
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
    "value": "(",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2994,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3025,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 3034,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3046,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "fooMap",
    "start": 3052,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 3060,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3064,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3071,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3077,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3088,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 3092,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3102,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3108,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3115,
    "end": 3116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3117,
    "end": 3118
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3138,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3142,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "fooMap",
    "start": 3148,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3155,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3159,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3169,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3173,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3177,
    "end": 3179
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3180,
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
    "type": "Identifier",
    "value": "foo",
    "start": 3196,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3216,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 3223,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3233,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3236,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3240,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3253,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 3262,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3357,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3361,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3366,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3375,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3390,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "String",
    "value": "''",
    "start": 3396,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3405,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3413,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3415,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3428,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "toLocaleLowerCase",
    "start": 3432,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3459,
    "end": 3460
  }
]
```
