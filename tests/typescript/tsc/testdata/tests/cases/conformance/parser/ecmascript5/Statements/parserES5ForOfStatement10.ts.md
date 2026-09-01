__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": null,
            "definite": false,
            "start": 11,
            "end": 12
          }
        ],
        "declare": false,
        "start": 5,
        "end": 12
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 17
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 19,
        "end": 22
      },
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 13,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  }
]
```
