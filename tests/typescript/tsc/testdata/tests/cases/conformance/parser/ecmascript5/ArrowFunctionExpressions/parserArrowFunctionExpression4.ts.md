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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 1
        },
        "right": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 11,
                "end": 14
              },
              "id": null,
              "generator": false,
              "start": 5,
              "end": 14
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            }
          ],
          "start": 5,
          "end": 17
        },
        "start": 0,
        "end": 18
      },
      "directive": null,
      "start": 0,
      "end": 18
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 18
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "a",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  }
]
```
