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
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./requireOfAnEmptyFile1_b",
          "raw": "'./requireOfAnEmptyFile1_b'",
          "start": 45,
          "end": 72
        },
        "start": 37,
        "end": 73
      },
      "importKind": "value",
      "start": 25,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 25,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 25,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "'./requireOfAnEmptyFile1_b'",
    "start": 45,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 0
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```
