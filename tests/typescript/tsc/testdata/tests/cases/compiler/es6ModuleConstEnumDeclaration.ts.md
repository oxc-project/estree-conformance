__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "e1",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 20
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
                "start": 27,
                "end": 28
              },
              "initializer": null,
              "computed": false,
              "start": 27,
              "end": 28
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "initializer": null,
              "computed": false,
              "start": 34,
              "end": 35
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "initializer": null,
              "computed": false,
              "start": 41,
              "end": 42
            }
          ],
          "start": 21,
          "end": 44
        },
        "const": true,
        "declare": false,
        "start": 7,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 44
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 58
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": null,
            "computed": false,
            "start": 65,
            "end": 66
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "initializer": null,
            "computed": false,
            "start": 72,
            "end": 73
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "initializer": null,
            "computed": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 59,
        "end": 82
      },
      "const": true,
      "declare": false,
      "start": 45,
      "end": 82
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
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 93
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 95
          },
          "definite": false,
          "start": 87,
          "end": 95
        }
      ],
      "declare": false,
      "start": 83,
      "end": 96
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 107
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "optional": false,
            "computed": false,
            "start": 105,
            "end": 109
          },
          "definite": false,
          "start": 101,
          "end": 109
        }
      ],
      "declare": false,
      "start": 97,
      "end": 110
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 130
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 157
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
                        "start": 168,
                        "end": 169
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 168,
                      "end": 169
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 180
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 179,
                      "end": 180
                    },
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 191
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 190,
                      "end": 191
                    }
                  ],
                  "start": 158,
                  "end": 197
                },
                "const": true,
                "declare": false,
                "start": 144,
                "end": 197
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 137,
              "end": 197
            },
            {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e4",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 215
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 227
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 226,
                    "end": 227
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 238
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 237,
                    "end": 238
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 248,
                    "end": 249
                  }
                ],
                "start": 216,
                "end": 255
              },
              "const": true,
              "declare": false,
              "start": 202,
              "end": 255
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
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 266
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 271
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 273
                    },
                    "optional": false,
                    "computed": false,
                    "start": 269,
                    "end": 273
                  },
                  "definite": false,
                  "start": 264,
                  "end": 273
                }
              ],
              "declare": false,
              "start": 260,
              "end": 274
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
                    "name": "y1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 285
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 290
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "optional": false,
                    "computed": false,
                    "start": 288,
                    "end": 292
                  },
                  "definite": false,
                  "start": 283,
                  "end": 292
                }
              ],
              "declare": false,
              "start": 279,
              "end": 293
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
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 304
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 307,
                      "end": 309
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 311
                    },
                    "optional": false,
                    "computed": false,
                    "start": 307,
                    "end": 311
                  },
                  "definite": false,
                  "start": 302,
                  "end": 311
                }
              ],
              "declare": false,
              "start": 298,
              "end": 312
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
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 323
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 328
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 330
                    },
                    "optional": false,
                    "computed": false,
                    "start": 326,
                    "end": 330
                  },
                  "definite": false,
                  "start": 321,
                  "end": 330
                }
              ],
              "declare": false,
              "start": 317,
              "end": 331
            }
          ],
          "start": 131,
          "end": 333
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 118,
        "end": 333
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 333
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 346
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e5",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 373
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
                      "start": 384,
                      "end": 385
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 384,
                    "end": 385
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 395,
                      "end": 396
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 395,
                    "end": 396
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 407
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 406,
                    "end": 407
                  }
                ],
                "start": 374,
                "end": 413
              },
              "const": true,
              "declare": false,
              "start": 360,
              "end": 413
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 353,
            "end": 413
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e6",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 431
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 442,
                  "end": 443
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 453,
                    "end": 454
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 453,
                  "end": 454
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 465
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 464,
                  "end": 465
                }
              ],
              "start": 432,
              "end": 471
            },
            "const": true,
            "declare": false,
            "start": 418,
            "end": 471
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
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 482
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 487
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 488,
                    "end": 489
                  },
                  "optional": false,
                  "computed": false,
                  "start": 485,
                  "end": 489
                },
                "definite": false,
                "start": 480,
                "end": 489
              }
            ],
            "declare": false,
            "start": 476,
            "end": 490
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 501
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 506
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 507,
                    "end": 508
                  },
                  "optional": false,
                  "computed": false,
                  "start": 504,
                  "end": 508
                },
                "definite": false,
                "start": 499,
                "end": 508
              }
            ],
            "declare": false,
            "start": 495,
            "end": 509
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 520
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 525
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "optional": false,
                  "computed": false,
                  "start": 523,
                  "end": 527
                },
                "definite": false,
                "start": 518,
                "end": 527
              }
            ],
            "declare": false,
            "start": 514,
            "end": 528
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 539
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 544
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 546
                  },
                  "optional": false,
                  "computed": false,
                  "start": 542,
                  "end": 546
                },
                "definite": false,
                "start": 537,
                "end": 546
              }
            ],
            "declare": false,
            "start": 533,
            "end": 547
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 558
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 563
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 566
                    },
                    "optional": false,
                    "computed": false,
                    "start": 561,
                    "end": 566
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 568
                  },
                  "optional": false,
                  "computed": false,
                  "start": 561,
                  "end": 568
                },
                "definite": false,
                "start": 556,
                "end": 568
              }
            ],
            "declare": false,
            "start": 552,
            "end": 569
          }
        ],
        "start": 347,
        "end": 571
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 334,
      "end": 571
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 571
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
    "type": "Keyword",
    "value": "enum",
    "start": 13,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 45,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 111,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 118,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 128,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 137,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 144,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 150,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 202,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 208,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 264,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 269,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 302,
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
    "value": "e3",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 334,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 353,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 360,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 366,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 371,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 418,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 424,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "e6",
    "start": 429,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 476,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 480,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 495,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 518,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 523,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "e6",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 561,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 570,
    "end": 571
  }
]
```
