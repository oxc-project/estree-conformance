__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "of",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 11
          }
        ],
        "declare": false,
        "start": 5,
        "end": 11
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "of",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
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
    "value": "var",
    "start": 5,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 9,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 12,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 15,
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
