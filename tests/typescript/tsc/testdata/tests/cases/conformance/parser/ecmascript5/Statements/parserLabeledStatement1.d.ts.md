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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 3
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 7,
          "end": 12
        },
        "directive": null,
        "start": 7,
        "end": 13
      },
      "start": 0,
      "end": 13
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 13
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "foo",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  }
]
```
