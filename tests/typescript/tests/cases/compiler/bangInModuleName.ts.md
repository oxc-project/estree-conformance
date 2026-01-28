__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "http",
        "raw": "\"http\"",
        "start": 15,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 22,
        "end": 25
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "intern/dojo/node!http",
        "raw": "'intern/dojo/node!http'",
        "start": 42,
        "end": 65
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "http",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 83
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "http",
                "raw": "'http'",
                "start": 94,
                "end": 100
              },
              "start": 86,
              "end": 101
            },
            "importKind": "value",
            "start": 72,
            "end": 102
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "http",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 120
            },
            "start": 107,
            "end": 121
          }
        ],
        "start": 66,
        "end": 123
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 27,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 124
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
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"http\"",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 27,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 35,
    "end": 41
  },
  {
    "type": "String",
    "value": "'intern/dojo/node!http'",
    "start": 42,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 72,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "String",
    "value": "'http'",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
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
            "name": "http",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 48
          },
          "start": 39,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "intern/dojo/node!http",
        "raw": "'intern/dojo/node!http'",
        "start": 54,
        "end": 77
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 32,
  "end": 78
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 41,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "http",
    "start": 44,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 49,
    "end": 53
  },
  {
    "type": "String",
    "value": "'intern/dojo/node!http'",
    "start": 54,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  }
]
```
