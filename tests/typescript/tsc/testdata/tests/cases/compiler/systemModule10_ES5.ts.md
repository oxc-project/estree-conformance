__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 11,
            "end": 12
          },
          "importKind": "value",
          "start": 11,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file1",
        "raw": "'file1'",
        "start": 19,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "n2",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 36
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "file2",
          "raw": "'file2'",
          "start": 47,
          "end": 54
        },
        "start": 39,
        "end": 55
      },
      "importKind": "value",
      "start": 27,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          },
          "exportKind": "value",
          "start": 65,
          "end": 66
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 67
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "exportKind": "value",
          "start": 76,
          "end": 82
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 68,
      "end": 83
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "exportKind": "value",
          "start": 92,
          "end": 93
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 84,
      "end": 94
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 110
          },
          "exportKind": "value",
          "start": 103,
          "end": 110
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 95,
      "end": 111
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 122
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 122
          },
          "exportKind": "value",
          "start": 120,
          "end": 122
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 112,
      "end": 123
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 134
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 140
          },
          "exportKind": "value",
          "start": 132,
          "end": 140
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 141
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 141
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
    "value": "n",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 14,
    "end": 18
  },
  {
    "type": "String",
    "value": "'file1'",
    "start": 19,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 27,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 34,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "'file2'",
    "start": 47,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 78,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 120,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 135,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "n3",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  }
]
```
