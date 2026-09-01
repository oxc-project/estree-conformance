__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "ObjectPattern",
        "decorators": [],
        "properties": [],
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 12
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 14,
        "end": 17
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
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 8,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  }
]
```
