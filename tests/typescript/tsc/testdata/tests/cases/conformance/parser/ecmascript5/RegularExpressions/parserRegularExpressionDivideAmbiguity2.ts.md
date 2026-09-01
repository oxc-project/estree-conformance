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
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1,
            "end": 2
          },
          "operator": "/",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "notregexp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 14
          },
          "start": 0,
          "end": 14
        },
        "operator": "/",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
            },
            "optional": false,
            "computed": false,
            "start": 15,
            "end": 20
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 15,
          "end": 22
        },
        "start": 0,
        "end": 22
      },
      "directive": null,
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 23
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 0,
    "end": 1
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "notregexp",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 22,
    "end": 23
  }
]
```
