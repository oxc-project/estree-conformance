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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "let",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 12
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 12
          }
        ],
        "declare": false,
        "start": 5,
        "end": 12
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 16,
        "end": 18
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 20,
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
    "value": "let",
    "start": 5,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "let",
    "start": 9,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  }
]
```
