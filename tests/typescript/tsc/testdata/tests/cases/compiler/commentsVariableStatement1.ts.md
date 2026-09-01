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
            "start": 19,
            "end": 20
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 23,
            "end": 24
          },
          "definite": false,
          "start": 19,
          "end": 24
        }
      ],
      "declare": false,
      "start": 15,
      "end": 25
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 25
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  }
]
```
