__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 8,
              "end": 9
            },
            "operator": "|",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 12,
              "end": 16
            },
            "start": 8,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 17
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 10,
    "end": 11
  },
  {
    "type": "Null",
    "value": "null",
    "start": 12,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
