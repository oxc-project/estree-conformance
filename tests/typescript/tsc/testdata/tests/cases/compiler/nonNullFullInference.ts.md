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
        "name": "testNonNullInference",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              },
              "start": 96,
              "end": 104
            },
            "start": 94,
            "end": 104
          },
          "start": 87,
          "end": 104
        }
      ],
      "returnType": null,
      "body": {
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
                  "name": "last",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 120
                },
                "init": null,
                "definite": false,
                "start": 116,
                "end": 120
              }
            ],
            "declare": false,
            "start": 112,
            "end": 121
          },
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 138,
                    "end": 139
                  },
                  "init": null,
                  "definite": false,
                  "start": 138,
                  "end": 139
                }
              ],
              "declare": false,
              "start": 132,
              "end": 139
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numbers",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 150
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 166,
                      "end": 167
                    },
                    "operator": "%",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 170,
                      "end": 171
                    },
                    "start": 166,
                    "end": 171
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 194,
                          "end": 195
                        },
                        "start": 187,
                        "end": 196
                      }
                    ],
                    "start": 173,
                    "end": 206
                  },
                  "alternate": null,
                  "start": 162,
                  "end": 206
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "last",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 220
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 224
                    },
                    "start": 216,
                    "end": 224
                  },
                  "directive": null,
                  "start": 216,
                  "end": 225
                }
              ],
              "start": 152,
              "end": 231
            },
            "start": 127,
            "end": 231
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "last",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 241
            },
            "directive": null,
            "start": 237,
            "end": 242
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 251
              },
              "start": 247,
              "end": 252
            },
            "directive": null,
            "start": 247,
            "end": 253
          }
        ],
        "start": 106,
        "end": 255
      },
      "expression": false,
      "start": 57,
      "end": 255
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNonNullInferenceWithArrays",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 296
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 306,
                "end": 312
              },
              "start": 306,
              "end": 314
            },
            "start": 304,
            "end": 314
          },
          "start": 297,
          "end": 314
        }
      ],
      "returnType": null,
      "body": {
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 332
                },
                "init": null,
                "definite": false,
                "start": 326,
                "end": 332
              }
            ],
            "declare": false,
            "start": 322,
            "end": 333
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
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 347
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 350,
                  "end": 352
                },
                "definite": false,
                "start": 344,
                "end": 352
              }
            ],
            "declare": false,
            "start": 338,
            "end": 353
          },
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
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 371
                  },
                  "init": null,
                  "definite": false,
                  "start": 370,
                  "end": 371
                }
              ],
              "declare": false,
              "start": 364,
              "end": 371
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "numbers",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 382
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 399
                    },
                    "operator": "%",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 402,
                      "end": 403
                    },
                    "start": 398,
                    "end": 403
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 427,
                              "end": 428
                            }
                          ],
                          "start": 426,
                          "end": 429
                        },
                        "start": 419,
                        "end": 430
                      }
                    ],
                    "start": 405,
                    "end": 440
                  },
                  "alternate": null,
                  "start": 394,
                  "end": 440
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
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 453
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 454,
                        "end": 458
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 458
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 459,
                        "end": 460
                      }
                    ],
                    "optional": false,
                    "start": 450,
                    "end": 461
                  },
                  "directive": null,
                  "start": 450,
                  "end": 462
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 477
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 483
                    },
                    "start": 471,
                    "end": 483
                  },
                  "directive": null,
                  "start": 471,
                  "end": 484
                }
              ],
              "start": 384,
              "end": 490
            },
            "start": 359,
            "end": 490
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 502
            },
            "directive": null,
            "start": 496,
            "end": 503
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 514
              },
              "start": 508,
              "end": 515
            },
            "directive": null,
            "start": 508,
            "end": 516
          }
        ],
        "start": 316,
        "end": 518
      },
      "expression": false,
      "start": 257,
      "end": 518
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 518
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "testNonNullInference",
    "start": 66,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 87,
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
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 140,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 143,
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
    "type": "Keyword",
    "value": "if",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 168,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 187,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 247,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 257,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "testNonNullInferenceWithArrays",
    "start": 266,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
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
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 326,
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
    "value": "const",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 364,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 372,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "numbers",
    "start": 375,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 400,
    "end": 401
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 454,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 471,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  }
]
```
