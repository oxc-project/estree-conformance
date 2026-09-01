__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 0,
                "end": 1
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "src",
                "optional": false,
                "typeAnnotation": null,
                "start": 2,
                "end": 5
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 5
            },
            "consequent": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 8,
              "end": 9
            },
            "alternate": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 12,
              "end": 13
            },
            "start": 0,
            "end": 13
          },
          {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "start": 15,
            "end": 21
          }
        ],
        "start": 0,
        "end": 21
      },
      "directive": null,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "b",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1,
    "end": 2
  },
  {
    "type": "Identifier",
    "value": "src",
    "start": 2,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 17,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  }
]
```
