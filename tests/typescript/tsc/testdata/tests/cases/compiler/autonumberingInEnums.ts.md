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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 19,
              "end": 20
            },
            "computed": false,
            "start": 15,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 32
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "initializer": null,
            "computed": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 33,
        "end": 62
      },
      "const": false,
      "declare": false,
      "start": 24,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 62
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
    "value": "Foo",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 24,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  }
]
```
