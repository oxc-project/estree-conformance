__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "start": 124,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 135
          },
          "optional": false,
          "computed": false,
          "start": 124,
          "end": 135
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 140
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getCanonicalLocales",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 160
              },
              "optional": false,
              "computed": false,
              "start": 136,
              "end": 160
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "EN-US",
                "raw": "'EN-US'",
                "start": 161,
                "end": 168
              }
            ],
            "optional": false,
            "start": 136,
            "end": 169
          }
        ],
        "optional": false,
        "start": 124,
        "end": 170
      },
      "directive": null,
      "start": 124,
      "end": 171
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
            "start": 209,
            "end": 216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "optional": false,
          "computed": false,
          "start": 209,
          "end": 220
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getCanonicalLocales",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 245
              },
              "optional": false,
              "computed": false,
              "start": 221,
              "end": 245
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "EN-US",
                    "raw": "'EN-US'",
                    "start": 247,
                    "end": 254
                  },
                  {
                    "type": "Literal",
                    "value": "Fr",
                    "raw": "'Fr'",
                    "start": 256,
                    "end": 260
                  }
                ],
                "start": 246,
                "end": 261
              }
            ],
            "optional": false,
            "start": 221,
            "end": 262
          }
        ],
        "optional": false,
        "start": 209,
        "end": 263
      },
      "directive": null,
      "start": 209,
      "end": 264
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getCanonicalLocales",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 340
                },
                "optional": false,
                "computed": false,
                "start": 316,
                "end": 340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "EN_US",
                  "raw": "'EN_US'",
                  "start": 341,
                  "end": 348
                }
              ],
              "optional": false,
              "start": 316,
              "end": 349
            },
            "directive": null,
            "start": 316,
            "end": 350
          }
        ],
        "start": 312,
        "end": 352
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 363
        },
        "body": {
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
                    "start": 369,
                    "end": 376
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 380
                  },
                  "optional": false,
                  "computed": false,
                  "start": 369,
                  "end": 380
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "err",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 384
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 385,
                        "end": 393
                      },
                      "optional": false,
                      "computed": false,
                      "start": 381,
                      "end": 393
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 381,
                    "end": 395
                  }
                ],
                "optional": false,
                "start": 369,
                "end": 396
              },
              "directive": null,
              "start": 369,
              "end": 397
            }
          ],
          "start": 365,
          "end": 461
        },
        "start": 353,
        "end": 461
      },
      "finalizer": null,
      "start": 308,
      "end": 461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 124,
  "end": 461
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "console",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "getCanonicalLocales",
    "start": 141,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "String",
    "value": "'EN-US'",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 209,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "getCanonicalLocales",
    "start": 226,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "'EN-US'",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "'Fr'",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "getCanonicalLocales",
    "start": 321,
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
    "value": "'EN_US'",
    "start": 341,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 353,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 377,
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
    "value": "err",
    "start": 381,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 385,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
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
    "value": ")",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  }
]
```
