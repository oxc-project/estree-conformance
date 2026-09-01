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
        "name": "acceptNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 55,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 60,
        "end": 62
      },
      "expression": false,
      "start": 36,
      "end": 62
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 148
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 194
            },
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
                "start": 195,
                "end": 196
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 199
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "acceptNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 216
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 218
                      }
                    ],
                    "optional": false,
                    "start": 207,
                    "end": 219
                  },
                  "directive": null,
                  "start": 207,
                  "end": 220
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 238
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 239,
                        "end": 241
                      }
                    ],
                    "optional": false,
                    "start": 234,
                    "end": 242
                  },
                  "directive": null,
                  "start": 234,
                  "end": 243
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 252
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 253,
                        "end": 255
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 266
                      }
                    ],
                    "optional": false,
                    "start": 248,
                    "end": 267
                  },
                  "directive": null,
                  "start": 248,
                  "end": 268
                }
              ],
              "start": 201,
              "end": 272
            },
            "expression": false,
            "start": 181,
            "end": 272
          },
          "definite": false,
          "start": 145,
          "end": 272
        }
      ],
      "declare": false,
      "start": 139,
      "end": 273
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 302
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 357
            },
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
                "start": 358,
                "end": 359
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 362
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "acceptNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 370,
                      "end": 379
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 380,
                        "end": 381
                      }
                    ],
                    "optional": false,
                    "start": 370,
                    "end": 382
                  },
                  "directive": null,
                  "start": 370,
                  "end": 383
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 401
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 402,
                        "end": 404
                      }
                    ],
                    "optional": false,
                    "start": 397,
                    "end": 405
                  },
                  "directive": null,
                  "start": 397,
                  "end": 406
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 415
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 416,
                        "end": 418
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 429
                      }
                    ],
                    "optional": false,
                    "start": 411,
                    "end": 430
                  },
                  "directive": null,
                  "start": 411,
                  "end": 431
                }
              ],
              "start": 364,
              "end": 435
            },
            "expression": false,
            "start": 344,
            "end": 435
          },
          "definite": false,
          "start": 299,
          "end": 435
        }
      ],
      "declare": false,
      "start": 293,
      "end": 436
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 436
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 36,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "acceptNum",
    "start": 45,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 139,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 181,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "acceptNum",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 257,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "const",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 344,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "acceptNum",
    "start": 370,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 420,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  }
]
```
