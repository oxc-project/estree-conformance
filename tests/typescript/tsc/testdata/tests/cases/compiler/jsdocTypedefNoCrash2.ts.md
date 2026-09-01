__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 15
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 18,
            "end": 19
          },
          "start": 18,
          "end": 19
        },
        "declare": false,
        "start": 7,
        "end": 20
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 20
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 66
            },
            "init": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 69,
              "end": 70
            },
            "definite": false,
            "start": 63,
            "end": 70
          }
        ],
        "declare": false,
        "start": 57,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 71
    }
  ],
  "sourceType": "module",
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
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 69,
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
