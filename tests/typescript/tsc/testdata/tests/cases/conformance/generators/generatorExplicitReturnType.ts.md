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
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 25
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              },
              {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            ],
            "start": 25,
            "end": 50
          },
          "start": 16,
          "end": 50
        },
        "start": 14,
        "end": 50
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 57,
              "end": 62
            },
            "directive": null,
            "start": 57,
            "end": 63
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 83,
                "end": 86
              },
              "start": 77,
              "end": 86
            },
            "directive": null,
            "start": 77,
            "end": 87
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    },
                    "start": 108,
                    "end": 116
                  },
                  "start": 107,
                  "end": 116
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 125,
                    "end": 126
                  },
                  "start": 119,
                  "end": 126
                },
                "definite": false,
                "start": 107,
                "end": 126
              }
            ],
            "declare": false,
            "start": 101,
            "end": 127
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 148,
              "end": 150
            },
            "start": 141,
            "end": 151
          }
        ],
        "start": 51,
        "end": 162
      },
      "expression": false,
      "start": 0,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 176
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 189
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 190,
                "end": 196
              },
              {
                "type": "TSBooleanKeyword",
                "start": 198,
                "end": 205
              },
              {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
              }
            ],
            "start": 189,
            "end": 214
          },
          "start": 180,
          "end": 214
        },
        "start": 178,
        "end": 214
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 228
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 237,
                    "end": 238
                  },
                  "start": 231,
                  "end": 238
                },
                "definite": false,
                "start": 227,
                "end": 238
              }
            ],
            "declare": false,
            "start": 221,
            "end": 239
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 251,
              "end": 255
            },
            "start": 244,
            "end": 256
          }
        ],
        "start": 215,
        "end": 258
      },
      "expression": false,
      "start": 164,
      "end": 258
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
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 294
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 295,
                      "end": 301
                    },
                    {
                      "type": "TSSymbolKeyword",
                      "start": 303,
                      "end": 309
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 311,
                      "end": 317
                    }
                  ],
                  "start": 294,
                  "end": 318
                },
                "start": 285,
                "end": 318
              },
              "start": 283,
              "end": 318
            },
            "start": 274,
            "end": 318
          },
          "init": null,
          "definite": false,
          "start": 274,
          "end": 318
        }
      ],
      "declare": true,
      "start": 260,
      "end": 319
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 333
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 346
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 347,
                "end": 353
              },
              {
                "type": "TSBooleanKeyword",
                "start": 355,
                "end": 362
              },
              {
                "type": "TSStringKeyword",
                "start": 364,
                "end": 370
              }
            ],
            "start": 346,
            "end": 371
          },
          "start": 337,
          "end": 371
        },
        "start": 335,
        "end": 371
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 387,
                      "end": 393
                    },
                    "start": 385,
                    "end": 393
                  },
                  "start": 384,
                  "end": 393
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 412
                  },
                  "start": 396,
                  "end": 412
                },
                "definite": false,
                "start": 384,
                "end": 412
              }
            ],
            "declare": false,
            "start": 378,
            "end": 413
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 434,
              "end": 438
            },
            "start": 427,
            "end": 439
          }
        ],
        "start": 372,
        "end": 441
      },
      "expression": false,
      "start": 321,
      "end": 441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 455
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 468
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 469,
                "end": 475
              },
              {
                "type": "TSBooleanKeyword",
                "start": 477,
                "end": 484
              },
              {
                "type": "TSStringKeyword",
                "start": 486,
                "end": 492
              }
            ],
            "start": 468,
            "end": 493
          },
          "start": 459,
          "end": 493
        },
        "start": 457,
        "end": 493
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 526
                  },
                  "start": 510,
                  "end": 526
                },
                "definite": false,
                "start": 506,
                "end": 526
              }
            ],
            "declare": false,
            "start": 500,
            "end": 527
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 539,
              "end": 543
            },
            "start": 532,
            "end": 544
          }
        ],
        "start": 494,
        "end": 546
      },
      "expression": false,
      "start": 443,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 546
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
    "type": "Punctuator",
    "value": "*",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "g1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Generator",
    "start": 16,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 34,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 57,
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
    "value": "yield",
    "start": 77,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 119,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 141,
    "end": 147
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 164,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
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
    "value": "Generator",
    "start": 180,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 190,
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
    "value": "boolean",
    "start": 198,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 221,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 231,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 244,
    "end": 250
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 251,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 260,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 285,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 303,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 311,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 321,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 337,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 355,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 378,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 396,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 403,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 459,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 477,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 500,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 510,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 517,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 532,
    "end": 538
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 539,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  }
]
```
