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
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "initializer": {
              "type": "Literal",
              "value": 4.23,
              "raw": "4.23",
              "start": 34,
              "end": 38
            },
            "computed": false,
            "start": 30,
            "end": 38
          }
        ],
        "start": 20,
        "end": 44
      },
      "const": false,
      "declare": true,
      "start": 4,
      "end": 44
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 110
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 125,
                "end": 130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 125,
              "end": 137
            },
            "computed": false,
            "start": 121,
            "end": 137
          }
        ],
        "start": 111,
        "end": 143
      },
      "const": false,
      "declare": true,
      "start": 95,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 143
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 12,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 17,
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
    "value": "y",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "4.23",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 95,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  }
]
```
