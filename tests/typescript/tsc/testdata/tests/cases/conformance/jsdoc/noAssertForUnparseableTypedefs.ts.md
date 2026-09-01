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
            "name": "nope",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "nope",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "importKind": "value",
          "start": 44,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "nope",
        "raw": "'nope'",
        "start": 56,
        "end": 62
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 35,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 63
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "nope",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 51,
    "end": 55
  },
  {
    "type": "String",
    "value": "'nope'",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  }
]
```
