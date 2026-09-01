__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 23,
        "end": 27
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 42,
        "end": 44
      },
      "alternate": null,
      "start": 6,
      "end": 44
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 69,
        "end": 73
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 88,
        "end": 90
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [],
        "start": 109,
        "end": 111
      },
      "start": 52,
      "end": 111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 6,
  "end": 111
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 15,
    "end": 16
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  }
]
```
