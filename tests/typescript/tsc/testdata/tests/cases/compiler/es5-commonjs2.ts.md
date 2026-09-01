__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 15,
        "end": 16
      },
      "exportKind": "value",
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 17
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
    "type": "Numeric",
    "value": "1",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
