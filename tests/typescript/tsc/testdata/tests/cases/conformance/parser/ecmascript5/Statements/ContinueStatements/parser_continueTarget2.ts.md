__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 6
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 15,
          "end": 19
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "target",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 40
              },
              "start": 25,
              "end": 41
            }
          ],
          "start": 21,
          "end": 43
        },
        "start": 8,
        "end": 43
      },
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "target",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 8,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  }
]
```
