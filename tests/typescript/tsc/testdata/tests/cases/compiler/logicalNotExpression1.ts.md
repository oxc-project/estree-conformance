__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1,
          "end": 4
        },
        "prefix": true,
        "start": 0,
        "end": 4
      },
      "directive": null,
      "start": 0,
      "end": 5
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "!",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4,
    "end": 5
  }
]
```
