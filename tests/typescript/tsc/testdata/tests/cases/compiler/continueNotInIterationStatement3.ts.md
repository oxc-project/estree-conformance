__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 8,
        "end": 9
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "ContinueStatement",
              "label": null,
              "start": 28,
              "end": 37
            }
          ],
          "start": 15,
          "end": 37
        }
      ],
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 39
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "switch",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 28,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  }
]
```
