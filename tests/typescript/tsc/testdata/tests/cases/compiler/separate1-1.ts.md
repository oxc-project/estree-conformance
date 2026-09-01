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
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 1
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 2,
            "end": 3
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 3
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 5
      },
      "directive": null,
      "start": 0,
      "end": 6
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "X",
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
    "value": "f",
    "start": 2,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5,
    "end": 6
  }
]
```
