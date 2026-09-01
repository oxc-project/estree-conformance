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
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 30
              },
              "optional": false,
              "computed": false,
              "start": 17,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 32,
                    "end": 33
                  },
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 35,
                    "end": 36
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 38,
                    "end": 39
                  }
                ],
                "start": 31,
                "end": 40
              }
            ],
            "optional": false,
            "start": 17,
            "end": 41
          },
          "definite": false,
          "start": 6,
          "end": 41
        }
      ],
      "declare": false,
      "start": 0,
      "end": 42
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
            "name": "mapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 56
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 59,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 78
              }
            ],
            "optional": false,
            "start": 59,
            "end": 79
          },
          "definite": false,
          "start": 50,
          "end": 79
        }
      ],
      "declare": false,
      "start": 44,
      "end": 80
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
            "name": "filtered",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 96
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 114
              },
              "optional": false,
              "computed": false,
              "start": 99,
              "end": 114
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
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
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
                    "start": 120,
                    "end": 121
                  },
                  "operator": ">",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 124,
                    "end": 125
                  },
                  "start": 120,
                  "end": 125
                },
                "id": null,
                "generator": false,
                "start": 115,
                "end": 125
              }
            ],
            "optional": false,
            "start": 99,
            "end": 126
          },
          "definite": false,
          "start": 88,
          "end": 126
        }
      ],
      "declare": false,
      "start": 82,
      "end": 127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isZero",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 144
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
              "start": 148,
              "end": 154
            },
            "start": 146,
            "end": 154
          },
          "start": 145,
          "end": 154
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 162,
                "end": 163
              },
              "start": 162,
              "end": 163
            },
            "start": 162,
            "end": 163
          },
          "start": 157,
          "end": 163
        },
        "start": 155,
        "end": 163
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 181,
                "end": 182
              },
              "start": 175,
              "end": 182
            },
            "start": 168,
            "end": 183
          }
        ],
        "start": 164,
        "end": 185
      },
      "expression": false,
      "start": 129,
      "end": 185
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
            "name": "zero",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 196
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 207
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 214
              },
              "optional": false,
              "computed": false,
              "start": 199,
              "end": 214
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isZero",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 221
              }
            ],
            "optional": false,
            "start": 199,
            "end": 222
          },
          "definite": false,
          "start": 192,
          "end": 222
        }
      ],
      "declare": false,
      "start": 186,
      "end": 223
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
            "name": "iteratorFromBare",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 247
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 258
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 263
              },
              "optional": false,
              "computed": false,
              "start": 250,
              "end": 263
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 272
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
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 296,
                                    "end": 300
                                  },
                                  "value": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Math",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 302,
                                          "end": 306
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "random",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 307,
                                          "end": 313
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 302,
                                        "end": 313
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 302,
                                      "end": 315
                                    },
                                    "operator": "<",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0.5,
                                      "raw": ".5",
                                      "start": 318,
                                      "end": 320
                                    },
                                    "start": 302,
                                    "end": 320
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 296,
                                  "end": 320
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 328,
                                    "end": 333
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "a string",
                                    "raw": "\"a string\"",
                                    "start": 335,
                                    "end": 345
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 328,
                                  "end": 345
                                }
                              ],
                              "start": 288,
                              "end": 352
                            },
                            "start": 281,
                            "end": 353
                          }
                        ],
                        "start": 275,
                        "end": 357
                      },
                      "expression": false,
                      "start": 272,
                      "end": 357
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 268,
                    "end": 357
                  }
                ],
                "start": 264,
                "end": 360
              }
            ],
            "optional": false,
            "start": 250,
            "end": 361
          },
          "definite": false,
          "start": 231,
          "end": 361
        }
      ],
      "declare": false,
      "start": 225,
      "end": 362
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 378
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 391,
                "end": 392
              },
              "start": 385,
              "end": 392
            },
            "directive": null,
            "start": 385,
            "end": 393
          }
        ],
        "start": 381,
        "end": 395
      },
      "expression": false,
      "start": 365,
      "end": 395
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
            "name": "mappedGen",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 412
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "gen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 418
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 415,
                "end": 420
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 424
              },
              "optional": false,
              "computed": false,
              "start": 415,
              "end": 424
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
                    "typeAnnotation": null,
                    "start": 425,
                    "end": 426
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 431
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 436,
                      "end": 437
                    },
                    "start": 430,
                    "end": 437
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "zero",
                    "raw": "\"zero\"",
                    "start": 440,
                    "end": 446
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "other",
                    "raw": "\"other\"",
                    "start": 449,
                    "end": 456
                  },
                  "start": 430,
                  "end": 456
                },
                "id": null,
                "generator": false,
                "start": 425,
                "end": 456
              }
            ],
            "optional": false,
            "start": 415,
            "end": 457
          },
          "definite": false,
          "start": 403,
          "end": 457
        }
      ],
      "declare": false,
      "start": 397,
      "end": 458
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
            "name": "mappedValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 478
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 482,
                        "end": 483
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 485,
                        "end": 486
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 488,
                        "end": 489
                      }
                    ],
                    "start": 481,
                    "end": 490
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 497
                  },
                  "optional": false,
                  "computed": false,
                  "start": 481,
                  "end": 497
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 481,
                "end": 499
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 503
              },
              "optional": false,
              "computed": false,
              "start": 481,
              "end": 503
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
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 505
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 510
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 515,
                      "end": 516
                    },
                    "start": 509,
                    "end": 516
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "zero",
                    "raw": "\"zero\"",
                    "start": 519,
                    "end": 525
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "other",
                    "raw": "\"other\"",
                    "start": 528,
                    "end": 535
                  },
                  "start": 509,
                  "end": 535
                },
                "id": null,
                "generator": false,
                "start": 504,
                "end": 535
              }
            ],
            "optional": false,
            "start": 481,
            "end": 536
          },
          "definite": false,
          "start": 466,
          "end": 536
        }
      ],
      "declare": false,
      "start": 460,
      "end": 537
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GoodIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 558
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 567,
        "end": 575
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 576,
            "end": 582
          }
        ],
        "start": 575,
        "end": 583
      },
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                              "name": "done",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 610,
                              "end": 614
                            },
                            "value": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 616,
                              "end": 621
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 610,
                            "end": 621
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 623,
                              "end": 628
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 630,
                              "end": 631
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 623,
                            "end": 631
                          }
                        ],
                        "start": 608,
                        "end": 633
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 642
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 642
                      },
                      "start": 608,
                      "end": 642
                    },
                    "start": 601,
                    "end": 643
                  }
                ],
                "start": 595,
                "end": 647
              },
              "expression": false,
              "start": 592,
              "end": 647
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 588,
            "end": 647
          }
        ],
        "start": 584,
        "end": 649
      },
      "abstract": false,
      "declare": false,
      "start": 540,
      "end": 649
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Iterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 678
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 679,
              "end": 685
            }
          ],
          "start": 678,
          "end": 686
        },
        "arguments": [],
        "start": 666,
        "end": 688
      },
      "directive": null,
      "start": 666,
      "end": 689
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
        "start": 697,
        "end": 698
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 707,
        "end": 715
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 716,
            "end": 722
          }
        ],
        "start": 715,
        "end": 723
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 724,
        "end": 726
      },
      "abstract": false,
      "declare": false,
      "start": 691,
      "end": 726
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadIterator1",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 790
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 799,
        "end": 807
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 808,
            "end": 814
          }
        ],
        "start": 807,
        "end": 815
      },
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 820,
              "end": 824
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 837,
                            "end": 841
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 842,
                            "end": 848
                          },
                          "optional": false,
                          "computed": false,
                          "start": 837,
                          "end": 848
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 837,
                        "end": 850
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": ".5",
                        "start": 853,
                        "end": 855
                      },
                      "start": 837,
                      "end": 855
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
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
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 874,
                                    "end": 878
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 880,
                                    "end": 885
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 874,
                                  "end": 885
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 887,
                                    "end": 892
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 894,
                                    "end": 895
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 887,
                                  "end": 895
                                }
                              ],
                              "start": 872,
                              "end": 897
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 901,
                                "end": 906
                              },
                              "typeArguments": null,
                              "start": 901,
                              "end": 906
                            },
                            "start": 872,
                            "end": 906
                          },
                          "start": 865,
                          "end": 907
                        }
                      ],
                      "start": 857,
                      "end": 913
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
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
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 936,
                                    "end": 940
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 942,
                                    "end": 946
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 936,
                                  "end": 946
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 948,
                                    "end": 953
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "a string",
                                    "raw": "\"a string\"",
                                    "start": 955,
                                    "end": 965
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 948,
                                  "end": 965
                                }
                              ],
                              "start": 934,
                              "end": 967
                            },
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "const",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 971,
                                "end": 976
                              },
                              "typeArguments": null,
                              "start": 971,
                              "end": 976
                            },
                            "start": 934,
                            "end": 976
                          },
                          "start": 927,
                          "end": 977
                        }
                      ],
                      "start": 919,
                      "end": 983
                    },
                    "start": 833,
                    "end": 983
                  }
                ],
                "start": 827,
                "end": 987
              },
              "expression": false,
              "start": 824,
              "end": 987
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 820,
            "end": 987
          }
        ],
        "start": 816,
        "end": 989
      },
      "abstract": false,
      "declare": false,
      "start": 772,
      "end": 989
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadIterator2",
        "optional": false,
        "typeAnnotation": null,
        "start": 997,
        "end": 1009
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1026
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 1027,
            "end": 1033
          }
        ],
        "start": 1026,
        "end": 1034
      },
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1039,
              "end": 1043
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
                            "name": "done",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1061,
                            "end": 1065
                          },
                          "value": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 1067,
                            "end": 1072
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1061,
                          "end": 1072
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1074,
                            "end": 1079
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1081,
                            "end": 1082
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1074,
                          "end": 1082
                        }
                      ],
                      "start": 1059,
                      "end": 1084
                    },
                    "start": 1052,
                    "end": 1085
                  }
                ],
                "start": 1046,
                "end": 1089
              },
              "expression": false,
              "start": 1043,
              "end": 1089
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1039,
            "end": 1089
          }
        ],
        "start": 1035,
        "end": 1091
      },
      "abstract": false,
      "declare": false,
      "start": 991,
      "end": 1091
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadIterator3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1111
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 1120,
        "end": 1128
      },
      "superTypeArguments": {
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
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1145
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1158,
                            "end": 1162
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1163,
                            "end": 1169
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1158,
                          "end": 1169
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 1158,
                        "end": 1171
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 0.5,
                        "raw": ".5",
                        "start": 1174,
                        "end": 1176
                      },
                      "start": 1158,
                      "end": 1176
                    },
                    "consequent": {
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
                                  "name": "done",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1195,
                                  "end": 1199
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 1201,
                                  "end": 1206
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1195,
                                "end": 1206
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1208,
                                  "end": 1213
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 1215,
                                  "end": 1216
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1208,
                                "end": 1216
                              }
                            ],
                            "start": 1193,
                            "end": 1218
                          },
                          "start": 1186,
                          "end": 1219
                        }
                      ],
                      "start": 1178,
                      "end": 1225
                    },
                    "alternate": {
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
                                  "name": "done",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1248,
                                  "end": 1252
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 1254,
                                  "end": 1258
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1248,
                                "end": 1258
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1260,
                                  "end": 1265
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "a string",
                                  "raw": "\"a string\"",
                                  "start": 1267,
                                  "end": 1277
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 1260,
                                "end": 1277
                              }
                            ],
                            "start": 1246,
                            "end": 1279
                          },
                          "start": 1239,
                          "end": 1280
                        }
                      ],
                      "start": 1231,
                      "end": 1286
                    },
                    "start": 1154,
                    "end": 1286
                  }
                ],
                "start": 1148,
                "end": 1290
              },
              "expression": false,
              "start": 1145,
              "end": 1290
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1141,
            "end": 1290
          }
        ],
        "start": 1137,
        "end": 1292
      },
      "abstract": false,
      "declare": false,
      "start": 1093,
      "end": 1292
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
            "name": "g1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1312,
                  "end": 1321
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1322,
                      "end": 1328
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1330,
                      "end": 1336
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 1338,
                      "end": 1345
                    }
                  ],
                  "start": 1321,
                  "end": 1346
                },
                "start": 1312,
                "end": 1346
              },
              "start": 1310,
              "end": 1346
            },
            "start": 1308,
            "end": 1346
          },
          "init": null,
          "definite": false,
          "start": 1308,
          "end": 1346
        }
      ],
      "declare": true,
      "start": 1294,
      "end": 1347
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
            "name": "iter1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1354,
            "end": 1359
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1362,
                "end": 1370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 1371,
                "end": 1375
              },
              "optional": false,
              "computed": false,
              "start": 1362,
              "end": 1375
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1378
              }
            ],
            "optional": false,
            "start": 1362,
            "end": 1379
          },
          "definite": false,
          "start": 1354,
          "end": 1379
        }
      ],
      "declare": false,
      "start": 1348,
      "end": 1380
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
            "name": "iter2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IteratorObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1403,
                  "end": 1417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1418,
                      "end": 1424
                    }
                  ],
                  "start": 1417,
                  "end": 1425
                },
                "start": 1403,
                "end": 1425
              },
              "start": 1401,
              "end": 1425
            },
            "start": 1396,
            "end": 1425
          },
          "init": null,
          "definite": false,
          "start": 1396,
          "end": 1425
        }
      ],
      "declare": true,
      "start": 1382,
      "end": 1426
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
            "name": "iter3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1433,
            "end": 1438
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "iter2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1441,
                "end": 1446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1447,
                "end": 1454
              },
              "optional": false,
              "computed": false,
              "start": 1441,
              "end": 1454
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1461,
                  "end": 1463
                },
                "id": null,
                "generator": false,
                "start": 1455,
                "end": 1463
              }
            ],
            "optional": false,
            "start": 1441,
            "end": 1464
          },
          "definite": false,
          "start": 1433,
          "end": 1464
        }
      ],
      "declare": false,
      "start": 1427,
      "end": 1465
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1465
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 33,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 82,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "filtered",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 108,
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
    "value": "=>",
    "start": 117,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 129,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 148,
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
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 159,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "return",
    "start": 168,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 177,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 199,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 225,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "iteratorFromBare",
    "start": 231,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 250,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 316,
    "end": 317
  },
  {
    "type": "Numeric",
    "value": ".5",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "String",
    "value": "\"a string\"",
    "start": 335,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 365,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 385,
    "end": 390
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "mappedGen",
    "start": 403,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 427,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 432,
    "end": 435
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 438,
    "end": 439
  },
  {
    "type": "String",
    "value": "\"zero\"",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 460,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "mappedValues",
    "start": 466,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 489,
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
    "value": "values",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 500,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 511,
    "end": 514
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 517,
    "end": 518
  },
  {
    "type": "String",
    "value": "\"zero\"",
    "start": 519,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 528,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 540,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "GoodIterator",
    "start": 546,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 559,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 567,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 588,
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
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 601,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 610,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 616,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 634,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 637,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 670,
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
    "value": "number",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 691,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 697,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 699,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 707,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 716,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 772,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "BadIterator1",
    "start": 778,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 791,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 799,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 820,
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
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 837,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 842,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852
  },
  {
    "type": "Numeric",
    "value": ".5",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 865,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 874,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 880,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 887,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 898,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 901,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 914,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 927,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 942,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 948,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "String",
    "value": "\"a string\"",
    "start": 955,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 968,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 971,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 988,
    "end": 989
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 991,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "BadIterator2",
    "start": 997,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1010,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1018,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1039,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1061,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "BadIterator3",
    "start": 1099,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1120,
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
    "value": "{",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1141,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 1158,
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
    "value": "random",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Numeric",
    "value": ".5",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1208,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1226,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1239,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1260,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "String",
    "value": "\"a string\"",
    "start": 1267,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1294,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1302,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1312,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1322,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1338,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1348,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "iter1",
    "start": 1354,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 1362,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 1371,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1382,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1390,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "iter2",
    "start": 1396,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "IteratorObject",
    "start": 1403,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1418,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1427,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "iter3",
    "start": 1433,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "iter2",
    "start": 1441,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "flatMap",
    "start": 1447,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1458,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  }
]
```
