__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 36,
              "end": 42
            },
            "declare": false,
            "start": 27,
            "end": 43
          }
        ],
        "start": 21,
        "end": 45
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 58
      },
      "start": 47,
      "end": 59
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 87
      },
      "start": 60,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 27,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 67,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 70,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "MyTypes",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
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
            "name": "NS",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "start": 12,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./type1",
        "raw": "'./type1'",
        "start": 25,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 35
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 48
      },
      "start": 37,
      "end": 49
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModuleATypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 82
      },
      "start": 50,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
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
    "value": "*",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 14,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 17,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "'./type1'",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 50,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 57,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 60,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "ModuleATypes",
    "start": 70,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  }
]
```
