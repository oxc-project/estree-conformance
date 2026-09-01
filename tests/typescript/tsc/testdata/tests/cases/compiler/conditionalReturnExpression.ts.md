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
        "name": "return1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
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
              "start": 20,
              "end": 27
            },
            "start": 18,
            "end": 27
          },
          "start": 17,
          "end": 27
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 30,
            "end": 31
          },
          "start": 30,
          "end": 31
        },
        "start": 28,
        "end": 31
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 51,
                "end": 52
              },
              "alternate": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 56,
                "end": 57
              },
              "start": 46,
              "end": 57
            },
            "start": 38,
            "end": 59
          }
        ],
        "start": 32,
        "end": 61
      },
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 90,
          "end": 93
        },
        "start": 88,
        "end": 93
      },
      "body": null,
      "expression": false,
      "start": 63,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "return2",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 112
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
              "type": "TSStringKeyword",
              "start": 116,
              "end": 122
            },
            "start": 114,
            "end": 122
          },
          "start": 113,
          "end": 122
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 125,
          "end": 131
        },
        "start": 123,
        "end": 131
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 157
                  },
                  "optional": false,
                  "computed": false,
                  "start": 145,
                  "end": 157
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 158,
                    "end": 161
                  }
                ],
                "optional": false,
                "start": 145,
                "end": 162
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 171
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 165,
                "end": 173
              },
              "alternate": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 176,
                "end": 177
              },
              "start": 145,
              "end": 177
            },
            "start": 138,
            "end": 178
          }
        ],
        "start": 132,
        "end": 180
      },
      "expression": false,
      "start": 96,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "return3",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 198
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
              "type": "TSStringKeyword",
              "start": 202,
              "end": 208
            },
            "start": 200,
            "end": 208
          },
          "start": 199,
          "end": 208
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 211,
          "end": 217
        },
        "start": 209,
        "end": 217
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 232
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 231,
                  "end": 243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 244,
                    "end": 247
                  }
                ],
                "optional": false,
                "start": 231,
                "end": 248
              },
              "consequent": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 251,
                "end": 254
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "start": 231,
              "end": 258
            },
            "start": 224,
            "end": 259
          }
        ],
        "start": 218,
        "end": 261
      },
      "expression": false,
      "start": 182,
      "end": 261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "return4",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 279
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
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            },
            "start": 281,
            "end": 289
          },
          "start": 280,
          "end": 289
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 292,
          "end": 298
        },
        "start": 290,
        "end": 298
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 314
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 325
                    },
                    "optional": false,
                    "computed": false,
                    "start": 313,
                    "end": 325
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 326,
                      "end": 329
                    }
                  ],
                  "optional": false,
                  "start": 313,
                  "end": 330
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 339
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 333,
                  "end": 341
                },
                "alternate": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 344,
                  "end": 345
                },
                "start": 313,
                "end": 345
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 350,
                "end": 356
              },
              "start": 312,
              "end": 356
            },
            "start": 305,
            "end": 357
          }
        ],
        "start": 299,
        "end": 359
      },
      "expression": false,
      "start": 263,
      "end": 359
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
            "name": "return5",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 374
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 381,
                    "end": 387
                  },
                  "start": 379,
                  "end": 387
                },
                "start": 378,
                "end": 387
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 412
                  },
                  "optional": false,
                  "computed": false,
                  "start": 400,
                  "end": 412
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 413,
                    "end": 416
                  }
                ],
                "optional": false,
                "start": 400,
                "end": 417
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 426
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 420,
                "end": 428
              },
              "alternate": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 431,
                "end": 432
              },
              "start": 400,
              "end": 432
            },
            "id": null,
            "generator": false,
            "start": 377,
            "end": 432
          },
          "definite": false,
          "start": 367,
          "end": 432
        }
      ],
      "declare": false,
      "start": 361,
      "end": 433
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
            "name": "return6",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 448
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  },
                  "start": 453,
                  "end": 461
                },
                "start": 452,
                "end": 461
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 476
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 487
                    },
                    "optional": false,
                    "computed": false,
                    "start": 475,
                    "end": 487
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 488,
                      "end": 491
                    }
                  ],
                  "optional": false,
                  "start": 475,
                  "end": 492
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 501
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 495,
                  "end": 503
                },
                "alternate": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 506,
                  "end": 507
                },
                "start": 475,
                "end": 507
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 512,
                "end": 518
              },
              "start": 474,
              "end": 518
            },
            "id": null,
            "generator": false,
            "start": 451,
            "end": 518
          },
          "definite": false,
          "start": 441,
          "end": 518
        }
      ],
      "declare": false,
      "start": 435,
      "end": 519
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 519
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
    "value": "return1",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "return",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 63,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 71,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "getAny",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
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
    "value": "any",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "return2",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 138,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "startsWith",
    "start": 147,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "getAny",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "return3",
    "start": 191,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 211,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 224,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "startsWith",
    "start": 233,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 243,
    "end": 244
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 263,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "return4",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "startsWith",
    "start": 315,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "getAny",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 347,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 350,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "return5",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 397,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "startsWith",
    "start": 402,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "getAny",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 435,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "return6",
    "start": 441,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 475,
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
    "value": "startsWith",
    "start": 477,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "getAny",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 509,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  }
]
```
