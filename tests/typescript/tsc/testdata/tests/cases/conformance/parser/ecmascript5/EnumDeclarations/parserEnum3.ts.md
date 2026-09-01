__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SignatureFlags",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 30
        },
        "body": {
          "type": "TSEnumBody",
          "members": [],
          "start": 31,
          "end": 38
        },
        "const": false,
        "declare": false,
        "start": 11,
        "end": 38
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 4,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 11,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "SignatureFlags",
    "start": 16,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  }
]
```
