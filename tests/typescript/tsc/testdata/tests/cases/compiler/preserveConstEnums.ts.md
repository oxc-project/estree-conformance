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
        "start": 11,
        "end": 12
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 27,
              "end": 28
            },
            "computed": false,
            "start": 19,
            "end": 28
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 36
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 44
            },
            "computed": false,
            "start": 30,
            "end": 44
          }
        ],
        "start": 13,
        "end": 46
      },
      "const": true,
      "declare": false,
      "start": 0,
      "end": 46
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 46
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
    "value": "E",
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
    "type": "Identifier",
    "value": "Value",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Value2",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  }
]
```
