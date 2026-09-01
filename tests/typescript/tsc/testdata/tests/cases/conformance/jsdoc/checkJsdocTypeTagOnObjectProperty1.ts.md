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
            "name": "lol",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 20
          },
          "init": {
            "type": "Literal",
            "value": "hello Lol",
            "raw": "\"hello Lol\"",
            "start": 23,
            "end": 34
          },
          "definite": false,
          "start": 17,
          "end": 34
        }
      ],
      "declare": false,
      "start": 13,
      "end": 34
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 44
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 88
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 85,
                "end": 99
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "value": {
                  "type": "Literal",
                  "value": "42",
                  "raw": "\"42\"",
                  "start": 142,
                  "end": 146
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 137,
                "end": 146
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 199
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 202
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 221
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 224,
                            "end": 226
                          },
                          "start": 219,
                          "end": 226
                        },
                        "start": 212,
                        "end": 227
                      }
                    ],
                    "start": 204,
                    "end": 231
                  },
                  "expression": false,
                  "start": 199,
                  "end": 231
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 192,
                "end": 231
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 262
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 262
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 259,
                "end": 262
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 291,
                    "end": 294
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "ar1",
                    "raw": "'ar1'",
                    "start": 297,
                    "end": 302
                  },
                  "start": 291,
                  "end": 302
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 305,
                  "end": 307
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 290,
                "end": 307
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arrowFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 362
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 368
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 376
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 379,
                      "end": 381
                    },
                    "start": 373,
                    "end": 381
                  },
                  "id": null,
                  "generator": false,
                  "start": 364,
                  "end": 381
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 353,
                "end": 381
              }
            ],
            "start": 47,
            "end": 383
          },
          "definite": false,
          "start": 41,
          "end": 383
        }
      ],
      "declare": false,
      "start": 35,
      "end": 383
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 387
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 384,
          "end": 391
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 394,
          "end": 402
        },
        "start": 384,
        "end": 402
      },
      "directive": null,
      "start": 384,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 403,
          "end": 406
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "lol",
          "optional": false,
          "typeAnnotation": null,
          "start": 407,
          "end": 410
        },
        "optional": false,
        "computed": false,
        "start": 403,
        "end": 410
      },
      "directive": null,
      "start": 403,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 414
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 418
          },
          "optional": false,
          "computed": false,
          "start": 411,
          "end": 418
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 430
        },
        "start": 411,
        "end": 430
      },
      "directive": null,
      "start": 411,
      "end": 431
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 437
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "method1",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 451
              },
              "optional": false,
              "computed": false,
              "start": 440,
              "end": 451
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 452,
                "end": 453
              }
            ],
            "optional": false,
            "start": 440,
            "end": 454
          },
          "definite": false,
          "start": 436,
          "end": 454
        }
      ],
      "declare": false,
      "start": 432,
      "end": 455
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 456,
            "end": 459
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 464
          },
          "optional": false,
          "computed": false,
          "start": 456,
          "end": 464
        },
        "right": {
          "type": "Literal",
          "value": "42",
          "raw": "\"42\"",
          "start": 467,
          "end": 471
        },
        "start": 456,
        "end": 471
      },
      "directive": null,
      "start": 456,
      "end": 472
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 476
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrowFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 486
          },
          "optional": false,
          "computed": false,
          "start": 473,
          "end": 486
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 487,
            "end": 488
          }
        ],
        "optional": false,
        "start": 473,
        "end": 489
      },
      "directive": null,
      "start": 473,
      "end": 490
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 490
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "lol",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"hello Lol\"",
    "start": 23,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 90,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"42\"",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 200,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 212,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 222,
    "end": 223
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "lol",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 290,
    "end": 291
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 295,
    "end": 296
  },
  {
    "type": "String",
    "value": "'ar1'",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 305,
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
    "value": "arrowFunc",
    "start": 353,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 370,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 377,
    "end": 378
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 394,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "lol",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 421,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 444,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "String",
    "value": "\"42\"",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 473,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "arrowFunc",
    "start": 477,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  }
]
```
