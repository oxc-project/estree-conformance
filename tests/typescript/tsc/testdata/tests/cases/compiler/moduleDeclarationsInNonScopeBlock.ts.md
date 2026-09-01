__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExportNamedDeclaration",
          "declaration": null,
          "specifiers": [
            {
              "type": "ExportSpecifier",
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 16
              },
              "exported": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 16
              },
              "exportKind": "value",
              "start": 15,
              "end": 16
            }
          ],
          "source": {
            "type": "Literal",
            "value": "exportNamed",
            "raw": "\"exportNamed\"",
            "start": 24,
            "end": 37
          },
          "exportKind": "value",
          "attributes": [],
          "start": 6,
          "end": 38
        },
        {
          "type": "ExportAllDeclaration",
          "exported": null,
          "source": {
            "type": "Literal",
            "value": "exportStar",
            "raw": "\"exportStar\"",
            "start": 57,
            "end": 69
          },
          "attributes": [],
          "exportKind": "value",
          "start": 43,
          "end": 70
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [
            {
              "type": "ImportSpecifier",
              "imported": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "local": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "importKind": "value",
              "start": 84,
              "end": 85
            }
          ],
          "source": {
            "type": "Literal",
            "value": "importNamed",
            "raw": "\"importNamed\"",
            "start": 93,
            "end": 106
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 75,
          "end": 107
        },
        {
          "type": "TSImportEqualsDeclaration",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "moduleReference": {
            "type": "TSExternalModuleReference",
            "expression": {
              "type": "Literal",
              "value": "importEquals",
              "raw": "\"importEquals\"",
              "start": 131,
              "end": 145
            },
            "start": 123,
            "end": 146
          },
          "importKind": "value",
          "start": 112,
          "end": 147
        },
        {
          "type": "ImportDeclaration",
          "specifiers": [],
          "source": {
            "type": "Literal",
            "value": "sideEffect",
            "raw": "\"sideEffect\"",
            "start": 159,
            "end": 171
          },
          "phase": null,
          "attributes": [],
          "importKind": "value",
          "start": 152,
          "end": 172
        }
      ],
      "start": 0,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 19,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"exportNamed\"",
    "start": 24,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 52,
    "end": 56
  },
  {
    "type": "String",
    "value": "\"exportStar\"",
    "start": 57,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 88,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"importNamed\"",
    "start": 93,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 112,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"importEquals\"",
    "start": 131,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 152,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"sideEffect\"",
    "start": 159,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  }
]
```
