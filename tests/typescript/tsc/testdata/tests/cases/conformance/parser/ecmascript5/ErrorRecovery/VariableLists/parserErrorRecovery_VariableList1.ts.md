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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 5
        }
      ],
      "declare": false,
      "start": 0,
      "end": 6
    },
    {
      "type": "ReturnStatement",
      "argument": null,
      "start": 7,
      "end": 14
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 14
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
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  }
]
```
