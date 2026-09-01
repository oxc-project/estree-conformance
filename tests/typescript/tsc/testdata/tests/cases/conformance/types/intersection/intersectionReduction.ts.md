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
            "name": "sym1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 27,
                  "end": 33
                },
                "start": 20,
                "end": 33
              },
              "start": 18,
              "end": 33
            },
            "start": 14,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 33
        }
      ],
      "declare": true,
      "start": 0,
      "end": 34
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
            "name": "sym2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 62,
                  "end": 68
                },
                "start": 55,
                "end": 68
              },
              "start": 53,
              "end": 68
            },
            "start": 49,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 68
        }
      ],
      "declare": true,
      "start": 35,
      "end": 69
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 81,
            "end": 87
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 90,
              "end": 93
            },
            "start": 90,
            "end": 93
          }
        ],
        "start": 81,
        "end": 93
      },
      "declare": false,
      "start": 71,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 110
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 113,
              "end": 116
            },
            "start": 113,
            "end": 116
          },
          {
            "type": "TSStringKeyword",
            "start": 119,
            "end": 125
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 128,
              "end": 131
            },
            "start": 128,
            "end": 131
          }
        ],
        "start": 113,
        "end": 131
      },
      "declare": false,
      "start": 103,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 150
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 153,
            "end": 159
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 162,
              "end": 164
            },
            "start": 162,
            "end": 164
          }
        ],
        "start": 153,
        "end": 164
      },
      "declare": false,
      "start": 143,
      "end": 165
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 180
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 183,
              "end": 185
            },
            "start": 183,
            "end": 185
          },
          {
            "type": "TSNumberKeyword",
            "start": 188,
            "end": 194
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 20,
              "raw": "20",
              "start": 197,
              "end": 199
            },
            "start": 197,
            "end": 199
          }
        ],
        "start": 183,
        "end": 199
      },
      "declare": false,
      "start": 173,
      "end": 200
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 218
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSSymbolKeyword",
            "start": 221,
            "end": 227
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 241
            },
            "typeArguments": null,
            "start": 230,
            "end": 241
          }
        ],
        "start": 221,
        "end": 241
      },
      "declare": false,
      "start": 211,
      "end": 242
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 266
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 280
            },
            "typeArguments": null,
            "start": 269,
            "end": 280
          },
          {
            "type": "TSSymbolKeyword",
            "start": 283,
            "end": 289
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym2",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
            },
            "typeArguments": null,
            "start": 292,
            "end": 303
          }
        ],
        "start": 269,
        "end": 303
      },
      "declare": false,
      "start": 259,
      "end": 304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 322
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 325,
            "end": 331
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 334,
              "end": 337
            },
            "start": 334,
            "end": 337
          },
          {
            "type": "TSNumberKeyword",
            "start": 340,
            "end": 346
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 349,
              "end": 351
            },
            "start": 349,
            "end": 351
          },
          {
            "type": "TSSymbolKeyword",
            "start": 354,
            "end": 360
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym1",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 374
            },
            "typeArguments": null,
            "start": 363,
            "end": 374
          }
        ],
        "start": 325,
        "end": 374
      },
      "declare": false,
      "start": 315,
      "end": 375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 392,
        "end": 395
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 398,
            "end": 404
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 408,
                  "end": 411
                },
                "start": 408,
                "end": 411
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 414,
                  "end": 417
                },
                "start": 414,
                "end": 417
              }
            ],
            "start": 408,
            "end": 417
          }
        ],
        "start": 398,
        "end": 418
      },
      "declare": false,
      "start": 387,
      "end": 419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 442
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 446,
                "end": 452
              },
              {
                "type": "TSNumberKeyword",
                "start": 455,
                "end": 461
              }
            ],
            "start": 446,
            "end": 461
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 466,
                  "end": 469
                },
                "start": 466,
                "end": 469
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 472,
                  "end": 474
                },
                "start": 472,
                "end": 474
              }
            ],
            "start": 466,
            "end": 474
          }
        ],
        "start": 445,
        "end": 475
      },
      "declare": false,
      "start": 434,
      "end": 476
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 498
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 501,
              "end": 504
            },
            "start": 501,
            "end": 504
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 507,
              "end": 510
            },
            "start": 507,
            "end": 510
          }
        ],
        "start": 501,
        "end": 510
      },
      "declare": false,
      "start": 491,
      "end": 511
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N2",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 519
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "start": 524,
                  "end": 525
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  },
                  "start": 525,
                  "end": 533
                },
                "accessibility": null,
                "static": false,
                "start": 524,
                "end": 533
              }
            ],
            "start": 522,
            "end": 535
          },
          {
            "type": "TSNullKeyword",
            "start": 538,
            "end": 542
          }
        ],
        "start": 522,
        "end": 542
      },
      "declare": false,
      "start": 512,
      "end": 543
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N3",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 551
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "start": 556,
                  "end": 557
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 559,
                    "end": 565
                  },
                  "start": 557,
                  "end": 565
                },
                "accessibility": null,
                "static": false,
                "start": 556,
                "end": 565
              }
            ],
            "start": 554,
            "end": 567
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 570,
            "end": 579
          }
        ],
        "start": 554,
        "end": 579
      },
      "declare": false,
      "start": 544,
      "end": 580
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N4",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 588
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 591,
            "end": 597
          },
          {
            "type": "TSNumberKeyword",
            "start": 600,
            "end": 606
          }
        ],
        "start": 591,
        "end": 606
      },
      "declare": false,
      "start": 581,
      "end": 607
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N5",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 615
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 618,
            "end": 624
          },
          {
            "type": "TSObjectKeyword",
            "start": 627,
            "end": 633
          }
        ],
        "start": 618,
        "end": 633
      },
      "declare": false,
      "start": 608,
      "end": 634
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N6",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 642
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSSymbolKeyword",
            "start": 645,
            "end": 651
          },
          {
            "type": "TSStringKeyword",
            "start": 654,
            "end": 660
          }
        ],
        "start": 645,
        "end": 660
      },
      "declare": false,
      "start": 635,
      "end": 661
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N7",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 669
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSVoidKeyword",
            "start": 672,
            "end": 676
          },
          {
            "type": "TSStringKeyword",
            "start": 679,
            "end": 685
          }
        ],
        "start": 672,
        "end": 685
      },
      "declare": false,
      "start": 662,
      "end": 686
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 693,
        "end": 694
      },
      "typeParameters": null,
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
              "start": 699,
              "end": 700
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 702,
                "end": 708
              },
              "start": 700,
              "end": 708
            },
            "accessibility": null,
            "static": false,
            "start": 699,
            "end": 708
          }
        ],
        "start": 697,
        "end": 710
      },
      "declare": false,
      "start": 688,
      "end": 711
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 718,
        "end": 720
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 724
            },
            "typeArguments": null,
            "start": 723,
            "end": 724
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 727,
                  "end": 730
                },
                "start": 727,
                "end": 730
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 733,
                  "end": 736
                },
                "start": 733,
                "end": 736
              }
            ],
            "start": 727,
            "end": 736
          }
        ],
        "start": 723,
        "end": 736
      },
      "declare": false,
      "start": 713,
      "end": 737
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 745
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 749
            },
            "typeArguments": null,
            "start": 748,
            "end": 749
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
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
                      "start": 754,
                      "end": 755
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 757,
                        "end": 763
                      },
                      "start": 755,
                      "end": 763
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 754,
                    "end": 763
                  }
                ],
                "start": 752,
                "end": 765
              },
              {
                "type": "TSNullKeyword",
                "start": 768,
                "end": 772
              }
            ],
            "start": 752,
            "end": 772
          }
        ],
        "start": 748,
        "end": 772
      },
      "declare": false,
      "start": 738,
      "end": 773
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 779,
        "end": 781
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 785
            },
            "typeArguments": null,
            "start": 784,
            "end": 785
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
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
                      "start": 790,
                      "end": 791
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 793,
                        "end": 799
                      },
                      "start": 791,
                      "end": 799
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 790,
                    "end": 799
                  }
                ],
                "start": 788,
                "end": 801
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 804,
                "end": 813
              }
            ],
            "start": 788,
            "end": 813
          }
        ],
        "start": 784,
        "end": 813
      },
      "declare": false,
      "start": 774,
      "end": 814
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4",
        "optional": false,
        "typeAnnotation": null,
        "start": 820,
        "end": 822
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 825,
              "end": 826
            },
            "typeArguments": null,
            "start": 825,
            "end": 826
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 829,
                "end": 835
              },
              {
                "type": "TSNumberKeyword",
                "start": 838,
                "end": 844
              }
            ],
            "start": 829,
            "end": 844
          }
        ],
        "start": 825,
        "end": 844
      },
      "declare": false,
      "start": 815,
      "end": 845
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X5",
        "optional": false,
        "typeAnnotation": null,
        "start": 851,
        "end": 853
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 857
            },
            "typeArguments": null,
            "start": 856,
            "end": 857
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 860,
                "end": 866
              },
              {
                "type": "TSObjectKeyword",
                "start": 869,
                "end": 875
              }
            ],
            "start": 860,
            "end": 875
          }
        ],
        "start": 856,
        "end": 875
      },
      "declare": false,
      "start": 846,
      "end": 876
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X6",
        "optional": false,
        "typeAnnotation": null,
        "start": 882,
        "end": 884
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
            },
            "typeArguments": null,
            "start": 887,
            "end": 888
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSSymbolKeyword",
                "start": 891,
                "end": 897
              },
              {
                "type": "TSStringKeyword",
                "start": 900,
                "end": 906
              }
            ],
            "start": 891,
            "end": 906
          }
        ],
        "start": 887,
        "end": 906
      },
      "declare": false,
      "start": 877,
      "end": 907
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X7",
        "optional": false,
        "typeAnnotation": null,
        "start": 913,
        "end": 915
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 918,
              "end": 919
            },
            "typeArguments": null,
            "start": 918,
            "end": 919
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSVoidKeyword",
                "start": 922,
                "end": 926
              },
              {
                "type": "TSStringKeyword",
                "start": 929,
                "end": 935
              }
            ],
            "start": 922,
            "end": 935
          }
        ],
        "start": 918,
        "end": 935
      },
      "declare": false,
      "start": 908,
      "end": 936
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 943,
        "end": 944
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 953
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 955,
                  "end": 958
                },
                "start": 955,
                "end": 958
              },
              "start": 953,
              "end": 958
            },
            "accessibility": null,
            "static": false,
            "start": 949,
            "end": 959
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 960,
              "end": 963
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 965,
                "end": 971
              },
              "start": 963,
              "end": 971
            },
            "accessibility": null,
            "static": false,
            "start": 960,
            "end": 971
          }
        ],
        "start": 947,
        "end": 973
      },
      "declare": false,
      "start": 938,
      "end": 974
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
        "end": 981
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 990
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 992,
                  "end": 995
                },
                "start": 992,
                "end": 995
              },
              "start": 990,
              "end": 995
            },
            "accessibility": null,
            "static": false,
            "start": 986,
            "end": 996
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 997,
              "end": 1000
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1002,
                "end": 1008
              },
              "start": 1000,
              "end": 1008
            },
            "accessibility": null,
            "static": false,
            "start": 997,
            "end": 1008
          }
        ],
        "start": 984,
        "end": 1010
      },
      "declare": false,
      "start": 975,
      "end": 1011
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1017,
        "end": 1018
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 1029,
                  "end": 1032
                },
                "start": 1029,
                "end": 1032
              },
              "start": 1027,
              "end": 1032
            },
            "accessibility": null,
            "static": false,
            "start": 1023,
            "end": 1033
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1037
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1039,
                "end": 1045
              },
              "start": 1037,
              "end": 1045
            },
            "accessibility": null,
            "static": false,
            "start": 1034,
            "end": 1045
          }
        ],
        "start": 1021,
        "end": 1047
      },
      "declare": false,
      "start": 1012,
      "end": 1048
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1066,
                      "end": 1067
                    },
                    "typeArguments": null,
                    "start": 1066,
                    "end": 1067
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1070,
                      "end": 1071
                    },
                    "typeArguments": null,
                    "start": 1070,
                    "end": 1071
                  }
                ],
                "start": 1066,
                "end": 1071
              },
              "start": 1064,
              "end": 1071
            },
            "start": 1062,
            "end": 1071
          },
          "init": null,
          "definite": false,
          "start": 1062,
          "end": 1071
        }
      ],
      "declare": true,
      "start": 1050,
      "end": 1072
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": null,
          "start": 1073,
          "end": 1075
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "kind",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1080
        },
        "optional": false,
        "computed": false,
        "start": 1073,
        "end": 1080
      },
      "directive": null,
      "start": 1073,
      "end": 1081
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
            "name": "x",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1108,
                      "end": 1109
                    },
                    "typeArguments": null,
                    "start": 1108,
                    "end": 1109
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1113,
                          "end": 1114
                        },
                        "typeArguments": null,
                        "start": 1113,
                        "end": 1114
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1117,
                          "end": 1118
                        },
                        "typeArguments": null,
                        "start": 1117,
                        "end": 1118
                      }
                    ],
                    "start": 1113,
                    "end": 1118
                  }
                ],
                "start": 1108,
                "end": 1119
              },
              "start": 1106,
              "end": 1119
            },
            "start": 1105,
            "end": 1119
          },
          "init": null,
          "definite": false,
          "start": 1105,
          "end": 1119
        }
      ],
      "declare": true,
      "start": 1093,
      "end": 1120
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1135
                },
                "typeArguments": null,
                "start": 1134,
                "end": 1135
              },
              "start": 1132,
              "end": 1135
            },
            "start": 1131,
            "end": 1135
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1138,
            "end": 1139
          },
          "definite": false,
          "start": 1131,
          "end": 1139
        }
      ],
      "declare": false,
      "start": 1127,
      "end": 1140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1147,
        "end": 1149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1152,
              "end": 1153
            },
            "typeArguments": null,
            "start": 1152,
            "end": 1153
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1156,
              "end": 1157
            },
            "typeArguments": null,
            "start": 1156,
            "end": 1157
          }
        ],
        "start": 1152,
        "end": 1157
      },
      "declare": false,
      "start": 1142,
      "end": 1158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1176
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1179,
              "end": 1180
            },
            "typeArguments": null,
            "start": 1179,
            "end": 1180
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1184
            },
            "typeArguments": null,
            "start": 1183,
            "end": 1184
          }
        ],
        "start": 1179,
        "end": 1184
      },
      "declare": false,
      "start": 1169,
      "end": 1185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1204
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 1207,
          "end": 1214
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1215,
                    "end": 1216
                  },
                  "typeArguments": null,
                  "start": 1215,
                  "end": 1216
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1219,
                    "end": 1220
                  },
                  "typeArguments": null,
                  "start": 1219,
                  "end": 1220
                }
              ],
              "start": 1215,
              "end": 1220
            }
          ],
          "start": 1214,
          "end": 1221
        },
        "start": 1207,
        "end": 1221
      },
      "declare": false,
      "start": 1197,
      "end": 1222
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1240
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1251
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "typeArguments": null,
                  "start": 1252,
                  "end": 1253
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1256,
                    "end": 1257
                  },
                  "typeArguments": null,
                  "start": 1256,
                  "end": 1257
                }
              ],
              "start": 1252,
              "end": 1257
            }
          ],
          "start": 1251,
          "end": 1258
        },
        "start": 1243,
        "end": 1258
      },
      "declare": false,
      "start": 1233,
      "end": 1259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1277
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1282
              },
              "typeArguments": null,
              "start": 1281,
              "end": 1282
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1285,
                "end": 1286
              },
              "typeArguments": null,
              "start": 1285,
              "end": 1286
            }
          ],
          "start": 1281,
          "end": 1286
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "kind",
            "raw": "'kind'",
            "start": 1288,
            "end": 1294
          },
          "start": 1288,
          "end": 1294
        },
        "start": 1280,
        "end": 1295
      },
      "declare": false,
      "start": 1270,
      "end": 1296
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1312,
        "end": 1314
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1318
                },
                "typeArguments": null,
                "start": 1317,
                "end": 1318
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1322
                },
                "typeArguments": null,
                "start": 1321,
                "end": 1322
              }
            ],
            "start": 1317,
            "end": 1322
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1326
                },
                "typeArguments": null,
                "start": 1325,
                "end": 1326
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1330
                },
                "typeArguments": null,
                "start": 1329,
                "end": 1330
              }
            ],
            "start": 1325,
            "end": 1330
          }
        ],
        "start": 1317,
        "end": 1330
      },
      "declare": false,
      "start": 1307,
      "end": 1331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1347,
        "end": 1349
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1352,
              "end": 1353
            },
            "typeArguments": null,
            "start": 1352,
            "end": 1353
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1356,
                  "end": 1357
                },
                "typeArguments": null,
                "start": 1356,
                "end": 1357
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1360,
                  "end": 1361
                },
                "typeArguments": null,
                "start": 1360,
                "end": 1361
              }
            ],
            "start": 1356,
            "end": 1361
          }
        ],
        "start": 1352,
        "end": 1361
      },
      "declare": false,
      "start": 1342,
      "end": 1362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1375,
        "end": 1377
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1388
              },
              "typeArguments": null,
              "start": 1387,
              "end": 1388
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1391,
                "end": 1392
              },
              "typeArguments": null,
              "start": 1391,
              "end": 1392
            }
          ],
          "start": 1387,
          "end": 1392
        },
        "start": 1380,
        "end": 1393
      },
      "declare": false,
      "start": 1370,
      "end": 1394
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1429,
        "end": 1431
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1441
              },
              "typeArguments": null,
              "start": 1440,
              "end": 1441
            },
            "start": 1434,
            "end": 1441
          },
          {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1451
              },
              "typeArguments": null,
              "start": 1450,
              "end": 1451
            },
            "start": 1444,
            "end": 1451
          }
        ],
        "start": 1434,
        "end": 1451
      },
      "declare": false,
      "start": 1424,
      "end": 1452
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Merge1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1478,
        "end": 1484
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
              "start": 1485,
              "end": 1486
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1485,
            "end": 1486
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1488,
              "end": 1489
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1488,
            "end": 1489
          }
        ],
        "start": 1484,
        "end": 1490
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1496,
          "end": 1497
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1509
                },
                "typeArguments": null,
                "start": 1508,
                "end": 1509
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1512,
                  "end": 1513
                },
                "typeArguments": null,
                "start": 1512,
                "end": 1513
              }
            ],
            "start": 1508,
            "end": 1513
          },
          "start": 1501,
          "end": 1514
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1517,
              "end": 1518
            },
            "typeArguments": null,
            "start": 1517,
            "end": 1518
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1533,
                "end": 1534
              },
              "typeArguments": null,
              "start": 1533,
              "end": 1534
            },
            "start": 1527,
            "end": 1534
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1537,
                "end": 1538
              },
              "typeArguments": null,
              "start": 1537,
              "end": 1538
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1539,
                "end": 1540
              },
              "typeArguments": null,
              "start": 1539,
              "end": 1540
            },
            "start": 1537,
            "end": 1541
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1544,
                "end": 1545
              },
              "typeArguments": null,
              "start": 1544,
              "end": 1545
            },
            "indexType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1546,
                    "end": 1547
                  },
                  "typeArguments": null,
                  "start": 1546,
                  "end": 1547
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1556,
                      "end": 1557
                    },
                    "typeArguments": null,
                    "start": 1556,
                    "end": 1557
                  },
                  "start": 1550,
                  "end": 1557
                }
              ],
              "start": 1546,
              "end": 1557
            },
            "start": 1544,
            "end": 1558
          },
          "start": 1517,
          "end": 1558
        },
        "optional": false,
        "readonly": null,
        "start": 1493,
        "end": 1560
      },
      "declare": false,
      "start": 1473,
      "end": 1560
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Merge2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1566,
        "end": 1572
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
              "start": 1573,
              "end": 1574
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1573,
            "end": 1574
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1576,
              "end": 1577
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1576,
            "end": 1577
          }
        ],
        "start": 1572,
        "end": 1578
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1584,
          "end": 1585
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1595,
                  "end": 1596
                },
                "typeArguments": null,
                "start": 1595,
                "end": 1596
              },
              "start": 1589,
              "end": 1596
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1605,
                  "end": 1606
                },
                "typeArguments": null,
                "start": 1605,
                "end": 1606
              },
              "start": 1599,
              "end": 1606
            }
          ],
          "start": 1589,
          "end": 1606
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1609,
              "end": 1610
            },
            "typeArguments": null,
            "start": 1609,
            "end": 1610
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1625,
                "end": 1626
              },
              "typeArguments": null,
              "start": 1625,
              "end": 1626
            },
            "start": 1619,
            "end": 1626
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1629,
                "end": 1630
              },
              "typeArguments": null,
              "start": 1629,
              "end": 1630
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1631,
                "end": 1632
              },
              "typeArguments": null,
              "start": 1631,
              "end": 1632
            },
            "start": 1629,
            "end": 1633
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1637
              },
              "typeArguments": null,
              "start": 1636,
              "end": 1637
            },
            "indexType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1638,
                    "end": 1639
                  },
                  "typeArguments": null,
                  "start": 1638,
                  "end": 1639
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1648,
                      "end": 1649
                    },
                    "typeArguments": null,
                    "start": 1648,
                    "end": 1649
                  },
                  "start": 1642,
                  "end": 1649
                }
              ],
              "start": 1638,
              "end": 1649
            },
            "start": 1636,
            "end": 1650
          },
          "start": 1609,
          "end": 1650
        },
        "optional": false,
        "readonly": null,
        "start": 1581,
        "end": 1652
      },
      "declare": false,
      "start": 1561,
      "end": 1652
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1659,
        "end": 1661
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
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
                  "start": 1666,
                  "end": 1667
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1669,
                      "end": 1670
                    },
                    "start": 1669,
                    "end": 1670
                  },
                  "start": 1667,
                  "end": 1670
                },
                "accessibility": null,
                "static": false,
                "start": 1666,
                "end": 1671
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
                  "start": 1672,
                  "end": 1673
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1675,
                      "end": 1676
                    },
                    "start": 1675,
                    "end": 1676
                  },
                  "start": 1673,
                  "end": 1676
                },
                "accessibility": null,
                "static": false,
                "start": 1672,
                "end": 1676
              }
            ],
            "start": 1664,
            "end": 1678
          },
          {
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
                  "start": 1683,
                  "end": 1684
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 1686,
                      "end": 1687
                    },
                    "start": 1686,
                    "end": 1687
                  },
                  "start": 1684,
                  "end": 1687
                },
                "accessibility": null,
                "static": false,
                "start": 1683,
                "end": 1688
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1689,
                  "end": 1690
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 1692,
                      "end": 1693
                    },
                    "start": 1692,
                    "end": 1693
                  },
                  "start": 1690,
                  "end": 1693
                },
                "accessibility": null,
                "static": false,
                "start": 1689,
                "end": 1693
              }
            ],
            "start": 1681,
            "end": 1695
          }
        ],
        "start": 1664,
        "end": 1695
      },
      "declare": false,
      "start": 1654,
      "end": 1696
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1712,
        "end": 1714
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Merge1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1717,
          "end": 1723
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 1726,
                    "end": 1727
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1729,
                        "end": 1730
                      },
                      "start": 1729,
                      "end": 1730
                    },
                    "start": 1727,
                    "end": 1730
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1726,
                  "end": 1731
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
                    "start": 1732,
                    "end": 1733
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1735,
                        "end": 1736
                      },
                      "start": 1735,
                      "end": 1736
                    },
                    "start": 1733,
                    "end": 1736
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1732,
                  "end": 1736
                }
              ],
              "start": 1724,
              "end": 1738
            },
            {
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
                    "start": 1742,
                    "end": 1743
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1745,
                        "end": 1746
                      },
                      "start": 1745,
                      "end": 1746
                    },
                    "start": 1743,
                    "end": 1746
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1742,
                  "end": 1747
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1748,
                    "end": 1749
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 1751,
                        "end": 1752
                      },
                      "start": 1751,
                      "end": 1752
                    },
                    "start": 1749,
                    "end": 1752
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1748,
                  "end": 1752
                }
              ],
              "start": 1740,
              "end": 1754
            }
          ],
          "start": 1723,
          "end": 1755
        },
        "start": 1717,
        "end": 1755
      },
      "declare": false,
      "start": 1707,
      "end": 1756
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1769,
        "end": 1771
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Merge2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1774,
          "end": 1780
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "start": 1783,
                    "end": 1784
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1786,
                        "end": 1787
                      },
                      "start": 1786,
                      "end": 1787
                    },
                    "start": 1784,
                    "end": 1787
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1783,
                  "end": 1788
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
                    "start": 1789,
                    "end": 1790
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1792,
                        "end": 1793
                      },
                      "start": 1792,
                      "end": 1793
                    },
                    "start": 1790,
                    "end": 1793
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1789,
                  "end": 1793
                }
              ],
              "start": 1781,
              "end": 1795
            },
            {
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
                    "start": 1799,
                    "end": 1800
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1802,
                        "end": 1803
                      },
                      "start": 1802,
                      "end": 1803
                    },
                    "start": 1800,
                    "end": 1803
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1799,
                  "end": 1804
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1805,
                    "end": 1806
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 1808,
                        "end": 1809
                      },
                      "start": 1808,
                      "end": 1809
                    },
                    "start": 1806,
                    "end": 1809
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1805,
                  "end": 1809
                }
              ],
              "start": 1797,
              "end": 1811
            }
          ],
          "start": 1780,
          "end": 1812
        },
        "start": 1774,
        "end": 1812
      },
      "declare": false,
      "start": 1764,
      "end": 1813
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1845,
        "end": 1846
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1851,
              "end": 1855
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "'d'",
                  "start": 1857,
                  "end": 1860
                },
                "start": 1857,
                "end": 1860
              },
              "start": 1855,
              "end": 1860
            },
            "accessibility": null,
            "static": false,
            "start": 1851,
            "end": 1861
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1862,
              "end": 1865
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1867,
                "end": 1874
              },
              "start": 1865,
              "end": 1874
            },
            "accessibility": null,
            "static": false,
            "start": 1862,
            "end": 1874
          }
        ],
        "start": 1849,
        "end": 1876
      },
      "declare": false,
      "start": 1840,
      "end": 1877
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1883,
        "end": 1884
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1889,
              "end": 1893
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "e",
                  "raw": "'e'",
                  "start": 1895,
                  "end": 1898
                },
                "start": 1895,
                "end": 1898
              },
              "start": 1893,
              "end": 1898
            },
            "accessibility": null,
            "static": false,
            "start": 1889,
            "end": 1899
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1903
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1905,
                "end": 1912
              },
              "start": 1903,
              "end": 1912
            },
            "accessibility": null,
            "static": false,
            "start": 1900,
            "end": 1912
          }
        ],
        "start": 1887,
        "end": 1914
      },
      "declare": false,
      "start": 1878,
      "end": 1915
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1934,
        "end": 1937
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1938,
              "end": 1939
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1938,
            "end": 1939
          }
        ],
        "start": 1937,
        "end": 1940
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1946,
                    "end": 1949
                  },
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
                        "start": 1951,
                        "end": 1952
                      },
                      "typeArguments": null,
                      "start": 1951,
                      "end": 1952
                    },
                    "start": 1949,
                    "end": 1952
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1946,
                  "end": 1952
                }
              ],
              "start": 1944,
              "end": 1954
            },
            "start": 1942,
            "end": 1954
          },
          "start": 1941,
          "end": 1954
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1957,
            "end": 1958
          },
          "typeArguments": null,
          "start": 1957,
          "end": 1958
        },
        "start": 1955,
        "end": 1958
      },
      "body": null,
      "expression": false,
      "start": 1917,
      "end": 1959
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
            "name": "a1",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1977,
                      "end": 1978
                    },
                    "typeArguments": null,
                    "start": 1977,
                    "end": 1978
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1981,
                      "end": 1982
                    },
                    "typeArguments": null,
                    "start": 1981,
                    "end": 1982
                  }
                ],
                "start": 1977,
                "end": 1982
              },
              "start": 1975,
              "end": 1982
            },
            "start": 1973,
            "end": 1982
          },
          "init": null,
          "definite": false,
          "start": 1973,
          "end": 1982
        }
      ],
      "declare": true,
      "start": 1961,
      "end": 1983
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
            "name": "a2",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2000,
                      "end": 2001
                    },
                    "typeArguments": null,
                    "start": 2000,
                    "end": 2001
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2004,
                          "end": 2005
                        },
                        "typeArguments": null,
                        "start": 2004,
                        "end": 2005
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2008,
                          "end": 2009
                        },
                        "typeArguments": null,
                        "start": 2008,
                        "end": 2009
                      }
                    ],
                    "start": 2004,
                    "end": 2009
                  }
                ],
                "start": 2000,
                "end": 2009
              },
              "start": 1998,
              "end": 2009
            },
            "start": 1996,
            "end": 2009
          },
          "init": null,
          "definite": false,
          "start": 1996,
          "end": 2009
        }
      ],
      "declare": true,
      "start": 1984,
      "end": 2010
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2016,
            "end": 2018
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2021,
              "end": 2024
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2025,
                "end": 2027
              }
            ],
            "optional": false,
            "start": 2021,
            "end": 2028
          },
          "definite": false,
          "start": 2016,
          "end": 2028
        }
      ],
      "declare": false,
      "start": 2012,
      "end": 2029
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2046,
            "end": 2048
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2051,
              "end": 2054
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2055,
                "end": 2057
              }
            ],
            "optional": false,
            "start": 2051,
            "end": 2058
          },
          "definite": false,
          "start": 2046,
          "end": 2058
        }
      ],
      "declare": false,
      "start": 2042,
      "end": 2059
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2100,
            "end": 2102
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2107,
                  "end": 2108
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2110,
                  "end": 2115
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2107,
                "end": 2115
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2117,
                  "end": 2118
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 2120,
                  "end": 2122
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2117,
                "end": 2122
              }
            ],
            "start": 2105,
            "end": 2124
          },
          "definite": false,
          "start": 2100,
          "end": 2124
        }
      ],
      "declare": false,
      "start": 2094,
      "end": 2125
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2132,
            "end": 2134
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2139,
                  "end": 2140
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 2142,
                  "end": 2147
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2139,
                "end": 2147
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2149,
                  "end": 2150
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2152,
                  "end": 2156
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2149,
                "end": 2156
              }
            ],
            "start": 2137,
            "end": 2158
          },
          "definite": false,
          "start": 2132,
          "end": 2158
        }
      ],
      "declare": false,
      "start": 2126,
      "end": 2159
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 2176,
                      "end": 2179
                    },
                    "start": 2176,
                    "end": 2179
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 2182,
                      "end": 2185
                    },
                    "start": 2182,
                    "end": 2185
                  }
                ],
                "start": 2176,
                "end": 2185
              },
              "start": 2174,
              "end": 2185
            },
            "start": 2173,
            "end": 2185
          },
          "init": null,
          "definite": false,
          "start": 2173,
          "end": 2185
        }
      ],
      "declare": true,
      "start": 2161,
      "end": 2186
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2188,
            "end": 2190
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 2191,
            "end": 2192
          },
          "optional": false,
          "computed": true,
          "start": 2188,
          "end": 2193
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 2196,
            "end": 2201
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2205,
            "end": 2208
          },
          "start": 2196,
          "end": 2208
        },
        "start": 2188,
        "end": 2208
      },
      "directive": null,
      "start": 2188,
      "end": 2209
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2220,
            "end": 2222
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 2223,
            "end": 2224
          },
          "optional": false,
          "computed": true,
          "start": 2220,
          "end": 2225
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 2228,
            "end": 2233
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2237,
            "end": 2240
          },
          "start": 2228,
          "end": 2240
        },
        "start": 2220,
        "end": 2240
      },
      "directive": null,
      "start": 2220,
      "end": 2241
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2264,
        "end": 2268
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2269,
        "end": 2271
      },
      "const": true,
      "declare": false,
      "start": 2253,
      "end": 2271
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2283,
        "end": 2287
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2288,
        "end": 2290
      },
      "const": true,
      "declare": false,
      "start": 2272,
      "end": 2290
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2308,
                    "end": 2314
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2317,
                      "end": 2321
                    },
                    "typeArguments": null,
                    "start": 2317,
                    "end": 2321
                  }
                ],
                "start": 2308,
                "end": 2321
              },
              "start": 2306,
              "end": 2321
            },
            "start": 2304,
            "end": 2321
          },
          "init": null,
          "definite": false,
          "start": 2304,
          "end": 2321
        }
      ],
      "declare": true,
      "start": 2292,
      "end": 2322
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2339,
                    "end": 2345
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2348,
                      "end": 2352
                    },
                    "typeArguments": null,
                    "start": 2348,
                    "end": 2352
                  }
                ],
                "start": 2339,
                "end": 2352
              },
              "start": 2337,
              "end": 2352
            },
            "start": 2335,
            "end": 2352
          },
          "init": null,
          "definite": false,
          "start": 2335,
          "end": 2352
        }
      ],
      "declare": true,
      "start": 2323,
      "end": 2353
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2371,
                        "end": 2377
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2380,
                          "end": 2384
                        },
                        "typeArguments": null,
                        "start": 2380,
                        "end": 2384
                      }
                    ],
                    "start": 2371,
                    "end": 2384
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2387,
                    "end": 2396
                  }
                ],
                "start": 2371,
                "end": 2396
              },
              "start": 2369,
              "end": 2396
            },
            "start": 2367,
            "end": 2396
          },
          "init": null,
          "definite": false,
          "start": 2367,
          "end": 2396
        }
      ],
      "declare": true,
      "start": 2355,
      "end": 2397
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2414,
                        "end": 2420
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2423,
                          "end": 2427
                        },
                        "typeArguments": null,
                        "start": 2423,
                        "end": 2427
                      }
                    ],
                    "start": 2414,
                    "end": 2427
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2430,
                    "end": 2439
                  }
                ],
                "start": 2414,
                "end": 2439
              },
              "start": 2412,
              "end": 2439
            },
            "start": 2410,
            "end": 2439
          },
          "init": null,
          "definite": false,
          "start": 2410,
          "end": 2439
        }
      ],
      "declare": true,
      "start": 2398,
      "end": 2440
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2442,
          "end": 2444
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2449
        },
        "start": 2442,
        "end": 2449
      },
      "directive": null,
      "start": 2442,
      "end": 2450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2451,
          "end": 2453
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2456,
          "end": 2458
        },
        "start": 2451,
        "end": 2458
      },
      "directive": null,
      "start": 2451,
      "end": 2459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2461,
          "end": 2463
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2466,
          "end": 2468
        },
        "start": 2461,
        "end": 2468
      },
      "directive": null,
      "start": 2461,
      "end": 2469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2470,
          "end": 2472
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2475,
          "end": 2477
        },
        "start": 2470,
        "end": 2477
      },
      "directive": null,
      "start": 2470,
      "end": 2478
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
            "typeAnnotation": null,
            "start": 2508,
            "end": 2510
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 2517,
                          "end": 2520
                        },
                        "start": 2517,
                        "end": 2520
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "b",
                              "raw": "\"b\"",
                              "start": 2524,
                              "end": 2527
                            },
                            "start": 2524,
                            "end": 2527
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "c",
                              "raw": "\"c\"",
                              "start": 2530,
                              "end": 2533
                            },
                            "start": 2530,
                            "end": 2533
                          }
                        ],
                        "start": 2524,
                        "end": 2533
                      }
                    ],
                    "start": 2517,
                    "end": 2534
                  },
                  "start": 2515,
                  "end": 2534
                },
                "start": 2514,
                "end": 2534
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 2537,
                  "end": 2540
                },
                "start": 2537,
                "end": 2540
              },
              "start": 2535,
              "end": 2540
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2545
            },
            "id": null,
            "generator": false,
            "start": 2513,
            "end": 2545
          },
          "definite": false,
          "start": 2508,
          "end": 2545
        }
      ],
      "declare": false,
      "start": 2502,
      "end": 2546
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null,
        "start": 2553,
        "end": 2562
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2563,
              "end": 2567
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2576,
              "end": 2582
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2563,
            "end": 2582
          }
        ],
        "start": 2562,
        "end": 2583
      },
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2596
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2598,
                  "end": 2602
                },
                "typeArguments": null,
                "start": 2598,
                "end": 2602
              },
              "start": 2596,
              "end": 2602
            },
            "accessibility": null,
            "static": false,
            "start": 2592,
            "end": 2603
          }
        ],
        "start": 2586,
        "end": 2605
      },
      "declare": false,
      "start": 2548,
      "end": 2605
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2613,
            "end": 2615
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2622,
                          "end": 2631
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 2632,
                                "end": 2635
                              },
                              "start": 2632,
                              "end": 2635
                            }
                          ],
                          "start": 2631,
                          "end": 2636
                        },
                        "start": 2622,
                        "end": 2636
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2640,
                              "end": 2649
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "\"b\"",
                                    "start": 2650,
                                    "end": 2653
                                  },
                                  "start": 2650,
                                  "end": 2653
                                }
                              ],
                              "start": 2649,
                              "end": 2654
                            },
                            "start": 2640,
                            "end": 2654
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2657,
                              "end": 2666
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "c",
                                    "raw": "\"c\"",
                                    "start": 2667,
                                    "end": 2670
                                  },
                                  "start": 2667,
                                  "end": 2670
                                }
                              ],
                              "start": 2666,
                              "end": 2671
                            },
                            "start": 2657,
                            "end": 2671
                          }
                        ],
                        "start": 2640,
                        "end": 2671
                      }
                    ],
                    "start": 2622,
                    "end": 2672
                  },
                  "start": 2620,
                  "end": 2672
                },
                "start": 2619,
                "end": 2672
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2675,
                  "end": 2684
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2685,
                        "end": 2688
                      },
                      "start": 2685,
                      "end": 2688
                    }
                  ],
                  "start": 2684,
                  "end": 2689
                },
                "start": 2675,
                "end": 2689
              },
              "start": 2673,
              "end": 2689
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2693,
              "end": 2694
            },
            "id": null,
            "generator": false,
            "start": 2618,
            "end": 2694
          },
          "definite": false,
          "start": 2613,
          "end": 2694
        }
      ],
      "declare": false,
      "start": 2607,
      "end": 2695
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2702,
            "end": 2704
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2711,
                          "end": 2720
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 2721,
                                "end": 2724
                              },
                              "start": 2721,
                              "end": 2724
                            }
                          ],
                          "start": 2720,
                          "end": 2725
                        },
                        "start": 2711,
                        "end": 2725
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2729,
                              "end": 2738
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "\"b\"",
                                    "start": 2739,
                                    "end": 2742
                                  },
                                  "start": 2739,
                                  "end": 2742
                                }
                              ],
                              "start": 2738,
                              "end": 2743
                            },
                            "start": 2729,
                            "end": 2743
                          },
                          {
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
                                  "name": "dataB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2748,
                                  "end": 2753
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2755,
                                    "end": 2762
                                  },
                                  "start": 2753,
                                  "end": 2762
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2748,
                                "end": 2762
                              }
                            ],
                            "start": 2746,
                            "end": 2764
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2767,
                              "end": 2776
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 2777,
                                    "end": 2780
                                  },
                                  "start": 2777,
                                  "end": 2780
                                }
                              ],
                              "start": 2776,
                              "end": 2781
                            },
                            "start": 2767,
                            "end": 2781
                          }
                        ],
                        "start": 2729,
                        "end": 2781
                      }
                    ],
                    "start": 2711,
                    "end": 2782
                  },
                  "start": 2709,
                  "end": 2782
                },
                "start": 2708,
                "end": 2782
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Container",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2785,
                  "end": 2794
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 2795,
                        "end": 2798
                      },
                      "start": 2795,
                      "end": 2798
                    }
                  ],
                  "start": 2794,
                  "end": 2799
                },
                "start": 2785,
                "end": 2799
              },
              "start": 2783,
              "end": 2799
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2803,
              "end": 2804
            },
            "id": null,
            "generator": false,
            "start": 2707,
            "end": 2804
          },
          "definite": false,
          "start": 2702,
          "end": 2804
        }
      ],
      "declare": false,
      "start": 2696,
      "end": 2805
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2812,
            "end": 2814
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 2821,
                        "end": 2827
                      },
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2831,
                              "end": 2840
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "b",
                                    "raw": "\"b\"",
                                    "start": 2841,
                                    "end": 2844
                                  },
                                  "start": 2841,
                                  "end": 2844
                                }
                              ],
                              "start": 2840,
                              "end": 2845
                            },
                            "start": 2831,
                            "end": 2845
                          },
                          {
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
                                  "name": "dataB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2850,
                                  "end": 2855
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2857,
                                    "end": 2864
                                  },
                                  "start": 2855,
                                  "end": 2864
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2850,
                                "end": 2864
                              }
                            ],
                            "start": 2848,
                            "end": 2866
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2869,
                              "end": 2878
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 2879,
                                    "end": 2882
                                  },
                                  "start": 2879,
                                  "end": 2882
                                }
                              ],
                              "start": 2878,
                              "end": 2883
                            },
                            "start": 2869,
                            "end": 2883
                          }
                        ],
                        "start": 2831,
                        "end": 2883
                      }
                    ],
                    "start": 2821,
                    "end": 2884
                  },
                  "start": 2819,
                  "end": 2884
                },
                "start": 2818,
                "end": 2884
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2887,
                "end": 2893
              },
              "start": 2885,
              "end": 2893
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2897,
              "end": 2898
            },
            "id": null,
            "generator": false,
            "start": 2817,
            "end": 2898
          },
          "definite": false,
          "start": 2812,
          "end": 2898
        }
      ],
      "declare": false,
      "start": 2806,
      "end": 2899
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2933,
        "end": 2935
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2942,
              "end": 2946
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 2948,
                  "end": 2951
                },
                "start": 2948,
                "end": 2951
              },
              "start": 2946,
              "end": 2951
            },
            "accessibility": null,
            "static": false,
            "start": 2942,
            "end": 2952
          },
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
              "start": 2957,
              "end": 2958
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2960,
                "end": 2966
              },
              "start": 2958,
              "end": 2966
            },
            "accessibility": null,
            "static": false,
            "start": 2957,
            "end": 2967
          }
        ],
        "start": 2936,
        "end": 2969
      },
      "declare": false,
      "start": 2923,
      "end": 2969
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2981,
        "end": 2983
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2990,
              "end": 2994
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 2996,
                  "end": 2999
                },
                "start": 2996,
                "end": 2999
              },
              "start": 2994,
              "end": 2999
            },
            "accessibility": null,
            "static": false,
            "start": 2990,
            "end": 3000
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
              "start": 3005,
              "end": 3006
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3008,
                "end": 3014
              },
              "start": 3006,
              "end": 3014
            },
            "accessibility": null,
            "static": false,
            "start": 3005,
            "end": 3015
          }
        ],
        "start": 2984,
        "end": 3017
      },
      "declare": false,
      "start": 2971,
      "end": 3017
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
            "name": "shouldBeB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3045,
                          "end": 3047
                        },
                        "typeArguments": null,
                        "start": 3045,
                        "end": 3047
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3050,
                          "end": 3052
                        },
                        "typeArguments": null,
                        "start": 3050,
                        "end": 3052
                      }
                    ],
                    "start": 3045,
                    "end": 3052
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3056,
                      "end": 3058
                    },
                    "typeArguments": null,
                    "start": 3056,
                    "end": 3058
                  }
                ],
                "start": 3044,
                "end": 3058
              },
              "start": 3042,
              "end": 3058
            },
            "start": 3033,
            "end": 3058
          },
          "init": null,
          "definite": false,
          "start": 3033,
          "end": 3058
        }
      ],
      "declare": true,
      "start": 3019,
      "end": 3059
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3069,
                  "end": 3071
                },
                "typeArguments": null,
                "start": 3069,
                "end": 3071
              },
              "start": 3067,
              "end": 3071
            },
            "start": 3066,
            "end": 3071
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeB",
            "optional": false,
            "typeAnnotation": null,
            "start": 3074,
            "end": 3083
          },
          "definite": false,
          "start": 3066,
          "end": 3083
        }
      ],
      "declare": false,
      "start": 3060,
      "end": 3084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 3104,
        "end": 3113
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
              "start": 3114,
              "end": 3115
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3124,
                    "end": 3126
                  },
                  "typeArguments": null,
                  "start": 3124,
                  "end": 3126
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3129,
                    "end": 3131
                  },
                  "typeArguments": null,
                  "start": 3129,
                  "end": 3131
                }
              ],
              "start": 3124,
              "end": 3131
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3114,
            "end": 3131
          }
        ],
        "start": 3113,
        "end": 3132
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "alsoShouldBeB",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3148,
                    "end": 3149
                  },
                  "typeArguments": null,
                  "start": 3148,
                  "end": 3149
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3152,
                    "end": 3154
                  },
                  "typeArguments": null,
                  "start": 3152,
                  "end": 3154
                }
              ],
              "start": 3148,
              "end": 3154
            },
            "start": 3146,
            "end": 3154
          },
          "start": 3133,
          "end": 3154
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3171,
                        "end": 3173
                      },
                      "typeArguments": null,
                      "start": 3171,
                      "end": 3173
                    },
                    "start": 3169,
                    "end": 3173
                  },
                  "start": 3168,
                  "end": 3173
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "alsoShouldBeB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3176,
                  "end": 3189
                },
                "definite": false,
                "start": 3168,
                "end": 3189
              }
            ],
            "declare": false,
            "start": 3162,
            "end": 3190
          }
        ],
        "start": 3156,
        "end": 3192
      },
      "expression": false,
      "start": 3095,
      "end": 3192
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ABI",
        "optional": false,
        "typeAnnotation": null,
        "start": 3226,
        "end": 3229
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3236,
              "end": 3240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 3242,
                      "end": 3245
                    },
                    "start": 3242,
                    "end": 3245
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 3248,
                      "end": 3251
                    },
                    "start": 3248,
                    "end": 3251
                  }
                ],
                "start": 3242,
                "end": 3251
              },
              "start": 3240,
              "end": 3251
            },
            "accessibility": null,
            "static": false,
            "start": 3236,
            "end": 3252
          }
        ],
        "start": 3230,
        "end": 3254
      },
      "declare": false,
      "start": 3216,
      "end": 3254
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CA",
        "optional": false,
        "typeAnnotation": null,
        "start": 3270,
        "end": 3272
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3275,
              "end": 3279
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 3281,
                  "end": 3284
                },
                "start": 3281,
                "end": 3284
              },
              "start": 3279,
              "end": 3284
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3275,
            "end": 3285
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3286,
              "end": 3287
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3289,
                "end": 3295
              },
              "start": 3287,
              "end": 3295
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3286,
            "end": 3296
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3297,
              "end": 3298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3300,
                "end": 3306
              },
              "start": 3298,
              "end": 3306
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3297,
            "end": 3306
          }
        ],
        "start": 3273,
        "end": 3308
      },
      "abstract": false,
      "declare": true,
      "start": 3256,
      "end": 3308
    },
    {
      "type": "EmptyStatement",
      "start": 3308,
      "end": 3309
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CB",
        "optional": false,
        "typeAnnotation": null,
        "start": 3324,
        "end": 3326
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3329,
              "end": 3333
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 3335,
                  "end": 3338
                },
                "start": 3335,
                "end": 3338
              },
              "start": 3333,
              "end": 3338
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3329,
            "end": 3339
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 3340,
              "end": 3341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3343,
                "end": 3349
              },
              "start": 3341,
              "end": 3349
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3340,
            "end": 3350
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3351,
              "end": 3352
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3354,
                "end": 3360
              },
              "start": 3352,
              "end": 3360
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3351,
            "end": 3360
          }
        ],
        "start": 3327,
        "end": 3362
      },
      "abstract": false,
      "declare": true,
      "start": 3310,
      "end": 3362
    },
    {
      "type": "EmptyStatement",
      "start": 3362,
      "end": 3363
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 3374,
        "end": 3377
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
              "start": 3378,
              "end": 3379
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3388,
                    "end": 3390
                  },
                  "typeArguments": null,
                  "start": 3388,
                  "end": 3390
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3393,
                    "end": 3395
                  },
                  "typeArguments": null,
                  "start": 3393,
                  "end": 3395
                }
              ],
              "start": 3388,
              "end": 3395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3378,
            "end": 3395
          }
        ],
        "start": 3377,
        "end": 3396
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3400,
                    "end": 3401
                  },
                  "typeArguments": null,
                  "start": 3400,
                  "end": 3401
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3404,
                    "end": 3406
                  },
                  "typeArguments": null,
                  "start": 3404,
                  "end": 3406
                }
              ],
              "start": 3400,
              "end": 3406
            },
            "start": 3398,
            "end": 3406
          },
          "start": 3397,
          "end": 3406
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ABI",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3422,
                        "end": 3425
                      },
                      "typeArguments": null,
                      "start": 3422,
                      "end": 3425
                    },
                    "start": 3420,
                    "end": 3425
                  },
                  "start": 3418,
                  "end": 3425
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3428,
                  "end": 3429
                },
                "definite": false,
                "start": 3418,
                "end": 3429
              }
            ],
            "declare": false,
            "start": 3414,
            "end": 3430
          }
        ],
        "start": 3408,
        "end": 3432
      },
      "expression": false,
      "start": 3365,
      "end": 3432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3432
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
    "value": "sym1",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 20,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "sym2",
    "start": 49,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 55,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 71,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 103,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 126,
    "end": 127
  },
  {
    "type": "String",
    "value": "'b'",
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
    "type": "Identifier",
    "value": "type",
    "start": 143,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 160,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 173,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 181,
    "end": 182
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 195,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 197,
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
    "start": 211,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 228,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 230,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "sym1",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 259,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T6",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 269,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "sym1",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 292,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "sym2",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 315,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 332,
    "end": 333
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 334,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 363,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "sym1",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 387,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 434,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 470,
    "end": 471
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 472,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 491,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 505,
    "end": 506
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 512,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 524,
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
    "value": "string",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 536,
    "end": 537
  },
  {
    "type": "Null",
    "value": "null",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "N3",
    "start": 549,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 559,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 570,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 581,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "N4",
    "start": 586,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 600,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 608,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "N5",
    "start": 613,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 618,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 627,
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
    "start": 635,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "N6",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 662,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "N7",
    "start": 667,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 672,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 679,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 688,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 713,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 725,
    "end": 726
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 727,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 731,
    "end": 732
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 738,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 743,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 757,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 766,
    "end": 767
  },
  {
    "type": "Null",
    "value": "null",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 774,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 779,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 790,
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
    "value": "string",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 804,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 815,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "X4",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 846,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "X5",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 860,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 869,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 877,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "X6",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 891,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 900,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 908,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "X7",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 922,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 938,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 949,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 955,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 960,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 965,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 975,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 986,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 992,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 997,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1023,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1039,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1050,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1058,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 1073,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1093,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1142,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1147,
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
    "value": "A",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1169,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "BC",
    "start": 1174,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1197,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "U1",
    "start": 1202,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1207,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1233,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "U2",
    "start": 1238,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1243,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1270,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "U3",
    "start": 1275,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "String",
    "value": "'kind'",
    "start": 1288,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1307,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "U4",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1342,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "U5",
    "start": 1347,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1370,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 1375,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1380,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1424,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1434,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1444,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1473,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "Merge1",
    "start": 1478,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1498,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1501,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1519,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1527,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1539,
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
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1550,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1561,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "Merge2",
    "start": 1566,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1586,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1589,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1599,
    "end": 1604
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1611,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1619,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1642,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "}",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1654,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 1659,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1707,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 1712,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "Merge1",
    "start": 1717,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1764,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 1769,
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
    "value": "Merge2",
    "start": 1774,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1840,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1851,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "String",
    "value": "'d'",
    "start": 1857,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1862,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1867,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1878,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1889,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "String",
    "value": "'e'",
    "start": 1895,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1900,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1905,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1917,
    "end": 1924
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1925,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1934,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1946,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1961,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1969,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1973,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1984,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1992,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1996,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2012,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2016,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2021,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2025,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2042,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 2046,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 2051,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2055,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2094,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2100,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2110,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 2120,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2126,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2132,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2142,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2152,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2161,
    "end": 2168
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2169,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2176,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 2182,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2188,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2196,
    "end": 2201
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2202,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2205,
    "end": 2208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2220,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2228,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2234,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2237,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2253,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2259,
    "end": 2263
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2264,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2272,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2278,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2283,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2292,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2300,
    "end": 2303
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2304,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2308,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2317,
    "end": 2321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2323,
    "end": 2330
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2331,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2335,
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
    "value": "&",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2348,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2355,
    "end": 2362
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2367,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2371,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2380,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2387,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2398,
    "end": 2405
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2406,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2410,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2414,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2423,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2430,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2442,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2447,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2451,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2456,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2461,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2466,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2470,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2475,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2502,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2508,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2517,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2524,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 2530,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2537,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2541,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2548,
    "end": 2552
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2553,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2563,
    "end": 2567
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2568,
    "end": 2575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2576,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2592,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2598,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2607,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2613,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2622,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2632,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2640,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2650,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2657,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 2667,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2675,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2685,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2690,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2696,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2702,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2711,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2721,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2729,
    "end": 2738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2738,
    "end": 2739
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2739,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "dataB",
    "start": 2748,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2755,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2767,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2777,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2785,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2795,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2800,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2806,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2812,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2821,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2831,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2841,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "dataB",
    "start": 2850,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2857,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2869,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2879,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2887,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2894,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2923,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 2933,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2942,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2948,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2960,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2971,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 2981,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2990,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 2996,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3008,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3019,
    "end": 3026
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3027,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "shouldBeB",
    "start": 3033,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3044,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 3045,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3050,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3056,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3060,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3069,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "shouldBeB",
    "start": 3074,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3095,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "inGeneric",
    "start": 3104,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3116,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 3124,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3129,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "alsoShouldBeB",
    "start": 3133,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3152,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3162,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3171,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "alsoShouldBeB",
    "start": 3176,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3216,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "ABI",
    "start": 3226,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3236,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3242,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3248,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3256,
    "end": 3263
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3264,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "CA",
    "start": 3270,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3275,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3281,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3289,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3300,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3310,
    "end": 3317
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3318,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "CB",
    "start": 3324,
    "end": 3326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3329,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3335,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3343,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3354,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3365,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3374,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3380,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "CA",
    "start": 3388,
    "end": 3390
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "CB",
    "start": 3393,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "CA",
    "start": 3404,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3414,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 3418,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "ABI",
    "start": 3422,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3431,
    "end": 3432
  }
]
```
