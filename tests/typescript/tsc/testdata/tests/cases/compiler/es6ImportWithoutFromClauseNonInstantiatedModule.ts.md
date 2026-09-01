__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 19,
          "end": 22
        },
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 23
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
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "es6ImportWithoutFromClauseNonInstantiatedModule_0",
        "raw": "\"es6ImportWithoutFromClauseNonInstantiatedModule_0\"",
        "start": 7,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
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
    "type": "String",
    "value": "\"es6ImportWithoutFromClauseNonInstantiatedModule_0\"",
    "start": 7,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  }
]
```
