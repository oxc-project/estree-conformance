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
            "name": "locales",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 148
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "ban",
                "raw": "'ban'",
                "start": 152,
                "end": 157
              },
              {
                "type": "Literal",
                "value": "id-u-co-pinyin",
                "raw": "'id-u-co-pinyin'",
                "start": 159,
                "end": 175
              },
              {
                "type": "Literal",
                "value": "de-ID",
                "raw": "'de-ID'",
                "start": 177,
                "end": 184
              }
            ],
            "start": 151,
            "end": 185
          },
          "definite": false,
          "start": 141,
          "end": 185
        }
      ],
      "declare": false,
      "start": 135,
      "end": 186
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
            "name": "options",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 200
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "localeMatcher",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 205,
                    "end": 218
                  },
                  "value": {
                    "type": "Literal",
                    "value": "lookup",
                    "raw": "'lookup'",
                    "start": 220,
                    "end": 228
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 205,
                  "end": 228
                }
              ],
              "start": 203,
              "end": 230
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 239
              },
              "typeArguments": null,
              "start": 234,
              "end": 239
            },
            "start": 203,
            "end": 239
          },
          "definite": false,
          "start": 193,
          "end": 239
        }
      ],
      "declare": false,
      "start": 187,
      "end": 240
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
            "start": 241,
            "end": 248
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 249,
            "end": 252
          },
          "optional": false,
          "computed": false,
          "start": 241,
          "end": 252
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 253,
                      "end": 257
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PluralRules",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 269
                    },
                    "optional": false,
                    "computed": false,
                    "start": 253,
                    "end": 269
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "supportedLocalesOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 288
                  },
                  "optional": false,
                  "computed": false,
                  "start": 253,
                  "end": 288
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "locales",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 296
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 305
                  }
                ],
                "optional": false,
                "start": 253,
                "end": 306
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 311
              },
              "optional": false,
              "computed": false,
              "start": 253,
              "end": 311
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": ", ",
                "raw": "', '",
                "start": 312,
                "end": 316
              }
            ],
            "optional": false,
            "start": 253,
            "end": 317
          }
        ],
        "optional": false,
        "start": 241,
        "end": 318
      },
      "directive": null,
      "start": 241,
      "end": 319
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "part",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 333
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 346
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 359
                  },
                  "optional": false,
                  "computed": false,
                  "start": 342,
                  "end": 359
                },
                "typeArguments": null,
                "arguments": [],
                "start": 338,
                "end": 361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 375
              },
              "optional": false,
              "computed": false,
              "start": 338,
              "end": 375
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 338,
            "end": 377
          },
          "definite": false,
          "start": 327,
          "end": 377
        }
      ],
      "declare": false,
      "start": 321,
      "end": 378
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
            "start": 379,
            "end": 386
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 390
          },
          "optional": false,
          "computed": false,
          "start": 379,
          "end": 390
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "part",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 395
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 400
            },
            "optional": false,
            "computed": false,
            "start": 391,
            "end": 400
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "part",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 406
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 407,
              "end": 412
            },
            "optional": false,
            "computed": false,
            "start": 402,
            "end": 412
          }
        ],
        "optional": false,
        "start": 379,
        "end": 413
      },
      "directive": null,
      "start": 379,
      "end": 414
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 135,
  "end": 414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 135,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "locales",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "'ban'",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "'id-u-co-pinyin'",
    "start": 159,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "'de-ID'",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 187,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 193,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "localeMatcher",
    "start": 205,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "String",
    "value": "'lookup'",
    "start": 220,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 231,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 249,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "PluralRules",
    "start": 258,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "supportedLocalesOf",
    "start": 270,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "locales",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "String",
    "value": "', '",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "NumberFormat",
    "start": 347,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "formatToParts",
    "start": 362,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 379,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 387,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 391,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 396,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "part",
    "start": 402,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 407,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  }
]
```
