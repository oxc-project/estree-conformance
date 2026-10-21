__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fromString",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 35,
              "end": 41
            },
            "start": 33,
            "end": 41
          },
          "start": 28,
          "end": 41
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 44,
          "end": 50
        },
        "start": 42,
        "end": 50
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fromBigint",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 79
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBigIntKeyword",
              "start": 87,
              "end": 93
            },
            "start": 85,
            "end": 93
          },
          "start": 80,
          "end": 93
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 96,
          "end": 102
        },
        "start": 94,
        "end": 102
      },
      "body": null,
      "expression": false,
      "start": 52,
      "end": 103
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fromNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 131
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 139,
              "end": 145
            },
            "start": 137,
            "end": 145
          },
          "start": 132,
          "end": 145
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 148,
          "end": 155
        },
        "start": 146,
        "end": 155
      },
      "body": null,
      "expression": false,
      "start": 104,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "coerce",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 172
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 180,
              "end": 187
            },
            "start": 178,
            "end": 187
          },
          "start": 173,
          "end": 187
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 211
                },
                "prefix": true,
                "start": 199,
                "end": 211
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 216,
                "end": 225
              },
              "start": 199,
              "end": 225
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 239
              },
              "start": 227,
              "end": 240
            },
            "alternate": null,
            "start": 195,
            "end": 240
          },
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 261
                },
                "prefix": true,
                "start": 249,
                "end": 261
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 266,
                "end": 274
              },
              "start": 249,
              "end": 274
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 293
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 299
                  }
                ],
                "optional": false,
                "start": 283,
                "end": 300
              },
              "start": 276,
              "end": 301
            },
            "alternate": null,
            "start": 245,
            "end": 301
          },
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 322
                },
                "prefix": true,
                "start": 310,
                "end": 322
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "bigint",
                "raw": "\"bigint\"",
                "start": 327,
                "end": 335
              },
              "start": 310,
              "end": 335
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromBigint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 354
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 360
                  }
                ],
                "optional": false,
                "start": 344,
                "end": 361
              },
              "start": 337,
              "end": 362
            },
            "alternate": null,
            "start": 306,
            "end": 362
          },
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 378,
                  "end": 383
                },
                "prefix": true,
                "start": 371,
                "end": 383
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 388,
                "end": 396
              },
              "start": 371,
              "end": 396
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 415
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 421
                  }
                ],
                "optional": false,
                "start": 405,
                "end": 422
              },
              "start": 398,
              "end": 423
            },
            "alternate": null,
            "start": 367,
            "end": 423
          }
        ],
        "start": 189,
        "end": 425
      },
      "expression": false,
      "start": 157,
      "end": 425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 425
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "fromString",
    "start": 17,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
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
    "value": "function",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "fromBigint",
    "start": 69,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 104,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "fromNumber",
    "start": 121,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 139,
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
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 148,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 157,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "coerce",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 199,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 212,
    "end": 215
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 216,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 227,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "value": "if",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 249,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 262,
    "end": 265
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 266,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 276,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "fromString",
    "start": 283,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 294,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 310,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 323,
    "end": 326
  },
  {
    "type": "String",
    "value": "\"bigint\"",
    "start": 327,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 337,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "fromBigint",
    "start": 344,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "type": "Keyword",
    "value": "if",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 371,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 384,
    "end": 387
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 388,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 398,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "fromNumber",
    "start": 405,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  }
]
```
