__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1,
            "end": 2
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 4,
            "end": 6
          }
        ],
        "start": 1,
        "end": 6
      },
      "directive": null,
      "start": 0,
      "end": 7
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 7
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
    "type": "Identifier",
    "value": "a",
    "start": 1,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2,
    "end": 3
  },
  {
    "type": "String",
    "value": "''",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6,
    "end": 7
  }
]
```
