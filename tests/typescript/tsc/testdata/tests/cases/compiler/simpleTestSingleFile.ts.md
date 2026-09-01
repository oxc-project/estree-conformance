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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 18,
            "end": 20
          },
          "definite": false,
          "start": 6,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 21
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
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  }
]
```
