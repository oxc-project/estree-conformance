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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "init": null,
                "definite": false,
                "start": 23,
                "end": 24
              }
            ],
            "declare": false,
            "start": 19,
            "end": 25
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 38,
                  "end": 39
                },
                "definite": false,
                "start": 34,
                "end": 39
              }
            ],
            "declare": false,
            "start": 30,
            "end": 40
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 55
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 58,
                    "end": 59
                  },
                  "definite": false,
                  "start": 54,
                  "end": 59
                }
              ],
              "declare": false,
              "start": 50,
              "end": 59
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 62
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 65,
                "end": 67
              },
              "start": 61,
              "end": 67
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
                "start": 69,
                "end": 70
              },
              "start": 69,
              "end": 72
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "start": 84,
                    "end": 90
                  },
                  "directive": null,
                  "start": 84,
                  "end": 91
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 101
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 105,
                      "end": 106
                    },
                    "start": 100,
                    "end": 106
                  },
                  "directive": null,
                  "start": 100,
                  "end": 107
                }
              ],
              "start": 74,
              "end": 113
            },
            "start": 45,
            "end": 113
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
                "start": 122,
                "end": 123
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 17,
                "raw": "17",
                "start": 126,
                "end": 128
              },
              "start": 122,
              "end": 128
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "/=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 140,
                      "end": 141
                    },
                    "right": {
                      "type": "Literal",
                      "value": 9,
                      "raw": "9",
                      "start": 145,
                      "end": 146
                    },
                    "start": 140,
                    "end": 146
                  },
                  "directive": null,
                  "start": 140,
                  "end": 147
                }
              ],
              "start": 130,
              "end": 153
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 170
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 174,
                      "end": 176
                    },
                    "start": 169,
                    "end": 176
                  },
                  "directive": null,
                  "start": 169,
                  "end": 177
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "start": 186,
                    "end": 189
                  },
                  "directive": null,
                  "start": 186,
                  "end": 190
                }
              ],
              "start": 159,
              "end": 196
            },
            "start": 118,
            "end": 196
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 219,
                      "end": 220
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 230,
                      "end": 231
                    },
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 241,
                      "end": 242
                    }
                  ],
                  "start": 209,
                  "end": 248
                },
                "definite": false,
                "start": 205,
                "end": 248
              }
            ],
            "declare": false,
            "start": 201,
            "end": 249
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 261
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 277,
                        "end": 278
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 274,
                      "end": 278
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 289
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 291,
                        "end": 298
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 288,
                      "end": 298
                    }
                  ],
                  "start": 264,
                  "end": 304
                },
                "definite": false,
                "start": 258,
                "end": 304
              }
            ],
            "declare": false,
            "start": 254,
            "end": 305
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 320
                  },
                  "init": null,
                  "definite": false,
                  "start": 319,
                  "end": 320
                }
              ],
              "declare": false,
              "start": 315,
              "end": 320
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 325
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 337,
                        "end": 340
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 341,
                        "end": 342
                      },
                      "optional": false,
                      "computed": false,
                      "start": 337,
                      "end": 342
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 346
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 348
                      },
                      "optional": false,
                      "computed": true,
                      "start": 345,
                      "end": 349
                    },
                    "start": 337,
                    "end": 349
                  },
                  "directive": null,
                  "start": 337,
                  "end": 350
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
                        "start": 363,
                        "end": 364
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 367,
                        "end": 369
                      },
                      "definite": false,
                      "start": 363,
                      "end": 369
                    }
                  ],
                  "declare": false,
                  "start": 359,
                  "end": 370
                }
              ],
              "start": 327,
              "end": 376
            },
            "start": 310,
            "end": 376
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
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
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 398
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "optional": false,
                      "computed": false,
                      "start": 395,
                      "end": 400
                    },
                    "right": {
                      "type": "Literal",
                      "value": "ohhh",
                      "raw": "\"ohhh\"",
                      "start": 403,
                      "end": 409
                    },
                    "start": 395,
                    "end": 409
                  },
                  "directive": null,
                  "start": 395,
                  "end": 410
                }
              ],
              "start": 385,
              "end": 416
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 444
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 446
                        },
                        "optional": false,
                        "computed": false,
                        "start": 441,
                        "end": 446
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 449,
                        "end": 451
                      },
                      "start": 441,
                      "end": 451
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 470
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 472
                              },
                              "optional": false,
                              "computed": false,
                              "start": 467,
                              "end": 472
                            },
                            "right": {
                              "type": "Literal",
                              "value": 12,
                              "raw": "12",
                              "start": 475,
                              "end": 477
                            },
                            "start": 467,
                            "end": 477
                          },
                          "directive": null,
                          "start": 467,
                          "end": 478
                        }
                      ],
                      "start": 453,
                      "end": 488
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
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 508,
                                "end": 511
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "q",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 512,
                                "end": 513
                              },
                              "optional": false,
                              "computed": false,
                              "start": 508,
                              "end": 513
                            },
                            "right": {
                              "type": "Literal",
                              "value": "hmm",
                              "raw": "\"hmm\"",
                              "start": 516,
                              "end": 521
                            },
                            "start": 508,
                            "end": 521
                          },
                          "directive": null,
                          "start": 508,
                          "end": 522
                        }
                      ],
                      "start": 494,
                      "end": 532
                    },
                    "start": 437,
                    "end": 532
                  }
                ],
                "start": 427,
                "end": 538
              },
              "start": 417,
              "end": 538
            },
            "finalizer": null,
            "start": 381,
            "end": 538
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 567,
                      "end": 572
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 563,
                    "end": 574
                  },
                  "start": 557,
                  "end": 575
                }
              ],
              "start": 547,
              "end": 581
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e1",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 591
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 607,
                          "end": 608
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 613
                        },
                        "definite": false,
                        "start": 607,
                        "end": 613
                      }
                    ],
                    "declare": false,
                    "start": 603,
                    "end": 614
                  }
                ],
                "start": 593,
                "end": 620
              },
              "start": 582,
              "end": 620
            },
            "finalizer": {
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 639,
                      "end": 640
                    },
                    "right": {
                      "type": "Literal",
                      "value": 70,
                      "raw": "70",
                      "start": 643,
                      "end": 645
                    },
                    "start": 639,
                    "end": 645
                  },
                  "directive": null,
                  "start": 639,
                  "end": 646
                }
              ],
              "start": 629,
              "end": 652
            },
            "start": 543,
            "end": 652
          },
          {
            "type": "WithStatement",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 666
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
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 678,
                      "end": 679
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 682,
                      "end": 683
                    },
                    "start": 678,
                    "end": 683
                  },
                  "directive": null,
                  "start": 678,
                  "end": 684
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 694
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 697,
                      "end": 699
                    },
                    "start": 693,
                    "end": 699
                  },
                  "directive": null,
                  "start": 693,
                  "end": 700
                }
              ],
              "start": 668,
              "end": 706
            },
            "start": 657,
            "end": 706
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 722
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 724
              },
              "optional": false,
              "computed": false,
              "start": 719,
              "end": 724
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 741,
                  "end": 742
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 758,
                            "end": 759
                          },
                          "start": 758,
                          "end": 761
                        },
                        "directive": null,
                        "start": 758,
                        "end": 762
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 775,
                        "end": 781
                      }
                    ],
                    "start": 744,
                    "end": 792
                  }
                ],
                "start": 736,
                "end": 792
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 806,
                  "end": 807
                },
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "operator": "--",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 823,
                            "end": 824
                          },
                          "start": 823,
                          "end": 826
                        },
                        "directive": null,
                        "start": 823,
                        "end": 827
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 840,
                        "end": 846
                      }
                    ],
                    "start": 809,
                    "end": 857
                  }
                ],
                "start": 801,
                "end": 857
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "*=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 889,
                            "end": 890
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 894,
                            "end": 895
                          },
                          "start": 889,
                          "end": 895
                        },
                        "directive": null,
                        "start": 889,
                        "end": 896
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
                            "start": 909,
                            "end": 910
                          },
                          "right": {
                            "type": "Literal",
                            "value": 50,
                            "raw": "50",
                            "start": 913,
                            "end": 915
                          },
                          "start": 909,
                          "end": 915
                        },
                        "directive": null,
                        "start": 909,
                        "end": 916
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 929,
                        "end": 935
                      }
                    ],
                    "start": 875,
                    "end": 946
                  }
                ],
                "start": 866,
                "end": 946
              }
            ],
            "start": 711,
            "end": 952
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 964,
                "end": 965
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 968,
                "end": 970
              },
              "start": 964,
              "end": 970
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 982,
                      "end": 983
                    },
                    "start": 982,
                    "end": 985
                  },
                  "directive": null,
                  "start": 982,
                  "end": 986
                }
              ],
              "start": 972,
              "end": 992
            },
            "start": 957,
            "end": 992
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1011
                    },
                    "start": 1010,
                    "end": 1013
                  },
                  "directive": null,
                  "start": 1010,
                  "end": 1014
                }
              ],
              "start": 1000,
              "end": 1020
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1028,
                "end": 1029
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1032,
                "end": 1033
              },
              "start": 1028,
              "end": 1033
            },
            "start": 997,
            "end": 1034
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
                "start": 1039,
                "end": 1040
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1043,
                "end": 1044
              },
              "start": 1039,
              "end": 1044
            },
            "directive": null,
            "start": 1039,
            "end": 1045
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1054,
                  "end": 1055
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1059,
                      "end": 1060
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1064,
                      "end": 1065
                    },
                    "start": 1059,
                    "end": 1065
                  },
                  "consequent": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1070
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1073,
                      "end": 1074
                    },
                    "start": 1069,
                    "end": 1074
                  },
                  "alternate": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1077,
                      "end": 1078
                    },
                    "operator": "-",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1081,
                      "end": 1082
                    },
                    "start": 1077,
                    "end": 1082
                  },
                  "start": 1058,
                  "end": 1082
                },
                "definite": false,
                "start": 1054,
                "end": 1082
              }
            ],
            "declare": false,
            "start": 1050,
            "end": 1083
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1090
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1094,
                  "end": 1095
                },
                "start": 1089,
                "end": 1095
              },
              "consequent": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1100
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1103,
                  "end": 1104
                },
                "start": 1099,
                "end": 1104
              },
              "alternate": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1107,
                  "end": 1108
                },
                "operator": "-",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1111,
                  "end": 1112
                },
                "start": 1107,
                "end": 1112
              },
              "start": 1088,
              "end": 1112
            },
            "directive": null,
            "start": 1088,
            "end": 1113
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1118,
                "end": 1119
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1124,
                "end": 1125
              },
              "start": 1118,
              "end": 1125
            },
            "directive": null,
            "start": 1118,
            "end": 1126
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
                "start": 1131,
                "end": 1132
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1135,
                  "end": 1136
                },
                "right": {
                  "type": "Literal",
                  "value": 40,
                  "raw": "40",
                  "start": 1139,
                  "end": 1141
                },
                "start": 1135,
                "end": 1141
              },
              "start": 1131,
              "end": 1141
            },
            "directive": null,
            "start": 1131,
            "end": 1142
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "eval",
                "optional": false,
                "typeAnnotation": null,
                "start": 1147,
                "end": 1151
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "y",
                  "raw": "\"y\"",
                  "start": 1152,
                  "end": 1155
                }
              ],
              "optional": false,
              "start": 1147,
              "end": 1156
            },
            "directive": null,
            "start": 1147,
            "end": 1157
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 1162,
            "end": 1169
          }
        ],
        "start": 13,
        "end": 1171
      },
      "expression": false,
      "start": 0,
      "end": 1171
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1176,
            "end": 1177
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
                        "start": 1202,
                        "end": 1203
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 1206,
                        "end": 1208
                      },
                      "definite": false,
                      "start": 1202,
                      "end": 1208
                    }
                  ],
                  "declare": false,
                  "start": 1198,
                  "end": 1209
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
                      "start": 1214,
                      "end": 1215
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1218,
                        "end": 1219
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1222,
                        "end": 1223
                      },
                      "start": 1218,
                      "end": 1223
                    },
                    "start": 1214,
                    "end": 1223
                  },
                  "directive": null,
                  "start": 1214,
                  "end": 1224
                }
              ],
              "start": 1192,
              "end": 1226
            },
            "expression": false,
            "start": 1180,
            "end": 1226
          },
          "definite": false,
          "start": 1176,
          "end": 1226
        }
      ],
      "declare": false,
      "start": 1172,
      "end": 1227
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
          "start": 1228,
          "end": 1229
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1228,
        "end": 1231
      },
      "directive": null,
      "start": 1228,
      "end": 1232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1232
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
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 19,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 102,
    "end": 104
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "17",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "/=",
    "start": 142,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 171,
    "end": 173
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 201,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 254,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 337,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"ohhh\"",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 417,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 449,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 473,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 475,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "String",
    "value": "\"hmm\"",
    "start": 516,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 543,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 557,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 567,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 582,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 603,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 621,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Numeric",
    "value": "70",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 657,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 663,
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
    "value": "i",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 711,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 736,
    "end": 740
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
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
    "value": "x",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 775,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 801,
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
    "value": ":",
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
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 824,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 840,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 866,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "*=",
    "start": 891,
    "end": 893
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 929,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 957,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 968,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 997,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1021,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1050,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1061,
    "end": 1063
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "?",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1091,
    "end": 1093
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1120,
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
    "type": "Identifier",
    "value": "x",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Numeric",
    "value": "40",
    "start": 1139,
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
    "value": "eval",
    "start": 1147,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1172,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1180,
    "end": 1188
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
    "value": "var",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  }
]
```
