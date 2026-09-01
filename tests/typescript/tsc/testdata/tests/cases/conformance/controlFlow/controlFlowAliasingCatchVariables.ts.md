__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 4,
        "end": 6
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
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
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 37
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 47,
                        "end": 48
                      },
                      "prefix": true,
                      "start": 40,
                      "end": 48
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 53,
                      "end": 61
                    },
                    "start": 40,
                    "end": 61
                  },
                  "definite": false,
                  "start": 29,
                  "end": 61
                }
              ],
              "declare": false,
              "start": 23,
              "end": 62
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 79
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 92
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 93,
                          "end": 104
                        },
                        "optional": false,
                        "computed": false,
                        "start": 91,
                        "end": 104
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 91,
                      "end": 106
                    },
                    "directive": null,
                    "start": 91,
                    "end": 107
                  }
                ],
                "start": 81,
                "end": 125
              },
              "alternate": null,
              "start": 67,
              "end": 125
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "prefix": true,
                  "start": 135,
                  "end": 143
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 148,
                  "end": 156
                },
                "start": 135,
                "end": 156
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 169
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 181
                        },
                        "optional": false,
                        "computed": false,
                        "start": 168,
                        "end": 181
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 168,
                      "end": 183
                    },
                    "directive": null,
                    "start": 168,
                    "end": 184
                  }
                ],
                "start": 158,
                "end": 202
              },
              "alternate": null,
              "start": 131,
              "end": 202
            }
          ],
          "start": 17,
          "end": 204
        },
        "start": 7,
        "end": 204
      },
      "finalizer": null,
      "start": 0,
      "end": 204
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 210,
        "end": 212
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 221
        },
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
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 243
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 254
                      },
                      "prefix": true,
                      "start": 246,
                      "end": 254
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 259,
                      "end": 267
                    },
                    "start": 246,
                    "end": 267
                  },
                  "definite": false,
                  "start": 235,
                  "end": 267
                }
              ],
              "declare": false,
              "start": 229,
              "end": 268
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 275
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 278,
                  "end": 279
                },
                "start": 274,
                "end": 279
              },
              "directive": null,
              "start": 274,
              "end": 280
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 298
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 312,
                          "end": 323
                        },
                        "optional": false,
                        "computed": false,
                        "start": 310,
                        "end": 323
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 310,
                      "end": 325
                    },
                    "directive": null,
                    "start": 310,
                    "end": 326
                  }
                ],
                "start": 300,
                "end": 349
              },
              "alternate": null,
              "start": 286,
              "end": 349
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 367
                  },
                  "prefix": true,
                  "start": 359,
                  "end": 367
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 372,
                  "end": 380
                },
                "start": 359,
                "end": 380
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 393
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 405
                        },
                        "optional": false,
                        "computed": false,
                        "start": 392,
                        "end": 405
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 392,
                      "end": 407
                    },
                    "directive": null,
                    "start": 392,
                    "end": 408
                  }
                ],
                "start": 382,
                "end": 426
              },
              "alternate": null,
              "start": 355,
              "end": 426
            }
          ],
          "start": 223,
          "end": 428
        },
        "start": 213,
        "end": 428
      },
      "finalizer": null,
      "start": 206,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 428
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "try",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 40,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 49,
    "end": 52
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 53,
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
    "value": "if",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 71,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 93,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 135,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 144,
    "end": 147
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 148,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 170,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 213,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 235,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 246,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 255,
    "end": 258
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 259,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 290,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 312,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 355,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 359,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 368,
    "end": 371
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 372,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 394,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  }
]
```
