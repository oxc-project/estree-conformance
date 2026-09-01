__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 4,
        "end": 16
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 33
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 26,
              "end": 33
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 35
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 37,
          "end": 49
        },
        "start": 17,
        "end": 49
      },
      "finalizer": null,
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "try",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  }
]
```
