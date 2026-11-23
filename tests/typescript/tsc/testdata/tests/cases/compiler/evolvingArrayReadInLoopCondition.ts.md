__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
                "start": 281,
                "end": 287
              },
              "start": 279,
              "end": 287
            },
            "start": 278,
            "end": 287
          },
          "init": null,
          "definite": false,
          "start": 278,
          "end": 287
        }
      ],
      "declare": true,
      "start": 264,
      "end": 288
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
            "name": "seen",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 299
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 302,
            "end": 304
          },
          "definite": false,
          "start": 295,
          "end": 304
        }
      ],
      "declare": false,
      "start": 289,
      "end": 305
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
              "start": 315,
              "end": 316
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 319,
              "end": 320
            },
            "definite": false,
            "start": 315,
            "end": 320
          }
        ],
        "declare": false,
        "start": 311,
        "end": 320
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 323
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 326,
          "end": 327
        },
        "start": 322,
        "end": 327
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 329,
          "end": 330
        },
        "start": 329,
        "end": 332
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "seen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 349
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 354
                  },
                  "optional": false,
                  "computed": false,
                  "start": 345,
                  "end": 354
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 355,
                        "end": 356
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 360,
                      "end": 364
                    },
                    "id": null,
                    "generator": false,
                    "start": 355,
                    "end": 364
                  }
                ],
                "optional": false,
                "start": 345,
                "end": 365
              },
              "prefix": true,
              "start": 344,
              "end": 365
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "seen",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 377,
                        "end": 381
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 386
                      },
                      "optional": false,
                      "computed": false,
                      "start": 377,
                      "end": 386
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 388
                      }
                    ],
                    "optional": false,
                    "start": 377,
                    "end": 389
                  },
                  "directive": null,
                  "start": 377,
                  "end": 390
                }
              ],
              "start": 367,
              "end": 396
            },
            "alternate": null,
            "start": 340,
            "end": 396
          }
        ],
        "start": 334,
        "end": 398
      },
      "start": 306,
      "end": 398
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 411
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "seen",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 418
          },
          "definite": false,
          "start": 405,
          "end": 418
        }
      ],
      "declare": false,
      "start": 399,
      "end": 419
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 419
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 264,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 289,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "seen",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 306,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 317,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 330,
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
    "value": "if",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "seen",
    "start": 345,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 350,
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
    "value": "s",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 357,
    "end": 359
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 364,
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
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "seen",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 399,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "seen",
    "start": 414,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  }
]
```
