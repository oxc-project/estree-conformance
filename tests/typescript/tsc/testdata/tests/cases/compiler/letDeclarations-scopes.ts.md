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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "init": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 18,
            "end": 26
          },
          "definite": false,
          "start": 14,
          "end": 26
        }
      ],
      "declare": false,
      "start": 10,
      "end": 27
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
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "start": 33,
            "end": 42
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 42
        }
      ],
      "declare": false,
      "start": 29,
      "end": 43
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 88,
        "end": 92
      },
      "consequent": {
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 105
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 108,
                  "end": 109
                },
                "definite": false,
                "start": 104,
                "end": 109
              }
            ],
            "declare": false,
            "start": 100,
            "end": 110
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
                "start": 115,
                "end": 116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "start": 115,
              "end": 120
            },
            "directive": null,
            "start": 115,
            "end": 121
          }
        ],
        "start": 94,
        "end": 123
      },
      "alternate": {
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 140
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 143,
                  "end": 144
                },
                "definite": false,
                "start": 139,
                "end": 144
              }
            ],
            "declare": false,
            "start": 135,
            "end": 145
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
                "start": 150,
                "end": 151
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "start": 150,
              "end": 155
            },
            "directive": null,
            "start": 150,
            "end": 156
          }
        ],
        "start": 129,
        "end": 158
      },
      "start": 84,
      "end": 158
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 167,
        "end": 171
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 187,
                  "end": 188
                },
                "definite": false,
                "start": 183,
                "end": 188
              }
            ],
            "declare": false,
            "start": 179,
            "end": 189
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
                "start": 194,
                "end": 195
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 199
              },
              "start": 194,
              "end": 199
            },
            "directive": null,
            "start": 194,
            "end": 200
          }
        ],
        "start": 173,
        "end": 202
      },
      "start": 160,
      "end": 202
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 220,
                  "end": 221
                },
                "definite": false,
                "start": 216,
                "end": 221
              }
            ],
            "declare": false,
            "start": 212,
            "end": 222
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
                "start": 227,
                "end": 228
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 232
              },
              "start": 227,
              "end": 232
            },
            "directive": null,
            "start": 227,
            "end": 233
          }
        ],
        "start": 207,
        "end": 235
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 243,
        "end": 247
      },
      "start": 204,
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
            "start": 255,
            "end": 258
          },
          "init": null,
          "definite": false,
          "start": 255,
          "end": 258
        }
      ],
      "declare": false,
      "start": 251,
      "end": 259
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 269
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 285,
                  "end": 286
                },
                "definite": false,
                "start": 281,
                "end": 286
              }
            ],
            "declare": false,
            "start": 277,
            "end": 287
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
                "start": 292,
                "end": 293
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 297
              },
              "start": 292,
              "end": 297
            },
            "directive": null,
            "start": 292,
            "end": 298
          }
        ],
        "start": 271,
        "end": 300
      },
      "start": 260,
      "end": 300
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
              "start": 311,
              "end": 312
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 315,
              "end": 316
            },
            "definite": false,
            "start": 311,
            "end": 316
          }
        ],
        "declare": false,
        "start": 307,
        "end": 316
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 318,
          "end": 319
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 322,
          "end": 324
        },
        "start": 318,
        "end": 324
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
          "start": 326,
          "end": 327
        },
        "start": 326,
        "end": 329
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 342
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 345,
                  "end": 346
                },
                "definite": false,
                "start": 341,
                "end": 346
              }
            ],
            "declare": false,
            "start": 337,
            "end": 347
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
                "start": 352,
                "end": 353
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 357
              },
              "start": 352,
              "end": 357
            },
            "directive": null,
            "start": 352,
            "end": 358
          }
        ],
        "start": 331,
        "end": 360
      },
      "start": 302,
      "end": 360
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
              "start": 371,
              "end": 373
            },
            "init": null,
            "definite": false,
            "start": 371,
            "end": 373
          }
        ],
        "declare": false,
        "start": 367,
        "end": 373
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 377,
        "end": 379
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 392
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 395,
                  "end": 396
                },
                "definite": false,
                "start": 391,
                "end": 396
              }
            ],
            "declare": false,
            "start": 387,
            "end": 397
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
                "start": 402,
                "end": 403
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 407
              },
              "start": 402,
              "end": 407
            },
            "directive": null,
            "start": 402,
            "end": 408
          }
        ],
        "start": 381,
        "end": 410
      },
      "start": 362,
      "end": 410
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 416,
        "end": 420
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
              "start": 428,
              "end": 433
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 443,
                    "end": 444
                  },
                  "definite": false,
                  "start": 439,
                  "end": 444
                }
              ],
              "declare": false,
              "start": 435,
              "end": 445
            },
            "start": 428,
            "end": 445
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
                "start": 450,
                "end": 451
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 455
              },
              "start": 450,
              "end": 455
            },
            "directive": null,
            "start": 450,
            "end": 456
          }
        ],
        "start": 422,
        "end": 458
      },
      "alternate": null,
      "start": 412,
      "end": 458
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 467,
        "end": 472
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
              "start": 480,
              "end": 486
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 494
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 502
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 509
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 512,
                        "end": 513
                      },
                      "definite": false,
                      "start": 508,
                      "end": 513
                    }
                  ],
                  "declare": false,
                  "start": 504,
                  "end": 514
                },
                "start": 496,
                "end": 514
              },
              "start": 488,
              "end": 514
            },
            "start": 480,
            "end": 514
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
                "start": 519,
                "end": 520
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 524
              },
              "start": 519,
              "end": 524
            },
            "directive": null,
            "start": 519,
            "end": 525
          }
        ],
        "start": 474,
        "end": 527
      },
      "start": 460,
      "end": 527
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
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 542,
              "end": 543
            },
            "definite": false,
            "start": 538,
            "end": 543
          }
        ],
        "declare": false,
        "start": 534,
        "end": 543
      },
      "test": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 546
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 549,
          "end": 550
        },
        "start": 545,
        "end": 550
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 553
        },
        "start": 552,
        "end": 555
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 568
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 571,
                  "end": 575
                },
                "definite": false,
                "start": 567,
                "end": 575
              }
            ],
            "declare": false,
            "start": 563,
            "end": 576
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
                  "name": "b3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 589,
                      "end": 596
                    },
                    "start": 587,
                    "end": 596
                  },
                  "start": 585,
                  "end": 596
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 600
                },
                "definite": false,
                "start": 585,
                "end": 600
              }
            ],
            "declare": false,
            "start": 581,
            "end": 601
          }
        ],
        "start": 557,
        "end": 603
      },
      "start": 529,
      "end": 603
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
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 615
            },
            "init": null,
            "definite": false,
            "start": 614,
            "end": 615
          }
        ],
        "declare": false,
        "start": 610,
        "end": 615
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 619,
        "end": 621
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 623,
        "end": 627
      },
      "start": 605,
      "end": 627
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 668,
                  "end": 669
                },
                "definite": false,
                "start": 664,
                "end": 669
              }
            ],
            "declare": false,
            "start": 660,
            "end": 670
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
                "start": 675,
                "end": 676
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 680
              },
              "start": 675,
              "end": 680
            },
            "directive": null,
            "start": 675,
            "end": 681
          }
        ],
        "start": 654,
        "end": 683
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 692
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
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 705
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 708,
                    "end": 709
                  },
                  "definite": false,
                  "start": 704,
                  "end": 709
                }
              ],
              "declare": false,
              "start": 700,
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 716
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 719,
                  "end": 720
                },
                "start": 715,
                "end": 720
              },
              "directive": null,
              "start": 715,
              "end": 721
            }
          ],
          "start": 694,
          "end": 723
        },
        "start": 684,
        "end": 723
      },
      "finalizer": {
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
                  "name": "l",
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
            "start": 738,
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
                "start": 753,
                "end": 754
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "start": 753,
              "end": 758
            },
            "directive": null,
            "start": 753,
            "end": 759
          }
        ],
        "start": 732,
        "end": 761
      },
      "start": 650,
      "end": 761
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 781,
        "end": 782
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 795,
            "end": 796
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 810,
                    "end": 811
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 814,
                    "end": 815
                  },
                  "definite": false,
                  "start": 810,
                  "end": 815
                }
              ],
              "declare": false,
              "start": 806,
              "end": 816
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
                  "start": 825,
                  "end": 826
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 829,
                  "end": 830
                },
                "start": 825,
                "end": 830
              },
              "directive": null,
              "start": 825,
              "end": 831
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 840,
              "end": 846
            }
          ],
          "start": 790,
          "end": 846
        }
      ],
      "start": 773,
      "end": 848
    },
    {
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
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 871
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 874,
                "end": 875
              },
              "definite": false,
              "start": 870,
              "end": 875
            }
          ],
          "declare": false,
          "start": 866,
          "end": 876
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
              "start": 881,
              "end": 882
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "l",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 886
            },
            "start": 881,
            "end": 886
          },
          "directive": null,
          "start": 881,
          "end": 887
        },
        {
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
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 907
                  },
                  "init": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 910,
                    "end": 915
                  },
                  "definite": false,
                  "start": 906,
                  "end": 915
                }
              ],
              "declare": false,
              "start": 902,
              "end": 916
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
                        "start": 932,
                        "end": 939
                      },
                      "start": 930,
                      "end": 939
                    },
                    "start": 929,
                    "end": 939
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 942,
                    "end": 943
                  },
                  "definite": false,
                  "start": 929,
                  "end": 943
                }
              ],
              "declare": false,
              "start": 925,
              "end": 944
            }
          ],
          "start": 892,
          "end": 950
        }
      ],
      "start": 860,
      "end": 952
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 976,
        "end": 977
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 991
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 994,
                  "end": 995
                },
                "definite": false,
                "start": 990,
                "end": 995
              }
            ],
            "declare": false,
            "start": 986,
            "end": 996
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
                "start": 1001,
                "end": 1002
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1005,
                "end": 1006
              },
              "start": 1001,
              "end": 1006
            },
            "directive": null,
            "start": 1001,
            "end": 1007
          }
        ],
        "start": 980,
        "end": 1009
      },
      "expression": false,
      "start": 967,
      "end": 1009
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
            "start": 1015,
            "end": 1017
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1036,
                        "end": 1037
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1040,
                        "end": 1041
                      },
                      "definite": false,
                      "start": 1036,
                      "end": 1041
                    }
                  ],
                  "declare": false,
                  "start": 1032,
                  "end": 1042
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
                      "start": 1047,
                      "end": 1048
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1052
                    },
                    "start": 1047,
                    "end": 1052
                  },
                  "directive": null,
                  "start": 1047,
                  "end": 1053
                }
              ],
              "start": 1026,
              "end": 1055
            },
            "id": null,
            "generator": false,
            "start": 1020,
            "end": 1055
          },
          "definite": false,
          "start": 1015,
          "end": 1055
        }
      ],
      "declare": false,
      "start": 1011,
      "end": 1056
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
            "start": 1062,
            "end": 1064
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
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
                  "start": 1085,
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
                      "name": "l",
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
                }
              ],
              "start": 1079,
              "end": 1108
            },
            "expression": false,
            "start": 1067,
            "end": 1108
          },
          "definite": false,
          "start": 1062,
          "end": 1108
        }
      ],
      "declare": false,
      "start": 1058,
      "end": 1109
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1133
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "l",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1144,
                  "end": 1145
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1148,
                  "end": 1149
                },
                "definite": false,
                "start": 1144,
                "end": 1149
              }
            ],
            "declare": false,
            "start": 1140,
            "end": 1150
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
                "start": 1155,
                "end": 1156
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 1159,
                "end": 1160
              },
              "start": 1155,
              "end": 1160
            },
            "directive": null,
            "start": 1155,
            "end": 1161
          },
          {
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
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1180,
                      "end": 1181
                    },
                    "init": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1184,
                      "end": 1189
                    },
                    "definite": false,
                    "start": 1180,
                    "end": 1189
                  }
                ],
                "declare": false,
                "start": 1176,
                "end": 1190
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
                          "start": 1206,
                          "end": 1213
                        },
                        "start": 1204,
                        "end": 1213
                      },
                      "start": 1202,
                      "end": 1213
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1216,
                      "end": 1217
                    },
                    "definite": false,
                    "start": 1202,
                    "end": 1217
                  }
                ],
                "declare": false,
                "start": 1198,
                "end": 1218
              }
            ],
            "start": 1167,
            "end": 1224
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "lable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1235
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1243
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1246,
                    "end": 1247
                  },
                  "definite": false,
                  "start": 1241,
                  "end": 1247
                }
              ],
              "declare": false,
              "start": 1237,
              "end": 1248
            },
            "start": 1230,
            "end": 1248
          }
        ],
        "start": 1134,
        "end": 1250
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1122,
      "end": 1250
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
        "start": 1269,
        "end": 1270
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
              "start": 1277,
              "end": 1288
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1305,
                          "end": 1306
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1309,
                          "end": 1310
                        },
                        "definite": false,
                        "start": 1305,
                        "end": 1310
                      }
                    ],
                    "declare": false,
                    "start": 1301,
                    "end": 1311
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
                        "start": 1320,
                        "end": 1321
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1324,
                        "end": 1325
                      },
                      "start": 1320,
                      "end": 1325
                    },
                    "directive": null,
                    "start": 1320,
                    "end": 1326
                  }
                ],
                "start": 1291,
                "end": 1332
              },
              "expression": false,
              "start": 1288,
              "end": 1332
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1277,
            "end": 1332
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
              "start": 1338,
              "end": 1344
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1361,
                          "end": 1362
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1365,
                          "end": 1366
                        },
                        "definite": false,
                        "start": 1361,
                        "end": 1366
                      }
                    ],
                    "declare": false,
                    "start": 1357,
                    "end": 1367
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
                        "start": 1376,
                        "end": 1377
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1380,
                        "end": 1381
                      },
                      "start": 1376,
                      "end": 1381
                    },
                    "directive": null,
                    "start": 1376,
                    "end": 1382
                  }
                ],
                "start": 1347,
                "end": 1388
              },
              "expression": false,
              "start": 1344,
              "end": 1388
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1338,
            "end": 1388
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
              "start": 1398,
              "end": 1399
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1416,
                          "end": 1417
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1420,
                          "end": 1421
                        },
                        "definite": false,
                        "start": 1416,
                        "end": 1421
                      }
                    ],
                    "declare": false,
                    "start": 1412,
                    "end": 1422
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
                        "start": 1431,
                        "end": 1432
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1435,
                        "end": 1436
                      },
                      "start": 1431,
                      "end": 1436
                    },
                    "directive": null,
                    "start": 1431,
                    "end": 1437
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1454
                    },
                    "start": 1446,
                    "end": 1455
                  }
                ],
                "start": 1402,
                "end": 1461
              },
              "expression": false,
              "start": 1399,
              "end": 1461
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1394,
            "end": 1461
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
              "start": 1471,
              "end": 1472
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
                  "start": 1473,
                  "end": 1478
                }
              ],
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
                          "name": "l",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1495
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1498,
                          "end": 1499
                        },
                        "definite": false,
                        "start": 1494,
                        "end": 1499
                      }
                    ],
                    "declare": false,
                    "start": 1490,
                    "end": 1500
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
                        "start": 1509,
                        "end": 1510
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1513,
                        "end": 1514
                      },
                      "start": 1509,
                      "end": 1514
                    },
                    "directive": null,
                    "start": 1509,
                    "end": 1515
                  }
                ],
                "start": 1480,
                "end": 1521
              },
              "expression": false,
              "start": 1472,
              "end": 1521
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1467,
            "end": 1521
          }
        ],
        "start": 1271,
        "end": 1523
      },
      "abstract": false,
      "declare": false,
      "start": 1263,
      "end": 1523
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
            "start": 1548,
            "end": 1549
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
                  "start": 1558,
                  "end": 1559
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
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "l",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1576,
                              "end": 1577
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1580,
                              "end": 1581
                            },
                            "definite": false,
                            "start": 1576,
                            "end": 1581
                          }
                        ],
                        "declare": false,
                        "start": 1572,
                        "end": 1582
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
                            "start": 1591,
                            "end": 1592
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1595,
                            "end": 1596
                          },
                          "start": 1591,
                          "end": 1596
                        },
                        "directive": null,
                        "start": 1591,
                        "end": 1597
                      }
                    ],
                    "start": 1562,
                    "end": 1603
                  },
                  "expression": false,
                  "start": 1559,
                  "end": 1603
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1558,
                "end": 1603
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
                  "start": 1609,
                  "end": 1611
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
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "l",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1633,
                              "end": 1634
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1637,
                              "end": 1638
                            },
                            "definite": false,
                            "start": 1633,
                            "end": 1638
                          }
                        ],
                        "declare": false,
                        "start": 1629,
                        "end": 1639
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
                            "start": 1648,
                            "end": 1649
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1652,
                            "end": 1653
                          },
                          "start": 1648,
                          "end": 1653
                        },
                        "directive": null,
                        "start": 1648,
                        "end": 1654
                      }
                    ],
                    "start": 1619,
                    "end": 1660
                  },
                  "id": null,
                  "generator": false,
                  "start": 1613,
                  "end": 1660
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1609,
                "end": 1660
              }
            ],
            "start": 1552,
            "end": 1662
          },
          "definite": false,
          "start": 1548,
          "end": 1662
        }
      ],
      "declare": false,
      "start": 1544,
      "end": 1662
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 1662
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 10,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 18,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 29,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 160,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 179,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Identifier",
    "value": "l",
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
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 251,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 260,
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
    "value": "obj",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 307,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "i",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 320,
    "end": 321
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "l",
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
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "n",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 371,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 387,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 416,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 428,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 460,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 467,
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
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 480,
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
    "value": "label3",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "label4",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 504,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 534,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 569,
    "end": 570
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 581,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 585,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 589,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 610,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 660,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 684,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 691,
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
    "value": "{",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 700,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "value": "n",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 724,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 738,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "l",
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
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "l",
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
    "value": "}",
    "start": 760,
    "end": 761
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 773,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 790,
    "end": 794
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "let",
    "start": 806,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 830,
    "end": 831
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
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 866,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 872,
    "end": 873
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "l",
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
    "value": "{",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 902,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 908,
    "end": 909
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 910,
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
    "value": "var",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 932,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 967,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 986,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 992,
    "end": 993
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 1023,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1067,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "l",
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
    "value": "l",
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
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1122,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "l",
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
    "value": "{",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1198,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1202,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1206,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "lable",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1237,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "l2",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1263,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1277,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1301,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1338,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "n",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1446,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1467,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1473,
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
    "value": "{",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1490,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Identifier",
    "value": "l",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1544,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1609,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1616,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1629,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1661,
    "end": 1662
  }
]
```
