__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 4,
        "end": 8
      },
      "consequent": {
        "type": "ExportNamedDeclaration",
        "declaration": null,
        "specifiers": [],
        "source": null,
        "exportKind": "type",
        "attributes": [],
        "start": 10,
        "end": 25
      },
      "alternate": null,
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  }
]
```
