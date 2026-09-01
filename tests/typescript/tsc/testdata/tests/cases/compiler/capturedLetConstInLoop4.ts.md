__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 39
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v0",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 55,
                                  "end": 57
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v00",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 60,
                                  "end": 63
                                },
                                "start": 55,
                                "end": 63
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "v1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 66,
                                "end": 68
                              },
                              "start": 55,
                              "end": 68
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 71,
                              "end": 73
                            },
                            "start": 55,
                            "end": 73
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 76,
                            "end": 78
                          },
                          "start": 55,
                          "end": 78
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 81,
                          "end": 83
                        },
                        "start": 55,
                        "end": 83
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 88
                      },
                      "start": 55,
                      "end": 88
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 93
                    },
                    "start": 55,
                    "end": 93
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 98
                  },
                  "start": 55,
                  "end": 98
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 103
                },
                "start": 55,
                "end": 103
              },
              "start": 48,
              "end": 104
            }
          ],
          "start": 42,
          "end": 106
        },
        "expression": false,
        "start": 19,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12,
      "end": 106
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "init": null,
            "definite": false,
            "start": 117,
            "end": 118
          }
        ],
        "declare": false,
        "start": 113,
        "end": 118
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 122,
        "end": 124
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
                  "name": "v0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 138
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "definite": false,
                "start": 136,
                "end": 142
              }
            ],
            "declare": false,
            "start": 132,
            "end": 143
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
                        "start": 169,
                        "end": 170
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 175
                      },
                      "start": 169,
                      "end": 175
                    },
                    "start": 162,
                    "end": 175
                  }
                ],
                "start": 160,
                "end": 176
              },
              "expression": false,
              "start": 149,
              "end": 176
            },
            "directive": null,
            "start": 148,
            "end": 178
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "id": null,
              "generator": false,
              "start": 184,
              "end": 191
            },
            "directive": null,
            "start": 183,
            "end": 193
          }
        ],
        "start": 126,
        "end": 199
      },
      "start": 108,
      "end": 199
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
            },
            "init": null,
            "definite": false,
            "start": 210,
            "end": 211
          }
        ],
        "declare": false,
        "start": 206,
        "end": 211
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 215,
        "end": 217
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
                  "name": "v00",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 232
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "definite": false,
                "start": 229,
                "end": 236
              }
            ],
            "declare": false,
            "start": 225,
            "end": 237
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
                        "start": 263,
                        "end": 264
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v00",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 267,
                        "end": 270
                      },
                      "start": 263,
                      "end": 270
                    },
                    "start": 256,
                    "end": 270
                  }
                ],
                "start": 254,
                "end": 271
              },
              "expression": false,
              "start": 243,
              "end": 271
            },
            "directive": null,
            "start": 242,
            "end": 273
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "id": null,
              "generator": false,
              "start": 279,
              "end": 286
            },
            "directive": null,
            "start": 278,
            "end": 288
          }
        ],
        "start": 219,
        "end": 294
      },
      "start": 201,
      "end": 294
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 306
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 309,
              "end": 310
            },
            "definite": false,
            "start": 305,
            "end": 310
          }
        ],
        "declare": false,
        "start": 301,
        "end": 310
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 316,
          "end": 317
        },
        "start": 312,
        "end": 317
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
          "start": 321,
          "end": 322
        },
        "start": 319,
        "end": 322
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 336
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 340
                },
                "definite": false,
                "start": 334,
                "end": 340
              }
            ],
            "declare": false,
            "start": 330,
            "end": 341
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
                        "start": 367,
                        "end": 368
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 373
                      },
                      "start": 367,
                      "end": 373
                    },
                    "start": 360,
                    "end": 373
                  }
                ],
                "start": 358,
                "end": 374
              },
              "expression": false,
              "start": 347,
              "end": 374
            },
            "directive": null,
            "start": 346,
            "end": 376
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 389
              },
              "id": null,
              "generator": false,
              "start": 382,
              "end": 389
            },
            "directive": null,
            "start": 381,
            "end": 391
          }
        ],
        "start": 324,
        "end": 393
      },
      "start": 296,
      "end": 393
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 402,
          "end": 403
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 408,
          "end": 409
        },
        "start": 402,
        "end": 409
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
                  "start": 421,
                  "end": 422
                },
                "init": null,
                "definite": false,
                "start": 421,
                "end": 422
              }
            ],
            "declare": false,
            "start": 417,
            "end": 423
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 434
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 438
                },
                "definite": false,
                "start": 432,
                "end": 438
              }
            ],
            "declare": false,
            "start": 428,
            "end": 439
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
                        "start": 465,
                        "end": 466
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 469,
                        "end": 471
                      },
                      "start": 465,
                      "end": 471
                    },
                    "start": 458,
                    "end": 471
                  }
                ],
                "start": 456,
                "end": 472
              },
              "expression": false,
              "start": 445,
              "end": 472
            },
            "directive": null,
            "start": 444,
            "end": 474
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 487
              },
              "id": null,
              "generator": false,
              "start": 480,
              "end": 487
            },
            "directive": null,
            "start": 479,
            "end": 489
          }
        ],
        "start": 411,
        "end": 491
      },
      "start": 395,
      "end": 491
    },
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
                  "start": 506,
                  "end": 507
                },
                "init": null,
                "definite": false,
                "start": 506,
                "end": 507
              }
            ],
            "declare": false,
            "start": 502,
            "end": 508
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 519
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "definite": false,
                "start": 517,
                "end": 523
              }
            ],
            "declare": false,
            "start": 513,
            "end": 524
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
                        "start": 550,
                        "end": 551
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 556
                      },
                      "start": 550,
                      "end": 556
                    },
                    "start": 543,
                    "end": 556
                  }
                ],
                "start": 541,
                "end": 557
              },
              "expression": false,
              "start": 530,
              "end": 557
            },
            "directive": null,
            "start": 529,
            "end": 559
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 572
              },
              "id": null,
              "generator": false,
              "start": 565,
              "end": 572
            },
            "directive": null,
            "start": 564,
            "end": 574
          }
        ],
        "start": 496,
        "end": 576
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 584,
          "end": 585
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 590,
          "end": 591
        },
        "start": 584,
        "end": 591
      },
      "start": 493,
      "end": 592
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 604
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 607,
              "end": 608
            },
            "definite": false,
            "start": 603,
            "end": 608
          }
        ],
        "declare": false,
        "start": 599,
        "end": 608
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 611
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 614,
          "end": 615
        },
        "start": 610,
        "end": 615
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
          "start": 619,
          "end": 620
        },
        "start": 617,
        "end": 620
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
                  "start": 632,
                  "end": 633
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 636,
                  "end": 637
                },
                "definite": false,
                "start": 632,
                "end": 637
              }
            ],
            "declare": false,
            "start": 628,
            "end": 638
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 649
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 652,
                  "end": 653
                },
                "definite": false,
                "start": 647,
                "end": 653
              }
            ],
            "declare": false,
            "start": 643,
            "end": 654
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
                        "start": 680,
                        "end": 681
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 686
                      },
                      "start": 680,
                      "end": 686
                    },
                    "start": 673,
                    "end": 686
                  }
                ],
                "start": 671,
                "end": 687
              },
              "expression": false,
              "start": 660,
              "end": 687
            },
            "directive": null,
            "start": 659,
            "end": 689
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              },
              "id": null,
              "generator": false,
              "start": 695,
              "end": 702
            },
            "directive": null,
            "start": 694,
            "end": 704
          }
        ],
        "start": 622,
        "end": 706
      },
      "start": 594,
      "end": 706
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 718
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 721,
              "end": 722
            },
            "definite": false,
            "start": 717,
            "end": 722
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 725
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 728,
              "end": 729
            },
            "definite": false,
            "start": 724,
            "end": 729
          }
        ],
        "declare": false,
        "start": 713,
        "end": 729
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 731,
          "end": 732
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 735,
          "end": 736
        },
        "start": 731,
        "end": 736
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
          "start": 740,
          "end": 741
        },
        "start": 738,
        "end": 741
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 755
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 759
                },
                "definite": false,
                "start": 753,
                "end": 759
              }
            ],
            "declare": false,
            "start": 749,
            "end": 760
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
                          "start": 786,
                          "end": 787
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 790,
                          "end": 791
                        },
                        "start": 786,
                        "end": 791
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 796
                      },
                      "start": 786,
                      "end": 796
                    },
                    "start": 779,
                    "end": 796
                  }
                ],
                "start": 777,
                "end": 797
              },
              "expression": false,
              "start": 766,
              "end": 797
            },
            "directive": null,
            "start": 765,
            "end": 799
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
                  "start": 811,
                  "end": 812
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 816
                },
                "start": 811,
                "end": 816
              },
              "id": null,
              "generator": false,
              "start": 805,
              "end": 816
            },
            "directive": null,
            "start": 804,
            "end": 818
          }
        ],
        "start": 743,
        "end": 820
      },
      "start": 708,
      "end": 820
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 829,
          "end": 830
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 835,
          "end": 836
        },
        "start": 829,
        "end": 836
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
                  "start": 848,
                  "end": 849
                },
                "init": null,
                "definite": false,
                "start": 848,
                "end": 849
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 852
                },
                "init": null,
                "definite": false,
                "start": 851,
                "end": 852
              }
            ],
            "declare": false,
            "start": 844,
            "end": 853
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
                  "name": "v6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 864
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 867,
                  "end": 868
                },
                "definite": false,
                "start": 862,
                "end": 868
              }
            ],
            "declare": false,
            "start": 858,
            "end": 869
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
                          "start": 895,
                          "end": 896
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 899,
                          "end": 900
                        },
                        "start": 895,
                        "end": 900
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 903,
                        "end": 905
                      },
                      "start": 895,
                      "end": 905
                    },
                    "start": 888,
                    "end": 905
                  }
                ],
                "start": 886,
                "end": 906
              },
              "expression": false,
              "start": 875,
              "end": 906
            },
            "directive": null,
            "start": 874,
            "end": 908
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
                  "start": 920,
                  "end": 921
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 925
                },
                "start": 920,
                "end": 925
              },
              "id": null,
              "generator": false,
              "start": 914,
              "end": 925
            },
            "directive": null,
            "start": 913,
            "end": 927
          }
        ],
        "start": 838,
        "end": 929
      },
      "start": 822,
      "end": 929
    },
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
                  "start": 944,
                  "end": 945
                },
                "init": null,
                "definite": false,
                "start": 944,
                "end": 945
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 947,
                  "end": 948
                },
                "init": null,
                "definite": false,
                "start": 947,
                "end": 948
              }
            ],
            "declare": false,
            "start": 940,
            "end": 949
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
                  "name": "v7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 960
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 963,
                  "end": 964
                },
                "definite": false,
                "start": 958,
                "end": 964
              }
            ],
            "declare": false,
            "start": 954,
            "end": 965
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
                          "start": 991,
                          "end": 992
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 995,
                          "end": 996
                        },
                        "start": 991,
                        "end": 996
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 999,
                        "end": 1001
                      },
                      "start": 991,
                      "end": 1001
                    },
                    "start": 984,
                    "end": 1001
                  }
                ],
                "start": 982,
                "end": 1002
              },
              "expression": false,
              "start": 971,
              "end": 1002
            },
            "directive": null,
            "start": 970,
            "end": 1004
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
                  "start": 1016,
                  "end": 1017
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1020,
                  "end": 1021
                },
                "start": 1016,
                "end": 1021
              },
              "id": null,
              "generator": false,
              "start": 1010,
              "end": 1021
            },
            "directive": null,
            "start": 1009,
            "end": 1023
          }
        ],
        "start": 934,
        "end": 1025
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1033,
          "end": 1034
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1039,
          "end": 1040
        },
        "start": 1033,
        "end": 1040
      },
      "start": 931,
      "end": 1041
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1053
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1056,
              "end": 1057
            },
            "definite": false,
            "start": 1052,
            "end": 1057
          }
        ],
        "declare": false,
        "start": 1048,
        "end": 1057
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1059,
          "end": 1060
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1063,
          "end": 1064
        },
        "start": 1059,
        "end": 1064
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
          "start": 1068,
          "end": 1069
        },
        "start": 1066,
        "end": 1069
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
                  "start": 1081,
                  "end": 1082
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1085,
                  "end": 1086
                },
                "definite": false,
                "start": 1081,
                "end": 1086
              }
            ],
            "declare": false,
            "start": 1077,
            "end": 1087
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
                  "name": "v8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1098
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1102
                },
                "definite": false,
                "start": 1096,
                "end": 1102
              }
            ],
            "declare": false,
            "start": 1092,
            "end": 1103
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
                          "start": 1129,
                          "end": 1130
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1133,
                          "end": 1134
                        },
                        "start": 1129,
                        "end": 1134
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v8",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1137,
                        "end": 1139
                      },
                      "start": 1129,
                      "end": 1139
                    },
                    "start": 1122,
                    "end": 1139
                  }
                ],
                "start": 1120,
                "end": 1140
              },
              "expression": false,
              "start": 1109,
              "end": 1140
            },
            "directive": null,
            "start": 1108,
            "end": 1142
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
                  "start": 1154,
                  "end": 1155
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1159
                },
                "start": 1154,
                "end": 1159
              },
              "id": null,
              "generator": false,
              "start": 1148,
              "end": 1159
            },
            "directive": null,
            "start": 1147,
            "end": 1161
          }
        ],
        "start": 1071,
        "end": 1163
      },
      "start": 1043,
      "end": 1163
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFoo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1207
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v0_c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1223,
                                  "end": 1227
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v00_c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1230,
                                  "end": 1235
                                },
                                "start": 1223,
                                "end": 1235
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "v1_c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1238,
                                "end": 1242
                              },
                              "start": 1223,
                              "end": 1242
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v2_c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1245,
                              "end": 1249
                            },
                            "start": 1223,
                            "end": 1249
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v3_c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1252,
                            "end": 1256
                          },
                          "start": 1223,
                          "end": 1256
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v4_c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1259,
                          "end": 1263
                        },
                        "start": 1223,
                        "end": 1263
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1266,
                        "end": 1270
                      },
                      "start": 1223,
                      "end": 1270
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v6_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1273,
                      "end": 1277
                    },
                    "start": 1223,
                    "end": 1277
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v7_c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1284
                  },
                  "start": 1223,
                  "end": 1284
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v8_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1291
                },
                "start": 1223,
                "end": 1291
              },
              "start": 1216,
              "end": 1292
            }
          ],
          "start": 1210,
          "end": 1294
        },
        "expression": false,
        "start": 1186,
        "end": 1294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1179,
      "end": 1294
    },
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
              "start": 1307,
              "end": 1308
            },
            "init": null,
            "definite": false,
            "start": 1307,
            "end": 1308
          }
        ],
        "declare": false,
        "start": 1301,
        "end": 1308
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1312,
        "end": 1314
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
                  "name": "v0_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1330
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1334
                },
                "definite": false,
                "start": 1326,
                "end": 1334
              }
            ],
            "declare": false,
            "start": 1322,
            "end": 1335
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
                        "start": 1361,
                        "end": 1362
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v0_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1365,
                        "end": 1369
                      },
                      "start": 1361,
                      "end": 1369
                    },
                    "start": 1354,
                    "end": 1369
                  }
                ],
                "start": 1352,
                "end": 1370
              },
              "expression": false,
              "start": 1341,
              "end": 1370
            },
            "directive": null,
            "start": 1340,
            "end": 1372
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1384,
                "end": 1385
              },
              "id": null,
              "generator": false,
              "start": 1378,
              "end": 1385
            },
            "directive": null,
            "start": 1377,
            "end": 1387
          }
        ],
        "start": 1316,
        "end": 1393
      },
      "start": 1296,
      "end": 1393
    },
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
              "start": 1406,
              "end": 1407
            },
            "init": null,
            "definite": false,
            "start": 1406,
            "end": 1407
          }
        ],
        "declare": false,
        "start": 1400,
        "end": 1407
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1411,
        "end": 1413
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
                  "name": "v00_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1430
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1434
                },
                "definite": false,
                "start": 1425,
                "end": 1434
              }
            ],
            "declare": false,
            "start": 1421,
            "end": 1435
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
                        "start": 1461,
                        "end": 1462
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v00",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1465,
                        "end": 1468
                      },
                      "start": 1461,
                      "end": 1468
                    },
                    "start": 1454,
                    "end": 1468
                  }
                ],
                "start": 1452,
                "end": 1469
              },
              "expression": false,
              "start": 1441,
              "end": 1469
            },
            "directive": null,
            "start": 1440,
            "end": 1471
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1483,
                "end": 1484
              },
              "id": null,
              "generator": false,
              "start": 1477,
              "end": 1484
            },
            "directive": null,
            "start": 1476,
            "end": 1486
          }
        ],
        "start": 1415,
        "end": 1492
      },
      "start": 1395,
      "end": 1492
    },
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
              "start": 1505,
              "end": 1506
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1509,
              "end": 1510
            },
            "definite": false,
            "start": 1505,
            "end": 1510
          }
        ],
        "declare": false,
        "start": 1499,
        "end": 1510
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1512,
          "end": 1513
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1516,
          "end": 1517
        },
        "start": 1512,
        "end": 1517
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
                  "name": "v1_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1530,
                  "end": 1534
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1537,
                  "end": 1538
                },
                "definite": false,
                "start": 1530,
                "end": 1538
              }
            ],
            "declare": false,
            "start": 1526,
            "end": 1539
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
                        "start": 1565,
                        "end": 1566
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v1_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1569,
                        "end": 1573
                      },
                      "start": 1565,
                      "end": 1573
                    },
                    "start": 1558,
                    "end": 1573
                  }
                ],
                "start": 1556,
                "end": 1574
              },
              "expression": false,
              "start": 1545,
              "end": 1574
            },
            "directive": null,
            "start": 1544,
            "end": 1576
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1589
              },
              "id": null,
              "generator": false,
              "start": 1582,
              "end": 1589
            },
            "directive": null,
            "start": 1581,
            "end": 1591
          }
        ],
        "start": 1520,
        "end": 1593
      },
      "start": 1494,
      "end": 1593
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1602,
          "end": 1603
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1608,
          "end": 1609
        },
        "start": 1602,
        "end": 1609
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
                  "start": 1623,
                  "end": 1624
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1626,
                  "end": 1627
                },
                "definite": false,
                "start": 1623,
                "end": 1627
              }
            ],
            "declare": false,
            "start": 1617,
            "end": 1628
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
                  "name": "v2_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1637,
                  "end": 1641
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1644,
                  "end": 1645
                },
                "definite": false,
                "start": 1637,
                "end": 1645
              }
            ],
            "declare": false,
            "start": 1633,
            "end": 1646
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
                        "start": 1672,
                        "end": 1673
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v2_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1680
                      },
                      "start": 1672,
                      "end": 1680
                    },
                    "start": 1665,
                    "end": 1680
                  }
                ],
                "start": 1663,
                "end": 1681
              },
              "expression": false,
              "start": 1652,
              "end": 1681
            },
            "directive": null,
            "start": 1651,
            "end": 1683
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1695,
                "end": 1696
              },
              "id": null,
              "generator": false,
              "start": 1689,
              "end": 1696
            },
            "directive": null,
            "start": 1688,
            "end": 1698
          }
        ],
        "start": 1611,
        "end": 1700
      },
      "start": 1595,
      "end": 1700
    },
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
                  "start": 1717,
                  "end": 1718
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1721,
                  "end": 1722
                },
                "definite": false,
                "start": 1717,
                "end": 1722
              }
            ],
            "declare": false,
            "start": 1711,
            "end": 1723
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
                  "name": "v3_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1732,
                  "end": 1736
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1739,
                  "end": 1740
                },
                "definite": false,
                "start": 1732,
                "end": 1740
              }
            ],
            "declare": false,
            "start": 1728,
            "end": 1741
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
                        "start": 1767,
                        "end": 1768
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v3_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1771,
                        "end": 1775
                      },
                      "start": 1767,
                      "end": 1775
                    },
                    "start": 1760,
                    "end": 1775
                  }
                ],
                "start": 1758,
                "end": 1776
              },
              "expression": false,
              "start": 1747,
              "end": 1776
            },
            "directive": null,
            "start": 1746,
            "end": 1778
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1790,
                "end": 1791
              },
              "id": null,
              "generator": false,
              "start": 1784,
              "end": 1791
            },
            "directive": null,
            "start": 1783,
            "end": 1793
          }
        ],
        "start": 1705,
        "end": 1795
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1803,
          "end": 1804
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1809,
          "end": 1810
        },
        "start": 1803,
        "end": 1810
      },
      "start": 1702,
      "end": 1811
    },
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
              "start": 1824,
              "end": 1825
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1828,
              "end": 1829
            },
            "definite": false,
            "start": 1824,
            "end": 1829
          }
        ],
        "declare": false,
        "start": 1818,
        "end": 1829
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1831,
          "end": 1832
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1835,
          "end": 1836
        },
        "start": 1831,
        "end": 1836
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
                  "start": 1851,
                  "end": 1852
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1855,
                  "end": 1856
                },
                "definite": false,
                "start": 1851,
                "end": 1856
              }
            ],
            "declare": false,
            "start": 1845,
            "end": 1857
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
                  "name": "v4_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1866,
                  "end": 1870
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1874
                },
                "definite": false,
                "start": 1866,
                "end": 1874
              }
            ],
            "declare": false,
            "start": 1862,
            "end": 1875
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
                        "start": 1901,
                        "end": 1902
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v4_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1905,
                        "end": 1909
                      },
                      "start": 1901,
                      "end": 1909
                    },
                    "start": 1894,
                    "end": 1909
                  }
                ],
                "start": 1892,
                "end": 1910
              },
              "expression": false,
              "start": 1881,
              "end": 1910
            },
            "directive": null,
            "start": 1880,
            "end": 1912
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1925
              },
              "id": null,
              "generator": false,
              "start": 1918,
              "end": 1925
            },
            "directive": null,
            "start": 1917,
            "end": 1927
          }
        ],
        "start": 1839,
        "end": 1929
      },
      "start": 1813,
      "end": 1929
    },
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
              "start": 1942,
              "end": 1943
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1946,
              "end": 1947
            },
            "definite": false,
            "start": 1942,
            "end": 1947
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1949,
              "end": 1950
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1953,
              "end": 1954
            },
            "definite": false,
            "start": 1949,
            "end": 1954
          }
        ],
        "declare": false,
        "start": 1936,
        "end": 1954
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1956,
          "end": 1957
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1960,
          "end": 1961
        },
        "start": 1956,
        "end": 1961
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
                  "name": "v5_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1974,
                  "end": 1978
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1981,
                  "end": 1982
                },
                "definite": false,
                "start": 1974,
                "end": 1982
              }
            ],
            "declare": false,
            "start": 1970,
            "end": 1983
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
                          "start": 2009,
                          "end": 2010
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2013,
                          "end": 2014
                        },
                        "start": 2009,
                        "end": 2014
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2017,
                        "end": 2021
                      },
                      "start": 2009,
                      "end": 2021
                    },
                    "start": 2002,
                    "end": 2021
                  }
                ],
                "start": 2000,
                "end": 2022
              },
              "expression": false,
              "start": 1989,
              "end": 2022
            },
            "directive": null,
            "start": 1988,
            "end": 2024
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
                  "start": 2036,
                  "end": 2037
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2040,
                  "end": 2041
                },
                "start": 2036,
                "end": 2041
              },
              "id": null,
              "generator": false,
              "start": 2030,
              "end": 2041
            },
            "directive": null,
            "start": 2029,
            "end": 2043
          }
        ],
        "start": 1964,
        "end": 2045
      },
      "start": 1931,
      "end": 2045
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2054,
          "end": 2055
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2060,
          "end": 2061
        },
        "start": 2054,
        "end": 2061
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
                  "start": 2075,
                  "end": 2076
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2079,
                  "end": 2080
                },
                "definite": false,
                "start": 2075,
                "end": 2080
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2083
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2086,
                  "end": 2087
                },
                "definite": false,
                "start": 2082,
                "end": 2087
              }
            ],
            "declare": false,
            "start": 2069,
            "end": 2088
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
                  "name": "v6_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2097,
                  "end": 2101
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2105
                },
                "definite": false,
                "start": 2097,
                "end": 2105
              }
            ],
            "declare": false,
            "start": 2093,
            "end": 2106
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
                          "start": 2132,
                          "end": 2133
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2136,
                          "end": 2137
                        },
                        "start": 2132,
                        "end": 2137
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v6_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2140,
                        "end": 2144
                      },
                      "start": 2132,
                      "end": 2144
                    },
                    "start": 2125,
                    "end": 2144
                  }
                ],
                "start": 2123,
                "end": 2145
              },
              "expression": false,
              "start": 2112,
              "end": 2145
            },
            "directive": null,
            "start": 2111,
            "end": 2147
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
                  "start": 2159,
                  "end": 2160
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2163,
                  "end": 2164
                },
                "start": 2159,
                "end": 2164
              },
              "id": null,
              "generator": false,
              "start": 2153,
              "end": 2164
            },
            "directive": null,
            "start": 2152,
            "end": 2166
          }
        ],
        "start": 2063,
        "end": 2168
      },
      "start": 2047,
      "end": 2168
    },
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
                  "start": 2185,
                  "end": 2186
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2189,
                  "end": 2190
                },
                "definite": false,
                "start": 2185,
                "end": 2190
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2192,
                  "end": 2193
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2196,
                  "end": 2197
                },
                "definite": false,
                "start": 2192,
                "end": 2197
              }
            ],
            "declare": false,
            "start": 2179,
            "end": 2198
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
                  "name": "v7_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2207,
                  "end": 2211
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2214,
                  "end": 2215
                },
                "definite": false,
                "start": 2207,
                "end": 2215
              }
            ],
            "declare": false,
            "start": 2203,
            "end": 2216
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
                          "start": 2242,
                          "end": 2243
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2246,
                          "end": 2247
                        },
                        "start": 2242,
                        "end": 2247
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v7_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2250,
                        "end": 2254
                      },
                      "start": 2242,
                      "end": 2254
                    },
                    "start": 2235,
                    "end": 2254
                  }
                ],
                "start": 2233,
                "end": 2255
              },
              "expression": false,
              "start": 2222,
              "end": 2255
            },
            "directive": null,
            "start": 2221,
            "end": 2257
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
                  "start": 2269,
                  "end": 2270
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2273,
                  "end": 2274
                },
                "start": 2269,
                "end": 2274
              },
              "id": null,
              "generator": false,
              "start": 2263,
              "end": 2274
            },
            "directive": null,
            "start": 2262,
            "end": 2276
          }
        ],
        "start": 2173,
        "end": 2278
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2286,
          "end": 2287
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2292,
          "end": 2293
        },
        "start": 2286,
        "end": 2293
      },
      "start": 2170,
      "end": 2294
    },
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
              "start": 2307,
              "end": 2308
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2311,
              "end": 2312
            },
            "definite": false,
            "start": 2307,
            "end": 2312
          }
        ],
        "declare": false,
        "start": 2301,
        "end": 2312
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 2314,
          "end": 2315
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2318,
          "end": 2319
        },
        "start": 2314,
        "end": 2319
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
                  "start": 2334,
                  "end": 2335
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2338,
                  "end": 2339
                },
                "definite": false,
                "start": 2334,
                "end": 2339
              }
            ],
            "declare": false,
            "start": 2328,
            "end": 2340
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
                  "name": "v8_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2349,
                  "end": 2353
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2356,
                  "end": 2357
                },
                "definite": false,
                "start": 2349,
                "end": 2357
              }
            ],
            "declare": false,
            "start": 2345,
            "end": 2358
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
                          "start": 2384,
                          "end": 2385
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2388,
                          "end": 2389
                        },
                        "start": 2384,
                        "end": 2389
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v8_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2392,
                        "end": 2396
                      },
                      "start": 2384,
                      "end": 2396
                    },
                    "start": 2377,
                    "end": 2396
                  }
                ],
                "start": 2375,
                "end": 2397
              },
              "expression": false,
              "start": 2364,
              "end": 2397
            },
            "directive": null,
            "start": 2363,
            "end": 2399
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
                  "start": 2411,
                  "end": 2412
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2415,
                  "end": 2416
                },
                "start": 2411,
                "end": 2416
              },
              "id": null,
              "generator": false,
              "start": 2405,
              "end": 2416
            },
            "directive": null,
            "start": 2404,
            "end": 2418
          }
        ],
        "start": 2322,
        "end": 2420
      },
      "start": 2296,
      "end": 2420
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 12,
  "end": 2420
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 12,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 28,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "v0",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "v0",
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 162,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "v0",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 187,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 206,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 243,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 256,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
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
    "value": "=>",
    "start": 282,
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
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 301,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 319,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
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
    "value": "return",
    "start": 360,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 385,
    "end": 387
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
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 404,
    "end": 407
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 417,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 428,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 458,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 483,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 513,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 543,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 554,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 568,
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
    "value": ")",
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
    "value": "}",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 586,
    "end": 589
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 599,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 617,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 628,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 643,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 660,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 673,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 684,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 698,
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
    "value": "for",
    "start": 708,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 713,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "x",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Punctuator",
    "value": "++",
    "start": 738,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 766,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 779,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 794,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 808,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 822,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 831,
    "end": 834
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 844,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 858,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 862,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 875,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 888,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 903,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 917,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 940,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "var",
    "start": 954,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 971,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 984,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 999,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1066,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "let",
    "start": 1077,
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
    "value": "=",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1092,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 1096,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1109,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1122,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 1137,
    "end": 1139
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
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1179,
    "end": 1185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1186,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "exportedFoo2",
    "start": 1195,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "v0_c",
    "start": 1223,
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
    "value": "v00_c",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "v1_c",
    "start": 1238,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "v2_c",
    "start": 1245,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "v3_c",
    "start": 1252,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "v4_c",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "v5_c",
    "start": 1266,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "v6_c",
    "start": 1273,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "v7_c",
    "start": 1280,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "v8_c",
    "start": 1287,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1301,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1322,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "v0_c",
    "start": 1326,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1341,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1354,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "v0_c",
    "start": 1365,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1395,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1400,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1408,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1421,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "v00_c",
    "start": 1425,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1441,
    "end": 1449
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
    "value": "return",
    "start": 1454,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 1465,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1480,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1499,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "x",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1526,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "v1_c",
    "start": 1530,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1545,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1558,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "v1_c",
    "start": 1569,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1585,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1595,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "{",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1617,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1633,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "v2_c",
    "start": 1637,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1652,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1665,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "v2_c",
    "start": 1676,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1692,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1711,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1728,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "v3_c",
    "start": 1732,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1747,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1760,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "v3_c",
    "start": 1771,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "(",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "=>",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1796,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1805,
    "end": 1808
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
    "type": "Keyword",
    "value": "for",
    "start": 1813,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1818,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "y",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1845,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "var",
    "start": 1862,
    "end": 1865
  },
  {
    "type": "Identifier",
    "value": "v4_c",
    "start": 1866,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "(",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1881,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1894,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "v4_c",
    "start": 1905,
    "end": 1909
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
    "value": ";",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1917,
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
    "value": ")",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1921,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
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
    "value": "for",
    "start": 1931,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1936,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1970,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "v5_c",
    "start": 1974,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1989,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2002,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "v5_c",
    "start": 2017,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2033,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2047,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2056,
    "end": 2059
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2069,
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
    "value": "=",
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
    "value": ",",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2093,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "v6_c",
    "start": 2097,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2112,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2125,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "v6_c",
    "start": 2140,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "(",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2156,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2170,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2179,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2203,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "v7_c",
    "start": 2207,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2222,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2235,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "v7_c",
    "start": 2250,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2266,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2288,
    "end": 2291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2301,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "y",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "{",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2328,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2345,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "v8_c",
    "start": 2349,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2364,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2377,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "v8_c",
    "start": 2392,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2408,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2419,
    "end": 2420
  }
]
```
