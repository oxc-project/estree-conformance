__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "UTC",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 8
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 8
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2017,
            "raw": "2017",
            "start": 9,
            "end": 13
          }
        ],
        "optional": false,
        "start": 0,
        "end": 14
      },
      "directive": null,
      "start": 0,
      "end": 15
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Date",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "UTC",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "2017",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  }
]
```
