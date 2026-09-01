__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 4
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 7,
          "end": 8
        },
        "start": 0,
        "end": 8
      },
      "directive": null,
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "eval",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5,
    "end": 6
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8,
    "end": 9
  }
]
```
