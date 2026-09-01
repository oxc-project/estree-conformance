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
            "start": 40,
            "end": 41
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 44,
            "end": 46
          },
          "definite": false,
          "start": 40,
          "end": 46
        }
      ],
      "declare": false,
      "start": 36,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 47
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  }
]
```
