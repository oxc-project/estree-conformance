__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 4,
        "end": 5
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 7,
        "end": 10
      },
      "alternate": null,
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 10
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10
  }
]
```
