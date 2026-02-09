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
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 33,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
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
    "value": "ImportInterface",
    "start": 17,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  }
]
```
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
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 34,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
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
    "value": "RequireInterface",
    "start": 17,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
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
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 48
          },
          "importKind": "value",
          "start": 32,
          "end": 48
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 56,
        "end": 61
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 69,
            "end": 86
          },
          "value": {
            "type": "Literal",
            "value": "foobar",
            "raw": "\"foobar\"",
            "start": 88,
            "end": 96
          },
          "start": 69,
          "end": 96
        }
      ],
      "importKind": "type",
      "start": 18,
      "end": 99
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 141
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 141
          },
          "importKind": "value",
          "start": 126,
          "end": 141
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 149,
        "end": 154
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 162,
            "end": 179
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 181,
            "end": 189
          },
          "start": 162,
          "end": 189
        }
      ],
      "importKind": "value",
      "start": 117,
      "end": 192
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 251
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Req",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 258
          },
          "importKind": "type",
          "start": 230,
          "end": 258
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 276
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Req2",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 284
          },
          "importKind": "value",
          "start": 260,
          "end": 284
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 291,
        "end": 296
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 304,
            "end": 321
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 323,
            "end": 332
          },
          "start": 304,
          "end": 332
        }
      ],
      "importKind": "value",
      "start": 222,
      "end": 335
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 354,
          "end": 368
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "RequireInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 393
            },
            "typeArguments": null,
            "start": 377,
            "end": 393
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 410
            },
            "typeArguments": null,
            "start": 395,
            "end": 410
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 411,
          "end": 413
        },
        "declare": false,
        "start": 344,
        "end": 413
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 337,
      "end": 413
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 18,
  "end": 416
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 32,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 51,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 56,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 69,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "String",
    "value": "\"foobar\"",
    "start": 88,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 126,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 144,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 149,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 162,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 181,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 230,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 235,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 252,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Req",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 260,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "Req2",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 286,
    "end": 290
  },
  {
    "type": "String",
    "value": "\"pkg\"",
    "start": 291,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 304,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 323,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 337,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 344,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "LocalInterface",
    "start": 354,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 369,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "RequireInterface",
    "start": 377,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "ImportInterface",
    "start": 395,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  }
]
```
