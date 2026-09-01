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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 14,
        "end": 19
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 20
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "importKind": "value",
          "start": 30,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 38,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 22,
      "end": 44
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "start": 53,
          "end": 59
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 65,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 46,
      "end": 71
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "exportKind": "value",
          "start": 81,
          "end": 82
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 73,
      "end": 84
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
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "exportKind": "value",
          "start": 94,
          "end": 95
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 86,
      "end": 97
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "exportKind": "value",
          "start": 107,
          "end": 108
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 99,
      "end": 110
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 126,
        "end": 131
      },
      "attributes": [],
      "exportKind": "value",
      "start": 112,
      "end": 132
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 143
          },
          "exportKind": "value",
          "start": 142,
          "end": 143
        }
      ],
      "source": {
        "type": "Literal",
        "value": "mod",
        "raw": "\"mod\"",
        "start": 150,
        "end": 155
      },
      "exportKind": "value",
      "attributes": [],
      "start": 134,
      "end": 155
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 173
      },
      "exportKind": "value",
      "start": 157,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 174
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
    "value": "d",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 9,
    "end": 13
  },
  {
    "type": "String",
    "value": "\"mod\"",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 33,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"mod\"",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 55,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"mod\"",
    "start": 65,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 121,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"mod\"",
    "start": 126,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 145,
    "end": 149
  },
  {
    "type": "String",
    "value": "\"mod\"",
    "start": 150,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 157,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 164,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  }
]
```
