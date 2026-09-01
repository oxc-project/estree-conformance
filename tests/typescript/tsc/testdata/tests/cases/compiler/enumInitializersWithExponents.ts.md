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
        "start": 42,
        "end": 43
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
              "start": 50,
              "end": 51
            },
            "initializer": {
              "type": "Literal",
              "value": 1000,
              "raw": "1e3",
              "start": 54,
              "end": 57
            },
            "computed": false,
            "start": 50,
            "end": 57
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "initializer": {
              "type": "Literal",
              "value": 1e+25,
              "raw": "1e25",
              "start": 73,
              "end": 77
            },
            "computed": false,
            "start": 69,
            "end": 77
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "initializer": {
              "type": "Literal",
              "value": 0.001,
              "raw": "1e-3",
              "start": 93,
              "end": 97
            },
            "computed": false,
            "start": 89,
            "end": 97
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 113
            },
            "initializer": {
              "type": "Literal",
              "value": 1e-9,
              "raw": "1e-9",
              "start": 116,
              "end": 120
            },
            "computed": false,
            "start": 112,
            "end": 120
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1e0",
              "start": 139,
              "end": 142
            },
            "computed": false,
            "start": 135,
            "end": 142
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "initializer": {
              "type": "Literal",
              "value": 1e+25,
              "raw": "1e+25",
              "start": 158,
              "end": 163
            },
            "computed": false,
            "start": 154,
            "end": 163
          }
        ],
        "start": 44,
        "end": 171
      },
      "const": false,
      "declare": true,
      "start": 29,
      "end": 171
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 171
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 29,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 37,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Numeric",
    "value": "1e3",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Numeric",
    "value": "1e25",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "1e-3",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Numeric",
    "value": "1e-9",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Numeric",
    "value": "1e0",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "1e+25",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  }
]
```
