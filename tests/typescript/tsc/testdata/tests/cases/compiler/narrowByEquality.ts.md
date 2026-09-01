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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 24,
                    "end": 30
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 33,
                    "end": 40
                  }
                ],
                "start": 15,
                "end": 40
              },
              "start": 13,
              "end": 40
            },
            "start": 12,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 40
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "start": 53,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 53,
          "end": 62
        }
      ],
      "declare": true,
      "start": 41,
      "end": 63
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 79,
                "end": 85
              },
              "start": 77,
              "end": 85
            },
            "start": 76,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 76,
          "end": 85
        }
      ],
      "declare": true,
      "start": 64,
      "end": 86
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 102,
                "end": 109
              },
              "start": 100,
              "end": 109
            },
            "start": 99,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 99,
          "end": 109
        }
      ],
      "declare": true,
      "start": 87,
      "end": 110
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
            "name": "xUnknown",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 133,
                "end": 140
              },
              "start": 131,
              "end": 140
            },
            "start": 123,
            "end": 140
          },
          "init": null,
          "definite": false,
          "start": 123,
          "end": 140
        }
      ],
      "declare": true,
      "start": 111,
      "end": 141
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
          "start": 147,
          "end": 148
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 153
        },
        "start": 147,
        "end": 153
      },
      "consequent": {
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
              "start": 161,
              "end": 162
            },
            "directive": null,
            "start": 161,
            "end": 163
          }
        ],
        "start": 155,
        "end": 165
      },
      "alternate": null,
      "start": 143,
      "end": 165
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
          "start": 171,
          "end": 172
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 177
        },
        "start": 171,
        "end": 177
      },
      "consequent": {
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
              "start": 185,
              "end": 186
            },
            "directive": null,
            "start": 185,
            "end": 187
          }
        ],
        "start": 179,
        "end": 189
      },
      "alternate": null,
      "start": 167,
      "end": 189
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
          "start": 195,
          "end": 196
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 201
        },
        "start": 195,
        "end": 201
      },
      "consequent": {
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
              "start": 209,
              "end": 210
            },
            "directive": null,
            "start": 209,
            "end": 211
          }
        ],
        "start": 203,
        "end": 213
      },
      "alternate": null,
      "start": 191,
      "end": 213
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
          "start": 219,
          "end": 220
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 224,
          "end": 225
        },
        "start": 219,
        "end": 225
      },
      "consequent": {
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
              "start": 233,
              "end": 234
            },
            "directive": null,
            "start": 233,
            "end": 235
          }
        ],
        "start": 227,
        "end": 237
      },
      "alternate": null,
      "start": 215,
      "end": 237
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
          "start": 243,
          "end": 244
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 248,
          "end": 250
        },
        "start": 243,
        "end": 250
      },
      "consequent": {
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
              "start": 258,
              "end": 259
            },
            "directive": null,
            "start": 258,
            "end": 260
          }
        ],
        "start": 252,
        "end": 262
      },
      "alternate": null,
      "start": 239,
      "end": 262
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
          "start": 268,
          "end": 269
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 273,
          "end": 278
        },
        "start": 268,
        "end": 278
      },
      "consequent": {
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
              "start": 286,
              "end": 287
            },
            "directive": null,
            "start": 286,
            "end": 288
          }
        ],
        "start": 280,
        "end": 290
      },
      "alternate": null,
      "start": 264,
      "end": 290
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
          "start": 296,
          "end": 297
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 301,
          "end": 305
        },
        "start": 296,
        "end": 305
      },
      "consequent": {
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
              "start": 313,
              "end": 314
            },
            "directive": null,
            "start": 313,
            "end": 315
          }
        ],
        "start": 307,
        "end": 317
      },
      "alternate": null,
      "start": 292,
      "end": 317
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
          "start": 323,
          "end": 324
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 328,
          "end": 333
        },
        "start": 323,
        "end": 333
      },
      "consequent": {
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
              "start": 341,
              "end": 342
            },
            "directive": null,
            "start": 341,
            "end": 343
          }
        ],
        "start": 335,
        "end": 345
      },
      "alternate": null,
      "start": 319,
      "end": 345
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
            "name": "xAndObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 368,
                    "end": 374
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 377,
                    "end": 383
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 386,
                    "end": 393
                  },
                  {
                    "type": "TSObjectKeyword",
                    "start": 396,
                    "end": 402
                  }
                ],
                "start": 368,
                "end": 402
              },
              "start": 366,
              "end": 402
            },
            "start": 359,
            "end": 402
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 402
        }
      ],
      "declare": true,
      "start": 347,
      "end": 402
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xAndObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 415
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 419,
          "end": 421
        },
        "start": 408,
        "end": 421
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xAndObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 436
            },
            "directive": null,
            "start": 429,
            "end": 437
          }
        ],
        "start": 423,
        "end": 439
      },
      "alternate": null,
      "start": 404,
      "end": 439
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
          "start": 445,
          "end": 446
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "xAndObj",
          "optional": false,
          "typeAnnotation": null,
          "start": 450,
          "end": 457
        },
        "start": 445,
        "end": 457
      },
      "consequent": {
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
              "start": 465,
              "end": 466
            },
            "directive": null,
            "start": 465,
            "end": 467
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xAndObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 479
            },
            "directive": null,
            "start": 472,
            "end": 480
          }
        ],
        "start": 459,
        "end": 482
      },
      "alternate": null,
      "start": 441,
      "end": 482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 519
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "level",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 527,
                  "end": 533
                },
                {
                  "type": "TSStringKeyword",
                  "start": 536,
                  "end": 542
                }
              ],
              "start": 527,
              "end": 542
            },
            "start": 525,
            "end": 542
          },
          "start": 520,
          "end": 542
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 544,
          "end": 550
        },
        "start": 543,
        "end": 550
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "level",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 566
              },
              "operator": "==",
              "right": {
                "type": "UnaryExpression",
                "operator": "+",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "level",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 576
                },
                "prefix": true,
                "start": 570,
                "end": 576
              },
              "start": 561,
              "end": 576
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
                        "name": "q2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 598,
                            "end": 604
                          },
                          "start": 596,
                          "end": 604
                        },
                        "start": 594,
                        "end": 604
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "level",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 612
                      },
                      "definite": false,
                      "start": 594,
                      "end": 612
                    }
                  ],
                  "declare": false,
                  "start": 588,
                  "end": 613
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "level",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 638,
                    "end": 643
                  },
                  "start": 631,
                  "end": 644
                }
              ],
              "start": 578,
              "end": 650
            },
            "alternate": null,
            "start": 557,
            "end": 650
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 662,
              "end": 663
            },
            "start": 655,
            "end": 664
          }
        ],
        "start": 551,
        "end": 666
      },
      "expression": false,
      "start": 506,
      "end": 666
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xUnknown",
          "optional": false,
          "typeAnnotation": null,
          "start": 693,
          "end": 701
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 705,
          "end": 709
        },
        "start": 693,
        "end": 709
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 725
            },
            "directive": null,
            "start": 717,
            "end": 726
          }
        ],
        "start": 711,
        "end": 728
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 748
            },
            "directive": null,
            "start": 740,
            "end": 748
          }
        ],
        "start": 734,
        "end": 750
      },
      "start": 689,
      "end": 750
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "xUnknown",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 764
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 768,
          "end": 772
        },
        "start": 756,
        "end": 772
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 788
            },
            "directive": null,
            "start": 780,
            "end": 789
          }
        ],
        "start": 774,
        "end": 791
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "xUnknown",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 811
            },
            "directive": null,
            "start": 803,
            "end": 812
          }
        ],
        "start": 797,
        "end": 814
      },
      "start": 752,
      "end": 814
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 815
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
    "value": "let",
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
    "value": "number",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 33,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 41,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 49,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 64,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 87,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 95,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 102,
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
    "value": "declare",
    "start": 111,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 143,
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
    "value": "x",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "x",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 167,
    "end": 169
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
    "value": "==",
    "start": 173,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 197,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "if",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 221,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 245,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 270,
    "end": 272
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 273,
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
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 298,
    "end": 300
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 301,
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
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 325,
    "end": 327
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 347,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "xAndObj",
    "start": 359,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 368,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 386,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 396,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "xAndObj",
    "start": 408,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "xAndObj",
    "start": 429,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 441,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 447,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "xAndObj",
    "start": 450,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "xAndObj",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 506,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 536,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 544,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 557,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 571,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
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
    "start": 588,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "q2",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 607,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 631,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "level",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 655,
    "end": 661
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "start": 665,
    "end": 666
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 693,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 702,
    "end": 704
  },
  {
    "type": "Null",
    "value": "null",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 717,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 740,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 756,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 765,
    "end": 767
  },
  {
    "type": "Null",
    "value": "null",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 780,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 792,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "xUnknown",
    "start": 803,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  }
]
```
