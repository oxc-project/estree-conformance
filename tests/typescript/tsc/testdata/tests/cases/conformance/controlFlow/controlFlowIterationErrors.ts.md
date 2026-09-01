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
        "start": 29,
        "end": 32
      },
      "generator": false,
      "async": false,
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
              "start": 36,
              "end": 42
            },
            "start": 34,
            "end": 42
          },
          "start": 33,
          "end": 42
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
                "start": 57,
                "end": 58
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 59,
                "end": 65
              },
              "optional": false,
              "computed": false,
              "start": 57,
              "end": 65
            },
            "start": 50,
            "end": 66
          }
        ],
        "start": 44,
        "end": 68
      },
      "expression": false,
      "start": 20,
      "end": 68
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 81
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
                          "start": 97,
                          "end": 103
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 106,
                          "end": 112
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 115,
                          "end": 122
                        }
                      ],
                      "start": 97,
                      "end": 122
                    },
                    "start": 95,
                    "end": 122
                  },
                  "start": 94,
                  "end": 122
                },
                "init": null,
                "definite": false,
                "start": 94,
                "end": 122
              }
            ],
            "declare": false,
            "start": 90,
            "end": 123
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
                "start": 128,
                "end": 129
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 132,
                "end": 134
              },
              "start": 128,
              "end": 134
            },
            "directive": null,
            "start": 128,
            "end": 135
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 151
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
                      "start": 163,
                      "end": 164
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 170
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 172
                        }
                      ],
                      "optional": false,
                      "start": 167,
                      "end": 173
                    },
                    "start": 163,
                    "end": 173
                  },
                  "directive": null,
                  "start": 163,
                  "end": 174
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 184
                  },
                  "directive": null,
                  "start": 183,
                  "end": 185
                }
              ],
              "start": 153,
              "end": 191
            },
            "start": 140,
            "end": 191
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 197
            },
            "directive": null,
            "start": 196,
            "end": 198
          }
        ],
        "start": 84,
        "end": 200
      },
      "expression": false,
      "start": 70,
      "end": 200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
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
                          "start": 229,
                          "end": 235
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 238,
                          "end": 244
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 247,
                          "end": 254
                        }
                      ],
                      "start": 229,
                      "end": 254
                    },
                    "start": 227,
                    "end": 254
                  },
                  "start": 226,
                  "end": 254
                },
                "init": null,
                "definite": false,
                "start": 226,
                "end": 254
              }
            ],
            "declare": false,
            "start": 222,
            "end": 255
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
                "start": 260,
                "end": 261
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 264,
                "end": 266
              },
              "start": 260,
              "end": 266
            },
            "directive": null,
            "start": 260,
            "end": 267
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 283
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
                    "start": 295,
                    "end": 296
                  },
                  "directive": null,
                  "start": 295,
                  "end": 297
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
                      "start": 306,
                      "end": 307
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 313
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 315
                        }
                      ],
                      "optional": false,
                      "start": 310,
                      "end": 316
                    },
                    "start": 306,
                    "end": 316
                  },
                  "directive": null,
                  "start": 306,
                  "end": 317
                }
              ],
              "start": 285,
              "end": 323
            },
            "start": 272,
            "end": 323
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 329
            },
            "directive": null,
            "start": 328,
            "end": 330
          }
        ],
        "start": 216,
        "end": 332
      },
      "expression": false,
      "start": 202,
      "end": 332
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 354
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
              "start": 358,
              "end": 364
            },
            "start": 356,
            "end": 364
          },
          "start": 355,
          "end": 364
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 367,
          "end": 373
        },
        "start": 365,
        "end": 373
      },
      "body": null,
      "expression": false,
      "start": 334,
      "end": 374
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 395
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
              "start": 399,
              "end": 405
            },
            "start": 397,
            "end": 405
          },
          "start": 396,
          "end": 405
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 408,
          "end": 414
        },
        "start": 406,
        "end": 414
      },
      "body": null,
      "expression": false,
      "start": 375,
      "end": 415
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 428
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
                          "start": 444,
                          "end": 450
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 453,
                          "end": 459
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 462,
                          "end": 469
                        }
                      ],
                      "start": 444,
                      "end": 469
                    },
                    "start": 442,
                    "end": 469
                  },
                  "start": 441,
                  "end": 469
                },
                "init": null,
                "definite": false,
                "start": 441,
                "end": 469
              }
            ],
            "declare": false,
            "start": 437,
            "end": 470
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
                "start": 475,
                "end": 476
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 479,
                "end": 481
              },
              "start": 475,
              "end": 481
            },
            "directive": null,
            "start": 475,
            "end": 482
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 494,
              "end": 498
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
                      "start": 510,
                      "end": 511
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 514,
                        "end": 517
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 519
                        }
                      ],
                      "optional": false,
                      "start": 514,
                      "end": 520
                    },
                    "start": 510,
                    "end": 520
                  },
                  "directive": null,
                  "start": 510,
                  "end": 521
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "directive": null,
                  "start": 530,
                  "end": 532
                }
              ],
              "start": 500,
              "end": 538
            },
            "start": 487,
            "end": 538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "directive": null,
            "start": 543,
            "end": 545
          }
        ],
        "start": 431,
        "end": 547
      },
      "expression": false,
      "start": 417,
      "end": 547
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 558,
        "end": 560
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
                          "start": 576,
                          "end": 582
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 585,
                          "end": 591
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 594,
                          "end": 601
                        }
                      ],
                      "start": 576,
                      "end": 601
                    },
                    "start": 574,
                    "end": 601
                  },
                  "start": 573,
                  "end": 601
                },
                "init": null,
                "definite": false,
                "start": 573,
                "end": 601
              }
            ],
            "declare": false,
            "start": 569,
            "end": 602
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
                "start": 607,
                "end": 608
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 611,
                "end": 613
              },
              "start": 607,
              "end": 613
            },
            "directive": null,
            "start": 607,
            "end": 614
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 630
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
                    "start": 642,
                    "end": 643
                  },
                  "directive": null,
                  "start": 642,
                  "end": 644
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
                      "start": 653,
                      "end": 654
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 660
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 661,
                          "end": 662
                        }
                      ],
                      "optional": false,
                      "start": 657,
                      "end": 663
                    },
                    "start": 653,
                    "end": 663
                  },
                  "directive": null,
                  "start": 653,
                  "end": 664
                }
              ],
              "start": 632,
              "end": 670
            },
            "start": 619,
            "end": 670
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "directive": null,
            "start": 675,
            "end": 677
          }
        ],
        "start": 563,
        "end": 679
      },
      "expression": false,
      "start": 549,
      "end": 679
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 698
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 702,
                  "end": 708
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 711,
                  "end": 717
                }
              ],
              "start": 702,
              "end": 717
            },
            "start": 700,
            "end": 717
          },
          "start": 699,
          "end": 717
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 720,
          "end": 726
        },
        "start": 718,
        "end": 726
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
                "start": 741,
                "end": 742
              },
              "prefix": true,
              "start": 740,
              "end": 742
            },
            "start": 733,
            "end": 743
          }
        ],
        "start": 727,
        "end": 745
      },
      "expression": false,
      "start": 681,
      "end": 745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h1",
        "optional": false,
        "typeAnnotation": null,
        "start": 756,
        "end": 758
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
                          "start": 774,
                          "end": 780
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 783,
                          "end": 789
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 792,
                          "end": 799
                        }
                      ],
                      "start": 774,
                      "end": 799
                    },
                    "start": 772,
                    "end": 799
                  },
                  "start": 771,
                  "end": 799
                },
                "init": null,
                "definite": false,
                "start": 771,
                "end": 799
              }
            ],
            "declare": false,
            "start": 767,
            "end": 800
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
                "start": 805,
                "end": 806
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 809,
                "end": 812
              },
              "start": 805,
              "end": 812
            },
            "directive": null,
            "start": 805,
            "end": 813
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 829
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
                      "start": 841,
                      "end": 842
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
                          "start": 846,
                          "end": 847
                        },
                        "prefix": true,
                        "start": 845,
                        "end": 847
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 850,
                        "end": 851
                      },
                      "start": 845,
                      "end": 851
                    },
                    "start": 841,
                    "end": 851
                  },
                  "directive": null,
                  "start": 841,
                  "end": 852
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 861,
                    "end": 862
                  },
                  "directive": null,
                  "start": 861,
                  "end": 863
                }
              ],
              "start": 831,
              "end": 869
            },
            "start": 818,
            "end": 869
          }
        ],
        "start": 761,
        "end": 871
      },
      "expression": false,
      "start": 747,
      "end": 871
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 884
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
                          "start": 900,
                          "end": 906
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 909,
                          "end": 915
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 918,
                          "end": 925
                        }
                      ],
                      "start": 900,
                      "end": 925
                    },
                    "start": 898,
                    "end": 925
                  },
                  "start": 897,
                  "end": 925
                },
                "init": null,
                "definite": false,
                "start": 897,
                "end": 925
              }
            ],
            "declare": false,
            "start": 893,
            "end": 926
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
                "start": 931,
                "end": 932
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 935,
                "end": 938
              },
              "start": 931,
              "end": 938
            },
            "directive": null,
            "start": 931,
            "end": 939
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 955
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
                      "start": 967,
                      "end": 968
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 971,
                          "end": 979
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 980,
                            "end": 981
                          }
                        ],
                        "optional": false,
                        "start": 971,
                        "end": 982
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 985,
                        "end": 986
                      },
                      "start": 971,
                      "end": 986
                    },
                    "start": 967,
                    "end": 986
                  },
                  "directive": null,
                  "start": 967,
                  "end": 987
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 997
                  },
                  "directive": null,
                  "start": 996,
                  "end": 998
                }
              ],
              "start": 957,
              "end": 1004
            },
            "start": 944,
            "end": 1004
          }
        ],
        "start": 887,
        "end": 1006
      },
      "expression": false,
      "start": 873,
      "end": 1006
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1017,
        "end": 1019
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
                          "start": 1035,
                          "end": 1041
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1044,
                          "end": 1050
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1053,
                          "end": 1060
                        }
                      ],
                      "start": 1035,
                      "end": 1060
                    },
                    "start": 1033,
                    "end": 1060
                  },
                  "start": 1032,
                  "end": 1060
                },
                "init": null,
                "definite": false,
                "start": 1032,
                "end": 1060
              }
            ],
            "declare": false,
            "start": 1028,
            "end": 1061
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
                "start": 1066,
                "end": 1067
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1070,
                "end": 1073
              },
              "start": 1066,
              "end": 1073
            },
            "directive": null,
            "start": 1066,
            "end": 1074
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1086,
              "end": 1090
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
                        "start": 1106,
                        "end": 1107
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1118
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1120
                          }
                        ],
                        "optional": false,
                        "start": 1110,
                        "end": 1121
                      },
                      "definite": false,
                      "start": 1106,
                      "end": 1121
                    }
                  ],
                  "declare": false,
                  "start": 1102,
                  "end": 1122
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1135,
                        "end": 1136
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1139,
                        "end": 1140
                      },
                      "start": 1135,
                      "end": 1140
                    },
                    "start": 1131,
                    "end": 1140
                  },
                  "directive": null,
                  "start": 1131,
                  "end": 1141
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1150,
                    "end": 1151
                  },
                  "directive": null,
                  "start": 1150,
                  "end": 1152
                }
              ],
              "start": 1092,
              "end": 1158
            },
            "start": 1079,
            "end": 1158
          }
        ],
        "start": 1022,
        "end": 1160
      },
      "expression": false,
      "start": 1008,
      "end": 1160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1173
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
                          "start": 1189,
                          "end": 1195
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1198,
                          "end": 1204
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1207,
                          "end": 1214
                        }
                      ],
                      "start": 1189,
                      "end": 1214
                    },
                    "start": 1187,
                    "end": 1214
                  },
                  "start": 1186,
                  "end": 1214
                },
                "init": null,
                "definite": false,
                "start": 1186,
                "end": 1214
              }
            ],
            "declare": false,
            "start": 1182,
            "end": 1215
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
                "start": 1220,
                "end": 1221
              },
              "right": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1224,
                "end": 1227
              },
              "start": 1220,
              "end": 1227
            },
            "directive": null,
            "start": 1220,
            "end": 1228
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1240,
              "end": 1244
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
                    "start": 1256,
                    "end": 1257
                  },
                  "directive": null,
                  "start": 1256,
                  "end": 1258
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
                        "start": 1271,
                        "end": 1272
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1275,
                          "end": 1283
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1284,
                            "end": 1285
                          }
                        ],
                        "optional": false,
                        "start": 1275,
                        "end": 1286
                      },
                      "definite": false,
                      "start": 1271,
                      "end": 1286
                    }
                  ],
                  "declare": false,
                  "start": 1267,
                  "end": 1287
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
                      "start": 1296,
                      "end": 1297
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1300,
                        "end": 1301
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1304,
                        "end": 1305
                      },
                      "start": 1300,
                      "end": 1305
                    },
                    "start": 1296,
                    "end": 1305
                  },
                  "directive": null,
                  "start": 1296,
                  "end": 1306
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1315,
                    "end": 1316
                  },
                  "directive": null,
                  "start": 1315,
                  "end": 1317
                }
              ],
              "start": 1246,
              "end": 1323
            },
            "start": 1233,
            "end": 1323
          }
        ],
        "start": 1176,
        "end": 1325
      },
      "expression": false,
      "start": 1162,
      "end": 1325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1325
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
    "type": "Keyword",
    "value": "function",
    "start": 20,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 29,
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
    "value": "s",
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
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 50,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 202,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 211,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
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
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "len",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "x",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 334,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 342,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 375,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 383,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 399,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 417,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 437,
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
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 462,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 494,
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
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 514,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 549,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 558,
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
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 594,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "String",
    "value": "\"\"",
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
    "type": "Keyword",
    "value": "while",
    "start": 619,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 626,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "x",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 657,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 681,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "asNumber",
    "start": 690,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 711,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 720,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 747,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "h1",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 774,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 792,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 807,
    "end": 808
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 809,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 825,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 848,
    "end": 849
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "h2",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 893,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 900,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 909,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 918,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 944,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 951,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 969,
    "end": 970
  },
  {
    "type": "Identifier",
    "value": "asNumber",
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
    "type": "Identifier",
    "value": "x",
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
    "value": "+",
    "start": 983,
    "end": 984
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1008,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "h3",
    "start": 1017,
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
    "value": "{",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1028,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1035,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1044,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1053,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
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
    "type": "String",
    "value": "\"0\"",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1079,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "asNumber",
    "start": 1110,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
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
    "value": "y",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1162,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "h4",
    "start": 1171,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1189,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1198,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1207,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1224,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1233,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1240,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
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
    "type": "Keyword",
    "value": "let",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "asNumber",
    "start": 1275,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1324,
    "end": 1325
  }
]
```
