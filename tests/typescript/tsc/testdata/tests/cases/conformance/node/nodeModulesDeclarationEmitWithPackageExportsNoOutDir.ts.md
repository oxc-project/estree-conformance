__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 40,
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
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 76,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 100,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 108,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 141,
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
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 203,
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
    "value": "\"inner/cjs\"",
    "start": 213,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 238,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 243,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 270,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 279,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 284,
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
    "value": "export",
    "start": 293,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 310,
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
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 40,
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
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 76,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 100,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 108,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 141,
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
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 203,
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
    "value": "\"inner/cjs\"",
    "start": 213,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 238,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 243,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 270,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 279,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 284,
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
    "value": "export",
    "start": 293,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 310,
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
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/cjs",
        "raw": "\"package/cjs\"",
        "start": 40,
        "end": 53
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 70
          },
          "start": 62,
          "end": 70
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package/mjs",
        "raw": "\"package/mjs\"",
        "start": 76,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 55,
      "end": 90
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 107
          },
          "start": 98,
          "end": 107
        }
      ],
      "source": {
        "type": "Literal",
        "value": "package",
        "raw": "\"package\"",
        "start": 113,
        "end": 122
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 91,
      "end": 123
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 138
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 144
            },
            "definite": false,
            "start": 137,
            "end": 144
          }
        ],
        "declare": false,
        "start": 131,
        "end": 145
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 145
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjs",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
            },
            "definite": false,
            "start": 159,
            "end": 166
          }
        ],
        "declare": false,
        "start": 153,
        "end": 167
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 167
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 189
            },
            "definite": false,
            "start": 181,
            "end": 189
          }
        ],
        "declare": false,
        "start": 175,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 190
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "start": 198,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 213,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 191,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjsi",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 242
          },
          "start": 233,
          "end": 242
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 248,
        "end": 259
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 260
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 278
          },
          "start": 268,
          "end": 278
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 284,
        "end": 291
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 261,
      "end": 292
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "cjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 314
            },
            "definite": false,
            "start": 306,
            "end": 314
          }
        ],
        "declare": false,
        "start": 300,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 293,
      "end": 315
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "mjsi",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 337
            },
            "definite": false,
            "start": 329,
            "end": 337
          }
        ],
        "declare": false,
        "start": 323,
        "end": 338
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 316,
      "end": 338
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "typei",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 361
            },
            "definite": false,
            "start": 352,
            "end": 361
          }
        ],
        "declare": false,
        "start": 346,
        "end": 362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 339,
      "end": 362
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 362
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"package/cjs\"",
    "start": 40,
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
    "value": "import",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 71,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"package/mjs\"",
    "start": 76,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 100,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 108,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"package\"",
    "start": 113,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 141,
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
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 203,
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
    "value": "\"inner/cjs\"",
    "start": 213,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 238,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 243,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 270,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 279,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 284,
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
    "value": "export",
    "start": 293,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 310,
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
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 333,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 339,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 356,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
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
              "name": "t",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "cjs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 138
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cjs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 147,
                            "end": 150
                          },
                          "typeArguments": null,
                          "start": 140,
                          "end": 150
                        },
                        "start": 138,
                        "end": 150
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 135,
                      "end": 151
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mjs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 155
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mjs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 167
                          },
                          "typeArguments": null,
                          "start": 157,
                          "end": 167
                        },
                        "start": 155,
                        "end": 167
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 152,
                      "end": 168
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 173
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 175,
                          "end": 186
                        },
                        "start": 173,
                        "end": 186
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 169,
                      "end": 186
                    }
                  ],
                  "start": 134,
                  "end": 187
                },
                "start": 132,
                "end": 187
              },
              "start": 131,
              "end": 187
            },
            "init": null,
            "definite": false,
            "start": 131,
            "end": 187
          }
        ],
        "declare": false,
        "start": 125,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 188
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
              "name": "cjsMain",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 209
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 212,
              "end": 216
            },
            "definite": false,
            "start": 202,
            "end": 216
          }
        ],
        "declare": false,
        "start": 196,
        "end": 217
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 189,
      "end": 217
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 217
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 40,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 65,
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
    "value": "\"inner/mjs\"",
    "start": 74,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 175,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 189,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "cjsMain",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 212,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
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
              "name": "t",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "cjs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 138
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cjs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 147,
                            "end": 150
                          },
                          "typeArguments": null,
                          "start": 140,
                          "end": 150
                        },
                        "start": 138,
                        "end": 150
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 135,
                      "end": 151
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mjs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 155
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mjs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 167
                          },
                          "typeArguments": null,
                          "start": 157,
                          "end": 167
                        },
                        "start": 155,
                        "end": 167
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 152,
                      "end": 168
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 173
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 175,
                          "end": 186
                        },
                        "start": 173,
                        "end": 186
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 169,
                      "end": 186
                    }
                  ],
                  "start": 134,
                  "end": 187
                },
                "start": 132,
                "end": 187
              },
              "start": 131,
              "end": 187
            },
            "init": null,
            "definite": false,
            "start": 131,
            "end": 187
          }
        ],
        "declare": false,
        "start": 125,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 188
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
              "name": "esm",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 205
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 208,
              "end": 212
            },
            "definite": false,
            "start": 202,
            "end": 212
          }
        ],
        "declare": false,
        "start": 196,
        "end": 213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 189,
      "end": 213
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 213
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 40,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 65,
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
    "value": "\"inner/mjs\"",
    "start": 74,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 175,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 189,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "esm",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 208,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "start": 26,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 52
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "start": 60,
          "end": 68
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 74,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 53,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 103
          },
          "start": 94,
          "end": 103
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 109,
        "end": 116
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 117
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
              "name": "t",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
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
                        "name": "cjs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 138
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cjs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 147,
                            "end": 150
                          },
                          "typeArguments": null,
                          "start": 140,
                          "end": 150
                        },
                        "start": 138,
                        "end": 150
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 135,
                      "end": 151
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mjs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 152,
                        "end": 155
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mjs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 167
                          },
                          "typeArguments": null,
                          "start": 157,
                          "end": 167
                        },
                        "start": 155,
                        "end": 167
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 152,
                      "end": 168
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 173
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 175,
                          "end": 186
                        },
                        "start": 173,
                        "end": 186
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 169,
                      "end": 186
                    }
                  ],
                  "start": 134,
                  "end": 187
                },
                "start": 132,
                "end": 187
              },
              "start": 131,
              "end": 187
            },
            "init": null,
            "definite": false,
            "start": 131,
            "end": 187
          }
        ],
        "declare": false,
        "start": 125,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 188
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
              "name": "cjsNonmain",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 212
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 215,
              "end": 219
            },
            "definite": false,
            "start": 202,
            "end": 219
          }
        ],
        "declare": false,
        "start": 196,
        "end": 220
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 189,
      "end": 220
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 220
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 28,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 40,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 62,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 65,
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
    "value": "\"inner/mjs\"",
    "start": 74,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 96,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 104,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 157,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 175,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 182,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 189,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "cjsNonmain",
    "start": 202,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  }
]
```
