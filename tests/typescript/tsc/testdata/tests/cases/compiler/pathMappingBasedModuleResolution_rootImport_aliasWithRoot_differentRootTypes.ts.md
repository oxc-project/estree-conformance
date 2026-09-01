__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 24
        },
        "expression": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
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
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 24
        },
        "expression": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
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
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "/foo",
        "raw": "\"/foo\"",
        "start": 28,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 56
          },
          "importKind": "value",
          "start": 45,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "/bar",
        "raw": "\"/bar\"",
        "start": 64,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 36,
      "end": 71
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 84
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 92
          },
          "importKind": "value",
          "start": 81,
          "end": 92
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:/foo",
        "raw": "\"c:/foo\"",
        "start": 100,
        "end": 108
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 72,
      "end": 109
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 122
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 130
          },
          "importKind": "value",
          "start": 119,
          "end": 130
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:/bar",
        "raw": "\"c:/bar\"",
        "start": 138,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 110,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 160
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 168
          },
          "importKind": "value",
          "start": 157,
          "end": 168
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:\\foo",
        "raw": "\"c:\\\\foo\"",
        "start": 176,
        "end": 185
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 186
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 199
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar3",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "importKind": "value",
          "start": 196,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:\\bar",
        "raw": "\"c:\\\\bar\"",
        "start": 215,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 187,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 238
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 246
          },
          "importKind": "value",
          "start": 235,
          "end": 246
        }
      ],
      "source": {
        "type": "Literal",
        "value": "//server/foo",
        "raw": "\"//server/foo\"",
        "start": 254,
        "end": 268
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 269
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 282
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar4",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 290
          },
          "importKind": "value",
          "start": 279,
          "end": 290
        }
      ],
      "source": {
        "type": "Literal",
        "value": "//server/bar",
        "raw": "\"//server/bar\"",
        "start": 298,
        "end": 312
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 270,
      "end": 313
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 326
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo5",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 334
          },
          "importKind": "value",
          "start": 323,
          "end": 334
        }
      ],
      "source": {
        "type": "Literal",
        "value": "\\\\server\\foo",
        "raw": "\"\\\\\\\\server\\\\foo\"",
        "start": 342,
        "end": 359
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 314,
      "end": 360
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 373
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar5",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 381
          },
          "importKind": "value",
          "start": 370,
          "end": 381
        }
      ],
      "source": {
        "type": "Literal",
        "value": "\\\\server\\bar",
        "raw": "\"\\\\\\\\server\\\\bar\"",
        "start": 389,
        "end": 406
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 361,
      "end": 407
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo6",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 428
          },
          "importKind": "value",
          "start": 417,
          "end": 428
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file:///foo",
        "raw": "\"file:///foo\"",
        "start": 436,
        "end": 449
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 408,
      "end": 450
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 463
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar6",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 471
          },
          "importKind": "value",
          "start": 460,
          "end": 471
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file:///bar",
        "raw": "\"file:///bar\"",
        "start": 479,
        "end": 492
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 451,
      "end": 493
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 506
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo7",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 514
          },
          "importKind": "value",
          "start": 503,
          "end": 514
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://c:/foo",
        "raw": "\"file://c:/foo\"",
        "start": 522,
        "end": 537
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 494,
      "end": 538
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 551
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar7",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 559
          },
          "importKind": "value",
          "start": 548,
          "end": 559
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://c:/bar",
        "raw": "\"file://c:/bar\"",
        "start": 567,
        "end": 582
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 539,
      "end": 583
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 596
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo8",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 604
          },
          "importKind": "value",
          "start": 593,
          "end": 604
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://server/foo",
        "raw": "\"file://server/foo\"",
        "start": 612,
        "end": 631
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 584,
      "end": 632
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 645
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar8",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 653
          },
          "importKind": "value",
          "start": 642,
          "end": 653
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://server/bar",
        "raw": "\"file://server/bar\"",
        "start": 661,
        "end": 680
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 633,
      "end": 681
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 694
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo9",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 702
          },
          "importKind": "value",
          "start": 691,
          "end": 702
        }
      ],
      "source": {
        "type": "Literal",
        "value": "http://server/foo",
        "raw": "\"http://server/foo\"",
        "start": 710,
        "end": 729
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 682,
      "end": 730
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 743
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar9",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 751
          },
          "importKind": "value",
          "start": 740,
          "end": 751
        }
      ],
      "source": {
        "type": "Literal",
        "value": "http://server/bar",
        "raw": "\"http://server/bar\"",
        "start": 759,
        "end": 778
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 731,
      "end": 779
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 780
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
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 13,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
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
    "value": "\"/foo\"",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 49,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 59,
    "end": 63
  },
  {
    "type": "String",
    "value": "\"/bar\"",
    "start": 64,
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
    "value": "import",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 85,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
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
    "value": "\"c:/foo\"",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
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
    "value": "bar",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 123,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 126,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 133,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"c:/bar\"",
    "start": 138,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 171,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"c:\\\\foo\"",
    "start": 176,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 196,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 200,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 210,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"c:\\\\bar\"",
    "start": 215,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 239,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 249,
    "end": 253
  },
  {
    "type": "String",
    "value": "\"//server/foo\"",
    "start": 254,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 283,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "bar4",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 293,
    "end": 297
  },
  {
    "type": "String",
    "value": "\"//server/bar\"",
    "start": 298,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 327,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 337,
    "end": 341
  },
  {
    "type": "String",
    "value": "\"\\\\\\\\server\\\\foo\"",
    "start": 342,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 374,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "bar5",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 384,
    "end": 388
  },
  {
    "type": "String",
    "value": "\"\\\\\\\\server\\\\bar\"",
    "start": 389,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 417,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 421,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 431,
    "end": 435
  },
  {
    "type": "String",
    "value": "\"file:///foo\"",
    "start": 436,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 464,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "bar6",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 474,
    "end": 478
  },
  {
    "type": "String",
    "value": "\"file:///bar\"",
    "start": 479,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 494,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 503,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 507,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 510,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 517,
    "end": 521
  },
  {
    "type": "String",
    "value": "\"file://c:/foo\"",
    "start": 522,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 539,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 552,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "bar7",
    "start": 555,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 562,
    "end": 566
  },
  {
    "type": "String",
    "value": "\"file://c:/bar\"",
    "start": 567,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 597,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 600,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 607,
    "end": 611
  },
  {
    "type": "String",
    "value": "\"file://server/foo\"",
    "start": 612,
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
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 646,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "bar8",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 656,
    "end": 660
  },
  {
    "type": "String",
    "value": "\"file://server/bar\"",
    "start": 661,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 691,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 695,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 698,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 705,
    "end": 709
  },
  {
    "type": "String",
    "value": "\"http://server/foo\"",
    "start": 710,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 740,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 744,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "bar9",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 754,
    "end": 758
  },
  {
    "type": "String",
    "value": "\"http://server/bar\"",
    "start": 759,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  }
]
```
