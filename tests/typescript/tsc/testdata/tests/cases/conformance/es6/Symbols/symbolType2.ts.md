__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isConcatSpreadable",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 25
        },
        "operator": "in",
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 29,
          "end": 31
        },
        "start": 0,
        "end": 31
      },
      "directive": null,
      "start": 0,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 33,
          "end": 35
        },
        "operator": "in",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toPrimitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 57
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 57
        },
        "start": 33,
        "end": 57
      },
      "directive": null,
      "start": 33,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Symbol",
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
    "value": "isConcatSpreadable",
    "start": 7,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 33,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 36,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "toPrimitive",
    "start": 46,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  }
]
```
