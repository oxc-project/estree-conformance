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
            "start": 114,
            "end": 115
          },
          "init": {
            "type": "Literal",
            "value": "￿",
            "raw": "\"\\u{FFFF}\"",
            "start": 118,
            "end": 128
          },
          "definite": false,
          "start": 114,
          "end": 128
        }
      ],
      "declare": false,
      "start": 110,
      "end": 129
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 129
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "\"\\u{FFFF}\"",
    "start": 118,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  }
]
```
