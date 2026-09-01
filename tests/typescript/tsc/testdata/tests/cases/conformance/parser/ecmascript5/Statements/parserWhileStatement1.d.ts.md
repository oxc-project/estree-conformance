__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 10,
        "end": 13
      },
      "start": 0,
      "end": 13
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 13
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
    "type": "Identifier",
    "value": "e",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  }
]
```
