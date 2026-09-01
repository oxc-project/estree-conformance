__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 20,
          "end": 22
        },
        "operator": "===",
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 27,
          "end": 29
        },
        "start": 20,
        "end": 29
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 31,
        "end": 33
      },
      "alternate": null,
      "start": 16,
      "end": 33
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 59,
          "end": 61
        },
        "operator": "==",
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 65,
          "end": 67
        },
        "start": 59,
        "end": 67
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 69,
        "end": 71
      },
      "alternate": null,
      "start": 55,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 71
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  }
]
```
