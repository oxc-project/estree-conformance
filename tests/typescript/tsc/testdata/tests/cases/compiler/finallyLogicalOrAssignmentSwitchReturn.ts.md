__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 8,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 28
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
              "type": "TSBooleanKeyword",
              "start": 32,
              "end": 39
            },
            "start": 30,
            "end": 39
          },
          "start": 29,
          "end": 39
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 42,
          "end": 48
        },
        "start": 40,
        "end": 48
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 99,
                        "end": 103
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 112,
                            "end": 113
                          },
                          "start": 105,
                          "end": 113
                        }
                      ],
                      "start": 94,
                      "end": 113
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 131,
                        "end": 136
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 145,
                            "end": 146
                          },
                          "start": 138,
                          "end": 146
                        }
                      ],
                      "start": 126,
                      "end": 146
                    }
                  ],
                  "start": 69,
                  "end": 156
                }
              ],
              "start": 59,
              "end": 162
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "||=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "right": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 179,
                      "end": 183
                    },
                    "start": 173,
                    "end": 183
                  },
                  "directive": null,
                  "start": 173,
                  "end": 183
                }
              ],
              "start": 171,
              "end": 185
            },
            "start": 55,
            "end": 185
          }
        ],
        "start": 49,
        "end": 187
      },
      "expression": false,
      "start": 14,
      "end": 187
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "init": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 197,
            "end": 202
          },
          "definite": false,
          "start": 193,
          "end": 202
        }
      ],
      "declare": false,
      "start": 189,
      "end": 202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 217
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
              "type": "TSBooleanKeyword",
              "start": 221,
              "end": 228
            },
            "start": 219,
            "end": 228
          },
          "start": 218,
          "end": 228
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 231,
          "end": 237
        },
        "start": 229,
        "end": 237
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 267
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 288,
                        "end": 292
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 301,
                            "end": 302
                          },
                          "start": 294,
                          "end": 302
                        }
                      ],
                      "start": 283,
                      "end": 302
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 320,
                        "end": 325
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 334,
                            "end": 335
                          },
                          "start": 327,
                          "end": 335
                        }
                      ],
                      "start": 315,
                      "end": 335
                    }
                  ],
                  "start": 258,
                  "end": 345
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 361,
                    "end": 362
                  },
                  "start": 354,
                  "end": 362
                }
              ],
              "start": 248,
              "end": 368
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "||=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 380
                    },
                    "right": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 385,
                      "end": 389
                    },
                    "start": 379,
                    "end": 389
                  },
                  "directive": null,
                  "start": 379,
                  "end": 389
                }
              ],
              "start": 377,
              "end": 391
            },
            "start": 244,
            "end": 391
          }
        ],
        "start": 238,
        "end": 393
      },
      "expression": false,
      "start": 203,
      "end": 393
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 393
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 8,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 14,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 94,
    "end": 98
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 105,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 126,
    "end": 130
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 131,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 138,
    "end": 144
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 175,
    "end": 178
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 197,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 203,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 221,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 258,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 283,
    "end": 287
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 294,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 315,
    "end": 319
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 320,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 327,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 354,
    "end": 360
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 381,
    "end": 384
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  }
]
```
