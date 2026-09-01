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
            "start": 124,
            "end": 125
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 128,
            "end": 131
          },
          "definite": false,
          "start": 124,
          "end": 131
        }
      ],
      "declare": false,
      "start": 120,
      "end": 132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 120,
  "end": 132
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "''",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  }
]
```
