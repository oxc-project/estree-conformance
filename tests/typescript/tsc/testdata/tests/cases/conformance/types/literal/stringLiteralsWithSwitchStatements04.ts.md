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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 78
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
          "start": 82,
          "end": 89
        },
        "start": 80,
        "end": 89
      },
      "body": null,
      "expression": false,
      "start": 53,
      "end": 90
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 101
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 114,
                "end": 119
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 122
              }
            ],
            "start": 114,
            "end": 122
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 132,
              "end": 138
            }
          ],
          "start": 109,
          "end": 138
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
                "start": 148,
                "end": 149
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 151,
                "end": 156
              }
            ],
            "start": 148,
            "end": 156
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 166,
              "end": 172
            }
          ],
          "start": 143,
          "end": 172
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
                "start": 182,
                "end": 183
              },
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 185,
                "end": 190
              }
            ],
            "start": 182,
            "end": 190
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 200,
              "end": 206
            }
          ],
          "start": 177,
          "end": 206
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 216,
                "end": 221
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 224
              }
            ],
            "start": 216,
            "end": 224
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 234,
              "end": 240
            }
          ],
          "start": 211,
          "end": 240
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 250,
              "end": 255
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 259,
              "end": 264
            },
            "start": 250,
            "end": 264
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 274,
              "end": 280
            }
          ],
          "start": 245,
          "end": 280
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 290,
              "end": 295
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 300,
                "end": 305
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 309,
                "end": 314
              },
              "start": 300,
              "end": 314
            },
            "start": 290,
            "end": 315
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 325,
              "end": 331
            }
          ],
          "start": 285,
          "end": 331
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 341,
              "end": 346
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 351,
                "end": 356
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 360,
                "end": 365
              },
              "start": 351,
              "end": 365
            },
            "start": 341,
            "end": 366
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 376,
              "end": 382
            }
          ],
          "start": 336,
          "end": 382
        }
      ],
      "start": 92,
      "end": 384
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 384
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
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "randBool",
    "start": 70,
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
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 109,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 143,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 166,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 177,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 211,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 245,
    "end": 249
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 256,
    "end": 258
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 259,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 274,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 285,
    "end": 289
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 306,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 336,
    "end": 340
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 357,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 360,
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
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 376,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384
  }
]
```
