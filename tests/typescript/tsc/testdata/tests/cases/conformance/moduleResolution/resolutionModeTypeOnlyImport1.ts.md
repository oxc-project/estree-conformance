__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "module",
                    "raw": "\"module\"",
                    "start": 24,
                    "end": 32
                  },
                  "start": 24,
                  "end": 32
                },
                "start": 22,
                "end": 32
              },
              "start": 21,
              "end": 32
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 32
          }
        ],
        "declare": true,
        "start": 7,
        "end": 33
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
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
    "value": "\"module\"",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "script",
                    "raw": "\"script\"",
                    "start": 24,
                    "end": 32
                  },
                  "start": 24,
                  "end": 32
                },
                "start": 22,
                "end": 32
              },
              "start": 21,
              "end": 32
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 32
          }
        ],
        "declare": true,
        "start": 7,
        "end": 33
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
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
    "value": "\"script\"",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 26
          },
          "importKind": "value",
          "start": 14,
          "end": 26
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 34,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 40
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 66
          },
          "importKind": "value",
          "start": 55,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 74,
        "end": 79
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 87,
            "end": 104
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 106,
            "end": 114
          },
          "start": 87,
          "end": 114
        }
      ],
      "importKind": "type",
      "start": 41,
      "end": 117
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 144
          },
          "importKind": "value",
          "start": 132,
          "end": 144
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 152,
        "end": 157
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 165,
            "end": 182
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 184,
            "end": 193
          },
          "start": 165,
          "end": 193
        }
      ],
      "importKind": "type",
      "start": 118,
      "end": 196
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Default",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 210
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Default",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 227
        },
        "typeArguments": null,
        "start": 213,
        "end": 227
      },
      "declare": false,
      "start": 197,
      "end": 228
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Import",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 241
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Import",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 257
        },
        "typeArguments": null,
        "start": 244,
        "end": 257
      },
      "declare": false,
      "start": 229,
      "end": 258
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Require",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 272
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Require",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 289
        },
        "typeArguments": null,
        "start": 275,
        "end": 289
      },
      "declare": false,
      "start": 259,
      "end": 290
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 393
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 411
          },
          "importKind": "value",
          "start": 392,
          "end": 411
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 419,
        "end": 428
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 436,
            "end": 453
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 455,
            "end": 463
          },
          "start": 436,
          "end": 463
        }
      ],
      "importKind": "type",
      "start": 378,
      "end": 466
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 481,
            "end": 482
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 501
          },
          "importKind": "value",
          "start": 481,
          "end": 501
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 509,
        "end": 518
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 526,
            "end": 543
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 545,
            "end": 554
          },
          "start": 526,
          "end": 554
        }
      ],
      "importKind": "type",
      "start": 467,
      "end": 557
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ImportRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 563,
        "end": 578
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportRelative",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 602
        },
        "typeArguments": null,
        "start": 581,
        "end": 602
      },
      "declare": false,
      "start": 558,
      "end": 603
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_RequireRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 625
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequireRelative",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 650
        },
        "typeArguments": null,
        "start": 628,
        "end": 650
      },
      "declare": false,
      "start": 604,
      "end": 651
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
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 672
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 672
          },
          "exportKind": "value",
          "start": 664,
          "end": 672
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 683
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 683
          },
          "exportKind": "value",
          "start": 676,
          "end": 683
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 695
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 687,
            "end": 695
          },
          "exportKind": "value",
          "start": 687,
          "end": 695
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 714
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 714
          },
          "exportKind": "value",
          "start": 699,
          "end": 714
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 718,
            "end": 734
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 718,
            "end": 734
          },
          "exportKind": "value",
          "start": 718,
          "end": 734
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 653,
      "end": 736
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 737
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
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Default",
    "start": 19,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 29,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 41,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
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
    "value": "Import",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 69,
    "end": 73
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 74,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 87,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 106,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 118,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Require",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 147,
    "end": 151
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 152,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 158,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 165,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 184,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 197,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "_Default",
    "start": 202,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 213,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Default",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 229,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "_Import",
    "start": 234,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 244,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Import",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 259,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "_Require",
    "start": 264,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 275,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Require",
    "start": 282,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 378,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "ImportRelative",
    "start": 397,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 414,
    "end": 418
  },
  {
    "type": "String",
    "value": "\"./other\"",
    "start": 419,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 436,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 455,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 467,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 474,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 483,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "RequireRelative",
    "start": 486,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 504,
    "end": 508
  },
  {
    "type": "String",
    "value": "\"./other\"",
    "start": 509,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 526,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 545,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 558,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "_ImportRelative",
    "start": 563,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 581,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "ImportRelative",
    "start": 588,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 604,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "_RequireRelative",
    "start": 609,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 628,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "RequireRelative",
    "start": 635,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "_Default",
    "start": 664,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "_Import",
    "start": 676,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "_Require",
    "start": 687,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "_ImportRelative",
    "start": 699,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "_RequireRelative",
    "start": 718,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 735,
    "end": 736
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": "other",
              "raw": "\"other\"",
              "start": 17,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
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
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "String",
    "value": "\"other\"",
    "start": 17,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  }
]
```
