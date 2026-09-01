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
          "value": 3,
          "raw": "3",
          "start": 0,
          "end": 1
        },
        "operator": "in",
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 6,
              "end": 7
            },
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 9,
              "end": 10
            }
          ],
          "start": 5,
          "end": 11
        },
        "start": 0,
        "end": 11
      },
      "directive": null,
      "start": 0,
      "end": 11
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 11
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Numeric",
    "value": "3",
    "start": 0,
    "end": 1
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5,
    "end": 6
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 10,
    "end": 11
  }
]
```
