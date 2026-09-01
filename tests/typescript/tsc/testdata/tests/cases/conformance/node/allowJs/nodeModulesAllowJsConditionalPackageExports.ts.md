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
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 162,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 172
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
            "start": 185,
            "end": 189
          },
          "start": 180,
          "end": 189
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 195,
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "start": 213,
          "end": 223
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 229,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 258,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 277
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 287
        },
        "optional": false,
        "computed": false,
        "start": 273,
        "end": 287
      },
      "directive": null,
      "start": 273,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 293
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "optional": false,
        "computed": false,
        "start": 289,
        "end": 303
      },
      "directive": null,
      "start": 289,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "typei",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 320
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 320
      },
      "directive": null,
      "start": 305,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ts",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 334
        },
        "optional": false,
        "computed": false,
        "start": 322,
        "end": 334
      },
      "directive": null,
      "start": 322,
      "end": 335
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 335
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
    "value": "\"inner/a\"",
    "start": 162,
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
    "value": "*",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 185,
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
    "value": "\"inner/b\"",
    "start": 195,
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
    "value": "*",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 218,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 224,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 247,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 250,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 253,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"inner/types\"",
    "start": 258,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 311,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
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
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 162,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 172
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
            "start": 185,
            "end": 189
          },
          "start": 180,
          "end": 189
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 195,
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "start": 213,
          "end": 223
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 229,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 258,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 277
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 287
        },
        "optional": false,
        "computed": false,
        "start": 273,
        "end": 287
      },
      "directive": null,
      "start": 273,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 293
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "optional": false,
        "computed": false,
        "start": 289,
        "end": 303
      },
      "directive": null,
      "start": 289,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "typei",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 320
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 320
      },
      "directive": null,
      "start": 305,
      "end": 321
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ts",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 334
        },
        "optional": false,
        "computed": false,
        "start": 322,
        "end": 334
      },
      "directive": null,
      "start": 322,
      "end": 335
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 335
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
    "value": "\"inner/a\"",
    "start": 162,
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
    "value": "*",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 185,
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
    "value": "\"inner/b\"",
    "start": 195,
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
    "value": "*",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 218,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 224,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 247,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 250,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 253,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"inner/types\"",
    "start": 258,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 311,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "mjsSource",
    "start": 325,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
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
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 162,
        "end": 171
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 140,
      "end": 172
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
            "start": 185,
            "end": 189
          },
          "start": 180,
          "end": 189
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 195,
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typei",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 223
          },
          "start": 213,
          "end": 223
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 229,
        "end": 236
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 206,
      "end": 237
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 252
          },
          "start": 245,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 258,
        "end": 271
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 238,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 277
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 287
        },
        "optional": false,
        "computed": false,
        "start": 273,
        "end": 287
      },
      "directive": null,
      "start": 273,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mjsi",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 293
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "optional": false,
        "computed": false,
        "start": 289,
        "end": 303
      },
      "directive": null,
      "start": 289,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "typei",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "implicitCjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 328
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 328
      },
      "directive": null,
      "start": 305,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ts",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 332
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cjsSource",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 342
        },
        "optional": false,
        "computed": false,
        "start": 330,
        "end": 342
      },
      "directive": null,
      "start": 330,
      "end": 343
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 343
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
    "value": "\"inner/a\"",
    "start": 162,
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
    "value": "*",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 182,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 185,
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
    "value": "\"inner/b\"",
    "start": 195,
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
    "value": "*",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 215,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 218,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 224,
    "end": 228
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 247,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 250,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 253,
    "end": 257
  },
  {
    "type": "String",
    "value": "\"inner/types\"",
    "start": 258,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "cjsi",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "cjsSource",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "mjsi",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "cjsSource",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "typei",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "implicitCjsSource",
    "start": 311,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "cjsSource",
    "start": 333,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
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
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 40,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
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
            "start": 63,
            "end": 66
          },
          "start": 58,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 72,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 82
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
            "start": 95,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 105,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "start": 121,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 134,
        "end": 147
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 148
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
            "start": 158,
            "end": 161
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exportKind": "value",
          "start": 158,
          "end": 161
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 164
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
            "start": 174,
            "end": 177
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exportKind": "value",
          "start": 174,
          "end": 177
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 180
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
            "start": 190,
            "end": 194
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exportKind": "value",
          "start": 190,
          "end": 194
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 197
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
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exportKind": "value",
          "start": 207,
          "end": 209
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 212
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
    "value": "\"inner/a\"",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 67,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"inner/b\"",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 95,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 100,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 105,
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
    "value": "*",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 129,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"inner/types\"",
    "start": 134,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 207,
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
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 40,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
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
            "start": 63,
            "end": 66
          },
          "start": 58,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 72,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 82
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
            "start": 95,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 105,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "start": 121,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 134,
        "end": 147
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 148
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
            "start": 158,
            "end": 161
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exportKind": "value",
          "start": 158,
          "end": 161
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 164
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
            "start": 174,
            "end": 177
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exportKind": "value",
          "start": 174,
          "end": 177
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 180
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
            "start": 190,
            "end": 194
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exportKind": "value",
          "start": 190,
          "end": 194
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 197
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
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exportKind": "value",
          "start": 207,
          "end": 209
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 212
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
    "value": "\"inner/a\"",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 67,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"inner/b\"",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 95,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 100,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 105,
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
    "value": "*",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 129,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"inner/types\"",
    "start": 134,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 207,
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
        "value": "inner/a",
        "raw": "\"inner/a\"",
        "start": 40,
        "end": 49
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 50
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
            "start": 63,
            "end": 66
          },
          "start": 58,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/b",
        "raw": "\"inner/b\"",
        "start": 72,
        "end": 81
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 51,
      "end": 82
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
            "start": 95,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner",
        "raw": "\"inner\"",
        "start": 105,
        "end": 112
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 83,
      "end": 113
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 128
          },
          "start": 121,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/types",
        "raw": "\"inner/types\"",
        "start": 134,
        "end": 147
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 114,
      "end": 148
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
            "start": 158,
            "end": 161
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "cjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 161
          },
          "exportKind": "value",
          "start": 158,
          "end": 161
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 149,
      "end": 164
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
            "start": 174,
            "end": 177
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "mjs",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 177
          },
          "exportKind": "value",
          "start": 174,
          "end": 177
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 180
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
            "start": 190,
            "end": 194
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 194
          },
          "exportKind": "value",
          "start": 190,
          "end": 194
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 181,
      "end": 197
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
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ts",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 209
          },
          "exportKind": "value",
          "start": 207,
          "end": 209
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 212
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 212
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
    "value": "\"inner/a\"",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 67,
    "end": 71
  },
  {
    "type": "String",
    "value": "\"inner/b\"",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 92,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 95,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 100,
    "end": 104
  },
  {
    "type": "String",
    "value": "\"inner\"",
    "start": 105,
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
    "value": "*",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 126,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 129,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"inner/types\"",
    "start": 134,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "ts",
    "start": 207,
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
  }
]
```
