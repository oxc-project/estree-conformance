__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 21,
          "end": 23
        },
        "declare": false,
        "start": 7,
        "end": 23
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "start": 68,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "'./index.js'",
        "start": 80,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 61,
      "end": 93
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 110
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 113,
              "end": 114
            },
            "definite": false,
            "start": 107,
            "end": 114
          }
        ],
        "declare": false,
        "start": 101,
        "end": 115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 94,
      "end": 115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 61,
  "end": 116
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 70,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "'./index.js'",
    "start": 80,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 94,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "start": 36,
          "end": 42
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "'./index.js'",
        "start": 48,
        "end": 60
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 29,
      "end": 61
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 78
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 81,
              "end": 82
            },
            "definite": false,
            "start": 75,
            "end": 82
          }
        ],
        "declare": false,
        "start": 69,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 29,
  "end": 84
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 38,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "'./index.js'",
    "start": 48,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "start": 41,
          "end": 47
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "'./index.js'",
        "start": 53,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 34,
      "end": 66
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "init": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 86,
              "end": 87
            },
            "definite": false,
            "start": 80,
            "end": 87
          }
        ],
        "declare": false,
        "start": 74,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 34,
  "end": 88
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 43,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "'./index.js'",
    "start": 53,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  }
]
```
