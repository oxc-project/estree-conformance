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
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8,
                "end": 14
              },
              "start": 6,
              "end": 14
            },
            "start": 2,
            "end": 14
          }
        ],
        "returnType": null,
        "body": {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 27
        },
        "id": null,
        "generator": false,
        "start": 1,
        "end": 27
      },
      "directive": null,
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
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
    "value": "(",
    "start": 1,
    "end": 2
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 2,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 23,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 28,
    "end": 29
  }
]
```
