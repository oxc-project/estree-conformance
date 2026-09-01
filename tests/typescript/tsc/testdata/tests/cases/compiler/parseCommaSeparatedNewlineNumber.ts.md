__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1,
            "end": 2
          },
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4,
            "end": 5
          }
        ],
        "start": 1,
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
  "end": 6
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": ")",
    "start": 5,
    "end": 6
  }
]
```
