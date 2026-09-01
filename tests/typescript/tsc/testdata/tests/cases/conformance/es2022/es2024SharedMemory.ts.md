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
            "name": "sab",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 222
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 257
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 275
                  },
                  "optional": false,
                  "computed": false,
                  "start": 247,
                  "end": 275
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1024,
                  "raw": "1024",
                  "start": 278,
                  "end": 282
                },
                "start": 247,
                "end": 282
              }
            ],
            "start": 225,
            "end": 283
          },
          "definite": false,
          "start": 219,
          "end": 283
        }
      ],
      "declare": false,
      "start": 213,
      "end": 284
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
            "name": "int32",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 296
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int32Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 313
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sab",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 317
              }
            ],
            "start": 299,
            "end": 318
          },
          "definite": false,
          "start": 291,
          "end": 318
        }
      ],
      "declare": false,
      "start": 285,
      "end": 319
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
            "name": "sab64",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 331
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 355
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BigInt64Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 369
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BYTES_PER_ELEMENT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 387
                  },
                  "optional": false,
                  "computed": false,
                  "start": 356,
                  "end": 387
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 1024,
                  "raw": "1024",
                  "start": 390,
                  "end": 394
                },
                "start": 356,
                "end": 394
              }
            ],
            "start": 334,
            "end": 395
          },
          "definite": false,
          "start": 326,
          "end": 395
        }
      ],
      "declare": false,
      "start": 320,
      "end": 396
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
            "name": "int64",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 408
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "BigInt64Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 428
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sab64",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 434
              }
            ],
            "start": 411,
            "end": 435
          },
          "definite": false,
          "start": 403,
          "end": 435
        }
      ],
      "declare": false,
      "start": 397,
      "end": 436
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
            "name": "waitValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 452
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 462
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "wait",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 467
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 467
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 473
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 475,
                "end": 476
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 478,
                "end": 479
              }
            ],
            "optional": false,
            "start": 455,
            "end": 480
          },
          "definite": false,
          "start": 443,
          "end": 480
        }
      ],
      "declare": false,
      "start": 437,
      "end": 481
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 495
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 490,
                  "end": 495
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 490,
                "end": 495
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 502
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 502
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 497,
                "end": 502
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 504
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 514
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 524
              },
              "optional": false,
              "computed": false,
              "start": 507,
              "end": 524
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int32",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 530
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 532,
                "end": 533
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 535,
                "end": 536
              }
            ],
            "optional": false,
            "start": 507,
            "end": 537
          },
          "definite": false,
          "start": 488,
          "end": 537
        }
      ],
      "declare": false,
      "start": 482,
      "end": 538
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 552
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "async64",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 561
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 547,
                "end": 561
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 568
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value64",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 577
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 563,
                "end": 577
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 579
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Atomics",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 589
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "waitAsync",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 599
              },
              "optional": false,
              "computed": false,
              "start": 582,
              "end": 599
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "int64",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 605
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 607,
                "end": 608
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BigInt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 616
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 617,
                    "end": 618
                  }
                ],
                "optional": false,
                "start": 610,
                "end": 619
              }
            ],
            "optional": false,
            "start": 582,
            "end": 620
          },
          "definite": false,
          "start": 545,
          "end": 620
        }
      ],
      "declare": false,
      "start": 539,
      "end": 621
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
            "name": "main",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 633
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "async",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 663
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 681,
                            "end": 686
                          },
                          "start": 675,
                          "end": 686
                        },
                        "directive": null,
                        "start": 675,
                        "end": 687
                      }
                    ],
                    "start": 665,
                    "end": 693
                  },
                  "alternate": null,
                  "start": 654,
                  "end": 693
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "async64",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 709
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value64",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 727,
                            "end": 734
                          },
                          "start": 721,
                          "end": 734
                        },
                        "directive": null,
                        "start": 721,
                        "end": 735
                      }
                    ],
                    "start": 711,
                    "end": 741
                  },
                  "alternate": null,
                  "start": 698,
                  "end": 741
                }
              ],
              "start": 648,
              "end": 743
            },
            "id": null,
            "generator": false,
            "start": 636,
            "end": 743
          },
          "definite": false,
          "start": 629,
          "end": 743
        }
      ],
      "declare": false,
      "start": 623,
      "end": 743
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "main",
          "optional": false,
          "typeAnnotation": null,
          "start": 744,
          "end": 748
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 744,
        "end": 750
      },
      "directive": null,
      "start": 744,
      "end": 751
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 213,
  "end": 751
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "sab",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 225,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "SharedArrayBuffer",
    "start": 229,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 247,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "BYTES_PER_ELEMENT",
    "start": 258,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 276,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "1024",
    "start": 278,
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
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "int32",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 303,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "sab",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "sab64",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "SharedArrayBuffer",
    "start": 338,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 356,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "BYTES_PER_ELEMENT",
    "start": 370,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "1024",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "int64",
    "start": 403,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 411,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "BigInt64Array",
    "start": 415,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "sab64",
    "start": 429,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 437,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "waitValue",
    "start": 443,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "Atomics",
    "start": 455,
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
    "value": "wait",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "int32",
    "start": 468,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 476,
    "end": 477
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 490,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 497,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Atomics",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "waitAsync",
    "start": 515,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "int32",
    "start": 525,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 539,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "async64",
    "start": 554,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "value64",
    "start": 570,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Atomics",
    "start": 582,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "waitAsync",
    "start": 590,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "int64",
    "start": 600,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "BigInt",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 623,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 629,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 636,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 658,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 675,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 681,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 698,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "async64",
    "start": 702,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 721,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "value64",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 750,
    "end": 751
  }
]
```
