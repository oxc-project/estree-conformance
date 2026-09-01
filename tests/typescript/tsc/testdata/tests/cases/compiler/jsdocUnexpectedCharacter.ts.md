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
            "name": "UI",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 18
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 21,
            "end": 23
          },
          "definite": false,
          "start": 16,
          "end": 23
        }
      ],
      "declare": false,
      "start": 12,
      "end": 24
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 24
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 12,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "UI",
    "start": 16,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  }
]
```
