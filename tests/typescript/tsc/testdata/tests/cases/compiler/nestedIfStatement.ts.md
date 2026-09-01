__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 4,
        "end": 5
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 7,
        "end": 10
      },
      "alternate": {
        "type": "IfStatement",
        "test": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 20,
          "end": 21
        },
        "consequent": {
          "type": "BlockStatement",
          "body": [],
          "start": 23,
          "end": 26
        },
        "alternate": {
          "type": "IfStatement",
          "test": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 36,
            "end": 37
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [],
            "start": 39,
            "end": 42
          },
          "alternate": {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 52,
              "end": 53
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 55,
              "end": 58
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [],
              "start": 64,
              "end": 67
            },
            "start": 48,
            "end": 67
          },
          "start": 32,
          "end": 67
        },
        "start": 16,
        "end": 67
      },
      "start": 0,
      "end": 67
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 67
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
    "type": "Numeric",
    "value": "0",
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
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 11,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 27,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 43,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  }
]
```
