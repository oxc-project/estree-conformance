__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 12,
        "end": 17
      },
      "directive": null,
      "start": 5,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 69,
        "end": 74
      },
      "directive": null,
      "start": 46,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 5,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  }
]
```
