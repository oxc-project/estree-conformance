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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 102
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 104,
                                "end": 110
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 113,
                                "end": 122
                              }
                            ],
                            "start": 104,
                            "end": 122
                          },
                          "start": 102,
                          "end": 122
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 101,
                        "end": 122
                      }
                    ],
                    "start": 99,
                    "end": 124
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 127,
                    "end": 136
                  }
                ],
                "start": 99,
                "end": 136
              },
              "start": 97,
              "end": 136
            },
            "start": 96,
            "end": 136
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 152,
              "end": 155
            },
            "start": 139,
            "end": 155
          },
          "definite": false,
          "start": 96,
          "end": 155
        }
      ],
      "declare": false,
      "start": 90,
      "end": 156
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 235
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 239
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "optional": true,
                  "computed": false,
                  "start": 238,
                  "end": 242
                },
                "start": 238,
                "end": 242
              },
              "operator": "??",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "oops",
                      "cooked": "oops"
                    },
                    "tail": true,
                    "start": 246,
                    "end": 252
                  }
                ],
                "expressions": [],
                "start": 246,
                "end": 252
              },
              "start": 238,
              "end": 252
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 256,
              "end": 258
            },
            "start": 238,
            "end": 258
          },
          "definite": false,
          "start": 232,
          "end": 258
        }
      ],
      "declare": false,
      "start": 226,
      "end": 259
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 269
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "optional": true,
                  "computed": false,
                  "start": 273,
                  "end": 277
                },
                "start": 273,
                "end": 277
              },
              "operator": "??",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "oops",
                      "cooked": "oops"
                    },
                    "tail": true,
                    "start": 281,
                    "end": 287
                  }
                ],
                "expressions": [],
                "start": 281,
                "end": 287
              },
              "start": 273,
              "end": 287
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 292,
              "end": 294
            },
            "start": 272,
            "end": 294
          },
          "definite": false,
          "start": 266,
          "end": 294
        }
      ],
      "declare": false,
      "start": 260,
      "end": 295
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
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 359,
            "end": 362
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 368
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 371
                  },
                  "optional": true,
                  "computed": false,
                  "start": 367,
                  "end": 371
                },
                "start": 367,
                "end": 371
              },
              "operator": "??",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "oops",
                      "cooked": "oops"
                    },
                    "tail": true,
                    "start": 375,
                    "end": 381
                  }
                ],
                "expressions": [],
                "start": 375,
                "end": 381
              },
              "start": 367,
              "end": 381
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 387,
              "end": 389
            },
            "start": 365,
            "end": 389
          },
          "definite": false,
          "start": 359,
          "end": 389
        }
      ],
      "declare": false,
      "start": 353,
      "end": 390
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
            "name": "qux",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 407
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 410
                  },
                  "optional": true,
                  "computed": false,
                  "start": 406,
                  "end": 410
                },
                "start": 406,
                "end": 410
              },
              "operator": "??",
              "right": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "oops",
                      "cooked": "oops"
                    },
                    "tail": true,
                    "start": 414,
                    "end": 420
                  }
                ],
                "expressions": [],
                "start": 414,
                "end": 420
              },
              "start": 406,
              "end": 420
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 427,
              "end": 429
            },
            "start": 403,
            "end": 429
          },
          "definite": false,
          "start": 397,
          "end": 429
        }
      ],
      "declare": false,
      "start": 391,
      "end": 430
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
            "name": "str1",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 471
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "literal",
              "raw": "\"literal\"",
              "start": 475,
              "end": 484
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "fallback",
              "raw": "\"fallback\"",
              "start": 489,
              "end": 499
            },
            "start": 474,
            "end": 499
          },
          "definite": false,
          "start": 467,
          "end": 499
        }
      ],
      "declare": false,
      "start": 461,
      "end": 500
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
            "name": "str2",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 511
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "nested",
              "raw": "\"nested\"",
              "start": 516,
              "end": 524
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "fallback",
              "raw": "\"fallback\"",
              "start": 530,
              "end": 540
            },
            "start": 514,
            "end": 540
          },
          "definite": false,
          "start": 507,
          "end": 540
        }
      ],
      "declare": false,
      "start": 501,
      "end": 541
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
            "name": "nested",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 554
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 558,
                "end": 561
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 565,
                "end": 568
              },
              "start": 558,
              "end": 568
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "c",
              "raw": "\"c\"",
              "start": 573,
              "end": 576
            },
            "start": 557,
            "end": 576
          },
          "definite": false,
          "start": 548,
          "end": 576
        }
      ],
      "declare": false,
      "start": 542,
      "end": 577
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 90,
  "end": 577
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 90,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 127,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 139,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 239,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 243,
    "end": 245
  },
  {
    "type": "Template",
    "value": "`oops`",
    "start": 246,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 253,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 260,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 278,
    "end": 280
  },
  {
    "type": "Template",
    "value": "`oops`",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 289,
    "end": 291
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 359,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 368,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 372,
    "end": 374
  },
  {
    "type": "Template",
    "value": "`oops`",
    "start": 375,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
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
    "value": "??",
    "start": 384,
    "end": 386
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 391,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "qux",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 407,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 411,
    "end": 413
  },
  {
    "type": "Template",
    "value": "`oops`",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 424,
    "end": 426
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 461,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "str1",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "String",
    "value": "\"literal\"",
    "start": 475,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 486,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"fallback\"",
    "start": 489,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "str2",
    "start": 507,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "String",
    "value": "\"nested\"",
    "start": 516,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "??",
    "start": 527,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"fallback\"",
    "start": 530,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 542,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 562,
    "end": 564
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 570,
    "end": 572
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  }
]
```
