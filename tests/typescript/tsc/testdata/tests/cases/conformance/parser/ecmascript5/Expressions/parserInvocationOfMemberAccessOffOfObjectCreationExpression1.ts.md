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
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4,
              "end": 5
            },
            "typeArguments": null,
            "arguments": [],
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 9
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 11
      },
      "directive": null,
      "start": 0,
      "end": 11
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 11
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10,
    "end": 11
  }
]
```
