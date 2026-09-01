__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 6,
          "end": 11
        },
        "property": {
          "type": "Literal",
          "value": "toString",
          "raw": "\"toString\"",
          "start": 25,
          "end": 35
        },
        "optional": false,
        "computed": true,
        "start": 6,
        "end": 43
      },
      "directive": null,
      "start": 6,
      "end": 50
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 69
        },
        "property": {
          "type": "Literal",
          "value": "toString",
          "raw": "\"toString\"",
          "start": 107,
          "end": 117
        },
        "optional": false,
        "computed": true,
        "start": 64,
        "end": 148
      },
      "directive": null,
      "start": 64,
      "end": 148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 6,
  "end": 154
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Array",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 25,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "\"toString\"",
    "start": 107,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148
  }
]
```
