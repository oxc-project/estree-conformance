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
            "start": 3,
            "end": 4
          }
        ],
        "start": 2,
        "end": 5
      },
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 11,
        "end": 16
      },
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 17,
        "end": 22
      },
      "directive": null,
      "start": 17,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "do",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 11,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 17,
    "end": 22
  }
]
```
