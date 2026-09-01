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
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 25
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 26,
          "end": 29
        },
        "declare": false,
        "start": 7,
        "end": 29
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 29
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
    "value": "export",
    "start": 7,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 14,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  }
]
```
