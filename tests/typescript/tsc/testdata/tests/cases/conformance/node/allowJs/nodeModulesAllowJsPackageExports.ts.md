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
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 127
      },
      "directive": null,
      "start": 124,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 132
      },
      "directive": null,
      "start": 129,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
      },
      "directive": null,
      "start": 134,
      "end": 139
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
            "start": 152,
            "end": 156
          },
          "start": 147,
          "end": 156
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 162,
        "end": 173
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 174
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
            "start": 187,
            "end": 191
          },
          "start": 182,
          "end": 191
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 197,
        "end": 208
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 175,
      "end": 209
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
            "start": 222,
            "end": 227
          },
          "start": 217,
          "end": 227
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 233,
        "end": 240
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 210,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 246
      },
      "directive": null,
      "start": 242,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 252
      },
      "directive": null,
      "start": 248,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 259
      },
      "directive": null,
      "start": 254,
      "end": 260
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 260
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
    "type": "Identifier",
    "value": "cjs",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 152,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 157,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 162,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 184,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 187,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 192,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 197,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 219,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 228,
    "end": 232
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 127
      },
      "directive": null,
      "start": 124,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 132
      },
      "directive": null,
      "start": 129,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
      },
      "directive": null,
      "start": 134,
      "end": 139
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
            "start": 152,
            "end": 156
          },
          "start": 147,
          "end": 156
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 162,
        "end": 173
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 174
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
            "start": 187,
            "end": 191
          },
          "start": 182,
          "end": 191
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 197,
        "end": 208
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 175,
      "end": 209
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
            "start": 222,
            "end": 227
          },
          "start": 217,
          "end": 227
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 233,
        "end": 240
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 210,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 246
      },
      "directive": null,
      "start": 242,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 252
      },
      "directive": null,
      "start": 248,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 259
      },
      "directive": null,
      "start": 254,
      "end": 260
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 260
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
    "type": "Identifier",
    "value": "cjs",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 152,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 157,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 162,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 184,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 187,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 192,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 197,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 219,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 228,
    "end": 232
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 127
      },
      "directive": null,
      "start": 124,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 132
      },
      "directive": null,
      "start": 129,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 138
      },
      "directive": null,
      "start": 134,
      "end": 139
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
            "start": 152,
            "end": 156
          },
          "start": 147,
          "end": 156
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/cjs",
        "raw": "\"inner/cjs\"",
        "start": 162,
        "end": 173
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 174
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
            "start": 187,
            "end": 191
          },
          "start": 182,
          "end": 191
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/mjs",
        "raw": "\"inner/mjs\"",
        "start": 197,
        "end": 208
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 175,
      "end": 209
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
            "start": 222,
            "end": 227
          },
          "start": 217,
          "end": 227
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 233,
        "end": 240
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 210,
      "end": 241
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 246
      },
      "directive": null,
      "start": 242,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjsi",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 252
      },
      "directive": null,
      "start": 248,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "typei",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 259
      },
      "directive": null,
      "start": 254,
      "end": 260
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 260
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
    "type": "Identifier",
    "value": "cjs",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 149,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 152,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 157,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"inner/cjs\"",
    "start": 162,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 184,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 187,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 192,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"inner/mjs\"",
    "start": 197,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 219,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 228,
    "end": 232
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
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
              "name": "implicitCjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 49
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 52,
              "end": 56
            },
            "definite": false,
            "start": 32,
            "end": 56
          }
        ],
        "declare": false,
        "start": 26,
        "end": 57
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 57
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "implicitCjsSource",
    "start": 32,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exportKind": "value",
          "start": 127,
          "end": 130
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 133
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
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "exportKind": "value",
          "start": 143,
          "end": 146
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 149
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "exportKind": "value",
          "start": 159,
          "end": 163
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 166
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
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
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
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
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
              "name": "mjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 44,
              "end": 48
            },
            "definite": false,
            "start": 32,
            "end": 48
          }
        ],
        "declare": false,
        "start": 26,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exportKind": "value",
          "start": 127,
          "end": 130
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 133
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
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "exportKind": "value",
          "start": 143,
          "end": 146
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 149
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "exportKind": "value",
          "start": 159,
          "end": 163
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 166
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
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
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
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
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
              "name": "cjsSource",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 41
            },
            "init": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 44,
              "end": 48
            },
            "definite": false,
            "start": 32,
            "end": 48
          }
        ],
        "declare": false,
        "start": 26,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "cjsSource",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 130
          },
          "exportKind": "value",
          "start": 127,
          "end": 130
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 118,
      "end": 133
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
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          "exportKind": "value",
          "start": 143,
          "end": 146
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 149
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
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "exportKind": "value",
          "start": 159,
          "end": 163
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 166
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
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
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
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  }
]
```
