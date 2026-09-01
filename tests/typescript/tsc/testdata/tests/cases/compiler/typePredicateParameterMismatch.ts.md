__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 167
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 178,
                  "end": 181
                },
                "start": 178,
                "end": 181
              },
              "start": 176,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 172,
            "end": 181
          }
        ],
        "start": 170,
        "end": 183
      },
      "declare": false,
      "start": 157,
      "end": 184
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeB",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 195
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 204
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 206,
                  "end": 209
                },
                "start": 206,
                "end": 209
              },
              "start": 204,
              "end": 209
            },
            "accessibility": null,
            "static": false,
            "start": 200,
            "end": 209
          }
        ],
        "start": 198,
        "end": 211
      },
      "declare": false,
      "start": 185,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 227
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 235
            },
            "typeArguments": null,
            "start": 230,
            "end": 235
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 243
            },
            "typeArguments": null,
            "start": 238,
            "end": 243
          }
        ],
        "start": 230,
        "end": 243
      },
      "declare": false,
      "start": 213,
      "end": 244
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isTypeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 262
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnionType",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 283
              },
              "typeArguments": null,
              "start": 274,
              "end": 283
            },
            "start": 272,
            "end": 283
          },
          "start": 266,
          "end": 283
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 292
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TypeA",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 301
              },
              "typeArguments": null,
              "start": 296,
              "end": 301
            },
            "start": 296,
            "end": 301
          },
          "start": 287,
          "end": 301
        },
        "start": 285,
        "end": 301
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 358,
              "end": 362
            },
            "start": 351,
            "end": 363
          }
        ],
        "start": 302,
        "end": 365
      },
      "expression": false,
      "start": 246,
      "end": 365
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 380
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnionType",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 397
              },
              "typeArguments": null,
              "start": 388,
              "end": 397
            },
            "start": 386,
            "end": 397
          },
          "start": 381,
          "end": 397
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 400,
          "end": 404
        },
        "start": 398,
        "end": 404
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isTypeA",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 420
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 426
                }
              ],
              "optional": false,
              "start": 413,
              "end": 427
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 442
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 443,
                        "end": 446
                      },
                      "optional": false,
                      "computed": false,
                      "start": 435,
                      "end": 446
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "input",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 447,
                          "end": 452
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 457
                        },
                        "optional": false,
                        "computed": false,
                        "start": 447,
                        "end": 457
                      }
                    ],
                    "optional": false,
                    "start": 435,
                    "end": 458
                  },
                  "directive": null,
                  "start": 435,
                  "end": 459
                }
              ],
              "start": 429,
              "end": 463
            },
            "alternate": null,
            "start": 409,
            "end": 463
          }
        ],
        "start": 405,
        "end": 465
      },
      "expression": false,
      "start": 367,
      "end": 465
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 157,
  "end": 465
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 157,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 185,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 213,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "UnionType",
    "start": 218,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "isTypeA",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "_value",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "UnionType",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "value",
    "start": 287,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 293,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 351,
    "end": 357
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 358,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 367,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 381,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "UnionType",
    "start": 388,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "isTypeA",
    "start": 413,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 421,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 435,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 447,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  }
]
```
