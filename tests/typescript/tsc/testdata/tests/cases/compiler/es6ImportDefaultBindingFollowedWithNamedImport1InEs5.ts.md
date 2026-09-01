__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "exportKind": "value",
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 19,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
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
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "start": 33,
        "end": 91
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 92
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 100,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "start": 97,
            "end": 106
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 124
          },
          "definite": false,
          "start": 97,
          "end": 124
        }
      ],
      "declare": false,
      "start": 93,
      "end": 125
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
            "start": 133,
            "end": 148
          },
          "start": 133,
          "end": 148
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "importKind": "value",
          "start": 152,
          "end": 153
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "start": 161,
        "end": 219
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 126,
      "end": 220
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 228,
                "end": 234
              },
              "start": 226,
              "end": 234
            },
            "start": 225,
            "end": 234
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 252
          },
          "definite": false,
          "start": 225,
          "end": 252
        }
      ],
      "declare": false,
      "start": 221,
      "end": 253
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
            "start": 261,
            "end": 276
          },
          "start": 261,
          "end": 276
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 281
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 286
          },
          "importKind": "value",
          "start": 280,
          "end": 286
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "start": 294,
        "end": 352
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 254,
      "end": 353
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 361,
                "end": 367
              },
              "start": 359,
              "end": 367
            },
            "start": 358,
            "end": 367
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 385
          },
          "definite": false,
          "start": 358,
          "end": 385
        }
      ],
      "declare": false,
      "start": 354,
      "end": 386
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
            "start": 394,
            "end": 409
          },
          "start": 394,
          "end": 409
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 414
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 414
          },
          "importKind": "value",
          "start": 413,
          "end": 414
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 417
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 422
          },
          "importKind": "value",
          "start": 416,
          "end": 422
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "start": 430,
        "end": 488
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 387,
      "end": 489
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 497,
                "end": 503
              },
              "start": 495,
              "end": 503
            },
            "start": 494,
            "end": 503
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 521
          },
          "definite": false,
          "start": 494,
          "end": 521
        }
      ],
      "declare": false,
      "start": 490,
      "end": 522
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
            "start": 530,
            "end": 545
          },
          "start": 530,
          "end": 545
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 550
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 554,
            "end": 555
          },
          "importKind": "value",
          "start": 549,
          "end": 555
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "start": 565,
        "end": 623
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 523,
      "end": 624
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 632,
                "end": 638
              },
              "start": 630,
              "end": 638
            },
            "start": 629,
            "end": 638
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 656
          },
          "definite": false,
          "start": 629,
          "end": 656
        }
      ],
      "declare": false,
      "start": 625,
      "end": 657
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
            "start": 665,
            "end": 680
          },
          "start": 665,
          "end": 680
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 685
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 684,
            "end": 685
          },
          "importKind": "value",
          "start": 684,
          "end": 685
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "start": 695,
        "end": 753
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 658,
      "end": 754
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 762,
                "end": 768
              },
              "start": 760,
              "end": 768
            },
            "start": 759,
            "end": 768
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 786
          },
          "definite": false,
          "start": 759,
          "end": 786
        }
      ],
      "declare": false,
      "start": 755,
      "end": 787
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 787
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
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
    "start": 33,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 93,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "defaultBinding1",
    "start": 109,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "defaultBinding2",
    "start": 133,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 156,
    "end": 160
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
    "start": 161,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 221,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "defaultBinding2",
    "start": 237,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 254,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "defaultBinding3",
    "start": 261,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 282,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 289,
    "end": 293
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
    "start": 294,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "defaultBinding3",
    "start": 370,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 387,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "defaultBinding4",
    "start": 394,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 418,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 425,
    "end": 429
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
    "start": 430,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 497,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "defaultBinding4",
    "start": 506,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 523,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "defaultBinding5",
    "start": 530,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 551,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 560,
    "end": 564
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
    "start": 565,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 625,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 632,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "defaultBinding5",
    "start": 641,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 656,
    "end": 657
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 658,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "defaultBinding6",
    "start": 665,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 690,
    "end": 694
  },
  {
    "type": "String",
    "value": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
    "start": 695,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 755,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 762,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "defaultBinding6",
    "start": 771,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787
  }
]
```
