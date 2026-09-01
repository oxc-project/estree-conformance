__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "oops",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "start": 21,
            "end": 33
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 36,
            "end": 39
          },
          "start": 34,
          "end": 39
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
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
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "oops",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 21,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 36,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
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
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 24,
                "end": 26
              },
              "start": 22,
              "end": 26
            },
            "start": 14,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 26
        }
      ],
      "declare": true,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 51
      },
      "exportKind": "value",
      "start": 28,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 28,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 35,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 43,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
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
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "not.json",
        "raw": "\"not.json\"",
        "start": 21,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moreOops",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 54
          },
          "start": 46,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "actually-json",
        "raw": "\"actually-json\"",
        "start": 60,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 76
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typed",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 110
          },
          "start": 105,
          "end": 110
        }
      ],
      "source": {
        "type": "Literal",
        "value": "actually-json/typed",
        "raw": "\"actually-json/typed\"",
        "start": 116,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 98,
      "end": 138
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 174
          },
          "start": 168,
          "end": 174
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 180,
        "end": 195
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 209,
            "end": 215
          },
          "start": 203,
          "end": 215
        }
      ],
      "importKind": "value",
      "start": 161,
      "end": 218
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 241
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config1",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 252
          },
          "importKind": "value",
          "start": 234,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 260,
        "end": 275
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 287
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 289,
            "end": 295
          },
          "start": 283,
          "end": 295
        }
      ],
      "importKind": "value",
      "start": 225,
      "end": 298
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 319
          },
          "start": 312,
          "end": 319
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 325,
        "end": 340
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 305,
      "end": 341
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 400
          },
          "start": 389,
          "end": 400
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 406,
        "end": 421
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 377,
      "end": 422
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2Type2",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 464
          },
          "start": 452,
          "end": 464
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 470,
        "end": 485
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 497
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 499,
            "end": 505
          },
          "start": 493,
          "end": 505
        }
      ],
      "importKind": "type",
      "start": 440,
      "end": 508
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 586
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 586
          },
          "importKind": "value",
          "start": 579,
          "end": 586
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 594,
        "end": 609
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 621
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 623,
            "end": 629
          },
          "start": 617,
          "end": 629
        }
      ],
      "importKind": "value",
      "start": 570,
      "end": 632
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 675
          },
          "start": 663,
          "end": 675
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 681,
        "end": 696
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 704,
            "end": 708
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 710,
            "end": 716
          },
          "start": 704,
          "end": 716
        }
      ],
      "importKind": "value",
      "start": 656,
      "end": 719
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 727
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null,
          "start": 728,
          "end": 735
        },
        "optional": false,
        "computed": false,
        "start": 720,
        "end": 735
      },
      "directive": null,
      "start": 720,
      "end": 736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 753
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 754,
          "end": 761
        },
        "optional": false,
        "computed": false,
        "start": 746,
        "end": 761
      },
      "directive": null,
      "start": 746,
      "end": 762
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 769
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "oops",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20
  },
  {
    "type": "String",
    "value": "\"not.json\"",
    "start": 21,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "moreOops",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 55,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"actually-json\"",
    "start": 60,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 98,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "typed",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 111,
    "end": 115
  },
  {
    "type": "String",
    "value": "\"actually-json/typed\"",
    "start": 116,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 161,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "config",
    "start": 168,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 175,
    "end": 179
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 180,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 234,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 242,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "config1",
    "start": 245,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 255,
    "end": 259
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 260,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 305,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "config2",
    "start": 312,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 320,
    "end": 324
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 325,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 384,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "config2Type",
    "start": 389,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 401,
    "end": 405
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 406,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 440,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 447,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "config2Type2",
    "start": 452,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 465,
    "end": 469
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 470,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 493,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 579,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 589,
    "end": 593
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 594,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 610,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 623,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 656,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 665,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 668,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 676,
    "end": 680
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 681,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 710,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 720,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 728,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 746,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 754,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
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
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 19,
        "end": 34
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 48,
            "end": 54
          },
          "start": 42,
          "end": 54
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 57
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 81
          },
          "start": 74,
          "end": 81
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 87,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 103
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "importKind": "value",
          "start": 119,
          "end": 126
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 134,
        "end": 149
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 110,
      "end": 150
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "start": 164,
          "end": 176
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 182,
        "end": 197
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 157,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 206
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 214
        },
        "optional": false,
        "computed": false,
        "start": 199,
        "end": 214
      },
      "directive": null,
      "start": 199,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 229
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 237
        },
        "optional": false,
        "computed": false,
        "start": 222,
        "end": 237
      },
      "directive": null,
      "start": 222,
      "end": 238
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 247
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
    "value": "config",
    "start": 7,
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
    "value": "\"./config.json\"",
    "start": 19,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 35,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "config2",
    "start": 74,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 82,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 87,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 129,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 134,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 166,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 169,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 177,
    "end": 181
  },
  {
    "type": "String",
    "value": "\"./config.json\"",
    "start": 182,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 199,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "version",
    "start": 207,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "config3",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 230,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  }
]
```
