__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "init": null,
            "definite": false,
            "start": 68,
            "end": 69
          }
        ],
        "declare": false,
        "start": 62,
        "end": 69
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 74,
            "end": 75
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 77,
            "end": 78
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 80,
            "end": 81
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 83,
            "end": 84
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 86,
            "end": 87
          }
        ],
        "start": 73,
        "end": 88
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 200,
                          "end": 201
                        },
                        "init": null,
                        "definite": false,
                        "start": 200,
                        "end": 201
                      }
                    ],
                    "declare": false,
                    "start": 194,
                    "end": 201
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 206,
                        "end": 207
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 209,
                        "end": 210
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 212,
                        "end": 213
                      }
                    ],
                    "start": 205,
                    "end": 214
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
                            "start": 234,
                            "end": 235
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 240,
                            "end": 241
                          },
                          "start": 234,
                          "end": 241
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ThrowStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 271,
                                  "end": 276
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "ERR",
                                    "raw": "'ERR'",
                                    "start": 277,
                                    "end": 282
                                  }
                                ],
                                "start": 267,
                                "end": 283
                              },
                              "start": 261,
                              "end": 284
                            }
                          ],
                          "start": 243,
                          "end": 298
                        },
                        "alternate": null,
                        "start": 230,
                        "end": 298
                      }
                    ],
                    "start": 216,
                    "end": 308
                  },
                  "start": 189,
                  "end": 308
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 324
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 328
                      },
                      "optional": false,
                      "computed": false,
                      "start": 317,
                      "end": 328
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 330
                      }
                    ],
                    "optional": false,
                    "start": 317,
                    "end": 331
                  },
                  "directive": null,
                  "start": 317,
                  "end": 332
                }
              ],
              "start": 100,
              "end": 338
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 349
              },
              "body": {
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 368
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 372
                        },
                        "optional": false,
                        "computed": false,
                        "start": 361,
                        "end": 372
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "E %s %s",
                          "raw": "'E %s %s'",
                          "start": 373,
                          "end": 382
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 385
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 387,
                          "end": 390
                        }
                      ],
                      "optional": false,
                      "start": 361,
                      "end": 391
                    },
                    "directive": null,
                    "start": 361,
                    "end": 392
                  }
                ],
                "start": 351,
                "end": 398
              },
              "start": 339,
              "end": 398
            },
            "finalizer": null,
            "start": 96,
            "end": 398
          }
        ],
        "start": 90,
        "end": 400
      },
      "start": 57,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 400
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 73,
    "end": 74
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 230,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 236,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 240,
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
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 261,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 267,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277
  },
  {
    "type": "String",
    "value": "'ERR'",
    "start": 277,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 317,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 339,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 361,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "String",
    "value": "'E %s %s'",
    "start": 373,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  }
]
```
