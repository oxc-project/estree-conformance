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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 6,
            "end": 8
          },
          "definite": false,
          "start": 4,
          "end": 8
        }
      ],
      "declare": false,
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 9
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5,
    "end": 6
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8,
    "end": 9
  }
]
```
