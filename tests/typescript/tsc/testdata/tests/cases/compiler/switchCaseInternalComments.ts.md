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
        "start": 7,
        "end": 10
      },
      "body": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 46,
          "end": 51
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 89,
              "end": 94
            },
            "consequent": [
              {
                "type": "BreakStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 140
                },
                "start": 124,
                "end": 148
              }
            ],
            "start": 78,
            "end": 148
          },
          {
            "type": "SwitchCase",
            "test": null,
            "consequent": [],
            "start": 160,
            "end": 176
          },
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 207,
              "end": 212
            },
            "consequent": [
              {
                "type": "BlockStatement",
                "body": [],
                "start": 229,
                "end": 250
              }
            ],
            "start": 195,
            "end": 250
          }
        ],
        "start": 25,
        "end": 259
      },
      "start": 7,
      "end": 259
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 7,
  "end": 259
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 78,
    "end": 82
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 195,
    "end": 199
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  }
]
```
