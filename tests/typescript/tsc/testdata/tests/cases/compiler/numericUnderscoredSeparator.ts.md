__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1000000000000,
        "raw": "1_000_000_000_000",
        "start": 0,
        "end": 17
      },
      "directive": null,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 41349,
        "raw": "0b1010_0001_1000_0101",
        "start": 18,
        "end": 39
      },
      "directive": null,
      "start": 18,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 41349,
        "raw": "0b1010_0001_1000_0101",
        "start": 40,
        "end": 61
      },
      "directive": null,
      "start": 40,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 10531008,
        "raw": "0xA0_B0_C0",
        "start": 62,
        "end": 72
      },
      "directive": null,
      "start": 62,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Numeric",
    "value": "1_000_000_000_000",
    "start": 0,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "0b1010_0001_1000_0101",
    "start": 18,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "0b1010_0001_1000_0101",
    "start": 40,
    "end": 61
  },
  {
    "type": "Numeric",
    "value": "0xA0_B0_C0",
    "start": 62,
    "end": 72
  }
]
```
