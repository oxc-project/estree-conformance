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
            "name": "abstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 15
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
    "value": "abstract",
    "start": 4,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  }
]
```
