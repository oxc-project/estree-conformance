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
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        }
      ],
      "declare": false,
      "start": 0,
      "end": 6
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 14,
        "end": 19
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 43
                    },
                    "init": null,
                    "definite": false,
                    "start": 42,
                    "end": 43
                  }
                ],
                "declare": false,
                "start": 38,
                "end": 44
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 59,
                    "end": 60
                  },
                  "id": null,
                  "generator": false,
                  "start": 53,
                  "end": 60
                },
                "directive": null,
                "start": 53,
                "end": 61
              }
            ],
            "start": 28,
            "end": 67
          }
        ],
        "start": 22,
        "end": 69
      },
      "start": 7,
      "end": 69
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
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 75,
          "end": 76
        }
      ],
      "declare": false,
      "start": 71,
      "end": 77
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 85,
        "end": 90
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "init": null,
                    "definite": false,
                    "start": 113,
                    "end": 114
                  }
                ],
                "declare": false,
                "start": 109,
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 128,
                    "end": 129
                  },
                  "start": 124,
                  "end": 129
                },
                "directive": null,
                "start": 124,
                "end": 130
              }
            ],
            "start": 99,
            "end": 136
          }
        ],
        "start": 93,
        "end": 138
      },
      "start": 78,
      "end": 138
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
            "name": "z0",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 146
        }
      ],
      "declare": false,
      "start": 140,
      "end": 147
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 155,
        "end": 160
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 177,
              "end": 178
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 194,
                  "end": 195
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
                          "name": "z0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 215
                        },
                        "init": null,
                        "definite": false,
                        "start": 213,
                        "end": 215
                      }
                    ],
                    "declare": false,
                    "start": 209,
                    "end": 216
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 237
                      },
                      "id": null,
                      "generator": false,
                      "start": 229,
                      "end": 237
                    },
                    "directive": null,
                    "start": 229,
                    "end": 238
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 251,
                    "end": 257
                  }
                ],
                "start": 189,
                "end": 257
              }
            ],
            "start": 169,
            "end": 263
          }
        ],
        "start": 163,
        "end": 265
      },
      "start": 148,
      "end": 265
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
            "typeAnnotation": null,
            "start": 271,
            "end": 272
          },
          "init": null,
          "definite": false,
          "start": 271,
          "end": 272
        }
      ],
      "declare": false,
      "start": 267,
      "end": 273
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 281,
        "end": 286
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 303,
              "end": 304
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 320,
                  "end": 321
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
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 339,
                          "end": 340
                        },
                        "init": null,
                        "definite": false,
                        "start": 339,
                        "end": 340
                      }
                    ],
                    "declare": false,
                    "start": 335,
                    "end": 341
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 358,
                        "end": 359
                      },
                      "start": 354,
                      "end": 359
                    },
                    "directive": null,
                    "start": 354,
                    "end": 360
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 373,
                    "end": 379
                  }
                ],
                "start": 315,
                "end": 379
              }
            ],
            "start": 295,
            "end": 385
          }
        ],
        "start": 289,
        "end": 387
      },
      "start": 274,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 387
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 38,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
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
    "value": "=>",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "y",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 140,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 189,
    "end": 193
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 232,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "z0",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 251,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 271,
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
    "value": "for",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Boolean",
    "value": "false",
    "start": 281,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 315,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 339,
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
    "value": "z",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  }
]
```
