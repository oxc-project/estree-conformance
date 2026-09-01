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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 41,
            "end": 42
          },
          "definite": false,
          "start": 37,
          "end": 42
        }
      ],
      "declare": false,
      "start": 33,
      "end": 43
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 44
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  }
]
```
