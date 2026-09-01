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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 11,
            "end": 17
          },
          {
            "type": "TSNumberKeyword",
            "start": 19,
            "end": 25
          }
        ],
        "start": 10,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 35
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
              }
            ],
            "start": 38,
            "end": 47
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              },
              {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            ],
            "start": 50,
            "end": 66
          }
        ],
        "start": 38,
        "end": 66
      },
      "declare": false,
      "start": 28,
      "end": 67
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 75
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 79,
            "end": 85
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 90,
              "end": 98
            },
            "start": 87,
            "end": 98
          }
        ],
        "start": 78,
        "end": 99
      },
      "declare": false,
      "start": 68,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSBooleanKeyword",
                "start": 112,
                "end": 119
              }
            ],
            "start": 111,
            "end": 120
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 135,
                    "end": 141
                  },
                  "start": 135,
                  "end": 143
                },
                "start": 132,
                "end": 143
              }
            ],
            "start": 123,
            "end": 144
          }
        ],
        "start": 111,
        "end": 144
      },
      "declare": false,
      "start": 101,
      "end": 145
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 155
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 160
          },
          "typeArguments": null,
          "start": 158,
          "end": 160
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 161,
            "end": 162
          },
          "start": 161,
          "end": 162
        },
        "start": 158,
        "end": 163
      },
      "declare": false,
      "start": 147,
      "end": 164
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 184
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 189
          },
          "typeArguments": null,
          "start": 187,
          "end": 189
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 190,
            "end": 191
          },
          "start": 190,
          "end": 191
        },
        "start": 187,
        "end": 192
      },
      "declare": false,
      "start": 176,
      "end": 193
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 213
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 218
          },
          "typeArguments": null,
          "start": 216,
          "end": 218
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 219,
            "end": 220
          },
          "start": 219,
          "end": 220
        },
        "start": 216,
        "end": 221
      },
      "declare": false,
      "start": 205,
      "end": 222
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1N",
        "optional": false,
        "typeAnnotation": null,
        "start": 242,
        "end": 245
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 250
          },
          "typeArguments": null,
          "start": 248,
          "end": 250
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 251,
          "end": 257
        },
        "start": 248,
        "end": 258
      },
      "declare": false,
      "start": 237,
      "end": 259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 289
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 294
          },
          "typeArguments": null,
          "start": 292,
          "end": 294
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 295,
            "end": 296
          },
          "start": 295,
          "end": 296
        },
        "start": 292,
        "end": 297
      },
      "declare": false,
      "start": 281,
      "end": 298
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 328
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 333
          },
          "typeArguments": null,
          "start": 331,
          "end": 333
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 334,
            "end": 335
          },
          "start": 334,
          "end": 335
        },
        "start": 331,
        "end": 336
      },
      "declare": false,
      "start": 320,
      "end": 337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 369
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 374
          },
          "typeArguments": null,
          "start": 372,
          "end": 374
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 375,
            "end": 376
          },
          "start": 375,
          "end": 376
        },
        "start": 372,
        "end": 377
      },
      "declare": false,
      "start": 361,
      "end": 378
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2N",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 401
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T2",
            "optional": false,
            "typeAnnotation": null,
            "start": 404,
            "end": 406
          },
          "typeArguments": null,
          "start": 404,
          "end": 406
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 407,
          "end": 413
        },
        "start": 404,
        "end": 414
      },
      "declare": false,
      "start": 393,
      "end": 415
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 455
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 458,
            "end": 460
          },
          "typeArguments": null,
          "start": 458,
          "end": 460
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 461,
            "end": 462
          },
          "start": 461,
          "end": 462
        },
        "start": 458,
        "end": 463
      },
      "declare": false,
      "start": 447,
      "end": 464
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 481,
        "end": 484
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 489
          },
          "typeArguments": null,
          "start": 487,
          "end": 489
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 490,
            "end": 491
          },
          "start": 490,
          "end": 491
        },
        "start": 487,
        "end": 492
      },
      "declare": false,
      "start": 476,
      "end": 493
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 513
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 518
          },
          "typeArguments": null,
          "start": 516,
          "end": 518
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 519,
            "end": 520
          },
          "start": 519,
          "end": 520
        },
        "start": 516,
        "end": 521
      },
      "declare": false,
      "start": 505,
      "end": 522
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3N",
        "optional": false,
        "typeAnnotation": null,
        "start": 539,
        "end": 542
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 545,
            "end": 547
          },
          "typeArguments": null,
          "start": 545,
          "end": 547
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 548,
          "end": 554
        },
        "start": 545,
        "end": 555
      },
      "declare": false,
      "start": 534,
      "end": 556
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 583,
        "end": 586
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 591
          },
          "typeArguments": null,
          "start": 589,
          "end": 591
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 592,
            "end": 593
          },
          "start": 592,
          "end": 593
        },
        "start": 589,
        "end": 594
      },
      "declare": false,
      "start": 578,
      "end": 595
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T41",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 625
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 630
          },
          "typeArguments": null,
          "start": 628,
          "end": 630
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 631,
            "end": 632
          },
          "start": 631,
          "end": 632
        },
        "start": 628,
        "end": 633
      },
      "declare": false,
      "start": 617,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T42",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 666
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 671
          },
          "typeArguments": null,
          "start": 669,
          "end": 671
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 672,
            "end": 673
          },
          "start": 672,
          "end": 673
        },
        "start": 669,
        "end": 674
      },
      "declare": false,
      "start": 658,
      "end": 675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4N",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 707
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T4",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 712
          },
          "typeArguments": null,
          "start": 710,
          "end": 712
        },
        "indexType": {
          "type": "TSNumberKeyword",
          "start": 713,
          "end": 719
        },
        "start": 710,
        "end": 720
      },
      "declare": false,
      "start": 699,
      "end": 721
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 762,
        "end": 764
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 771
              },
              "typeArguments": null,
              "start": 769,
              "end": 771
            },
            "start": 767,
            "end": 771
          },
          "start": 765,
          "end": 771
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 779
              },
              "typeArguments": null,
              "start": 777,
              "end": 779
            },
            "start": 775,
            "end": 779
          },
          "start": 773,
          "end": 779
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 787
              },
              "typeArguments": null,
              "start": 785,
              "end": 787
            },
            "start": 783,
            "end": 787
          },
          "start": 781,
          "end": 787
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 795
              },
              "typeArguments": null,
              "start": 793,
              "end": 795
            },
            "start": 791,
            "end": 795
          },
          "start": 789,
          "end": 795
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 800,
              "end": 806
            },
            "start": 798,
            "end": 806
          },
          "start": 797,
          "end": 806
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 822
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 824,
                      "end": 827
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 829,
                      "end": 832
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 818,
                  "end": 833
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 838
                },
                "definite": false,
                "start": 818,
                "end": 838
              }
            ],
            "declare": false,
            "start": 814,
            "end": 839
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d20",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 868,
                      "end": 871
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d21",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 876
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d22",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 881
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 867,
                  "end": 882
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 887
                },
                "definite": false,
                "start": 867,
                "end": 887
              }
            ],
            "declare": false,
            "start": 863,
            "end": 888
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d30",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 939,
                      "end": 942
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d31",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 944,
                      "end": 947
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d32",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 949,
                      "end": 952
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 938,
                  "end": 953
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 956,
                  "end": 958
                },
                "definite": false,
                "start": 938,
                "end": 958
              }
            ],
            "declare": false,
            "start": 934,
            "end": 959
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d40",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 996,
                      "end": 999
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d41",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1001,
                      "end": 1004
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d42",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1006,
                      "end": 1009
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 995,
                  "end": 1010
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1015
                },
                "definite": false,
                "start": 995,
                "end": 1015
              }
            ],
            "declare": false,
            "start": 991,
            "end": 1016
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1083,
                    "end": 1086
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1088,
                    "end": 1091
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1093,
                    "end": 1096
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1082,
                "end": 1097
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1100,
                "end": 1102
              },
              "start": 1082,
              "end": 1102
            },
            "directive": null,
            "start": 1082,
            "end": 1103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d20",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1109,
                    "end": 1112
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d21",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1114,
                    "end": 1117
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d22",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1122
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1123
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1126,
                "end": 1128
              },
              "start": 1108,
              "end": 1128
            },
            "directive": null,
            "start": 1108,
            "end": 1129
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d30",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1135,
                    "end": 1138
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d31",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1143
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d32",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1145,
                    "end": 1148
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1134,
                "end": 1149
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1152,
                "end": 1154
              },
              "start": 1134,
              "end": 1154
            },
            "directive": null,
            "start": 1134,
            "end": 1155
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d40",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1161,
                    "end": 1164
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d41",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1166,
                    "end": 1169
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d42",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1171,
                    "end": 1174
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1175
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1178,
                "end": 1180
              },
              "start": 1160,
              "end": 1180
            },
            "directive": null,
            "start": 1160,
            "end": 1181
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
                  "name": "t10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1190,
                  "end": 1193
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1198
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1199,
                    "end": 1200
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1196,
                  "end": 1201
                },
                "definite": false,
                "start": 1190,
                "end": 1201
              }
            ],
            "declare": false,
            "start": 1186,
            "end": 1202
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
                  "name": "t11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1222,
                  "end": 1225
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1228,
                    "end": 1230
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1231,
                    "end": 1232
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1228,
                  "end": 1233
                },
                "definite": false,
                "start": 1222,
                "end": 1233
              }
            ],
            "declare": false,
            "start": 1218,
            "end": 1234
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
                  "name": "t12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1257
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1260,
                    "end": 1262
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1263,
                    "end": 1264
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1260,
                  "end": 1265
                },
                "definite": false,
                "start": 1254,
                "end": 1265
              }
            ],
            "declare": false,
            "start": 1250,
            "end": 1266
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
                  "name": "t1x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1289,
                  "end": 1292
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1295,
                    "end": 1297
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1298,
                    "end": 1299
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1295,
                  "end": 1300
                },
                "definite": false,
                "start": 1289,
                "end": 1300
              }
            ],
            "declare": false,
            "start": 1285,
            "end": 1301
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
                  "name": "t20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1330,
                  "end": 1333
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1336,
                    "end": 1338
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1339,
                    "end": 1340
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1336,
                  "end": 1341
                },
                "definite": false,
                "start": 1330,
                "end": 1341
              }
            ],
            "declare": false,
            "start": 1326,
            "end": 1342
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
                  "name": "t21",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1375
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1380
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1381,
                    "end": 1382
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1378,
                  "end": 1383
                },
                "definite": false,
                "start": 1372,
                "end": 1383
              }
            ],
            "declare": false,
            "start": 1368,
            "end": 1384
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
                  "name": "t22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1416,
                  "end": 1419
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1422,
                    "end": 1424
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1425,
                    "end": 1426
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1422,
                  "end": 1427
                },
                "definite": false,
                "start": 1416,
                "end": 1427
              }
            ],
            "declare": false,
            "start": 1412,
            "end": 1428
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
                  "name": "t2x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1451,
                  "end": 1454
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1457,
                    "end": 1459
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1461
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1457,
                  "end": 1462
                },
                "definite": false,
                "start": 1451,
                "end": 1462
              }
            ],
            "declare": false,
            "start": 1447,
            "end": 1463
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
                  "name": "t30",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1502,
                  "end": 1505
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1508,
                    "end": 1510
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1511,
                    "end": 1512
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1508,
                  "end": 1513
                },
                "definite": false,
                "start": 1502,
                "end": 1513
              }
            ],
            "declare": false,
            "start": 1498,
            "end": 1514
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
                  "name": "t31",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1534,
                  "end": 1537
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1540,
                    "end": 1542
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1543,
                    "end": 1544
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1540,
                  "end": 1545
                },
                "definite": false,
                "start": 1534,
                "end": 1545
              }
            ],
            "declare": false,
            "start": 1530,
            "end": 1546
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
                  "name": "t32",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1566,
                  "end": 1569
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1572,
                    "end": 1574
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1575,
                    "end": 1576
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1572,
                  "end": 1577
                },
                "definite": false,
                "start": 1566,
                "end": 1577
              }
            ],
            "declare": false,
            "start": 1562,
            "end": 1578
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
                  "name": "t3x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1598,
                  "end": 1601
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1604,
                    "end": 1606
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1607,
                    "end": 1608
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1604,
                  "end": 1609
                },
                "definite": false,
                "start": 1598,
                "end": 1609
              }
            ],
            "declare": false,
            "start": 1594,
            "end": 1610
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
                  "name": "t40",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1639,
                  "end": 1642
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1645,
                    "end": 1647
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1648,
                    "end": 1649
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1645,
                  "end": 1650
                },
                "definite": false,
                "start": 1639,
                "end": 1650
              }
            ],
            "declare": false,
            "start": 1635,
            "end": 1651
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
                  "name": "t41",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1684
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1687,
                    "end": 1689
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1690,
                    "end": 1691
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1687,
                  "end": 1692
                },
                "definite": false,
                "start": 1681,
                "end": 1692
              }
            ],
            "declare": false,
            "start": 1677,
            "end": 1693
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
                  "name": "t42",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1725,
                  "end": 1728
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1733
                  },
                  "property": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1734,
                    "end": 1735
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1731,
                  "end": 1736
                },
                "definite": false,
                "start": 1725,
                "end": 1736
              }
            ],
            "declare": false,
            "start": 1721,
            "end": 1737
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
                  "name": "t4x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1769,
                  "end": 1772
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1775,
                    "end": 1777
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1778,
                    "end": 1779
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1775,
                  "end": 1780
                },
                "definite": false,
                "start": 1769,
                "end": 1780
              }
            ],
            "declare": false,
            "start": 1765,
            "end": 1781
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
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1816,
                  "end": 1818
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1819,
                  "end": 1820
                },
                "optional": false,
                "computed": true,
                "start": 1816,
                "end": 1821
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1824,
                "end": 1826
              },
              "start": 1816,
              "end": 1826
            },
            "directive": null,
            "start": 1816,
            "end": 1827
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1832,
                  "end": 1834
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1835,
                  "end": 1836
                },
                "optional": false,
                "computed": true,
                "start": 1832,
                "end": 1837
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1840,
                "end": 1842
              },
              "start": 1832,
              "end": 1842
            },
            "directive": null,
            "start": 1832,
            "end": 1843
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
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1848,
                  "end": 1850
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1851,
                  "end": 1852
                },
                "optional": false,
                "computed": true,
                "start": 1848,
                "end": 1853
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1856,
                "end": 1858
              },
              "start": 1848,
              "end": 1858
            },
            "directive": null,
            "start": 1848,
            "end": 1859
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
                  "name": "t4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1864,
                  "end": 1866
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1867,
                  "end": 1868
                },
                "optional": false,
                "computed": true,
                "start": 1864,
                "end": 1869
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1872,
                "end": 1874
              },
              "start": 1864,
              "end": 1874
            },
            "directive": null,
            "start": 1864,
            "end": 1875
          }
        ],
        "start": 808,
        "end": 1877
      },
      "expression": false,
      "start": 753,
      "end": 1877
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unioned",
        "optional": false,
        "typeAnnotation": null,
        "start": 1906,
        "end": 1913
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 1917,
                "end": 1923
              }
            ],
            "start": 1916,
            "end": 1924
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "start": 1928,
                "end": 1934
              },
              {
                "type": "TSNumberKeyword",
                "start": 1936,
                "end": 1942
              }
            ],
            "start": 1927,
            "end": 1943
          }
        ],
        "start": 1916,
        "end": 1943
      },
      "declare": false,
      "start": 1901,
      "end": 1944
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
            "name": "ex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unioned",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1955,
                  "end": 1962
                },
                "typeArguments": null,
                "start": 1955,
                "end": 1962
              },
              "start": 1953,
              "end": 1962
            },
            "start": 1951,
            "end": 1962
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 1966,
                  "end": 1970
                }
              ],
              "start": 1965,
              "end": 1971
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unioned",
                "optional": false,
                "typeAnnotation": null,
                "start": 1975,
                "end": 1982
              },
              "typeArguments": null,
              "start": 1975,
              "end": 1982
            },
            "start": 1965,
            "end": 1982
          },
          "definite": false,
          "start": 1951,
          "end": 1982
        }
      ],
      "declare": false,
      "start": 1945,
      "end": 1983
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1992,
                "end": 1993
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 1996
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1997
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ex",
            "optional": false,
            "typeAnnotation": null,
            "start": 2000,
            "end": 2002
          },
          "definite": false,
          "start": 1991,
          "end": 2002
        }
      ],
      "declare": false,
      "start": 1985,
      "end": 2003
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2003
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
    "value": "T1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 11,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 68,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 101,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 132,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 147,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 176,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 205,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 237,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "T1N",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 281,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 294,
    "end": 295
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "type",
    "start": 320,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 361,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 366,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 374,
    "end": 375
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 393,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "T2N",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 404,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 447,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 460,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 476,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "type",
    "start": 505,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 518,
    "end": 519
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 534,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "T3N",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 545,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 578,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "T40",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 589,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 591,
    "end": 592
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T41",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 628,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 658,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "T42",
    "start": 663,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 671,
    "end": 672
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 699,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "T4N",
    "start": 704,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 710,
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
    "value": "number",
    "start": 713,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 753,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 781,
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
    "value": "T3",
    "start": 785,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 789,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 800,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 814,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "d10",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "d11",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "d12",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "t1",
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
    "value": "let",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "d20",
    "start": 868,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "d21",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "d22",
    "start": 878,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 885,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "d30",
    "start": 939,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "d31",
    "start": 944,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "d32",
    "start": 949,
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
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 956,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 991,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "d40",
    "start": 996,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "d41",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "d42",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1013,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "d10",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "d11",
    "start": 1088,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "d12",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "d20",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "d21",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "d22",
    "start": 1119,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1126,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "d30",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "d31",
    "start": 1140,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "d32",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1152,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "d40",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "d41",
    "start": 1166,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "d42",
    "start": 1171,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1186,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "t10",
    "start": 1190,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1196,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "t11",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1228,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "t12",
    "start": 1254,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1260,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1285,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "t1x",
    "start": 1289,
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
    "value": "t1",
    "start": 1295,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "t20",
    "start": 1330,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1336,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "t21",
    "start": 1372,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1378,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1412,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "t22",
    "start": 1416,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1422,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1447,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "t2x",
    "start": 1451,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1457,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1498,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "t30",
    "start": 1502,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1508,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1530,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "t31",
    "start": 1534,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1562,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "t32",
    "start": 1566,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1572,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1594,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "t3x",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1604,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "t40",
    "start": 1639,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1645,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1677,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "t41",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1687,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1721,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "t42",
    "start": 1725,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1731,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1765,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "t4x",
    "start": 1769,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1775,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1816,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1824,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1832,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1840,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1856,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1864,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1872,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1901,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "Unioned",
    "start": 1906,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1936,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1945,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 1951,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "Unioned",
    "start": 1955,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "String",
    "value": "\"hi\"",
    "start": 1966,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1972,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "Unioned",
    "start": 1975,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1985,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "ex",
    "start": 2000,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2002,
    "end": 2003
  }
]
```
