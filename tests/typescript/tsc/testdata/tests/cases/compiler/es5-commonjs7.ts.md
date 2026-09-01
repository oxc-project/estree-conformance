__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 24
      },
      "exportKind": "value",
      "start": 0,
      "end": 25
    },
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
              "name": "__esModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 47
            },
            "init": null,
            "definite": false,
            "start": 37,
            "end": 47
          }
        ],
        "declare": false,
        "start": 33,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 26,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 48
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
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 15,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "__esModule",
    "start": 37,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  }
]
```
