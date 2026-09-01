__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 13,
        "end": 14
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 23,
                "end": 24
              },
              "prefix": true,
              "start": 22,
              "end": 24
            },
            "computed": false,
            "start": 18,
            "end": 24
          }
        ],
        "start": 15,
        "end": 38
      },
      "const": false,
      "declare": true,
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 8,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  }
]
```
