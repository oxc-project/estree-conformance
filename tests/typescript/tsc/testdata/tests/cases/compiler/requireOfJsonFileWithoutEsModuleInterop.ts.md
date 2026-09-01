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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 16
          },
          "start": 7,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./test.json",
        "raw": "\"./test.json\"",
        "start": 22,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
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
    "value": "test",
    "start": 12,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"./test.json\"",
    "start": 22,
    "end": 35
  }
]
```
