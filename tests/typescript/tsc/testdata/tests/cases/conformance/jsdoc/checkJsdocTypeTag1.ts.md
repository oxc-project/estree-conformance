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
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "Literal",
            "value": "hello world",
            "raw": "\"hello world\"",
            "start": 43,
            "end": 56
          },
          "definite": false,
          "start": 39,
          "end": 56
        }
      ],
      "declare": false,
      "start": 35,
      "end": 57
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 89,
            "end": 91
          },
          "definite": false,
          "start": 85,
          "end": 91
        }
      ],
      "declare": false,
      "start": 81,
      "end": 92
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
            "name": "anyT",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 119
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 122,
            "end": 123
          },
          "definite": false,
          "start": 115,
          "end": 123
        }
      ],
      "declare": false,
      "start": 111,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyT",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 129
        },
        "right": {
          "type": "Literal",
          "value": "hello",
          "raw": "\"hello\"",
          "start": 132,
          "end": 139
        },
        "start": 125,
        "end": 139
      },
      "directive": null,
      "start": 125,
      "end": 140
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
            "name": "anyT1",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 168
          },
          "init": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 171,
            "end": 172
          },
          "definite": false,
          "start": 163,
          "end": 172
        }
      ],
      "declare": false,
      "start": 159,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyT1",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 179
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "\"hi\"",
          "start": 182,
          "end": 186
        },
        "start": 174,
        "end": 186
      },
      "directive": null,
      "start": 174,
      "end": 187
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
            "typeAnnotation": null,
            "start": 219,
            "end": 220
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 234,
                "end": 235
              },
              "start": 230,
              "end": 235
            },
            "id": null,
            "generator": false,
            "start": 223,
            "end": 235
          },
          "definite": false,
          "start": 219,
          "end": 235
        }
      ],
      "declare": false,
      "start": 213,
      "end": 236
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 239,
            "end": 240
          }
        ],
        "optional": false,
        "start": 237,
        "end": 241
      },
      "directive": null,
      "start": 237,
      "end": 242
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 275
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 279,
                "end": 280
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 289,
                "end": 290
              },
              "start": 285,
              "end": 290
            },
            "id": null,
            "generator": false,
            "start": 278,
            "end": 290
          },
          "definite": false,
          "start": 274,
          "end": 290
        }
      ],
      "declare": false,
      "start": 268,
      "end": 291
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 294,
            "end": 295
          }
        ],
        "optional": false,
        "start": 292,
        "end": 296
      },
      "directive": null,
      "start": 292,
      "end": 297
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 340
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 351
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 354,
                "end": 355
              },
              "start": 350,
              "end": 355
            },
            "id": null,
            "generator": false,
            "start": 343,
            "end": 355
          },
          "definite": false,
          "start": 338,
          "end": 355
        }
      ],
      "declare": false,
      "start": 332,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 357,
          "end": 359
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 360,
            "end": 361
          }
        ],
        "optional": false,
        "start": 357,
        "end": 362
      },
      "directive": null,
      "start": 357,
      "end": 363
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 414
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 419
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 428,
                "end": 429
              },
              "start": 424,
              "end": 429
            },
            "id": null,
            "generator": false,
            "start": 417,
            "end": 429
          },
          "definite": false,
          "start": 412,
          "end": 429
        }
      ],
      "declare": false,
      "start": 406,
      "end": 430
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 433
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 434,
            "end": 435
          }
        ],
        "optional": false,
        "start": 431,
        "end": 436
      },
      "directive": null,
      "start": 431,
      "end": 437
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
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 474
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 477,
            "end": 479
          },
          "definite": false,
          "start": 469,
          "end": 479
        }
      ],
      "declare": false,
      "start": 465,
      "end": 480
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
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 512,
            "end": 517
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 520,
            "end": 522
          },
          "definite": false,
          "start": 512,
          "end": 522
        }
      ],
      "declare": false,
      "start": 508,
      "end": 523
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 523
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "String",
    "value": "\"hello world\"",
    "start": 43,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "anyT",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "anyT",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "anyT1",
    "start": 163,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 169,
    "end": 170
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "anyT1",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 282,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 332,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 347,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 352,
    "end": 353
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 357,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 406,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 421,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 426,
    "end": 427
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 465,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 469,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 508,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 512,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  }
]
```
