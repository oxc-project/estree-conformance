__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>>=",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 0,
          "end": 1
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 26,
          "end": 27
        },
        "start": 0,
        "end": 27
      },
      "directive": null,
      "start": 0,
      "end": 28
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 28
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
    "value": ">>>=",
    "start": 12,
    "end": 16
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  }
]
```
