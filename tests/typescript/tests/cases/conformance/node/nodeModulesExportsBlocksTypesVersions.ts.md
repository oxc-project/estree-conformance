__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 17,
          "end": 19
        },
        "start": 0,
        "end": 19
      },
      "directive": null,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 7,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
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
        "value": "exports-and-types-versions/foo",
        "raw": "\"exports-and-types-versions/foo\"",
        "start": 15,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/nope",
        "raw": "\"exports-and-types-versions/nope\"",
        "start": 64,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/yep",
        "raw": "\"exports-and-types-versions/yep\"",
        "start": 114,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-yep",
        "raw": "\"exports-and-types-versions/versioned-yep\"",
        "start": 163,
        "end": 205
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 206
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-nah",
        "raw": "\"exports-and-types-versions/versioned-nah\"",
        "start": 222,
        "end": 264
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 207,
      "end": 265
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "just-types-versions/foo",
        "raw": "\"just-types-versions/foo\"",
        "start": 281,
        "end": 306
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 266,
      "end": 307
    }
  ],
  "sourceType": "commonjs",
  "hashbang": null,
  "start": 0,
  "end": 308
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
    "value": "\"exports-and-types-versions/foo\"",
    "start": 15,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 59,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"exports-and-types-versions/nope\"",
    "start": 64,
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
    "value": "\"exports-and-types-versions/yep\"",
    "start": 114,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 158,
    "end": 162
  },
  {
    "type": "String",
    "value": "\"exports-and-types-versions/versioned-yep\"",
    "start": 163,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 217,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"exports-and-types-versions/versioned-nah\"",
    "start": 222,
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
    "value": "import",
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
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 276,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"just-types-versions/foo\"",
    "start": 281,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
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
        "value": "exports-and-types-versions/foo",
        "raw": "\"exports-and-types-versions/foo\"",
        "start": 15,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/nope",
        "raw": "\"exports-and-types-versions/nope\"",
        "start": 64,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/yep",
        "raw": "\"exports-and-types-versions/yep\"",
        "start": 114,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-yep",
        "raw": "\"exports-and-types-versions/versioned-yep\"",
        "start": 163,
        "end": 205
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 206
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-nah",
        "raw": "\"exports-and-types-versions/versioned-nah\"",
        "start": 222,
        "end": 264
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 207,
      "end": 265
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "just-types-versions/foo",
        "raw": "\"just-types-versions/foo\"",
        "start": 281,
        "end": 306
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 266,
      "end": 307
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 307
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
    "value": "\"exports-and-types-versions/foo\"",
    "start": 15,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 59,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"exports-and-types-versions/nope\"",
    "start": 64,
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
    "value": "\"exports-and-types-versions/yep\"",
    "start": 114,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 158,
    "end": 162
  },
  {
    "type": "String",
    "value": "\"exports-and-types-versions/versioned-yep\"",
    "start": 163,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 217,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"exports-and-types-versions/versioned-nah\"",
    "start": 222,
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
    "value": "import",
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
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 276,
    "end": 280
  },
  {
    "type": "String",
    "value": "\"just-types-versions/foo\"",
    "start": 281,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  }
]
```
