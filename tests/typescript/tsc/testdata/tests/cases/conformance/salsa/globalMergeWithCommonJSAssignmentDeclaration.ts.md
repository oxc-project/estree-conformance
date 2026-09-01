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
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "window",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 14,
          "end": 15
        },
        "start": 0,
        "end": 15
      },
      "directive": null,
      "start": 0,
      "end": 16
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "window",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "console",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 31
        },
        "optional": false,
        "computed": false,
        "start": 17,
        "end": 31
      },
      "directive": null,
      "start": 17,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 118,
          "end": 132
        },
        "right": {
          "type": "Literal",
          "value": "anything",
          "raw": "'anything'",
          "start": 135,
          "end": 145
        },
        "start": 118,
        "end": 145
      },
      "directive": null,
      "start": 118,
      "end": 146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 147
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "window",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "String",
    "value": "'anything'",
    "start": 135,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  }
]
```
