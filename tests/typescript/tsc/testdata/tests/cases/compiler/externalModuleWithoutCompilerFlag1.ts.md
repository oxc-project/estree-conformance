__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 112
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [],
          "start": 113,
          "end": 116
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 101,
        "end": 116
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 94,
      "end": 116
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 94,
  "end": 116
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 94,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 101,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  }
]
```
