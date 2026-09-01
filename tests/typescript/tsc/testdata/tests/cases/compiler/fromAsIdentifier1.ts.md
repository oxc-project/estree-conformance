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
            "name": "from",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": null,
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
    "value": "from",
    "start": 4,
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
