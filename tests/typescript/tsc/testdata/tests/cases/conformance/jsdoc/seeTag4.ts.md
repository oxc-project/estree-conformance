__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 107
        }
      ],
      "declare": false,
      "start": 100,
      "end": 108
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 100,
  "end": 108
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  }
]
```
