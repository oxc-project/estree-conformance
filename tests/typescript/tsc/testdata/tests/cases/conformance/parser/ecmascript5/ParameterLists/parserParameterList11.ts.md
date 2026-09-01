__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 4,
              "end": 7
            },
            "optional": true,
            "typeAnnotation": null,
            "value": null,
            "start": 1,
            "end": 8
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 102,
          "raw": "102",
          "start": 13,
          "end": 16
        },
        "id": null,
        "generator": false,
        "start": 0,
        "end": 16
      },
      "directive": null,
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 17
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
    "type": "Punctuator",
    "value": "...",
    "start": 1,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "102",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
