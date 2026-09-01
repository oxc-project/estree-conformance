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
            "name": "itNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 21,
                  "end": 29
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    }
                  ],
                  "start": 29,
                  "end": 37
                },
                "start": 21,
                "end": 37
              },
              "start": 19,
              "end": 37
            },
            "start": 14,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 37
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 57
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 50,
              "end": 57
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 59,
            "end": 61
          },
          "expression": false,
          "start": 41,
          "end": 61
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 71
            },
            "start": 63,
            "end": 71
          }
        ],
        "optional": false,
        "start": 40,
        "end": 72
      },
      "directive": null,
      "start": 40,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 94
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 87,
              "end": 94
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 96,
            "end": 98
          },
          "expression": false,
          "start": 75,
          "end": 98
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 100,
            "end": 102
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 112
            },
            "start": 104,
            "end": 112
          }
        ],
        "optional": false,
        "start": 74,
        "end": 113
      },
      "directive": null,
      "start": 74,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 135
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 128,
              "end": 135
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 137,
            "end": 139
          },
          "expression": false,
          "start": 116,
          "end": 139
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 141,
            "end": 143
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 145,
            "end": 149
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "itNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 159
            },
            "start": 151,
            "end": 159
          }
        ],
        "optional": false,
        "start": 115,
        "end": 160
      },
      "directive": null,
      "start": 115,
      "end": 160
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 182
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 189,
              "end": 190
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 208,
                  "end": 215
                },
                "start": 208,
                "end": 217
              },
              "start": 199,
              "end": 217
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 183,
            "end": 217
          }
        ],
        "start": 182,
        "end": 218
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
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
                "start": 228,
                "end": 229
              },
              "typeArguments": null,
              "start": 228,
              "end": 229
            },
            "start": 226,
            "end": 229
          },
          "value": null,
          "start": 219,
          "end": 229
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 233
          },
          "typeArguments": null,
          "start": 232,
          "end": 233
        },
        "start": 230,
        "end": 233
      },
      "body": null,
      "expression": false,
      "start": 162,
      "end": 234
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "res1",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 245
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 251
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 255,
                  "end": 262
                },
                "start": 252,
                "end": 262
              }
            ],
            "optional": false,
            "start": 248,
            "end": 263
          },
          "definite": false,
          "start": 241,
          "end": 263
        }
      ],
      "declare": false,
      "start": 235,
      "end": 264
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "res2",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 275
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 290
                },
                "start": 282,
                "end": 290
              }
            ],
            "optional": false,
            "start": 278,
            "end": 291
          },
          "definite": false,
          "start": 271,
          "end": 291
        }
      ],
      "declare": false,
      "start": 265,
      "end": 292
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "res3",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 303
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 309
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 310,
                "end": 314
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 319,
                  "end": 326
                },
                "start": 316,
                "end": 326
              }
            ],
            "optional": false,
            "start": 306,
            "end": 327
          },
          "definite": false,
          "start": 299,
          "end": 327
        }
      ],
      "declare": false,
      "start": 293,
      "end": 328
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "res4",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 339
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 342,
              "end": 345
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 346,
                "end": 350
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 360
                },
                "start": 352,
                "end": 360
              }
            ],
            "optional": false,
            "start": 342,
            "end": 361
          },
          "definite": false,
          "start": 335,
          "end": 361
        }
      ],
      "declare": false,
      "start": 329,
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
        "start": 402,
        "end": 405
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 406,
              "end": 407
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 416,
                "end": 423
              },
              "start": 416,
              "end": 425
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 406,
            "end": 425
          }
        ],
        "start": 405,
        "end": 426
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 434
          },
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
                "start": 436,
                "end": 437
              },
              "typeArguments": null,
              "start": 436,
              "end": 437
            },
            "start": 434,
            "end": 437
          },
          "value": null,
          "start": 427,
          "end": 437
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 441
          },
          "typeArguments": null,
          "start": 440,
          "end": 441
        },
        "start": 438,
        "end": 441
      },
      "body": null,
      "expression": false,
      "start": 385,
      "end": 442
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 449,
            "end": 451
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 457
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 461,
                  "end": 468
                },
                "start": 458,
                "end": 468
              }
            ],
            "optional": false,
            "start": 454,
            "end": 469
          },
          "definite": false,
          "start": 449,
          "end": 469
        }
      ],
      "declare": false,
      "start": 443,
      "end": 470
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 479
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 485
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 494
                },
                "start": 486,
                "end": 494
              }
            ],
            "optional": false,
            "start": 482,
            "end": 495
          },
          "definite": false,
          "start": 477,
          "end": 495
        }
      ],
      "declare": false,
      "start": 471,
      "end": 496
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 505
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 511
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 512,
                "end": 516
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 521,
                  "end": 528
                },
                "start": 518,
                "end": 528
              }
            ],
            "optional": false,
            "start": 508,
            "end": 529
          },
          "definite": false,
          "start": 503,
          "end": 529
        }
      ],
      "declare": false,
      "start": 497,
      "end": 530
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 539
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 545
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 546,
                "end": 550
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "itNum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 560
                },
                "start": 552,
                "end": 560
              }
            ],
            "optional": false,
            "start": 542,
            "end": 561
          },
          "definite": false,
          "start": 537,
          "end": 561
        }
      ],
      "declare": false,
      "start": 531,
      "end": 562
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 562
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "itNum",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 21,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "itNum",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 75,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "rest",
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
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "''",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "itNum",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "''",
    "start": 141,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "itNum",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 162,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 183,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 191,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 199,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 208,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "res1",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 252,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 265,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "res2",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "itNum",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "res3",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 316,
    "end": 319
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 319,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "res4",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 346,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "itNum",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 385,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 393,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 408,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 416,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 443,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 449,
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
    "value": "foo",
    "start": 454,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 458,
    "end": 461
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 461,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 471,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "itNum",
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
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 497,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 508,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 518,
    "end": 521
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "p4",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "itNum",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  }
]
```
