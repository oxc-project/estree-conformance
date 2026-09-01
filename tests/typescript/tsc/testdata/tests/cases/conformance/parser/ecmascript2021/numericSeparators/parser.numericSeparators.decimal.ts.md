__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1000000000,
        "raw": "1_000_000_000",
        "start": 0,
        "end": 13
      },
      "directive": null,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.10001,
        "raw": "1.1_00_01",
        "start": 14,
        "end": 23
      },
      "directive": null,
      "start": 14,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 10000000000,
        "raw": "1e1_0",
        "start": 24,
        "end": 29
      },
      "directive": null,
      "start": 24,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 10000000000,
        "raw": "1e+1_0",
        "start": 30,
        "end": 36
      },
      "directive": null,
      "start": 30,
      "end": 36
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1e-10,
        "raw": "1e-1_0",
        "start": 37,
        "end": 43
      },
      "directive": null,
      "start": 37,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.1e+100,
        "raw": "1.1e10_0",
        "start": 44,
        "end": 52
      },
      "directive": null,
      "start": 44,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.1e+100,
        "raw": "1.1e+10_0",
        "start": 53,
        "end": 62
      },
      "directive": null,
      "start": 53,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.1e-100,
        "raw": "1.1e-10_0",
        "start": 63,
        "end": 72
      },
      "directive": null,
      "start": 63,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 123456,
        "raw": "12_34_56",
        "start": 73,
        "end": 81
      },
      "directive": null,
      "start": 73,
      "end": 81
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 122333,
        "raw": "1_22_333",
        "start": 82,
        "end": 90
      },
      "directive": null,
      "start": 82,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 12.34,
        "raw": "1_2.3_4",
        "start": 91,
        "end": 98
      },
      "directive": null,
      "start": 91,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.234e+57,
        "raw": "1_2.3_4e5_6",
        "start": 99,
        "end": 110
      },
      "directive": null,
      "start": 99,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.234e+57,
        "raw": "1_2.3_4e+5_6",
        "start": 111,
        "end": 123
      },
      "directive": null,
      "start": 111,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 1.234e-55,
        "raw": "1_2.3_4e-5_6",
        "start": 124,
        "end": 136
      },
      "directive": null,
      "start": 124,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 136
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Numeric",
    "value": "1_000_000_000",
    "start": 0,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "1.1_00_01",
    "start": 14,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "1e1_0",
    "start": 24,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "1e+1_0",
    "start": 30,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "1e-1_0",
    "start": 37,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "1.1e10_0",
    "start": 44,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "1.1e+10_0",
    "start": 53,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "1.1e-10_0",
    "start": 63,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "12_34_56",
    "start": 73,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "1_22_333",
    "start": 82,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "1_2.3_4",
    "start": 91,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "1_2.3_4e5_6",
    "start": 99,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "1_2.3_4e+5_6",
    "start": 111,
    "end": 123
  },
  {
    "type": "Numeric",
    "value": "1_2.3_4e-5_6",
    "start": 124,
    "end": 136
  }
]
```
