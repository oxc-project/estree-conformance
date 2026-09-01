__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "EmptyStatement",
            "start": 319,
            "end": 320
          }
        ],
        "start": 315,
        "end": 322
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 330,
        "end": 335
      },
      "start": 312,
      "end": 336
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 337,
        "end": 341
      },
      "directive": null,
      "start": 337,
      "end": 341
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 312,
  "end": 342
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "do",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 330,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 337,
    "end": 341
  }
]
```
