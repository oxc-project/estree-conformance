__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 127
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 130,
            "end": 131
          },
          "definite": false,
          "start": 126,
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
    "value": "const",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 130,
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
