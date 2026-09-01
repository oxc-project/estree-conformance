__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
                "name": "iNext",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 70
              },
              "init": null,
              "definite": false,
              "start": 65,
              "end": 70
            }
          ],
          "declare": false,
          "start": 61,
          "end": 71
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 92,
                  "end": 93
                },
                "definite": false,
                "start": 88,
                "end": 93
              }
            ],
            "declare": false,
            "start": 84,
            "end": 93
          },
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 103,
              "end": 105
            },
            "start": 99,
            "end": 105
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNext",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 120
            },
            "start": 111,
            "end": 120
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
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 145
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 149,
                    "end": 150
                  },
                  "start": 144,
                  "end": 150
                },
                "consequent": {
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
                          "name": "iNext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 165
                        },
                        "right": {
                          "type": "Literal",
                          "value": "bad",
                          "raw": "\"bad\"",
                          "start": 168,
                          "end": 173
                        },
                        "start": 160,
                        "end": 173
                      },
                      "directive": null,
                      "start": 160,
                      "end": 174
                    },
                    {
                      "type": "ContinueStatement",
                      "label": null,
                      "start": 181,
                      "end": 190
                    }
                  ],
                  "start": 152,
                  "end": 196
                },
                "alternate": null,
                "start": 140,
                "end": 196
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iNext",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 206
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 210
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 213,
                      "end": 214
                    },
                    "start": 209,
                    "end": 214
                  },
                  "start": 201,
                  "end": 214
                },
                "directive": null,
                "start": 201,
                "end": 215
              }
            ],
            "start": 134,
            "end": 219
          },
          "start": 74,
          "end": 219
        }
      ],
      "start": 57,
      "end": 221
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
                "name": "iNext",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 238,
                        "end": 244
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 247,
                        "end": 253
                      }
                    ],
                    "start": 238,
                    "end": 253
                  },
                  "start": 236,
                  "end": 253
                },
                "start": 231,
                "end": 253
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 256,
                "end": 258
              },
              "definite": false,
              "start": 231,
              "end": 258
            }
          ],
          "declare": false,
          "start": 227,
          "end": 259
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 277
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 280,
                  "end": 281
                },
                "definite": false,
                "start": 276,
                "end": 281
              }
            ],
            "declare": false,
            "start": 272,
            "end": 281
          },
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 288
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 291,
              "end": 293
            },
            "start": 287,
            "end": 293
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNext",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 308
            },
            "start": 299,
            "end": 308
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
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 333
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 337,
                    "end": 338
                  },
                  "start": 332,
                  "end": 338
                },
                "consequent": {
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
                          "name": "iNext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 348,
                          "end": 353
                        },
                        "right": {
                          "type": "Literal",
                          "value": "bad",
                          "raw": "\"bad\"",
                          "start": 356,
                          "end": 361
                        },
                        "start": 348,
                        "end": 361
                      },
                      "directive": null,
                      "start": 348,
                      "end": 362
                    },
                    {
                      "type": "ContinueStatement",
                      "label": null,
                      "start": 369,
                      "end": 378
                    }
                  ],
                  "start": 340,
                  "end": 384
                },
                "alternate": null,
                "start": 328,
                "end": 384
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iNext",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 389,
                    "end": 394
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 398
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 401,
                      "end": 402
                    },
                    "start": 397,
                    "end": 402
                  },
                  "start": 389,
                  "end": 402
                },
                "directive": null,
                "start": 389,
                "end": 403
              }
            ],
            "start": 322,
            "end": 407
          },
          "start": 262,
          "end": 407
        }
      ],
      "start": 223,
      "end": 409
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 409
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 92,
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
    "value": "i",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 115,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
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
    "value": "if",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 146,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 160,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"bad\"",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 181,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 201,
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
    "value": "i",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 256,
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
    "value": "for",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 334,
    "end": 336
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "String",
    "value": "\"bad\"",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 369,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "iNext",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  }
]
```
