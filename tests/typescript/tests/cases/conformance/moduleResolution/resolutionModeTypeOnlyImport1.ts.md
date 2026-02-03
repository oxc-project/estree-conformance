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
  "sourceType": "commonjs",
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
            "start": 89,
            "end": 106
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 108,
            "end": 116
          },
          "start": 89,
          "end": 116
        }
      ],
      "importKind": "type",
      "start": 41,
      "end": 119
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
            "start": 134,
            "end": 135
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 146
          },
          "importKind": "value",
          "start": 134,
          "end": 146
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 154,
        "end": 159
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 169,
            "end": 186
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 188,
            "end": 197
          },
          "start": 169,
          "end": 197
        }
      ],
      "importKind": "type",
      "start": 120,
      "end": 200
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Default",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 214
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
          "start": 224,
          "end": 231
        },
        "typeArguments": null,
        "start": 217,
        "end": 231
      },
      "declare": false,
      "start": 201,
      "end": 232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Import",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 245
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
          "start": 255,
          "end": 261
        },
        "typeArguments": null,
        "start": 248,
        "end": 261
      },
      "declare": false,
      "start": 233,
      "end": 262
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Require",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 276
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
          "start": 286,
          "end": 293
        },
        "typeArguments": null,
        "start": 279,
        "end": 293
      },
      "declare": false,
      "start": 263,
      "end": 294
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
            "start": 396,
            "end": 397
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 415
          },
          "importKind": "value",
          "start": 396,
          "end": 415
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 423,
        "end": 432
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 442,
            "end": 459
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 461,
            "end": 469
          },
          "start": 442,
          "end": 469
        }
      ],
      "importKind": "type",
      "start": 382,
      "end": 472
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
            "start": 487,
            "end": 488
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 507
          },
          "importKind": "value",
          "start": 487,
          "end": 507
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 515,
        "end": 524
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 534,
            "end": 551
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 553,
            "end": 562
          },
          "start": 534,
          "end": 562
        }
      ],
      "importKind": "type",
      "start": 473,
      "end": 565
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ImportRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 586
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
          "start": 596,
          "end": 610
        },
        "typeArguments": null,
        "start": 589,
        "end": 610
      },
      "declare": false,
      "start": 566,
      "end": 611
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_RequireRelative",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 633
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
          "start": 643,
          "end": 658
        },
        "typeArguments": null,
        "start": 636,
        "end": 658
      },
      "declare": false,
      "start": 612,
      "end": 659
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
            "start": 672,
            "end": 680
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Default",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 680
          },
          "exportKind": "value",
          "start": 672,
          "end": 680
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 691
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Import",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 691
          },
          "exportKind": "value",
          "start": 684,
          "end": 691
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 703
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Require",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 703
          },
          "exportKind": "value",
          "start": 695,
          "end": 703
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 707,
            "end": 722
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ImportRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 707,
            "end": 722
          },
          "exportKind": "value",
          "start": 707,
          "end": 722
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 742
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "_RequireRelative",
            "optional": false,
            "typeAnnotation": null,
            "start": 726,
            "end": 742
          },
          "exportKind": "value",
          "start": 726,
          "end": 742
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 661,
      "end": 744
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 745
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
    "type": "Identifier",
    "value": "assert",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 89,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 108,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 120,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 136,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Require",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 149,
    "end": 153
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 169,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 188,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 201,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "_Default",
    "start": 206,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 217,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Default",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 233,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "_Import",
    "start": 238,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 248,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Import",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "_Require",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 279,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "Require",
    "start": 286,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 382,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 398,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "ImportRelative",
    "start": 401,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 418,
    "end": 422
  },
  {
    "type": "String",
    "value": "\"./other\"",
    "start": 423,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 433,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 440,
    "end": 441
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 442,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "String",
    "value": "\"import\"",
    "start": 461,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 473,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 489,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "RequireRelative",
    "start": 492,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 510,
    "end": 514
  },
  {
    "type": "String",
    "value": "\"./other\"",
    "start": 515,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533
  },
  {
    "type": "String",
    "value": "\"resolution-mode\"",
    "start": 534,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "String",
    "value": "\"require\"",
    "start": 553,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 566,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "_ImportRelative",
    "start": 571,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 589,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "ImportRelative",
    "start": 596,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 612,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "_RequireRelative",
    "start": 617,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 636,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "RequireRelative",
    "start": 643,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "_Default",
    "start": 672,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "_Import",
    "start": 684,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "_Require",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "_ImportRelative",
    "start": 707,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "_RequireRelative",
    "start": 726,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744
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
