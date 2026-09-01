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
            "name": "hi",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 278
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 281,
            "end": 282
          },
          "definite": false,
          "start": 276,
          "end": 282
        }
      ],
      "declare": false,
      "start": 272,
      "end": 282
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 272,
  "end": 282
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "hi",
    "start": 276,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 281,
    "end": 282
  }
]
```
