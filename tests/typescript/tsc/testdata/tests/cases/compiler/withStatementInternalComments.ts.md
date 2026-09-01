__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 39,
        "end": 44
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 59,
        "end": 61
      },
      "start": 20,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "with",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 51,
    "end": 52
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
  }
]
```
