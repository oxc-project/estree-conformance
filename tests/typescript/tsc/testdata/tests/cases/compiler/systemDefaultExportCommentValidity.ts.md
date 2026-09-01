__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Home",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 13,
            "end": 15
          },
          "definite": false,
          "start": 6,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Home",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 36
      },
      "exportKind": "value",
      "start": 17,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 129
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Home",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 17,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 24,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Home",
    "start": 32,
    "end": 36
  }
]
```
