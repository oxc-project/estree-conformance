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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        }
      ],
      "declare": true,
      "start": 0,
      "end": 14
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoisting",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 39
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
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 54
                },
                "init": null,
                "definite": false,
                "start": 52,
                "end": 54
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 58
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 61,
                  "end": 62
                },
                "definite": false,
                "start": 56,
                "end": 62
              }
            ],
            "declare": false,
            "start": 48,
            "end": 63
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
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
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 97
                      },
                      "init": null,
                      "definite": false,
                      "start": 95,
                      "end": 97
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 101
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 104,
                        "end": 105
                      },
                      "definite": false,
                      "start": 99,
                      "end": 105
                    }
                  ],
                  "declare": false,
                  "start": 91,
                  "end": 106
                }
              ],
              "start": 81,
              "end": 112
            },
            "expression": false,
            "start": 68,
            "end": 112
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 122,
              "end": 126
            },
            "consequent": {
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
                        "name": "c0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 144
                      },
                      "init": null,
                      "definite": false,
                      "start": 142,
                      "end": 144
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 148
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 151,
                        "end": 152
                      },
                      "definite": false,
                      "start": 146,
                      "end": 152
                    }
                  ],
                  "declare": false,
                  "start": 138,
                  "end": 153
                }
              ],
              "start": 128,
              "end": 159
            },
            "alternate": null,
            "start": 118,
            "end": 159
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 178,
                    "end": 179
                  },
                  "definite": false,
                  "start": 174,
                  "end": 179
                }
              ],
              "declare": false,
              "start": 170,
              "end": 179
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 185,
              "end": 193
            },
            "start": 165,
            "end": 193
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 209
                  },
                  "init": null,
                  "definite": false,
                  "start": 208,
                  "end": 209
                }
              ],
              "declare": false,
              "start": 204,
              "end": 209
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 216,
              "end": 224
            },
            "start": 199,
            "end": 224
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "init": null,
                  "definite": false,
                  "start": 239,
                  "end": 240
                }
              ],
              "declare": false,
              "start": 235,
              "end": 240
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 247,
              "end": 255
            },
            "start": 230,
            "end": 255
          }
        ],
        "start": 42,
        "end": 257
      },
      "expression": false,
      "start": 16,
      "end": 257
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoistingWithAwait",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 291
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
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "init": null,
                "definite": false,
                "start": 304,
                "end": 306
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 310
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 313,
                  "end": 314
                },
                "definite": false,
                "start": 308,
                "end": 314
              }
            ],
            "declare": false,
            "start": 300,
            "end": 315
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
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
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 350
                      },
                      "init": null,
                      "definite": false,
                      "start": 348,
                      "end": 350
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 354
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 357,
                        "end": 358
                      },
                      "definite": false,
                      "start": 352,
                      "end": 358
                    }
                  ],
                  "declare": false,
                  "start": 344,
                  "end": 359
                }
              ],
              "start": 334,
              "end": 365
            },
            "expression": false,
            "start": 321,
            "end": 365
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 377,
                "end": 378
              },
              "start": 371,
              "end": 378
            },
            "directive": null,
            "start": 371,
            "end": 379
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 389,
              "end": 393
            },
            "consequent": {
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
                        "name": "c0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 411
                      },
                      "init": null,
                      "definite": false,
                      "start": 409,
                      "end": 411
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 413,
                        "end": 415
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 418,
                        "end": 419
                      },
                      "definite": false,
                      "start": 413,
                      "end": 419
                    }
                  ],
                  "declare": false,
                  "start": 405,
                  "end": 420
                }
              ],
              "start": 395,
              "end": 426
            },
            "alternate": null,
            "start": 385,
            "end": 426
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 442
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 445,
                    "end": 446
                  },
                  "definite": false,
                  "start": 441,
                  "end": 446
                }
              ],
              "declare": false,
              "start": 437,
              "end": 446
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 452,
              "end": 460
            },
            "start": 432,
            "end": 460
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 476
                  },
                  "init": null,
                  "definite": false,
                  "start": 475,
                  "end": 476
                }
              ],
              "declare": false,
              "start": 471,
              "end": 476
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 483,
              "end": 491
            },
            "start": 466,
            "end": 491
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 507
                  },
                  "init": null,
                  "definite": false,
                  "start": 506,
                  "end": 507
                }
              ],
              "declare": false,
              "start": 502,
              "end": 507
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 512
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 514,
              "end": 522
            },
            "start": 497,
            "end": 522
          }
        ],
        "start": 294,
        "end": 524
      },
      "expression": false,
      "start": 259,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 525
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
    "value": "y",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 16,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "hoisting",
    "start": 31,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 102,
    "end": 103
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 146,
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
    "value": "1",
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
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 210,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 241,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 259,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 265,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "hoistingWithAwait",
    "start": 274,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 300,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 304,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "function",
    "start": 321,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "b0",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 352,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 371,
    "end": 376
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 405,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "c0",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 477,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 508,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  }
]
```
