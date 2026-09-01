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
        "value": "./es6ImportNameSpaceImport_0",
        "raw": "\"./es6ImportNameSpaceImport_0\"",
        "start": 34,
        "end": 64
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 65
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
            "start": 70,
            "end": 71
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nameSpaceBinding",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 90
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "optional": false,
            "computed": false,
            "start": 74,
            "end": 92
          },
          "definite": false,
          "start": 70,
          "end": 92
        }
      ],
      "declare": false,
      "start": 66,
      "end": 93
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
            "start": 106,
            "end": 123
          },
          "start": 101,
          "end": 123
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportNameSpaceImport_0",
        "raw": "\"./es6ImportNameSpaceImport_0\"",
        "start": 129,
        "end": 159
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 94,
      "end": 160
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 174
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
    "value": "\"./es6ImportNameSpaceImport_0\"",
    "start": 34,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding",
    "start": 74,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 91,
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
    "value": "import",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 103,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "nameSpaceBinding2",
    "start": 106,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 124,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"./es6ImportNameSpaceImport_0\"",
    "start": 129,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  }
]
```
