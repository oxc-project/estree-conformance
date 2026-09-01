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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "type": "TSUnknownKeyword",
              "start": 16,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "start": 13,
          "end": 23
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 28,
              "end": 35
            },
            "start": 26,
            "end": 35
          },
          "start": 25,
          "end": 35
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "prefix": true,
                "start": 47,
                "end": 55
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 60,
                "end": 68
              },
              "start": 47,
              "end": 68
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 81
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 90
                      },
                      "optional": false,
                      "computed": false,
                      "start": 80,
                      "end": 90
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 80,
                    "end": 92
                  },
                  "directive": null,
                  "start": 80,
                  "end": 93
                }
              ],
              "start": 70,
              "end": 99
            },
            "alternate": null,
            "start": 43,
            "end": 99
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "prefix": true,
                  "start": 108,
                  "end": 116
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 121,
                  "end": 129
                },
                "start": 108,
                "end": 129
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "start": 108,
              "end": 134
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 147
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 156
                      },
                      "optional": false,
                      "computed": false,
                      "start": 146,
                      "end": 156
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 146,
                    "end": 158
                  },
                  "directive": null,
                  "start": 146,
                  "end": 159
                }
              ],
              "start": 136,
              "end": 165
            },
            "alternate": null,
            "start": 104,
            "end": 165
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 187
                  },
                  "prefix": true,
                  "start": 179,
                  "end": 187
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 192,
                  "end": 200
                },
                "start": 179,
                "end": 200
              },
              "start": 174,
              "end": 200
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 213
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 222
                      },
                      "optional": false,
                      "computed": false,
                      "start": 212,
                      "end": 222
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 212,
                    "end": 224
                  },
                  "directive": null,
                  "start": 212,
                  "end": 225
                }
              ],
              "start": 202,
              "end": 231
            },
            "alternate": null,
            "start": 170,
            "end": 231
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 241
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "start": 240,
                "end": 246
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 258
                  },
                  "prefix": true,
                  "start": 250,
                  "end": 258
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 263,
                  "end": 271
                },
                "start": 250,
                "end": 271
              },
              "start": 240,
              "end": 271
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 293
                      },
                      "optional": false,
                      "computed": false,
                      "start": 283,
                      "end": 293
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 283,
                    "end": 295
                  },
                  "directive": null,
                  "start": 283,
                  "end": 296
                }
              ],
              "start": 273,
              "end": 302
            },
            "alternate": null,
            "start": 236,
            "end": 302
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "start": 311,
                "end": 317
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 329
                  },
                  "prefix": true,
                  "start": 321,
                  "end": 329
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 334,
                  "end": 342
                },
                "start": 321,
                "end": 342
              },
              "start": 311,
              "end": 342
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 364
                      },
                      "optional": false,
                      "computed": false,
                      "start": 354,
                      "end": 364
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 354,
                    "end": 366
                  },
                  "directive": null,
                  "start": 354,
                  "end": 367
                }
              ],
              "start": 344,
              "end": 373
            },
            "alternate": null,
            "start": 307,
            "end": 373
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 382,
                    "end": 383
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 387,
                    "end": 388
                  },
                  "start": 382,
                  "end": 388
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
                },
                "start": 382,
                "end": 393
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "prefix": true,
                  "start": 397,
                  "end": 405
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 410,
                  "end": 418
                },
                "start": 397,
                "end": 418
              },
              "start": 382,
              "end": 418
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 440
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 440
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 430,
                    "end": 442
                  },
                  "directive": null,
                  "start": 430,
                  "end": 443
                }
              ],
              "start": 420,
              "end": 449
            },
            "alternate": null,
            "start": 378,
            "end": 449
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 459
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 464
                      },
                      "start": 458,
                      "end": 464
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 469
                    },
                    "start": 458,
                    "end": 469
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 458,
                  "end": 474
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 479
                },
                "start": 458,
                "end": 479
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "prefix": true,
                  "start": 483,
                  "end": 491
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 496,
                  "end": 504
                },
                "start": 483,
                "end": 504
              },
              "start": 458,
              "end": 504
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 517
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 526
                      },
                      "optional": false,
                      "computed": false,
                      "start": 516,
                      "end": 526
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 516,
                    "end": 528
                  },
                  "directive": null,
                  "start": 516,
                  "end": 529
                }
              ],
              "start": 506,
              "end": 535
            },
            "alternate": null,
            "start": 454,
            "end": 535
          }
        ],
        "start": 37,
        "end": 537
      },
      "expression": false,
      "start": 0,
      "end": 537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 572
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
              "type": "TSUnknownKeyword",
              "start": 576,
              "end": 583
            },
            "start": 574,
            "end": 583
          },
          "start": 573,
          "end": 583
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 586,
          "end": 589
        },
        "start": 584,
        "end": 589
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 616
                    },
                    "prefix": true,
                    "start": 608,
                    "end": 616
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "object",
                    "raw": "'object'",
                    "start": 621,
                    "end": 629
                  },
                  "start": 608,
                  "end": 629
                },
                "start": 603,
                "end": 629
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 649
                  },
                  "optional": false,
                  "computed": false,
                  "start": 633,
                  "end": 649
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 650,
                    "end": 653
                  }
                ],
                "optional": false,
                "start": 633,
                "end": 654
              },
              "start": 603,
              "end": 654
            },
            "start": 596,
            "end": 655
          }
        ],
        "start": 590,
        "end": 657
      },
      "expression": false,
      "start": 561,
      "end": 657
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 657
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 16,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 28,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 56,
    "end": 59
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 117,
    "end": 120
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 121,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 130,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 148,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
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
    "start": 170,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 176,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 188,
    "end": 191
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 192,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 214,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 236,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 247,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 250,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 259,
    "end": 262
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 263,
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
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 285,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 313,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 318,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 321,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 330,
    "end": 333
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 334,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 356,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 378,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 389,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 394,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 397,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 406,
    "end": 409
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 410,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 432,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 460,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 465,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 470,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 475,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 480,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 483,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 492,
    "end": 495
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 496,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 518,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 561,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 570,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
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
    "value": "unknown",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 586,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 596,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 605,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 608,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 617,
    "end": 620
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 621,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 635,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 656,
    "end": 657
  }
]
```
