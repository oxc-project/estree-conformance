__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 17,
        "raw": "0x00_11",
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
        "raw": "0X0_1",
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
        "value": 285212689,
        "raw": "0x1100_0011",
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
        "value": 1114369,
        "raw": "0X0_11_0101",
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
    "value": "0x00_11",
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
    "value": "0X0_1",
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
    "value": "0x1100_0011",
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
    "value": "0X0_11_0101",
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
