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
        "name": "inferReturnType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 33
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 36,
        "end": 39
      },
      "expression": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 73
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 82,
              "end": 87
            },
            "directive": null,
            "start": 82,
            "end": 88
          }
        ],
        "start": 76,
        "end": 90
      },
      "expression": false,
      "start": 40,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 124
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 139,
                "end": 140
              },
              "start": 133,
              "end": 140
            },
            "directive": null,
            "start": 133,
            "end": 141
          }
        ],
        "start": 127,
        "end": 143
      },
      "expression": false,
      "start": 91,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType4",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 177
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
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
                    "start": 192,
                    "end": 199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 207
                  },
                  "optional": false,
                  "computed": false,
                  "start": 192,
                  "end": 207
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 208,
                    "end": 209
                  }
                ],
                "optional": false,
                "start": 192,
                "end": 210
              },
              "start": 186,
              "end": 210
            },
            "directive": null,
            "start": 186,
            "end": 211
          }
        ],
        "start": 180,
        "end": 213
      },
      "expression": false,
      "start": 144,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType5",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 247
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 262,
                "end": 263
              },
              "start": 256,
              "end": 263
            },
            "directive": null,
            "start": 256,
            "end": 264
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
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
                    "start": 275,
                    "end": 282
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 290
                  },
                  "optional": false,
                  "computed": false,
                  "start": 275,
                  "end": 290
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 291,
                    "end": 292
                  }
                ],
                "optional": false,
                "start": 275,
                "end": 293
              },
              "start": 269,
              "end": 293
            },
            "directive": null,
            "start": 269,
            "end": 294
          }
        ],
        "start": 250,
        "end": 296
      },
      "expression": false,
      "start": 214,
      "end": 296
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType6",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 330
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 347,
                    "end": 348
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 350,
                    "end": 351
                  }
                ],
                "start": 346,
                "end": 352
              },
              "start": 339,
              "end": 352
            },
            "directive": null,
            "start": 339,
            "end": 353
          }
        ],
        "start": 333,
        "end": 355
      },
      "expression": false,
      "start": 297,
      "end": 355
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType7",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 389
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 413
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 421
                      },
                      "optional": false,
                      "computed": false,
                      "start": 406,
                      "end": 421
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 422,
                        "end": 423
                      }
                    ],
                    "optional": false,
                    "start": 406,
                    "end": 424
                  }
                ],
                "start": 405,
                "end": 425
              },
              "start": 398,
              "end": 425
            },
            "directive": null,
            "start": 398,
            "end": 426
          }
        ],
        "start": 392,
        "end": 428
      },
      "expression": false,
      "start": 356,
      "end": 428
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType8",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 462
      },
      "generator": true,
      "async": true,
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
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 507,
                            "end": 508
                          },
                          "start": 501,
                          "end": 508
                        },
                        "directive": null,
                        "start": 501,
                        "end": 509
                      }
                    ],
                    "start": 499,
                    "end": 511
                  },
                  "expression": false,
                  "start": 479,
                  "end": 511
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 478,
                "end": 514
              },
              "start": 471,
              "end": 514
            },
            "directive": null,
            "start": 471,
            "end": 515
          }
        ],
        "start": 465,
        "end": 517
      },
      "expression": false,
      "start": 429,
      "end": 517
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
            "name": "assignability1",
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
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 567
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 568,
                          "end": 574
                        }
                      ],
                      "start": 567,
                      "end": 575
                    },
                    "start": 546,
                    "end": 575
                  },
                  "start": 543,
                  "end": 575
                },
                "start": 540,
                "end": 575
              },
              "start": 538,
              "end": 575
            },
            "start": 524,
            "end": 575
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 610,
                      "end": 611
                    },
                    "start": 604,
                    "end": 611
                  },
                  "directive": null,
                  "start": 604,
                  "end": 612
                }
              ],
              "start": 598,
              "end": 614
            },
            "expression": false,
            "start": 578,
            "end": 614
          },
          "definite": false,
          "start": 524,
          "end": 614
        }
      ],
      "declare": false,
      "start": 518,
      "end": 615
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
            "name": "assignability2",
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
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 644,
                      "end": 665
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 666,
                          "end": 672
                        }
                      ],
                      "start": 665,
                      "end": 673
                    },
                    "start": 644,
                    "end": 673
                  },
                  "start": 641,
                  "end": 673
                },
                "start": 638,
                "end": 673
              },
              "start": 636,
              "end": 673
            },
            "start": 622,
            "end": 673
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
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
                          "start": 708,
                          "end": 715
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 716,
                          "end": 723
                        },
                        "optional": false,
                        "computed": false,
                        "start": 708,
                        "end": 723
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 724,
                          "end": 725
                        }
                      ],
                      "optional": false,
                      "start": 708,
                      "end": 726
                    },
                    "start": 702,
                    "end": 726
                  },
                  "directive": null,
                  "start": 702,
                  "end": 727
                }
              ],
              "start": 696,
              "end": 729
            },
            "expression": false,
            "start": 676,
            "end": 729
          },
          "definite": false,
          "start": 622,
          "end": 729
        }
      ],
      "declare": false,
      "start": 616,
      "end": 730
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
            "name": "assignability3",
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
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 780
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 781,
                          "end": 787
                        }
                      ],
                      "start": 780,
                      "end": 788
                    },
                    "start": 759,
                    "end": 788
                  },
                  "start": 756,
                  "end": 788
                },
                "start": 753,
                "end": 788
              },
              "start": 751,
              "end": 788
            },
            "start": 737,
            "end": 788
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 825,
                          "end": 826
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 828,
                          "end": 829
                        }
                      ],
                      "start": 824,
                      "end": 830
                    },
                    "start": 817,
                    "end": 830
                  },
                  "directive": null,
                  "start": 817,
                  "end": 831
                }
              ],
              "start": 811,
              "end": 833
            },
            "expression": false,
            "start": 791,
            "end": 833
          },
          "definite": false,
          "start": 737,
          "end": 833
        }
      ],
      "declare": false,
      "start": 731,
      "end": 834
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
            "name": "assignability4",
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
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 884
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 885,
                          "end": 891
                        }
                      ],
                      "start": 884,
                      "end": 892
                    },
                    "start": 863,
                    "end": 892
                  },
                  "start": 860,
                  "end": 892
                },
                "start": 857,
                "end": 892
              },
              "start": 855,
              "end": 892
            },
            "start": 841,
            "end": 892
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 929,
                              "end": 936
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 937,
                              "end": 944
                            },
                            "optional": false,
                            "computed": false,
                            "start": 929,
                            "end": 944
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 945,
                              "end": 946
                            }
                          ],
                          "optional": false,
                          "start": 929,
                          "end": 947
                        }
                      ],
                      "start": 928,
                      "end": 948
                    },
                    "start": 921,
                    "end": 948
                  },
                  "directive": null,
                  "start": 921,
                  "end": 949
                }
              ],
              "start": 915,
              "end": 951
            },
            "expression": false,
            "start": 895,
            "end": 951
          },
          "definite": false,
          "start": 841,
          "end": 951
        }
      ],
      "declare": false,
      "start": 835,
      "end": 952
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
            "name": "assignability5",
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
                      "name": "AsyncIterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 1002
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1003,
                          "end": 1009
                        }
                      ],
                      "start": 1002,
                      "end": 1010
                    },
                    "start": 981,
                    "end": 1010
                  },
                  "start": 978,
                  "end": 1010
                },
                "start": 975,
                "end": 1010
              },
              "start": 973,
              "end": 1010
            },
            "start": 959,
            "end": 1010
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": true,
                        "async": true,
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
                                "type": "YieldExpression",
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1075,
                                  "end": 1076
                                },
                                "start": 1069,
                                "end": 1076
                              },
                              "directive": null,
                              "start": 1069,
                              "end": 1077
                            }
                          ],
                          "start": 1067,
                          "end": 1079
                        },
                        "expression": false,
                        "start": 1047,
                        "end": 1079
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1046,
                      "end": 1082
                    },
                    "start": 1039,
                    "end": 1082
                  },
                  "directive": null,
                  "start": 1039,
                  "end": 1083
                }
              ],
              "start": 1033,
              "end": 1085
            },
            "expression": false,
            "start": 1013,
            "end": 1085
          },
          "definite": false,
          "start": 959,
          "end": 1085
        }
      ],
      "declare": false,
      "start": 953,
      "end": 1086
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
            "name": "assignability6",
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1128
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1129,
                          "end": 1135
                        }
                      ],
                      "start": 1128,
                      "end": 1136
                    },
                    "start": 1115,
                    "end": 1136
                  },
                  "start": 1112,
                  "end": 1136
                },
                "start": 1109,
                "end": 1136
              },
              "start": 1107,
              "end": 1136
            },
            "start": 1093,
            "end": 1136
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1171,
                      "end": 1172
                    },
                    "start": 1165,
                    "end": 1172
                  },
                  "directive": null,
                  "start": 1165,
                  "end": 1173
                }
              ],
              "start": 1159,
              "end": 1175
            },
            "expression": false,
            "start": 1139,
            "end": 1175
          },
          "definite": false,
          "start": 1093,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1087,
      "end": 1176
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
            "name": "assignability7",
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1205,
                      "end": 1218
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1219,
                          "end": 1225
                        }
                      ],
                      "start": 1218,
                      "end": 1226
                    },
                    "start": 1205,
                    "end": 1226
                  },
                  "start": 1202,
                  "end": 1226
                },
                "start": 1199,
                "end": 1226
              },
              "start": 1197,
              "end": 1226
            },
            "start": 1183,
            "end": 1226
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
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
                          "start": 1261,
                          "end": 1268
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1269,
                          "end": 1276
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1261,
                        "end": 1276
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1277,
                          "end": 1278
                        }
                      ],
                      "optional": false,
                      "start": 1261,
                      "end": 1279
                    },
                    "start": 1255,
                    "end": 1279
                  },
                  "directive": null,
                  "start": 1255,
                  "end": 1280
                }
              ],
              "start": 1249,
              "end": 1282
            },
            "expression": false,
            "start": 1229,
            "end": 1282
          },
          "definite": false,
          "start": 1183,
          "end": 1282
        }
      ],
      "declare": false,
      "start": 1177,
      "end": 1283
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
            "name": "assignability8",
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1312,
                      "end": 1325
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1326,
                          "end": 1332
                        }
                      ],
                      "start": 1325,
                      "end": 1333
                    },
                    "start": 1312,
                    "end": 1333
                  },
                  "start": 1309,
                  "end": 1333
                },
                "start": 1306,
                "end": 1333
              },
              "start": 1304,
              "end": 1333
            },
            "start": 1290,
            "end": 1333
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1370,
                          "end": 1371
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1373,
                          "end": 1374
                        }
                      ],
                      "start": 1369,
                      "end": 1375
                    },
                    "start": 1362,
                    "end": 1375
                  },
                  "directive": null,
                  "start": 1362,
                  "end": 1376
                }
              ],
              "start": 1356,
              "end": 1378
            },
            "expression": false,
            "start": 1336,
            "end": 1378
          },
          "definite": false,
          "start": 1290,
          "end": 1378
        }
      ],
      "declare": false,
      "start": 1284,
      "end": 1379
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
            "name": "assignability9",
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1408,
                      "end": 1421
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1422,
                          "end": 1428
                        }
                      ],
                      "start": 1421,
                      "end": 1429
                    },
                    "start": 1408,
                    "end": 1429
                  },
                  "start": 1405,
                  "end": 1429
                },
                "start": 1402,
                "end": 1429
              },
              "start": 1400,
              "end": 1429
            },
            "start": 1386,
            "end": 1429
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1466,
                              "end": 1473
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1474,
                              "end": 1481
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1466,
                            "end": 1481
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1482,
                              "end": 1483
                            }
                          ],
                          "optional": false,
                          "start": 1466,
                          "end": 1484
                        }
                      ],
                      "start": 1465,
                      "end": 1485
                    },
                    "start": 1458,
                    "end": 1485
                  },
                  "directive": null,
                  "start": 1458,
                  "end": 1486
                }
              ],
              "start": 1452,
              "end": 1488
            },
            "expression": false,
            "start": 1432,
            "end": 1488
          },
          "definite": false,
          "start": 1386,
          "end": 1488
        }
      ],
      "declare": false,
      "start": 1380,
      "end": 1489
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
            "name": "assignability10",
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1519,
                      "end": 1532
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1533,
                          "end": 1539
                        }
                      ],
                      "start": 1532,
                      "end": 1540
                    },
                    "start": 1519,
                    "end": 1540
                  },
                  "start": 1516,
                  "end": 1540
                },
                "start": 1513,
                "end": 1540
              },
              "start": 1511,
              "end": 1540
            },
            "start": 1496,
            "end": 1540
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": true,
                        "async": true,
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
                                "type": "YieldExpression",
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 1605,
                                  "end": 1606
                                },
                                "start": 1599,
                                "end": 1606
                              },
                              "directive": null,
                              "start": 1599,
                              "end": 1607
                            }
                          ],
                          "start": 1597,
                          "end": 1609
                        },
                        "expression": false,
                        "start": 1577,
                        "end": 1609
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1576,
                      "end": 1612
                    },
                    "start": 1569,
                    "end": 1612
                  },
                  "directive": null,
                  "start": 1569,
                  "end": 1613
                }
              ],
              "start": 1563,
              "end": 1615
            },
            "expression": false,
            "start": 1543,
            "end": 1615
          },
          "definite": false,
          "start": 1496,
          "end": 1615
        }
      ],
      "declare": false,
      "start": 1490,
      "end": 1616
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
            "name": "assignability11",
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1646,
                      "end": 1659
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1660,
                          "end": 1666
                        }
                      ],
                      "start": 1659,
                      "end": 1667
                    },
                    "start": 1646,
                    "end": 1667
                  },
                  "start": 1643,
                  "end": 1667
                },
                "start": 1640,
                "end": 1667
              },
              "start": 1638,
              "end": 1667
            },
            "start": 1623,
            "end": 1667
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1702,
                      "end": 1703
                    },
                    "start": 1696,
                    "end": 1703
                  },
                  "directive": null,
                  "start": 1696,
                  "end": 1704
                }
              ],
              "start": 1690,
              "end": 1706
            },
            "expression": false,
            "start": 1670,
            "end": 1706
          },
          "definite": false,
          "start": 1623,
          "end": 1706
        }
      ],
      "declare": false,
      "start": 1617,
      "end": 1707
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
            "name": "assignability12",
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1737,
                      "end": 1750
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1751,
                          "end": 1757
                        }
                      ],
                      "start": 1750,
                      "end": 1758
                    },
                    "start": 1737,
                    "end": 1758
                  },
                  "start": 1734,
                  "end": 1758
                },
                "start": 1731,
                "end": 1758
              },
              "start": 1729,
              "end": 1758
            },
            "start": 1714,
            "end": 1758
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": false,
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
                          "start": 1793,
                          "end": 1800
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1801,
                          "end": 1808
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1793,
                        "end": 1808
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1809,
                          "end": 1810
                        }
                      ],
                      "optional": false,
                      "start": 1793,
                      "end": 1811
                    },
                    "start": 1787,
                    "end": 1811
                  },
                  "directive": null,
                  "start": 1787,
                  "end": 1812
                }
              ],
              "start": 1781,
              "end": 1814
            },
            "expression": false,
            "start": 1761,
            "end": 1814
          },
          "definite": false,
          "start": 1714,
          "end": 1814
        }
      ],
      "declare": false,
      "start": 1708,
      "end": 1815
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
            "name": "assignability13",
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1845,
                      "end": 1858
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1859,
                          "end": 1865
                        }
                      ],
                      "start": 1858,
                      "end": 1866
                    },
                    "start": 1845,
                    "end": 1866
                  },
                  "start": 1842,
                  "end": 1866
                },
                "start": 1839,
                "end": 1866
              },
              "start": 1837,
              "end": 1866
            },
            "start": 1822,
            "end": 1866
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1903,
                          "end": 1904
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1906,
                          "end": 1907
                        }
                      ],
                      "start": 1902,
                      "end": 1908
                    },
                    "start": 1895,
                    "end": 1908
                  },
                  "directive": null,
                  "start": 1895,
                  "end": 1909
                }
              ],
              "start": 1889,
              "end": 1911
            },
            "expression": false,
            "start": 1869,
            "end": 1911
          },
          "definite": false,
          "start": 1822,
          "end": 1911
        }
      ],
      "declare": false,
      "start": 1816,
      "end": 1912
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
            "name": "assignability14",
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1942,
                      "end": 1955
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1956,
                          "end": 1962
                        }
                      ],
                      "start": 1955,
                      "end": 1963
                    },
                    "start": 1942,
                    "end": 1963
                  },
                  "start": 1939,
                  "end": 1963
                },
                "start": 1936,
                "end": 1963
              },
              "start": 1934,
              "end": 1963
            },
            "start": 1919,
            "end": 1963
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2000,
                              "end": 2007
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2008,
                              "end": 2015
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2000,
                            "end": 2015
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 2016,
                              "end": 2017
                            }
                          ],
                          "optional": false,
                          "start": 2000,
                          "end": 2018
                        }
                      ],
                      "start": 1999,
                      "end": 2019
                    },
                    "start": 1992,
                    "end": 2019
                  },
                  "directive": null,
                  "start": 1992,
                  "end": 2020
                }
              ],
              "start": 1986,
              "end": 2022
            },
            "expression": false,
            "start": 1966,
            "end": 2022
          },
          "definite": false,
          "start": 1919,
          "end": 2022
        }
      ],
      "declare": false,
      "start": 1913,
      "end": 2023
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
            "name": "assignability15",
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2053,
                      "end": 2066
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2067,
                          "end": 2073
                        }
                      ],
                      "start": 2066,
                      "end": 2074
                    },
                    "start": 2053,
                    "end": 2074
                  },
                  "start": 2050,
                  "end": 2074
                },
                "start": 2047,
                "end": 2074
              },
              "start": 2045,
              "end": 2074
            },
            "start": 2030,
            "end": 2074
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
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
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": true,
                        "async": true,
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
                                "type": "YieldExpression",
                                "delegate": false,
                                "argument": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 2139,
                                  "end": 2140
                                },
                                "start": 2133,
                                "end": 2140
                              },
                              "directive": null,
                              "start": 2133,
                              "end": 2141
                            }
                          ],
                          "start": 2131,
                          "end": 2143
                        },
                        "expression": false,
                        "start": 2111,
                        "end": 2143
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2110,
                      "end": 2146
                    },
                    "start": 2103,
                    "end": 2146
                  },
                  "directive": null,
                  "start": 2103,
                  "end": 2147
                }
              ],
              "start": 2097,
              "end": 2149
            },
            "expression": false,
            "start": 2077,
            "end": 2149
          },
          "definite": false,
          "start": 2030,
          "end": 2149
        }
      ],
      "declare": false,
      "start": 2024,
      "end": 2150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2168,
        "end": 2187
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2191,
            "end": 2212
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2213,
                "end": 2219
              }
            ],
            "start": 2212,
            "end": 2220
          },
          "start": 2191,
          "end": 2220
        },
        "start": 2189,
        "end": 2220
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2233,
                "end": 2234
              },
              "start": 2227,
              "end": 2234
            },
            "directive": null,
            "start": 2227,
            "end": 2235
          }
        ],
        "start": 2221,
        "end": 2237
      },
      "expression": false,
      "start": 2151,
      "end": 2237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2255,
        "end": 2274
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2278,
            "end": 2299
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2300,
                "end": 2306
              }
            ],
            "start": 2299,
            "end": 2307
          },
          "start": 2278,
          "end": 2307
        },
        "start": 2276,
        "end": 2307
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
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
                    "start": 2320,
                    "end": 2327
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2328,
                    "end": 2335
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2320,
                  "end": 2335
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2336,
                    "end": 2337
                  }
                ],
                "optional": false,
                "start": 2320,
                "end": 2338
              },
              "start": 2314,
              "end": 2338
            },
            "directive": null,
            "start": 2314,
            "end": 2339
          }
        ],
        "start": 2308,
        "end": 2341
      },
      "expression": false,
      "start": 2238,
      "end": 2341
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2359,
        "end": 2378
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2382,
            "end": 2403
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2404,
                "end": 2410
              }
            ],
            "start": 2403,
            "end": 2411
          },
          "start": 2382,
          "end": 2411
        },
        "start": 2380,
        "end": 2411
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2426,
                    "end": 2427
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2429,
                    "end": 2430
                  }
                ],
                "start": 2425,
                "end": 2431
              },
              "start": 2418,
              "end": 2431
            },
            "directive": null,
            "start": 2418,
            "end": 2432
          }
        ],
        "start": 2412,
        "end": 2434
      },
      "expression": false,
      "start": 2342,
      "end": 2434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2452,
        "end": 2471
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2475,
            "end": 2496
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2497,
                "end": 2503
              }
            ],
            "start": 2496,
            "end": 2504
          },
          "start": 2475,
          "end": 2504
        },
        "start": 2473,
        "end": 2504
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2519,
                        "end": 2526
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2527,
                        "end": 2534
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2519,
                      "end": 2534
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2535,
                        "end": 2536
                      }
                    ],
                    "optional": false,
                    "start": 2519,
                    "end": 2537
                  }
                ],
                "start": 2518,
                "end": 2538
              },
              "start": 2511,
              "end": 2538
            },
            "directive": null,
            "start": 2511,
            "end": 2539
          }
        ],
        "start": 2505,
        "end": 2541
      },
      "expression": false,
      "start": 2435,
      "end": 2541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2559,
        "end": 2578
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2582,
            "end": 2603
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2604,
                "end": 2610
              }
            ],
            "start": 2603,
            "end": 2611
          },
          "start": 2582,
          "end": 2611
        },
        "start": 2580,
        "end": 2611
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2654,
                            "end": 2655
                          },
                          "start": 2648,
                          "end": 2655
                        },
                        "directive": null,
                        "start": 2648,
                        "end": 2656
                      }
                    ],
                    "start": 2646,
                    "end": 2658
                  },
                  "expression": false,
                  "start": 2626,
                  "end": 2658
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2625,
                "end": 2661
              },
              "start": 2618,
              "end": 2661
            },
            "directive": null,
            "start": 2618,
            "end": 2662
          }
        ],
        "start": 2612,
        "end": 2664
      },
      "expression": false,
      "start": 2542,
      "end": 2664
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2682,
        "end": 2701
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2705,
            "end": 2718
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2719,
                "end": 2725
              }
            ],
            "start": 2718,
            "end": 2726
          },
          "start": 2705,
          "end": 2726
        },
        "start": 2703,
        "end": 2726
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2739,
                "end": 2740
              },
              "start": 2733,
              "end": 2740
            },
            "directive": null,
            "start": 2733,
            "end": 2741
          }
        ],
        "start": 2727,
        "end": 2743
      },
      "expression": false,
      "start": 2665,
      "end": 2743
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2761,
        "end": 2780
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2784,
            "end": 2797
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2798,
                "end": 2804
              }
            ],
            "start": 2797,
            "end": 2805
          },
          "start": 2784,
          "end": 2805
        },
        "start": 2782,
        "end": 2805
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
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
                    "start": 2818,
                    "end": 2825
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2826,
                    "end": 2833
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2818,
                  "end": 2833
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2834,
                    "end": 2835
                  }
                ],
                "optional": false,
                "start": 2818,
                "end": 2836
              },
              "start": 2812,
              "end": 2836
            },
            "directive": null,
            "start": 2812,
            "end": 2837
          }
        ],
        "start": 2806,
        "end": 2839
      },
      "expression": false,
      "start": 2744,
      "end": 2839
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2857,
        "end": 2876
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2880,
            "end": 2893
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2894,
                "end": 2900
              }
            ],
            "start": 2893,
            "end": 2901
          },
          "start": 2880,
          "end": 2901
        },
        "start": 2878,
        "end": 2901
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2916,
                    "end": 2917
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 2919,
                    "end": 2920
                  }
                ],
                "start": 2915,
                "end": 2921
              },
              "start": 2908,
              "end": 2921
            },
            "directive": null,
            "start": 2908,
            "end": 2922
          }
        ],
        "start": 2902,
        "end": 2924
      },
      "expression": false,
      "start": 2840,
      "end": 2924
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2961
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2965,
            "end": 2978
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2979,
                "end": 2985
              }
            ],
            "start": 2978,
            "end": 2986
          },
          "start": 2965,
          "end": 2986
        },
        "start": 2963,
        "end": 2986
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3001,
                        "end": 3008
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3009,
                        "end": 3016
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3001,
                      "end": 3016
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3017,
                        "end": 3018
                      }
                    ],
                    "optional": false,
                    "start": 3001,
                    "end": 3019
                  }
                ],
                "start": 3000,
                "end": 3020
              },
              "start": 2993,
              "end": 3020
            },
            "directive": null,
            "start": 2993,
            "end": 3021
          }
        ],
        "start": 2987,
        "end": 3023
      },
      "expression": false,
      "start": 2925,
      "end": 3023
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType10",
        "optional": false,
        "typeAnnotation": null,
        "start": 3041,
        "end": 3061
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 3065,
            "end": 3078
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3079,
                "end": 3085
              }
            ],
            "start": 3078,
            "end": 3086
          },
          "start": 3065,
          "end": 3086
        },
        "start": 3063,
        "end": 3086
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 3129,
                            "end": 3130
                          },
                          "start": 3123,
                          "end": 3130
                        },
                        "directive": null,
                        "start": 3123,
                        "end": 3131
                      }
                    ],
                    "start": 3121,
                    "end": 3133
                  },
                  "expression": false,
                  "start": 3101,
                  "end": 3133
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3100,
                "end": 3136
              },
              "start": 3093,
              "end": 3136
            },
            "directive": null,
            "start": 3093,
            "end": 3137
          }
        ],
        "start": 3087,
        "end": 3139
      },
      "expression": false,
      "start": 3024,
      "end": 3139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType11",
        "optional": false,
        "typeAnnotation": null,
        "start": 3157,
        "end": 3177
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3181,
            "end": 3194
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3195,
                "end": 3201
              }
            ],
            "start": 3194,
            "end": 3202
          },
          "start": 3181,
          "end": 3202
        },
        "start": 3179,
        "end": 3202
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3215,
                "end": 3216
              },
              "start": 3209,
              "end": 3216
            },
            "directive": null,
            "start": 3209,
            "end": 3217
          }
        ],
        "start": 3203,
        "end": 3219
      },
      "expression": false,
      "start": 3140,
      "end": 3219
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType12",
        "optional": false,
        "typeAnnotation": null,
        "start": 3237,
        "end": 3257
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3261,
            "end": 3274
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3275,
                "end": 3281
              }
            ],
            "start": 3274,
            "end": 3282
          },
          "start": 3261,
          "end": 3282
        },
        "start": 3259,
        "end": 3282
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
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
                    "start": 3295,
                    "end": 3302
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3303,
                    "end": 3310
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3295,
                  "end": 3310
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3311,
                    "end": 3312
                  }
                ],
                "optional": false,
                "start": 3295,
                "end": 3313
              },
              "start": 3289,
              "end": 3313
            },
            "directive": null,
            "start": 3289,
            "end": 3314
          }
        ],
        "start": 3283,
        "end": 3316
      },
      "expression": false,
      "start": 3220,
      "end": 3316
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType13",
        "optional": false,
        "typeAnnotation": null,
        "start": 3334,
        "end": 3354
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3358,
            "end": 3371
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3372,
                "end": 3378
              }
            ],
            "start": 3371,
            "end": 3379
          },
          "start": 3358,
          "end": 3379
        },
        "start": 3356,
        "end": 3379
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3394,
                    "end": 3395
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3397,
                    "end": 3398
                  }
                ],
                "start": 3393,
                "end": 3399
              },
              "start": 3386,
              "end": 3399
            },
            "directive": null,
            "start": 3386,
            "end": 3400
          }
        ],
        "start": 3380,
        "end": 3402
      },
      "expression": false,
      "start": 3317,
      "end": 3402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType14",
        "optional": false,
        "typeAnnotation": null,
        "start": 3420,
        "end": 3440
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3444,
            "end": 3457
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3458,
                "end": 3464
              }
            ],
            "start": 3457,
            "end": 3465
          },
          "start": 3444,
          "end": 3465
        },
        "start": 3442,
        "end": 3465
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3480,
                        "end": 3487
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3488,
                        "end": 3495
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3480,
                      "end": 3495
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3496,
                        "end": 3497
                      }
                    ],
                    "optional": false,
                    "start": 3480,
                    "end": 3498
                  }
                ],
                "start": 3479,
                "end": 3499
              },
              "start": 3472,
              "end": 3499
            },
            "directive": null,
            "start": 3472,
            "end": 3500
          }
        ],
        "start": 3466,
        "end": 3502
      },
      "expression": false,
      "start": 3403,
      "end": 3502
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType15",
        "optional": false,
        "typeAnnotation": null,
        "start": 3520,
        "end": 3540
      },
      "generator": true,
      "async": true,
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
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 3544,
            "end": 3557
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 3558,
                "end": 3564
              }
            ],
            "start": 3557,
            "end": 3565
          },
          "start": 3544,
          "end": 3565
        },
        "start": 3542,
        "end": 3565
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
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
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 3608,
                            "end": 3609
                          },
                          "start": 3602,
                          "end": 3609
                        },
                        "directive": null,
                        "start": 3602,
                        "end": 3610
                      }
                    ],
                    "start": 3600,
                    "end": 3612
                  },
                  "expression": false,
                  "start": 3580,
                  "end": 3612
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3579,
                "end": 3615
              },
              "start": 3572,
              "end": 3615
            },
            "directive": null,
            "start": 3572,
            "end": 3616
          }
        ],
        "start": 3566,
        "end": 3618
      },
      "expression": false,
      "start": 3503,
      "end": 3618
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType16",
        "optional": false,
        "typeAnnotation": null,
        "start": 3636,
        "end": 3656
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 3660,
          "end": 3662
        },
        "start": 3658,
        "end": 3662
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3675,
                "end": 3676
              },
              "start": 3669,
              "end": 3676
            },
            "directive": null,
            "start": 3669,
            "end": 3677
          }
        ],
        "start": 3663,
        "end": 3679
      },
      "expression": false,
      "start": 3619,
      "end": 3679
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "awaitedType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3697,
        "end": 3709
      },
      "generator": true,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3724,
                  "end": 3725
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3734,
                    "end": 3735
                  },
                  "start": 3728,
                  "end": 3735
                },
                "definite": false,
                "start": 3724,
                "end": 3735
              }
            ],
            "declare": false,
            "start": 3718,
            "end": 3736
          }
        ],
        "start": 3712,
        "end": 3738
      },
      "expression": false,
      "start": 3680,
      "end": 3738
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "awaitedType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3756,
        "end": 3768
      },
      "generator": true,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3783,
                  "end": 3784
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
                        "start": 3793,
                        "end": 3800
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3801,
                        "end": 3808
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3793,
                      "end": 3808
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3809,
                        "end": 3810
                      }
                    ],
                    "optional": false,
                    "start": 3793,
                    "end": 3811
                  },
                  "start": 3787,
                  "end": 3811
                },
                "definite": false,
                "start": 3783,
                "end": 3811
              }
            ],
            "declare": false,
            "start": 3777,
            "end": 3812
          }
        ],
        "start": 3771,
        "end": 3814
      },
      "expression": false,
      "start": 3739,
      "end": 3814
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nextType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3832,
        "end": 3841
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 3847,
                "end": 3851
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
                    "start": 3855,
                    "end": 3859
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [],
                          "start": 3861,
                          "end": 3863
                        },
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 3867,
                                  "end": 3873
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "PromiseLike",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3876,
                                    "end": 3887
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSNumberKeyword",
                                        "start": 3888,
                                        "end": 3894
                                      }
                                    ],
                                    "start": 3887,
                                    "end": 3895
                                  },
                                  "start": 3876,
                                  "end": 3895
                                }
                              ],
                              "start": 3867,
                              "end": 3895
                            }
                          ],
                          "start": 3866,
                          "end": 3896
                        }
                      ],
                      "start": 3861,
                      "end": 3896
                    },
                    "start": 3859,
                    "end": 3896
                  },
                  "value": null,
                  "start": 3852,
                  "end": 3896
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3899,
                  "end": 3902
                },
                "start": 3897,
                "end": 3902
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3847,
              "end": 3902
            }
          ],
          "start": 3845,
          "end": 3904
        },
        "start": 3843,
        "end": 3904
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3917,
                  "end": 3918
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 3921,
                  "end": 3926
                },
                "definite": false,
                "start": 3917,
                "end": 3926
              }
            ],
            "declare": false,
            "start": 3911,
            "end": 3927
          }
        ],
        "start": 3905,
        "end": 3988
      },
      "expression": false,
      "start": 3815,
      "end": 3988
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3988
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "inferReturnType1",
    "start": 17,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 40,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "inferReturnType2",
    "start": 57,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 91,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "inferReturnType3",
    "start": 108,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 133,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 144,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 150,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "inferReturnType4",
    "start": 161,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
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
    "value": "yield",
    "start": 186,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 214,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 220,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "inferReturnType5",
    "start": 231,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 256,
    "end": 261
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 269,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 297,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 303,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "inferReturnType6",
    "start": 314,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 346,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 356,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "inferReturnType7",
    "start": 373,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 398,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 406,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 414,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 429,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 435,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "inferReturnType8",
    "start": 446,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 479,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 485,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 501,
    "end": 506
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
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
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 518,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "assignability1",
    "start": 524,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
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
    "value": "=>",
    "start": 543,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 546,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 568,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 578,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 604,
    "end": 609
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 616,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "assignability2",
    "start": 622,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 641,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 644,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 666,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 676,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 682,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 702,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 708,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 716,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 731,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "assignability3",
    "start": 737,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 756,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 759,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 791,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 797,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 817,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 824,
    "end": 825
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 826,
    "end": 827
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 835,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "assignability4",
    "start": 841,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 860,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 863,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 885,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 895,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 901,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 921,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 937,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 953,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "assignability5",
    "start": 959,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
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
    "value": "AsyncIterableIterator",
    "start": 981,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1013,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1019,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1047,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1053,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1069,
    "end": 1074
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
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
    "value": ";",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1087,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "assignability6",
    "start": 1093,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1115,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1139,
    "end": 1144
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1145,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1154,
    "end": 1155
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
    "value": "{",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1165,
    "end": 1170
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1177,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "assignability7",
    "start": 1183,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1202,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1205,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1219,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1229,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1235,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
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
    "value": "yield",
    "start": 1255,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1261,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1269,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1284,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "assignability8",
    "start": 1290,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1312,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1326,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1336,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1342,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1351,
    "end": 1352
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
    "value": "{",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1380,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "assignability9",
    "start": 1386,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1405,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1408,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1422,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1432,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1438,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1458,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1466,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1474,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1490,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "assignability10",
    "start": 1496,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1516,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1519,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1533,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1543,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1549,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1569,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1577,
    "end": 1582
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1583,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1599,
    "end": 1604
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "const",
    "start": 1617,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "assignability11",
    "start": 1623,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1643,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1646,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1660,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1670,
    "end": 1675
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1676,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1696,
    "end": 1701
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1702,
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
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1708,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "assignability12",
    "start": 1714,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1734,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1737,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1751,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1761,
    "end": 1766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1778,
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
    "value": "yield",
    "start": 1787,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1793,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1801,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1816,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "assignability13",
    "start": 1822,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1842,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1845,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1859,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1869,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1875,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1895,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1913,
    "end": 1918
  },
  {
    "type": "Identifier",
    "value": "assignability14",
    "start": 1919,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1939,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1942,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1956,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1966,
    "end": 1971
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1972,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1992,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2000,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2008,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2024,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "assignability15",
    "start": 2030,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2050,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 2053,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2067,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2073,
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
    "value": "async",
    "start": 2077,
    "end": 2082
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2083,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2103,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2111,
    "end": 2116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2117,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2133,
    "end": 2138
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2151,
    "end": 2156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2157,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType1",
    "start": 2168,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2191,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2213,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2227,
    "end": 2232
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2238,
    "end": 2243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2244,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType2",
    "start": 2255,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2278,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2300,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2314,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2320,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2328,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2342,
    "end": 2347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2348,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType3",
    "start": 2359,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2382,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2404,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2418,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2435,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2441,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType4",
    "start": 2452,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2475,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2497,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2511,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2519,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2527,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2542,
    "end": 2547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2548,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType5",
    "start": 2559,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 2582,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2604,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2618,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2626,
    "end": 2631
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2632,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2648,
    "end": 2653
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2665,
    "end": 2670
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2671,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType6",
    "start": 2682,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2705,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2719,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2733,
    "end": 2738
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2744,
    "end": 2749
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2750,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType7",
    "start": 2761,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2784,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2798,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "yield",
    "start": 2812,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2818,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 2826,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2834,
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
    "type": "Identifier",
    "value": "async",
    "start": 2840,
    "end": 2845
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2846,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType8",
    "start": 2857,
    "end": 2876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2880,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2894,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2908,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2925,
    "end": 2930
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2931,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType9",
    "start": 2942,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 2965,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2979,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2993,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3001,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3009,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3024,
    "end": 3029
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3030,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType10",
    "start": 3041,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 3065,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3079,
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
    "value": "yield",
    "start": 3093,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3101,
    "end": 3106
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3107,
    "end": 3115
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3123,
    "end": 3128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3140,
    "end": 3145
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3146,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType11",
    "start": 3157,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3181,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3195,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3209,
    "end": 3214
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3220,
    "end": 3225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3226,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType12",
    "start": 3237,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3261,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3274,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3275,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3289,
    "end": 3294
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3295,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3303,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3317,
    "end": 3322
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3323,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType13",
    "start": 3334,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3358,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3372,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3386,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3403,
    "end": 3408
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3409,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType14",
    "start": 3420,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 3444,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3458,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3472,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3480,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3488,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3503,
    "end": 3508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3509,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType15",
    "start": 3520,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "AsyncIterator",
    "start": 3544,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3558,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3572,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3580,
    "end": 3585
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3586,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3602,
    "end": 3607
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3619,
    "end": 3624
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3625,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType16",
    "start": 3636,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3669,
    "end": 3674
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3680,
    "end": 3685
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3686,
    "end": 3694
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "awaitedType1",
    "start": 3697,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3718,
    "end": 3723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 3728,
    "end": 3733
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3739,
    "end": 3744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3745,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "awaitedType2",
    "start": 3756,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3777,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 3787,
    "end": 3792
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3793,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3800,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3801,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3808,
    "end": 3809
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3815,
    "end": 3820
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3821,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Identifier",
    "value": "nextType1",
    "start": 3832,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3847,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3851,
    "end": 3852
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3852,
    "end": 3855
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3855,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3866,
    "end": 3867
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3867,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 3876,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3888,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3899,
    "end": 3902
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3911,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 3921,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3987,
    "end": 3988
  }
]
```
