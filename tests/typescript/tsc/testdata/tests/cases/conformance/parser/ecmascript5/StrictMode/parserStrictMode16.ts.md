__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "ThisExpression",
          "start": 21,
          "end": 25
        },
        "prefix": true,
        "start": 14,
        "end": 25
      },
      "directive": null,
      "start": 14,
      "end": 26
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 34,
          "end": 35
        },
        "prefix": true,
        "start": 27,
        "end": 35
      },
      "directive": null,
      "start": 27,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 44,
          "end": 48
        },
        "prefix": true,
        "start": 37,
        "end": 48
      },
      "directive": null,
      "start": 37,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Literal",
          "value": "a",
          "raw": "\"a\"",
          "start": 57,
          "end": 60
        },
        "prefix": true,
        "start": 50,
        "end": 60
      },
      "directive": null,
      "start": 50,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 14,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 27,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 37,
    "end": 43
  },
  {
    "type": "Null",
    "value": "null",
    "start": 44,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 50,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  }
]
```
