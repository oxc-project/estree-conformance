__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 4
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
    "type": "Identifier",
    "value": "eval",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 4,
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
