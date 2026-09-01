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
        "name": "Currency",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 19
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Euro",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 28
            },
            "initializer": {
              "type": "Literal",
              "value": "€",
              "raw": "\"\\€\"",
              "start": 31,
              "end": 35
            },
            "computed": false,
            "start": 24,
            "end": 35
          }
        ],
        "start": 20,
        "end": 38
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "currency",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 54
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Currency",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 65
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Euro",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 70
            },
            "optional": false,
            "computed": false,
            "start": 57,
            "end": 70
          },
          "definite": false,
          "start": 46,
          "end": 70
        }
      ],
      "declare": false,
      "start": 40,
      "end": 71
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 71
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
    "type": "Keyword",
    "value": "enum",
    "start": 6,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Currency",
    "start": 11,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Euro",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"\\€\"",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "currency",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Currency",
    "start": 57,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Euro",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  }
]
```
