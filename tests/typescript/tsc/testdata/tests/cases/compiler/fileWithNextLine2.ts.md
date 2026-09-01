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
            "start": 107,
            "end": 108
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 111,
            "end": 112
          },
          "definite": false,
          "start": 107,
          "end": 112
        }
      ],
      "declare": false,
      "start": 103,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 103,
  "end": 113
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  }
]
```
