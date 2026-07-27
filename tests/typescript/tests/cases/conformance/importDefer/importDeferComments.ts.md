__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 11
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "aNs",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "start": 31,
          "end": 51
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a",
        "raw": "\"a\"",
        "start": 69,
        "end": 72
      },
      "phase": "defer",
      "attributes": [],
      "importKind": "value",
      "start": 6,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 6,
  "end": 79
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 6,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "defer",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 39,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "aNs",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  }
]
```
