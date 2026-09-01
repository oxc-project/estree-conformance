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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": true,
              "argument": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 49,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "directive": null,
            "start": 42,
            "end": 52
          }
        ],
        "start": 36,
        "end": 54
      },
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 88
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inferReturnType2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 120
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 104,
                "end": 122
              },
              "start": 97,
              "end": 122
            },
            "directive": null,
            "start": 97,
            "end": 123
          }
        ],
        "start": 91,
        "end": 125
      },
      "expression": false,
      "start": 55,
      "end": 125
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inferReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 159
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 182
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolve",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 190
                  },
                  "optional": false,
                  "computed": false,
                  "start": 175,
                  "end": 190
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 192,
                        "end": 193
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 195,
                        "end": 196
                      }
                    ],
                    "start": 191,
                    "end": 197
                  }
                ],
                "optional": false,
                "start": 175,
                "end": 198
              },
              "start": 168,
              "end": 198
            },
            "directive": null,
            "start": 168,
            "end": 199
          }
        ],
        "start": 162,
        "end": 201
      },
      "expression": false,
      "start": 126,
      "end": 201
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
                      "start": 230,
                      "end": 251
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 252,
                          "end": 258
                        }
                      ],
                      "start": 251,
                      "end": 259
                    },
                    "start": 230,
                    "end": 259
                  },
                  "start": 227,
                  "end": 259
                },
                "start": 224,
                "end": 259
              },
              "start": 222,
              "end": 259
            },
            "start": 208,
            "end": 259
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
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 294,
                      "end": 297
                    },
                    "start": 288,
                    "end": 297
                  },
                  "directive": null,
                  "start": 288,
                  "end": 298
                }
              ],
              "start": 282,
              "end": 300
            },
            "expression": false,
            "start": 262,
            "end": 300
          },
          "definite": false,
          "start": 208,
          "end": 300
        }
      ],
      "declare": false,
      "start": 202,
      "end": 301
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
                      "start": 330,
                      "end": 351
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 352,
                          "end": 358
                        }
                      ],
                      "start": 351,
                      "end": 359
                    },
                    "start": 330,
                    "end": 359
                  },
                  "start": 327,
                  "end": 359
                },
                "start": 324,
                "end": 359
              },
              "start": 322,
              "end": 359
            },
            "start": 308,
            "end": 359
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
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 396,
                          "end": 399
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 401,
                          "end": 404
                        }
                      ],
                      "start": 395,
                      "end": 405
                    },
                    "start": 388,
                    "end": 405
                  },
                  "directive": null,
                  "start": 388,
                  "end": 406
                }
              ],
              "start": 382,
              "end": 408
            },
            "expression": false,
            "start": 362,
            "end": 408
          },
          "definite": false,
          "start": 308,
          "end": 408
        }
      ],
      "declare": false,
      "start": 302,
      "end": 409
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
                      "start": 438,
                      "end": 459
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 460,
                          "end": 466
                        }
                      ],
                      "start": 459,
                      "end": 467
                    },
                    "start": 438,
                    "end": 467
                  },
                  "start": 435,
                  "end": 467
                },
                "start": 432,
                "end": 467
              },
              "start": 430,
              "end": 467
            },
            "start": 416,
            "end": 467
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
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 532,
                                  "end": 535
                                },
                                "start": 526,
                                "end": 535
                              },
                              "directive": null,
                              "start": 526,
                              "end": 536
                            }
                          ],
                          "start": 524,
                          "end": 538
                        },
                        "expression": false,
                        "start": 504,
                        "end": 538
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 503,
                      "end": 541
                    },
                    "start": 496,
                    "end": 541
                  },
                  "directive": null,
                  "start": 496,
                  "end": 542
                }
              ],
              "start": 490,
              "end": 544
            },
            "expression": false,
            "start": 470,
            "end": 544
          },
          "definite": false,
          "start": 416,
          "end": 544
        }
      ],
      "declare": false,
      "start": 410,
      "end": 545
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 574,
                      "end": 587
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 588,
                          "end": 594
                        }
                      ],
                      "start": 587,
                      "end": 595
                    },
                    "start": 574,
                    "end": 595
                  },
                  "start": 571,
                  "end": 595
                },
                "start": 568,
                "end": 595
              },
              "start": 566,
              "end": 595
            },
            "start": 552,
            "end": 595
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
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 630,
                      "end": 633
                    },
                    "start": 624,
                    "end": 633
                  },
                  "directive": null,
                  "start": 624,
                  "end": 634
                }
              ],
              "start": 618,
              "end": 636
            },
            "expression": false,
            "start": 598,
            "end": 636
          },
          "definite": false,
          "start": 552,
          "end": 636
        }
      ],
      "declare": false,
      "start": 546,
      "end": 637
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
                      "name": "AsyncIterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 666,
                      "end": 679
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 680,
                          "end": 686
                        }
                      ],
                      "start": 679,
                      "end": 687
                    },
                    "start": 666,
                    "end": 687
                  },
                  "start": 663,
                  "end": 687
                },
                "start": 660,
                "end": 687
              },
              "start": 658,
              "end": 687
            },
            "start": 644,
            "end": 687
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
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 724,
                          "end": 727
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 729,
                          "end": 732
                        }
                      ],
                      "start": 723,
                      "end": 733
                    },
                    "start": 716,
                    "end": 733
                  },
                  "directive": null,
                  "start": 716,
                  "end": 734
                }
              ],
              "start": 710,
              "end": 736
            },
            "expression": false,
            "start": 690,
            "end": 736
          },
          "definite": false,
          "start": 644,
          "end": 736
        }
      ],
      "declare": false,
      "start": 638,
      "end": 737
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
                      "start": 766,
                      "end": 779
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 780,
                          "end": 786
                        }
                      ],
                      "start": 779,
                      "end": 787
                    },
                    "start": 766,
                    "end": 787
                  },
                  "start": 763,
                  "end": 787
                },
                "start": 760,
                "end": 787
              },
              "start": 758,
              "end": 787
            },
            "start": 744,
            "end": 787
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
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 852,
                                  "end": 855
                                },
                                "start": 846,
                                "end": 855
                              },
                              "directive": null,
                              "start": 846,
                              "end": 856
                            }
                          ],
                          "start": 844,
                          "end": 858
                        },
                        "expression": false,
                        "start": 824,
                        "end": 858
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 823,
                      "end": 861
                    },
                    "start": 816,
                    "end": 861
                  },
                  "directive": null,
                  "start": 816,
                  "end": 862
                }
              ],
              "start": 810,
              "end": 864
            },
            "expression": false,
            "start": 790,
            "end": 864
          },
          "definite": false,
          "start": 744,
          "end": 864
        }
      ],
      "declare": false,
      "start": 738,
      "end": 865
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 894,
                      "end": 907
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 908,
                          "end": 914
                        }
                      ],
                      "start": 907,
                      "end": 915
                    },
                    "start": 894,
                    "end": 915
                  },
                  "start": 891,
                  "end": 915
                },
                "start": 888,
                "end": 915
              },
              "start": 886,
              "end": 915
            },
            "start": 872,
            "end": 915
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
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 950,
                      "end": 953
                    },
                    "start": 944,
                    "end": 953
                  },
                  "directive": null,
                  "start": 944,
                  "end": 954
                }
              ],
              "start": 938,
              "end": 956
            },
            "expression": false,
            "start": 918,
            "end": 956
          },
          "definite": false,
          "start": 872,
          "end": 956
        }
      ],
      "declare": false,
      "start": 866,
      "end": 957
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 999
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1000,
                          "end": 1006
                        }
                      ],
                      "start": 999,
                      "end": 1007
                    },
                    "start": 986,
                    "end": 1007
                  },
                  "start": 983,
                  "end": 1007
                },
                "start": 980,
                "end": 1007
              },
              "start": 978,
              "end": 1007
            },
            "start": 964,
            "end": 1007
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
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 1044,
                          "end": 1047
                        },
                        {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 1049,
                          "end": 1052
                        }
                      ],
                      "start": 1043,
                      "end": 1053
                    },
                    "start": 1036,
                    "end": 1053
                  },
                  "directive": null,
                  "start": 1036,
                  "end": 1054
                }
              ],
              "start": 1030,
              "end": 1056
            },
            "expression": false,
            "start": 1010,
            "end": 1056
          },
          "definite": false,
          "start": 964,
          "end": 1056
        }
      ],
      "declare": false,
      "start": 958,
      "end": 1057
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
                      "name": "AsyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1086,
                      "end": 1099
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1100,
                          "end": 1106
                        }
                      ],
                      "start": 1099,
                      "end": 1107
                    },
                    "start": 1086,
                    "end": 1107
                  },
                  "start": 1083,
                  "end": 1107
                },
                "start": 1080,
                "end": 1107
              },
              "start": 1078,
              "end": 1107
            },
            "start": 1064,
            "end": 1107
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
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 1172,
                                  "end": 1175
                                },
                                "start": 1166,
                                "end": 1175
                              },
                              "directive": null,
                              "start": 1166,
                              "end": 1176
                            }
                          ],
                          "start": 1164,
                          "end": 1178
                        },
                        "expression": false,
                        "start": 1144,
                        "end": 1178
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1143,
                      "end": 1181
                    },
                    "start": 1136,
                    "end": 1181
                  },
                  "directive": null,
                  "start": 1136,
                  "end": 1182
                }
              ],
              "start": 1130,
              "end": 1184
            },
            "expression": false,
            "start": 1110,
            "end": 1184
          },
          "definite": false,
          "start": 1064,
          "end": 1184
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1203,
        "end": 1222
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
            "start": 1226,
            "end": 1247
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1248,
                "end": 1254
              }
            ],
            "start": 1247,
            "end": 1255
          },
          "start": 1226,
          "end": 1255
        },
        "start": 1224,
        "end": 1255
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
                "value": "a",
                "raw": "\"a\"",
                "start": 1268,
                "end": 1271
              },
              "start": 1262,
              "end": 1271
            },
            "directive": null,
            "start": 1262,
            "end": 1272
          }
        ],
        "start": 1256,
        "end": 1274
      },
      "expression": false,
      "start": 1186,
      "end": 1274
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1311
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
            "start": 1315,
            "end": 1336
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1337,
                "end": 1343
              }
            ],
            "start": 1336,
            "end": 1344
          },
          "start": 1315,
          "end": 1344
        },
        "start": 1313,
        "end": 1344
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
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1359,
                    "end": 1362
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 1364,
                    "end": 1367
                  }
                ],
                "start": 1358,
                "end": 1368
              },
              "start": 1351,
              "end": 1368
            },
            "directive": null,
            "start": 1351,
            "end": 1369
          }
        ],
        "start": 1345,
        "end": 1371
      },
      "expression": false,
      "start": 1275,
      "end": 1371
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1389,
        "end": 1408
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
            "start": 1412,
            "end": 1433
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1434,
                "end": 1440
              }
            ],
            "start": 1433,
            "end": 1441
          },
          "start": 1412,
          "end": 1441
        },
        "start": 1410,
        "end": 1441
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1484,
                            "end": 1487
                          },
                          "start": 1478,
                          "end": 1487
                        },
                        "directive": null,
                        "start": 1478,
                        "end": 1488
                      }
                    ],
                    "start": 1476,
                    "end": 1490
                  },
                  "expression": false,
                  "start": 1456,
                  "end": 1490
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1455,
                "end": 1493
              },
              "start": 1448,
              "end": 1493
            },
            "directive": null,
            "start": 1448,
            "end": 1494
          }
        ],
        "start": 1442,
        "end": 1496
      },
      "expression": false,
      "start": 1372,
      "end": 1496
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1514,
        "end": 1533
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
            "start": 1537,
            "end": 1550
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1551,
                "end": 1557
              }
            ],
            "start": 1550,
            "end": 1558
          },
          "start": 1537,
          "end": 1558
        },
        "start": 1535,
        "end": 1558
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
                "value": "a",
                "raw": "\"a\"",
                "start": 1571,
                "end": 1574
              },
              "start": 1565,
              "end": 1574
            },
            "directive": null,
            "start": 1565,
            "end": 1575
          }
        ],
        "start": 1559,
        "end": 1577
      },
      "expression": false,
      "start": 1497,
      "end": 1577
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1595,
        "end": 1614
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
            "start": 1618,
            "end": 1631
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1632,
                "end": 1638
              }
            ],
            "start": 1631,
            "end": 1639
          },
          "start": 1618,
          "end": 1639
        },
        "start": 1616,
        "end": 1639
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
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1654,
                    "end": 1657
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 1659,
                    "end": 1662
                  }
                ],
                "start": 1653,
                "end": 1663
              },
              "start": 1646,
              "end": 1663
            },
            "directive": null,
            "start": 1646,
            "end": 1664
          }
        ],
        "start": 1640,
        "end": 1666
      },
      "expression": false,
      "start": 1578,
      "end": 1666
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1684,
        "end": 1703
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
            "start": 1707,
            "end": 1720
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1721,
                "end": 1727
              }
            ],
            "start": 1720,
            "end": 1728
          },
          "start": 1707,
          "end": 1728
        },
        "start": 1705,
        "end": 1728
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 1771,
                            "end": 1774
                          },
                          "start": 1765,
                          "end": 1774
                        },
                        "directive": null,
                        "start": 1765,
                        "end": 1775
                      }
                    ],
                    "start": 1763,
                    "end": 1777
                  },
                  "expression": false,
                  "start": 1743,
                  "end": 1777
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1742,
                "end": 1780
              },
              "start": 1735,
              "end": 1780
            },
            "directive": null,
            "start": 1735,
            "end": 1781
          }
        ],
        "start": 1729,
        "end": 1783
      },
      "expression": false,
      "start": 1667,
      "end": 1783
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1801,
        "end": 1820
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
            "start": 1824,
            "end": 1837
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1838,
                "end": 1844
              }
            ],
            "start": 1837,
            "end": 1845
          },
          "start": 1824,
          "end": 1845
        },
        "start": 1822,
        "end": 1845
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
                "value": "a",
                "raw": "\"a\"",
                "start": 1858,
                "end": 1861
              },
              "start": 1852,
              "end": 1861
            },
            "directive": null,
            "start": 1852,
            "end": 1862
          }
        ],
        "start": 1846,
        "end": 1864
      },
      "expression": false,
      "start": 1784,
      "end": 1864
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1882,
        "end": 1901
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
            "start": 1905,
            "end": 1918
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1919,
                "end": 1925
              }
            ],
            "start": 1918,
            "end": 1926
          },
          "start": 1905,
          "end": 1926
        },
        "start": 1903,
        "end": 1926
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
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 1941,
                    "end": 1944
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 1946,
                    "end": 1949
                  }
                ],
                "start": 1940,
                "end": 1950
              },
              "start": 1933,
              "end": 1950
            },
            "directive": null,
            "start": 1933,
            "end": 1951
          }
        ],
        "start": 1927,
        "end": 1953
      },
      "expression": false,
      "start": 1865,
      "end": 1953
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1971,
        "end": 1990
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
            "start": 1994,
            "end": 2007
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2008,
                "end": 2014
              }
            ],
            "start": 2007,
            "end": 2015
          },
          "start": 1994,
          "end": 2015
        },
        "start": 1992,
        "end": 2015
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
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 2058,
                            "end": 2061
                          },
                          "start": 2052,
                          "end": 2061
                        },
                        "directive": null,
                        "start": 2052,
                        "end": 2062
                      }
                    ],
                    "start": 2050,
                    "end": 2064
                  },
                  "expression": false,
                  "start": 2030,
                  "end": 2064
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 2029,
                "end": 2067
              },
              "start": 2022,
              "end": 2067
            },
            "directive": null,
            "start": 2022,
            "end": 2068
          }
        ],
        "start": 2016,
        "end": 2070
      },
      "expression": false,
      "start": 1954,
      "end": 2070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2088,
        "end": 2108
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
            "name": "IterableIterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2112,
            "end": 2128
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2129,
                "end": 2135
              }
            ],
            "start": 2128,
            "end": 2136
          },
          "start": 2112,
          "end": 2136
        },
        "start": 2110,
        "end": 2136
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
                "start": 2149,
                "end": 2150
              },
              "start": 2143,
              "end": 2150
            },
            "directive": null,
            "start": 2143,
            "end": 2151
          }
        ],
        "start": 2137,
        "end": 2153
      },
      "expression": false,
      "start": 2071,
      "end": 2153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2171,
        "end": 2191
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
            "name": "Iterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 2195,
            "end": 2203
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2204,
                "end": 2210
              }
            ],
            "start": 2203,
            "end": 2211
          },
          "start": 2195,
          "end": 2211
        },
        "start": 2193,
        "end": 2211
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
                "start": 2224,
                "end": 2225
              },
              "start": 2218,
              "end": 2225
            },
            "directive": null,
            "start": 2218,
            "end": 2226
          }
        ],
        "start": 2212,
        "end": 2228
      },
      "expression": false,
      "start": 2154,
      "end": 2228
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitReturnType12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2246,
        "end": 2266
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
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2270,
            "end": 2278
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2279,
                "end": 2285
              }
            ],
            "start": 2278,
            "end": 2286
          },
          "start": 2270,
          "end": 2286
        },
        "start": 2268,
        "end": 2286
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
                "start": 2299,
                "end": 2300
              },
              "start": 2293,
              "end": 2300
            },
            "directive": null,
            "start": 2293,
            "end": 2301
          }
        ],
        "start": 2287,
        "end": 2303
      },
      "expression": false,
      "start": 2229,
      "end": 2303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "yieldStar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2321,
        "end": 2330
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
                "type": "ObjectExpression",
                "properties": [],
                "start": 2346,
                "end": 2348
              },
              "start": 2339,
              "end": 2348
            },
            "directive": null,
            "start": 2339,
            "end": 2349
          }
        ],
        "start": 2333,
        "end": 2351
      },
      "expression": false,
      "start": 2304,
      "end": 2351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2351
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
    "type": "Keyword",
    "value": "yield",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 55,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "inferReturnType2",
    "start": 72,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "inferReturnType2",
    "start": 104,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 126,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 132,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "inferReturnType3",
    "start": 143,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "assignability1",
    "start": 208,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 230,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 262,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 288,
    "end": 293
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "assignability2",
    "start": 308,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 327,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 330,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 352,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 362,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 388,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 410,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "assignability3",
    "start": 416,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 435,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 438,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 470,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 476,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 504,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 510,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 526,
    "end": 531
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 546,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "assignability4",
    "start": 552,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 571,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 574,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 598,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 604,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 624,
    "end": 629
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 630,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 638,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "assignability5",
    "start": 644,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 663,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 666,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 686,
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
    "value": "async",
    "start": 690,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 696,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 716,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 723,
    "end": 724
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 724,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "String",
    "value": "\"b\"",
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
    "value": ";",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 738,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "assignability6",
    "start": 744,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 763,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 766,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 780,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 786,
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
    "value": "async",
    "start": 790,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 796,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 824,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 830,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 846,
    "end": 851
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 852,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
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
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 866,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "assignability7",
    "start": 872,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 891,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 894,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 918,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 924,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 944,
    "end": 949
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 958,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "assignability8",
    "start": 964,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 983,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 986,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1000,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1010,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1025,
    "end": 1026
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
    "value": "{",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1052,
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
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "assignability9",
    "start": 1064,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079
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
    "value": "=>",
    "start": 1083,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1086,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1100,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1116,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1127,
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
    "value": "{",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1136,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1144,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1150,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1166,
    "end": 1171
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1192,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType1",
    "start": 1203,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 1226,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "yield",
    "start": 1262,
    "end": 1267
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1275,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1281,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType2",
    "start": 1292,
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
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 1315,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1337,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1351,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1364,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1372,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1378,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType3",
    "start": 1389,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "AsyncIterableIterator",
    "start": 1412,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1434,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1448,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1456,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1462,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1478,
    "end": 1483
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1484,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1489,
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
    "value": "(",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1497,
    "end": 1502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1503,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType4",
    "start": 1514,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1537,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1551,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1565,
    "end": 1570
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1571,
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
    "type": "Identifier",
    "value": "async",
    "start": 1578,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1584,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType5",
    "start": 1595,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1618,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1646,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1667,
    "end": 1672
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1673,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType6",
    "start": 1684,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 1707,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "yield",
    "start": 1735,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1743,
    "end": 1748
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1749,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1758,
    "end": 1759
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
    "value": "{",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1765,
    "end": 1770
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1771,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1777,
    "end": 1778
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
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1784,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1790,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType7",
    "start": 1801,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1824,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1838,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1852,
    "end": 1857
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1858,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1865,
    "end": 1870
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1871,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType8",
    "start": 1882,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "AsyncIterator",
    "start": 1905,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1919,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1933,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1946,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1954,
    "end": 1959
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1960,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType9",
    "start": 1971,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 1994,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2008,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "yield",
    "start": 2022,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2030,
    "end": 2035
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2036,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "*",
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
    "value": "{",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2052,
    "end": 2057
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2058,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2071,
    "end": 2076
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2077,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType10",
    "start": 2088,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 2112,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2129,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2143,
    "end": 2148
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2154,
    "end": 2159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2160,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType11",
    "start": 2171,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 2195,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2204,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2218,
    "end": 2223
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2229,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2235,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "explicitReturnType12",
    "start": 2246,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2266,
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
    "value": ":",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 2270,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2279,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2293,
    "end": 2298
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2304,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2310,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "yieldStar",
    "start": 2321,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2339,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2350,
    "end": 2351
  }
]
```
