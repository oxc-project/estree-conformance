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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 68
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 79,
              "end": 83
            },
            "consequent": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 91
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              },
              "declare": false,
              "start": 85,
              "end": 101
            },
            "alternate": null,
            "start": 75,
            "end": 101
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 111
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 115
                },
                "optional": false,
                "computed": false,
                "start": 104,
                "end": 115
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 116,
                    "end": 118
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 123
                  },
                  "start": 116,
                  "end": 123
                }
              ],
              "optional": false,
              "start": 104,
              "end": 124
            },
            "directive": null,
            "start": 104,
            "end": 125
          }
        ],
        "start": 71,
        "end": 127
      },
      "expression": false,
      "start": 57,
      "end": 127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 140
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 151,
              "end": 155
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "declare": false,
                  "start": 163,
                  "end": 179
                }
              ],
              "start": 157,
              "end": 183
            },
            "alternate": null,
            "start": 147,
            "end": 183
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 193
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 194,
                  "end": 197
                },
                "optional": false,
                "computed": false,
                "start": 186,
                "end": 197
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 198,
                    "end": 200
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "typeArguments": null,
                    "start": 204,
                    "end": 205
                  },
                  "start": 198,
                  "end": 205
                }
              ],
              "optional": false,
              "start": 186,
              "end": 206
            },
            "directive": null,
            "start": 186,
            "end": 207
          }
        ],
        "start": 143,
        "end": 209
      },
      "expression": false,
      "start": 129,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 222
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 233,
              "end": 237
            },
            "consequent": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 254
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 269
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 271,
                        "end": 277
                      },
                      "start": 269,
                      "end": 277
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 263,
                    "end": 278
                  }
                ],
                "start": 255,
                "end": 284
              },
              "declare": false,
              "start": 243,
              "end": 284
            },
            "alternate": null,
            "start": 229,
            "end": 284
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 294
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 298
                },
                "optional": false,
                "computed": false,
                "start": 287,
                "end": 298
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 299,
                    "end": 301
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    },
                    "typeArguments": null,
                    "start": 305,
                    "end": 306
                  },
                  "start": 299,
                  "end": 306
                }
              ],
              "optional": false,
              "start": 287,
              "end": 307
            },
            "directive": null,
            "start": 287,
            "end": 308
          }
        ],
        "start": 225,
        "end": 310
      },
      "expression": false,
      "start": 211,
      "end": 310
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 323
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
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 334,
              "end": 338
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 356,
                    "end": 357
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 372
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 374,
                            "end": 380
                          },
                          "start": 372,
                          "end": 380
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 366,
                        "end": 381
                      }
                    ],
                    "start": 358,
                    "end": 387
                  },
                  "declare": false,
                  "start": 346,
                  "end": 387
                }
              ],
              "start": 340,
              "end": 391
            },
            "alternate": null,
            "start": 330,
            "end": 391
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 401
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 394,
                "end": 405
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 406,
                    "end": 408
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 413
                    },
                    "typeArguments": null,
                    "start": 412,
                    "end": 413
                  },
                  "start": 406,
                  "end": 413
                }
              ],
              "optional": false,
              "start": 394,
              "end": 414
            },
            "directive": null,
            "start": 394,
            "end": 415
          }
        ],
        "start": 326,
        "end": 417
      },
      "expression": false,
      "start": 312,
      "end": 417
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 417
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
    "value": "f1",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 104,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 129,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 151,
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
    "value": "type",
    "start": 163,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 197,
    "end": 198
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 198,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 211,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 220,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 233,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 243,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 295,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 299,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 302,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 312,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "f4",
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
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 346,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 366,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 394,
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
    "value": "log",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 409,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  }
]
```
