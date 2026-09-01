__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              },
              "start": 8,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "len",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 39,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 64
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 71
              },
              "optional": false,
              "computed": false,
              "start": 63,
              "end": 71
            },
            "start": 56,
            "end": 72
          }
        ],
        "start": 50,
        "end": 74
      },
      "expression": false,
      "start": 20,
      "end": 74
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
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
                          "start": 109,
                          "end": 115
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 127,
                          "end": 134
                        }
                      ],
                      "start": 109,
                      "end": 134
                    },
                    "start": 107,
                    "end": 134
                  },
                  "start": 106,
                  "end": 134
                },
                "init": null,
                "definite": false,
                "start": 106,
                "end": 134
              }
            ],
            "declare": false,
            "start": 102,
            "end": 135
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
                "start": 140,
                "end": 141
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 144,
                "end": 146
              },
              "start": 140,
              "end": 146
            },
            "directive": null,
            "start": 140,
            "end": 147
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 163
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
                      "start": 175,
                      "end": 176
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 188
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 189,
                            "end": 190
                          }
                        ],
                        "optional": false,
                        "start": 185,
                        "end": 191
                      },
                      "start": 179,
                      "end": 191
                    },
                    "start": 175,
                    "end": 191
                  },
                  "directive": null,
                  "start": 175,
                  "end": 192
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 202
                  },
                  "directive": null,
                  "start": 201,
                  "end": 203
                }
              ],
              "start": 165,
              "end": 209
            },
            "start": 152,
            "end": 209
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "directive": null,
            "start": 214,
            "end": 216
          }
        ],
        "start": 96,
        "end": 218
      },
      "expression": false,
      "start": 76,
      "end": 218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 237
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
                          "start": 253,
                          "end": 259
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 262,
                          "end": 268
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 271,
                          "end": 278
                        }
                      ],
                      "start": 253,
                      "end": 278
                    },
                    "start": 251,
                    "end": 278
                  },
                  "start": 250,
                  "end": 278
                },
                "init": null,
                "definite": false,
                "start": 250,
                "end": 278
              }
            ],
            "declare": false,
            "start": 246,
            "end": 279
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
                "start": 284,
                "end": 285
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 288,
                "end": 290
              },
              "start": 284,
              "end": 290
            },
            "directive": null,
            "start": 284,
            "end": 291
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 307
            },
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
                    "start": 319,
                    "end": 320
                  },
                  "directive": null,
                  "start": 319,
                  "end": 321
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
                      "start": 330,
                      "end": 331
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "len",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 340,
                          "end": 343
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 345
                          }
                        ],
                        "optional": false,
                        "start": 340,
                        "end": 346
                      },
                      "start": 334,
                      "end": 346
                    },
                    "start": 330,
                    "end": 346
                  },
                  "directive": null,
                  "start": 330,
                  "end": 347
                }
              ],
              "start": 309,
              "end": 353
            },
            "start": 296,
            "end": 353
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 359
            },
            "directive": null,
            "start": 358,
            "end": 360
          }
        ],
        "start": 240,
        "end": 362
      },
      "expression": false,
      "start": 220,
      "end": 362
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 384
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 388,
              "end": 394
            },
            "start": 386,
            "end": 394
          },
          "start": 385,
          "end": 394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 404
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 405,
                "end": 411
              }
            ],
            "start": 404,
            "end": 412
          },
          "start": 397,
          "end": 412
        },
        "start": 395,
        "end": 412
      },
      "body": null,
      "expression": false,
      "start": 364,
      "end": 413
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 434
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 438,
              "end": 444
            },
            "start": 436,
            "end": 444
          },
          "start": 435,
          "end": 444
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 454
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 455,
                "end": 461
              }
            ],
            "start": 454,
            "end": 462
          },
          "start": 447,
          "end": 462
        },
        "start": 445,
        "end": 462
      },
      "body": null,
      "expression": false,
      "start": 414,
      "end": 463
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 482
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
                          "start": 498,
                          "end": 504
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 507,
                          "end": 513
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 516,
                          "end": 523
                        }
                      ],
                      "start": 498,
                      "end": 523
                    },
                    "start": 496,
                    "end": 523
                  },
                  "start": 495,
                  "end": 523
                },
                "init": null,
                "definite": false,
                "start": 495,
                "end": 523
              }
            ],
            "declare": false,
            "start": 491,
            "end": 524
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
                "start": 529,
                "end": 530
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 533,
                "end": 535
              },
              "start": 529,
              "end": 535
            },
            "directive": null,
            "start": 529,
            "end": 536
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 552
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
                      "start": 564,
                      "end": 565
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 577
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 578,
                            "end": 579
                          }
                        ],
                        "optional": false,
                        "start": 574,
                        "end": 580
                      },
                      "start": 568,
                      "end": 580
                    },
                    "start": 564,
                    "end": 580
                  },
                  "directive": null,
                  "start": 564,
                  "end": 581
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 590,
                    "end": 591
                  },
                  "directive": null,
                  "start": 590,
                  "end": 592
                }
              ],
              "start": 554,
              "end": 598
            },
            "start": 541,
            "end": 598
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 604
            },
            "directive": null,
            "start": 603,
            "end": 605
          }
        ],
        "start": 485,
        "end": 607
      },
      "expression": false,
      "start": 465,
      "end": 607
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 624,
        "end": 626
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
                          "start": 642,
                          "end": 648
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 651,
                          "end": 657
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 660,
                          "end": 667
                        }
                      ],
                      "start": 642,
                      "end": 667
                    },
                    "start": 640,
                    "end": 667
                  },
                  "start": 639,
                  "end": 667
                },
                "init": null,
                "definite": false,
                "start": 639,
                "end": 667
              }
            ],
            "declare": false,
            "start": 635,
            "end": 668
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
                "start": 673,
                "end": 674
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 677,
                "end": 679
              },
              "start": 673,
              "end": 679
            },
            "directive": null,
            "start": 673,
            "end": 680
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 696
            },
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
                    "start": 708,
                    "end": 709
                  },
                  "directive": null,
                  "start": 708,
                  "end": 710
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
                      "start": 719,
                      "end": 720
                    },
                    "right": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 729,
                          "end": 732
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 734
                          }
                        ],
                        "optional": false,
                        "start": 729,
                        "end": 735
                      },
                      "start": 723,
                      "end": 735
                    },
                    "start": 719,
                    "end": 735
                  },
                  "directive": null,
                  "start": 719,
                  "end": 736
                }
              ],
              "start": 698,
              "end": 742
            },
            "start": 685,
            "end": 742
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "directive": null,
            "start": 747,
            "end": 749
          }
        ],
        "start": 629,
        "end": 751
      },
      "expression": false,
      "start": 609,
      "end": 751
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 776
      },
      "generator": false,
      "async": true,
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
                  "start": 780,
                  "end": 786
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 789,
                  "end": 795
                }
              ],
              "start": 780,
              "end": 795
            },
            "start": 778,
            "end": 795
          },
          "start": 777,
          "end": 795
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 798,
            "end": 805
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 806,
                "end": 812
              }
            ],
            "start": 805,
            "end": 813
          },
          "start": 798,
          "end": 813
        },
        "start": 796,
        "end": 813
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 829
              },
              "prefix": true,
              "start": 827,
              "end": 829
            },
            "start": 820,
            "end": 830
          }
        ],
        "start": 814,
        "end": 832
      },
      "expression": false,
      "start": 753,
      "end": 832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null,
        "start": 849,
        "end": 851
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
                          "start": 867,
                          "end": 873
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 876,
                          "end": 882
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 885,
                          "end": 892
                        }
                      ],
                      "start": 867,
                      "end": 892
                    },
                    "start": 865,
                    "end": 892
                  },
                  "start": 864,
                  "end": 892
                },
                "init": null,
                "definite": false,
                "start": 864,
                "end": 892
              }
            ],
            "declare": false,
            "start": 860,
            "end": 893
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
                "start": 898,
                "end": 899
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 902,
                "end": 905
              },
              "start": 898,
              "end": 905
            },
            "directive": null,
            "start": 898,
            "end": 906
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 922
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
                      "start": 934,
                      "end": 935
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "+",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 939,
                          "end": 940
                        },
                        "prefix": true,
                        "start": 938,
                        "end": 940
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 943,
                        "end": 944
                      },
                      "start": 938,
                      "end": 944
                    },
                    "start": 934,
                    "end": 944
                  },
                  "directive": null,
                  "start": 934,
                  "end": 945
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 954,
                    "end": 955
                  },
                  "directive": null,
                  "start": 954,
                  "end": 956
                }
              ],
              "start": 924,
              "end": 962
            },
            "start": 911,
            "end": 962
          }
        ],
        "start": 854,
        "end": 964
      },
      "expression": false,
      "start": 834,
      "end": 964
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null,
        "start": 981,
        "end": 983
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
                          "start": 999,
                          "end": 1005
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1008,
                          "end": 1014
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1017,
                          "end": 1024
                        }
                      ],
                      "start": 999,
                      "end": 1024
                    },
                    "start": 997,
                    "end": 1024
                  },
                  "start": 996,
                  "end": 1024
                },
                "init": null,
                "definite": false,
                "start": 996,
                "end": 1024
              }
            ],
            "declare": false,
            "start": 992,
            "end": 1025
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
                "start": 1030,
                "end": 1031
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1034,
                "end": 1037
              },
              "start": 1030,
              "end": 1037
            },
            "directive": null,
            "start": 1030,
            "end": 1038
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1054
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
                      "start": 1066,
                      "end": 1067
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1084
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1085,
                              "end": 1086
                            }
                          ],
                          "optional": false,
                          "start": 1076,
                          "end": 1087
                        },
                        "start": 1070,
                        "end": 1087
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1090,
                        "end": 1091
                      },
                      "start": 1070,
                      "end": 1091
                    },
                    "start": 1066,
                    "end": 1091
                  },
                  "directive": null,
                  "start": 1066,
                  "end": 1092
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1102
                  },
                  "directive": null,
                  "start": 1101,
                  "end": 1103
                }
              ],
              "start": 1056,
              "end": 1109
            },
            "start": 1043,
            "end": 1109
          }
        ],
        "start": 986,
        "end": 1111
      },
      "expression": false,
      "start": 966,
      "end": 1111
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1130
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
                          "start": 1146,
                          "end": 1152
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1155,
                          "end": 1161
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1164,
                          "end": 1171
                        }
                      ],
                      "start": 1146,
                      "end": 1171
                    },
                    "start": 1144,
                    "end": 1171
                  },
                  "start": 1143,
                  "end": 1171
                },
                "init": null,
                "definite": false,
                "start": 1143,
                "end": 1171
              }
            ],
            "declare": false,
            "start": 1139,
            "end": 1172
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
                "start": 1177,
                "end": 1178
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1181,
                "end": 1184
              },
              "start": 1177,
              "end": 1184
            },
            "directive": null,
            "start": 1177,
            "end": 1185
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1201
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1227,
                            "end": 1235
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1236,
                              "end": 1237
                            }
                          ],
                          "optional": false,
                          "start": 1227,
                          "end": 1238
                        },
                        "start": 1221,
                        "end": 1238
                      },
                      "definite": false,
                      "start": 1217,
                      "end": 1238
                    }
                  ],
                  "declare": false,
                  "start": 1213,
                  "end": 1239
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
                      "start": 1248,
                      "end": 1249
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1252,
                        "end": 1253
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1256,
                        "end": 1257
                      },
                      "start": 1252,
                      "end": 1257
                    },
                    "start": 1248,
                    "end": 1257
                  },
                  "directive": null,
                  "start": 1248,
                  "end": 1258
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1267,
                    "end": 1268
                  },
                  "directive": null,
                  "start": 1267,
                  "end": 1269
                }
              ],
              "start": 1203,
              "end": 1275
            },
            "start": 1190,
            "end": 1275
          }
        ],
        "start": 1133,
        "end": 1277
      },
      "expression": false,
      "start": 1113,
      "end": 1277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1296
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
                          "start": 1312,
                          "end": 1318
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1321,
                          "end": 1327
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1330,
                          "end": 1337
                        }
                      ],
                      "start": 1312,
                      "end": 1337
                    },
                    "start": 1310,
                    "end": 1337
                  },
                  "start": 1309,
                  "end": 1337
                },
                "init": null,
                "definite": false,
                "start": 1309,
                "end": 1337
              }
            ],
            "declare": false,
            "start": 1305,
            "end": 1338
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
                "start": 1343,
                "end": 1344
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1347,
                "end": 1350
              },
              "start": 1343,
              "end": 1350
            },
            "directive": null,
            "start": 1343,
            "end": 1351
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1367
            },
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
                    "start": 1379,
                    "end": 1380
                  },
                  "directive": null,
                  "start": 1379,
                  "end": 1381
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
                        "typeAnnotation": null,
                        "start": 1394,
                        "end": 1395
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1404,
                            "end": 1412
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1413,
                              "end": 1414
                            }
                          ],
                          "optional": false,
                          "start": 1404,
                          "end": 1415
                        },
                        "start": 1398,
                        "end": 1415
                      },
                      "definite": false,
                      "start": 1394,
                      "end": 1415
                    }
                  ],
                  "declare": false,
                  "start": 1390,
                  "end": 1416
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
                      "start": 1425,
                      "end": 1426
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1429,
                        "end": 1430
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1433,
                        "end": 1434
                      },
                      "start": 1429,
                      "end": 1434
                    },
                    "start": 1425,
                    "end": 1434
                  },
                  "directive": null,
                  "start": 1425,
                  "end": 1435
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1444,
                    "end": 1445
                  },
                  "directive": null,
                  "start": 1444,
                  "end": 1446
                }
              ],
              "start": 1369,
              "end": 1452
            },
            "start": 1356,
            "end": 1452
          }
        ],
        "start": 1299,
        "end": 1454
      },
      "expression": false,
      "start": 1279,
      "end": 1454
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get_things",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1498
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1502,
                  "end": 1508
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1511,
                  "end": 1520
                }
              ],
              "start": 1502,
              "end": 1520
            },
            "start": 1500,
            "end": 1520
          },
          "start": 1499,
          "end": 1520
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1536,
                  "end": 1537
                }
              ],
              "start": 1535,
              "end": 1538
            },
            "start": 1528,
            "end": 1539
          }
        ],
        "start": 1522,
        "end": 1541
      },
      "expression": false,
      "start": 1473,
      "end": 1541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foobar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1558,
        "end": 1564
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "before",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1585,
                          "end": 1591
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1594,
                          "end": 1603
                        }
                      ],
                      "start": 1585,
                      "end": 1603
                    },
                    "start": 1583,
                    "end": 1603
                  },
                  "start": 1577,
                  "end": 1603
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1606,
                  "end": 1615
                },
                "definite": false,
                "start": 1577,
                "end": 1615
              }
            ],
            "declare": false,
            "start": 1573,
            "end": 1616
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
                    "start": 1630,
                    "end": 1631
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1634,
                    "end": 1635
                  },
                  "definite": false,
                  "start": 1630,
                  "end": 1635
                }
              ],
              "declare": false,
              "start": 1626,
              "end": 1635
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1637,
                "end": 1638
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1641,
                "end": 1642
              },
              "start": 1637,
              "end": 1642
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
                "start": 1644,
                "end": 1645
              },
              "start": 1644,
              "end": 1647
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
                        "name": "results",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1672
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get_things",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1681,
                            "end": 1691
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "before",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1692,
                              "end": 1698
                            }
                          ],
                          "optional": false,
                          "start": 1681,
                          "end": 1699
                        },
                        "start": 1675,
                        "end": 1699
                      },
                      "definite": false,
                      "start": 1665,
                      "end": 1699
                    }
                  ],
                  "declare": false,
                  "start": 1659,
                  "end": 1700
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "before",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1715
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "results",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1718,
                        "end": 1725
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1726,
                        "end": 1727
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1718,
                      "end": 1728
                    },
                    "start": 1709,
                    "end": 1728
                  },
                  "directive": null,
                  "start": 1709,
                  "end": 1729
                }
              ],
              "start": 1649,
              "end": 1735
            },
            "start": 1621,
            "end": 1735
          }
        ],
        "start": 1567,
        "end": 1737
      },
      "expression": false,
      "start": 1543,
      "end": 1737
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foox",
        "optional": false,
        "typeAnnotation": null,
        "start": 1796,
        "end": 1800
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                  "start": 1804,
                  "end": 1810
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1813,
                  "end": 1822
                }
              ],
              "start": 1804,
              "end": 1822
            },
            "start": 1802,
            "end": 1822
          },
          "start": 1801,
          "end": 1822
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1832
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1833,
                "end": 1839
              }
            ],
            "start": 1832,
            "end": 1840
          },
          "start": 1825,
          "end": 1840
        },
        "start": 1823,
        "end": 1840
      },
      "body": null,
      "expression": false,
      "start": 1779,
      "end": 1840
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": true,
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1867,
                            "end": 1873
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1876,
                            "end": 1885
                          }
                        ],
                        "start": 1867,
                        "end": 1885
                      },
                      "start": 1865,
                      "end": 1885
                    },
                    "start": 1862,
                    "end": 1885
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1888,
                    "end": 1897
                  },
                  "definite": false,
                  "start": 1862,
                  "end": 1897
                }
              ],
              "declare": false,
              "start": 1858,
              "end": 1898
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
                          "name": "baz",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1916,
                          "end": 1919
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foox",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1928,
                              "end": 1932
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1933,
                                "end": 1936
                              }
                            ],
                            "optional": false,
                            "start": 1928,
                            "end": 1937
                          },
                          "start": 1922,
                          "end": 1937
                        },
                        "definite": false,
                        "start": 1916,
                        "end": 1937
                      }
                    ],
                    "declare": false,
                    "start": 1910,
                    "end": 1938
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1943,
                        "end": 1946
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "baz",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1949,
                        "end": 1952
                      },
                      "start": 1943,
                      "end": 1952
                    },
                    "directive": null,
                    "start": 1943,
                    "end": 1952
                  }
                ],
                "start": 1904,
                "end": 1956
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1964,
                "end": 1967
              },
              "start": 1901,
              "end": 1968
            }
          ],
          "start": 1854,
          "end": 1970
        },
        "id": null,
        "generator": false,
        "start": 1842,
        "end": 1970
      },
      "directive": null,
      "start": 1842,
      "end": 1970
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 2029,
        "end": 2036
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "lastId",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2046,
                    "end": 2052
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2054,
                          "end": 2060
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2063,
                          "end": 2072
                        }
                      ],
                      "start": 2054,
                      "end": 2072
                    },
                    "start": 2052,
                    "end": 2072
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2046,
                  "end": 2072
                }
              ],
              "start": 2044,
              "end": 2074
            },
            "start": 2042,
            "end": 2074
          },
          "start": 2037,
          "end": 2074
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2077,
            "end": 2084
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
                      "name": "entities",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2087,
                      "end": 2095
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2097,
                          "end": 2103
                        },
                        "start": 2097,
                        "end": 2105
                      },
                      "start": 2095,
                      "end": 2105
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2087,
                    "end": 2105
                  }
                ],
                "start": 2085,
                "end": 2107
              }
            ],
            "start": 2084,
            "end": 2108
          },
          "start": 2077,
          "end": 2108
        },
        "start": 2075,
        "end": 2108
      },
      "body": null,
      "expression": false,
      "start": 2012,
      "end": 2109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 2126,
        "end": 2132
      },
      "generator": false,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2136,
            "end": 2143
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 2144,
                "end": 2148
              }
            ],
            "start": 2143,
            "end": 2149
          },
          "start": 2136,
          "end": 2149
        },
        "start": 2134,
        "end": 2149
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
                  "name": "lastId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2166,
                          "end": 2172
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2175,
                          "end": 2184
                        }
                      ],
                      "start": 2166,
                      "end": 2184
                    },
                    "start": 2164,
                    "end": 2184
                  },
                  "start": 2158,
                  "end": 2184
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2187,
                  "end": 2196
                },
                "definite": false,
                "start": 2158,
                "end": 2196
              }
            ],
            "declare": false,
            "start": 2154,
            "end": 2197
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 2208,
              "end": 2212
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
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entities",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2228,
                              "end": 2236
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entities",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2228,
                              "end": 2236
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 2228,
                            "end": 2236
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2226,
                        "end": 2238
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myQuery",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2247,
                            "end": 2254
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
                                    "name": "lastId",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2265,
                                    "end": 2271
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "lastId",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2265,
                                    "end": 2271
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 2265,
                                  "end": 2271
                                }
                              ],
                              "start": 2255,
                              "end": 2278
                            }
                          ],
                          "optional": false,
                          "start": 2247,
                          "end": 2279
                        },
                        "start": 2241,
                        "end": 2279
                      },
                      "definite": false,
                      "start": 2226,
                      "end": 2279
                    }
                  ],
                  "declare": false,
                  "start": 2220,
                  "end": 2280
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "lastId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2286,
                      "end": 2292
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entities",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2295,
                        "end": 2303
                      },
                      "property": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entities",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2304,
                            "end": 2312
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2313,
                            "end": 2319
                          },
                          "optional": false,
                          "computed": false,
                          "start": 2304,
                          "end": 2319
                        },
                        "operator": "-",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2322,
                          "end": 2323
                        },
                        "start": 2304,
                        "end": 2323
                      },
                      "optional": false,
                      "computed": true,
                      "start": 2295,
                      "end": 2324
                    },
                    "start": 2286,
                    "end": 2324
                  },
                  "directive": null,
                  "start": 2286,
                  "end": 2325
                }
              ],
              "start": 2214,
              "end": 2329
            },
            "start": 2201,
            "end": 2329
          }
        ],
        "start": 2150,
        "end": 2332
      },
      "expression": false,
      "start": 2111,
      "end": 2332
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2332
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 20,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 26,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 56,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 76,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "value": "boolean",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 179,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 185,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 220,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 303,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 364,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 372,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 388,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 397,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 414,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 422,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 438,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 447,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 465,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 471,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 516,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 531,
    "end": 532
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 541,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 548,
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
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 568,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 609,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 615,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 624,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 635,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 660,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 677,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 685,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 692,
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
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 723,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 753,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 759,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "asNumber",
    "start": 768,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 780,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 798,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 806,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 814,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 820,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 828,
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
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 834,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 840,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 849,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 860,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "|",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 876,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 885,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 900,
    "end": 901
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 902,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 911,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 918,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 941,
    "end": 942
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 966,
    "end": 971
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 972,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "h2",
    "start": 981,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 992,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 999,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1017,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1043,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1050,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1070,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "asNumber",
    "start": 1076,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
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
    "value": "}",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1119,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "h3",
    "start": 1128,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1164,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1190,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1197,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1213,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1221,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "asNumber",
    "start": 1227,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "x",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "x",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1279,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "h4",
    "start": 1294,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1309,
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
    "value": "string",
    "start": 1312,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1321,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1330,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1356,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1363,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
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
    "value": "x",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "y",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1398,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "asNumber",
    "start": 1404,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "x",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1473,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1479,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "get_things",
    "start": 1488,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1502,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1511,
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
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1528,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "}",
    "start": 1540,
    "end": 1541
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
    "type": "Identifier",
    "value": "foobar",
    "start": 1558,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1573,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "before",
    "start": 1577,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1585,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1594,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1606,
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
    "value": "for",
    "start": 1621,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1626,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1645,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1659,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 1665,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1675,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "get_things",
    "start": 1681,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "before",
    "start": 1692,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "before",
    "start": 1709,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1727,
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
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1779,
    "end": 1786
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1787,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "foox",
    "start": 1796,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1804,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1813,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1825,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1833,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1842,
    "end": 1847
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
    "value": "=>",
    "start": 1851,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1858,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1862,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1867,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1876,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1888,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1910,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1922,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "foox",
    "start": 1928,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1943,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1949,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1957,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1964,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2012,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2020,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "myQuery",
    "start": 2029,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2037,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "lastId",
    "start": 2046,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2054,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2063,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ":",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2077,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2087,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2097,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109
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
    "type": "Identifier",
    "value": "myFunc",
    "start": 2126,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2144,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2154,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "lastId",
    "start": 2158,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2166,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2175,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2187,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2201,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2208,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2220,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2228,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2241,
    "end": 2246
  },
  {
    "type": "Identifier",
    "value": "myQuery",
    "start": 2247,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "lastId",
    "start": 2265,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "lastId",
    "start": 2286,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2295,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "entities",
    "start": 2304,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2313,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2331,
    "end": 2332
  }
]
```
