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
          "name": "A",
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
          "end": 21
        },
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
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
    "value": "A",
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
    "start": 20,
    "end": 21
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "importKind": "value",
          "start": 14,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Enum",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 47
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 88
              },
              "initializer": null,
              "computed": false,
              "start": 79,
              "end": 88
            }
          ],
          "start": 48,
          "end": 91
        },
        "const": false,
        "declare": false,
        "start": 38,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 91
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
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
    "value": "A",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 38,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "Enum",
    "start": 43,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "EnumValue",
    "start": 79,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  }
]
```
