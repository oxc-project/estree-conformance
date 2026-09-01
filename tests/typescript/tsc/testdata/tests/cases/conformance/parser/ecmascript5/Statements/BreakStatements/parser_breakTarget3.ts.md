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
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 48
                },
                "start": 35,
                "end": 49
              }
            ],
            "start": 31,
            "end": 51
          },
          "start": 18,
          "end": 51
        },
        "start": 9,
        "end": 51
      },
      "start": 0,
      "end": 51
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 51
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
    "value": "break",
    "start": 35,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "target1",
    "start": 41,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  }
]
```
