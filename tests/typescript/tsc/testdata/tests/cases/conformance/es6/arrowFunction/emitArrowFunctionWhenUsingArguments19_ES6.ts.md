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
        "start": 9,
        "end": 10
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
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
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
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 56
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 59,
                        "end": 61
                      },
                      "definite": false,
                      "start": 46,
                      "end": 61
                    }
                  ],
                  "declare": false,
                  "start": 42,
                  "end": 62
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "h",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 134
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
                        "type": "VariableDeclaration",
                        "kind": "var",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "capture",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 155,
                              "end": 162
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
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 171,
                                "end": 180
                              },
                              "id": null,
                              "generator": false,
                              "start": 165,
                              "end": 180
                            },
                            "definite": false,
                            "start": 155,
                            "end": 180
                          }
                        ],
                        "declare": false,
                        "start": 151,
                        "end": 181
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 255,
                            "end": 258
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 259,
                              "end": 269
                            }
                          ],
                          "optional": false,
                          "start": 255,
                          "end": 270
                        },
                        "directive": null,
                        "start": 255,
                        "end": 271
                      }
                    ],
                    "start": 137,
                    "end": 363
                  },
                  "expression": false,
                  "start": 124,
                  "end": 363
                }
              ],
              "start": 32,
              "end": 369
            },
            "expression": false,
            "start": 19,
            "end": 369
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 387
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 391,
                    "end": 394
                  },
                  "start": 389,
                  "end": 394
                },
                "start": 388,
                "end": 394
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 100,
                    "raw": "100",
                    "start": 413,
                    "end": 416
                  },
                  "start": 406,
                  "end": 417
                }
              ],
              "start": 396,
              "end": 423
            },
            "expression": false,
            "start": 375,
            "end": 423
          }
        ],
        "start": 13,
        "end": 425
      },
      "expression": false,
      "start": 0,
      "end": 425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 425
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "_arguments",
    "start": 46,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "capture",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 168,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 171,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "_arguments",
    "start": 259,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 375,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 391,
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
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 406,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  }
]
```
