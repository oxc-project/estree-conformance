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
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 16
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 19
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral0",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 53
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
                "start": 62,
                "end": 63
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 74
                    },
                    "start": 67,
                    "end": 74
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 77
                  }
                ],
                "start": 66,
                "end": 78
              },
              "start": 62,
              "end": 78
            },
            "directive": null,
            "start": 62,
            "end": 79
          }
        ],
        "start": 56,
        "end": 81
      },
      "expression": false,
      "start": 25,
      "end": 81
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral1",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 111
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
                "start": 120,
                "end": 121
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 126
                  },
                  {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 135
                    },
                    "start": 128,
                    "end": 135
                  }
                ],
                "start": 124,
                "end": 136
              },
              "start": 120,
              "end": 136
            },
            "directive": null,
            "start": 120,
            "end": 137
          }
        ],
        "start": 114,
        "end": 139
      },
      "expression": false,
      "start": 83,
      "end": 139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral2",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 169
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
                "start": 178,
                "end": 179
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 194
                      },
                      "start": 187,
                      "end": 194
                    },
                    "start": 183,
                    "end": 195
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  }
                ],
                "start": 182,
                "end": 199
              },
              "start": 178,
              "end": 199
            },
            "directive": null,
            "start": 178,
            "end": 200
          }
        ],
        "start": 172,
        "end": 202
      },
      "expression": false,
      "start": 141,
      "end": 202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral3",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 232
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
                "start": 241,
                "end": 242
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 250
                    },
                    "start": 246,
                    "end": 250
                  },
                  {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "start": 252,
                    "end": 259
                  }
                ],
                "start": 245,
                "end": 260
              },
              "start": 241,
              "end": 260
            },
            "directive": null,
            "start": 241,
            "end": 261
          }
        ],
        "start": 235,
        "end": 263
      },
      "expression": false,
      "start": 204,
      "end": 263
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral4",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 293
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
                "start": 302,
                "end": 303
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 314
                    },
                    "start": 307,
                    "end": 314
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 320
                    },
                    "start": 316,
                    "end": 320
                  }
                ],
                "start": 306,
                "end": 321
              },
              "start": 302,
              "end": 321
            },
            "directive": null,
            "start": 302,
            "end": 322
          }
        ],
        "start": 296,
        "end": 324
      },
      "expression": false,
      "start": 265,
      "end": 324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral5",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 354
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
                "start": 363,
                "end": 364
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 382
                      },
                      "start": 375,
                      "end": 382
                    },
                    "start": 371,
                    "end": 383
                  }
                ],
                "start": 367,
                "end": 384
              },
              "start": 363,
              "end": 384
            },
            "directive": null,
            "start": 363,
            "end": 385
          }
        ],
        "start": 357,
        "end": 387
      },
      "expression": false,
      "start": 326,
      "end": 387
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral6",
        "optional": false,
        "typeAnnotation": null,
        "start": 404,
        "end": 417
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
                "start": 426,
                "end": 427
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 432
                  },
                  {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 441
                    },
                    "start": 434,
                    "end": 441
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 444
                  }
                ],
                "start": 430,
                "end": 445
              },
              "start": 426,
              "end": 445
            },
            "directive": null,
            "start": 426,
            "end": 446
          }
        ],
        "start": 420,
        "end": 448
      },
      "expression": false,
      "start": 389,
      "end": 448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "arrayLiteral7",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 478
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
                "start": 487,
                "end": 488
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "start": 492,
                    "end": 499
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 502
                  },
                  {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 510,
                      "end": 511
                    },
                    "start": 504,
                    "end": 511
                  }
                ],
                "start": 491,
                "end": 512
              },
              "start": 487,
              "end": 512
            },
            "directive": null,
            "start": 487,
            "end": 513
          }
        ],
        "start": 481,
        "end": 515
      },
      "expression": false,
      "start": 450,
      "end": 515
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 515
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
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 25,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 31,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral0",
    "start": 40,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 83,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral1",
    "start": 98,
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
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "type": "Identifier",
    "value": "await",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 141,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 147,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral2",
    "start": 156,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 183,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 187,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "async",
    "start": 204,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral3",
    "start": 219,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 252,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 265,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 271,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral4",
    "start": 280,
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
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 307,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 313,
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
    "type": "Identifier",
    "value": "z",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 326,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 332,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral5",
    "start": 341,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 375,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 389,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 395,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral6",
    "start": 404,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
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
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 434,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 450,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "arrayLiteral7",
    "start": 465,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 492,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 504,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  }
]
```
