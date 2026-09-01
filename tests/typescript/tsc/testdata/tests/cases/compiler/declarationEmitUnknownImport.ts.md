__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeNonExistingName",
        "optional": false,
        "typeAnnotation": null,
        "start": 13,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 44
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 44
          },
          "exportKind": "value",
          "start": 41,
          "end": 44
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "SomeNonExistingName",
    "start": 13,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  }
]
```
