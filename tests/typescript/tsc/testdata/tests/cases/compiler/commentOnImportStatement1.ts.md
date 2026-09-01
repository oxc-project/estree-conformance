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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 27
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo",
          "raw": "'./foo'",
          "start": 38,
          "end": 45
        },
        "start": 30,
        "end": 46
      },
      "importKind": "value",
      "start": 17,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 47
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 17,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "'./foo'",
    "start": 38,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  }
]
```
