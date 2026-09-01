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
            "start": 0,
            "end": 1
          },
          "operator": "/",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "notregexp",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 12
          },
          "start": 0,
          "end": 12
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
              "start": 13,
              "end": 14
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 18
            },
            "optional": false,
            "computed": false,
            "start": 13,
            "end": 18
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 13,
          "end": 20
        },
        "start": 0,
        "end": 20
      },
      "directive": null,
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Numeric",
    "value": "1",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 2,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "notregexp",
    "start": 3,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "foo",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 20,
    "end": 21
  }
]
```
