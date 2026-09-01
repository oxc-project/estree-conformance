__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 9,
        "raw": "0o00_11",
        "start": 0,
        "end": 7
      },
      "directive": null,
      "start": 0,
      "end": 8
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1,
        "raw": "0O0_1",
        "start": 9,
        "end": 14
      },
      "directive": null,
      "start": 9,
      "end": 15
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 2359305,
        "raw": "0o1100_0011",
        "start": 16,
        "end": 27
      },
      "directive": null,
      "start": 16,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 36929,
        "raw": "0O0_11_0101",
        "start": 29,
        "end": 40
      },
      "directive": null,
      "start": 29,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Numeric",
    "value": "0o00_11",
    "start": 0,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "0O0_1",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "0o1100_0011",
    "start": 16,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "0O0_11_0101",
    "start": 29,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
