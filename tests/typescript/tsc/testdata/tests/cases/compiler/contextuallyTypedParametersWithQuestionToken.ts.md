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
        "name": "acceptNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 81,
              "end": 87
            },
            "start": 79,
            "end": 87
          },
          "start": 76,
          "end": 87
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 89,
        "end": 91
      },
      "expression": false,
      "start": 57,
      "end": 91
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 107,
                        "end": 113
                      },
                      "start": 105,
                      "end": 113
                    },
                    "start": 104,
                    "end": 113
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 118,
                        "end": 124
                      },
                      "start": 116,
                      "end": 124
                    },
                    "start": 115,
                    "end": 124
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 129,
                    "end": 133
                  },
                  "start": 126,
                  "end": 133
                },
                "start": 103,
                "end": 133
              },
              "start": 101,
              "end": 133
            },
            "start": 99,
            "end": 133
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 149
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": null,
                "start": 153,
                "end": 155
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "acceptNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 170
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 171,
                        "end": 172
                      }
                    ],
                    "optional": false,
                    "start": 161,
                    "end": 173
                  },
                  "directive": null,
                  "start": 161,
                  "end": 174
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 190
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 191,
                        "end": 193
                      }
                    ],
                    "optional": false,
                    "start": 186,
                    "end": 194
                  },
                  "directive": null,
                  "start": 186,
                  "end": 195
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 202
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 203,
                        "end": 205
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 216
                      }
                    ],
                    "optional": false,
                    "start": 198,
                    "end": 217
                  },
                  "directive": null,
                  "start": 198,
                  "end": 218
                }
              ],
              "start": 157,
              "end": 220
            },
            "expression": false,
            "start": 136,
            "end": 220
          },
          "definite": false,
          "start": 99,
          "end": 220
        }
      ],
      "declare": false,
      "start": 93,
      "end": 221
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "start": 234,
                    "end": 243
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 248,
                        "end": 254
                      },
                      "start": 246,
                      "end": 254
                    },
                    "start": 245,
                    "end": 254
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 259,
                    "end": 263
                  },
                  "start": 256,
                  "end": 263
                },
                "start": 233,
                "end": 263
              },
              "start": 231,
              "end": 263
            },
            "start": 229,
            "end": 263
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 281
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 287,
                    "end": 293
                  },
                  "start": 285,
                  "end": 293
                },
                "start": 283,
                "end": 293
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "acceptNum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 308
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 310
                      }
                    ],
                    "optional": false,
                    "start": 299,
                    "end": 311
                  },
                  "directive": null,
                  "start": 299,
                  "end": 312
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 324,
                      "end": 328
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 329,
                        "end": 331
                      }
                    ],
                    "optional": false,
                    "start": 324,
                    "end": 332
                  },
                  "directive": null,
                  "start": 324,
                  "end": 333
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 340
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 341,
                        "end": 343
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 354
                      }
                    ],
                    "optional": false,
                    "start": 336,
                    "end": 355
                  },
                  "directive": null,
                  "start": 336,
                  "end": 356
                }
              ],
              "start": 295,
              "end": 358
            },
            "expression": false,
            "start": 266,
            "end": 358
          },
          "definite": false,
          "start": 229,
          "end": 358
        }
      ],
      "declare": false,
      "start": 223,
      "end": 359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 359
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 57,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "acceptNum",
    "start": 66,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
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
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
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
    "value": "a",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 126,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 136,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "acceptNum",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 191,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 207,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 237,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 256,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 259,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 266,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 275,
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
    "value": "a",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "acceptNum",
    "start": 299,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 324,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 336,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 345,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  }
]
```
