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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 41
          },
          "importKind": "value",
          "start": 27,
          "end": 41
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 48,
        "end": 52
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "_fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 57
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 66
        },
        "optional": false,
        "computed": false,
        "start": 54,
        "end": 66
      },
      "directive": null,
      "start": 54,
      "end": 67
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 82
          },
          "start": 75,
          "end": 82
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 88,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 68,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 96
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 105
        },
        "optional": false,
        "computed": false,
        "start": 94,
        "end": 105
      },
      "directive": null,
      "start": 94,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 106
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
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 27,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 35,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "_fs",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 43,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "_fs",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 58,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 83,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 41
          },
          "importKind": "value",
          "start": 27,
          "end": 41
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 48,
        "end": 52
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "_fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 57
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 58,
          "end": 66
        },
        "optional": false,
        "computed": false,
        "start": 54,
        "end": 66
      },
      "directive": null,
      "start": 54,
      "end": 67
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fs",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 82
          },
          "start": 75,
          "end": 82
        }
      ],
      "source": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 88,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 68,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "fs",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 96
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 97,
          "end": 105
        },
        "optional": false,
        "computed": false,
        "start": 94,
        "end": 105
      },
      "directive": null,
      "start": 94,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 106
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
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 27,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 35,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "_fs",
    "start": 38,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 43,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "_fs",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 58,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 80,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 83,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "tslib",
        "raw": "\"tslib\"",
        "start": 36,
        "end": 43
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 50,
            "end": 60
          }
        ],
        "start": 44,
        "end": 103
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 21,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
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
    "value": "\"fs\"",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 21,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 29,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"tslib\"",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  }
]
```
