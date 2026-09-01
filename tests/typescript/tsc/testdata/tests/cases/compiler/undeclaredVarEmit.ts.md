__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 1
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "Identifier",
          "decorators": [],
          "name": "number",
          "optional": false,
          "typeAnnotation": null,
          "start": 3,
          "end": 9
        },
        "directive": null,
        "start": 3,
        "end": 10
      },
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 10
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "f",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1,
    "end": 2
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  }
]
```
