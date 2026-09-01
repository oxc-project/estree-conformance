__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 12,
        "end": 14
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 15,
          "end": 16
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 19,
          "end": 28
        },
        "start": 15,
        "end": 28
      },
      "directive": null,
      "start": 15,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 19,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  }
]
```
