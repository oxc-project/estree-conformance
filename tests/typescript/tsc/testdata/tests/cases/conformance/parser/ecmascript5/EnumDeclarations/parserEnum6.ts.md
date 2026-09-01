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
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 11,
              "end": 14
            },
            "initializer": null,
            "computed": false,
            "start": 11,
            "end": 14
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 16,
              "end": 19
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 19
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "C",
              "raw": "\"C\"",
              "start": 21,
              "end": 24
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 24
          }
        ],
        "start": 7,
        "end": 26
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 26
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 11,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 14,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  }
]
```
