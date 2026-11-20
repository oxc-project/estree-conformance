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
        "name": "ts",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript",
          "raw": "\"typescript\"",
          "start": 20,
          "end": 32
        },
        "start": 12,
        "end": 33
      },
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tsInternal",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 52
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "typescript-internal",
          "raw": "\"typescript-internal\"",
          "start": 63,
          "end": 84
        },
        "start": 55,
        "end": 85
      },
      "importKind": "value",
      "start": 35,
      "end": 86
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tsserverlibrary",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 109
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "tsserverlibrary",
          "raw": "\"tsserverlibrary\"",
          "start": 120,
          "end": 137
        },
        "start": 112,
        "end": 138
      },
      "importKind": "value",
      "start": 87,
      "end": 139
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tsserverlibraryInternal",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 170
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "tsserverlibrary-internal",
          "raw": "\"tsserverlibrary-internal\"",
          "start": 181,
          "end": 207
        },
        "start": 173,
        "end": 208
      },
      "importKind": "value",
      "start": 140,
      "end": 209
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 209
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
    "value": "ts",
    "start": 7,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"typescript\"",
    "start": 20,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "tsInternal",
    "start": 42,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"typescript-internal\"",
    "start": 63,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "tsserverlibrary",
    "start": 94,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 119,
    "end": 120
  },
  {
    "type": "String",
    "value": "\"tsserverlibrary\"",
    "start": 120,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "tsserverlibraryInternal",
    "start": 147,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "String",
    "value": "\"tsserverlibrary-internal\"",
    "start": 181,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  }
]
```
