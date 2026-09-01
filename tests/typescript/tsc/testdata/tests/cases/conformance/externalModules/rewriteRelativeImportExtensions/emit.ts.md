__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "module",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 33,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "start": 25,
          "end": 39
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 42,
          "end": 45
        },
        "start": 40,
        "end": 45
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 33,
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
    "value": "any",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 11,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../foo.mts",
        "raw": "\"../foo.mts\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\"",
        "start": 82,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\"",
        "start": 114,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 126
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 148,
          "end": 158
        },
        "start": 140,
        "end": 159
      },
      "importKind": "value",
      "start": 127,
      "end": 160
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 168,
        "end": 178
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 161,
      "end": 179
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 194,
        "end": 204
      },
      "attributes": [],
      "exportKind": "value",
      "start": 180,
      "end": 205
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 220,
          "end": 230
        },
        "options": null,
        "phase": null,
        "start": 213,
        "end": 231
      },
      "directive": null,
      "start": 213,
      "end": 232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 240,
              "end": 250
            },
            "options": null,
            "phase": null,
            "start": 233,
            "end": 251
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 252,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 233,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 263,
              "end": 265
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 265
          }
        ],
        "optional": false,
        "start": 233,
        "end": 266
      },
      "directive": null,
      "start": 233,
      "end": 267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 286
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 292,
              "end": 295
            },
            "start": 290,
            "end": 295
          },
          "start": 287,
          "end": 295
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 297,
        "end": 299
      },
      "expression": false,
      "start": 268,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "acceptAny",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 309
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./foo.ts",
              "raw": "\"./foo.ts\"",
              "start": 317,
              "end": 327
            },
            "options": null,
            "phase": null,
            "start": 310,
            "end": 328
          }
        ],
        "optional": false,
        "start": 300,
        "end": 329
      },
      "directive": null,
      "start": 300,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 338,
          "end": 348
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 356
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 364
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 366,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 360,
                    "end": 373
                  }
                ],
                "start": 358,
                "end": 375
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 352,
              "end": 375
            }
          ],
          "start": 350,
          "end": 377
        },
        "phase": null,
        "start": 331,
        "end": 378
      },
      "directive": null,
      "start": 331,
      "end": 379
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 387,
            "end": 389
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 392,
            "end": 402
          },
          "start": 387,
          "end": 402
        },
        "options": null,
        "phase": null,
        "start": 380,
        "end": 403
      },
      "directive": null,
      "start": 380,
      "end": 404
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 404
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 26,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"../foo.mts\"",
    "start": 53,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"../../foo.cts\"",
    "start": 82,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 109,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"./foo.tsx\"",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 127,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 148,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 161,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 168,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 189,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 194,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 220,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 240,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 260,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 268,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "acceptAny",
    "start": 277,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 287,
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
    "value": "any",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "acceptAny",
    "start": 300,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 317,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 338,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 352,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "attr",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 366,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 392,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 26,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 11,
      "end": 37
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../foo.mts",
        "raw": "\"../foo.mts\"",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "../../foo.cts",
        "raw": "\"../../foo.cts\"",
        "start": 82,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.tsx",
        "raw": "\"./foo.tsx\"",
        "start": 114,
        "end": 125
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 126
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 134,
        "end": 144
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 127,
      "end": 145
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./foo.ts",
        "raw": "\"./foo.ts\"",
        "start": 160,
        "end": 170
      },
      "attributes": [],
      "exportKind": "value",
      "start": 146,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 187,
          "end": 197
        },
        "options": null,
        "phase": null,
        "start": 180,
        "end": 198
      },
      "directive": null,
      "start": 180,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 207,
          "end": 217
        },
        "options": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "with",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 225
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 233
                    },
                    "value": {
                      "type": "Literal",
                      "value": "value",
                      "raw": "\"value\"",
                      "start": 235,
                      "end": 242
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 229,
                    "end": 242
                  }
                ],
                "start": 227,
                "end": 244
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 221,
              "end": 244
            }
          ],
          "start": 219,
          "end": 246
        },
        "phase": null,
        "start": 200,
        "end": 247
      },
      "directive": null,
      "start": 200,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 257,
            "end": 267
          }
        ],
        "optional": false,
        "start": 249,
        "end": 268
      },
      "directive": null,
      "start": 249,
      "end": 269
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./foo.ts",
                "raw": "\"./foo.ts\"",
                "start": 282,
                "end": 292
              }
            ],
            "optional": false,
            "start": 274,
            "end": 293
          },
          "directive": null,
          "start": 274,
          "end": 294
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 304
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getPath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 312
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 305,
                "end": 314
              }
            ],
            "optional": false,
            "start": 297,
            "end": 315
          },
          "directive": null,
          "start": 297,
          "end": 316
        }
      ],
      "start": 270,
      "end": 318
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 341
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 21,
    "end": 25
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 26,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"../foo.mts\"",
    "start": 53,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 77,
    "end": 81
  },
  {
    "type": "String",
    "value": "\"../../foo.cts\"",
    "start": 82,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 109,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"./foo.tsx\"",
    "start": 114,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 127,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 134,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 155,
    "end": 159
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 160,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 187,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 207,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 257,
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
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 282,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "getPath",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
    "end": 318
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.ts/foo.js",
        "raw": "\"./foo.ts/foo.js\"",
        "start": 15,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "foo.ts",
        "raw": "\"foo.ts\"",
        "start": 49,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 58
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "pkg/foo.ts",
        "raw": "\"pkg/foo.ts\"",
        "start": 74,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 87
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": ".foo.ts",
        "raw": "\".foo.ts\"",
        "start": 103,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 88,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.ts",
        "raw": "\"./foo.d.ts\"",
        "start": 129,
        "end": 141
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 142
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.mts",
        "raw": "\"./foo.d.mts\"",
        "start": 158,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 143,
      "end": 172
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./foo.d.css.ts",
        "raw": "\"./foo.d.css.ts\"",
        "start": 188,
        "end": 204
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 173,
      "end": 205
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "#internal/foo.ts",
        "raw": "\"#internal/foo.ts\"",
        "start": 221,
        "end": 239
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 240
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "node:foo.ts",
        "raw": "\"node:foo.ts\"",
        "start": 256,
        "end": 269
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 241,
      "end": 270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "./foo.ts",
            "raw": "\"./foo.ts\"",
            "start": 281,
            "end": 291
          }
        ],
        "optional": false,
        "start": 271,
        "end": 292
      },
      "directive": null,
      "start": 271,
      "end": 293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "node:path",
          "raw": "\"node:path\"",
          "start": 301,
          "end": 312
        },
        "options": null,
        "phase": null,
        "start": 294,
        "end": 313
      },
      "directive": null,
      "start": 294,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 315,
          "end": 322
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "node:path",
            "raw": "\"node:path\"",
            "start": 323,
            "end": 334
          }
        ],
        "optional": false,
        "start": 315,
        "end": 335
      },
      "directive": null,
      "start": 315,
      "end": 336
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 337
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 10,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"./foo.ts/foo.js\"",
    "start": 15,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 44,
    "end": 48
  },
  {
    "type": "String",
    "value": "\"foo.ts\"",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 69,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"pkg/foo.ts\"",
    "start": 74,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 98,
    "end": 102
  },
  {
    "type": "String",
    "value": "\".foo.ts\"",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 124,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"./foo.d.ts\"",
    "start": 129,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 153,
    "end": 157
  },
  {
    "type": "String",
    "value": "\"./foo.d.mts\"",
    "start": 158,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 183,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"./foo.d.css.ts\"",
    "start": 188,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 216,
    "end": 220
  },
  {
    "type": "String",
    "value": "\"#internal/foo.ts\"",
    "start": 221,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 251,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"node:foo.ts\"",
    "start": 256,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 272,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "String",
    "value": "\"./foo.ts\"",
    "start": 281,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "String",
    "value": "\"node:path\"",
    "start": 301,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 315,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "String",
    "value": "\"node:path\"",
    "start": 323,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "script",
  "hashbang": null,
  "start": 135,
  "end": 135
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```
