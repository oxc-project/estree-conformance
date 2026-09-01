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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "init": null,
            "definite": false,
            "start": 75,
            "end": 76
          }
        ],
        "declare": false,
        "start": 71,
        "end": 77
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 64,
      "end": 77
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "start": 78,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 64,
  "end": 99
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 64,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 78,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 85,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 98,
    "end": 99
  }
]
```
