__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              },
              "start": 21,
              "end": 26
            },
            "start": 20,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 20,
          "end": 26
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
              },
              "start": 29,
              "end": 34
            },
            "start": 28,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 28,
          "end": 34
        },
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
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              },
              "start": 37,
              "end": 42
            },
            "start": 36,
            "end": 42
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 42
        },
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
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
              },
              "start": 45,
              "end": 50
            },
            "start": 44,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 44,
          "end": 50
        },
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
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              },
              "start": 53,
              "end": 58
            },
            "start": 52,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 52,
          "end": 58
        }
      ],
      "declare": true,
      "start": 0,
      "end": 59
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatch0",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 85
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 101,
                      "end": 104
                    },
                    "start": 99,
                    "end": 104
                  },
                  "start": 98,
                  "end": 104
                },
                "init": null,
                "definite": false,
                "start": 98,
                "end": 104
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 109,
                      "end": 112
                    },
                    "start": 107,
                    "end": 112
                  },
                  "start": 106,
                  "end": 112
                },
                "init": null,
                "definite": false,
                "start": 106,
                "end": 112
              }
            ],
            "declare": false,
            "start": 94,
            "end": 113
          },
          {
            "type": "TryStatement",
            "block": {
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
                    "start": 132,
                    "end": 133
                  },
                  "directive": null,
                  "start": 132,
                  "end": 134
                }
              ],
              "start": 122,
              "end": 140
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "directive": null,
                    "start": 165,
                    "end": 167
                  }
                ],
                "start": 155,
                "end": 173
              },
              "start": 145,
              "end": 173
            },
            "finalizer": null,
            "start": 118,
            "end": 173
          }
        ],
        "start": 88,
        "end": 175
      },
      "expression": false,
      "start": 61,
      "end": 175
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatch1",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 201
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 217,
                      "end": 220
                    },
                    "start": 215,
                    "end": 220
                  },
                  "start": 214,
                  "end": 220
                },
                "init": null,
                "definite": false,
                "start": 214,
                "end": 220
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 225,
                      "end": 228
                    },
                    "start": 223,
                    "end": 228
                  },
                  "start": 222,
                  "end": 228
                },
                "init": null,
                "definite": false,
                "start": 222,
                "end": 228
              }
            ],
            "declare": false,
            "start": 210,
            "end": 229
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 255
                    },
                    "start": 248,
                    "end": 255
                  },
                  "directive": null,
                  "start": 248,
                  "end": 256
                }
              ],
              "start": 238,
              "end": 262
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "directive": null,
                    "start": 287,
                    "end": 289
                  }
                ],
                "start": 277,
                "end": 295
              },
              "start": 267,
              "end": 295
            },
            "finalizer": null,
            "start": 234,
            "end": 295
          }
        ],
        "start": 204,
        "end": 297
      },
      "expression": false,
      "start": 177,
      "end": 297
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatch2",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 323
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 339,
                      "end": 342
                    },
                    "start": 337,
                    "end": 342
                  },
                  "start": 336,
                  "end": 342
                },
                "init": null,
                "definite": false,
                "start": 336,
                "end": 342
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 347,
                      "end": 350
                    },
                    "start": 345,
                    "end": 350
                  },
                  "start": 344,
                  "end": 350
                },
                "init": null,
                "definite": false,
                "start": 344,
                "end": 350
              }
            ],
            "declare": false,
            "start": 332,
            "end": 351
          },
          {
            "type": "TryStatement",
            "block": {
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
                    "start": 370,
                    "end": 371
                  },
                  "directive": null,
                  "start": 370,
                  "end": 372
                }
              ],
              "start": 360,
              "end": 378
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 391
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 410
                      },
                      "start": 403,
                      "end": 410
                    },
                    "directive": null,
                    "start": 403,
                    "end": 411
                  }
                ],
                "start": 393,
                "end": 417
              },
              "start": 383,
              "end": 417
            },
            "finalizer": null,
            "start": 356,
            "end": 417
          }
        ],
        "start": 326,
        "end": 419
      },
      "expression": false,
      "start": 299,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatch3",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 445
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
            "start": 449,
            "end": 456
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 465
                },
                "typeArguments": null,
                "start": 457,
                "end": 465
              }
            ],
            "start": 456,
            "end": 466
          },
          "start": 449,
          "end": 466
        },
        "start": 447,
        "end": 466
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 480,
                      "end": 483
                    },
                    "start": 478,
                    "end": 483
                  },
                  "start": 477,
                  "end": 483
                },
                "init": null,
                "definite": false,
                "start": 477,
                "end": 483
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 488,
                      "end": 491
                    },
                    "start": 486,
                    "end": 491
                  },
                  "start": 485,
                  "end": 491
                },
                "init": null,
                "definite": false,
                "start": 485,
                "end": 491
              }
            ],
            "declare": false,
            "start": 473,
            "end": 492
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 518
                    },
                    "start": 511,
                    "end": 518
                  },
                  "directive": null,
                  "start": 511,
                  "end": 519
                }
              ],
              "start": 501,
              "end": 525
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 538
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 564
                      },
                      "id": null,
                      "generator": false,
                      "start": 557,
                      "end": 564
                    },
                    "start": 550,
                    "end": 565
                  }
                ],
                "start": 540,
                "end": 571
              },
              "start": 530,
              "end": 571
            },
            "finalizer": null,
            "start": 497,
            "end": 571
          }
        ],
        "start": 467,
        "end": 573
      },
      "expression": false,
      "start": 421,
      "end": 573
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryFinally0",
        "optional": false,
        "typeAnnotation": null,
        "start": 589,
        "end": 600
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 616,
                      "end": 619
                    },
                    "start": 614,
                    "end": 619
                  },
                  "start": 613,
                  "end": 619
                },
                "init": null,
                "definite": false,
                "start": 613,
                "end": 619
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 624,
                      "end": 627
                    },
                    "start": 622,
                    "end": 627
                  },
                  "start": 621,
                  "end": 627
                },
                "init": null,
                "definite": false,
                "start": 621,
                "end": 627
              }
            ],
            "declare": false,
            "start": 609,
            "end": 628
          },
          {
            "type": "TryStatement",
            "block": {
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
                    "start": 647,
                    "end": 648
                  },
                  "directive": null,
                  "start": 647,
                  "end": 649
                }
              ],
              "start": 637,
              "end": 655
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  },
                  "directive": null,
                  "start": 678,
                  "end": 680
                }
              ],
              "start": 668,
              "end": 686
            },
            "start": 633,
            "end": 686
          }
        ],
        "start": 603,
        "end": 688
      },
      "expression": false,
      "start": 574,
      "end": 688
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryFinally1",
        "optional": false,
        "typeAnnotation": null,
        "start": 705,
        "end": 716
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 732,
                      "end": 735
                    },
                    "start": 730,
                    "end": 735
                  },
                  "start": 729,
                  "end": 735
                },
                "init": null,
                "definite": false,
                "start": 729,
                "end": 735
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 740,
                      "end": 743
                    },
                    "start": 738,
                    "end": 743
                  },
                  "start": 737,
                  "end": 743
                },
                "init": null,
                "definite": false,
                "start": 737,
                "end": 743
              }
            ],
            "declare": false,
            "start": 725,
            "end": 744
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 769,
                      "end": 770
                    },
                    "start": 763,
                    "end": 770
                  },
                  "directive": null,
                  "start": 763,
                  "end": 771
                }
              ],
              "start": 753,
              "end": 777
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 800,
                    "end": 801
                  },
                  "directive": null,
                  "start": 800,
                  "end": 802
                }
              ],
              "start": 790,
              "end": 808
            },
            "start": 749,
            "end": 808
          }
        ],
        "start": 719,
        "end": 810
      },
      "expression": false,
      "start": 690,
      "end": 810
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryFinally2",
        "optional": false,
        "typeAnnotation": null,
        "start": 827,
        "end": 838
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 854,
                      "end": 857
                    },
                    "start": 852,
                    "end": 857
                  },
                  "start": 851,
                  "end": 857
                },
                "init": null,
                "definite": false,
                "start": 851,
                "end": 857
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 862,
                      "end": 865
                    },
                    "start": 860,
                    "end": 865
                  },
                  "start": 859,
                  "end": 865
                },
                "init": null,
                "definite": false,
                "start": 859,
                "end": 865
              }
            ],
            "declare": false,
            "start": 847,
            "end": 866
          },
          {
            "type": "TryStatement",
            "block": {
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
                    "start": 885,
                    "end": 886
                  },
                  "directive": null,
                  "start": 885,
                  "end": 887
                }
              ],
              "start": 875,
              "end": 893
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 923
                    },
                    "start": 916,
                    "end": 923
                  },
                  "directive": null,
                  "start": 916,
                  "end": 924
                }
              ],
              "start": 906,
              "end": 930
            },
            "start": 871,
            "end": 930
          }
        ],
        "start": 841,
        "end": 932
      },
      "expression": false,
      "start": 812,
      "end": 932
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatchFinally0",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 965
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 981,
                      "end": 984
                    },
                    "start": 979,
                    "end": 984
                  },
                  "start": 978,
                  "end": 984
                },
                "init": null,
                "definite": false,
                "start": 978,
                "end": 984
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 989,
                      "end": 992
                    },
                    "start": 987,
                    "end": 992
                  },
                  "start": 986,
                  "end": 992
                },
                "init": null,
                "definite": false,
                "start": 986,
                "end": 992
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 997,
                      "end": 1000
                    },
                    "start": 995,
                    "end": 1000
                  },
                  "start": 994,
                  "end": 1000
                },
                "init": null,
                "definite": false,
                "start": 994,
                "end": 1000
              }
            ],
            "declare": false,
            "start": 974,
            "end": 1001
          },
          {
            "type": "TryStatement",
            "block": {
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
                    "start": 1020,
                    "end": 1021
                  },
                  "directive": null,
                  "start": 1020,
                  "end": 1022
                }
              ],
              "start": 1010,
              "end": 1028
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1041
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1053,
                      "end": 1054
                    },
                    "directive": null,
                    "start": 1053,
                    "end": 1055
                  }
                ],
                "start": 1043,
                "end": 1061
              },
              "start": 1033,
              "end": 1061
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1084,
                    "end": 1085
                  },
                  "directive": null,
                  "start": 1084,
                  "end": 1086
                }
              ],
              "start": 1074,
              "end": 1092
            },
            "start": 1006,
            "end": 1092
          }
        ],
        "start": 968,
        "end": 1094
      },
      "expression": false,
      "start": 934,
      "end": 1094
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatchFinally1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1111,
        "end": 1127
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 1143,
                      "end": 1146
                    },
                    "start": 1141,
                    "end": 1146
                  },
                  "start": 1140,
                  "end": 1146
                },
                "init": null,
                "definite": false,
                "start": 1140,
                "end": 1146
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1151,
                      "end": 1154
                    },
                    "start": 1149,
                    "end": 1154
                  },
                  "start": 1148,
                  "end": 1154
                },
                "init": null,
                "definite": false,
                "start": 1148,
                "end": 1154
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1159,
                      "end": 1162
                    },
                    "start": 1157,
                    "end": 1162
                  },
                  "start": 1156,
                  "end": 1162
                },
                "init": null,
                "definite": false,
                "start": 1156,
                "end": 1162
              }
            ],
            "declare": false,
            "start": 1136,
            "end": 1163
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1188,
                      "end": 1189
                    },
                    "start": 1182,
                    "end": 1189
                  },
                  "directive": null,
                  "start": 1182,
                  "end": 1190
                }
              ],
              "start": 1172,
              "end": 1196
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1209
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1221,
                      "end": 1222
                    },
                    "directive": null,
                    "start": 1221,
                    "end": 1223
                  }
                ],
                "start": 1211,
                "end": 1229
              },
              "start": 1201,
              "end": 1229
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "directive": null,
                  "start": 1252,
                  "end": 1254
                }
              ],
              "start": 1242,
              "end": 1260
            },
            "start": 1168,
            "end": 1260
          }
        ],
        "start": 1130,
        "end": 1262
      },
      "expression": false,
      "start": 1096,
      "end": 1262
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatchFinally2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1279,
        "end": 1295
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 1311,
                      "end": 1314
                    },
                    "start": 1309,
                    "end": 1314
                  },
                  "start": 1308,
                  "end": 1314
                },
                "init": null,
                "definite": false,
                "start": 1308,
                "end": 1314
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1319,
                      "end": 1322
                    },
                    "start": 1317,
                    "end": 1322
                  },
                  "start": 1316,
                  "end": 1322
                },
                "init": null,
                "definite": false,
                "start": 1316,
                "end": 1322
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1327,
                      "end": 1330
                    },
                    "start": 1325,
                    "end": 1330
                  },
                  "start": 1324,
                  "end": 1330
                },
                "init": null,
                "definite": false,
                "start": 1324,
                "end": 1330
              }
            ],
            "declare": false,
            "start": 1304,
            "end": 1331
          },
          {
            "type": "TryStatement",
            "block": {
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
                    "start": 1350,
                    "end": 1351
                  },
                  "directive": null,
                  "start": 1350,
                  "end": 1352
                }
              ],
              "start": 1340,
              "end": 1358
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1370,
                "end": 1371
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1389,
                        "end": 1390
                      },
                      "start": 1383,
                      "end": 1390
                    },
                    "directive": null,
                    "start": 1383,
                    "end": 1391
                  }
                ],
                "start": 1373,
                "end": 1397
              },
              "start": 1363,
              "end": 1397
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1420,
                    "end": 1421
                  },
                  "directive": null,
                  "start": 1420,
                  "end": 1422
                }
              ],
              "start": 1410,
              "end": 1428
            },
            "start": 1336,
            "end": 1428
          }
        ],
        "start": 1298,
        "end": 1430
      },
      "expression": false,
      "start": 1264,
      "end": 1430
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatchFinally3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1447,
        "end": 1463
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
            "kind": "var",
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
                      "type": "TSAnyKeyword",
                      "start": 1479,
                      "end": 1482
                    },
                    "start": 1477,
                    "end": 1482
                  },
                  "start": 1476,
                  "end": 1482
                },
                "init": null,
                "definite": false,
                "start": 1476,
                "end": 1482
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1487,
                      "end": 1490
                    },
                    "start": 1485,
                    "end": 1490
                  },
                  "start": 1484,
                  "end": 1490
                },
                "init": null,
                "definite": false,
                "start": 1484,
                "end": 1490
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1495,
                      "end": 1498
                    },
                    "start": 1493,
                    "end": 1498
                  },
                  "start": 1492,
                  "end": 1498
                },
                "init": null,
                "definite": false,
                "start": 1492,
                "end": 1498
              }
            ],
            "declare": false,
            "start": 1472,
            "end": 1499
          },
          {
            "type": "TryStatement",
            "block": {
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
                    "start": 1518,
                    "end": 1519
                  },
                  "directive": null,
                  "start": 1518,
                  "end": 1520
                }
              ],
              "start": 1508,
              "end": 1526
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1538,
                "end": 1539
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1551,
                      "end": 1552
                    },
                    "directive": null,
                    "start": 1551,
                    "end": 1553
                  }
                ],
                "start": 1541,
                "end": 1559
              },
              "start": 1531,
              "end": 1559
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1588,
                      "end": 1589
                    },
                    "start": 1582,
                    "end": 1589
                  },
                  "directive": null,
                  "start": 1582,
                  "end": 1590
                }
              ],
              "start": 1572,
              "end": 1596
            },
            "start": 1504,
            "end": 1596
          }
        ],
        "start": 1466,
        "end": 1598
      },
      "expression": false,
      "start": 1432,
      "end": 1598
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1598
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
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 61,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 67,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "tryCatch0",
    "start": 76,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 94,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "any",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 177,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 183,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "tryCatch1",
    "start": 192,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 225,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 234,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 248,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 267,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 299,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "tryCatch2",
    "start": 314,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 332,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 347,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 421,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 427,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "tryCatch3",
    "start": 436,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 449,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 511,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "e",
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
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 560,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 574,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 580,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "tryFinally0",
    "start": 589,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 624,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 660,
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
    "value": "y",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
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
    "type": "Identifier",
    "value": "tryFinally1",
    "start": 705,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
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
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 725,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 763,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 782,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 812,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 818,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "tryFinally2",
    "start": 827,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 854,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 862,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 871,
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
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 898,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 916,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 934,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 940,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "tryCatchFinally0",
    "start": 949,
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
    "value": "{",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 974,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 981,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 989,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 997,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1033,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1066,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "z",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1096,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1102,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "tryCatchFinally1",
    "start": 1111,
    "end": 1127
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
    "value": "var",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1143,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1151,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1182,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1201,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1234,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1264,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1270,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "tryCatchFinally2",
    "start": 1279,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1304,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1363,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1383,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1402,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1429,
    "end": 1430
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
    "type": "Identifier",
    "value": "tryCatchFinally3",
    "start": 1447,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1472,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1479,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1487,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1495,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 1531,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 1564,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1582,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598
  }
]
```
