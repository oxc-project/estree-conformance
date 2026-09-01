__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WithStatement",
      "object": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 6,
        "end": 7
      },
      "body": {
        "type": "ReturnStatement",
        "argument": null,
        "start": 11,
        "end": 18
      },
      "start": 0,
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
    "type": "Keyword",
    "value": "with",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5,
    "end": 6
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 11,
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
