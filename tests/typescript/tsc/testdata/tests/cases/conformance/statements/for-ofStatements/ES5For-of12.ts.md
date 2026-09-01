__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "ArrayPattern",
        "decorators": [],
        "elements": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 6,
            "end": 8
          }
        ],
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 15,
                "end": 17
              }
            ],
            "start": 14,
            "end": 18
          }
        ],
        "start": 13,
        "end": 19
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 21,
        "end": 24
      },
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 24
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
    "value": "[",
    "start": 5,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
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
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  }
]
```
