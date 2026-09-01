__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 11
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
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
        "value": "./module.mts",
        "raw": "\"./module.mts\"",
        "start": 20,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 35
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./module.mts",
        "raw": "\"./module.mts\"",
        "start": 56,
        "end": 70
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 78,
            "end": 95
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 97,
            "end": 105
          },
          "start": 78,
          "end": 105
        }
      ],
      "importKind": "type",
      "start": 36,
      "end": 108
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./module.mts",
        "raw": "\"./module.mts\"",
        "start": 129,
        "end": 143
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 151,
            "end": 168
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 170,
            "end": 179
          },
          "start": 151,
          "end": 179
        }
      ],
      "importKind": "type",
      "start": 109,
      "end": 182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 190
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./module.mts",
            "raw": "\"./module.mts\"",
            "start": 207,
            "end": 221
          },
          "options": null,
          "qualifier": null,
          "typeArguments": null,
          "start": 200,
          "end": 222
        },
        "typeArguments": null,
        "start": 193,
        "end": 222
      },
      "declare": false,
      "start": 183,
      "end": 223
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 231
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./module.mts",
            "raw": "\"./module.mts\"",
            "start": 248,
            "end": 262
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
                  "start": 266,
                  "end": 270
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 274,
                        "end": 291
                      },
                      "value": {
                        "type": "Literal",
                        "value": "import",
                        "raw": "\"import\"",
                        "start": 293,
                        "end": 301
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 274,
                      "end": 301
                    }
                  ],
                  "start": 272,
                  "end": 303
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 266,
                "end": 303
              }
            ],
            "start": 264,
            "end": 305
          },
          "qualifier": null,
          "typeArguments": null,
          "start": 241,
          "end": 306
        },
        "typeArguments": null,
        "start": 234,
        "end": 306
      },
      "declare": false,
      "start": 224,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_3",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 315
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./module.mts",
            "raw": "\"./module.mts\"",
            "start": 332,
            "end": 346
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
                  "start": 350,
                  "end": 354
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 358,
                        "end": 375
                      },
                      "value": {
                        "type": "Literal",
                        "value": "require",
                        "raw": "\"require\"",
                        "start": 377,
                        "end": 386
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 358,
                      "end": 386
                    }
                  ],
                  "start": 356,
                  "end": 388
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 350,
                "end": 388
              }
            ],
            "start": 348,
            "end": 390
          },
          "qualifier": null,
          "typeArguments": null,
          "start": 325,
          "end": 391
        },
        "typeArguments": null,
        "start": 318,
        "end": 391
      },
      "declare": false,
      "start": 308,
      "end": 392
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 392
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
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 15,
    "end": 19
  },
  {
    "type": "String",
    "value": "\"./module.mts\"",
    "start": 20,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 36,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 51,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"./module.mts\"",
    "start": 56,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 78,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 109,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 116,
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
    "value": "\"./module.mts\"",
    "start": 129,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 144,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 151,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 170,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 183,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "_1",
    "start": 188,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 193,
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
    "value": "\"./module.mts\"",
    "start": 207,
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
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 224,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "_2",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 234,
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
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "String",
    "value": "\"./module.mts\"",
    "start": 248,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 266,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 274,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 293,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
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
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 308,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "_3",
    "start": 313,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 318,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"./module.mts\"",
    "start": 332,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 356,
    "end": 357
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 358,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 377,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  }
]
```
