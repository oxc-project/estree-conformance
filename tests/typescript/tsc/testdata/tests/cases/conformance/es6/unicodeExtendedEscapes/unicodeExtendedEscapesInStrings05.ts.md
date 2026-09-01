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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": "Hello world",
            "raw": "\"\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}\\u{20}\\u{77}\\u{6f}\\u{72}\\u{6c}\\u{64}\"",
            "start": 8,
            "end": 76
          },
          "definite": false,
          "start": 4,
          "end": 76
        }
      ],
      "declare": false,
      "start": 0,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "String",
    "value": "\"\\u{48}\\u{65}\\u{6c}\\u{6c}\\u{6f}\\u{20}\\u{77}\\u{6f}\\u{72}\\u{6c}\\u{64}\"",
    "start": 8,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  }
]
```
