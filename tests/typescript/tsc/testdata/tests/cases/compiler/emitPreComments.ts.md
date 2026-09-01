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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 31,
            "end": 33
          },
          "definite": false,
          "start": 27,
          "end": 33
        }
      ],
      "declare": false,
      "start": 23,
      "end": 34
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 254
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 31,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  }
]
```
