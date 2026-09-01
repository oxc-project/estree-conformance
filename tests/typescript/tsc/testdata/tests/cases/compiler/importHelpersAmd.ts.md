__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 15,
          "end": 18
        },
        "abstract": false,
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
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 19
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 18,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportAllDeclaration",
      "exported": null,
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 39,
        "end": 44
      },
      "attributes": [],
      "exportKind": "value",
      "start": 25,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 70
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 71,
          "end": 74
        },
        "abstract": false,
        "declare": false,
        "start": 53,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 75
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
    "value": "A",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 34,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"./a\"",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 53,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 61,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
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
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__extends",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 33
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 45
                },
                "typeArguments": null,
                "start": 37,
                "end": 45
              },
              "start": 35,
              "end": 45
            },
            "start": 34,
            "end": 45
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 58
                },
                "typeArguments": null,
                "start": 50,
                "end": 58
              },
              "start": 48,
              "end": 58
            },
            "start": 47,
            "end": 58
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 61,
            "end": 65
          },
          "start": 59,
          "end": 65
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__assign",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 99
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 103,
                "end": 106
              },
              "start": 101,
              "end": 106
            },
            "start": 100,
            "end": 106
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "sources",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 118
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 120,
                  "end": 123
                },
                "start": 120,
                "end": 125
              },
              "start": 118,
              "end": 125
            },
            "value": null,
            "start": 108,
            "end": 125
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 128,
            "end": 131
          },
          "start": 126,
          "end": 131
        },
        "body": null,
        "expression": false,
        "start": 74,
        "end": 132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 67,
      "end": 132
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__rest",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 163
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 167,
                "end": 170
              },
              "start": 165,
              "end": 170
            },
            "start": 164,
            "end": 170
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "propertyNames",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 187,
                  "end": 193
                },
                "start": 187,
                "end": 195
              },
              "start": 185,
              "end": 195
            },
            "start": 172,
            "end": 195
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 198,
            "end": 201
          },
          "start": 196,
          "end": 201
        },
        "body": null,
        "expression": false,
        "start": 140,
        "end": 202
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 133,
      "end": 202
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 237
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 258
                  },
                  "typeArguments": null,
                  "start": 250,
                  "end": 258
                },
                "start": 250,
                "end": 260
              },
              "start": 248,
              "end": 260
            },
            "start": 238,
            "end": 260
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 270,
                "end": 273
              },
              "start": 268,
              "end": 273
            },
            "start": 262,
            "end": 273
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 281,
                    "end": 287
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 290,
                    "end": 296
                  }
                ],
                "start": 281,
                "end": 296
              },
              "start": 279,
              "end": 296
            },
            "start": 275,
            "end": 296
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "desc",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 305,
                "end": 308
              },
              "start": 303,
              "end": 308
            },
            "start": 298,
            "end": 308
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 311,
            "end": 314
          },
          "start": 309,
          "end": 314
        },
        "body": null,
        "expression": false,
        "start": 210,
        "end": 315
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 203,
      "end": 315
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__param",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 347
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "paramIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 360,
                "end": 366
              },
              "start": 358,
              "end": 366
            },
            "start": 348,
            "end": 366
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 387
                },
                "typeArguments": null,
                "start": 379,
                "end": 387
              },
              "start": 377,
              "end": 387
            },
            "start": 368,
            "end": 387
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 398
            },
            "typeArguments": null,
            "start": 390,
            "end": 398
          },
          "start": 388,
          "end": 398
        },
        "body": null,
        "expression": false,
        "start": 323,
        "end": 399
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 316,
      "end": 399
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__metadata",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 434
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 448,
                "end": 451
              },
              "start": 446,
              "end": 451
            },
            "start": 435,
            "end": 451
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "metadataValue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 468,
                "end": 471
              },
              "start": 466,
              "end": 471
            },
            "start": 453,
            "end": 471
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 482
            },
            "typeArguments": null,
            "start": 474,
            "end": 482
          },
          "start": 472,
          "end": 482
        },
        "body": null,
        "expression": false,
        "start": 407,
        "end": 483
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 400,
      "end": 483
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "typeAnnotation": null,
          "start": 508,
          "end": 517
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 527,
                "end": 530
              },
              "start": 525,
              "end": 530
            },
            "start": 518,
            "end": 530
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 544,
                "end": 547
              },
              "start": 542,
              "end": 547
            },
            "start": 532,
            "end": 547
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 560
                },
                "typeArguments": null,
                "start": 552,
                "end": 560
              },
              "start": 550,
              "end": 560
            },
            "start": 549,
            "end": 560
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 581
                },
                "typeArguments": null,
                "start": 573,
                "end": 581
              },
              "start": 571,
              "end": 581
            },
            "start": 562,
            "end": 581
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 584,
            "end": 587
          },
          "start": 582,
          "end": 587
        },
        "body": null,
        "expression": false,
        "start": 491,
        "end": 588
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 484,
      "end": 588
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__generator",
          "optional": false,
          "typeAnnotation": null,
          "start": 613,
          "end": 624
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 634,
                "end": 637
              },
              "start": 632,
              "end": 637
            },
            "start": 625,
            "end": 637
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "body",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 645,
                  "end": 653
                },
                "typeArguments": null,
                "start": 645,
                "end": 653
              },
              "start": 643,
              "end": 653
            },
            "start": 639,
            "end": 653
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 656,
            "end": 659
          },
          "start": 654,
          "end": 659
        },
        "body": null,
        "expression": false,
        "start": 596,
        "end": 660
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 589,
      "end": 660
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__exportStar",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 697
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 701,
                "end": 704
              },
              "start": 699,
              "end": 704
            },
            "start": 698,
            "end": 704
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 715,
                "end": 718
              },
              "start": 713,
              "end": 718
            },
            "start": 706,
            "end": 718
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 721,
            "end": 725
          },
          "start": 719,
          "end": 725
        },
        "body": null,
        "expression": false,
        "start": 668,
        "end": 726
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 661,
      "end": 726
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 726
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
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "__extends",
    "start": 24,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 50,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 74,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "__assign",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "sources",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 128,
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
    "start": 133,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 148,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "__rest",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "propertyNames",
    "start": 172,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 198,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 203,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 210,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 218,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "__decorate",
    "start": 227,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 238,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 250,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "desc",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 316,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 323,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 331,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "__param",
    "start": 340,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "paramIndex",
    "start": 348,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "decorator",
    "start": 368,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 390,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 400,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 407,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 415,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "__metadata",
    "start": 424,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "metadataKey",
    "start": 435,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "metadataValue",
    "start": 453,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 474,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 484,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 491,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 499,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "__awaiter",
    "start": 508,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 518,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "_arguments",
    "start": 532,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 552,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "generator",
    "start": 562,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 573,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 587,
    "end": 588
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 589,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 596,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 604,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "__generator",
    "start": 613,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 625,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 645,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 656,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 661,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 668,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 676,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "__exportStar",
    "start": 685,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 701,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 706,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  }
]
```
