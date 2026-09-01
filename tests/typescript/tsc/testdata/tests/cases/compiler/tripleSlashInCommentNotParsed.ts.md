__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 59,
          "end": 60
        },
        "prefix": true,
        "start": 54,
        "end": 60
      },
      "directive": null,
      "start": 54,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 54,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "void",
    "start": 54,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  }
]
```
