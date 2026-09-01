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
          "start": 25,
          "end": 26
        },
        "start": 0,
        "end": 26
      },
      "directive": null,
      "start": 0,
      "end": 27
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 27
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
    "start": 13,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  }
]
```
