__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CodeGenTarget",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ES3",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 43
              },
              "initializer": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 46,
                "end": 47
              },
              "computed": false,
              "start": 40,
              "end": 47
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ES5",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 60
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 63,
                "end": 64
              },
              "computed": false,
              "start": 57,
              "end": 64
            }
          ],
          "start": 30,
          "end": 71
        },
        "const": false,
        "declare": false,
        "start": 11,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4,
      "end": 71
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 4,
  "end": 71
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 4,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 11,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "CodeGenTarget",
    "start": 16,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "ES3",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "ES5",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  }
]
```
