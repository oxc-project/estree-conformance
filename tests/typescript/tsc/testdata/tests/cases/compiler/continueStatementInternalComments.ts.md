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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 3
      },
      "body": {
        "type": "ForStatement",
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ContinueStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 44
              },
              "start": 26,
              "end": 51
            }
          ],
          "start": 14,
          "end": 53
        },
        "start": 5,
        "end": 53
      },
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "foo",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3,
    "end": 4
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Keyword",
    "value": "continue",
    "start": 26,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  }
]
```
