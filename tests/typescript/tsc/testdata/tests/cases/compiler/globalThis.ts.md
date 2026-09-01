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
            "name": "__e",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Math",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 14
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "optional": false,
            "computed": false,
            "start": 10,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 55
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
    "value": "__e",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  }
]
```
