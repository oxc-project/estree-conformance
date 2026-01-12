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
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 15,
                  "end": 20
                },
                "start": 15,
                "end": 20
              },
              "start": 13,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 37,
                      "end": 42
                    },
                    "start": 37,
                    "end": 42
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 45,
                      "end": 50
                    },
                    "start": 45,
                    "end": 50
                  }
                ],
                "start": 37,
                "end": 50
              },
              "start": 35,
              "end": 50
            },
            "start": 34,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 50
        }
      ],
      "declare": true,
      "start": 22,
      "end": 51
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 67,
                  "end": 72
                },
                "start": 67,
                "end": 72
              },
              "start": 65,
              "end": 72
            },
            "start": 64,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 72
        }
      ],
      "declare": true,
      "start": 52,
      "end": 73
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 100
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 104,
          "end": 111
        },
        "start": 102,
        "end": 111
      },
      "body": null,
      "expression": false,
      "start": 75,
      "end": 112
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "randBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 144
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 136,
              "end": 146
            },
            "consequent": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 149,
              "end": 154
            },
            "alternate": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 157,
              "end": 162
            },
            "start": 136,
            "end": 162
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 172,
              "end": 178
            }
          ],
          "start": 131,
          "end": 178
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "randBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 197
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 189,
              "end": 199
            },
            "consequent": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 203,
              "end": 208
            },
            "alternate": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 212,
                "end": 217
              },
              "consequent": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 220,
                "end": 225
              },
              "alternate": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 228,
                "end": 233
              },
              "start": 212,
              "end": 233
            },
            "start": 189,
            "end": 233
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 244,
              "end": 250
            }
          ],
          "start": 183,
          "end": 250
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 262,
            "end": 267
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 279,
              "end": 285
            }
          ],
          "start": 255,
          "end": 285
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 297
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 300
              },
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 303,
                "end": 308
              }
            ],
            "start": 296,
            "end": 309
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "directive": null,
              "start": 320,
              "end": 322
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "directive": null,
              "start": 331,
              "end": 333
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 342,
              "end": 348
            }
          ],
          "start": 290,
          "end": 348
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 360,
              "end": 365
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 370,
              "end": 375
            },
            "start": 360,
            "end": 376
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 388,
              "end": 394
            }
          ],
          "start": 353,
          "end": 394
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 406,
              "end": 411
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 416,
              "end": 421
            },
            "start": 406,
            "end": 422
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 434,
              "end": 440
            }
          ],
          "start": 399,
          "end": 440
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 455,
              "end": 460
            },
            "start": 450,
            "end": 460
          },
          "consequent": [],
          "start": 445,
          "end": 461
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 471,
              "end": 476
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "start": 471,
            "end": 481
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 492
              },
              "directive": null,
              "start": 491,
              "end": 493
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 502,
              "end": 508
            }
          ],
          "start": 466,
          "end": 508
        }
      ],
      "start": 114,
      "end": 510
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 510
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
    "type": "String",
    "value": "\"foo\"",
    "start": 15,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 52,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 83,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 92,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 104,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 131,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 157,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 172,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 189,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 218,
    "end": 219
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 228,
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
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 290,
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
    "value": ",",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 303,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "y",
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
    "type": "Keyword",
    "value": "break",
    "start": 342,
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
    "value": "case",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 360,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 388,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "||",
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
    "type": "String",
    "value": "\"baz\"",
    "start": 416,
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
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 434,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 445,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 452,
    "end": 454
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 466,
    "end": 470
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 477,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  }
]
```
