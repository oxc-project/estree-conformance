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
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 4,
          "end": 5
        },
        "start": 0,
        "end": 5
      },
      "directive": null,
      "start": 0,
      "end": 6
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 18
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
    "value": "+",
    "start": 2,
    "end": 3
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4,
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
