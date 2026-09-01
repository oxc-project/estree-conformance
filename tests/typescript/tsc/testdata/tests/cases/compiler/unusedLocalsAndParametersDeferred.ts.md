__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 11
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defered",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 29
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
              "start": 30,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 30,
            "end": 31
          }
        ],
        "start": 29,
        "end": 32
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "start": 42,
                    "end": 43
                  },
                  "typeArguments": null,
                  "start": 42,
                  "end": 43
                },
                "start": 39,
                "end": 43
              },
              "start": 36,
              "end": 43
            },
            "start": 34,
            "end": 43
          },
          "start": 33,
          "end": 43
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
            "start": 46,
            "end": 47
          },
          "typeArguments": null,
          "start": 46,
          "end": 47
        },
        "start": 44,
        "end": 47
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 61,
              "end": 64
            },
            "start": 54,
            "end": 65
          }
        ],
        "start": 48,
        "end": 67
      },
      "expression": false,
      "start": 13,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
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
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 129
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 147
                        },
                        "directive": null,
                        "start": 146,
                        "end": 148
                      }
                    ],
                    "start": 136,
                    "end": 154
                  },
                  "id": null,
                  "generator": false,
                  "start": 130,
                  "end": 154
                }
              ],
              "optional": false,
              "start": 122,
              "end": 155
            },
            "directive": null,
            "start": 122,
            "end": 156
          }
        ],
        "start": 116,
        "end": 158
      },
      "expression": false,
      "start": 102,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 160
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          }
        ],
        "optional": false,
        "start": 159,
        "end": 163
      },
      "directive": null,
      "start": 159,
      "end": 164
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
            "name": "fexp",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 206
          },
          "init": {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
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
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 235
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 252,
                                "end": 253
                              },
                              "directive": null,
                              "start": 252,
                              "end": 254
                            }
                          ],
                          "start": 242,
                          "end": 260
                        },
                        "id": null,
                        "generator": false,
                        "start": 236,
                        "end": 260
                      }
                    ],
                    "optional": false,
                    "start": 228,
                    "end": 261
                  },
                  "directive": null,
                  "start": 228,
                  "end": 262
                }
              ],
              "start": 222,
              "end": 264
            },
            "expression": false,
            "start": 209,
            "end": 264
          },
          "definite": false,
          "start": 202,
          "end": 264
        }
      ],
      "declare": false,
      "start": 198,
      "end": 265
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fexp",
          "optional": false,
          "typeAnnotation": null,
          "start": 266,
          "end": 270
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 271,
            "end": 272
          }
        ],
        "optional": false,
        "start": 266,
        "end": 273
      },
      "directive": null,
      "start": 266,
      "end": 274
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
            "name": "farrow",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 313
          },
          "init": {
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
                "start": 317,
                "end": 318
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
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 336
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 353,
                                "end": 354
                              },
                              "directive": null,
                              "start": 353,
                              "end": 355
                            }
                          ],
                          "start": 343,
                          "end": 361
                        },
                        "id": null,
                        "generator": false,
                        "start": 337,
                        "end": 361
                      }
                    ],
                    "optional": false,
                    "start": 329,
                    "end": 362
                  },
                  "directive": null,
                  "start": 329,
                  "end": 363
                }
              ],
              "start": 323,
              "end": 365
            },
            "id": null,
            "generator": false,
            "start": 316,
            "end": 365
          },
          "definite": false,
          "start": 307,
          "end": 365
        }
      ],
      "declare": false,
      "start": 303,
      "end": 366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "farrow",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 373
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 374,
            "end": 375
          }
        ],
        "optional": false,
        "start": 367,
        "end": 376
      },
      "directive": null,
      "start": 367,
      "end": 377
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
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 388
          },
          "init": null,
          "definite": false,
          "start": 383,
          "end": 388
        }
      ],
      "declare": false,
      "start": 379,
      "end": 389
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 398
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 448
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
                        "name": "defered",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 460,
                        "end": 467
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 488,
                                  "end": 489
                                },
                                "directive": null,
                                "start": 488,
                                "end": 490
                              }
                            ],
                            "start": 474,
                            "end": 500
                          },
                          "id": null,
                          "generator": false,
                          "start": 468,
                          "end": 500
                        }
                      ],
                      "optional": false,
                      "start": 460,
                      "end": 501
                    },
                    "directive": null,
                    "start": 460,
                    "end": 502
                  }
                ],
                "start": 450,
                "end": 508
              },
              "expression": false,
              "start": 446,
              "end": 508
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 440,
            "end": 508
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 559,
                      "end": 565
                    },
                    "start": 557,
                    "end": 565
                  },
                  "start": 556,
                  "end": 565
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
                        "name": "defered",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 584
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
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 605,
                                  "end": 606
                                },
                                "directive": null,
                                "start": 605,
                                "end": 607
                              }
                            ],
                            "start": 591,
                            "end": 617
                          },
                          "id": null,
                          "generator": false,
                          "start": 585,
                          "end": 617
                        }
                      ],
                      "optional": false,
                      "start": 577,
                      "end": 618
                    },
                    "directive": null,
                    "start": 577,
                    "end": 619
                  }
                ],
                "start": 567,
                "end": 625
              },
              "expression": false,
              "start": 555,
              "end": 625
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 550,
            "end": 625
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 663
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 673
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
                          "name": "prop1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 690,
                          "end": 695
                        },
                        "directive": null,
                        "start": 690,
                        "end": 696
                      }
                    ],
                    "start": 680,
                    "end": 702
                  },
                  "id": null,
                  "generator": false,
                  "start": 674,
                  "end": 702
                }
              ],
              "optional": false,
              "start": 666,
              "end": 703
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 662,
            "end": 704
          }
        ],
        "start": 399,
        "end": 706
      },
      "abstract": false,
      "declare": false,
      "start": 391,
      "end": 706
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 712,
          "end": 713
        },
        "typeArguments": null,
        "arguments": [],
        "start": 708,
        "end": 715
      },
      "directive": null,
      "start": 708,
      "end": 716
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
            "name": "prop2",
            "optional": false,
            "typeAnnotation": null,
            "start": 722,
            "end": 727
          },
          "init": null,
          "definite": false,
          "start": 722,
          "end": 727
        }
      ],
      "declare": false,
      "start": 718,
      "end": 728
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
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 735
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
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 785,
                    "end": 791
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 793
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
                              "name": "defered",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 805,
                              "end": 812
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
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 833,
                                        "end": 834
                                      },
                                      "directive": null,
                                      "start": 833,
                                      "end": 835
                                    }
                                  ],
                                  "start": 819,
                                  "end": 845
                                },
                                "id": null,
                                "generator": false,
                                "start": 813,
                                "end": 845
                              }
                            ],
                            "optional": false,
                            "start": 805,
                            "end": 846
                          },
                          "directive": null,
                          "start": 805,
                          "end": 847
                        }
                      ],
                      "start": 795,
                      "end": 853
                    },
                    "expression": false,
                    "start": 791,
                    "end": 853
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 785,
                  "end": 853
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 900
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 904,
                            "end": 910
                          },
                          "start": 902,
                          "end": 910
                        },
                        "start": 901,
                        "end": 910
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
                              "name": "defered",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 922,
                              "end": 929
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
                                        "name": "v",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 950,
                                        "end": 951
                                      },
                                      "directive": null,
                                      "start": 950,
                                      "end": 952
                                    }
                                  ],
                                  "start": 936,
                                  "end": 962
                                },
                                "id": null,
                                "generator": false,
                                "start": 930,
                                "end": 962
                              }
                            ],
                            "optional": false,
                            "start": 922,
                            "end": 963
                          },
                          "directive": null,
                          "start": 922,
                          "end": 964
                        }
                      ],
                      "start": 912,
                      "end": 970
                    },
                    "expression": false,
                    "start": 900,
                    "end": 970
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 895,
                  "end": 970
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1008
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1011,
                      "end": 1018
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
                                "name": "prop2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1035,
                                "end": 1040
                              },
                              "directive": null,
                              "start": 1035,
                              "end": 1041
                            }
                          ],
                          "start": 1025,
                          "end": 1047
                        },
                        "id": null,
                        "generator": false,
                        "start": 1019,
                        "end": 1047
                      }
                    ],
                    "optional": false,
                    "start": 1011,
                    "end": 1048
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 1007,
                  "end": 1049
                }
              ],
              "start": 744,
              "end": 1051
            },
            "abstract": false,
            "declare": false,
            "start": 738,
            "end": 1051
          },
          "definite": false,
          "start": 734,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 730,
      "end": 1051
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1057,
          "end": 1058
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1053,
        "end": 1060
      },
      "directive": null,
      "start": 1053,
      "end": 1061
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1068,
            "end": 1069
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1128,
                  "end": 1134
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1136
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
                            "name": "defered",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1148,
                            "end": 1155
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1176,
                                      "end": 1177
                                    },
                                    "directive": null,
                                    "start": 1176,
                                    "end": 1178
                                  }
                                ],
                                "start": 1162,
                                "end": 1188
                              },
                              "id": null,
                              "generator": false,
                              "start": 1156,
                              "end": 1188
                            }
                          ],
                          "optional": false,
                          "start": 1148,
                          "end": 1189
                        },
                        "directive": null,
                        "start": 1148,
                        "end": 1190
                      }
                    ],
                    "start": 1138,
                    "end": 1196
                  },
                  "expression": false,
                  "start": 1134,
                  "end": 1196
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1128,
                "end": 1196
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1243,
                  "end": 1244
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1248,
                          "end": 1254
                        },
                        "start": 1246,
                        "end": 1254
                      },
                      "start": 1245,
                      "end": 1254
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
                            "name": "defered",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1266,
                            "end": 1273
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
                                      "name": "v",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1294,
                                      "end": 1295
                                    },
                                    "directive": null,
                                    "start": 1294,
                                    "end": 1296
                                  }
                                ],
                                "start": 1280,
                                "end": 1306
                              },
                              "id": null,
                              "generator": false,
                              "start": 1274,
                              "end": 1306
                            }
                          ],
                          "optional": false,
                          "start": 1266,
                          "end": 1307
                        },
                        "directive": null,
                        "start": 1266,
                        "end": 1308
                      }
                    ],
                    "start": 1256,
                    "end": 1314
                  },
                  "expression": false,
                  "start": 1244,
                  "end": 1314
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1239,
                "end": 1314
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1353
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defered",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1355,
                    "end": 1362
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
                              "name": "prop1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1379,
                              "end": 1384
                            },
                            "directive": null,
                            "start": 1379,
                            "end": 1385
                          }
                        ],
                        "start": 1369,
                        "end": 1391
                      },
                      "id": null,
                      "generator": false,
                      "start": 1363,
                      "end": 1391
                    }
                  ],
                  "optional": false,
                  "start": 1355,
                  "end": 1392
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1352,
                "end": 1392
              }
            ],
            "start": 1072,
            "end": 1394
          },
          "definite": false,
          "start": 1068,
          "end": 1394
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1398
      },
      "directive": null,
      "start": 1397,
      "end": 1399
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "start": 1435,
              "end": 1436
            },
            "init": null,
            "definite": false,
            "start": 1435,
            "end": 1436
          }
        ],
        "declare": false,
        "start": 1431,
        "end": 1436
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "typeAnnotation": null,
        "start": 1440,
        "end": 1441
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
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1449,
                "end": 1456
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
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1473,
                          "end": 1474
                        },
                        "directive": null,
                        "start": 1473,
                        "end": 1475
                      }
                    ],
                    "start": 1463,
                    "end": 1481
                  },
                  "id": null,
                  "generator": false,
                  "start": 1457,
                  "end": 1481
                }
              ],
              "optional": false,
              "start": 1449,
              "end": 1482
            },
            "directive": null,
            "start": 1449,
            "end": 1483
          }
        ],
        "start": 1443,
        "end": 1485
      },
      "start": 1426,
      "end": 1485
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
              "start": 1521,
              "end": 1522
            },
            "init": null,
            "definite": false,
            "start": 1521,
            "end": 1522
          }
        ],
        "declare": false,
        "start": 1517,
        "end": 1522
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1527,
            "end": 1528
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1529,
            "end": 1530
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 1531,
            "end": 1532
          }
        ],
        "start": 1526,
        "end": 1533
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
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1548
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
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1565,
                          "end": 1566
                        },
                        "directive": null,
                        "start": 1565,
                        "end": 1567
                      }
                    ],
                    "start": 1555,
                    "end": 1573
                  },
                  "id": null,
                  "generator": false,
                  "start": 1549,
                  "end": 1573
                }
              ],
              "optional": false,
              "start": 1541,
              "end": 1574
            },
            "directive": null,
            "start": 1541,
            "end": 1575
          }
        ],
        "start": 1535,
        "end": 1577
      },
      "start": 1512,
      "end": 1577
    },
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
              "start": 1610,
              "end": 1611
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1614,
              "end": 1615
            },
            "definite": false,
            "start": 1610,
            "end": 1615
          }
        ],
        "declare": false,
        "start": 1606,
        "end": 1615
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1617,
          "end": 1618
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1621,
          "end": 1623
        },
        "start": 1617,
        "end": 1623
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
          "start": 1625,
          "end": 1626
        },
        "start": 1625,
        "end": 1628
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
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1643
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
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1660,
                          "end": 1661
                        },
                        "directive": null,
                        "start": 1660,
                        "end": 1662
                      }
                    ],
                    "start": 1650,
                    "end": 1668
                  },
                  "id": null,
                  "generator": false,
                  "start": 1644,
                  "end": 1668
                }
              ],
              "optional": false,
              "start": 1636,
              "end": 1669
            },
            "directive": null,
            "start": 1636,
            "end": 1670
          }
        ],
        "start": 1630,
        "end": 1672
      },
      "start": 1601,
      "end": 1672
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
            "name": "condition",
            "optional": false,
            "typeAnnotation": null,
            "start": 1695,
            "end": 1704
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1707,
            "end": 1712
          },
          "definite": false,
          "start": 1695,
          "end": 1712
        }
      ],
      "declare": false,
      "start": 1689,
      "end": 1713
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "condition",
        "optional": false,
        "typeAnnotation": null,
        "start": 1718,
        "end": 1727
      },
      "consequent": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1741,
                  "end": 1742
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1745,
                  "end": 1746
                },
                "definite": false,
                "start": 1741,
                "end": 1746
              }
            ],
            "declare": false,
            "start": 1735,
            "end": 1747
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1759
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1776,
                          "end": 1777
                        },
                        "directive": null,
                        "start": 1776,
                        "end": 1778
                      }
                    ],
                    "start": 1766,
                    "end": 1784
                  },
                  "id": null,
                  "generator": false,
                  "start": 1760,
                  "end": 1784
                }
              ],
              "optional": false,
              "start": 1752,
              "end": 1785
            },
            "directive": null,
            "start": 1752,
            "end": 1786
          }
        ],
        "start": 1729,
        "end": 1788
      },
      "alternate": null,
      "start": 1714,
      "end": 1788
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1830,
                  "end": 1831
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1834,
                  "end": 1835
                },
                "definite": false,
                "start": 1830,
                "end": 1835
              }
            ],
            "declare": false,
            "start": 1824,
            "end": 1836
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1848
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1865,
                          "end": 1866
                        },
                        "directive": null,
                        "start": 1865,
                        "end": 1867
                      }
                    ],
                    "start": 1855,
                    "end": 1873
                  },
                  "id": null,
                  "generator": false,
                  "start": 1849,
                  "end": 1873
                }
              ],
              "optional": false,
              "start": 1841,
              "end": 1874
            },
            "directive": null,
            "start": 1841,
            "end": 1875
          }
        ],
        "start": 1818,
        "end": 1877
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 1885,
          "end": 1886
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1900,
                    "end": 1901
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1904,
                    "end": 1905
                  },
                  "definite": false,
                  "start": 1900,
                  "end": 1905
                }
              ],
              "declare": false,
              "start": 1894,
              "end": 1906
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defered",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1918
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
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1935,
                            "end": 1936
                          },
                          "directive": null,
                          "start": 1935,
                          "end": 1937
                        }
                      ],
                      "start": 1925,
                      "end": 1943
                    },
                    "id": null,
                    "generator": false,
                    "start": 1919,
                    "end": 1943
                  }
                ],
                "optional": false,
                "start": 1911,
                "end": 1944
              },
              "directive": null,
              "start": 1911,
              "end": 1945
            }
          ],
          "start": 1888,
          "end": 1947
        },
        "start": 1878,
        "end": 1947
      },
      "finalizer": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1968,
                  "end": 1969
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1972,
                  "end": 1973
                },
                "definite": false,
                "start": 1968,
                "end": 1973
              }
            ],
            "declare": false,
            "start": 1962,
            "end": 1974
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1979,
                "end": 1986
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2003,
                          "end": 2004
                        },
                        "directive": null,
                        "start": 2003,
                        "end": 2005
                      }
                    ],
                    "start": 1993,
                    "end": 2011
                  },
                  "id": null,
                  "generator": false,
                  "start": 1987,
                  "end": 2011
                }
              ],
              "optional": false,
              "start": 1979,
              "end": 2012
            },
            "directive": null,
            "start": 1979,
            "end": 2013
          }
        ],
        "start": 1956,
        "end": 2015
      },
      "start": 1814,
      "end": 2015
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 2046,
        "end": 2047
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": null,
                  "start": 2058,
                  "end": 2059
                },
                "init": null,
                "definite": false,
                "start": 2058,
                "end": 2059
              }
            ],
            "declare": false,
            "start": 2054,
            "end": 2060
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "typeAnnotation": null,
                "start": 2065,
                "end": 2072
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
                          "start": 2089,
                          "end": 2090
                        },
                        "directive": null,
                        "start": 2089,
                        "end": 2091
                      }
                    ],
                    "start": 2079,
                    "end": 2097
                  },
                  "id": null,
                  "generator": false,
                  "start": 2073,
                  "end": 2097
                }
              ],
              "optional": false,
              "start": 2065,
              "end": 2098
            },
            "directive": null,
            "start": 2065,
            "end": 2099
          }
        ],
        "start": 2048,
        "end": 2101
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2036,
      "end": 2101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2103
      },
      "directive": null,
      "start": 2102,
      "end": 2104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2109
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "a",
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
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "fexp",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 209,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 228,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "fexp",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 303,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "farrow",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 329,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "farrow",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "let",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 391,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 460,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 559,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 577,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 666,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 690,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 708,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 718,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 722,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 738,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 785,
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
    "value": "a",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 805,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 816,
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
    "value": "a",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 895,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 901,
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
    "value": "number",
    "start": 904,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 922,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 933,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1011,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1064,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1148,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1159,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1176,
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
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1239,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1266,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1313,
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
    "value": "p",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1355,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1366,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 1379,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "o",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1426,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1431,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1437,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1449,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
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
    "value": "=>",
    "start": 1460,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "i",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1512,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1517,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1523,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1541,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1552,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1601,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1606,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1621,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1636,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1647,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1689,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 1695,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1707,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "condition",
    "start": 1718,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1735,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1745,
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
    "value": "defered",
    "start": 1752,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1763,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1814,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1824,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1841,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1852,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1878,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1894,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1911,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
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
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1948,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1962,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 1979,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1990,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2036,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2054,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "defered",
    "start": 2065,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2076,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2103,
    "end": 2104
  }
]
```
