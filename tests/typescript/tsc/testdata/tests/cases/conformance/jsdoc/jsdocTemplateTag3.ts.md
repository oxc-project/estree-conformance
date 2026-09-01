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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 301
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 304
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 307
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null,
          "start": 309,
          "end": 310
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 324,
                      "end": 325
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "optional": false,
                    "computed": false,
                    "start": 324,
                    "end": 327
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 331
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 333
                      },
                      "optional": false,
                      "computed": false,
                      "start": 330,
                      "end": 333
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 340
                    },
                    "optional": false,
                    "computed": false,
                    "start": 330,
                    "end": 340
                  },
                  "start": 324,
                  "end": 340
                },
                "operator": ">",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 344
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 346
                    },
                    "optional": false,
                    "computed": false,
                    "start": 343,
                    "end": 346
                  },
                  "operator": "-",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 350
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 351,
                        "end": 352
                      },
                      "optional": false,
                      "computed": false,
                      "start": 349,
                      "end": 352
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 353,
                      "end": 359
                    },
                    "optional": false,
                    "computed": false,
                    "start": 349,
                    "end": 359
                  },
                  "start": 343,
                  "end": 359
                },
                "start": 324,
                "end": 359
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 364
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 366
                },
                "optional": false,
                "computed": false,
                "start": 363,
                "end": 366
              },
              "start": 324,
              "end": 366
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 386
                  },
                  "start": 378,
                  "end": 387
                }
              ],
              "start": 368,
              "end": 393
            },
            "alternate": null,
            "start": 321,
            "end": 393
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 406
            },
            "start": 398,
            "end": 407
          }
        ],
        "start": 315,
        "end": 409
      },
      "expression": false,
      "start": 289,
      "end": 409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 412
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 416
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 418,
                  "end": 420
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 415,
                "end": 420
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 423
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "'hi'",
                  "start": 425,
                  "end": 429
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 422,
                "end": 429
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 431,
                  "end": 432
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 434,
                  "end": 438
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 431,
                "end": 438
              }
            ],
            "start": 413,
            "end": 440
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 451
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 455,
                  "end": 456
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 458,
                  "end": 463
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 455,
                "end": 463
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 468,
                  "end": 470
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 465,
                "end": 470
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 473
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 484
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 472,
                "end": 484
              }
            ],
            "start": 453,
            "end": 486
          },
          {
            "type": "Literal",
            "value": 101,
            "raw": "101",
            "start": 488,
            "end": 491
          },
          {
            "type": "Literal",
            "value": "nope",
            "raw": "'nope'",
            "start": 493,
            "end": 499
          }
        ],
        "optional": false,
        "start": 411,
        "end": 500
      },
      "directive": null,
      "start": 411,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 502,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 509,
                  "end": 511
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 506,
                "end": 511
              }
            ],
            "start": 504,
            "end": 514
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 525
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 536
          },
          {
            "type": "Literal",
            "value": 101,
            "raw": "101",
            "start": 538,
            "end": 541
          },
          {
            "type": "Literal",
            "value": "nope",
            "raw": "'nope'",
            "start": 543,
            "end": 549
          }
        ],
        "optional": false,
        "start": 502,
        "end": 550
      },
      "directive": null,
      "start": 502,
      "end": 551
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 678
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 679,
          "end": 680
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 682,
        "end": 685
      },
      "expression": false,
      "start": 668,
      "end": 685
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 289,
  "end": 686
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 289,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 300,
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
    "value": "u",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 360,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 378,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "w",
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
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 398,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Null",
    "value": "null",
    "start": 434,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 442,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 458,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 475,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "'nope'",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 509,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 516,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 527,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "101",
    "start": 538,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "String",
    "value": "'nope'",
    "start": 543,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 668,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  }
]
```
