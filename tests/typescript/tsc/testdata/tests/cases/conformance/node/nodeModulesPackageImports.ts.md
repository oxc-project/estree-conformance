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
        "value": "#cjs",
        "raw": "\"#cjs\"",
        "start": 40,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 47
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
            "start": 60,
            "end": 63
          },
          "start": 55,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#mjs",
        "raw": "\"#mjs\"",
        "start": 69,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 76
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
            "start": 89,
            "end": 93
          },
          "start": 84,
          "end": 93
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#type",
        "raw": "\"#type\"",
        "start": 99,
        "end": 106
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 77,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 111
      },
      "directive": null,
      "start": 108,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 116
      },
      "directive": null,
      "start": 113,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 122
      },
      "directive": null,
      "start": 118,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 123
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
    "value": "\"#cjs\"",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 55,
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
    "value": "mjs",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 64,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"#mjs\"",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 94,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"#type\"",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
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
        "value": "#cjs",
        "raw": "\"#cjs\"",
        "start": 40,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 47
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
            "start": 60,
            "end": 63
          },
          "start": 55,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#mjs",
        "raw": "\"#mjs\"",
        "start": 69,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 76
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
            "start": 89,
            "end": 93
          },
          "start": 84,
          "end": 93
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#type",
        "raw": "\"#type\"",
        "start": 99,
        "end": 106
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 77,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 111
      },
      "directive": null,
      "start": 108,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 116
      },
      "directive": null,
      "start": 113,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 122
      },
      "directive": null,
      "start": 118,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 123
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
    "value": "\"#cjs\"",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 55,
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
    "value": "mjs",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 64,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"#mjs\"",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 94,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"#type\"",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
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
        "value": "#cjs",
        "raw": "\"#cjs\"",
        "start": 40,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 47
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
            "start": 60,
            "end": 63
          },
          "start": 55,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#mjs",
        "raw": "\"#mjs\"",
        "start": 69,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 48,
      "end": 76
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
            "start": 89,
            "end": 93
          },
          "start": 84,
          "end": 93
        }
      ],
      "source": {
        "type": "Literal",
        "value": "#type",
        "raw": "\"#type\"",
        "start": 99,
        "end": 106
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 77,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "cjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 111
      },
      "directive": null,
      "start": 108,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "mjs",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 116
      },
      "directive": null,
      "start": 113,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "type",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 122
      },
      "directive": null,
      "start": 118,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 123
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
    "value": "\"#cjs\"",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 55,
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
    "value": "mjs",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 64,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"#mjs\"",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 94,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"#type\"",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "cjs",
    "start": 108,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "mjs",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  }
]
```
