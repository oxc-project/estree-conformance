__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 0,
          "end": 1
        },
        "operator": ">>",
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 5,
          "end": 6
        },
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
    "type": "Numeric",
    "value": "1",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": ">>",
    "start": 2,
    "end": 4
  },
  {
    "type": "Numeric",
    "value": "2",
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
