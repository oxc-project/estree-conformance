__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 37,
                    "end": 38
                  },
                  "start": 31,
                  "end": 38
                },
                "directive": null,
                "start": 31,
                "end": 39
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 54,
                    "end": 55
                  },
                  "start": 48,
                  "end": 55
                },
                "directive": null,
                "start": 48,
                "end": 56
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 72,
                  "end": 73
                },
                "start": 65,
                "end": 74
              }
            ],
            "start": 14,
            "end": 80
          }
        ],
        "start": 8,
        "end": 82
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 101
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 118
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 156,
                          "end": 157
                        },
                        "start": 150,
                        "end": 157
                      },
                      "directive": null,
                      "start": 150,
                      "end": 158
                    },
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 189
                      },
                      "generator": false,
                      "async": true,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 217,
                                "end": 218
                              },
                              "start": 211,
                              "end": 218
                            },
                            "directive": null,
                            "start": 211,
                            "end": 219
                          }
                        ],
                        "start": 193,
                        "end": 233
                      },
                      "expression": false,
                      "start": 172,
                      "end": 233
                    }
                  ],
                  "start": 129,
                  "end": 243
                }
              ],
              "start": 119,
              "end": 249
            },
            "abstract": false,
            "declare": false,
            "start": 111,
            "end": 249
          }
        ],
        "start": 105,
        "end": 251
      },
      "expression": false,
      "start": 84,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 283
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 321,
                          "end": 322
                        },
                        "start": 315,
                        "end": 322
                      },
                      "directive": null,
                      "start": 315,
                      "end": 323
                    },
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 350
                      },
                      "generator": true,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 378,
                                "end": 379
                              },
                              "start": 372,
                              "end": 379
                            },
                            "directive": null,
                            "start": 372,
                            "end": 380
                          }
                        ],
                        "start": 354,
                        "end": 394
                      },
                      "expression": false,
                      "start": 337,
                      "end": 394
                    }
                  ],
                  "start": 294,
                  "end": 404
                }
              ],
              "start": 284,
              "end": 410
            },
            "abstract": false,
            "declare": false,
            "start": 276,
            "end": 410
          }
        ],
        "start": 270,
        "end": 412
      },
      "expression": false,
      "start": 253,
      "end": 412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 425
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 442
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 481,
                        "end": 482
                      },
                      "start": 474,
                      "end": 483
                    },
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 508
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 537,
                              "end": 538
                            },
                            "start": 530,
                            "end": 538
                          }
                        ],
                        "start": 512,
                        "end": 552
                      },
                      "expression": false,
                      "start": 497,
                      "end": 552
                    }
                  ],
                  "start": 453,
                  "end": 562
                }
              ],
              "start": 443,
              "end": 568
            },
            "abstract": false,
            "declare": false,
            "start": 435,
            "end": 568
          }
        ],
        "start": 429,
        "end": 570
      },
      "expression": false,
      "start": 414,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 570
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 31,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 48,
    "end": 53
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 65,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 84,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 90,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 150,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 172,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 178,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 211,
    "end": 216
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 253,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 276,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 315,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 337,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 372,
    "end": 377
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 414,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 435,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 474,
    "end": 480
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 497,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 530,
    "end": 536
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  }
]
```
