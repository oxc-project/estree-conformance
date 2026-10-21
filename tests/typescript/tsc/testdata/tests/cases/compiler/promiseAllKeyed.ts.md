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
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 26,
                  "end": 32
                },
                "start": 19,
                "end": 32
              },
              "start": 17,
              "end": 32
            },
            "start": 14,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 32
        }
      ],
      "declare": true,
      "start": 0,
      "end": 33
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
            "start": 41,
            "end": 47
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
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
                    "start": 56,
                    "end": 57
                  },
                  "value": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 59,
                      "end": 60
                    },
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    },
                    "start": 59,
                    "end": 70
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 56,
                  "end": 70
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 77
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 86
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 94
                      },
                      "optional": false,
                      "computed": false,
                      "start": 79,
                      "end": 94
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "value",
                        "raw": "\"value\"",
                        "start": 95,
                        "end": 102
                      }
                    ],
                    "optional": false,
                    "start": 79,
                    "end": 103
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 76,
                  "end": 103
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 110
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 118
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
                                          "type": "TSBooleanKeyword",
                                          "start": 136,
                                          "end": 143
                                        },
                                        "start": 134,
                                        "end": 143
                                      },
                                      "start": 129,
                                      "end": 143
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 148,
                                      "end": 152
                                    },
                                    "start": 145,
                                    "end": 152
                                  },
                                  "start": 128,
                                  "end": 152
                                },
                                "start": 126,
                                "end": 152
                              },
                              "start": 119,
                              "end": 152
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
                                    "name": "resolve",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 156,
                                    "end": 163
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 164,
                                      "end": 168
                                    }
                                  ],
                                  "optional": false,
                                  "start": 156,
                                  "end": 169
                                },
                                "directive": null,
                                "start": 156,
                                "end": 170
                              }
                            ],
                            "start": 154,
                            "end": 172
                          },
                          "expression": false,
                          "start": 118,
                          "end": 172
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 114,
                        "end": 172
                      }
                    ],
                    "start": 112,
                    "end": 174
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 109,
                  "end": 174
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 184
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 194
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 202
                      },
                      "optional": false,
                      "computed": false,
                      "start": 187,
                      "end": 202
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 203,
                        "end": 205
                      }
                    ],
                    "optional": false,
                    "start": 187,
                    "end": 206
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 180,
                  "end": 206
                }
              ],
              "start": 50,
              "end": 209
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 218
              },
              "typeArguments": null,
              "start": 213,
              "end": 218
            },
            "start": 50,
            "end": 218
          },
          "definite": false,
          "start": 41,
          "end": 218
        }
      ],
      "declare": false,
      "start": 35,
      "end": 219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testAllKeyed",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 248
      },
      "generator": false,
      "async": true,
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 269
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 278,
                        "end": 285
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allKeyed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 294
                      },
                      "optional": false,
                      "computed": false,
                      "start": 278,
                      "end": 294
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 301
                      }
                    ],
                    "optional": false,
                    "start": 278,
                    "end": 302
                  },
                  "start": 272,
                  "end": 302
                },
                "definite": false,
                "start": 263,
                "end": 302
              }
            ],
            "declare": false,
            "start": 257,
            "end": 303
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 317,
                      "end": 323
                    },
                    "start": 315,
                    "end": 323
                  },
                  "start": 314,
                  "end": 323
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 332
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 334
                  },
                  "optional": false,
                  "computed": false,
                  "start": 326,
                  "end": 334
                },
                "definite": false,
                "start": 314,
                "end": 334
              }
            ],
            "declare": false,
            "start": 308,
            "end": 335
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 349,
                      "end": 355
                    },
                    "start": 347,
                    "end": 355
                  },
                  "start": 346,
                  "end": 355
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 358,
                    "end": 364
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 366
                  },
                  "optional": false,
                  "computed": false,
                  "start": 358,
                  "end": 366
                },
                "definite": false,
                "start": 346,
                "end": 366
              }
            ],
            "declare": false,
            "start": 340,
            "end": 367
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 381,
                      "end": 388
                    },
                    "start": 379,
                    "end": 388
                  },
                  "start": 378,
                  "end": 388
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 397
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 399
                  },
                  "optional": false,
                  "computed": false,
                  "start": 391,
                  "end": 399
                },
                "definite": false,
                "start": 378,
                "end": 399
              }
            ],
            "declare": false,
            "start": 372,
            "end": 400
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 414,
                      "end": 420
                    },
                    "start": 412,
                    "end": 420
                  },
                  "start": 411,
                  "end": 420
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 429
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 433
                  },
                  "optional": false,
                  "computed": true,
                  "start": 423,
                  "end": 434
                },
                "definite": false,
                "start": 411,
                "end": 434
              }
            ],
            "declare": false,
            "start": 405,
            "end": 435
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 447
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 449
                },
                "optional": false,
                "computed": false,
                "start": 441,
                "end": 449
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 452,
                "end": 453
              },
              "start": 441,
              "end": 453
            },
            "directive": null,
            "start": 441,
            "end": 454
          }
        ],
        "start": 251,
        "end": 456
      },
      "expression": false,
      "start": 221,
      "end": 456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testAllSettledKeyed",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 492
      },
      "generator": false,
      "async": true,
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 513
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 522,
                        "end": 529
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allSettledKeyed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 545
                      },
                      "optional": false,
                      "computed": false,
                      "start": 522,
                      "end": 545
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "values",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 546,
                        "end": 552
                      }
                    ],
                    "optional": false,
                    "start": 522,
                    "end": 553
                  },
                  "start": 516,
                  "end": 553
                },
                "definite": false,
                "start": 507,
                "end": 553
              }
            ],
            "declare": false,
            "start": 501,
            "end": 554
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 570
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 572
                  },
                  "optional": false,
                  "computed": false,
                  "start": 564,
                  "end": 572
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 579
                },
                "optional": false,
                "computed": false,
                "start": 564,
                "end": 579
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "fulfilled",
                "raw": "\"fulfilled\"",
                "start": 584,
                "end": 595
              },
              "start": 564,
              "end": 595
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 620,
                            "end": 626
                          },
                          "start": 618,
                          "end": 626
                        },
                        "start": 613,
                        "end": 626
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 629,
                            "end": 635
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 636,
                            "end": 637
                          },
                          "optional": false,
                          "computed": false,
                          "start": 629,
                          "end": 637
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 638,
                          "end": 643
                        },
                        "optional": false,
                        "computed": false,
                        "start": 629,
                        "end": 643
                      },
                      "definite": false,
                      "start": 613,
                      "end": 643
                    }
                  ],
                  "declare": false,
                  "start": 607,
                  "end": 644
                }
              ],
              "start": 597,
              "end": 650
            },
            "alternate": {
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
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 684,
                            "end": 687
                          },
                          "start": 682,
                          "end": 687
                        },
                        "start": 676,
                        "end": 687
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 690,
                            "end": 696
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 697,
                            "end": 698
                          },
                          "optional": false,
                          "computed": false,
                          "start": 690,
                          "end": 698
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reason",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 699,
                          "end": 705
                        },
                        "optional": false,
                        "computed": false,
                        "start": 690,
                        "end": 705
                      },
                      "definite": false,
                      "start": 676,
                      "end": 705
                    }
                  ],
                  "declare": false,
                  "start": 670,
                  "end": 706
                }
              ],
              "start": 660,
              "end": 712
            },
            "start": 560,
            "end": 712
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 728
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 732
                  },
                  "optional": false,
                  "computed": true,
                  "start": 722,
                  "end": 733
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 734,
                  "end": 740
                },
                "optional": false,
                "computed": false,
                "start": 722,
                "end": 740
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "fulfilled",
                "raw": "\"fulfilled\"",
                "start": 745,
                "end": 756
              },
              "start": 722,
              "end": 756
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 781,
                            "end": 787
                          },
                          "start": 779,
                          "end": 787
                        },
                        "start": 774,
                        "end": 787
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 790,
                            "end": 796
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 797,
                            "end": 800
                          },
                          "optional": false,
                          "computed": true,
                          "start": 790,
                          "end": 801
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 802,
                          "end": 807
                        },
                        "optional": false,
                        "computed": false,
                        "start": 790,
                        "end": 807
                      },
                      "definite": false,
                      "start": 774,
                      "end": 807
                    }
                  ],
                  "declare": false,
                  "start": 768,
                  "end": 808
                }
              ],
              "start": 758,
              "end": 814
            },
            "alternate": null,
            "start": 718,
            "end": 814
          }
        ],
        "start": 495,
        "end": 816
      },
      "expression": false,
      "start": 458,
      "end": 816
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Input",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 833
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 840,
              "end": 841
            },
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
                  "start": 843,
                  "end": 850
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 851,
                      "end": 857
                    }
                  ],
                  "start": 850,
                  "end": 858
                },
                "start": 843,
                "end": 858
              },
              "start": 841,
              "end": 858
            },
            "accessibility": null,
            "static": false,
            "start": 840,
            "end": 859
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 865
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 867,
                "end": 873
              },
              "start": 865,
              "end": 873
            },
            "accessibility": null,
            "static": false,
            "start": 864,
            "end": 874
          }
        ],
        "start": 834,
        "end": 876
      },
      "declare": false,
      "start": 818,
      "end": 876
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
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 899,
                  "end": 904
                },
                "typeArguments": null,
                "start": 899,
                "end": 904
              },
              "start": 897,
              "end": 904
            },
            "start": 892,
            "end": 904
          },
          "init": null,
          "definite": false,
          "start": 892,
          "end": 904
        }
      ],
      "declare": true,
      "start": 878,
      "end": 905
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
            "name": "allResult",
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
                  "start": 924,
                  "end": 931
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 934,
                            "end": 935
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 937,
                              "end": 943
                            },
                            "start": 935,
                            "end": 943
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 934,
                          "end": 944
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 945,
                            "end": 946
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 948,
                              "end": 954
                            },
                            "start": 946,
                            "end": 954
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 945,
                          "end": 955
                        }
                      ],
                      "start": 932,
                      "end": 957
                    }
                  ],
                  "start": 931,
                  "end": 958
                },
                "start": 924,
                "end": 958
              },
              "start": 922,
              "end": 958
            },
            "start": 913,
            "end": 958
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 968
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "allKeyed",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 977
              },
              "optional": false,
              "computed": false,
              "start": 961,
              "end": 977
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 983
              }
            ],
            "optional": false,
            "start": 961,
            "end": 984
          },
          "definite": false,
          "start": 913,
          "end": 984
        }
      ],
      "declare": false,
      "start": 907,
      "end": 985
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
            "name": "allSettledResult",
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
                  "start": 1010,
                  "end": 1017
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1024,
                            "end": 1025
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PromiseSettledResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1027,
                                "end": 1047
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 1048,
                                    "end": 1054
                                  }
                                ],
                                "start": 1047,
                                "end": 1055
                              },
                              "start": 1027,
                              "end": 1055
                            },
                            "start": 1025,
                            "end": 1055
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1024,
                          "end": 1056
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1061,
                            "end": 1062
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PromiseSettledResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1064,
                                "end": 1084
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSStringKeyword",
                                    "start": 1085,
                                    "end": 1091
                                  }
                                ],
                                "start": 1084,
                                "end": 1092
                              },
                              "start": 1064,
                              "end": 1092
                            },
                            "start": 1062,
                            "end": 1092
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1061,
                          "end": 1093
                        }
                      ],
                      "start": 1018,
                      "end": 1095
                    }
                  ],
                  "start": 1017,
                  "end": 1096
                },
                "start": 1010,
                "end": 1096
              },
              "start": 1008,
              "end": 1096
            },
            "start": 992,
            "end": 1096
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1106
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "allSettledKeyed",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1122
              },
              "optional": false,
              "computed": false,
              "start": 1099,
              "end": 1122
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "input",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1128
              }
            ],
            "optional": false,
            "start": 1099,
            "end": 1129
          },
          "definite": false,
          "start": 992,
          "end": 1129
        }
      ],
      "declare": false,
      "start": 986,
      "end": 1130
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1132,
            "end": 1139
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "try",
            "optional": false,
            "typeAnnotation": null,
            "start": 1140,
            "end": 1143
          },
          "optional": false,
          "computed": false,
          "start": 1132,
          "end": 1143
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1150,
              "end": 1151
            },
            "id": null,
            "generator": false,
            "start": 1144,
            "end": 1151
          }
        ],
        "optional": false,
        "start": 1132,
        "end": 1152
      },
      "directive": null,
      "start": 1132,
      "end": 1153
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1155,
            "end": 1162
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "allKeyed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1171
          },
          "optional": false,
          "computed": false,
          "start": 1155,
          "end": 1171
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1172,
            "end": 1173
          }
        ],
        "optional": false,
        "start": 1155,
        "end": 1174
      },
      "directive": null,
      "start": 1155,
      "end": 1175
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1177,
            "end": 1184
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "allSettledKeyed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1200
          },
          "optional": false,
          "computed": false,
          "start": 1177,
          "end": 1200
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "value",
            "raw": "\"value\"",
            "start": 1201,
            "end": 1208
          }
        ],
        "optional": false,
        "start": 1177,
        "end": 1209
      },
      "directive": null,
      "start": 1177,
      "end": 1210
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1212,
            "end": 1219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "allKeyed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1220,
            "end": 1228
          },
          "optional": false,
          "computed": false,
          "start": 1212,
          "end": 1228
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 1229,
            "end": 1233
          }
        ],
        "optional": false,
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
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1237,
            "end": 1244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "allSettledKeyed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1245,
            "end": 1260
          },
          "optional": false,
          "computed": false,
          "start": 1237,
          "end": 1260
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1261,
            "end": 1270
          }
        ],
        "optional": false,
        "start": 1237,
        "end": 1271
      },
      "directive": null,
      "start": 1237,
      "end": 1272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1272
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 14,
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
    "value": "unique",
    "start": 19,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 61,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 129,
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
    "value": "boolean",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 145,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 221,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 227,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "testAllKeyed",
    "start": 236,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 278,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "allKeyed",
    "start": 286,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 308,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 372,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 381,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 391,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 405,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 423,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 458,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 464,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "testAllSettledKeyed",
    "start": 473,
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
    "type": "Punctuator",
    "value": "{",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 516,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 522,
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
    "value": "allSettledKeyed",
    "start": 530,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 546,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 560,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 564,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 573,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 580,
    "end": 583
  },
  {
    "type": "String",
    "value": "\"fulfilled\"",
    "start": 584,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 607,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 629,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 655,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 670,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 699,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 734,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 741,
    "end": 744
  },
  {
    "type": "String",
    "value": "\"fulfilled\"",
    "start": 745,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 768,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 774,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 797,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 802,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
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
    "start": 815,
    "end": 816
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 818,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 828,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 843,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 867,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 878,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 886,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 892,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 899,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 907,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "allResult",
    "start": 913,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 924,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 961,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "allKeyed",
    "start": 969,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 978,
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
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 986,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "allSettledResult",
    "start": 992,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1010,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "PromiseSettledResult",
    "start": 1027,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1048,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "PromiseSettledResult",
    "start": 1064,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1085,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1099,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "allSettledKeyed",
    "start": 1107,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1132,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1155,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "allKeyed",
    "start": 1163,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Promise",
    "start": 1177,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "allSettledKeyed",
    "start": 1185,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 1201,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1212,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "allKeyed",
    "start": 1220,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1229,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1233,
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
    "value": "Promise",
    "start": 1237,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "allSettledKeyed",
    "start": 1245,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1261,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  }
]
```
