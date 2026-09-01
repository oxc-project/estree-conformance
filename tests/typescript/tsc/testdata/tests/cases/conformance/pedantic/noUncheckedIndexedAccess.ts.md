__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CheckBooleanOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 21
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 32,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 39
          }
        ],
        "start": 21,
        "end": 40
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 43,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_ERR1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 109
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 128
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 129,
                  "end": 136
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 139,
                  "end": 148
                }
              ],
              "start": 129,
              "end": 148
            }
          ],
          "start": 128,
          "end": 149
        },
        "start": 112,
        "end": 149
      },
      "declare": false,
      "start": 98,
      "end": 150
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericEnum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 169
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "initializer": null,
            "computed": false,
            "start": 172,
            "end": 173
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "initializer": null,
            "computed": false,
            "start": 175,
            "end": 176
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "initializer": null,
            "computed": false,
            "start": 178,
            "end": 179
          }
        ],
        "start": 170,
        "end": 181
      },
      "const": false,
      "declare": false,
      "start": 152,
      "end": 181
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericEnum2",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 199
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 206,
              "end": 207
            },
            "computed": false,
            "start": 202,
            "end": 207
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 213,
              "end": 214
            },
            "computed": false,
            "start": 209,
            "end": 214
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 221,
              "end": 222
            },
            "computed": false,
            "start": 217,
            "end": 222
          }
        ],
        "start": 200,
        "end": 224
      },
      "const": false,
      "declare": false,
      "start": 182,
      "end": 224
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringEnum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 241
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "initializer": {
              "type": "Literal",
              "value": "Alpha",
              "raw": "\"Alpha\"",
              "start": 248,
              "end": 255
            },
            "computed": false,
            "start": 244,
            "end": 255
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "initializer": {
              "type": "Literal",
              "value": "Beta",
              "raw": "\"Beta\"",
              "start": 261,
              "end": 267
            },
            "computed": false,
            "start": 257,
            "end": 267
          }
        ],
        "start": 242,
        "end": 269
      },
      "const": false,
      "declare": false,
      "start": 225,
      "end": 269
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 299,
                            "end": 305
                          },
                          "start": 297,
                          "end": 305
                        },
                        "start": 296,
                        "end": 305
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 308,
                        "end": 315
                      },
                      "start": 306,
                      "end": 315
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 295,
                    "end": 315
                  }
                ],
                "start": 293,
                "end": 317
              },
              "start": 291,
              "end": 317
            },
            "start": 285,
            "end": 317
          },
          "init": null,
          "definite": false,
          "start": 285,
          "end": 317
        }
      ],
      "declare": true,
      "start": 271,
      "end": 318
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 363,
                "end": 370
              },
              "start": 361,
              "end": 370
            },
            "start": 359,
            "end": 370
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 379
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 380,
              "end": 385
            },
            "optional": false,
            "computed": true,
            "start": 373,
            "end": 386
          },
          "definite": false,
          "start": 359,
          "end": 386
        }
      ],
      "declare": false,
      "start": 353,
      "end": 387
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 398,
                "end": 405
              },
              "start": 396,
              "end": 405
            },
            "start": 394,
            "end": 405
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 414
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 418
            },
            "optional": false,
            "computed": false,
            "start": 408,
            "end": 418
          },
          "definite": false,
          "start": 394,
          "end": 418
        }
      ],
      "declare": false,
      "start": 388,
      "end": 419
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 430,
                "end": 437
              },
              "start": 428,
              "end": 437
            },
            "start": 426,
            "end": 437
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 447,
              "end": 448
            },
            "optional": false,
            "computed": true,
            "start": 440,
            "end": 449
          },
          "definite": false,
          "start": 426,
          "end": 449
        }
      ],
      "declare": false,
      "start": 420,
      "end": 450
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 461,
                "end": 468
              },
              "start": 459,
              "end": 468
            },
            "start": 457,
            "end": 468
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 477
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 478,
                "end": 479
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 483,
                    "end": 489
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 492,
                    "end": 498
                  }
                ],
                "start": 483,
                "end": 498
              },
              "start": 478,
              "end": 498
            },
            "optional": false,
            "computed": true,
            "start": 471,
            "end": 499
          },
          "definite": false,
          "start": 457,
          "end": 499
        }
      ],
      "declare": false,
      "start": 451,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 511,
                "end": 518
              },
              "start": 509,
              "end": 518
            },
            "start": 507,
            "end": 518
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 527
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 528,
                "end": 529
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 533,
                    "end": 539
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 542,
                      "end": 543
                    },
                    "start": 542,
                    "end": 543
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 546,
                      "end": 547
                    },
                    "start": 546,
                    "end": 547
                  }
                ],
                "start": 533,
                "end": 547
              },
              "start": 528,
              "end": 547
            },
            "optional": false,
            "computed": true,
            "start": 521,
            "end": 548
          },
          "definite": false,
          "start": 507,
          "end": 548
        }
      ],
      "declare": false,
      "start": 501,
      "end": 549
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 560,
                "end": 567
              },
              "start": 558,
              "end": 567
            },
            "start": 556,
            "end": 567
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 576
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 577,
                "end": 578
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 582,
                      "end": 583
                    },
                    "start": 582,
                    "end": 583
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 586,
                      "end": 587
                    },
                    "start": 586,
                    "end": 587
                  }
                ],
                "start": 582,
                "end": 587
              },
              "start": 577,
              "end": 587
            },
            "optional": false,
            "computed": true,
            "start": 570,
            "end": 588
          },
          "definite": false,
          "start": 556,
          "end": 588
        }
      ],
      "declare": false,
      "start": 550,
      "end": 589
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 600,
                "end": 607
              },
              "start": 598,
              "end": 607
            },
            "start": 596,
            "end": 607
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 616
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 617,
                "end": 622
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 626,
                      "end": 631
                    },
                    "start": 626,
                    "end": 631
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 634,
                      "end": 639
                    },
                    "start": 634,
                    "end": 639
                  }
                ],
                "start": 626,
                "end": 639
              },
              "start": 617,
              "end": 639
            },
            "optional": false,
            "computed": true,
            "start": 610,
            "end": 640
          },
          "definite": false,
          "start": 596,
          "end": 640
        }
      ],
      "declare": false,
      "start": 590,
      "end": 641
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 652,
                "end": 659
              },
              "start": 650,
              "end": 659
            },
            "start": 648,
            "end": 659
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 668
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 669,
              "end": 683
            },
            "optional": false,
            "computed": true,
            "start": 662,
            "end": 684
          },
          "definite": false,
          "start": 648,
          "end": 684
        }
      ],
      "declare": false,
      "start": 642,
      "end": 685
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 696,
                "end": 703
              },
              "start": 694,
              "end": 703
            },
            "start": 692,
            "end": 703
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 712
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 727
              },
              "optional": false,
              "computed": false,
              "start": 713,
              "end": 727
            },
            "optional": false,
            "computed": true,
            "start": 706,
            "end": 728
          },
          "definite": false,
          "start": 692,
          "end": 728
        }
      ],
      "declare": false,
      "start": 686,
      "end": 729
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 741,
                "end": 748
              },
              "start": 739,
              "end": 748
            },
            "start": 736,
            "end": 748
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 757
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringEnum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 769
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 771
              },
              "optional": false,
              "computed": false,
              "start": 758,
              "end": 771
            },
            "optional": false,
            "computed": true,
            "start": 751,
            "end": 772
          },
          "definite": false,
          "start": 736,
          "end": 772
        }
      ],
      "declare": false,
      "start": 730,
      "end": 773
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 785,
                "end": 792
              },
              "start": 783,
              "end": 792
            },
            "start": 780,
            "end": 792
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 801
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 813
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "optional": false,
                "computed": false,
                "start": 802,
                "end": 815
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 830
                },
                "typeArguments": null,
                "start": 819,
                "end": 830
              },
              "start": 802,
              "end": 830
            },
            "optional": false,
            "computed": true,
            "start": 795,
            "end": 831
          },
          "definite": false,
          "start": 780,
          "end": 831
        }
      ],
      "declare": false,
      "start": 774,
      "end": 832
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 844,
                "end": 851
              },
              "start": 842,
              "end": 851
            },
            "start": 839,
            "end": 851
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 860
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 873
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 874,
                  "end": 875
                },
                "optional": false,
                "computed": false,
                "start": 861,
                "end": 875
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 891
                },
                "typeArguments": null,
                "start": 879,
                "end": 891
              },
              "start": 861,
              "end": 891
            },
            "optional": false,
            "computed": true,
            "start": 854,
            "end": 892
          },
          "definite": false,
          "start": 839,
          "end": 892
        }
      ],
      "declare": false,
      "start": 833,
      "end": 893
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 905,
                "end": 912
              },
              "start": 903,
              "end": 912
            },
            "start": 900,
            "end": 912
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 921
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 922,
                  "end": 934
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 935,
                  "end": 936
                },
                "optional": false,
                "computed": false,
                "start": 922,
                "end": 936
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 940,
                  "end": 952
                },
                "typeArguments": null,
                "start": 940,
                "end": 952
              },
              "start": 922,
              "end": 952
            },
            "optional": false,
            "computed": true,
            "start": 915,
            "end": 953
          },
          "definite": false,
          "start": 900,
          "end": 953
        }
      ],
      "declare": false,
      "start": 894,
      "end": 954
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 966,
                "end": 973
              },
              "start": 964,
              "end": 973
            },
            "start": 961,
            "end": 973
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 982
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 983,
                "end": 987
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 991,
                "end": 994
              },
              "start": 983,
              "end": 994
            },
            "optional": false,
            "computed": true,
            "start": 976,
            "end": 995
          },
          "definite": false,
          "start": 961,
          "end": 995
        }
      ],
      "declare": false,
      "start": 955,
      "end": 996
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1025,
                    "end": 1032
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1035,
                    "end": 1044
                  }
                ],
                "start": 1025,
                "end": 1044
              },
              "start": 1023,
              "end": 1044
            },
            "start": 1020,
            "end": 1044
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1053
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 1054,
              "end": 1059
            },
            "optional": false,
            "computed": true,
            "start": 1047,
            "end": 1060
          },
          "definite": false,
          "start": 1020,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1014,
      "end": 1061
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1073,
                    "end": 1080
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1083,
                    "end": 1092
                  }
                ],
                "start": 1073,
                "end": 1092
              },
              "start": 1071,
              "end": 1092
            },
            "start": 1068,
            "end": 1092
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1101
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1105
            },
            "optional": false,
            "computed": false,
            "start": 1095,
            "end": 1105
          },
          "definite": false,
          "start": 1068,
          "end": 1105
        }
      ],
      "declare": false,
      "start": 1062,
      "end": 1106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1113,
        "end": 1118
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1121,
          "end": 1137
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1152
                },
                "typeArguments": null,
                "start": 1139,
                "end": 1152
              },
              "indexType": {
                "type": "TSStringKeyword",
                "start": 1154,
                "end": 1160
              },
              "start": 1138,
              "end": 1161
            }
          ],
          "start": 1137,
          "end": 1162
        },
        "start": 1121,
        "end": 1162
      },
      "declare": false,
      "start": 1108,
      "end": 1163
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1169,
        "end": 1174
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1177,
          "end": 1193
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1202,
                  "end": 1208
                },
                "typeArguments": null,
                "start": 1195,
                "end": 1208
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1210,
                  "end": 1215
                },
                "start": 1210,
                "end": 1215
              },
              "start": 1194,
              "end": 1216
            }
          ],
          "start": 1193,
          "end": 1217
        },
        "start": 1177,
        "end": 1217
      },
      "declare": false,
      "start": 1164,
      "end": 1218
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1229
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1248
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1257,
                  "end": 1263
                },
                "typeArguments": null,
                "start": 1250,
                "end": 1263
              },
              "indexType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 1265,
                      "end": 1270
                    },
                    "start": 1265,
                    "end": 1270
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 1273,
                      "end": 1278
                    },
                    "start": 1273,
                    "end": 1278
                  }
                ],
                "start": 1265,
                "end": 1278
              },
              "start": 1249,
              "end": 1279
            }
          ],
          "start": 1248,
          "end": 1280
        },
        "start": 1232,
        "end": 1280
      },
      "declare": false,
      "start": 1219,
      "end": 1281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1287,
        "end": 1292
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1295,
          "end": 1311
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1326
                },
                "typeArguments": null,
                "start": 1313,
                "end": 1326
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 1328,
                "end": 1334
              },
              "start": 1312,
              "end": 1335
            }
          ],
          "start": 1311,
          "end": 1336
        },
        "start": 1295,
        "end": 1336
      },
      "declare": false,
      "start": 1282,
      "end": 1337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1348
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1351,
          "end": 1367
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1376,
                  "end": 1382
                },
                "typeArguments": null,
                "start": 1369,
                "end": 1382
              },
              "indexType": {
                "type": "TSAnyKeyword",
                "start": 1384,
                "end": 1387
              },
              "start": 1368,
              "end": 1388
            }
          ],
          "start": 1367,
          "end": 1389
        },
        "start": 1351,
        "end": 1389
      },
      "declare": false,
      "start": 1338,
      "end": 1390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1454
          },
          "property": {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 1455,
            "end": 1460
          },
          "optional": false,
          "computed": true,
          "start": 1448,
          "end": 1461
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1473
        },
        "start": 1448,
        "end": 1473
      },
      "directive": null,
      "start": 1448,
      "end": 1474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1475,
            "end": 1481
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "qua",
            "optional": false,
            "typeAnnotation": null,
            "start": 1482,
            "end": 1485
          },
          "optional": false,
          "computed": false,
          "start": 1475,
          "end": 1485
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1488,
          "end": 1497
        },
        "start": 1475,
        "end": 1497
      },
      "directive": null,
      "start": 1475,
      "end": 1498
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1499,
            "end": 1505
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1506,
            "end": 1507
          },
          "optional": false,
          "computed": true,
          "start": 1499,
          "end": 1508
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1511,
          "end": 1520
        },
        "start": 1499,
        "end": 1520
      },
      "directive": null,
      "start": 1499,
      "end": 1521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1522,
            "end": 1528
          },
          "property": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1529,
              "end": 1533
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1537,
              "end": 1540
            },
            "start": 1529,
            "end": 1540
          },
          "optional": false,
          "computed": true,
          "start": 1522,
          "end": 1541
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1544,
          "end": 1553
        },
        "start": 1522,
        "end": 1553
      },
      "directive": null,
      "start": 1522,
      "end": 1554
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1618,
                            "end": 1624
                          },
                          "start": 1616,
                          "end": 1624
                        },
                        "start": 1615,
                        "end": 1624
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1627,
                        "end": 1634
                      },
                      "start": 1625,
                      "end": 1634
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1614,
                    "end": 1634
                  }
                ],
                "start": 1612,
                "end": 1636
              },
              "start": 1610,
              "end": 1636
            },
            "start": 1604,
            "end": 1636
          },
          "init": null,
          "definite": false,
          "start": 1604,
          "end": 1636
        }
      ],
      "declare": true,
      "start": 1590,
      "end": 1637
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num_ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1682,
                "end": 1689
              },
              "start": 1680,
              "end": 1689
            },
            "start": 1673,
            "end": 1689
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1692,
              "end": 1698
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1699,
              "end": 1700
            },
            "optional": false,
            "computed": true,
            "start": 1692,
            "end": 1701
          },
          "definite": false,
          "start": 1673,
          "end": 1701
        }
      ],
      "declare": false,
      "start": 1667,
      "end": 1702
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num_ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1718,
                "end": 1725
              },
              "start": 1716,
              "end": 1725
            },
            "start": 1709,
            "end": 1725
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1728,
              "end": 1734
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1735,
                "end": 1736
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1740,
                "end": 1746
              },
              "start": 1735,
              "end": 1746
            },
            "optional": false,
            "computed": true,
            "start": 1728,
            "end": 1747
          },
          "definite": false,
          "start": 1709,
          "end": 1747
        }
      ],
      "declare": false,
      "start": 1703,
      "end": 1748
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num_ok3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1764,
                "end": 1771
              },
              "start": 1762,
              "end": 1771
            },
            "start": 1755,
            "end": 1771
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1774,
              "end": 1780
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1781,
                "end": 1782
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1786,
                      "end": 1787
                    },
                    "start": 1786,
                    "end": 1787
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1790,
                      "end": 1791
                    },
                    "start": 1790,
                    "end": 1791
                  }
                ],
                "start": 1786,
                "end": 1791
              },
              "start": 1781,
              "end": 1791
            },
            "optional": false,
            "computed": true,
            "start": 1774,
            "end": 1792
          },
          "definite": false,
          "start": 1755,
          "end": 1792
        }
      ],
      "declare": false,
      "start": 1749,
      "end": 1793
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num_ok4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1809,
                "end": 1816
              },
              "start": 1807,
              "end": 1816
            },
            "start": 1800,
            "end": 1816
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1819,
              "end": 1825
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1826,
                "end": 1838
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1840
              },
              "optional": false,
              "computed": false,
              "start": 1826,
              "end": 1840
            },
            "optional": false,
            "computed": true,
            "start": 1819,
            "end": 1841
          },
          "definite": false,
          "start": 1800,
          "end": 1841
        }
      ],
      "declare": false,
      "start": 1794,
      "end": 1842
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num_ok5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1858,
                "end": 1865
              },
              "start": 1856,
              "end": 1865
            },
            "start": 1849,
            "end": 1865
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1874
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1875,
                "end": 1887
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1888,
                "end": 1889
              },
              "optional": false,
              "computed": false,
              "start": 1875,
              "end": 1889
            },
            "optional": false,
            "computed": true,
            "start": 1868,
            "end": 1890
          },
          "definite": false,
          "start": 1849,
          "end": 1890
        }
      ],
      "declare": false,
      "start": 1843,
      "end": 1891
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1914,
        "end": 1922
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1924
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1939,
                          "end": 1945
                        },
                        "start": 1937,
                        "end": 1945
                      },
                      "start": 1936,
                      "end": 1945
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1948,
                      "end": 1955
                    },
                    "start": 1946,
                    "end": 1955
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1935,
                  "end": 1955
                }
              ],
              "start": 1933,
              "end": 1957
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1923,
            "end": 1957
          }
        ],
        "start": 1922,
        "end": 1958
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1964,
                "end": 1965
              },
              "typeArguments": null,
              "start": 1964,
              "end": 1965
            },
            "start": 1962,
            "end": 1965
          },
          "start": 1959,
          "end": 1965
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 1968,
          "end": 1975
        },
        "start": 1966,
        "end": 1975
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2009,
                "end": 2012
              },
              "property": {
                "type": "Literal",
                "value": "blah",
                "raw": "\"blah\"",
                "start": 2013,
                "end": 2019
              },
              "optional": false,
              "computed": true,
              "start": 2009,
              "end": 2020
            },
            "start": 2002,
            "end": 2021
          }
        ],
        "start": 1976,
        "end": 2023
      },
      "expression": false,
      "start": 1905,
      "end": 2023
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2033,
        "end": 2041
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2042,
              "end": 2043
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2058,
                          "end": 2064
                        },
                        "start": 2056,
                        "end": 2064
                      },
                      "start": 2055,
                      "end": 2064
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2067,
                      "end": 2074
                    },
                    "start": 2065,
                    "end": 2074
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2054,
                  "end": 2074
                }
              ],
              "start": 2052,
              "end": 2076
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2042,
            "end": 2076
          }
        ],
        "start": 2041,
        "end": 2077
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2083,
                "end": 2084
              },
              "typeArguments": null,
              "start": 2083,
              "end": 2084
            },
            "start": 2081,
            "end": 2084
          },
          "start": 2078,
          "end": 2084
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 2087,
          "end": 2094
        },
        "start": 2085,
        "end": 2094
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2125,
                  "end": 2128
                },
                "property": {
                  "type": "Literal",
                  "value": "blah",
                  "raw": "\"blah\"",
                  "start": 2129,
                  "end": 2135
                },
                "optional": false,
                "computed": true,
                "start": 2125,
                "end": 2136
              },
              "start": 2125,
              "end": 2137
            },
            "start": 2118,
            "end": 2138
          }
        ],
        "start": 2095,
        "end": 2140
      },
      "expression": false,
      "start": 2024,
      "end": 2140
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2158
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2159,
              "end": 2160
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2169,
              "end": 2175
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2159,
            "end": 2175
          }
        ],
        "start": 2158,
        "end": 2176
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2182,
                "end": 2183
              },
              "typeArguments": null,
              "start": 2182,
              "end": 2183
            },
            "start": 2180,
            "end": 2183
          },
          "start": 2177,
          "end": 2183
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 2186,
          "end": 2193
        },
        "start": 2184,
        "end": 2193
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "strMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2227,
                "end": 2233
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2234,
                "end": 2237
              },
              "optional": false,
              "computed": true,
              "start": 2227,
              "end": 2238
            },
            "start": 2220,
            "end": 2239
          }
        ],
        "start": 2194,
        "end": 2241
      },
      "expression": false,
      "start": 2141,
      "end": 2241
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2311,
                      "end": 2312
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2314,
                        "end": 2320
                      },
                      "start": 2312,
                      "end": 2320
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2311,
                    "end": 2321
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2322,
                      "end": 2323
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2325,
                        "end": 2331
                      },
                      "start": 2323,
                      "end": 2331
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2322,
                    "end": 2332
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2339,
                            "end": 2345
                          },
                          "start": 2337,
                          "end": 2345
                        },
                        "start": 2334,
                        "end": 2345
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2348,
                            "end": 2354
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2357,
                            "end": 2363
                          }
                        ],
                        "start": 2348,
                        "end": 2363
                      },
                      "start": 2346,
                      "end": 2363
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 2333,
                    "end": 2363
                  }
                ],
                "start": 2309,
                "end": 2365
              },
              "start": 2307,
              "end": 2365
            },
            "start": 2303,
            "end": 2365
          },
          "init": null,
          "definite": false,
          "start": 2303,
          "end": 2365
        }
      ],
      "declare": true,
      "start": 2289,
      "end": 2366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2367,
          "end": 2371
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "\"x\"",
          "start": 2372,
          "end": 2375
        },
        "optional": false,
        "computed": true,
        "start": 2367,
        "end": 2376
      },
      "directive": null,
      "start": 2367,
      "end": 2377
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 2384,
            "end": 2385
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 2388,
            "end": 2391
          },
          "definite": false,
          "start": 2384,
          "end": 2391
        }
      ],
      "declare": false,
      "start": 2378,
      "end": 2392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2393,
          "end": 2397
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 2398,
          "end": 2399
        },
        "optional": false,
        "computed": true,
        "start": 2393,
        "end": 2400
      },
      "directive": null,
      "start": 2393,
      "end": 2401
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 2406,
            "end": 2408
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 2411,
            "end": 2414
          },
          "definite": false,
          "start": 2406,
          "end": 2414
        }
      ],
      "declare": false,
      "start": 2402,
      "end": 2415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2416,
          "end": 2420
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "yy",
          "optional": false,
          "typeAnnotation": null,
          "start": 2421,
          "end": 2423
        },
        "optional": false,
        "computed": true,
        "start": 2416,
        "end": 2424
      },
      "directive": null,
      "start": 2416,
      "end": 2425
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 2430,
            "end": 2431
          },
          "init": {
            "type": "Literal",
            "value": "z",
            "raw": "\"z\"",
            "start": 2434,
            "end": 2437
          },
          "definite": false,
          "start": 2430,
          "end": 2437
        }
      ],
      "declare": false,
      "start": 2426,
      "end": 2438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2439,
          "end": 2443
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 2444,
          "end": 2445
        },
        "optional": false,
        "computed": true,
        "start": 2439,
        "end": 2446
      },
      "directive": null,
      "start": 2439,
      "end": 2447
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMapUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2506,
                                "end": 2512
                              },
                              "start": 2504,
                              "end": 2512
                            },
                            "start": 2503,
                            "end": 2512
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2515,
                            "end": 2522
                          },
                          "start": 2513,
                          "end": 2522
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 2502,
                        "end": 2522
                      }
                    ],
                    "start": 2500,
                    "end": 2524
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2533,
                                "end": 2539
                              },
                              "start": 2531,
                              "end": 2539
                            },
                            "start": 2530,
                            "end": 2539
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2542,
                            "end": 2548
                          },
                          "start": 2540,
                          "end": 2548
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 2529,
                        "end": 2548
                      }
                    ],
                    "start": 2527,
                    "end": 2550
                  }
                ],
                "start": 2500,
                "end": 2550
              },
              "start": 2498,
              "end": 2550
            },
            "start": 2487,
            "end": 2550
          },
          "init": null,
          "definite": false,
          "start": 2487,
          "end": 2550
        }
      ],
      "declare": true,
      "start": 2473,
      "end": 2551
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 2578,
                    "end": 2585
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2588,
                    "end": 2594
                  }
                ],
                "start": 2578,
                "end": 2594
              },
              "start": 2576,
              "end": 2594
            },
            "start": 2574,
            "end": 2594
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMapUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 2597,
              "end": 2608
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 2609,
              "end": 2614
            },
            "optional": false,
            "computed": true,
            "start": 2597,
            "end": 2615
          },
          "definite": false,
          "start": 2574,
          "end": 2615
        }
      ],
      "declare": false,
      "start": 2568,
      "end": 2616
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2669,
                  "end": 2675
                },
                "start": 2662,
                "end": 2675
              },
              "start": 2660,
              "end": 2675
            },
            "start": 2659,
            "end": 2675
          },
          "init": null,
          "definite": false,
          "start": 2659,
          "end": 2675
        }
      ],
      "declare": true,
      "start": 2645,
      "end": 2676
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbolMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2705,
                      "end": 2706
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2709,
                        "end": 2715
                      },
                      "start": 2707,
                      "end": 2715
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2704,
                    "end": 2715
                  }
                ],
                "start": 2702,
                "end": 2717
              },
              "start": 2700,
              "end": 2717
            },
            "start": 2691,
            "end": 2717
          },
          "init": null,
          "definite": false,
          "start": 2691,
          "end": 2717
        }
      ],
      "declare": true,
      "start": 2677,
      "end": 2718
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2730,
                "end": 2736
              },
              "start": 2728,
              "end": 2736
            },
            "start": 2725,
            "end": 2736
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "symbolMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 2739,
              "end": 2748
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 2749,
              "end": 2750
            },
            "optional": false,
            "computed": true,
            "start": 2739,
            "end": 2751
          },
          "definite": false,
          "start": 2725,
          "end": 2751
        }
      ],
      "declare": false,
      "start": 2719,
      "end": 2752
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbolMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 2766,
            "end": 2775
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 2776,
            "end": 2777
          },
          "optional": false,
          "computed": true,
          "start": 2766,
          "end": 2778
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 2781,
          "end": 2790
        },
        "start": 2766,
        "end": 2790
      },
      "directive": null,
      "start": 2766,
      "end": 2791
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nonEmptyStringArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2864,
                    "end": 2870
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2875,
                        "end": 2881
                      },
                      "start": 2875,
                      "end": 2883
                    },
                    "start": 2872,
                    "end": 2883
                  }
                ],
                "start": 2863,
                "end": 2884
              },
              "start": 2861,
              "end": 2884
            },
            "start": 2842,
            "end": 2884
          },
          "init": null,
          "definite": false,
          "start": 2842,
          "end": 2884
        }
      ],
      "declare": true,
      "start": 2828,
      "end": 2885
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "variadicOk1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2905,
                "end": 2911
              },
              "start": 2903,
              "end": 2911
            },
            "start": 2892,
            "end": 2911
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 2914,
              "end": 2933
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2934,
              "end": 2935
            },
            "optional": false,
            "computed": true,
            "start": 2914,
            "end": 2936
          },
          "definite": false,
          "start": 2892,
          "end": 2936
        }
      ],
      "declare": false,
      "start": 2886,
      "end": 2937
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "variadicError1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2974,
                "end": 2980
              },
              "start": 2972,
              "end": 2980
            },
            "start": 2958,
            "end": 2980
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 2983,
              "end": 3002
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3003,
              "end": 3004
            },
            "optional": false,
            "computed": true,
            "start": 2983,
            "end": 3005
          },
          "definite": false,
          "start": 2958,
          "end": 3005
        }
      ],
      "declare": false,
      "start": 2952,
      "end": 3006
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myRecord1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3073,
                      "end": 3074
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3076,
                        "end": 3082
                      },
                      "start": 3074,
                      "end": 3082
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3073,
                    "end": 3083
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3084,
                      "end": 3085
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3087,
                        "end": 3093
                      },
                      "start": 3085,
                      "end": 3093
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3084,
                    "end": 3093
                  }
                ],
                "start": 3071,
                "end": 3095
              },
              "start": 3069,
              "end": 3095
            },
            "start": 3060,
            "end": 3095
          },
          "init": null,
          "definite": false,
          "start": 3060,
          "end": 3095
        }
      ],
      "declare": true,
      "start": 3046,
      "end": 3096
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myRecord2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3124,
                      "end": 3125
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3127,
                        "end": 3133
                      },
                      "start": 3125,
                      "end": 3133
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3124,
                    "end": 3134
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3135,
                      "end": 3136
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3138,
                        "end": 3144
                      },
                      "start": 3136,
                      "end": 3144
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3135,
                    "end": 3145
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3152,
                            "end": 3158
                          },
                          "start": 3150,
                          "end": 3158
                        },
                        "start": 3147,
                        "end": 3158
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3161,
                        "end": 3167
                      },
                      "start": 3159,
                      "end": 3167
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3146,
                    "end": 3167
                  }
                ],
                "start": 3122,
                "end": 3169
              },
              "start": 3120,
              "end": 3169
            },
            "start": 3111,
            "end": 3169
          },
          "init": null,
          "definite": false,
          "start": 3111,
          "end": 3169
        }
      ],
      "declare": true,
      "start": 3097,
      "end": 3170
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3177,
            "end": 3180
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3184,
                    "end": 3187
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3209,
                        "end": 3218
                      },
                      "typeArguments": null,
                      "start": 3202,
                      "end": 3218
                    },
                    "start": 3196,
                    "end": 3218
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3184,
                  "end": 3218
                }
              ],
              "start": 3183,
              "end": 3219
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3225,
                      "end": 3228
                    },
                    "typeArguments": null,
                    "start": 3225,
                    "end": 3228
                  },
                  "start": 3223,
                  "end": 3228
                },
                "start": 3220,
                "end": 3228
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3231,
                "end": 3237
              },
              "start": 3229,
              "end": 3237
            },
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "myRecord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3241,
                "end": 3250
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 3251,
                "end": 3254
              },
              "optional": false,
              "computed": true,
              "start": 3241,
              "end": 3255
            },
            "id": null,
            "generator": false,
            "start": 3183,
            "end": 3255
          },
          "definite": false,
          "start": 3177,
          "end": 3255
        }
      ],
      "declare": false,
      "start": 3171,
      "end": 3256
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3276,
            "end": 3279
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3283,
                    "end": 3286
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3308,
                        "end": 3317
                      },
                      "typeArguments": null,
                      "start": 3301,
                      "end": 3317
                    },
                    "start": 3295,
                    "end": 3317
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3283,
                  "end": 3317
                }
              ],
              "start": 3282,
              "end": 3318
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3324,
                      "end": 3327
                    },
                    "typeArguments": null,
                    "start": 3324,
                    "end": 3327
                  },
                  "start": 3322,
                  "end": 3327
                },
                "start": 3319,
                "end": 3327
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3330,
                "end": 3336
              },
              "start": 3328,
              "end": 3336
            },
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "myRecord2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3340,
                "end": 3349
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 3350,
                "end": 3353
              },
              "optional": false,
              "computed": true,
              "start": 3340,
              "end": 3354
            },
            "id": null,
            "generator": false,
            "start": 3282,
            "end": 3354
          },
          "definite": false,
          "start": 3276,
          "end": 3354
        }
      ],
      "declare": false,
      "start": 3270,
      "end": 3355
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3375,
            "end": 3378
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3382,
                    "end": 3385
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3407,
                        "end": 3416
                      },
                      "typeArguments": null,
                      "start": 3400,
                      "end": 3416
                    },
                    "start": 3394,
                    "end": 3416
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3382,
                  "end": 3416
                }
              ],
              "start": 3381,
              "end": 3417
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3423,
                      "end": 3426
                    },
                    "typeArguments": null,
                    "start": 3423,
                    "end": 3426
                  },
                  "start": 3421,
                  "end": 3426
                },
                "start": 3418,
                "end": 3426
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3437,
                        "end": 3446
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3447,
                        "end": 3450
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3437,
                      "end": 3451
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3454,
                      "end": 3463
                    },
                    "start": 3437,
                    "end": 3463
                  },
                  "directive": null,
                  "start": 3437,
                  "end": 3464
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3494,
                            "end": 3500
                          },
                          "start": 3492,
                          "end": 3500
                        },
                        "start": 3491,
                        "end": 3500
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myRecord2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3503,
                          "end": 3512
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3513,
                          "end": 3516
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3503,
                        "end": 3517
                      },
                      "definite": false,
                      "start": 3491,
                      "end": 3517
                    }
                  ],
                  "declare": false,
                  "start": 3485,
                  "end": 3518
                }
              ],
              "start": 3431,
              "end": 3536
            },
            "id": null,
            "generator": false,
            "start": 3381,
            "end": 3536
          },
          "definite": false,
          "start": 3375,
          "end": 3536
        }
      ],
      "declare": false,
      "start": 3369,
      "end": 3537
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3538
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 5,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 24,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "T_ERR1",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 112,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 129,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 139,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
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
    "value": "enum",
    "start": 152,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 157,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 182,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 187,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 225,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 230,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "\"Alpha\"",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "String",
    "value": "\"Beta\"",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 271,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 308,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 363,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 379,
    "end": 380
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 388,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 394,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 398,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 408,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 420,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 426,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 440,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 446,
    "end": 447
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
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
    "value": "const",
    "start": 451,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 461,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 471,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 480,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 492,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 511,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 527,
    "end": 528
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 530,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 544,
    "end": 545
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 550,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "e6",
    "start": 556,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 560,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 576,
    "end": 577
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 579,
    "end": 581
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 584,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 590,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "e7",
    "start": 596,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 600,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 617,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 623,
    "end": 625
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 626,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 632,
    "end": 633
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 634,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 642,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "e8",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 652,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 662,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 669,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 686,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "e9",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 696,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 713,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 730,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "e10",
    "start": 736,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 741,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 758,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 774,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "e11",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 785,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 795,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 802,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 816,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 819,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 833,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "e12",
    "start": 839,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 854,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 861,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 876,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 879,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 894,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "e13",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 905,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 922,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 937,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 940,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 955,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "e14",
    "start": 961,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 966,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 976,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 982,
    "end": 983
  },
  {
    "type": "Null",
    "value": "null",
    "start": 983,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 988,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 991,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "ok1",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1035,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1047,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1062,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "ok2",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1083,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1095,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "T_OK1",
    "start": 1113,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1121,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1146,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1164,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "T_OK2",
    "start": 1169,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1177,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1210,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1219,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "T_OK3",
    "start": 1224,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1232,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1250,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1257,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1265,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 1273,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1282,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "T_OK4",
    "start": 1287,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1295,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1313,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1320,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1328,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1338,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "T_OK5",
    "start": 1343,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1351,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1369,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1376,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 1455,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1464,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1475,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "qua",
    "start": 1482,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1488,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1511,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1522,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1529,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1534,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1537,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1544,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1590,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1598,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1618,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1627,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1667,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "num_ok1",
    "start": 1673,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1682,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1692,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1703,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "num_ok2",
    "start": 1709,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1728,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1737,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1740,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1749,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "num_ok3",
    "start": 1755,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1764,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1783,
    "end": 1785
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1794,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "num_ok4",
    "start": 1800,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1809,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1819,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 1826,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1843,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "num_ok5",
    "start": 1849,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1858,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1868,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 1875,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1905,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "generic1",
    "start": 1914,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1925,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1939,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1948,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1959,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1968,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2002,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2009,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "String",
    "value": "\"blah\"",
    "start": 2013,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2024,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "generic2",
    "start": 2033,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2044,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2058,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2067,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2078,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2087,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2118,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2125,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "String",
    "value": "\"blah\"",
    "start": 2129,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2141,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "generic3",
    "start": 2150,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2161,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2169,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2177,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2186,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2220,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 2227,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2234,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2289,
    "end": 2296
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2297,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2303,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2314,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2325,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2334,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2339,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2348,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2357,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2367,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2372,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2378,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 2388,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2393,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2402,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 2406,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 2411,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2416,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 2421,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2426,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 2434,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2439,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2473,
    "end": 2480
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2481,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "strMapUnion",
    "start": 2487,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2506,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2515,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2533,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2542,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2568,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2574,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2578,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2588,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "strMapUnion",
    "start": 2597,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2609,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2645,
    "end": 2652
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2653,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2662,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2669,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2677,
    "end": 2684
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2685,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "symbolMap",
    "start": 2691,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2709,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2719,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "e15",
    "start": 2725,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2730,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "symbolMap",
    "start": 2739,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "symbolMap",
    "start": 2766,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2781,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2828,
    "end": 2835
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2836,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "nonEmptyStringArray",
    "start": 2842,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2864,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2872,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2875,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2886,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "variadicOk1",
    "start": 2892,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2905,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "nonEmptyStringArray",
    "start": 2914,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2952,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "variadicError1",
    "start": 2958,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2974,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Identifier",
    "value": "nonEmptyStringArray",
    "start": 2983,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3046,
    "end": 3053
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3054,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3060,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3076,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3087,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3097,
    "end": 3104
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3105,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3111,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3127,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3138,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3147,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3152,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3161,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3171,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 3177,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3184,
    "end": 3187
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3188,
    "end": 3195
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3196,
    "end": 3201
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3202,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3209,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3220,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3225,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3231,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3238,
    "end": 3240
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3241,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3251,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3270,
    "end": 3275
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 3276,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3283,
    "end": 3286
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3287,
    "end": 3294
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3295,
    "end": 3300
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3301,
    "end": 3307
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3308,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3319,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3324,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3330,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3337,
    "end": 3339
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3340,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3350,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3369,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 3375,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3382,
    "end": 3385
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3386,
    "end": 3393
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3394,
    "end": 3399
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3400,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3407,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3418,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3423,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3428,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3437,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3447,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3454,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3485,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3494,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3503,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3513,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3536,
    "end": 3537
  }
]
```
