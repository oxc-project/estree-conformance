__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
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
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 7,
          "end": 10
        },
        "prefix": true,
        "start": 6,
        "end": 10
      },
      "directive": null,
      "start": 6,
      "end": 11
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "quux",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 17
        },
        "prefix": true,
        "start": 12,
        "end": 17
      },
      "directive": null,
      "start": 12,
      "end": 18
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "+",
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
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "quux",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  }
]
```
