__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 15,
              "end": 17
            },
            "definite": false,
            "start": 11,
            "end": 17
          }
        ],
        "declare": false,
        "start": 7,
        "end": 18
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 18
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "definite": false,
            "start": 30,
            "end": 35
          }
        ],
        "declare": false,
        "start": 26,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "definite": false,
            "start": 48,
            "end": 53
          }
        ],
        "declare": false,
        "start": 44,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 54
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 70,
        "end": 72
      },
      "exportKind": "value",
      "start": 55,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
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
    "value": "var",
    "start": 7,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 15,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 26,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 55,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
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
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 22
          },
          "start": 7,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
        "start": 33,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 86
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 109
          },
          "start": 94,
          "end": 109
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "importKind": "value",
          "start": 113,
          "end": 114
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
        "start": 122,
        "end": 174
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 87,
      "end": 175
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "start": 180,
            "end": 190
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "definite": false,
          "start": 180,
          "end": 194
        }
      ],
      "declare": false,
      "start": 176,
      "end": 195
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 218
          },
          "start": 203,
          "end": 218
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 223
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 228
          },
          "importKind": "value",
          "start": 222,
          "end": 228
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
        "start": 236,
        "end": 288
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 196,
      "end": 289
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
              },
              "start": 296,
              "end": 304
            },
            "start": 294,
            "end": 304
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 308
          },
          "definite": false,
          "start": 294,
          "end": 308
        }
      ],
      "declare": false,
      "start": 290,
      "end": 309
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 332
          },
          "start": 317,
          "end": 332
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 337
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 337
          },
          "importKind": "value",
          "start": 336,
          "end": 337
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 339,
            "end": 340
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 344,
            "end": 345
          },
          "importKind": "value",
          "start": 339,
          "end": 345
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
        "start": 353,
        "end": 405
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 310,
      "end": 406
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 415,
                "end": 421
              },
              "start": 413,
              "end": 421
            },
            "start": 411,
            "end": 421
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 425
          },
          "definite": false,
          "start": 411,
          "end": 425
        }
      ],
      "declare": false,
      "start": 407,
      "end": 426
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 435,
                "end": 441
              },
              "start": 433,
              "end": 441
            },
            "start": 431,
            "end": 441
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 445
          },
          "definite": false,
          "start": 431,
          "end": 445
        }
      ],
      "declare": false,
      "start": 427,
      "end": 446
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 469
          },
          "start": 454,
          "end": 469
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 474
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 479
          },
          "importKind": "value",
          "start": 473,
          "end": 479
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
        "start": 489,
        "end": 541
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 447,
      "end": 542
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 551,
                "end": 557
              },
              "start": 549,
              "end": 557
            },
            "start": 547,
            "end": 557
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 561
          },
          "definite": false,
          "start": 547,
          "end": 561
        }
      ],
      "declare": false,
      "start": 543,
      "end": 562
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 585
          },
          "start": 570,
          "end": 585
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 590
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 590
          },
          "importKind": "value",
          "start": 589,
          "end": 590
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
        "start": 600,
        "end": 652
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 563,
      "end": 653
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 662,
                "end": 668
              },
              "start": 660,
              "end": 668
            },
            "start": 658,
            "end": 668
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 672
          },
          "definite": false,
          "start": 658,
          "end": 672
        }
      ],
      "declare": false,
      "start": 654,
      "end": 673
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 673
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
    "value": "defaultBinding1",
    "start": 7,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 28,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
    "start": 33,
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
    "value": "defaultBinding2",
    "start": 94,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 117,
    "end": 121
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
    "start": 122,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 184,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 196,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "defaultBinding3",
    "start": 203,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 224,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 231,
    "end": 235
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
    "start": 236,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 310,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "defaultBinding4",
    "start": 317,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 341,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 348,
    "end": 352
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
    "start": 353,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 447,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "defaultBinding5",
    "start": 454,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 475,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 484,
    "end": 488
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
    "start": 489,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 543,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 551,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 563,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "defaultBinding6",
    "start": 570,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 595,
    "end": 599
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport_0\"",
    "start": 600,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 654,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 658,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  }
]
```
