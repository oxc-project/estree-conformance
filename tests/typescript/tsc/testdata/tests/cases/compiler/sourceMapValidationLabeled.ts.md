__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 1
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 8
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 11,
              "end": 13
            },
            "definite": false,
            "start": 7,
            "end": 13
          }
        ],
        "declare": false,
        "start": 3,
        "end": 14
      },
      "start": 0,
      "end": 14
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 14
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "x",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1,
    "end": 2
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 11,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  }
]
```
