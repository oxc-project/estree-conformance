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
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 0,
                "end": 7
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 8,
                "end": 9
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 9
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 11
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 13
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 16,
          "end": 17
        },
        "start": 0,
        "end": 17
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
    "value": "exports",
    "start": 0,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  }
]
```
