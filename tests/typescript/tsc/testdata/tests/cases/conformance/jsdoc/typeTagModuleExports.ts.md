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
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 28
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "optional": false,
          "computed": false,
          "start": 22,
          "end": 36
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 39,
          "end": 40
        },
        "start": 22,
        "end": 40
      },
      "directive": null,
      "start": 22,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "module",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
