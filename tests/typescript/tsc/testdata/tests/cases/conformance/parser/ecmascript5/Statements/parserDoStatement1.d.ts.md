__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3,
        "end": 6
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
      },
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 17
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
    "start": 3,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
