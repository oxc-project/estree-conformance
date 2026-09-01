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
            "name": "isArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 97
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 105
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
            },
            "optional": false,
            "computed": false,
            "start": 100,
            "end": 113
          },
          "definite": false,
          "start": 90,
          "end": 113
        }
      ],
      "declare": false,
      "start": 86,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 86,
  "end": 114
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 86,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 100,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  }
]
```
