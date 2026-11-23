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
        "name": "makeContextualThisParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 256
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 257,
            "end": 258
          }
        ],
        "start": 256,
        "end": 259
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 272
                      },
                      "typeArguments": null,
                      "start": 271,
                      "end": 272
                    },
                    "start": 269,
                    "end": 272
                  },
                  "start": 265,
                  "end": 272
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 277,
                  "end": 280
                },
                "start": 274,
                "end": 280
              },
              "start": 264,
              "end": 280
            },
            "start": 262,
            "end": 280
          },
          "start": 260,
          "end": 280
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 283,
          "end": 287
        },
        "start": 281,
        "end": 287
      },
      "body": null,
      "expression": false,
      "start": 212,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeContextualThisParameter",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 317
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "assert",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 326
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 330,
                          "end": 333
                        },
                        "start": 328,
                        "end": 333
                      },
                      "start": 327,
                      "end": 333
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 345
                      },
                      "asserts": true,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 345
                    },
                    "start": 334,
                    "end": 345
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 320,
                  "end": 345
                }
              ],
              "start": 318,
              "end": 347
            }
          ],
          "start": 317,
          "end": 348
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
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
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 374
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Boolean",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 384
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 377,
                        "end": 386
                      },
                      "definite": false,
                      "start": 373,
                      "end": 386
                    }
                  ],
                  "declare": false,
                  "start": 367,
                  "end": 387
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 392,
                        "end": 396
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 403
                      },
                      "optional": false,
                      "computed": false,
                      "start": 392,
                      "end": 403
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 404,
                        "end": 405
                      }
                    ],
                    "optional": false,
                    "start": 392,
                    "end": 406
                  },
                  "directive": null,
                  "start": 392,
                  "end": 407
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
                        "name": "w",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 421,
                              "end": 425
                            },
                            "start": 421,
                            "end": 425
                          },
                          "start": 419,
                          "end": 425
                        },
                        "start": 418,
                        "end": 425
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 429
                      },
                      "definite": false,
                      "start": 418,
                      "end": 429
                    }
                  ],
                  "declare": false,
                  "start": 412,
                  "end": 430
                }
              ],
              "start": 361,
              "end": 432
            },
            "expression": false,
            "start": 349,
            "end": 432
          }
        ],
        "optional": false,
        "start": 290,
        "end": 433
      },
      "directive": null,
      "start": 290,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "makeContextualThisParameter",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 463
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "returnNever",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 466,
                    "end": 477
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 481,
                      "end": 486
                    },
                    "start": 479,
                    "end": 486
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 466,
                  "end": 486
                }
              ],
              "start": 464,
              "end": 488
            }
          ],
          "start": 463,
          "end": 489
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 508,
                        "end": 512
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "returnNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 513,
                        "end": 524
                      },
                      "optional": false,
                      "computed": false,
                      "start": 508,
                      "end": 524
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 508,
                    "end": 526
                  },
                  "directive": null,
                  "start": 508,
                  "end": 527
                },
                {
                  "type": "DebuggerStatement",
                  "start": 532,
                  "end": 541
                }
              ],
              "start": 502,
              "end": 543
            },
            "expression": false,
            "start": 490,
            "end": 543
          }
        ],
        "optional": false,
        "start": 436,
        "end": 544
      },
      "directive": null,
      "start": 436,
      "end": 545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 545
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 212,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 220,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "makeContextualThisParameter",
    "start": 229,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 277,
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
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "makeContextualThisParameter",
    "start": 290,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 330,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 336,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 349,
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
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 367,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 377,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 412,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "makeContextualThisParameter",
    "start": 436,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "returnNever",
    "start": 466,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 481,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "returnNever",
    "start": 513,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 525,
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
    "value": "debugger",
    "start": 532,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  }
]
```
