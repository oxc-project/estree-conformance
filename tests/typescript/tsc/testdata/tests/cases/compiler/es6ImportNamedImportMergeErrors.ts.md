__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "definite": false,
            "start": 30,
            "end": 35
          }
        ],
        "declare": false,
        "start": 26,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "definite": false,
            "start": 48,
            "end": 53
          }
        ],
        "declare": false,
        "start": 44,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 68
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 72
            },
            "definite": false,
            "start": 66,
            "end": 72
          }
        ],
        "declare": false,
        "start": 62,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 55,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 66,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 18,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 56
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 68
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 69,
        "end": 72
      },
      "declare": false,
      "start": 57,
      "end": 72
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "importKind": "value",
          "start": 103,
          "end": 110
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 118,
        "end": 155
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 94,
      "end": 156
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x1",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 169
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 170,
        "end": 173
      },
      "declare": false,
      "start": 157,
      "end": 173
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 205
          },
          "importKind": "value",
          "start": 204,
          "end": 205
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 213,
        "end": 250
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 195,
      "end": 251
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 276
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 279,
            "end": 281
          },
          "definite": false,
          "start": 275,
          "end": 281
        }
      ],
      "declare": false,
      "start": 271,
      "end": 282
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x44",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "importKind": "value",
          "start": 293,
          "end": 301
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 309,
        "end": 346
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 284,
      "end": 347
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x44",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 374
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 377,
            "end": 379
          },
          "definite": false,
          "start": 371,
          "end": 379
        }
      ],
      "declare": false,
      "start": 367,
      "end": 380
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "importKind": "value",
          "start": 391,
          "end": 392
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 400,
        "end": 437
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 382,
      "end": 438
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 469
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 474
          },
          "importKind": "value",
          "start": 467,
          "end": 474
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNamedImportMergeErrors_0",
        "raw": "\"./es6ImportNamedImportMergeErrors_0\"",
        "start": 482,
        "end": 519
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 458,
      "end": 520
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 539
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
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"./es6ImportNamedImportMergeErrors_0\"",
    "start": 18,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 113,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"./es6ImportNamedImportMergeErrors_0\"",
    "start": 118,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 157,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 208,
    "end": 212
  },
  {
    "type": "String",
    "value": "\"./es6ImportNamedImportMergeErrors_0\"",
    "start": 213,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 279,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 295,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "x44",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 304,
    "end": 308
  },
  {
    "type": "String",
    "value": "\"./es6ImportNamedImportMergeErrors_0\"",
    "start": 309,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "x44",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 395,
    "end": 399
  },
  {
    "type": "String",
    "value": "\"./es6ImportNamedImportMergeErrors_0\"",
    "start": 400,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 467,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 470,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 477,
    "end": 481
  },
  {
    "type": "String",
    "value": "\"./es6ImportNamedImportMergeErrors_0\"",
    "start": 482,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 519,
    "end": 520
  }
]
```
