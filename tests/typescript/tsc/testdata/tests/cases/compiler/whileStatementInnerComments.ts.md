__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 26,
        "end": 31
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 46,
        "end": 48
      },
      "start": 6,
      "end": 48
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 65,
        "end": 67
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 94,
        "end": 98
      },
      "start": 56,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 6,
  "end": 107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 56,
    "end": 58
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
    "type": "Keyword",
    "value": "while",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 94,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  }
]
```
