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
            "start": 194,
            "end": 195
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 198,
            "end": 199
          },
          "definite": false,
          "start": 194,
          "end": 199
        }
      ],
      "declare": false,
      "start": 190,
      "end": 200
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 190,
  "end": 200
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  }
]
```
