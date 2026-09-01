__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 12,
        "raw": "12",
        "start": 55,
        "end": 57
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 70,
            "end": 71
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 81,
              "end": 87
            }
          ],
          "start": 65,
          "end": 87
        }
      ],
      "start": 47,
      "end": 89
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 89
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "switch",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 65,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  }
]
```
