__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 0,
          "end": 4
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
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
      "directive": null,
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Null",
    "value": "null",
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
    "value": "foo",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8,
    "end": 9
  }
]
```
