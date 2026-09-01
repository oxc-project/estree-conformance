__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "jquery",
        "raw": "\"jquery\"",
        "start": 15,
        "end": 23
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 64,
        "end": 68
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 49,
      "end": 69
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 70
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
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"jquery\"",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 49,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 57,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "start": 48,
          "end": 51
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 57
          },
          "importKind": "value",
          "start": 54,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "jquery",
        "raw": "\"jquery\"",
        "start": 64,
        "end": 72
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 41,
      "end": 73
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 89
          },
          "start": 81,
          "end": 89
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 95,
        "end": 99
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 74,
      "end": 100
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "boom",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 112
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "jquery",
          "raw": "\"jquery\"",
          "start": 123,
          "end": 131
        },
        "start": 115,
        "end": 132
      },
      "importKind": "value",
      "start": 101,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 141
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 146
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "boom",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 152
          }
        ],
        "optional": false,
        "start": 134,
        "end": 153
      },
      "directive": null,
      "start": 134,
      "end": 154
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 154
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 54,
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
    "value": "\"jquery\"",
    "start": 64,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 83,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 86,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 90,
    "end": 94
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 101,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "boom",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"jquery\"",
    "start": 123,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "boom",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  }
]
```
