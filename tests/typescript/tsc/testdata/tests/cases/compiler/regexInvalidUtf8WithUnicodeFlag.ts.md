__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/�/u",
        "regex": {
          "pattern": "�",
          "flags": "u"
        },
        "start": 0,
        "end": 4
      },
      "directive": null,
      "start": 0,
      "end": 4
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "RegularExpression",
    "value": "/�/u",
    "regex": {
      "pattern": "�",
      "flags": "u"
    },
    "start": 0,
    "end": 4
  }
]
```
