__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "platform",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 21
            },
            "init": {
              "type": "Literal",
              "value": "default",
              "raw": "\"default\"",
              "start": 24,
              "end": 33
            },
            "definite": false,
            "start": 13,
            "end": 33
          }
        ],
        "declare": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "platform",
    "start": 13,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "platform",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 21
            },
            "init": {
              "type": "Literal",
              "value": "web",
              "raw": "\"web\"",
              "start": 24,
              "end": 29
            },
            "definite": false,
            "start": 13,
            "end": 29
          }
        ],
        "declare": false,
        "start": 7,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 31
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
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "platform",
    "start": 13,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"web\"",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "platform",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "platform",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./card.box",
        "raw": "\"./card.box\"",
        "start": 25,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "platform",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "longPlatform",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 72
          },
          "importKind": "value",
          "start": 48,
          "end": 72
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./card.long.box",
        "raw": "\"./card.long.box\"",
        "start": 80,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "platform",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 116
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fallbackPlatform",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 136
          },
          "importKind": "value",
          "start": 108,
          "end": 136
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./fallback.box",
        "raw": "\"./fallback.box\"",
        "start": 144,
        "end": 160
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 161
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "platform",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 179
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "standardPlatform",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 199
          },
          "importKind": "value",
          "start": 171,
          "end": 199
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./target.ts",
        "raw": "\"./target.ts\"",
        "start": 207,
        "end": 220
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 162,
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
            "name": "check",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "web",
                  "raw": "\"web\"",
                  "start": 236,
                  "end": 241
                },
                "start": 236,
                "end": 241
              },
              "start": 234,
              "end": 241
            },
            "start": 229,
            "end": 241
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "platform",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 252
          },
          "definite": false,
          "start": 229,
          "end": 252
        }
      ],
      "declare": false,
      "start": 223,
      "end": 253
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
            "name": "longCheck",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "web",
                  "raw": "\"web\"",
                  "start": 271,
                  "end": 276
                },
                "start": 271,
                "end": 276
              },
              "start": 269,
              "end": 276
            },
            "start": 260,
            "end": 276
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "longPlatform",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 291
          },
          "definite": false,
          "start": 260,
          "end": 291
        }
      ],
      "declare": false,
      "start": 254,
      "end": 292
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
            "name": "fallbackCheck",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "default",
                  "raw": "\"default\"",
                  "start": 314,
                  "end": 323
                },
                "start": 314,
                "end": 323
              },
              "start": 312,
              "end": 323
            },
            "start": 299,
            "end": 323
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fallbackPlatform",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 342
          },
          "definite": false,
          "start": 299,
          "end": 342
        }
      ],
      "declare": false,
      "start": 293,
      "end": 343
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
            "name": "standardCheck",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "web",
                  "raw": "\"web\"",
                  "start": 365,
                  "end": 370
                },
                "start": 365,
                "end": 370
              },
              "start": 363,
              "end": 370
            },
            "start": 350,
            "end": 370
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "standardPlatform",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 389
          },
          "definite": false,
          "start": 350,
          "end": 389
        }
      ],
      "declare": false,
      "start": 344,
      "end": 390
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "platform",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 409
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "extensionlessPlatform",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 434
          },
          "exportKind": "value",
          "start": 401,
          "end": 434
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./card",
        "raw": "\"./card\"",
        "start": 442,
        "end": 450
      },
      "exportKind": "value",
      "attributes": [],
      "start": 392,
      "end": 451
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 451
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
    "type": "Identifier",
    "value": "platform",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "\"./card.box\"",
    "start": 25,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "platform",
    "start": 48,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 57,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "longPlatform",
    "start": 60,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"./card.long.box\"",
    "start": 80,
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
    "type": "Identifier",
    "value": "platform",
    "start": 108,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 117,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "fallbackPlatform",
    "start": 120,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 139,
    "end": 143
  },
  {
    "type": "String",
    "value": "\"./fallback.box\"",
    "start": 144,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "platform",
    "start": 171,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 180,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "standardPlatform",
    "start": 183,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 202,
    "end": 206
  },
  {
    "type": "String",
    "value": "\"./target.ts\"",
    "start": 207,
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
    "value": "check",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "String",
    "value": "\"web\"",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "platform",
    "start": 244,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 254,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "longCheck",
    "start": 260,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"web\"",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "longPlatform",
    "start": 279,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 293,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "fallbackCheck",
    "start": 299,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "String",
    "value": "\"default\"",
    "start": 314,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "fallbackPlatform",
    "start": 326,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 344,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "standardCheck",
    "start": 350,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "String",
    "value": "\"web\"",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "standardPlatform",
    "start": 373,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "platform",
    "start": 401,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 410,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "extensionlessPlatform",
    "start": 413,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 437,
    "end": 441
  },
  {
    "type": "String",
    "value": "\"./card\"",
    "start": 442,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  }
]
```
