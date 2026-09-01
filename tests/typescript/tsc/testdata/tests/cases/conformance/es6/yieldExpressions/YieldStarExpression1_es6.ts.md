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
          "type": "Identifier",
          "decorators": [],
          "name": "yield",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 5
        },
        "operator": "*",
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 8,
          "end": 10
        },
        "start": 0,
        "end": 10
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
    "type": "Identifier",
    "value": "yield",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  }
]
```
