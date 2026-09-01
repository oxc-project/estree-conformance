__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null,
          "start": 4,
          "end": 10
        },
        "typeArguments": null,
        "arguments": [],
        "start": 0,
        "end": 12
      },
      "directive": null,
      "start": 0,
      "end": 13
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 13
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
    "value": "Symbol",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  }
]
```
