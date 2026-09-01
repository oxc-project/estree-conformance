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
        "name": "generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 24
              },
              "typeArguments": null,
              "start": 23,
              "end": 24
            },
            "start": 21,
            "end": 24
          },
          "start": 20,
          "end": 24
        }
      ],
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 39,
                      "end": 45
                    },
                    "start": 37,
                    "end": 45
                  },
                  "start": 36,
                  "end": 45
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "definite": false,
                "start": 36,
                "end": 49
              }
            ],
            "declare": false,
            "start": 32,
            "end": 50
          }
        ],
        "start": 26,
        "end": 68
      },
      "expression": false,
      "start": 0,
      "end": 68
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
            "start": 73,
            "end": 74
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 77,
            "end": 79
          },
          "definite": false,
          "start": 73,
          "end": 79
        }
      ],
      "declare": false,
      "start": 69,
      "end": 80
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
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "Literal",
            "value": "42",
            "raw": "\"42\"",
            "start": 89,
            "end": 93
          },
          "definite": false,
          "start": 85,
          "end": 93
        }
      ],
      "declare": false,
      "start": 81,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 103
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 104,
              "end": 110
            }
          ],
          "start": 103,
          "end": 111
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 112,
            "end": 114
          }
        ],
        "optional": false,
        "start": 96,
        "end": 115
      },
      "directive": null,
      "start": 96,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 124
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 125,
              "end": 131
            }
          ],
          "start": 124,
          "end": 132
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          }
        ],
        "optional": false,
        "start": 117,
        "end": 135
      },
      "directive": null,
      "start": 117,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 144
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 145,
              "end": 151
            }
          ],
          "start": 144,
          "end": 152
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 153,
            "end": 156
          }
        ],
        "optional": false,
        "start": 137,
        "end": 157
      },
      "directive": null,
      "start": 137,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 182
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSObjectKeyword",
              "start": 183,
              "end": 189
            }
          ],
          "start": 182,
          "end": 190
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          }
        ],
        "optional": false,
        "start": 175,
        "end": 193
      },
      "directive": null,
      "start": 175,
      "end": 194
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bound",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 226
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 237,
              "end": 243
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 243
          }
        ],
        "start": 226,
        "end": 244
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 249
              },
              "typeArguments": null,
              "start": 248,
              "end": 249
            },
            "start": 246,
            "end": 249
          },
          "start": 245,
          "end": 249
        }
      ],
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 264,
                      "end": 270
                    },
                    "start": 262,
                    "end": 270
                  },
                  "start": 261,
                  "end": 270
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "definite": false,
                "start": 261,
                "end": 274
              }
            ],
            "declare": false,
            "start": 257,
            "end": 275
          }
        ],
        "start": 251,
        "end": 283
      },
      "expression": false,
      "start": 212,
      "end": 283
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 291,
            "end": 293
          }
        ],
        "optional": false,
        "start": 285,
        "end": 294
      },
      "directive": null,
      "start": 285,
      "end": 295
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 301
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 303
          }
        ],
        "optional": false,
        "start": 296,
        "end": 304
      },
      "directive": null,
      "start": 296,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 311
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 312,
            "end": 315
          }
        ],
        "optional": false,
        "start": 306,
        "end": 316
      },
      "directive": null,
      "start": 306,
      "end": 317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 339
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 341
          }
        ],
        "optional": false,
        "start": 334,
        "end": 342
      },
      "directive": null,
      "start": 334,
      "end": 343
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bound2",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 376
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 378
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 393
          }
        ],
        "start": 376,
        "end": 394
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 397,
        "end": 399
      },
      "expression": false,
      "start": 361,
      "end": 399
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 407
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 408,
              "end": 410
            }
          ],
          "start": 407,
          "end": 411
        },
        "arguments": [],
        "optional": false,
        "start": 401,
        "end": 413
      },
      "directive": null,
      "start": 401,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 421
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 428
              },
              "typeArguments": null,
              "start": 422,
              "end": 428
            }
          ],
          "start": 421,
          "end": 429
        },
        "arguments": [],
        "optional": false,
        "start": 415,
        "end": 431
      },
      "directive": null,
      "start": 415,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 439
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 440,
              "end": 446
            }
          ],
          "start": 439,
          "end": 447
        },
        "arguments": [],
        "optional": false,
        "start": 433,
        "end": 449
      },
      "directive": null,
      "start": 433,
      "end": 450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bound2",
          "optional": false,
          "typeAnnotation": null,
          "start": 467,
          "end": 473
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 474,
              "end": 480
            }
          ],
          "start": 473,
          "end": 481
        },
        "arguments": [],
        "optional": false,
        "start": 467,
        "end": 483
      },
      "directive": null,
      "start": 467,
      "end": 484
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bound3",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 517
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 519
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 528,
              "end": 530
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 518,
            "end": 530
          }
        ],
        "start": 517,
        "end": 531
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "typeArguments": null,
              "start": 535,
              "end": 536
            },
            "start": 533,
            "end": 536
          },
          "start": 532,
          "end": 536
        }
      ],
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 551,
                      "end": 557
                    },
                    "start": 549,
                    "end": 557
                  },
                  "start": 548,
                  "end": 557
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 561
                },
                "definite": false,
                "start": 548,
                "end": 561
              }
            ],
            "declare": false,
            "start": 544,
            "end": 562
          }
        ],
        "start": 538,
        "end": 570
      },
      "expression": false,
      "start": 502,
      "end": 570
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Proxy",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 587
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 598,
              "end": 604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 588,
            "end": 604
          }
        ],
        "start": 587,
        "end": 605
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 606,
        "end": 608
      },
      "declare": false,
      "start": 572,
      "end": 608
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 622
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 623,
                      "end": 629
                    }
                  ],
                  "start": 622,
                  "end": 630
                },
                "start": 617,
                "end": 630
              },
              "start": 615,
              "end": 630
            },
            "start": 614,
            "end": 630
          },
          "init": null,
          "definite": false,
          "start": 614,
          "end": 630
        }
      ],
      "declare": false,
      "start": 610,
      "end": 631
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 648,
                  "end": 653
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNullKeyword",
                      "start": 654,
                      "end": 658
                    }
                  ],
                  "start": 653,
                  "end": 659
                },
                "start": 648,
                "end": 659
              },
              "start": 646,
              "end": 659
            },
            "start": 645,
            "end": 659
          },
          "init": null,
          "definite": false,
          "start": 645,
          "end": 659
        }
      ],
      "declare": false,
      "start": 641,
      "end": 660
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 679
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 680,
                      "end": 689
                    }
                  ],
                  "start": 679,
                  "end": 690
                },
                "start": 674,
                "end": 690
              },
              "start": 672,
              "end": 690
            },
            "start": 671,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 671,
          "end": 690
        }
      ],
      "declare": false,
      "start": 667,
      "end": 692
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 715
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 725
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 727,
                "end": 733
              },
              "start": 725,
              "end": 733
            },
            "accessibility": null,
            "static": false,
            "start": 722,
            "end": 734
          }
        ],
        "start": 716,
        "end": 736
      },
      "declare": false,
      "start": 701,
      "end": 736
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Proxy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 745,
                  "end": 750
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Blah",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 751,
                        "end": 755
                      },
                      "typeArguments": null,
                      "start": 751,
                      "end": 755
                    }
                  ],
                  "start": 750,
                  "end": 756
                },
                "start": 745,
                "end": 756
              },
              "start": 743,
              "end": 756
            },
            "start": 742,
            "end": 756
          },
          "init": null,
          "definite": false,
          "start": 742,
          "end": 756
        }
      ],
      "declare": false,
      "start": 738,
      "end": 757
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 763
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
    "value": "generic",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "t",
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
    "value": "T",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "value": "object",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"42\"",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 117,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "generic",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 212,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "bound",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 229,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "bound",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "bound",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "bound",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 312,
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
    "type": "Identifier",
    "value": "bound",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 361,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "bound2",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 379,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "bound2",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "bound2",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
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
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "bound2",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Identifier",
    "value": "bound2",
    "start": 467,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 502,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "bound3",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 520,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 551,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 572,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 582,
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
    "value": "T",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 590,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 623,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 641,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 648,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 653,
    "end": 654
  },
  {
    "type": "Null",
    "value": "null",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 674,
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
    "value": "undefined",
    "start": 680,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 701,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 711,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 722,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 727,
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
    "type": "Keyword",
    "value": "var",
    "start": 738,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 745,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  }
]
```
