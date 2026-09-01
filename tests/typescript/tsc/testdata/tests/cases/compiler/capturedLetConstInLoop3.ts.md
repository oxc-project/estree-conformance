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
        "start": 33,
        "end": 36
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
              "start": 40,
              "end": 43
            },
            "start": 38,
            "end": 43
          },
          "start": 37,
          "end": 43
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 16,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 59
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
          "start": 60,
          "end": 61
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
                    "start": 78,
                    "end": 79
                  },
                  "init": null,
                  "definite": false,
                  "start": 78,
                  "end": 79
                }
              ],
              "declare": false,
              "start": 74,
              "end": 79
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 83,
              "end": 85
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
                        "start": 101,
                        "end": 102
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 106
                      },
                      "definite": false,
                      "start": 101,
                      "end": 106
                    }
                  ],
                  "declare": false,
                  "start": 97,
                  "end": 107
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
                              "start": 137,
                              "end": 138
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 142
                            },
                            "start": 137,
                            "end": 142
                          },
                          "start": 130,
                          "end": 142
                        }
                      ],
                      "start": 128,
                      "end": 144
                    },
                    "expression": false,
                    "start": 117,
                    "end": 144
                  },
                  "directive": null,
                  "start": 116,
                  "end": 146
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
                        "start": 162,
                        "end": 163
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 167
                      },
                      "start": 162,
                      "end": 167
                    },
                    "id": null,
                    "generator": false,
                    "start": 156,
                    "end": 167
                  },
                  "directive": null,
                  "start": 155,
                  "end": 169
                }
              ],
              "start": 87,
              "end": 175
            },
            "start": 69,
            "end": 175
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
                "start": 181,
                "end": 184
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                }
              ],
              "optional": false,
              "start": 181,
              "end": 187
            },
            "directive": null,
            "start": 181,
            "end": 188
          }
        ],
        "start": 63,
        "end": 190
      },
      "expression": false,
      "start": 46,
      "end": 190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 207
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
          "start": 208,
          "end": 209
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
                    "start": 226,
                    "end": 227
                  },
                  "init": null,
                  "definite": false,
                  "start": 226,
                  "end": 227
                }
              ],
              "declare": false,
              "start": 222,
              "end": 227
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 231,
              "end": 233
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
                        "start": 249,
                        "end": 250
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 254
                      },
                      "definite": false,
                      "start": 249,
                      "end": 254
                    }
                  ],
                  "declare": false,
                  "start": 245,
                  "end": 255
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
                              "start": 285,
                              "end": 286
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 289,
                              "end": 290
                            },
                            "start": 285,
                            "end": 290
                          },
                          "start": 278,
                          "end": 290
                        }
                      ],
                      "start": 276,
                      "end": 292
                    },
                    "expression": false,
                    "start": 265,
                    "end": 292
                  },
                  "directive": null,
                  "start": 264,
                  "end": 294
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
                        "start": 310,
                        "end": 311
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 315
                      },
                      "start": 310,
                      "end": 315
                    },
                    "id": null,
                    "generator": false,
                    "start": 304,
                    "end": 315
                  },
                  "directive": null,
                  "start": 303,
                  "end": 317
                }
              ],
              "start": 235,
              "end": 323
            },
            "start": 217,
            "end": 323
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
                "start": 329,
                "end": 332
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 334
                }
              ],
              "optional": false,
              "start": 329,
              "end": 335
            },
            "directive": null,
            "start": 329,
            "end": 336
          }
        ],
        "start": 211,
        "end": 338
      },
      "expression": false,
      "start": 192,
      "end": 338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 353
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
          "start": 354,
          "end": 355
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
                    "start": 372,
                    "end": 373
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 376,
                    "end": 377
                  },
                  "definite": false,
                  "start": 372,
                  "end": 377
                }
              ],
              "declare": false,
              "start": 368,
              "end": 377
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 380
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 383,
                "end": 384
              },
              "start": 379,
              "end": 384
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
                "start": 388,
                "end": 389
              },
              "start": 386,
              "end": 389
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
                        "start": 405,
                        "end": 406
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 410
                      },
                      "definite": false,
                      "start": 405,
                      "end": 410
                    }
                  ],
                  "declare": false,
                  "start": 401,
                  "end": 411
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
                              "start": 441,
                              "end": 442
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 445,
                              "end": 446
                            },
                            "start": 441,
                            "end": 446
                          },
                          "start": 434,
                          "end": 446
                        }
                      ],
                      "start": 432,
                      "end": 448
                    },
                    "expression": false,
                    "start": 421,
                    "end": 448
                  },
                  "directive": null,
                  "start": 420,
                  "end": 450
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
                        "start": 466,
                        "end": 467
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 471
                      },
                      "start": 466,
                      "end": 471
                    },
                    "id": null,
                    "generator": false,
                    "start": 460,
                    "end": 471
                  },
                  "directive": null,
                  "start": 459,
                  "end": 473
                }
              ],
              "start": 391,
              "end": 479
            },
            "start": 363,
            "end": 479
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
                "start": 485,
                "end": 488
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                }
              ],
              "optional": false,
              "start": 485,
              "end": 491
            },
            "directive": null,
            "start": 485,
            "end": 492
          }
        ],
        "start": 357,
        "end": 494
      },
      "expression": false,
      "start": 340,
      "end": 494
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 509
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
          "start": 510,
          "end": 511
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
                "start": 526,
                "end": 527
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 532,
                "end": 533
              },
              "start": 526,
              "end": 533
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
                        "start": 549,
                        "end": 550
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 553,
                        "end": 554
                      },
                      "definite": false,
                      "start": 549,
                      "end": 554
                    }
                  ],
                  "declare": false,
                  "start": 545,
                  "end": 555
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
                        "start": 568,
                        "end": 569
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 573
                      },
                      "definite": false,
                      "start": 568,
                      "end": 573
                    }
                  ],
                  "declare": false,
                  "start": 564,
                  "end": 574
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
                              "start": 604,
                              "end": 605
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 608,
                              "end": 609
                            },
                            "start": 604,
                            "end": 609
                          },
                          "start": 597,
                          "end": 609
                        }
                      ],
                      "start": 595,
                      "end": 611
                    },
                    "expression": false,
                    "start": 584,
                    "end": 611
                  },
                  "directive": null,
                  "start": 583,
                  "end": 613
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
                        "start": 629,
                        "end": 630
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 633,
                        "end": 634
                      },
                      "start": 629,
                      "end": 634
                    },
                    "id": null,
                    "generator": false,
                    "start": 623,
                    "end": 634
                  },
                  "directive": null,
                  "start": 622,
                  "end": 636
                }
              ],
              "start": 535,
              "end": 642
            },
            "start": 519,
            "end": 642
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
                "start": 652,
                "end": 655
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 657
                }
              ],
              "optional": false,
              "start": 652,
              "end": 658
            },
            "directive": null,
            "start": 652,
            "end": 659
          }
        ],
        "start": 513,
        "end": 661
      },
      "expression": false,
      "start": 496,
      "end": 661
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 672,
        "end": 676
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
          "start": 677,
          "end": 678
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
                        "start": 703,
                        "end": 704
                      },
                      "init": null,
                      "definite": false,
                      "start": 703,
                      "end": 704
                    }
                  ],
                  "declare": false,
                  "start": 699,
                  "end": 705
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
                        "start": 718,
                        "end": 719
                      },
                      "init": null,
                      "definite": false,
                      "start": 718,
                      "end": 719
                    }
                  ],
                  "declare": false,
                  "start": 714,
                  "end": 720
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
                              "start": 750,
                              "end": 751
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 754,
                              "end": 755
                            },
                            "start": 750,
                            "end": 755
                          },
                          "start": 743,
                          "end": 755
                        }
                      ],
                      "start": 741,
                      "end": 757
                    },
                    "expression": false,
                    "start": 730,
                    "end": 757
                  },
                  "directive": null,
                  "start": 729,
                  "end": 759
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
                        "start": 775,
                        "end": 776
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 779,
                        "end": 780
                      },
                      "start": 775,
                      "end": 780
                    },
                    "id": null,
                    "generator": false,
                    "start": 769,
                    "end": 780
                  },
                  "directive": null,
                  "start": 768,
                  "end": 782
                }
              ],
              "start": 689,
              "end": 788
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 796,
                "end": 797
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 802,
                "end": 803
              },
              "start": 796,
              "end": 803
            },
            "start": 686,
            "end": 805
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
                "start": 815,
                "end": 818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 820
                }
              ],
              "optional": false,
              "start": 815,
              "end": 821
            },
            "directive": null,
            "start": 815,
            "end": 822
          }
        ],
        "start": 680,
        "end": 824
      },
      "expression": false,
      "start": 663,
      "end": 824
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 835,
        "end": 839
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
          "start": 840,
          "end": 841
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
                    "start": 858,
                    "end": 859
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 862,
                    "end": 863
                  },
                  "definite": false,
                  "start": 858,
                  "end": 863
                }
              ],
              "declare": false,
              "start": 854,
              "end": 863
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 865,
                "end": 866
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 869,
                "end": 870
              },
              "start": 865,
              "end": 870
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
                "start": 874,
                "end": 875
              },
              "start": 872,
              "end": 875
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
                        "start": 891,
                        "end": 892
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 895,
                        "end": 896
                      },
                      "definite": false,
                      "start": 891,
                      "end": 896
                    }
                  ],
                  "declare": false,
                  "start": 887,
                  "end": 897
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
                        "start": 910,
                        "end": 911
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 914,
                        "end": 915
                      },
                      "definite": false,
                      "start": 910,
                      "end": 915
                    }
                  ],
                  "declare": false,
                  "start": 906,
                  "end": 916
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
                              "start": 946,
                              "end": 947
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 950,
                              "end": 951
                            },
                            "start": 946,
                            "end": 951
                          },
                          "start": 939,
                          "end": 951
                        }
                      ],
                      "start": 937,
                      "end": 953
                    },
                    "expression": false,
                    "start": 926,
                    "end": 953
                  },
                  "directive": null,
                  "start": 925,
                  "end": 955
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
                        "start": 971,
                        "end": 972
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 975,
                        "end": 976
                      },
                      "start": 971,
                      "end": 976
                    },
                    "id": null,
                    "generator": false,
                    "start": 965,
                    "end": 976
                  },
                  "directive": null,
                  "start": 964,
                  "end": 978
                }
              ],
              "start": 877,
              "end": 984
            },
            "start": 849,
            "end": 984
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
                "start": 994,
                "end": 997
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 999
                }
              ],
              "optional": false,
              "start": 994,
              "end": 1000
            },
            "directive": null,
            "start": 994,
            "end": 1001
          }
        ],
        "start": 843,
        "end": 1003
      },
      "expression": false,
      "start": 826,
      "end": 1003
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1018
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
          "start": 1019,
          "end": 1020
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
                    "start": 1037,
                    "end": 1038
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1041,
                    "end": 1042
                  },
                  "definite": false,
                  "start": 1037,
                  "end": 1042
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1045
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1048,
                    "end": 1049
                  },
                  "definite": false,
                  "start": 1044,
                  "end": 1049
                }
              ],
              "declare": false,
              "start": 1033,
              "end": 1049
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1052
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1055,
                "end": 1056
              },
              "start": 1051,
              "end": 1056
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
                "start": 1060,
                "end": 1061
              },
              "start": 1058,
              "end": 1061
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
                        "start": 1077,
                        "end": 1078
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1081,
                        "end": 1082
                      },
                      "definite": false,
                      "start": 1077,
                      "end": 1082
                    }
                  ],
                  "declare": false,
                  "start": 1073,
                  "end": 1083
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
                                "start": 1113,
                                "end": 1114
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1117,
                                "end": 1118
                              },
                              "start": 1113,
                              "end": 1118
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1121,
                              "end": 1122
                            },
                            "start": 1113,
                            "end": 1122
                          },
                          "start": 1106,
                          "end": 1122
                        }
                      ],
                      "start": 1104,
                      "end": 1124
                    },
                    "expression": false,
                    "start": 1093,
                    "end": 1124
                  },
                  "directive": null,
                  "start": 1092,
                  "end": 1126
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
                          "start": 1142,
                          "end": 1143
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1146,
                          "end": 1147
                        },
                        "start": 1142,
                        "end": 1147
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1151
                      },
                      "start": 1142,
                      "end": 1151
                    },
                    "id": null,
                    "generator": false,
                    "start": 1136,
                    "end": 1151
                  },
                  "directive": null,
                  "start": 1135,
                  "end": 1153
                }
              ],
              "start": 1063,
              "end": 1159
            },
            "start": 1028,
            "end": 1159
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
                "start": 1169,
                "end": 1172
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1174
                }
              ],
              "optional": false,
              "start": 1169,
              "end": 1175
            },
            "directive": null,
            "start": 1169,
            "end": 1176
          }
        ],
        "start": 1022,
        "end": 1178
      },
      "expression": false,
      "start": 1005,
      "end": 1178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1190,
        "end": 1194
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
          "start": 1195,
          "end": 1196
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
                "start": 1211,
                "end": 1212
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1217,
                "end": 1218
              },
              "start": 1211,
              "end": 1218
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
                        "start": 1234,
                        "end": 1235
                      },
                      "init": null,
                      "definite": false,
                      "start": 1234,
                      "end": 1235
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1237,
                        "end": 1238
                      },
                      "init": null,
                      "definite": false,
                      "start": 1237,
                      "end": 1238
                    }
                  ],
                  "declare": false,
                  "start": 1230,
                  "end": 1239
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
                        "start": 1252,
                        "end": 1253
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1256,
                        "end": 1257
                      },
                      "definite": false,
                      "start": 1252,
                      "end": 1257
                    }
                  ],
                  "declare": false,
                  "start": 1248,
                  "end": 1258
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
                                "start": 1288,
                                "end": 1289
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1292,
                                "end": 1293
                              },
                              "start": 1288,
                              "end": 1293
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1296,
                              "end": 1297
                            },
                            "start": 1288,
                            "end": 1297
                          },
                          "start": 1281,
                          "end": 1297
                        }
                      ],
                      "start": 1279,
                      "end": 1299
                    },
                    "expression": false,
                    "start": 1268,
                    "end": 1299
                  },
                  "directive": null,
                  "start": 1267,
                  "end": 1301
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
                          "start": 1317,
                          "end": 1318
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1321,
                          "end": 1322
                        },
                        "start": 1317,
                        "end": 1322
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1325,
                        "end": 1326
                      },
                      "start": 1317,
                      "end": 1326
                    },
                    "id": null,
                    "generator": false,
                    "start": 1311,
                    "end": 1326
                  },
                  "directive": null,
                  "start": 1310,
                  "end": 1328
                }
              ],
              "start": 1220,
              "end": 1334
            },
            "start": 1204,
            "end": 1334
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
                "start": 1344,
                "end": 1347
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1349
                }
              ],
              "optional": false,
              "start": 1344,
              "end": 1350
            },
            "directive": null,
            "start": 1344,
            "end": 1350
          }
        ],
        "start": 1198,
        "end": 1352
      },
      "expression": false,
      "start": 1181,
      "end": 1352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1363,
        "end": 1367
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
          "start": 1368,
          "end": 1369
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
                        "start": 1394,
                        "end": 1395
                      },
                      "init": null,
                      "definite": false,
                      "start": 1394,
                      "end": 1395
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1397,
                        "end": 1398
                      },
                      "init": null,
                      "definite": false,
                      "start": 1397,
                      "end": 1398
                    }
                  ],
                  "declare": false,
                  "start": 1390,
                  "end": 1399
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
                        "start": 1412,
                        "end": 1413
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1416,
                        "end": 1417
                      },
                      "definite": false,
                      "start": 1412,
                      "end": 1417
                    }
                  ],
                  "declare": false,
                  "start": 1408,
                  "end": 1418
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
                                "start": 1448,
                                "end": 1449
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1452,
                                "end": 1453
                              },
                              "start": 1448,
                              "end": 1453
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1456,
                              "end": 1457
                            },
                            "start": 1448,
                            "end": 1457
                          },
                          "start": 1441,
                          "end": 1457
                        }
                      ],
                      "start": 1439,
                      "end": 1459
                    },
                    "expression": false,
                    "start": 1428,
                    "end": 1459
                  },
                  "directive": null,
                  "start": 1427,
                  "end": 1461
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
                          "start": 1477,
                          "end": 1478
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1481,
                          "end": 1482
                        },
                        "start": 1477,
                        "end": 1482
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1485,
                        "end": 1486
                      },
                      "start": 1477,
                      "end": 1486
                    },
                    "id": null,
                    "generator": false,
                    "start": 1471,
                    "end": 1486
                  },
                  "directive": null,
                  "start": 1470,
                  "end": 1488
                }
              ],
              "start": 1380,
              "end": 1494
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1502,
                "end": 1503
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1508,
                "end": 1509
              },
              "start": 1502,
              "end": 1509
            },
            "start": 1377,
            "end": 1511
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
                "start": 1521,
                "end": 1524
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1526
                }
              ],
              "optional": false,
              "start": 1521,
              "end": 1527
            },
            "directive": null,
            "start": 1521,
            "end": 1528
          }
        ],
        "start": 1371,
        "end": 1530
      },
      "expression": false,
      "start": 1354,
      "end": 1530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1542,
        "end": 1546
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
          "start": 1547,
          "end": 1548
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
                    "start": 1565,
                    "end": 1566
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1569,
                    "end": 1570
                  },
                  "definite": false,
                  "start": 1565,
                  "end": 1570
                }
              ],
              "declare": false,
              "start": 1561,
              "end": 1570
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1573
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1576,
                "end": 1577
              },
              "start": 1572,
              "end": 1577
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
                "start": 1581,
                "end": 1582
              },
              "start": 1579,
              "end": 1582
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
                        "start": 1598,
                        "end": 1599
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1602,
                        "end": 1603
                      },
                      "definite": false,
                      "start": 1598,
                      "end": 1603
                    }
                  ],
                  "declare": false,
                  "start": 1594,
                  "end": 1604
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
                        "start": 1617,
                        "end": 1618
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1621,
                        "end": 1622
                      },
                      "definite": false,
                      "start": 1617,
                      "end": 1622
                    }
                  ],
                  "declare": false,
                  "start": 1613,
                  "end": 1623
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
                                "start": 1653,
                                "end": 1654
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1657,
                                "end": 1658
                              },
                              "start": 1653,
                              "end": 1658
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1661,
                              "end": 1662
                            },
                            "start": 1653,
                            "end": 1662
                          },
                          "start": 1646,
                          "end": 1662
                        }
                      ],
                      "start": 1644,
                      "end": 1664
                    },
                    "expression": false,
                    "start": 1633,
                    "end": 1664
                  },
                  "directive": null,
                  "start": 1632,
                  "end": 1666
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
                          "start": 1682,
                          "end": 1683
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1686,
                          "end": 1687
                        },
                        "start": 1682,
                        "end": 1687
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1690,
                        "end": 1691
                      },
                      "start": 1682,
                      "end": 1691
                    },
                    "id": null,
                    "generator": false,
                    "start": 1676,
                    "end": 1691
                  },
                  "directive": null,
                  "start": 1675,
                  "end": 1693
                }
              ],
              "start": 1584,
              "end": 1699
            },
            "start": 1556,
            "end": 1699
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
                "start": 1709,
                "end": 1712
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1713,
                  "end": 1714
                }
              ],
              "optional": false,
              "start": 1709,
              "end": 1715
            },
            "directive": null,
            "start": 1709,
            "end": 1716
          }
        ],
        "start": 1550,
        "end": 1718
      },
      "expression": false,
      "start": 1533,
      "end": 1718
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1745
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
          "start": 1746,
          "end": 1747
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
                    "start": 1766,
                    "end": 1767
                  },
                  "init": null,
                  "definite": false,
                  "start": 1766,
                  "end": 1767
                }
              ],
              "declare": false,
              "start": 1760,
              "end": 1767
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1771,
              "end": 1773
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
                        "start": 1789,
                        "end": 1790
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1793,
                        "end": 1794
                      },
                      "definite": false,
                      "start": 1789,
                      "end": 1794
                    }
                  ],
                  "declare": false,
                  "start": 1785,
                  "end": 1795
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
                              "start": 1825,
                              "end": 1826
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1829,
                              "end": 1830
                            },
                            "start": 1825,
                            "end": 1830
                          },
                          "start": 1818,
                          "end": 1830
                        }
                      ],
                      "start": 1816,
                      "end": 1832
                    },
                    "expression": false,
                    "start": 1805,
                    "end": 1832
                  },
                  "directive": null,
                  "start": 1804,
                  "end": 1834
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
                        "start": 1850,
                        "end": 1851
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1854,
                        "end": 1855
                      },
                      "start": 1850,
                      "end": 1855
                    },
                    "id": null,
                    "generator": false,
                    "start": 1844,
                    "end": 1855
                  },
                  "directive": null,
                  "start": 1843,
                  "end": 1857
                }
              ],
              "start": 1775,
              "end": 1863
            },
            "start": 1755,
            "end": 1863
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
                "start": 1869,
                "end": 1872
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1874
                }
              ],
              "optional": false,
              "start": 1869,
              "end": 1875
            },
            "directive": null,
            "start": 1869,
            "end": 1876
          }
        ],
        "start": 1749,
        "end": 1878
      },
      "expression": false,
      "start": 1730,
      "end": 1878
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1889,
        "end": 1897
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
          "start": 1898,
          "end": 1899
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
                    "start": 1918,
                    "end": 1919
                  },
                  "init": null,
                  "definite": false,
                  "start": 1918,
                  "end": 1919
                }
              ],
              "declare": false,
              "start": 1912,
              "end": 1919
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1923,
              "end": 1925
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
                        "start": 1941,
                        "end": 1942
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1945,
                        "end": 1946
                      },
                      "definite": false,
                      "start": 1941,
                      "end": 1946
                    }
                  ],
                  "declare": false,
                  "start": 1937,
                  "end": 1947
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
                              "start": 1977,
                              "end": 1978
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1981,
                              "end": 1982
                            },
                            "start": 1977,
                            "end": 1982
                          },
                          "start": 1970,
                          "end": 1982
                        }
                      ],
                      "start": 1968,
                      "end": 1984
                    },
                    "expression": false,
                    "start": 1957,
                    "end": 1984
                  },
                  "directive": null,
                  "start": 1956,
                  "end": 1986
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
                        "start": 2002,
                        "end": 2003
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2006,
                        "end": 2007
                      },
                      "start": 2002,
                      "end": 2007
                    },
                    "id": null,
                    "generator": false,
                    "start": 1996,
                    "end": 2007
                  },
                  "directive": null,
                  "start": 1995,
                  "end": 2009
                }
              ],
              "start": 1927,
              "end": 2015
            },
            "start": 1907,
            "end": 2015
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
                "start": 2021,
                "end": 2024
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2025,
                  "end": 2026
                }
              ],
              "optional": false,
              "start": 2021,
              "end": 2027
            },
            "directive": null,
            "start": 2021,
            "end": 2028
          }
        ],
        "start": 1901,
        "end": 2030
      },
      "expression": false,
      "start": 1880,
      "end": 2030
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2041,
        "end": 2047
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
          "start": 2048,
          "end": 2049
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
                    "start": 2068,
                    "end": 2069
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2072,
                    "end": 2073
                  },
                  "definite": false,
                  "start": 2068,
                  "end": 2073
                }
              ],
              "declare": false,
              "start": 2062,
              "end": 2073
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2075,
                "end": 2076
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2079,
                "end": 2080
              },
              "start": 2075,
              "end": 2080
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
                        "start": 2097,
                        "end": 2098
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2101,
                        "end": 2102
                      },
                      "definite": false,
                      "start": 2097,
                      "end": 2102
                    }
                  ],
                  "declare": false,
                  "start": 2093,
                  "end": 2103
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
                              "start": 2133,
                              "end": 2134
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2137,
                              "end": 2138
                            },
                            "start": 2133,
                            "end": 2138
                          },
                          "start": 2126,
                          "end": 2138
                        }
                      ],
                      "start": 2124,
                      "end": 2140
                    },
                    "expression": false,
                    "start": 2113,
                    "end": 2140
                  },
                  "directive": null,
                  "start": 2112,
                  "end": 2142
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
                        "start": 2158,
                        "end": 2159
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2162,
                        "end": 2163
                      },
                      "start": 2158,
                      "end": 2163
                    },
                    "id": null,
                    "generator": false,
                    "start": 2152,
                    "end": 2163
                  },
                  "directive": null,
                  "start": 2151,
                  "end": 2165
                }
              ],
              "start": 2083,
              "end": 2171
            },
            "start": 2057,
            "end": 2171
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
                "start": 2177,
                "end": 2180
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2181,
                  "end": 2182
                }
              ],
              "optional": false,
              "start": 2177,
              "end": 2183
            },
            "directive": null,
            "start": 2177,
            "end": 2184
          }
        ],
        "start": 2051,
        "end": 2186
      },
      "expression": false,
      "start": 2032,
      "end": 2186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2197,
        "end": 2203
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
          "start": 2204,
          "end": 2205
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
                "start": 2220,
                "end": 2221
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2226,
                "end": 2227
              },
              "start": 2220,
              "end": 2227
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
                        "start": 2245,
                        "end": 2246
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2249,
                        "end": 2250
                      },
                      "definite": false,
                      "start": 2245,
                      "end": 2250
                    }
                  ],
                  "declare": false,
                  "start": 2239,
                  "end": 2251
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
                        "start": 2264,
                        "end": 2265
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2268,
                        "end": 2269
                      },
                      "definite": false,
                      "start": 2264,
                      "end": 2269
                    }
                  ],
                  "declare": false,
                  "start": 2260,
                  "end": 2270
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
                              "start": 2300,
                              "end": 2301
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2304,
                              "end": 2305
                            },
                            "start": 2300,
                            "end": 2305
                          },
                          "start": 2293,
                          "end": 2305
                        }
                      ],
                      "start": 2291,
                      "end": 2307
                    },
                    "expression": false,
                    "start": 2280,
                    "end": 2307
                  },
                  "directive": null,
                  "start": 2279,
                  "end": 2309
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
                        "start": 2325,
                        "end": 2326
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2329,
                        "end": 2330
                      },
                      "start": 2325,
                      "end": 2330
                    },
                    "id": null,
                    "generator": false,
                    "start": 2319,
                    "end": 2330
                  },
                  "directive": null,
                  "start": 2318,
                  "end": 2332
                }
              ],
              "start": 2229,
              "end": 2338
            },
            "start": 2213,
            "end": 2338
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
                "start": 2348,
                "end": 2351
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2352,
                  "end": 2353
                }
              ],
              "optional": false,
              "start": 2348,
              "end": 2354
            },
            "directive": null,
            "start": 2348,
            "end": 2355
          }
        ],
        "start": 2207,
        "end": 2357
      },
      "expression": false,
      "start": 2188,
      "end": 2357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2368,
        "end": 2374
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
          "start": 2375,
          "end": 2376
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
                        "start": 2403,
                        "end": 2404
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2407,
                        "end": 2408
                      },
                      "definite": false,
                      "start": 2403,
                      "end": 2408
                    }
                  ],
                  "declare": false,
                  "start": 2397,
                  "end": 2409
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
                        "start": 2422,
                        "end": 2423
                      },
                      "init": null,
                      "definite": false,
                      "start": 2422,
                      "end": 2423
                    }
                  ],
                  "declare": false,
                  "start": 2418,
                  "end": 2424
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
                              "start": 2454,
                              "end": 2455
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2458,
                              "end": 2459
                            },
                            "start": 2454,
                            "end": 2459
                          },
                          "start": 2447,
                          "end": 2459
                        }
                      ],
                      "start": 2445,
                      "end": 2461
                    },
                    "expression": false,
                    "start": 2434,
                    "end": 2461
                  },
                  "directive": null,
                  "start": 2433,
                  "end": 2463
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
                        "start": 2479,
                        "end": 2480
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2483,
                        "end": 2484
                      },
                      "start": 2479,
                      "end": 2484
                    },
                    "id": null,
                    "generator": false,
                    "start": 2473,
                    "end": 2484
                  },
                  "directive": null,
                  "start": 2472,
                  "end": 2486
                }
              ],
              "start": 2387,
              "end": 2492
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2500,
                "end": 2501
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2506,
                "end": 2507
              },
              "start": 2500,
              "end": 2507
            },
            "start": 2384,
            "end": 2509
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
                "start": 2519,
                "end": 2522
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2523,
                  "end": 2524
                }
              ],
              "optional": false,
              "start": 2519,
              "end": 2525
            },
            "directive": null,
            "start": 2519,
            "end": 2526
          }
        ],
        "start": 2378,
        "end": 2528
      },
      "expression": false,
      "start": 2359,
      "end": 2528
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2539,
        "end": 2545
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
          "start": 2546,
          "end": 2547
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
                    "start": 2566,
                    "end": 2567
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2570,
                    "end": 2571
                  },
                  "definite": false,
                  "start": 2566,
                  "end": 2571
                }
              ],
              "declare": false,
              "start": 2560,
              "end": 2571
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2573,
                "end": 2574
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2577,
                "end": 2578
              },
              "start": 2573,
              "end": 2578
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
                        "start": 2595,
                        "end": 2596
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2599,
                        "end": 2600
                      },
                      "definite": false,
                      "start": 2595,
                      "end": 2600
                    }
                  ],
                  "declare": false,
                  "start": 2591,
                  "end": 2601
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
                        "typeAnnotation": null,
                        "start": 2616,
                        "end": 2617
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2620,
                        "end": 2621
                      },
                      "definite": false,
                      "start": 2616,
                      "end": 2621
                    }
                  ],
                  "declare": false,
                  "start": 2610,
                  "end": 2622
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
                              "start": 2652,
                              "end": 2653
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2656,
                              "end": 2657
                            },
                            "start": 2652,
                            "end": 2657
                          },
                          "start": 2645,
                          "end": 2657
                        }
                      ],
                      "start": 2643,
                      "end": 2659
                    },
                    "expression": false,
                    "start": 2632,
                    "end": 2659
                  },
                  "directive": null,
                  "start": 2631,
                  "end": 2661
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
                        "start": 2677,
                        "end": 2678
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2681,
                        "end": 2682
                      },
                      "start": 2677,
                      "end": 2682
                    },
                    "id": null,
                    "generator": false,
                    "start": 2671,
                    "end": 2682
                  },
                  "directive": null,
                  "start": 2670,
                  "end": 2684
                }
              ],
              "start": 2581,
              "end": 2690
            },
            "start": 2555,
            "end": 2690
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
                "start": 2700,
                "end": 2703
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2704,
                  "end": 2705
                }
              ],
              "optional": false,
              "start": 2700,
              "end": 2706
            },
            "directive": null,
            "start": 2700,
            "end": 2707
          }
        ],
        "start": 2549,
        "end": 2709
      },
      "expression": false,
      "start": 2530,
      "end": 2709
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2720,
        "end": 2726
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
          "start": 2727,
          "end": 2728
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
                    "start": 2747,
                    "end": 2748
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2751,
                    "end": 2752
                  },
                  "definite": false,
                  "start": 2747,
                  "end": 2752
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2754,
                    "end": 2755
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2758,
                    "end": 2759
                  },
                  "definite": false,
                  "start": 2754,
                  "end": 2759
                }
              ],
              "declare": false,
              "start": 2741,
              "end": 2759
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2761,
                "end": 2762
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2765,
                "end": 2766
              },
              "start": 2761,
              "end": 2766
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
                        "start": 2783,
                        "end": 2784
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2787,
                        "end": 2788
                      },
                      "definite": false,
                      "start": 2783,
                      "end": 2788
                    }
                  ],
                  "declare": false,
                  "start": 2779,
                  "end": 2789
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
                                "start": 2819,
                                "end": 2820
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2823,
                                "end": 2824
                              },
                              "start": 2819,
                              "end": 2824
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2827,
                              "end": 2828
                            },
                            "start": 2819,
                            "end": 2828
                          },
                          "start": 2812,
                          "end": 2828
                        }
                      ],
                      "start": 2810,
                      "end": 2830
                    },
                    "expression": false,
                    "start": 2799,
                    "end": 2830
                  },
                  "directive": null,
                  "start": 2798,
                  "end": 2832
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
                          "start": 2848,
                          "end": 2849
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2852,
                          "end": 2853
                        },
                        "start": 2848,
                        "end": 2853
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2856,
                        "end": 2857
                      },
                      "start": 2848,
                      "end": 2857
                    },
                    "id": null,
                    "generator": false,
                    "start": 2842,
                    "end": 2857
                  },
                  "directive": null,
                  "start": 2841,
                  "end": 2859
                }
              ],
              "start": 2769,
              "end": 2865
            },
            "start": 2736,
            "end": 2865
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
                "start": 2875,
                "end": 2878
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2879,
                  "end": 2880
                }
              ],
              "optional": false,
              "start": 2875,
              "end": 2881
            },
            "directive": null,
            "start": 2875,
            "end": 2882
          }
        ],
        "start": 2730,
        "end": 2884
      },
      "expression": false,
      "start": 2711,
      "end": 2884
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2896,
        "end": 2902
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
          "start": 2903,
          "end": 2904
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
                "start": 2919,
                "end": 2920
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2925,
                "end": 2926
              },
              "start": 2919,
              "end": 2926
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
                        "start": 2944,
                        "end": 2945
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2948,
                        "end": 2949
                      },
                      "definite": false,
                      "start": 2944,
                      "end": 2949
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2951,
                        "end": 2952
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2955,
                        "end": 2956
                      },
                      "definite": false,
                      "start": 2951,
                      "end": 2956
                    }
                  ],
                  "declare": false,
                  "start": 2938,
                  "end": 2957
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
                        "start": 2970,
                        "end": 2971
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2974,
                        "end": 2975
                      },
                      "definite": false,
                      "start": 2970,
                      "end": 2975
                    }
                  ],
                  "declare": false,
                  "start": 2966,
                  "end": 2976
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
                                "start": 3006,
                                "end": 3007
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3010,
                                "end": 3011
                              },
                              "start": 3006,
                              "end": 3011
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3014,
                              "end": 3015
                            },
                            "start": 3006,
                            "end": 3015
                          },
                          "start": 2999,
                          "end": 3015
                        }
                      ],
                      "start": 2997,
                      "end": 3017
                    },
                    "expression": false,
                    "start": 2986,
                    "end": 3017
                  },
                  "directive": null,
                  "start": 2985,
                  "end": 3019
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
                          "start": 3035,
                          "end": 3036
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3039,
                          "end": 3040
                        },
                        "start": 3035,
                        "end": 3040
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3043,
                        "end": 3044
                      },
                      "start": 3035,
                      "end": 3044
                    },
                    "id": null,
                    "generator": false,
                    "start": 3029,
                    "end": 3044
                  },
                  "directive": null,
                  "start": 3028,
                  "end": 3046
                }
              ],
              "start": 2928,
              "end": 3052
            },
            "start": 2912,
            "end": 3052
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
                "start": 3062,
                "end": 3065
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3066,
                  "end": 3067
                }
              ],
              "optional": false,
              "start": 3062,
              "end": 3068
            },
            "directive": null,
            "start": 3062,
            "end": 3068
          }
        ],
        "start": 2906,
        "end": 3070
      },
      "expression": false,
      "start": 2887,
      "end": 3070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3081,
        "end": 3087
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
          "start": 3088,
          "end": 3089
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
                        "start": 3116,
                        "end": 3117
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3120,
                        "end": 3121
                      },
                      "definite": false,
                      "start": 3116,
                      "end": 3121
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3123,
                        "end": 3124
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3127,
                        "end": 3128
                      },
                      "definite": false,
                      "start": 3123,
                      "end": 3128
                    }
                  ],
                  "declare": false,
                  "start": 3110,
                  "end": 3129
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
                        "start": 3142,
                        "end": 3143
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3146,
                        "end": 3147
                      },
                      "definite": false,
                      "start": 3142,
                      "end": 3147
                    }
                  ],
                  "declare": false,
                  "start": 3138,
                  "end": 3148
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
                                "start": 3178,
                                "end": 3179
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3182,
                                "end": 3183
                              },
                              "start": 3178,
                              "end": 3183
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3186,
                              "end": 3187
                            },
                            "start": 3178,
                            "end": 3187
                          },
                          "start": 3171,
                          "end": 3187
                        }
                      ],
                      "start": 3169,
                      "end": 3189
                    },
                    "expression": false,
                    "start": 3158,
                    "end": 3189
                  },
                  "directive": null,
                  "start": 3157,
                  "end": 3191
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
                          "start": 3207,
                          "end": 3208
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3211,
                          "end": 3212
                        },
                        "start": 3207,
                        "end": 3212
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3215,
                        "end": 3216
                      },
                      "start": 3207,
                      "end": 3216
                    },
                    "id": null,
                    "generator": false,
                    "start": 3201,
                    "end": 3216
                  },
                  "directive": null,
                  "start": 3200,
                  "end": 3218
                }
              ],
              "start": 3100,
              "end": 3224
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3232,
                "end": 3233
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3238,
                "end": 3239
              },
              "start": 3232,
              "end": 3239
            },
            "start": 3097,
            "end": 3241
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
                "start": 3251,
                "end": 3254
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3255,
                  "end": 3256
                }
              ],
              "optional": false,
              "start": 3251,
              "end": 3257
            },
            "directive": null,
            "start": 3251,
            "end": 3258
          }
        ],
        "start": 3091,
        "end": 3260
      },
      "expression": false,
      "start": 3072,
      "end": 3260
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3272,
        "end": 3278
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
          "start": 3279,
          "end": 3280
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
                    "start": 3299,
                    "end": 3300
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3303,
                    "end": 3304
                  },
                  "definite": false,
                  "start": 3299,
                  "end": 3304
                }
              ],
              "declare": false,
              "start": 3293,
              "end": 3304
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3306,
                "end": 3307
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3310,
                "end": 3311
              },
              "start": 3306,
              "end": 3311
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
                        "start": 3330,
                        "end": 3331
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3334,
                        "end": 3335
                      },
                      "definite": false,
                      "start": 3330,
                      "end": 3335
                    }
                  ],
                  "declare": false,
                  "start": 3324,
                  "end": 3336
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
                        "start": 3349,
                        "end": 3350
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3353,
                        "end": 3354
                      },
                      "definite": false,
                      "start": 3349,
                      "end": 3354
                    }
                  ],
                  "declare": false,
                  "start": 3345,
                  "end": 3355
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
                                "start": 3385,
                                "end": 3386
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3389,
                                "end": 3390
                              },
                              "start": 3385,
                              "end": 3390
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3393,
                              "end": 3394
                            },
                            "start": 3385,
                            "end": 3394
                          },
                          "start": 3378,
                          "end": 3394
                        }
                      ],
                      "start": 3376,
                      "end": 3396
                    },
                    "expression": false,
                    "start": 3365,
                    "end": 3396
                  },
                  "directive": null,
                  "start": 3364,
                  "end": 3398
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
                          "start": 3414,
                          "end": 3415
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3418,
                          "end": 3419
                        },
                        "start": 3414,
                        "end": 3419
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3422,
                        "end": 3423
                      },
                      "start": 3414,
                      "end": 3423
                    },
                    "id": null,
                    "generator": false,
                    "start": 3408,
                    "end": 3423
                  },
                  "directive": null,
                  "start": 3407,
                  "end": 3425
                }
              ],
              "start": 3314,
              "end": 3431
            },
            "start": 3288,
            "end": 3431
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
                "start": 3441,
                "end": 3444
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3445,
                  "end": 3446
                }
              ],
              "optional": false,
              "start": 3441,
              "end": 3447
            },
            "directive": null,
            "start": 3441,
            "end": 3448
          }
        ],
        "start": 3282,
        "end": 3450
      },
      "expression": false,
      "start": 3263,
      "end": 3450
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 3450
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 16,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 24,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 33,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 40,
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
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "foo0",
    "start": 55,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 130,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 159,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 192,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "foo0_1",
    "start": 201,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 265,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 307,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 329,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "function",
    "start": 340,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 386,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 421,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 434,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 463,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 485,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 496,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 505,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 528,
    "end": 531
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 545,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "1",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
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
    "start": 597,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 626,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 663,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 672,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 699,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 714,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 730,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 743,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
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
    "value": "=>",
    "start": 772,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 789,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 798,
    "end": 801
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 826,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 835,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 860,
    "end": 861
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 867,
    "end": 868
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 872,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 887,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": "y",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 906,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 912,
    "end": 913
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 926,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 939,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
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
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 968,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": ";",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 994,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1005,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 1014,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "++",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "(",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1093,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1106,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1139,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1181,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1204,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1268,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1281,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
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
    "value": "=>",
    "start": 1314,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "value": ";",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1354,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1363,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1377,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1390,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "var",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1428,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1441,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1474,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
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
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1495,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1525,
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
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1533,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1542,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1556,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1561,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1574,
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
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1579,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1633,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1646,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1679,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1709,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "foo0_c",
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
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1755,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1760,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1768,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1785,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1805,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1818,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1847,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1869,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1880,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "foo0_1_c",
    "start": 1889,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1912,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1920,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 1937,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1957,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1970,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1999,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2021,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2032,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "foo1_c",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2057,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2062,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2113,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2126,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2155,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2177,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2188,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "foo2_c",
    "start": 2197,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2213,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2222,
    "end": 2225
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2239,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2260,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2280,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2293,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2322,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2348,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2359,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "foo3_c",
    "start": 2368,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2384,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2397,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2418,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2434,
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
    "value": "{",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2447,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2476,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2493,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2502,
    "end": 2505
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2519,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2530,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "foo4_c",
    "start": 2539,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2555,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2560,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "{",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2591,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2610,
    "end": 2615
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2620,
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
    "value": "(",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2632,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2645,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 2674,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2700,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2711,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "foo5_c",
    "start": 2720,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2736,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2741,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2779,
    "end": 2782
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2799,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2812,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2842,
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
    "value": "x",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2854,
    "end": 2855
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
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 2875,
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
    "value": "v",
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
    "value": ";",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2887,
    "end": 2895
  },
  {
    "type": "Identifier",
    "value": "foo6_c",
    "start": 2896,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2912,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2921,
    "end": 2924
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 2938,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2966,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2986,
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
    "value": "{",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2999,
    "end": 3005
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3032,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3062,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3072,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "foo7_c",
    "start": 3081,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 3097,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3110,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3116,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3138,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3158,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3171,
    "end": 3177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3204,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 3225,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3234,
    "end": 3237
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3251,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3263,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "foo8_c",
    "start": 3272,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3288,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3293,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3299,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "{",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3324,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3345,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3365,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3378,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3411,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 3441,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3449,
    "end": 3450
  }
]
```
