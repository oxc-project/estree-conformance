__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSAsExpression",
        "expression": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 0,
          "end": 1
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 5,
          "end": 11
        },
        "start": 0,
        "end": 11
      },
      "directive": null,
      "start": 0,
      "end": 12
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 22,
              "end": 28
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 38
            },
            "start": 21,
            "end": 38
          },
          "definite": false,
          "start": 17,
          "end": 38
        }
      ],
      "declare": false,
      "start": 13,
      "end": 39
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 39
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Numeric",
    "value": "0",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 29,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  }
]
```
