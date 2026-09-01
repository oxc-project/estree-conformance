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
          "type": "ObjectExpression",
          "properties": [],
          "start": 39,
          "end": 41
        },
        "start": 22,
        "end": 41
      },
      "directive": null,
      "start": 22,
      "end": 42
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 42
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
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  }
]
```
