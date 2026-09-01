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
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 1
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 2,
              "end": 3
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4,
              "end": 5
            },
            "start": 2,
            "end": 5
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 8
            },
            "operator": ">",
            "right": {
              "type": "Literal",
              "value": 7,
              "raw": "7",
              "start": 9,
              "end": 10
            },
            "start": 7,
            "end": 10
          }
        ],
        "optional": false,
        "start": 0,
        "end": 11
      },
      "directive": null,
      "start": 0,
      "end": 12
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 12
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "f",
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
    "value": "g",
    "start": 2,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  }
]
```
