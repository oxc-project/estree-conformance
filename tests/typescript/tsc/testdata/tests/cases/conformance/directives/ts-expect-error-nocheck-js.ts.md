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
            "start": 121,
            "end": 122
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 125,
            "end": 126
          },
          "definite": false,
          "start": 121,
          "end": 126
        }
      ],
      "declare": false,
      "start": 115,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 115,
  "end": 127
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  }
]
```
