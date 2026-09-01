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
            "name": "unrelated",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 40
        }
      ],
      "declare": false,
      "start": 27,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 68
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "unrelated",
    "start": 31,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
