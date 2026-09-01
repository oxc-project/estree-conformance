__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 1
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 2,
              "end": 7
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 7
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 8,
            "end": 9
          },
          "start": 0,
          "end": 9
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 12,
              "end": 13
            },
            "optional": false,
            "computed": true,
            "start": 10,
            "end": 14
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "length",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 21
          },
          "optional": false,
          "computed": false,
          "start": 10,
          "end": 21
        },
        "start": 0,
        "end": 21
      },
      "directive": null,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "m",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1,
    "end": 2
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 7,
    "end": 8
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  }
]
```
