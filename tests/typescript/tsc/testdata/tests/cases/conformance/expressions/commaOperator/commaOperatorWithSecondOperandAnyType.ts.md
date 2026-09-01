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
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9,
                "end": 12
              },
              "start": 7,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 27,
                "end": 34
              },
              "start": 25,
              "end": 34
            },
            "start": 18,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 34
        }
      ],
      "declare": false,
      "start": 14,
      "end": 35
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
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
            },
            "start": 40,
            "end": 54
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 54
        }
      ],
      "declare": false,
      "start": 36,
      "end": 55
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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "start": 60,
            "end": 74
          },
          "init": null,
          "definite": false,
          "start": 60,
          "end": 74
        }
      ],
      "declare": false,
      "start": 56,
      "end": 75
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
            "name": "OBJECT",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 94
                },
                "typeArguments": null,
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "start": 80,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 80,
          "end": 94
        }
      ],
      "declare": false,
      "start": 76,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 133
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 138
          }
        ],
        "start": 130,
        "end": 138
      },
      "directive": null,
      "start": 130,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 147
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 152
          }
        ],
        "start": 140,
        "end": 152
      },
      "directive": null,
      "start": 140,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 160
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 165
          }
        ],
        "start": 154,
        "end": 165
      },
      "directive": null,
      "start": 154,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 173
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          }
        ],
        "start": 167,
        "end": 178
      },
      "directive": null,
      "start": 167,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "OBJECT",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 186
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          }
        ],
        "start": 180,
        "end": 191
      },
      "directive": null,
      "start": 180,
      "end": 192
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
            "name": "resultIsAny1",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 231
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 238
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 243
              }
            ],
            "start": 235,
            "end": 243
          },
          "definite": false,
          "start": 219,
          "end": 244
        }
      ],
      "declare": false,
      "start": 215,
      "end": 245
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
            "name": "resultIsAny2",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 262
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 273
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 278
              }
            ],
            "start": 266,
            "end": 278
          },
          "definite": false,
          "start": 250,
          "end": 279
        }
      ],
      "declare": false,
      "start": 246,
      "end": 280
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
            "name": "resultIsAny3",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 297
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 307
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 312
              }
            ],
            "start": 301,
            "end": 312
          },
          "definite": false,
          "start": 285,
          "end": 313
        }
      ],
      "declare": false,
      "start": 281,
      "end": 314
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
            "name": "resultIsAny4",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 331
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 341
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 346
              }
            ],
            "start": 335,
            "end": 346
          },
          "definite": false,
          "start": 319,
          "end": 347
        }
      ],
      "declare": false,
      "start": 315,
      "end": 348
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
            "name": "resultIsAny5",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 365
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "OBJECT",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 375
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 380
              }
            ],
            "start": 369,
            "end": 380
          },
          "definite": false,
          "start": 353,
          "end": 381
        }
      ],
      "declare": false,
      "start": 349,
      "end": 382
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
                "type": "TSAnyKeyword",
                "start": 416,
                "end": 419
              },
              "start": 414,
              "end": 419
            },
            "start": 413,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 413,
          "end": 419
        }
      ],
      "declare": false,
      "start": 409,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 422,
            "end": 423
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 425,
            "end": 428
          }
        ],
        "start": 422,
        "end": 428
      },
      "directive": null,
      "start": 422,
      "end": 429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 438
            },
            "start": 430,
            "end": 438
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 443
          }
        ],
        "start": 430,
        "end": 443
      },
      "directive": null,
      "start": 430,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 445,
            "end": 453
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 456,
                "end": 460
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 462,
                "end": 463
              }
            ],
            "start": 455,
            "end": 464
          }
        ],
        "start": 445,
        "end": 464
      },
      "directive": null,
      "start": 445,
      "end": 465
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 466,
                "end": 474
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "charAt",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 481
              },
              "optional": false,
              "computed": false,
              "start": 466,
              "end": 481
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 482,
                "end": 483
              }
            ],
            "optional": false,
            "start": 466,
            "end": 484
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 487,
                "end": 491
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 493,
                "end": 494
              }
            ],
            "start": 486,
            "end": 495
          }
        ],
        "start": 466,
        "end": 495
      },
      "directive": null,
      "start": 466,
      "end": 496
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 497,
            "end": 501
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 504
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "any",
                "raw": "\"any\"",
                "start": 505,
                "end": 510
              }
            ],
            "optional": false,
            "start": 503,
            "end": 511
          }
        ],
        "start": 497,
        "end": 511
      },
      "directive": null,
      "start": 497,
      "end": 512
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 521
            },
            "prefix": true,
            "start": 513,
            "end": 521
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomeThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 536
              },
              "optional": false,
              "computed": false,
              "start": 523,
              "end": 536
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 523,
            "end": 538
          }
        ],
        "start": 513,
        "end": 538
      },
      "directive": null,
      "start": 513,
      "end": 539
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
            "name": "resultIsAny6",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 557
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 561,
                "end": 562
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 567
              }
            ],
            "start": 561,
            "end": 567
          },
          "definite": false,
          "start": 545,
          "end": 568
        }
      ],
      "declare": false,
      "start": 541,
      "end": 569
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
            "name": "resultIsAny7",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 586
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NUMBER",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 598
                },
                "start": 590,
                "end": 598
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 603
              }
            ],
            "start": 590,
            "end": 603
          },
          "definite": false,
          "start": 574,
          "end": 604
        }
      ],
      "declare": false,
      "start": 570,
      "end": 605
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
            "name": "resultIsAny8",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 622
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 626,
                "end": 634
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 636,
                "end": 640
              }
            ],
            "start": 626,
            "end": 640
          },
          "definite": false,
          "start": 610,
          "end": 641
        }
      ],
      "declare": false,
      "start": 606,
      "end": 642
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
            "name": "resultIsAny9",
            "optional": false,
            "typeAnnotation": null,
            "start": 647,
            "end": 659
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 663,
                    "end": 671
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "charAt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 678
                  },
                  "optional": false,
                  "computed": false,
                  "start": 663,
                  "end": 678
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 679,
                    "end": 680
                  }
                ],
                "optional": false,
                "start": 663,
                "end": 681
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 692
              }
            ],
            "start": 663,
            "end": 692
          },
          "definite": false,
          "start": 647,
          "end": 693
        }
      ],
      "declare": false,
      "start": 643,
      "end": 694
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
            "name": "resultIsAny10",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 712
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 716,
                "end": 720
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 722,
                  "end": 723
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "any",
                    "raw": "\"any\"",
                    "start": 724,
                    "end": 729
                  }
                ],
                "optional": false,
                "start": 722,
                "end": 730
              }
            ],
            "start": 716,
            "end": 730
          },
          "definite": false,
          "start": 699,
          "end": 731
        }
      ],
      "declare": false,
      "start": 695,
      "end": 732
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
            "name": "resultIsAny11",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 750
          },
          "init": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BOOLEAN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 762
                },
                "prefix": true,
                "start": 754,
                "end": 762
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 764,
                    "end": 765
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doSomeThing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 766,
                    "end": 777
                  },
                  "optional": false,
                  "computed": false,
                  "start": 764,
                  "end": 777
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 764,
                "end": 779
              }
            ],
            "start": 754,
            "end": 779
          },
          "definite": false,
          "start": 737,
          "end": 780
        }
      ],
      "declare": false,
      "start": 733,
      "end": 781
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 781
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 14,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "resultIsAny1",
    "start": 219,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "resultIsAny2",
    "start": 250,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "resultIsAny3",
    "start": 285,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "resultIsAny4",
    "start": 319,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "STRING",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "resultIsAny5",
    "start": 353,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "OBJECT",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 377,
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
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 430,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 432,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "Null",
    "value": "null",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 460,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 475,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 486,
    "end": 487
  },
  {
    "type": "Null",
    "value": "null",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "\"any\"",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 514,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "doSomeThing",
    "start": 525,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "resultIsAny6",
    "start": 545,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 564,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 570,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "resultIsAny7",
    "start": 574,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 590,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "NUMBER",
    "start": 592,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "resultIsAny8",
    "start": 610,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 626,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Null",
    "value": "null",
    "start": 636,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 643,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "resultIsAny9",
    "start": 647,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 662,
    "end": 663
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 663,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "charAt",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 683,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "resultIsAny10",
    "start": 699,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724
  },
  {
    "type": "String",
    "value": "\"any\"",
    "start": 724,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 733,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "resultIsAny11",
    "start": 737,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "BOOLEAN",
    "start": 755,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "doSomeThing",
    "start": 766,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  }
]
```
