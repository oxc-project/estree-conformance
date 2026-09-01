__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "EmptyStatement",
      "start": 0,
      "end": 1
    },
    {
      "type": "EmptyStatement",
      "start": 2,
      "end": 3
    },
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
            "start": 8,
            "end": 9
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 12,
            "end": 13
          },
          "definite": false,
          "start": 8,
          "end": 13
        }
      ],
      "declare": false,
      "start": 4,
      "end": 14
    },
    {
      "type": "EmptyStatement",
      "start": 15,
      "end": 16
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 17
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": ";",
    "start": 0,
    "end": 1
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2,
    "end": 3
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  }
]
```
