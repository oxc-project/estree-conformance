__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "esm",
                  "raw": "\"esm\"",
                  "start": 24,
                  "end": 29
                },
                "start": 24,
                "end": 29
              },
              "start": 22,
              "end": 29
            },
            "start": 14,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 29
        }
      ],
      "declare": true,
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 54
      },
      "exportKind": "value",
      "start": 31,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
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
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"esm\"",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 38,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "cjs",
                  "raw": "\"cjs\"",
                  "start": 24,
                  "end": 29
                },
                "start": 24,
                "end": 29
              },
              "start": 22,
              "end": 29
            },
            "start": 14,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 29
        }
      ],
      "declare": true,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "_exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 48
      },
      "start": 31,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
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
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "_exports",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "\"cjs\"",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "_exports",
    "start": 40,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pkgRequire",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 22
          },
          "start": 12,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 28,
        "end": 33
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 41,
            "end": 58
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 60,
            "end": 69
          },
          "start": 41,
          "end": 69
        }
      ],
      "importKind": "type",
      "start": 0,
      "end": 72
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pkgImport",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 94
          },
          "start": 85,
          "end": 94
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 100,
        "end": 105
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 113,
            "end": 130
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 132,
            "end": 140
          },
          "start": 113,
          "end": 140
        }
      ],
      "importKind": "type",
      "start": 73,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "pkgRequire",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 154
      },
      "directive": null,
      "start": 144,
      "end": 155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "pkgImport",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 165
      },
      "directive": null,
      "start": 156,
      "end": 166
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 166
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
    "type": "Identifier",
    "value": "pkgRequire",
    "start": 12,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 23,
    "end": 27
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 28,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 41,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 60,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 73,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 80,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "pkgImport",
    "start": 85,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 95,
    "end": 99
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 100,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 113,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 132,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "pkgRequire",
    "start": 144,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "pkgImport",
    "start": 156,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  }
]
```
