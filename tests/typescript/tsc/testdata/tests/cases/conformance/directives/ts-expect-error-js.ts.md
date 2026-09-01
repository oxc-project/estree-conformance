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
            "start": 113,
            "end": 114
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 117,
            "end": 118
          },
          "definite": false,
          "start": 113,
          "end": 118
        }
      ],
      "declare": false,
      "start": 107,
      "end": 119
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 107,
  "end": 119
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  }
]
```
