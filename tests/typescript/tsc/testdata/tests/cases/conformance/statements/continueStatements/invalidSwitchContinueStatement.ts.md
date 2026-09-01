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
        "start": 58,
        "end": 60
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 73,
            "end": 74
          },
          "consequent": [
            {
              "type": "ContinueStatement",
              "label": null,
              "start": 84,
              "end": 93
            }
          ],
          "start": 68,
          "end": 93
        }
      ],
      "start": 50,
      "end": 95
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 50,
  "end": 95
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "switch",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 68,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 84,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  }
]
```
