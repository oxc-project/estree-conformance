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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 20,
            "end": 28
          },
          "definite": false,
          "start": 16,
          "end": 28
        }
      ],
      "declare": false,
      "start": 10,
      "end": 29
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "start": 35,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 44
        }
      ],
      "declare": false,
      "start": 31,
      "end": 45
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 90,
        "end": 94
      },
      "consequent": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 113,
                  "end": 114
                },
                "definite": false,
                "start": 109,
                "end": 114
              }
            ],
            "declare": false,
            "start": 103,
            "end": 115
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "start": 120,
              "end": 125
            },
            "directive": null,
            "start": 120,
            "end": 126
          }
        ],
        "start": 96,
        "end": 128
      },
      "alternate": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 151,
                  "end": 152
                },
                "definite": false,
                "start": 147,
                "end": 152
              }
            ],
            "declare": false,
            "start": 141,
            "end": 153
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 159
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "start": 158,
              "end": 163
            },
            "directive": null,
            "start": 158,
            "end": 164
          }
        ],
        "start": 134,
        "end": 166
      },
      "start": 86,
      "end": 166
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 175,
        "end": 179
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 195
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 198,
                  "end": 199
                },
                "definite": false,
                "start": 194,
                "end": 199
              }
            ],
            "declare": false,
            "start": 188,
            "end": 200
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 206
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 210
              },
              "start": 205,
              "end": 210
            },
            "directive": null,
            "start": 205,
            "end": 211
          }
        ],
        "start": 181,
        "end": 213
      },
      "start": 168,
      "end": 213
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 231
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 234,
                  "end": 235
                },
                "definite": false,
                "start": 230,
                "end": 235
              }
            ],
            "declare": false,
            "start": 224,
            "end": 236
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 246
              },
              "start": 241,
              "end": 246
            },
            "directive": null,
            "start": 241,
            "end": 247
          }
        ],
        "start": 218,
        "end": 249
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 257,
        "end": 261
      },
      "start": 215,
      "end": 263
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
            "start": 269,
            "end": 272
          },
          "init": null,
          "definite": false,
          "start": 269,
          "end": 272
        }
      ],
      "declare": false,
      "start": 265,
      "end": 273
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 283
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 301,
                  "end": 302
                },
                "definite": false,
                "start": 297,
                "end": 302
              }
            ],
            "declare": false,
            "start": 291,
            "end": 303
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 313
              },
              "start": 308,
              "end": 313
            },
            "directive": null,
            "start": 308,
            "end": 314
          }
        ],
        "start": 285,
        "end": 316
      },
      "start": 274,
      "end": 316
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
              "start": 327,
              "end": 328
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 331,
              "end": 332
            },
            "definite": false,
            "start": 327,
            "end": 332
          }
        ],
        "declare": false,
        "start": 323,
        "end": 332
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 334,
          "end": 335
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 338,
          "end": 340
        },
        "start": 334,
        "end": 340
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
          "start": 342,
          "end": 343
        },
        "start": 342,
        "end": 345
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 360
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 363,
                  "end": 364
                },
                "definite": false,
                "start": 359,
                "end": 364
              }
            ],
            "declare": false,
            "start": 353,
            "end": 365
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 375
              },
              "start": 370,
              "end": 375
            },
            "directive": null,
            "start": 370,
            "end": 376
          }
        ],
        "start": 347,
        "end": 378
      },
      "start": 318,
      "end": 378
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
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 391
            },
            "init": null,
            "definite": false,
            "start": 389,
            "end": 391
          }
        ],
        "declare": false,
        "start": 385,
        "end": 391
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 395,
        "end": 397
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 415,
                  "end": 416
                },
                "definite": false,
                "start": 411,
                "end": 416
              }
            ],
            "declare": false,
            "start": 405,
            "end": 417
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 427
              },
              "start": 422,
              "end": 427
            },
            "directive": null,
            "start": 422,
            "end": 428
          }
        ],
        "start": 399,
        "end": 430
      },
      "start": 380,
      "end": 430
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 436,
        "end": 440
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 453
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 462
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 465,
                    "end": 466
                  },
                  "definite": false,
                  "start": 461,
                  "end": 466
                }
              ],
              "declare": false,
              "start": 455,
              "end": 467
            },
            "start": 448,
            "end": 467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 473
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "start": 472,
              "end": 477
            },
            "directive": null,
            "start": 472,
            "end": 478
          }
        ],
        "start": 442,
        "end": 480
      },
      "alternate": null,
      "start": 432,
      "end": 480
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 489,
        "end": 494
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label2",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 508
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 516
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 524
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 532,
                        "end": 533
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 536,
                        "end": 537
                      },
                      "definite": false,
                      "start": 532,
                      "end": 537
                    }
                  ],
                  "declare": false,
                  "start": 526,
                  "end": 538
                },
                "start": 518,
                "end": 538
              },
              "start": 510,
              "end": 538
            },
            "start": 502,
            "end": 538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 548
              },
              "start": 543,
              "end": 548
            },
            "directive": null,
            "start": 543,
            "end": 549
          }
        ],
        "start": 496,
        "end": 551
      },
      "start": 482,
      "end": 551
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 591
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 594,
                  "end": 595
                },
                "definite": false,
                "start": 590,
                "end": 595
              }
            ],
            "declare": false,
            "start": 584,
            "end": 596
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 602
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              },
              "start": 601,
              "end": 606
            },
            "directive": null,
            "start": 601,
            "end": 607
          }
        ],
        "start": 578,
        "end": 609
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 618
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 633
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 636,
                    "end": 637
                  },
                  "definite": false,
                  "start": 632,
                  "end": 637
                }
              ],
              "declare": false,
              "start": 626,
              "end": 638
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 643,
                  "end": 644
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 648
                },
                "start": 643,
                "end": 648
              },
              "directive": null,
              "start": 643,
              "end": 649
            }
          ],
          "start": 620,
          "end": 651
        },
        "start": 610,
        "end": 651
      },
      "finalizer": {
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 676,
                  "end": 677
                },
                "definite": false,
                "start": 672,
                "end": 677
              }
            ],
            "declare": false,
            "start": 666,
            "end": 678
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 688
              },
              "start": 683,
              "end": 688
            },
            "directive": null,
            "start": 683,
            "end": 689
          }
        ],
        "start": 660,
        "end": 691
      },
      "start": 574,
      "end": 691
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 711,
        "end": 712
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 725,
            "end": 726
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 743
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 746,
                    "end": 747
                  },
                  "definite": false,
                  "start": 742,
                  "end": 747
                }
              ],
              "declare": false,
              "start": 736,
              "end": 748
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 758
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 762
                },
                "start": 757,
                "end": 762
              },
              "directive": null,
              "start": 757,
              "end": 763
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 772,
              "end": 778
            }
          ],
          "start": 720,
          "end": 778
        }
      ],
      "start": 703,
      "end": 780
    },
    {
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 804,
                "end": 805
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 808,
                "end": 809
              },
              "definite": false,
              "start": 804,
              "end": 809
            }
          ],
          "declare": false,
          "start": 798,
          "end": 810
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 815,
              "end": 816
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 820
            },
            "start": 815,
            "end": 820
          },
          "directive": null,
          "start": 815,
          "end": 821
        },
        {
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 843
                  },
                  "init": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 846,
                    "end": 851
                  },
                  "definite": false,
                  "start": 842,
                  "end": 851
                }
              ],
              "declare": false,
              "start": 836,
              "end": 852
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 868,
                        "end": 875
                      },
                      "start": 866,
                      "end": 875
                    },
                    "start": 865,
                    "end": 875
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 878,
                    "end": 879
                  },
                  "definite": false,
                  "start": 865,
                  "end": 879
                }
              ],
              "declare": false,
              "start": 861,
              "end": 880
            }
          ],
          "start": 826,
          "end": 886
        }
      ],
      "start": 792,
      "end": 888
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 914
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 930
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 933,
                  "end": 934
                },
                "definite": false,
                "start": 929,
                "end": 934
              }
            ],
            "declare": false,
            "start": 923,
            "end": 935
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 941
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 944,
                "end": 945
              },
              "start": 940,
              "end": 945
            },
            "directive": null,
            "start": 940,
            "end": 946
          }
        ],
        "start": 917,
        "end": 948
      },
      "expression": false,
      "start": 904,
      "end": 948
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
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 954,
            "end": 956
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 977,
                        "end": 978
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 981,
                        "end": 982
                      },
                      "definite": false,
                      "start": 977,
                      "end": 982
                    }
                  ],
                  "declare": false,
                  "start": 971,
                  "end": 983
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 988,
                      "end": 989
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 992,
                      "end": 993
                    },
                    "start": 988,
                    "end": 993
                  },
                  "directive": null,
                  "start": 988,
                  "end": 994
                }
              ],
              "start": 965,
              "end": 996
            },
            "id": null,
            "generator": false,
            "start": 959,
            "end": 996
          },
          "definite": false,
          "start": 954,
          "end": 996
        }
      ],
      "declare": false,
      "start": 950,
      "end": 997
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
            "name": "F3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1005
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1032,
                        "end": 1033
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1036,
                        "end": 1037
                      },
                      "definite": false,
                      "start": 1032,
                      "end": 1037
                    }
                  ],
                  "declare": false,
                  "start": 1026,
                  "end": 1038
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1043,
                      "end": 1044
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1048
                    },
                    "start": 1043,
                    "end": 1048
                  },
                  "directive": null,
                  "start": 1043,
                  "end": 1049
                }
              ],
              "start": 1020,
              "end": 1051
            },
            "expression": false,
            "start": 1008,
            "end": 1051
          },
          "definite": false,
          "start": 1003,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 999,
      "end": 1052
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1075,
        "end": 1076
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1089,
                  "end": 1090
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1093,
                  "end": 1094
                },
                "definite": false,
                "start": 1089,
                "end": 1094
              }
            ],
            "declare": false,
            "start": 1083,
            "end": 1095
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1101
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1104,
                "end": 1105
              },
              "start": 1100,
              "end": 1105
            },
            "directive": null,
            "start": 1100,
            "end": 1106
          },
          {
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1127,
                      "end": 1128
                    },
                    "init": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1131,
                      "end": 1136
                    },
                    "definite": false,
                    "start": 1127,
                    "end": 1136
                  }
                ],
                "declare": false,
                "start": 1121,
                "end": 1137
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
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1153,
                          "end": 1160
                        },
                        "start": 1151,
                        "end": 1160
                      },
                      "start": 1149,
                      "end": 1160
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1163,
                      "end": 1164
                    },
                    "definite": false,
                    "start": 1149,
                    "end": 1164
                  }
                ],
                "declare": false,
                "start": 1145,
                "end": 1165
              }
            ],
            "start": 1112,
            "end": 1171
          }
        ],
        "start": 1077,
        "end": 1173
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1065,
      "end": 1173
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
        "start": 1192,
        "end": 1193
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1211
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1230,
                          "end": 1231
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1234,
                          "end": 1235
                        },
                        "definite": false,
                        "start": 1230,
                        "end": 1235
                      }
                    ],
                    "declare": false,
                    "start": 1224,
                    "end": 1236
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1245,
                        "end": 1246
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1249,
                        "end": 1250
                      },
                      "start": 1245,
                      "end": 1250
                    },
                    "directive": null,
                    "start": 1245,
                    "end": 1251
                  }
                ],
                "start": 1214,
                "end": 1257
              },
              "expression": false,
              "start": 1211,
              "end": 1257
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1200,
            "end": 1257
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1269
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1288,
                          "end": 1289
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1292,
                          "end": 1293
                        },
                        "definite": false,
                        "start": 1288,
                        "end": 1293
                      }
                    ],
                    "declare": false,
                    "start": 1282,
                    "end": 1294
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1303,
                        "end": 1304
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1307,
                        "end": 1308
                      },
                      "start": 1303,
                      "end": 1308
                    },
                    "directive": null,
                    "start": 1303,
                    "end": 1309
                  }
                ],
                "start": 1272,
                "end": 1315
              },
              "expression": false,
              "start": 1269,
              "end": 1315
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1263,
            "end": 1315
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1325,
              "end": 1326
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1345,
                          "end": 1346
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1349,
                          "end": 1350
                        },
                        "definite": false,
                        "start": 1345,
                        "end": 1350
                      }
                    ],
                    "declare": false,
                    "start": 1339,
                    "end": 1351
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1360,
                        "end": 1361
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1364,
                        "end": 1365
                      },
                      "start": 1360,
                      "end": 1365
                    },
                    "directive": null,
                    "start": 1360,
                    "end": 1366
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1382,
                      "end": 1383
                    },
                    "start": 1375,
                    "end": 1384
                  }
                ],
                "start": 1329,
                "end": 1390
              },
              "expression": false,
              "start": 1326,
              "end": 1390
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1321,
            "end": 1390
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1401
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1402,
                  "end": 1407
                }
              ],
              "returnType": null,
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1425,
                          "end": 1426
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1429,
                          "end": 1430
                        },
                        "definite": false,
                        "start": 1425,
                        "end": 1430
                      }
                    ],
                    "declare": false,
                    "start": 1419,
                    "end": 1431
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1440,
                        "end": 1441
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1444,
                        "end": 1445
                      },
                      "start": 1440,
                      "end": 1445
                    },
                    "directive": null,
                    "start": 1440,
                    "end": 1446
                  }
                ],
                "start": 1409,
                "end": 1452
              },
              "expression": false,
              "start": 1401,
              "end": 1452
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1396,
            "end": 1452
          }
        ],
        "start": 1194,
        "end": 1454
      },
      "abstract": false,
      "declare": false,
      "start": 1186,
      "end": 1454
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1479,
            "end": 1480
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1489,
                  "end": 1490
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1509,
                              "end": 1510
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1513,
                              "end": 1514
                            },
                            "definite": false,
                            "start": 1509,
                            "end": 1514
                          }
                        ],
                        "declare": false,
                        "start": 1503,
                        "end": 1515
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1524,
                            "end": 1525
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1528,
                            "end": 1529
                          },
                          "start": 1524,
                          "end": 1529
                        },
                        "directive": null,
                        "start": 1524,
                        "end": 1530
                      }
                    ],
                    "start": 1493,
                    "end": 1536
                  },
                  "expression": false,
                  "start": 1490,
                  "end": 1536
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1489,
                "end": 1536
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1542,
                  "end": 1544
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1568,
                              "end": 1569
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1572,
                              "end": 1573
                            },
                            "definite": false,
                            "start": 1568,
                            "end": 1573
                          }
                        ],
                        "declare": false,
                        "start": 1562,
                        "end": 1574
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1583,
                            "end": 1584
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1588
                          },
                          "start": 1583,
                          "end": 1588
                        },
                        "directive": null,
                        "start": 1583,
                        "end": 1589
                      }
                    ],
                    "start": 1552,
                    "end": 1595
                  },
                  "id": null,
                  "generator": false,
                  "start": 1546,
                  "end": 1595
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1542,
                "end": 1595
              }
            ],
            "start": 1483,
            "end": 1597
          },
          "definite": false,
          "start": 1479,
          "end": 1597
        }
      ],
      "declare": false,
      "start": 1475,
      "end": 1597
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 1597
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 10,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 20,
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
    "value": "var",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
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
    "value": "if",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 90,
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
    "value": "const",
    "start": 103,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 141,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 151,
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
    "value": "n",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 188,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Identifier",
    "value": "c",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 224,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 269,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 280,
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
    "type": "Keyword",
    "value": "const",
    "start": 291,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 336,
    "end": 337
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 343,
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
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 361,
    "end": 362
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 389,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 392,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 405,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 448,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 455,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Identifier",
    "value": "c",
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
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 502,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "label3",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "label4",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 526,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 534,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 584,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 610,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 626,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "0",
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
    "type": "Identifier",
    "value": "n",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 652,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 666,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 703,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 710,
    "end": 711
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 720,
    "end": 724
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 736,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 772,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 798,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 836,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 846,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 868,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 904,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "F",
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
    "value": "{",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 923,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 962,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 965,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 971,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 979,
    "end": 980
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1008,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1026,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1065,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1083,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1121,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1131,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1149,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1153,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1186,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1200,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1263,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1282,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1321,
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
    "value": "(",
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
    "value": "const",
    "start": 1339,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1375,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1396,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1402,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1419,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Numeric",
    "value": "0",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "type": "Keyword",
    "value": "var",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1503,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1542,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1549,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1562,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1596,
    "end": 1597
  }
]
```
