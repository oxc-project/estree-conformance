__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "Literal",
              "value": "no",
              "raw": "\"no\"",
              "start": 46,
              "end": 50
            },
            "start": 34,
            "end": 57
          }
        ],
        "start": 16,
        "end": 64
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 93
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 110,
          "end": 127
        },
        "start": 71,
        "end": 127
      },
      "finalizer": {
        "type": "BlockStatement",
        "body": [],
        "start": 150,
        "end": 167
      },
      "start": 6,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 6,
  "end": 174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "try",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 34,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  }
]
```
