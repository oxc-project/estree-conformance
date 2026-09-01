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
          "start": 5,
          "end": 6
        },
        "prefix": true,
        "start": 0,
        "end": 6
      },
      "directive": null,
      "start": 0,
      "end": 7
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 7
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "void",
    "start": 0,
    "end": 4
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6,
    "end": 7
  }
]
```
