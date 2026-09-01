__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 10,
        "end": 12
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "initializer": null,
            "computed": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 20,
        "end": 25
      },
      "const": false,
      "declare": false,
      "start": 13,
      "end": 25
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
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
              },
              "start": 32,
              "end": 37
            },
            "start": 31,
            "end": 37
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 37
        }
      ],
      "declare": false,
      "start": 27,
      "end": 38
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 188,
                "end": 195
              },
              "start": 186,
              "end": 195
            },
            "start": 184,
            "end": 195
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 195
        }
      ],
      "declare": true,
      "start": 172,
      "end": 196
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 213,
                "end": 217
              },
              "start": 211,
              "end": 217
            },
            "start": 209,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 209,
          "end": 217
        }
      ],
      "declare": true,
      "start": 197,
      "end": 218
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 235,
                "end": 237
              },
              "start": 233,
              "end": 237
            },
            "start": 231,
            "end": 237
          },
          "init": null,
          "definite": false,
          "start": 231,
          "end": 237
        }
      ],
      "declare": true,
      "start": 219,
      "end": 238
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 256
                },
                "typeArguments": null,
                "start": 255,
                "end": 256
              },
              "start": 253,
              "end": 256
            },
            "start": 251,
            "end": 256
          },
          "init": null,
          "definite": false,
          "start": 251,
          "end": 256
        }
      ],
      "declare": true,
      "start": 239,
      "end": 257
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 277
                    },
                    "typeArguments": null,
                    "start": 274,
                    "end": 277
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 280,
                    "end": 286
                  }
                ],
                "start": 274,
                "end": 286
              },
              "start": 272,
              "end": 286
            },
            "start": 270,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 270,
          "end": 286
        }
      ],
      "declare": true,
      "start": 258,
      "end": 287
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 307
                },
                "typeArguments": null,
                "start": 304,
                "end": 307
              },
              "start": 302,
              "end": 307
            },
            "start": 300,
            "end": 307
          },
          "init": null,
          "definite": false,
          "start": 300,
          "end": 307
        }
      ],
      "declare": true,
      "start": 288,
      "end": 308
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
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 317
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 322
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 327
            },
            "start": 320,
            "end": 327
          },
          "definite": false,
          "start": 314,
          "end": 327
        }
      ],
      "declare": false,
      "start": 310,
      "end": 328
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
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 336
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 341
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 346
            },
            "start": 339,
            "end": 346
          },
          "definite": false,
          "start": 333,
          "end": 346
        }
      ],
      "declare": false,
      "start": 329,
      "end": 347
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
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 355
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 358,
              "end": 360
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 364,
              "end": 365
            },
            "start": 358,
            "end": 365
          },
          "definite": false,
          "start": 352,
          "end": 365
        }
      ],
      "declare": false,
      "start": 348,
      "end": 366
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
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null,
            "start": 371,
            "end": 374
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 379
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "start": 377,
            "end": 384
          },
          "definite": false,
          "start": 371,
          "end": 384
        }
      ],
      "declare": false,
      "start": 367,
      "end": 385
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
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 393
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 396,
              "end": 400
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "start": 396,
            "end": 405
          },
          "definite": false,
          "start": 390,
          "end": 405
        }
      ],
      "declare": false,
      "start": 386,
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
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 414
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 417,
              "end": 426
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 431
            },
            "start": 417,
            "end": 431
          },
          "definite": false,
          "start": 411,
          "end": 431
        }
      ],
      "declare": false,
      "start": 407,
      "end": 432
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
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 440
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 446
              },
              "optional": false,
              "computed": false,
              "start": 443,
              "end": 446
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "start": 443,
            "end": 451
          },
          "definite": false,
          "start": 437,
          "end": 451
        }
      ],
      "declare": false,
      "start": 433,
      "end": 452
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
            "name": "ra8",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 460
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 463,
              "end": 468
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 473
            },
            "start": 463,
            "end": 473
          },
          "definite": false,
          "start": 457,
          "end": 473
        }
      ],
      "declare": false,
      "start": 453,
      "end": 474
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
            "name": "ra9",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 482
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 485,
              "end": 487
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 492
            },
            "start": 485,
            "end": 492
          },
          "definite": false,
          "start": 479,
          "end": 492
        }
      ],
      "declare": false,
      "start": 475,
      "end": 493
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
            "name": "ra10",
            "optional": false,
            "typeAnnotation": null,
            "start": 498,
            "end": 502
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a5",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 507
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 512
            },
            "start": 505,
            "end": 512
          },
          "definite": false,
          "start": 498,
          "end": 512
        }
      ],
      "declare": false,
      "start": 494,
      "end": 513
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
            "name": "ra11",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 522
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a6",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 527
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 532
            },
            "start": 525,
            "end": 532
          },
          "definite": false,
          "start": 518,
          "end": 532
        }
      ],
      "declare": false,
      "start": 514,
      "end": 533
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 670,
                "end": 676
              },
              "start": 668,
              "end": 676
            },
            "start": 666,
            "end": 676
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 676
        }
      ],
      "declare": true,
      "start": 654,
      "end": 677
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 694,
                "end": 701
              },
              "start": 692,
              "end": 701
            },
            "start": 690,
            "end": 701
          },
          "init": null,
          "definite": false,
          "start": 690,
          "end": 701
        }
      ],
      "declare": true,
      "start": 678,
      "end": 702
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 719,
                "end": 725
              },
              "start": 717,
              "end": 725
            },
            "start": 715,
            "end": 725
          },
          "init": null,
          "definite": false,
          "start": 715,
          "end": 725
        }
      ],
      "declare": true,
      "start": 703,
      "end": 726
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
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 743,
                "end": 747
              },
              "start": 741,
              "end": 747
            },
            "start": 739,
            "end": 747
          },
          "init": null,
          "definite": false,
          "start": 739,
          "end": 747
        }
      ],
      "declare": true,
      "start": 727,
      "end": 748
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
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 765,
                    "end": 771
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 774,
                    "end": 780
                  }
                ],
                "start": 765,
                "end": 780
              },
              "start": 763,
              "end": 780
            },
            "start": 761,
            "end": 780
          },
          "init": null,
          "definite": false,
          "start": 761,
          "end": 780
        }
      ],
      "declare": true,
      "start": 749,
      "end": 781
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
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 790
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 793,
              "end": 794
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 800
            },
            "start": 793,
            "end": 800
          },
          "definite": false,
          "start": 787,
          "end": 800
        }
      ],
      "declare": false,
      "start": 783,
      "end": 801
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
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 809
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 813
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 819
            },
            "start": 812,
            "end": 819
          },
          "definite": false,
          "start": 806,
          "end": 819
        }
      ],
      "declare": false,
      "start": 802,
      "end": 820
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
            "name": "rb3",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 828
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 832
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 836,
              "end": 838
            },
            "start": 831,
            "end": 838
          },
          "definite": false,
          "start": 825,
          "end": 838
        }
      ],
      "declare": false,
      "start": 821,
      "end": 839
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
            "name": "rb4",
            "optional": false,
            "typeAnnotation": null,
            "start": 844,
            "end": 847
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 851
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null,
              "start": 855,
              "end": 857
            },
            "start": 850,
            "end": 857
          },
          "definite": false,
          "start": 844,
          "end": 857
        }
      ],
      "declare": false,
      "start": 840,
      "end": 858
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
            "name": "rb5",
            "optional": false,
            "typeAnnotation": null,
            "start": 863,
            "end": 866
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 869,
              "end": 870
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b5",
              "optional": false,
              "typeAnnotation": null,
              "start": 874,
              "end": 876
            },
            "start": 869,
            "end": 876
          },
          "definite": false,
          "start": 863,
          "end": 876
        }
      ],
      "declare": false,
      "start": 859,
      "end": 877
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
            "name": "rb6",
            "optional": false,
            "typeAnnotation": null,
            "start": 882,
            "end": 885
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 889
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 893,
              "end": 894
            },
            "start": 888,
            "end": 894
          },
          "definite": false,
          "start": 882,
          "end": 894
        }
      ],
      "declare": false,
      "start": 878,
      "end": 895
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
            "name": "rb7",
            "optional": false,
            "typeAnnotation": null,
            "start": 900,
            "end": 903
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 906,
              "end": 907
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 911,
              "end": 916
            },
            "start": 906,
            "end": 916
          },
          "definite": false,
          "start": 900,
          "end": 916
        }
      ],
      "declare": false,
      "start": 896,
      "end": 917
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
            "name": "rb8",
            "optional": false,
            "typeAnnotation": null,
            "start": 922,
            "end": 925
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 929
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 933,
              "end": 935
            },
            "start": 928,
            "end": 935
          },
          "definite": false,
          "start": 922,
          "end": 935
        }
      ],
      "declare": false,
      "start": 918,
      "end": 936
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
            "name": "rb9",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 944
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 948
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 952,
              "end": 956
            },
            "start": 947,
            "end": 956
          },
          "definite": false,
          "start": 941,
          "end": 956
        }
      ],
      "declare": false,
      "start": 937,
      "end": 957
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
            "name": "rb10",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 966
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 969,
              "end": 970
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 974,
              "end": 983
            },
            "start": 969,
            "end": 983
          },
          "definite": false,
          "start": 962,
          "end": 983
        }
      ],
      "declare": false,
      "start": 958,
      "end": 984
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
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1022
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1025,
              "end": 1027
            },
            "operator": "in",
            "right": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 1031,
              "end": 1033
            },
            "start": 1025,
            "end": 1033
          },
          "definite": false,
          "start": 1019,
          "end": 1033
        }
      ],
      "declare": false,
      "start": 1015,
      "end": 1034
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1034
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 13,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 27,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 172,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 188,
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
    "value": "declare",
    "start": 197,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 219,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 239,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 247,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 258,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 288,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 296,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 300,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "ra1",
    "start": 314,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 320,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "ra2",
    "start": 333,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 339,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 342,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "ra3",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 358,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 361,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "ra4",
    "start": 371,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 377,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 380,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "ra5",
    "start": 390,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 394,
    "end": 395
  },
  {
    "type": "Null",
    "value": "null",
    "start": 396,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 401,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
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
    "value": "ra6",
    "start": 411,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 417,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 427,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 433,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "ra7",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 447,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "ra8",
    "start": 457,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 463,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 469,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 475,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "ra9",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 488,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 491,
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
    "value": "var",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "ra10",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 505,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 508,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "ra11",
    "start": 518,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 525,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 528,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 654,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 662,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 670,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 678,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 686,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 694,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 703,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 727,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 743,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 749,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 757,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 761,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 774,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 783,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "rb1",
    "start": 787,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 795,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 802,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "rb2",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 814,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 821,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "rb3",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 833,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 840,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "rb4",
    "start": 844,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 852,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 855,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 859,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "rb5",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 871,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 874,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 878,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "rb6",
    "start": 882,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 890,
    "end": 892
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 896,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "rb7",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 908,
    "end": 910
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 911,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 918,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "rb8",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 930,
    "end": 932
  },
  {
    "type": "String",
    "value": "''",
    "start": 933,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "rb9",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 949,
    "end": 951
  },
  {
    "type": "Null",
    "value": "null",
    "start": 952,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 958,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "rb10",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 971,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 974,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 983,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1015,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "rc1",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1028,
    "end": 1030
  },
  {
    "type": "String",
    "value": "''",
    "start": 1031,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  }
]
```
