__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "render",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 22
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 26,
            "end": 30
          },
          "start": 24,
          "end": 30
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 31
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
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
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Library",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 32
          },
          "importKind": "value",
          "start": 14,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./library",
        "raw": "\"./library\"",
        "start": 40,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LibraryType",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 69
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Library",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 86
        },
        "typeArguments": null,
        "start": 72,
        "end": 86
      },
      "declare": false,
      "start": 53,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 87
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
    "value": "type",
    "start": 7,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 14,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 22,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Library",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 35,
    "end": 39
  },
  {
    "type": "String",
    "value": "\"./library\"",
    "start": 40,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "LibraryType",
    "start": 58,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Library",
    "start": 79,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  }
]
```
