__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asdf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 25,
                        "end": 29
                      },
                      "typeArguments": null,
                      "start": 25,
                      "end": 29
                    },
                    "start": 23,
                    "end": 29
                  },
                  "start": 22,
                  "end": 29
                },
                "init": null,
                "definite": false,
                "start": 22,
                "end": 29
              }
            ],
            "declare": false,
            "start": 18,
            "end": 30
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 40
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 44
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 51
                  },
                  "start": 43,
                  "end": 51
                },
                "definite": false,
                "start": 39,
                "end": 51
              }
            ],
            "declare": false,
            "start": 35,
            "end": 52
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asdf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 70
                    },
                    "typeArguments": null,
                    "start": 66,
                    "end": 70
                  },
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "start": 65,
                  "end": 72
                },
                "definite": false,
                "start": 61,
                "end": 72
              }
            ],
            "declare": false,
            "start": 57,
            "end": 73
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 108
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 110,
              "end": 117
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "qwerty",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 137
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 139,
                "end": 146
              },
              "alternate": null,
              "start": 127,
              "end": 146
            },
            "start": 100,
            "end": 146
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 156,
              "end": 163
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "asdf",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 179
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 181,
                "end": 200
              },
              "start": 168,
              "end": 200
            },
            "finalizer": null,
            "start": 152,
            "end": 200
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 218
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qwerty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 241
                },
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 255,
                    "end": 261
                  }
                ],
                "start": 230,
                "end": 261
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 291,
                    "end": 297
                  }
                ],
                "start": 270,
                "end": 297
              }
            ],
            "start": 206,
            "end": 303
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 314
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asdf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 323,
                    "end": 327
                  },
                  "id": null,
                  "generator": false,
                  "start": 317,
                  "end": 327
                },
                "definite": false,
                "start": 313,
                "end": 327
              }
            ],
            "declare": false,
            "start": 309,
            "end": 328
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asdf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 346
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "qwerty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 360,
                          "end": 366
                        },
                        "start": 353,
                        "end": 366
                      }
                    ],
                    "start": 351,
                    "end": 368
                  },
                  "id": null,
                  "generator": false,
                  "start": 341,
                  "end": 368
                },
                "definite": false,
                "start": 337,
                "end": 368
              }
            ],
            "declare": false,
            "start": 333,
            "end": 369
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "body": {
              "type": "TSModuleBlock",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 402
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 405,
                        "end": 406
                      },
                      "definite": false,
                      "start": 401,
                      "end": 406
                    }
                  ],
                  "declare": false,
                  "start": 397,
                  "end": 407
                }
              ],
              "start": 387,
              "end": 413
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 375,
            "end": 413
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 430
            },
            "importKind": "value",
            "start": 418,
            "end": 431
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "asdf",
              "optional": false,
              "typeAnnotation": null,
              "start": 447,
              "end": 451
            },
            "importKind": "value",
            "start": 436,
            "end": 452
          }
        ],
        "start": 12,
        "end": 454
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 18,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 122,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "qwerty",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 168,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 175,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 230,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "qwerty",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 309,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 320,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 333,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 353,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "qwerty",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 375,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 418,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 429,
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
    "value": "import",
    "start": 436,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "asdf",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  }
]
```
