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
              "start": 6,
              "end": 7
            },
            "start": 2,
            "end": 7
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "operator": ">",
            "right": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 7,
                "raw": "7",
                "start": 15,
                "end": 16
              },
              "prefix": true,
              "start": 13,
              "end": 17
            },
            "start": 9,
            "end": 17
          }
        ],
        "optional": false,
        "start": 0,
        "end": 18
      },
      "directive": null,
      "start": 0,
      "end": 19
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 19
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
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 14,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  }
]
```
