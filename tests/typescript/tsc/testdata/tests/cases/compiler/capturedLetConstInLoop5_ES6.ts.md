__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            },
            "start": 22,
            "end": 27
          },
          "start": 21,
          "end": 27
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 54
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
          "typeAnnotation": null,
          "start": 55,
          "end": 56
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "init": null,
                  "definite": false,
                  "start": 73,
                  "end": 74
                }
              ],
              "declare": false,
              "start": 69,
              "end": 74
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 78,
              "end": 80
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 97
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 100,
                        "end": 101
                      },
                      "definite": false,
                      "start": 96,
                      "end": 101
                    }
                  ],
                  "declare": false,
                  "start": 92,
                  "end": 102
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 132,
                              "end": 133
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 136,
                              "end": 137
                            },
                            "start": 132,
                            "end": 137
                          },
                          "start": 125,
                          "end": 137
                        }
                      ],
                      "start": 123,
                      "end": 139
                    },
                    "expression": false,
                    "start": 112,
                    "end": 139
                  },
                  "directive": null,
                  "start": 111,
                  "end": 141
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 158
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 162
                      },
                      "start": 157,
                      "end": 162
                    },
                    "id": null,
                    "generator": false,
                    "start": 151,
                    "end": 162
                  },
                  "directive": null,
                  "start": 150,
                  "end": 164
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 177,
                      "end": 178
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 182,
                      "end": 183
                    },
                    "start": 177,
                    "end": 183
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 199,
                        "end": 206
                      }
                    ],
                    "start": 185,
                    "end": 216
                  },
                  "alternate": null,
                  "start": 173,
                  "end": 216
                }
              ],
              "start": 82,
              "end": 222
            },
            "start": 64,
            "end": 222
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 231
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 233
                }
              ],
              "optional": false,
              "start": 228,
              "end": 234
            },
            "directive": null,
            "start": 228,
            "end": 235
          }
        ],
        "start": 58,
        "end": 237
      },
      "expression": false,
      "start": 41,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo00",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 253
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
          "typeAnnotation": null,
          "start": 254,
          "end": 255
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "init": null,
                  "definite": false,
                  "start": 272,
                  "end": 273
                }
              ],
              "declare": false,
              "start": 268,
              "end": 273
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 277,
              "end": 279
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 296
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 300
                      },
                      "definite": false,
                      "start": 295,
                      "end": 300
                    }
                  ],
                  "declare": false,
                  "start": 291,
                  "end": 301
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 332
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 335,
                              "end": 336
                            },
                            "start": 331,
                            "end": 336
                          },
                          "start": 324,
                          "end": 336
                        }
                      ],
                      "start": 322,
                      "end": 338
                    },
                    "expression": false,
                    "start": 311,
                    "end": 338
                  },
                  "directive": null,
                  "start": 310,
                  "end": 340
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 357
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 360,
                        "end": 361
                      },
                      "start": 356,
                      "end": 361
                    },
                    "id": null,
                    "generator": false,
                    "start": 350,
                    "end": 361
                  },
                  "directive": null,
                  "start": 349,
                  "end": 363
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 377
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 381,
                      "end": 384
                    },
                    "start": 376,
                    "end": 384
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 400,
                        "end": 407
                      }
                    ],
                    "start": 386,
                    "end": 417
                  },
                  "alternate": null,
                  "start": 372,
                  "end": 417
                }
              ],
              "start": 281,
              "end": 423
            },
            "start": 263,
            "end": 423
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 432
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                }
              ],
              "optional": false,
              "start": 429,
              "end": 435
            },
            "directive": null,
            "start": 429,
            "end": 436
          }
        ],
        "start": 257,
        "end": 438
      },
      "expression": false,
      "start": 239,
      "end": 438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
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
          "typeAnnotation": null,
          "start": 454,
          "end": 455
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
                    "start": 472,
                    "end": 473
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 476,
                    "end": 477
                  },
                  "definite": false,
                  "start": 472,
                  "end": 477
                }
              ],
              "declare": false,
              "start": 468,
              "end": 477
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 480
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 483,
                "end": 484
              },
              "start": 479,
              "end": 484
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 489
              },
              "start": 486,
              "end": 489
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 506
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 510
                      },
                      "definite": false,
                      "start": 505,
                      "end": 510
                    }
                  ],
                  "declare": false,
                  "start": 501,
                  "end": 511
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 541,
                              "end": 542
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 545,
                              "end": 546
                            },
                            "start": 541,
                            "end": 546
                          },
                          "start": 534,
                          "end": 546
                        }
                      ],
                      "start": 532,
                      "end": 548
                    },
                    "expression": false,
                    "start": 521,
                    "end": 548
                  },
                  "directive": null,
                  "start": 520,
                  "end": 550
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 566,
                        "end": 567
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 571
                      },
                      "start": 566,
                      "end": 571
                    },
                    "id": null,
                    "generator": false,
                    "start": 560,
                    "end": 571
                  },
                  "directive": null,
                  "start": 559,
                  "end": 573
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 587
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 591,
                      "end": 592
                    },
                    "start": 586,
                    "end": 592
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 608,
                        "end": 615
                      }
                    ],
                    "start": 594,
                    "end": 625
                  },
                  "alternate": null,
                  "start": 582,
                  "end": 625
                }
              ],
              "start": 491,
              "end": 631
            },
            "start": 463,
            "end": 631
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 640
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 642
                }
              ],
              "optional": false,
              "start": 637,
              "end": 643
            },
            "directive": null,
            "start": 637,
            "end": 644
          }
        ],
        "start": 457,
        "end": 646
      },
      "expression": false,
      "start": 440,
      "end": 646
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 661
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
          "typeAnnotation": null,
          "start": 662,
          "end": 663
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 678,
                "end": 679
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 684,
                "end": 685
              },
              "start": 678,
              "end": 685
            },
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
                        "start": 701,
                        "end": 702
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 705,
                        "end": 706
                      },
                      "definite": false,
                      "start": 701,
                      "end": 706
                    }
                  ],
                  "declare": false,
                  "start": 697,
                  "end": 707
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 721
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 724,
                        "end": 725
                      },
                      "definite": false,
                      "start": 720,
                      "end": 725
                    }
                  ],
                  "declare": false,
                  "start": 716,
                  "end": 726
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 756,
                              "end": 757
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 760,
                              "end": 761
                            },
                            "start": 756,
                            "end": 761
                          },
                          "start": 749,
                          "end": 761
                        }
                      ],
                      "start": 747,
                      "end": 763
                    },
                    "expression": false,
                    "start": 736,
                    "end": 763
                  },
                  "directive": null,
                  "start": 735,
                  "end": 765
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 781,
                        "end": 782
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 785,
                        "end": 786
                      },
                      "start": 781,
                      "end": 786
                    },
                    "id": null,
                    "generator": false,
                    "start": 775,
                    "end": 786
                  },
                  "directive": null,
                  "start": 774,
                  "end": 788
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 801,
                      "end": 802
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 806,
                      "end": 807
                    },
                    "start": 801,
                    "end": 807
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 823,
                        "end": 830
                      }
                    ],
                    "start": 809,
                    "end": 840
                  },
                  "alternate": null,
                  "start": 797,
                  "end": 840
                }
              ],
              "start": 687,
              "end": 846
            },
            "start": 671,
            "end": 846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 859
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                }
              ],
              "optional": false,
              "start": 856,
              "end": 862
            },
            "directive": null,
            "start": 856,
            "end": 863
          }
        ],
        "start": 665,
        "end": 865
      },
      "expression": false,
      "start": 648,
      "end": 865
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 880
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
          "typeAnnotation": null,
          "start": 881,
          "end": 882
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
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
                        "start": 907,
                        "end": 908
                      },
                      "init": null,
                      "definite": false,
                      "start": 907,
                      "end": 908
                    }
                  ],
                  "declare": false,
                  "start": 903,
                  "end": 909
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 922,
                        "end": 923
                      },
                      "init": null,
                      "definite": false,
                      "start": 922,
                      "end": 923
                    }
                  ],
                  "declare": false,
                  "start": 918,
                  "end": 924
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 954,
                              "end": 955
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 958,
                              "end": 959
                            },
                            "start": 954,
                            "end": 959
                          },
                          "start": 947,
                          "end": 959
                        }
                      ],
                      "start": 945,
                      "end": 961
                    },
                    "expression": false,
                    "start": 934,
                    "end": 961
                  },
                  "directive": null,
                  "start": 933,
                  "end": 963
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 979,
                        "end": 980
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 983,
                        "end": 984
                      },
                      "start": 979,
                      "end": 984
                    },
                    "id": null,
                    "generator": false,
                    "start": 973,
                    "end": 984
                  },
                  "directive": null,
                  "start": 972,
                  "end": 986
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1000
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1004,
                      "end": 1005
                    },
                    "start": 999,
                    "end": 1005
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1021,
                        "end": 1028
                      }
                    ],
                    "start": 1007,
                    "end": 1038
                  },
                  "alternate": null,
                  "start": 995,
                  "end": 1038
                }
              ],
              "start": 893,
              "end": 1044
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1052,
                "end": 1053
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1058,
                "end": 1059
              },
              "start": 1052,
              "end": 1059
            },
            "start": 890,
            "end": 1060
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1070,
                "end": 1073
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1075
                }
              ],
              "optional": false,
              "start": 1070,
              "end": 1076
            },
            "directive": null,
            "start": 1070,
            "end": 1077
          }
        ],
        "start": 884,
        "end": 1079
      },
      "expression": false,
      "start": 867,
      "end": 1079
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1094
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
          "typeAnnotation": null,
          "start": 1095,
          "end": 1096
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1114
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1117,
                    "end": 1118
                  },
                  "definite": false,
                  "start": 1113,
                  "end": 1118
                }
              ],
              "declare": false,
              "start": 1109,
              "end": 1118
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1121
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1124,
                "end": 1125
              },
              "start": 1120,
              "end": 1125
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1130
              },
              "start": 1127,
              "end": 1130
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1146,
                        "end": 1147
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1151
                      },
                      "definite": false,
                      "start": 1146,
                      "end": 1151
                    }
                  ],
                  "declare": false,
                  "start": 1142,
                  "end": 1152
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1165,
                        "end": 1166
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1169,
                        "end": 1170
                      },
                      "definite": false,
                      "start": 1165,
                      "end": 1170
                    }
                  ],
                  "declare": false,
                  "start": 1161,
                  "end": 1171
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1201,
                              "end": 1202
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1205,
                              "end": 1206
                            },
                            "start": 1201,
                            "end": 1206
                          },
                          "start": 1194,
                          "end": 1206
                        }
                      ],
                      "start": 1192,
                      "end": 1208
                    },
                    "expression": false,
                    "start": 1181,
                    "end": 1208
                  },
                  "directive": null,
                  "start": 1180,
                  "end": 1210
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1226,
                        "end": 1227
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1230,
                        "end": 1231
                      },
                      "start": 1226,
                      "end": 1231
                    },
                    "id": null,
                    "generator": false,
                    "start": 1220,
                    "end": 1231
                  },
                  "directive": null,
                  "start": 1219,
                  "end": 1233
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1246,
                      "end": 1247
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1251,
                      "end": 1252
                    },
                    "start": 1246,
                    "end": 1252
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1268,
                        "end": 1275
                      }
                    ],
                    "start": 1254,
                    "end": 1285
                  },
                  "alternate": null,
                  "start": 1242,
                  "end": 1285
                }
              ],
              "start": 1132,
              "end": 1291
            },
            "start": 1104,
            "end": 1291
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1304
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1305,
                  "end": 1306
                }
              ],
              "optional": false,
              "start": 1301,
              "end": 1307
            },
            "directive": null,
            "start": 1301,
            "end": 1308
          }
        ],
        "start": 1098,
        "end": 1310
      },
      "expression": false,
      "start": 1081,
      "end": 1310
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1321,
        "end": 1325
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
          "typeAnnotation": null,
          "start": 1326,
          "end": 1327
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
                    "start": 1344,
                    "end": 1345
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1348,
                    "end": 1349
                  },
                  "definite": false,
                  "start": 1344,
                  "end": 1349
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1351,
                    "end": 1352
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1355,
                    "end": 1356
                  },
                  "definite": false,
                  "start": 1351,
                  "end": 1356
                }
              ],
              "declare": false,
              "start": 1340,
              "end": 1356
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1358,
                "end": 1359
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1362,
                "end": 1363
              },
              "start": 1358,
              "end": 1363
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1367,
                "end": 1368
              },
              "start": 1365,
              "end": 1368
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1384,
                        "end": 1385
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1388,
                        "end": 1389
                      },
                      "definite": false,
                      "start": 1384,
                      "end": 1389
                    }
                  ],
                  "declare": false,
                  "start": 1380,
                  "end": 1390
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1420,
                                "end": 1421
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1424,
                                "end": 1425
                              },
                              "start": 1420,
                              "end": 1425
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1428,
                              "end": 1429
                            },
                            "start": 1420,
                            "end": 1429
                          },
                          "start": 1413,
                          "end": 1429
                        }
                      ],
                      "start": 1411,
                      "end": 1431
                    },
                    "expression": false,
                    "start": 1400,
                    "end": 1431
                  },
                  "directive": null,
                  "start": 1399,
                  "end": 1433
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1449,
                          "end": 1450
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1453,
                          "end": 1454
                        },
                        "start": 1449,
                        "end": 1454
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1457,
                        "end": 1458
                      },
                      "start": 1449,
                      "end": 1458
                    },
                    "id": null,
                    "generator": false,
                    "start": 1443,
                    "end": 1458
                  },
                  "directive": null,
                  "start": 1442,
                  "end": 1460
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1473,
                      "end": 1474
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1478,
                      "end": 1479
                    },
                    "start": 1473,
                    "end": 1479
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1495,
                        "end": 1502
                      }
                    ],
                    "start": 1481,
                    "end": 1512
                  },
                  "alternate": null,
                  "start": 1469,
                  "end": 1512
                }
              ],
              "start": 1370,
              "end": 1518
            },
            "start": 1335,
            "end": 1518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1531
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1532,
                  "end": 1533
                }
              ],
              "optional": false,
              "start": 1528,
              "end": 1534
            },
            "directive": null,
            "start": 1528,
            "end": 1535
          }
        ],
        "start": 1329,
        "end": 1537
      },
      "expression": false,
      "start": 1312,
      "end": 1537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1553
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
          "typeAnnotation": null,
          "start": 1554,
          "end": 1555
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1570,
                "end": 1571
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1576,
                "end": 1577
              },
              "start": 1570,
              "end": 1577
            },
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
                        "start": 1593,
                        "end": 1594
                      },
                      "init": null,
                      "definite": false,
                      "start": 1593,
                      "end": 1594
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1596,
                        "end": 1597
                      },
                      "init": null,
                      "definite": false,
                      "start": 1596,
                      "end": 1597
                    }
                  ],
                  "declare": false,
                  "start": 1589,
                  "end": 1598
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1611,
                        "end": 1612
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1615,
                        "end": 1616
                      },
                      "definite": false,
                      "start": 1611,
                      "end": 1616
                    }
                  ],
                  "declare": false,
                  "start": 1607,
                  "end": 1617
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1647,
                                "end": 1648
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1651,
                                "end": 1652
                              },
                              "start": 1647,
                              "end": 1652
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1655,
                              "end": 1656
                            },
                            "start": 1647,
                            "end": 1656
                          },
                          "start": 1640,
                          "end": 1656
                        }
                      ],
                      "start": 1638,
                      "end": 1658
                    },
                    "expression": false,
                    "start": 1627,
                    "end": 1658
                  },
                  "directive": null,
                  "start": 1626,
                  "end": 1660
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1676,
                          "end": 1677
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1680,
                          "end": 1681
                        },
                        "start": 1676,
                        "end": 1681
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1684,
                        "end": 1685
                      },
                      "start": 1676,
                      "end": 1685
                    },
                    "id": null,
                    "generator": false,
                    "start": 1670,
                    "end": 1685
                  },
                  "directive": null,
                  "start": 1669,
                  "end": 1687
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1700,
                      "end": 1701
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1705,
                      "end": 1706
                    },
                    "start": 1700,
                    "end": 1706
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1722,
                        "end": 1729
                      }
                    ],
                    "start": 1708,
                    "end": 1739
                  },
                  "alternate": null,
                  "start": 1696,
                  "end": 1739
                }
              ],
              "start": 1579,
              "end": 1745
            },
            "start": 1563,
            "end": 1745
          },
          {
            "type": "EmptyStatement",
            "start": 1745,
            "end": 1746
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1756,
                "end": 1759
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1760,
                  "end": 1761
                }
              ],
              "optional": false,
              "start": 1756,
              "end": 1762
            },
            "directive": null,
            "start": 1756,
            "end": 1762
          }
        ],
        "start": 1557,
        "end": 1764
      },
      "expression": false,
      "start": 1540,
      "end": 1764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1779
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
          "typeAnnotation": null,
          "start": 1780,
          "end": 1781
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
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
                        "start": 1806,
                        "end": 1807
                      },
                      "init": null,
                      "definite": false,
                      "start": 1806,
                      "end": 1807
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1809,
                        "end": 1810
                      },
                      "init": null,
                      "definite": false,
                      "start": 1809,
                      "end": 1810
                    }
                  ],
                  "declare": false,
                  "start": 1802,
                  "end": 1811
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1824,
                        "end": 1825
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1828,
                        "end": 1829
                      },
                      "definite": false,
                      "start": 1824,
                      "end": 1829
                    }
                  ],
                  "declare": false,
                  "start": 1820,
                  "end": 1830
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1860,
                                "end": 1861
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1864,
                                "end": 1865
                              },
                              "start": 1860,
                              "end": 1865
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1868,
                              "end": 1869
                            },
                            "start": 1860,
                            "end": 1869
                          },
                          "start": 1853,
                          "end": 1869
                        }
                      ],
                      "start": 1851,
                      "end": 1871
                    },
                    "expression": false,
                    "start": 1840,
                    "end": 1871
                  },
                  "directive": null,
                  "start": 1839,
                  "end": 1873
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1889,
                          "end": 1890
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1893,
                          "end": 1894
                        },
                        "start": 1889,
                        "end": 1894
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1897,
                        "end": 1898
                      },
                      "start": 1889,
                      "end": 1898
                    },
                    "id": null,
                    "generator": false,
                    "start": 1883,
                    "end": 1898
                  },
                  "directive": null,
                  "start": 1882,
                  "end": 1900
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1913,
                      "end": 1914
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1918,
                      "end": 1919
                    },
                    "start": 1913,
                    "end": 1919
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1935,
                        "end": 1942
                      }
                    ],
                    "start": 1921,
                    "end": 1952
                  },
                  "alternate": null,
                  "start": 1909,
                  "end": 1952
                }
              ],
              "start": 1792,
              "end": 1958
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1966,
                "end": 1967
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1972,
                "end": 1973
              },
              "start": 1966,
              "end": 1973
            },
            "start": 1789,
            "end": 1975
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1985,
                "end": 1988
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 1990
                }
              ],
              "optional": false,
              "start": 1985,
              "end": 1991
            },
            "directive": null,
            "start": 1985,
            "end": 1992
          }
        ],
        "start": 1783,
        "end": 1994
      },
      "expression": false,
      "start": 1766,
      "end": 1994
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2006,
        "end": 2010
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
          "typeAnnotation": null,
          "start": 2011,
          "end": 2012
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2029,
                    "end": 2030
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2033,
                    "end": 2034
                  },
                  "definite": false,
                  "start": 2029,
                  "end": 2034
                }
              ],
              "declare": false,
              "start": 2025,
              "end": 2034
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2036,
                "end": 2037
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2040,
                "end": 2041
              },
              "start": 2036,
              "end": 2041
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2045,
                "end": 2046
              },
              "start": 2043,
              "end": 2046
            },
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
                        "start": 2062,
                        "end": 2063
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2066,
                        "end": 2067
                      },
                      "definite": false,
                      "start": 2062,
                      "end": 2067
                    }
                  ],
                  "declare": false,
                  "start": 2058,
                  "end": 2068
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2081,
                        "end": 2082
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2085,
                        "end": 2086
                      },
                      "definite": false,
                      "start": 2081,
                      "end": 2086
                    }
                  ],
                  "declare": false,
                  "start": 2077,
                  "end": 2087
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2117,
                                "end": 2118
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2121,
                                "end": 2122
                              },
                              "start": 2117,
                              "end": 2122
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2125,
                              "end": 2126
                            },
                            "start": 2117,
                            "end": 2126
                          },
                          "start": 2110,
                          "end": 2126
                        }
                      ],
                      "start": 2108,
                      "end": 2128
                    },
                    "expression": false,
                    "start": 2097,
                    "end": 2128
                  },
                  "directive": null,
                  "start": 2096,
                  "end": 2130
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2146,
                          "end": 2147
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2150,
                          "end": 2151
                        },
                        "start": 2146,
                        "end": 2151
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2154,
                        "end": 2155
                      },
                      "start": 2146,
                      "end": 2155
                    },
                    "id": null,
                    "generator": false,
                    "start": 2140,
                    "end": 2155
                  },
                  "directive": null,
                  "start": 2139,
                  "end": 2157
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2170,
                      "end": 2171
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2175,
                      "end": 2176
                    },
                    "start": 2170,
                    "end": 2176
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2192,
                        "end": 2199
                      }
                    ],
                    "start": 2178,
                    "end": 2209
                  },
                  "alternate": null,
                  "start": 2166,
                  "end": 2209
                }
              ],
              "start": 2048,
              "end": 2215
            },
            "start": 2020,
            "end": 2215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2225,
                "end": 2228
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2229,
                  "end": 2230
                }
              ],
              "optional": false,
              "start": 2225,
              "end": 2231
            },
            "directive": null,
            "start": 2225,
            "end": 2232
          }
        ],
        "start": 2014,
        "end": 2234
      },
      "expression": false,
      "start": 1997,
      "end": 2234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2257,
        "end": 2263
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
          "typeAnnotation": null,
          "start": 2264,
          "end": 2265
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "start": 2284,
                    "end": 2285
                  },
                  "init": null,
                  "definite": false,
                  "start": 2284,
                  "end": 2285
                }
              ],
              "declare": false,
              "start": 2278,
              "end": 2285
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2289,
              "end": 2291
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2307,
                        "end": 2308
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2311,
                        "end": 2312
                      },
                      "definite": false,
                      "start": 2307,
                      "end": 2312
                    }
                  ],
                  "declare": false,
                  "start": 2303,
                  "end": 2313
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2343,
                              "end": 2344
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2347,
                              "end": 2348
                            },
                            "start": 2343,
                            "end": 2348
                          },
                          "start": 2336,
                          "end": 2348
                        }
                      ],
                      "start": 2334,
                      "end": 2350
                    },
                    "expression": false,
                    "start": 2323,
                    "end": 2350
                  },
                  "directive": null,
                  "start": 2322,
                  "end": 2352
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2368,
                        "end": 2369
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2372,
                        "end": 2373
                      },
                      "start": 2368,
                      "end": 2373
                    },
                    "id": null,
                    "generator": false,
                    "start": 2362,
                    "end": 2373
                  },
                  "directive": null,
                  "start": 2361,
                  "end": 2375
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2388,
                      "end": 2389
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2393,
                      "end": 2394
                    },
                    "start": 2388,
                    "end": 2394
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2410,
                        "end": 2417
                      }
                    ],
                    "start": 2396,
                    "end": 2427
                  },
                  "alternate": null,
                  "start": 2384,
                  "end": 2427
                }
              ],
              "start": 2293,
              "end": 2433
            },
            "start": 2273,
            "end": 2433
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2439,
                "end": 2442
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2443,
                  "end": 2444
                }
              ],
              "optional": false,
              "start": 2439,
              "end": 2445
            },
            "directive": null,
            "start": 2439,
            "end": 2446
          }
        ],
        "start": 2267,
        "end": 2448
      },
      "expression": false,
      "start": 2248,
      "end": 2448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo00_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2466
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
          "typeAnnotation": null,
          "start": 2467,
          "end": 2468
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
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
                    "start": 2487,
                    "end": 2488
                  },
                  "init": null,
                  "definite": false,
                  "start": 2487,
                  "end": 2488
                }
              ],
              "declare": false,
              "start": 2481,
              "end": 2488
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2492,
              "end": 2494
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2510,
                        "end": 2511
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2514,
                        "end": 2515
                      },
                      "definite": false,
                      "start": 2510,
                      "end": 2515
                    }
                  ],
                  "declare": false,
                  "start": 2506,
                  "end": 2516
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2546,
                              "end": 2547
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2550,
                              "end": 2551
                            },
                            "start": 2546,
                            "end": 2551
                          },
                          "start": 2539,
                          "end": 2551
                        }
                      ],
                      "start": 2537,
                      "end": 2553
                    },
                    "expression": false,
                    "start": 2526,
                    "end": 2553
                  },
                  "directive": null,
                  "start": 2525,
                  "end": 2555
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2571,
                        "end": 2572
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2575,
                        "end": 2576
                      },
                      "start": 2571,
                      "end": 2576
                    },
                    "id": null,
                    "generator": false,
                    "start": 2565,
                    "end": 2576
                  },
                  "directive": null,
                  "start": 2564,
                  "end": 2578
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2591,
                      "end": 2592
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 2596,
                      "end": 2599
                    },
                    "start": 2591,
                    "end": 2599
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2615,
                        "end": 2622
                      }
                    ],
                    "start": 2601,
                    "end": 2632
                  },
                  "alternate": null,
                  "start": 2587,
                  "end": 2632
                }
              ],
              "start": 2496,
              "end": 2638
            },
            "start": 2476,
            "end": 2638
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2644,
                "end": 2647
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2648,
                  "end": 2649
                }
              ],
              "optional": false,
              "start": 2644,
              "end": 2650
            },
            "directive": null,
            "start": 2644,
            "end": 2651
          }
        ],
        "start": 2470,
        "end": 2653
      },
      "expression": false,
      "start": 2450,
      "end": 2653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2664,
        "end": 2670
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
          "typeAnnotation": null,
          "start": 2671,
          "end": 2672
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
                    "start": 2691,
                    "end": 2692
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2695,
                    "end": 2696
                  },
                  "definite": false,
                  "start": 2691,
                  "end": 2696
                }
              ],
              "declare": false,
              "start": 2685,
              "end": 2696
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2698,
                "end": 2699
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2702,
                "end": 2703
              },
              "start": 2698,
              "end": 2703
            },
            "update": null,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2720,
                        "end": 2721
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2724,
                        "end": 2725
                      },
                      "definite": false,
                      "start": 2720,
                      "end": 2725
                    }
                  ],
                  "declare": false,
                  "start": 2716,
                  "end": 2726
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2756,
                              "end": 2757
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2760,
                              "end": 2761
                            },
                            "start": 2756,
                            "end": 2761
                          },
                          "start": 2749,
                          "end": 2761
                        }
                      ],
                      "start": 2747,
                      "end": 2763
                    },
                    "expression": false,
                    "start": 2736,
                    "end": 2763
                  },
                  "directive": null,
                  "start": 2735,
                  "end": 2765
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2781,
                        "end": 2782
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2785,
                        "end": 2786
                      },
                      "start": 2781,
                      "end": 2786
                    },
                    "id": null,
                    "generator": false,
                    "start": 2775,
                    "end": 2786
                  },
                  "directive": null,
                  "start": 2774,
                  "end": 2788
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2801,
                      "end": 2802
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2806,
                      "end": 2807
                    },
                    "start": 2801,
                    "end": 2807
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2823,
                        "end": 2830
                      }
                    ],
                    "start": 2809,
                    "end": 2840
                  },
                  "alternate": null,
                  "start": 2797,
                  "end": 2840
                }
              ],
              "start": 2706,
              "end": 2846
            },
            "start": 2680,
            "end": 2846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2852,
                "end": 2855
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2856,
                  "end": 2857
                }
              ],
              "optional": false,
              "start": 2852,
              "end": 2858
            },
            "directive": null,
            "start": 2852,
            "end": 2859
          }
        ],
        "start": 2674,
        "end": 2861
      },
      "expression": false,
      "start": 2655,
      "end": 2861
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2872,
        "end": 2878
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
          "typeAnnotation": null,
          "start": 2879,
          "end": 2880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2895,
                "end": 2896
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2901,
                "end": 2902
              },
              "start": 2895,
              "end": 2902
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
                        "start": 2920,
                        "end": 2921
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2924,
                        "end": 2925
                      },
                      "definite": false,
                      "start": 2920,
                      "end": 2925
                    }
                  ],
                  "declare": false,
                  "start": 2914,
                  "end": 2926
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2939,
                        "end": 2940
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2943,
                        "end": 2944
                      },
                      "definite": false,
                      "start": 2939,
                      "end": 2944
                    }
                  ],
                  "declare": false,
                  "start": 2935,
                  "end": 2945
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2975,
                              "end": 2976
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2979,
                              "end": 2980
                            },
                            "start": 2975,
                            "end": 2980
                          },
                          "start": 2968,
                          "end": 2980
                        }
                      ],
                      "start": 2966,
                      "end": 2982
                    },
                    "expression": false,
                    "start": 2955,
                    "end": 2982
                  },
                  "directive": null,
                  "start": 2954,
                  "end": 2984
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3000,
                        "end": 3001
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3004,
                        "end": 3005
                      },
                      "start": 3000,
                      "end": 3005
                    },
                    "id": null,
                    "generator": false,
                    "start": 2994,
                    "end": 3005
                  },
                  "directive": null,
                  "start": 2993,
                  "end": 3007
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3020,
                      "end": 3021
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3025,
                      "end": 3026
                    },
                    "start": 3020,
                    "end": 3026
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3042,
                        "end": 3049
                      }
                    ],
                    "start": 3028,
                    "end": 3059
                  },
                  "alternate": null,
                  "start": 3016,
                  "end": 3059
                }
              ],
              "start": 2904,
              "end": 3065
            },
            "start": 2888,
            "end": 3065
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3075,
                "end": 3078
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3079,
                  "end": 3080
                }
              ],
              "optional": false,
              "start": 3075,
              "end": 3081
            },
            "directive": null,
            "start": 3075,
            "end": 3082
          }
        ],
        "start": 2882,
        "end": 3084
      },
      "expression": false,
      "start": 2863,
      "end": 3084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3095,
        "end": 3101
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
          "typeAnnotation": null,
          "start": 3102,
          "end": 3103
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
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
                        "start": 3130,
                        "end": 3131
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3134,
                        "end": 3135
                      },
                      "definite": false,
                      "start": 3130,
                      "end": 3135
                    }
                  ],
                  "declare": false,
                  "start": 3124,
                  "end": 3136
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3149,
                        "end": 3150
                      },
                      "init": null,
                      "definite": false,
                      "start": 3149,
                      "end": 3150
                    }
                  ],
                  "declare": false,
                  "start": 3145,
                  "end": 3151
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3181,
                              "end": 3182
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3185,
                              "end": 3186
                            },
                            "start": 3181,
                            "end": 3186
                          },
                          "start": 3174,
                          "end": 3186
                        }
                      ],
                      "start": 3172,
                      "end": 3188
                    },
                    "expression": false,
                    "start": 3161,
                    "end": 3188
                  },
                  "directive": null,
                  "start": 3160,
                  "end": 3190
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3206,
                        "end": 3207
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3210,
                        "end": 3211
                      },
                      "start": 3206,
                      "end": 3211
                    },
                    "id": null,
                    "generator": false,
                    "start": 3200,
                    "end": 3211
                  },
                  "directive": null,
                  "start": 3199,
                  "end": 3213
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3226,
                      "end": 3227
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3231,
                      "end": 3232
                    },
                    "start": 3226,
                    "end": 3232
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3248,
                        "end": 3255
                      }
                    ],
                    "start": 3234,
                    "end": 3265
                  },
                  "alternate": null,
                  "start": 3222,
                  "end": 3265
                }
              ],
              "start": 3114,
              "end": 3271
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3279,
                "end": 3280
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3285,
                "end": 3286
              },
              "start": 3279,
              "end": 3286
            },
            "start": 3111,
            "end": 3287
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3297,
                "end": 3300
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3301,
                  "end": 3302
                }
              ],
              "optional": false,
              "start": 3297,
              "end": 3303
            },
            "directive": null,
            "start": 3297,
            "end": 3304
          }
        ],
        "start": 3105,
        "end": 3306
      },
      "expression": false,
      "start": 3086,
      "end": 3306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3317,
        "end": 3323
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
          "typeAnnotation": null,
          "start": 3324,
          "end": 3325
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3344,
                    "end": 3345
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3348,
                    "end": 3349
                  },
                  "definite": false,
                  "start": 3344,
                  "end": 3349
                }
              ],
              "declare": false,
              "start": 3338,
              "end": 3349
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3351,
                "end": 3352
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3355,
                "end": 3356
              },
              "start": 3351,
              "end": 3356
            },
            "update": null,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3373,
                        "end": 3374
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3377,
                        "end": 3378
                      },
                      "definite": false,
                      "start": 3373,
                      "end": 3378
                    }
                  ],
                  "declare": false,
                  "start": 3369,
                  "end": 3379
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3392,
                        "end": 3393
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3396,
                        "end": 3397
                      },
                      "definite": false,
                      "start": 3392,
                      "end": 3397
                    }
                  ],
                  "declare": false,
                  "start": 3388,
                  "end": 3398
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3428,
                              "end": 3429
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3432,
                              "end": 3433
                            },
                            "start": 3428,
                            "end": 3433
                          },
                          "start": 3421,
                          "end": 3433
                        }
                      ],
                      "start": 3419,
                      "end": 3435
                    },
                    "expression": false,
                    "start": 3408,
                    "end": 3435
                  },
                  "directive": null,
                  "start": 3407,
                  "end": 3437
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3453,
                        "end": 3454
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3457,
                        "end": 3458
                      },
                      "start": 3453,
                      "end": 3458
                    },
                    "id": null,
                    "generator": false,
                    "start": 3447,
                    "end": 3458
                  },
                  "directive": null,
                  "start": 3446,
                  "end": 3460
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3473,
                      "end": 3474
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3478,
                      "end": 3479
                    },
                    "start": 3473,
                    "end": 3479
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3495,
                        "end": 3502
                      }
                    ],
                    "start": 3481,
                    "end": 3512
                  },
                  "alternate": null,
                  "start": 3469,
                  "end": 3512
                }
              ],
              "start": 3359,
              "end": 3518
            },
            "start": 3333,
            "end": 3518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3528,
                "end": 3531
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3532,
                  "end": 3533
                }
              ],
              "optional": false,
              "start": 3528,
              "end": 3534
            },
            "directive": null,
            "start": 3528,
            "end": 3535
          }
        ],
        "start": 3327,
        "end": 3537
      },
      "expression": false,
      "start": 3308,
      "end": 3537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3548,
        "end": 3554
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
          "typeAnnotation": null,
          "start": 3555,
          "end": 3556
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
                    "start": 3575,
                    "end": 3576
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3579,
                    "end": 3580
                  },
                  "definite": false,
                  "start": 3575,
                  "end": 3580
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3582,
                    "end": 3583
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3586,
                    "end": 3587
                  },
                  "definite": false,
                  "start": 3582,
                  "end": 3587
                }
              ],
              "declare": false,
              "start": 3569,
              "end": 3587
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3589,
                "end": 3590
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3593,
                "end": 3594
              },
              "start": 3589,
              "end": 3594
            },
            "update": null,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3611,
                        "end": 3612
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3615,
                        "end": 3616
                      },
                      "definite": false,
                      "start": 3611,
                      "end": 3616
                    }
                  ],
                  "declare": false,
                  "start": 3607,
                  "end": 3617
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3647,
                                "end": 3648
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3651,
                                "end": 3652
                              },
                              "start": 3647,
                              "end": 3652
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3655,
                              "end": 3656
                            },
                            "start": 3647,
                            "end": 3656
                          },
                          "start": 3640,
                          "end": 3656
                        }
                      ],
                      "start": 3638,
                      "end": 3658
                    },
                    "expression": false,
                    "start": 3627,
                    "end": 3658
                  },
                  "directive": null,
                  "start": 3626,
                  "end": 3660
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3676,
                          "end": 3677
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3680,
                          "end": 3681
                        },
                        "start": 3676,
                        "end": 3681
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3684,
                        "end": 3685
                      },
                      "start": 3676,
                      "end": 3685
                    },
                    "id": null,
                    "generator": false,
                    "start": 3670,
                    "end": 3685
                  },
                  "directive": null,
                  "start": 3669,
                  "end": 3687
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3700,
                      "end": 3701
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3705,
                      "end": 3706
                    },
                    "start": 3700,
                    "end": 3706
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3722,
                        "end": 3729
                      }
                    ],
                    "start": 3708,
                    "end": 3739
                  },
                  "alternate": null,
                  "start": 3696,
                  "end": 3739
                }
              ],
              "start": 3597,
              "end": 3745
            },
            "start": 3564,
            "end": 3745
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3755,
                "end": 3758
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3759,
                  "end": 3760
                }
              ],
              "optional": false,
              "start": 3755,
              "end": 3761
            },
            "directive": null,
            "start": 3755,
            "end": 3762
          }
        ],
        "start": 3558,
        "end": 3764
      },
      "expression": false,
      "start": 3539,
      "end": 3764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3776,
        "end": 3782
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
          "typeAnnotation": null,
          "start": 3783,
          "end": 3784
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3799,
                "end": 3800
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3805,
                "end": 3806
              },
              "start": 3799,
              "end": 3806
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
                        "start": 3824,
                        "end": 3825
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3828,
                        "end": 3829
                      },
                      "definite": false,
                      "start": 3824,
                      "end": 3829
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3831,
                        "end": 3832
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3835,
                        "end": 3836
                      },
                      "definite": false,
                      "start": 3831,
                      "end": 3836
                    }
                  ],
                  "declare": false,
                  "start": 3818,
                  "end": 3837
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3850,
                        "end": 3851
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3854,
                        "end": 3855
                      },
                      "definite": false,
                      "start": 3850,
                      "end": 3855
                    }
                  ],
                  "declare": false,
                  "start": 3846,
                  "end": 3856
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3886,
                                "end": 3887
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3890,
                                "end": 3891
                              },
                              "start": 3886,
                              "end": 3891
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3894,
                              "end": 3895
                            },
                            "start": 3886,
                            "end": 3895
                          },
                          "start": 3879,
                          "end": 3895
                        }
                      ],
                      "start": 3877,
                      "end": 3897
                    },
                    "expression": false,
                    "start": 3866,
                    "end": 3897
                  },
                  "directive": null,
                  "start": 3865,
                  "end": 3899
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3915,
                          "end": 3916
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3919,
                          "end": 3920
                        },
                        "start": 3915,
                        "end": 3920
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3923,
                        "end": 3924
                      },
                      "start": 3915,
                      "end": 3924
                    },
                    "id": null,
                    "generator": false,
                    "start": 3909,
                    "end": 3924
                  },
                  "directive": null,
                  "start": 3908,
                  "end": 3926
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3939,
                      "end": 3940
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3944,
                      "end": 3945
                    },
                    "start": 3939,
                    "end": 3945
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3961,
                        "end": 3968
                      }
                    ],
                    "start": 3947,
                    "end": 3978
                  },
                  "alternate": null,
                  "start": 3935,
                  "end": 3978
                }
              ],
              "start": 3808,
              "end": 3984
            },
            "start": 3792,
            "end": 3984
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3994,
                "end": 3997
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3998,
                  "end": 3999
                }
              ],
              "optional": false,
              "start": 3994,
              "end": 4000
            },
            "directive": null,
            "start": 3994,
            "end": 4000
          }
        ],
        "start": 3786,
        "end": 4002
      },
      "expression": false,
      "start": 3767,
      "end": 4002
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4013,
        "end": 4019
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
          "typeAnnotation": null,
          "start": 4020,
          "end": 4021
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
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
                        "start": 4048,
                        "end": 4049
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4052,
                        "end": 4053
                      },
                      "definite": false,
                      "start": 4048,
                      "end": 4053
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4055,
                        "end": 4056
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4059,
                        "end": 4060
                      },
                      "definite": false,
                      "start": 4055,
                      "end": 4060
                    }
                  ],
                  "declare": false,
                  "start": 4042,
                  "end": 4061
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4074,
                        "end": 4075
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4078,
                        "end": 4079
                      },
                      "definite": false,
                      "start": 4074,
                      "end": 4079
                    }
                  ],
                  "declare": false,
                  "start": 4070,
                  "end": 4080
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4110,
                                "end": 4111
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4114,
                                "end": 4115
                              },
                              "start": 4110,
                              "end": 4115
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4118,
                              "end": 4119
                            },
                            "start": 4110,
                            "end": 4119
                          },
                          "start": 4103,
                          "end": 4119
                        }
                      ],
                      "start": 4101,
                      "end": 4121
                    },
                    "expression": false,
                    "start": 4090,
                    "end": 4121
                  },
                  "directive": null,
                  "start": 4089,
                  "end": 4123
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4139,
                          "end": 4140
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4143,
                          "end": 4144
                        },
                        "start": 4139,
                        "end": 4144
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4147,
                        "end": 4148
                      },
                      "start": 4139,
                      "end": 4148
                    },
                    "id": null,
                    "generator": false,
                    "start": 4133,
                    "end": 4148
                  },
                  "directive": null,
                  "start": 4132,
                  "end": 4150
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4163,
                      "end": 4164
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4168,
                      "end": 4169
                    },
                    "start": 4163,
                    "end": 4169
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 4185,
                        "end": 4192
                      }
                    ],
                    "start": 4171,
                    "end": 4202
                  },
                  "alternate": null,
                  "start": 4159,
                  "end": 4202
                }
              ],
              "start": 4032,
              "end": 4208
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4216,
                "end": 4217
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4222,
                "end": 4223
              },
              "start": 4216,
              "end": 4223
            },
            "start": 4029,
            "end": 4224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 4234,
                "end": 4237
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4238,
                  "end": 4239
                }
              ],
              "optional": false,
              "start": 4234,
              "end": 4240
            },
            "directive": null,
            "start": 4234,
            "end": 4241
          }
        ],
        "start": 4023,
        "end": 4243
      },
      "expression": false,
      "start": 4004,
      "end": 4243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4255,
        "end": 4261
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
          "typeAnnotation": null,
          "start": 4262,
          "end": 4263
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4282,
                    "end": 4283
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4286,
                    "end": 4287
                  },
                  "definite": false,
                  "start": 4282,
                  "end": 4287
                }
              ],
              "declare": false,
              "start": 4276,
              "end": 4287
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4289,
                "end": 4290
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4293,
                "end": 4294
              },
              "start": 4289,
              "end": 4294
            },
            "update": null,
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
                        "start": 4313,
                        "end": 4314
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4317,
                        "end": 4318
                      },
                      "definite": false,
                      "start": 4313,
                      "end": 4318
                    }
                  ],
                  "declare": false,
                  "start": 4307,
                  "end": 4319
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4332,
                        "end": 4333
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4336,
                        "end": 4337
                      },
                      "definite": false,
                      "start": 4332,
                      "end": 4337
                    }
                  ],
                  "declare": false,
                  "start": 4328,
                  "end": 4338
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4368,
                                "end": 4369
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4372,
                                "end": 4373
                              },
                              "start": 4368,
                              "end": 4373
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4376,
                              "end": 4377
                            },
                            "start": 4368,
                            "end": 4377
                          },
                          "start": 4361,
                          "end": 4377
                        }
                      ],
                      "start": 4359,
                      "end": 4379
                    },
                    "expression": false,
                    "start": 4348,
                    "end": 4379
                  },
                  "directive": null,
                  "start": 4347,
                  "end": 4381
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4397,
                          "end": 4398
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4401,
                          "end": 4402
                        },
                        "start": 4397,
                        "end": 4402
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4405,
                        "end": 4406
                      },
                      "start": 4397,
                      "end": 4406
                    },
                    "id": null,
                    "generator": false,
                    "start": 4391,
                    "end": 4406
                  },
                  "directive": null,
                  "start": 4390,
                  "end": 4408
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4421,
                      "end": 4422
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4426,
                      "end": 4427
                    },
                    "start": 4421,
                    "end": 4427
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 4443,
                        "end": 4450
                      }
                    ],
                    "start": 4429,
                    "end": 4460
                  },
                  "alternate": null,
                  "start": 4417,
                  "end": 4460
                }
              ],
              "start": 4297,
              "end": 4466
            },
            "start": 4271,
            "end": 4466
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 4476,
                "end": 4479
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4480,
                  "end": 4481
                }
              ],
              "optional": false,
              "start": 4476,
              "end": 4482
            },
            "directive": null,
            "start": 4476,
            "end": 4483
          }
        ],
        "start": 4265,
        "end": 4485
      },
      "expression": false,
      "start": 4246,
      "end": 4485
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4485
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
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
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "foo0",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
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
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
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
    "value": "=>",
    "start": 154,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "if",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 179,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 239,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "foo00",
    "start": 248,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 291,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 324,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 353,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Keyword",
    "value": "if",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 378,
    "end": 380
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 440,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 449,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 486,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 501,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
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
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 521,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 534,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 563,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 582,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 588,
    "end": 590
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 608,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 637,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
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
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 648,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 671,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 677,
    "end": 678
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 680,
    "end": 683
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 736,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 749,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 778,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 797,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 803,
    "end": 805
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 856,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 867,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 876,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 903,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 918,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 934,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 947,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
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
    "value": "=>",
    "start": 976,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 995,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1001,
    "end": 1003
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1045,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "use",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 1081,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1090,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1142,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1181,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1194,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
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
    "type": "Punctuator",
    "value": "(",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1242,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1248,
    "end": 1250
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1268,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1312,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1335,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1400,
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
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1413,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
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
    "type": "Identifier",
    "value": "x",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1475,
    "end": 1477
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1495,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1528,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1540,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1549,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1563,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1589,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "var",
    "start": 1607,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1627,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1640,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1673,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1696,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1722,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1756,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "}",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1766,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1775,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1789,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1802,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1820,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1840,
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
    "value": ")",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1853,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "+",
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
    "value": "+",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1870,
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
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1886,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1909,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1915,
    "end": 1917
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1935,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1959,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1968,
    "end": 1971
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1997,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 2006,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2025,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2043,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "let",
    "start": 2058,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "var",
    "start": 2077,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2097,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2110,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2143,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2166,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2172,
    "end": 2174
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2192,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2225,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2248,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "foo0_c",
    "start": 2257,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2273,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2278,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2286,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2303,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2323,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2336,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2365,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2384,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2390,
    "end": 2392
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2410,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2439,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2450,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "foo00_c",
    "start": 2459,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2476,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2481,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2489,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2506,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2526,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2539,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2587,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2593,
    "end": 2595
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 2596,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2615,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2644,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2655,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "foo1_c",
    "start": 2664,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2680,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2685,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2716,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2736,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2749,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2774,
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
    "value": "=>",
    "start": 2778,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2797,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 2803,
    "end": 2805
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2823,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2852,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2863,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "foo2_c",
    "start": 2872,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2888,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2897,
    "end": 2900
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2914,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2935,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2955,
    "end": 2963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2963,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2968,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2997,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3016,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3022,
    "end": 3024
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3042,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3075,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3086,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "foo3_c",
    "start": 3095,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 3111,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3124,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3145,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3161,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3174,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3203,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3222,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3228,
    "end": 3230
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3248,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 3272,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3281,
    "end": 3284
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3297,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3308,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "foo4_c",
    "start": 3317,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3333,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3338,
    "end": 3343
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3369,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3388,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3408,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3421,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3450,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3469,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3475,
    "end": 3477
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3495,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3528,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3539,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "foo5_c",
    "start": 3548,
    "end": 3554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3564,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3569,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3591,
    "end": 3592
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3607,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3627,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3640,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3673,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3696,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3702,
    "end": 3704
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3722,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3755,
    "end": 3758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3760,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3767,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "foo6_c",
    "start": 3776,
    "end": 3782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3782,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 3792,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3798,
    "end": 3799
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3801,
    "end": 3804
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3808,
    "end": 3809
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3818,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3828,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3831,
    "end": 3832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3846,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3865,
    "end": 3866
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3866,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3879,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3892,
    "end": 3893
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3897,
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
    "value": "(",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3912,
    "end": 3914
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3935,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3941,
    "end": 3943
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3944,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3961,
    "end": 3967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3967,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3994,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4004,
    "end": 4012
  },
  {
    "type": "Identifier",
    "value": "foo7_c",
    "start": 4013,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4023,
    "end": 4024
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 4029,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4042,
    "end": 4047
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4070,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4079,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4090,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4103,
    "end": 4109
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4116,
    "end": 4117
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4136,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4147,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4149,
    "end": 4150
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4159,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4165,
    "end": 4167
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4185,
    "end": 4191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4191,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 4209,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4215,
    "end": 4216
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4218,
    "end": 4221
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4222,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 4234,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4239,
    "end": 4240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4240,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4246,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "foo8_c",
    "start": 4255,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 4271,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4276,
    "end": 4281
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4286,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4287,
    "end": 4288
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4291,
    "end": 4292
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4307,
    "end": 4312
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4328,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4348,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4361,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4374,
    "end": 4375
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4390,
    "end": 4391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4394,
    "end": 4396
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4406,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4417,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 4423,
    "end": 4425
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4443,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 4476,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4482,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4484,
    "end": 4485
  }
]
```
