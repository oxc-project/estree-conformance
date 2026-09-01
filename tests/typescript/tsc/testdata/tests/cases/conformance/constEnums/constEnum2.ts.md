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
            "name": "CONST",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 340
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 9000,
              "raw": "9000",
              "start": 343,
              "end": 347
            },
            "operator": "%",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 350,
              "end": 351
            },
            "start": 343,
            "end": 351
          },
          "definite": false,
          "start": 335,
          "end": 351
        }
      ],
      "declare": false,
      "start": 329,
      "end": 352
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 365
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 372,
              "end": 373
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 376,
              "end": 378
            },
            "computed": false,
            "start": 372,
            "end": 378
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 385
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 199,
                "raw": "199",
                "start": 388,
                "end": 391
              },
              "operator": "*",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 398
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "floor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 404
                  },
                  "optional": false,
                  "computed": false,
                  "start": 394,
                  "end": 404
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 409
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "random",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 416
                        },
                        "optional": false,
                        "computed": false,
                        "start": 405,
                        "end": 416
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 405,
                      "end": 418
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 1000,
                      "raw": "1000",
                      "start": 421,
                      "end": 425
                    },
                    "start": 405,
                    "end": 425
                  }
                ],
                "optional": false,
                "start": 394,
                "end": 426
              },
              "start": 388,
              "end": 426
            },
            "computed": false,
            "start": 384,
            "end": 426
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 433
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              },
              "operator": "-",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 441,
                  "end": 444
                },
                "operator": "*",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 451
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 457
                    },
                    "optional": false,
                    "computed": false,
                    "start": 447,
                    "end": 457
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 458,
                            "end": 462
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 469
                          },
                          "optional": false,
                          "computed": false,
                          "start": 458,
                          "end": 469
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 458,
                        "end": 471
                      },
                      "operator": "%",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 474,
                        "end": 475
                      },
                      "start": 458,
                      "end": 475
                    }
                  ],
                  "optional": false,
                  "start": 447,
                  "end": 476
                },
                "start": 441,
                "end": 476
              },
              "start": 436,
              "end": 477
            },
            "computed": false,
            "start": 432,
            "end": 477
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 484
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "CONST",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 492
            },
            "computed": false,
            "start": 483,
            "end": 492
          }
        ],
        "start": 366,
        "end": 495
      },
      "const": true,
      "declare": false,
      "start": 353,
      "end": 495
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 329,
  "end": 495
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 329,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "CONST",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "9000",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 359,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 376,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Numeric",
    "value": "199",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 394,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "floor",
    "start": 399,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 405,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 419,
    "end": 420
  },
  {
    "type": "Numeric",
    "value": "1000",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 441,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "floor",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 463,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "%",
    "start": 472,
    "end": 473
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "CONST",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  }
]
```
