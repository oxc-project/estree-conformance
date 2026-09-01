__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": ">>=",
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
          "start": 6,
          "end": 7
        },
        "start": 0,
        "end": 7
      },
      "directive": null,
      "start": 0,
      "end": 8
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 8
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
    "value": ">>=",
    "start": 2,
    "end": 5
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7,
    "end": 8
  }
]
```
