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
        "name": "target1",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 7
      },
      "body": {
        "type": "LabeledStatement",
        "label": {
          "type": "Identifier",
          "decorators": [],
          "name": "target2",
          "optional": false,
          "typeAnnotation": null,
          "start": 9,
          "end": 16
        },
        "body": {
          "type": "WhileStatement",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 25,
            "end": 29
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ContinueStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 51
                },
                "start": 35,
                "end": 52
              }
            ],
            "start": 31,
            "end": 54
          },
          "start": 18,
          "end": 54
        },
        "start": 9,
        "end": 54
      },
      "start": 0,
      "end": 54
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "target1",
    "start": 0,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "target2",
    "start": 9,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "target1",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  }
]
```
