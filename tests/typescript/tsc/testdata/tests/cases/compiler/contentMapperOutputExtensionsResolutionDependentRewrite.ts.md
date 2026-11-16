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
              "name": "declaration",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 26,
                  "end": 32
                },
                "start": 24,
                "end": 32
              },
              "start": 13,
              "end": 32
            },
            "init": null,
            "definite": false,
            "start": 13,
            "end": 32
          }
        ],
        "declare": false,
        "start": 7,
        "end": 33
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
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
    "value": "declaration",
    "start": 13,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
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
            "name": "make",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "make",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./root.toml",
        "raw": "\"./root.toml\"",
        "start": 21,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 58
          },
          "importKind": "value",
          "start": 50,
          "end": 58
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./root.toml",
        "raw": "\"./root.toml\"",
        "start": 66,
        "end": 79
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 36,
      "end": 80
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
            "name": "suffixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 98
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "suffixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 98
          },
          "exportKind": "value",
          "start": 90,
          "end": 98
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./suffixed.toml",
        "raw": "\"./suffixed.toml\"",
        "start": 106,
        "end": 123
      },
      "exportKind": "value",
      "attributes": [],
      "start": 81,
      "end": 124
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
            "name": "allowed",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 141
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "allowed",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 141
          },
          "exportKind": "value",
          "start": 134,
          "end": 141
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./allowed/blob.toml",
        "raw": "\"./allowed/blob.toml\"",
        "start": 149,
        "end": 170
      },
      "exportKind": "value",
      "attributes": [],
      "start": 125,
      "end": 171
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
            "name": "second",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 187
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "second",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 187
          },
          "exportKind": "value",
          "start": 181,
          "end": 187
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./second/blob.part.toml",
        "raw": "\"./second/blob.part.toml\"",
        "start": 195,
        "end": 220
      },
      "exportKind": "value",
      "attributes": [],
      "start": 172,
      "end": 221
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
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 239
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 239
          },
          "exportKind": "value",
          "start": 231,
          "end": 239
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./blob.identity",
        "raw": "\"./blob.identity\"",
        "start": 247,
        "end": 264
      },
      "exportKind": "value",
      "attributes": [],
      "start": 222,
      "end": 265
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
            "name": "declaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 286
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "declaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 286
          },
          "exportKind": "value",
          "start": 275,
          "end": 286
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./declaration.toml",
        "raw": "\"./declaration.toml\"",
        "start": 294,
        "end": 314
      },
      "exportKind": "value",
      "attributes": [],
      "start": 266,
      "end": 315
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
            "name": "TypeOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 338
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ExportedType",
            "optional": false,
            "typeAnnotation": null,
            "start": 342,
            "end": 354
          },
          "exportKind": "value",
          "start": 330,
          "end": 354
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./root.toml",
        "raw": "\"./root.toml\"",
        "start": 362,
        "end": 375
      },
      "exportKind": "type",
      "attributes": [],
      "start": 316,
      "end": 376
    },
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
              "name": "root",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 394
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "make",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 401
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 397,
              "end": 403
            },
            "definite": false,
            "start": 390,
            "end": 403
          }
        ],
        "declare": false,
        "start": 384,
        "end": 404
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 377,
      "end": 404
    },
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
              "name": "load",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 422
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "ImportExpression",
                "source": {
                  "type": "Literal",
                  "value": "./root.toml",
                  "raw": "\"./root.toml\"",
                  "start": 438,
                  "end": 451
                },
                "options": null,
                "phase": null,
                "start": 431,
                "end": 452
              },
              "id": null,
              "generator": false,
              "start": 425,
              "end": 452
            },
            "definite": false,
            "start": 418,
            "end": 452
          }
        ],
        "declare": false,
        "start": 412,
        "end": 453
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 405,
      "end": 453
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RootType",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 474
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./root.toml",
            "raw": "\"./root.toml\"",
            "start": 484,
            "end": 497
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "Root",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 503
          },
          "typeArguments": null,
          "start": 477,
          "end": 503
        },
        "declare": false,
        "start": 461,
        "end": 504
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 454,
      "end": 504
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DirectType",
          "optional": false,
          "typeAnnotation": null,
          "start": 517,
          "end": 527
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeOnly",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 538
          },
          "typeArguments": null,
          "start": 530,
          "end": 538
        },
        "declare": false,
        "start": 512,
        "end": 539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 505,
      "end": 539
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
    "value": "make",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"./root.toml\"",
    "start": 21,
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
    "type": "Identifier",
    "value": "TypeOnly",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 61,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"./root.toml\"",
    "start": 66,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "suffixed",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 101,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"./suffixed.toml\"",
    "start": 106,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Identifier",
    "value": "allowed",
    "start": 134,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 144,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"./allowed/blob.toml\"",
    "start": 149,
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
    "value": "export",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 190,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"./second/blob.part.toml\"",
    "start": 195,
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
    "value": "export",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 231,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 242,
    "end": 246
  },
  {
    "type": "String",
    "value": "\"./blob.identity\"",
    "start": 247,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "declaration",
    "start": 275,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 289,
    "end": 293
  },
  {
    "type": "String",
    "value": "\"./declaration.toml\"",
    "start": 294,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 316,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 323,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "TypeOnly",
    "start": 330,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 339,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "ExportedType",
    "start": 342,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 357,
    "end": 361
  },
  {
    "type": "String",
    "value": "\"./root.toml\"",
    "start": 362,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 377,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 384,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "make",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
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
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 405,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 412,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "load",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
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
    "value": "=>",
    "start": 428,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "String",
    "value": "\"./root.toml\"",
    "start": 438,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 454,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 461,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "RootType",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "String",
    "value": "\"./root.toml\"",
    "start": 484,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Root",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 505,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 512,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "DirectType",
    "start": 517,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "TypeOnly",
    "start": 530,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  }
]
```
