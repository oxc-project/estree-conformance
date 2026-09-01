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
      "end": 12
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "start": 14,
        "end": 20
      },
      "directive": null,
      "start": 14,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 28
        },
        "start": 22,
        "end": 28
      },
      "directive": null,
      "start": 22,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 41
        },
        "start": 30,
        "end": 41
      },
      "directive": null,
      "start": 30,
      "end": 42
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 54
        },
        "start": 43,
        "end": 54
      },
      "directive": null,
      "start": 43,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 60
        },
        "start": 56,
        "end": 62
      },
      "directive": null,
      "start": 56,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "eval",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 68
        },
        "start": 64,
        "end": 70
      },
      "directive": null,
      "start": 64,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 81
        },
        "start": 72,
        "end": 83
      },
      "directive": null,
      "start": 72,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 94
        },
        "start": 85,
        "end": 96
      },
      "directive": null,
      "start": 85,
      "end": 97
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 97
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
    "value": "++",
    "start": 14,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "eval",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 22,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "eval",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 30,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 43,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 45,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "eval",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "eval",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 85,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "--",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  }
]
```
