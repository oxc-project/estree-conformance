__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 13
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 18
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 22,
          "end": 23
        },
        "start": 14,
        "end": 23
      },
      "directive": null,
      "start": 14,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "eval",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 19,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  }
]
```
