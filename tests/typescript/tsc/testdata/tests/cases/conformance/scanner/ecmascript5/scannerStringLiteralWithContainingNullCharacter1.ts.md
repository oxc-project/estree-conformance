__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": " \u0000 ",
        "raw": "\" \u0000 \"",
        "start": 0,
        "end": 5
      },
      "directive": " \u0000 ",
      "start": 0,
      "end": 6
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\" \u0000 \"",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5,
    "end": 6
  }
]
```
