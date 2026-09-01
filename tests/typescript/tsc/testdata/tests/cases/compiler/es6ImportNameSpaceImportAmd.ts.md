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
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
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
            "name": "nameSpaceBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 28
          },
          "start": 7,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportNameSpaceImportAmd_0",
        "raw": "\"es6ImportNameSpaceImportAmd_0\"",
        "start": 34,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 66
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
            "start": 71,
            "end": 72
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 91
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "optional": false,
            "computed": false,
            "start": 75,
            "end": 93
          },
          "definite": false,
          "start": 71,
          "end": 93
        }
      ],
      "declare": false,
      "start": 67,
      "end": 94
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameSpaceBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 124
          },
          "start": 102,
          "end": 124
        }
      ],
      "source": {
        "type": "Literal",
        "value": "es6ImportNameSpaceImportAmd_0",
        "raw": "\"es6ImportNameSpaceImportAmd_0\"",
        "start": 130,
        "end": 161
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 95,
      "end": 162
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 176
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
    "value": "*",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 12,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 29,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"es6ImportNameSpaceImportAmd_0\"",
    "start": 34,
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
    "value": "var",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 75,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 104,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding2",
    "start": 107,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 125,
    "end": 129
  },
  {
    "type": "String",
    "value": "\"es6ImportNameSpaceImportAmd_0\"",
    "start": 130,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  }
]
```
