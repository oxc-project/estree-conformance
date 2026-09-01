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
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 21
        },
        "typeArguments": null,
        "arguments": [],
        "start": 6,
        "end": 21
      },
      "directive": null,
      "start": 6,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 48,
          "end": 53
        },
        "prefix": true,
        "start": 35,
        "end": 53
      },
      "directive": null,
      "start": 35,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 83
        },
        "prefix": true,
        "start": 67,
        "end": 83
      },
      "directive": null,
      "start": 67,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 116,
            "end": 124
          },
          "optional": false,
          "computed": false,
          "start": 110,
          "end": 124
        },
        "prefix": true,
        "start": 97,
        "end": 124
      },
      "directive": null,
      "start": 97,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 6,
  "end": 131
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "new",
    "start": 6,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 48,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 97,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 116,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  }
]
```
