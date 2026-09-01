__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BreakStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 29
            },
            "start": 17,
            "end": 30
          }
        ],
        "start": 13,
        "end": 32
      },
      "start": 0,
      "end": 32
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 0,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6,
    "end": 7
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 17,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  }
]
```
