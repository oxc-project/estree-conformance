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
        "start": 214,
        "end": 215
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
              "start": 222,
              "end": 223
            },
            "initializer": null,
            "computed": false,
            "start": 222,
            "end": 223
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 237
            },
            "initializer": null,
            "computed": false,
            "start": 236,
            "end": 237
          }
        ],
        "start": 216,
        "end": 247
      },
      "const": false,
      "declare": true,
      "start": 201,
      "end": 247
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 270
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
              "start": 277,
              "end": 278
            },
            "initializer": null,
            "computed": false,
            "start": 277,
            "end": 278
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 296
            },
            "initializer": null,
            "computed": false,
            "start": 295,
            "end": 296
          }
        ],
        "start": 271,
        "end": 310
      },
      "const": true,
      "declare": true,
      "start": 249,
      "end": 310
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 201,
  "end": 310
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 201,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 209,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 249,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310
  }
]
```
