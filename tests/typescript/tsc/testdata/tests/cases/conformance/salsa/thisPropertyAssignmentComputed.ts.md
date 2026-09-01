__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "ThisExpression",
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 5,
              "end": 8
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 11,
              "end": 14
            },
            "start": 5,
            "end": 14
          },
          "optional": false,
          "computed": true,
          "start": 0,
          "end": 15
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 18,
          "end": 19
        },
        "start": 0,
        "end": 19
      },
      "directive": null,
      "start": 0,
      "end": 19
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 19
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "this",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4,
    "end": 5
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9,
    "end": 10
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 18,
    "end": 19
  }
]
```
