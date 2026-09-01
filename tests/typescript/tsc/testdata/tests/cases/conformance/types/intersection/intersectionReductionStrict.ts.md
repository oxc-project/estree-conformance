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
            "start": 1868,
            "end": 1870
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
                  "start": 1875,
                  "end": 1876
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1878,
                  "end": 1883
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1875,
                "end": 1883
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
                  "start": 1885,
                  "end": 1886
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1888,
                  "end": 1890
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1885,
                "end": 1890
              }
            ],
            "start": 1873,
            "end": 1892
          },
          "definite": false,
          "start": 1868,
          "end": 1892
        }
      ],
      "declare": false,
      "start": 1862,
      "end": 1893
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
            "start": 1900,
            "end": 1902
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
                  "start": 1907,
                  "end": 1908
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 1910,
                  "end": 1915
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1907,
                "end": 1915
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
                  "start": 1917,
                  "end": 1918
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1920,
                  "end": 1924
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1917,
                "end": 1924
              }
            ],
            "start": 1905,
            "end": 1926
          },
          "definite": false,
          "start": 1900,
          "end": 1926
        }
      ],
      "declare": false,
      "start": 1894,
      "end": 1927
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
                      "start": 1944,
                      "end": 1947
                    },
                    "start": 1944,
                    "end": 1947
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 1950,
                      "end": 1953
                    },
                    "start": 1950,
                    "end": 1953
                  }
                ],
                "start": 1944,
                "end": 1953
              },
              "start": 1942,
              "end": 1953
            },
            "start": 1941,
            "end": 1953
          },
          "init": null,
          "definite": false,
          "start": 1941,
          "end": 1953
        }
      ],
      "declare": true,
      "start": 1929,
      "end": 1954
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
            "start": 1956,
            "end": 1958
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1959,
            "end": 1960
          },
          "optional": false,
          "computed": true,
          "start": 1956,
          "end": 1961
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 1964,
            "end": 1969
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 1973,
            "end": 1976
          },
          "start": 1964,
          "end": 1976
        },
        "start": 1956,
        "end": 1976
      },
      "directive": null,
      "start": 1956,
      "end": 1977
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
            "start": 1988,
            "end": 1990
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1992
          },
          "optional": false,
          "computed": true,
          "start": 1988,
          "end": 1993
        },
        "right": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 1996,
            "end": 2001
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2005,
            "end": 2008
          },
          "start": 1996,
          "end": 2008
        },
        "start": 1988,
        "end": 2008
      },
      "directive": null,
      "start": 1988,
      "end": 2009
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2032,
        "end": 2036
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2037,
        "end": 2039
      },
      "const": true,
      "declare": false,
      "start": 2021,
      "end": 2039
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2051,
        "end": 2055
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 2056,
        "end": 2058
      },
      "const": true,
      "declare": false,
      "start": 2040,
      "end": 2058
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
                    "start": 2076,
                    "end": 2082
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2085,
                      "end": 2089
                    },
                    "typeArguments": null,
                    "start": 2085,
                    "end": 2089
                  }
                ],
                "start": 2076,
                "end": 2089
              },
              "start": 2074,
              "end": 2089
            },
            "start": 2072,
            "end": 2089
          },
          "init": null,
          "definite": false,
          "start": 2072,
          "end": 2089
        }
      ],
      "declare": true,
      "start": 2060,
      "end": 2090
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
                    "start": 2107,
                    "end": 2113
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2116,
                      "end": 2120
                    },
                    "typeArguments": null,
                    "start": 2116,
                    "end": 2120
                  }
                ],
                "start": 2107,
                "end": 2120
              },
              "start": 2105,
              "end": 2120
            },
            "start": 2103,
            "end": 2120
          },
          "init": null,
          "definite": false,
          "start": 2103,
          "end": 2120
        }
      ],
      "declare": true,
      "start": 2091,
      "end": 2121
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
                        "start": 2139,
                        "end": 2145
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2148,
                          "end": 2152
                        },
                        "typeArguments": null,
                        "start": 2148,
                        "end": 2152
                      }
                    ],
                    "start": 2139,
                    "end": 2152
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2155,
                    "end": 2164
                  }
                ],
                "start": 2139,
                "end": 2164
              },
              "start": 2137,
              "end": 2164
            },
            "start": 2135,
            "end": 2164
          },
          "init": null,
          "definite": false,
          "start": 2135,
          "end": 2164
        }
      ],
      "declare": true,
      "start": 2123,
      "end": 2165
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
                        "start": 2182,
                        "end": 2188
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tag2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2191,
                          "end": 2195
                        },
                        "typeArguments": null,
                        "start": 2191,
                        "end": 2195
                      }
                    ],
                    "start": 2182,
                    "end": 2195
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2198,
                    "end": 2207
                  }
                ],
                "start": 2182,
                "end": 2207
              },
              "start": 2180,
              "end": 2207
            },
            "start": 2178,
            "end": 2207
          },
          "init": null,
          "definite": false,
          "start": 2178,
          "end": 2207
        }
      ],
      "declare": true,
      "start": 2166,
      "end": 2208
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
          "start": 2210,
          "end": 2212
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2215,
          "end": 2217
        },
        "start": 2210,
        "end": 2217
      },
      "directive": null,
      "start": 2210,
      "end": 2218
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
          "start": 2219,
          "end": 2221
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "s1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2224,
          "end": 2226
        },
        "start": 2219,
        "end": 2226
      },
      "directive": null,
      "start": 2219,
      "end": 2227
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
          "start": 2229,
          "end": 2231
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2234,
          "end": 2236
        },
        "start": 2229,
        "end": 2236
      },
      "directive": null,
      "start": 2229,
      "end": 2237
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
          "start": 2238,
          "end": 2240
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2243,
          "end": 2245
        },
        "start": 2238,
        "end": 2245
      },
      "directive": null,
      "start": 2238,
      "end": 2246
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
            "start": 2276,
            "end": 2278
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
                          "start": 2285,
                          "end": 2288
                        },
                        "start": 2285,
                        "end": 2288
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
                              "start": 2292,
                              "end": 2295
                            },
                            "start": 2292,
                            "end": 2295
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "c",
                              "raw": "\"c\"",
                              "start": 2298,
                              "end": 2301
                            },
                            "start": 2298,
                            "end": 2301
                          }
                        ],
                        "start": 2292,
                        "end": 2301
                      }
                    ],
                    "start": 2285,
                    "end": 2302
                  },
                  "start": 2283,
                  "end": 2302
                },
                "start": 2282,
                "end": 2302
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
                  "start": 2305,
                  "end": 2308
                },
                "start": 2305,
                "end": 2308
              },
              "start": 2303,
              "end": 2308
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2312,
              "end": 2313
            },
            "id": null,
            "generator": false,
            "start": 2281,
            "end": 2313
          },
          "definite": false,
          "start": 2276,
          "end": 2313
        }
      ],
      "declare": false,
      "start": 2270,
      "end": 2314
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null,
        "start": 2321,
        "end": 2330
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
              "start": 2331,
              "end": 2335
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2344,
              "end": 2350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2331,
            "end": 2350
          }
        ],
        "start": 2330,
        "end": 2351
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
              "start": 2360,
              "end": 2364
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
                  "start": 2366,
                  "end": 2370
                },
                "typeArguments": null,
                "start": 2366,
                "end": 2370
              },
              "start": 2364,
              "end": 2370
            },
            "accessibility": null,
            "static": false,
            "start": 2360,
            "end": 2371
          }
        ],
        "start": 2354,
        "end": 2373
      },
      "declare": false,
      "start": 2316,
      "end": 2373
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
            "start": 2381,
            "end": 2383
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
                          "start": 2390,
                          "end": 2399
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
                                "start": 2400,
                                "end": 2403
                              },
                              "start": 2400,
                              "end": 2403
                            }
                          ],
                          "start": 2399,
                          "end": 2404
                        },
                        "start": 2390,
                        "end": 2404
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
                              "start": 2408,
                              "end": 2417
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
                                    "start": 2418,
                                    "end": 2421
                                  },
                                  "start": 2418,
                                  "end": 2421
                                }
                              ],
                              "start": 2417,
                              "end": 2422
                            },
                            "start": 2408,
                            "end": 2422
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2425,
                              "end": 2434
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
                                    "start": 2435,
                                    "end": 2438
                                  },
                                  "start": 2435,
                                  "end": 2438
                                }
                              ],
                              "start": 2434,
                              "end": 2439
                            },
                            "start": 2425,
                            "end": 2439
                          }
                        ],
                        "start": 2408,
                        "end": 2439
                      }
                    ],
                    "start": 2390,
                    "end": 2440
                  },
                  "start": 2388,
                  "end": 2440
                },
                "start": 2387,
                "end": 2440
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
                  "start": 2443,
                  "end": 2452
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
                        "start": 2453,
                        "end": 2456
                      },
                      "start": 2453,
                      "end": 2456
                    }
                  ],
                  "start": 2452,
                  "end": 2457
                },
                "start": 2443,
                "end": 2457
              },
              "start": 2441,
              "end": 2457
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2461,
              "end": 2462
            },
            "id": null,
            "generator": false,
            "start": 2386,
            "end": 2462
          },
          "definite": false,
          "start": 2381,
          "end": 2462
        }
      ],
      "declare": false,
      "start": 2375,
      "end": 2463
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
            "start": 2470,
            "end": 2472
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
                          "start": 2479,
                          "end": 2488
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
                                "start": 2489,
                                "end": 2492
                              },
                              "start": 2489,
                              "end": 2492
                            }
                          ],
                          "start": 2488,
                          "end": 2493
                        },
                        "start": 2479,
                        "end": 2493
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
                              "start": 2497,
                              "end": 2506
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
                                    "start": 2507,
                                    "end": 2510
                                  },
                                  "start": 2507,
                                  "end": 2510
                                }
                              ],
                              "start": 2506,
                              "end": 2511
                            },
                            "start": 2497,
                            "end": 2511
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
                                  "start": 2516,
                                  "end": 2521
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2523,
                                    "end": 2530
                                  },
                                  "start": 2521,
                                  "end": 2530
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2516,
                                "end": 2530
                              }
                            ],
                            "start": 2514,
                            "end": 2532
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2535,
                              "end": 2544
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
                                    "start": 2545,
                                    "end": 2548
                                  },
                                  "start": 2545,
                                  "end": 2548
                                }
                              ],
                              "start": 2544,
                              "end": 2549
                            },
                            "start": 2535,
                            "end": 2549
                          }
                        ],
                        "start": 2497,
                        "end": 2549
                      }
                    ],
                    "start": 2479,
                    "end": 2550
                  },
                  "start": 2477,
                  "end": 2550
                },
                "start": 2476,
                "end": 2550
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
                  "start": 2553,
                  "end": 2562
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
                        "start": 2563,
                        "end": 2566
                      },
                      "start": 2563,
                      "end": 2566
                    }
                  ],
                  "start": 2562,
                  "end": 2567
                },
                "start": 2553,
                "end": 2567
              },
              "start": 2551,
              "end": 2567
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2571,
              "end": 2572
            },
            "id": null,
            "generator": false,
            "start": 2475,
            "end": 2572
          },
          "definite": false,
          "start": 2470,
          "end": 2572
        }
      ],
      "declare": false,
      "start": 2464,
      "end": 2573
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
            "start": 2580,
            "end": 2582
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
                        "start": 2589,
                        "end": 2595
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
                              "start": 2599,
                              "end": 2608
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
                                    "start": 2609,
                                    "end": 2612
                                  },
                                  "start": 2609,
                                  "end": 2612
                                }
                              ],
                              "start": 2608,
                              "end": 2613
                            },
                            "start": 2599,
                            "end": 2613
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
                                  "start": 2618,
                                  "end": 2623
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 2625,
                                    "end": 2632
                                  },
                                  "start": 2623,
                                  "end": 2632
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 2618,
                                "end": 2632
                              }
                            ],
                            "start": 2616,
                            "end": 2634
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Container",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2637,
                              "end": 2646
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
                                    "start": 2647,
                                    "end": 2650
                                  },
                                  "start": 2647,
                                  "end": 2650
                                }
                              ],
                              "start": 2646,
                              "end": 2651
                            },
                            "start": 2637,
                            "end": 2651
                          }
                        ],
                        "start": 2599,
                        "end": 2651
                      }
                    ],
                    "start": 2589,
                    "end": 2652
                  },
                  "start": 2587,
                  "end": 2652
                },
                "start": 2586,
                "end": 2652
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2655,
                "end": 2661
              },
              "start": 2653,
              "end": 2661
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2666
            },
            "id": null,
            "generator": false,
            "start": 2585,
            "end": 2666
          },
          "definite": false,
          "start": 2580,
          "end": 2666
        }
      ],
      "declare": false,
      "start": 2574,
      "end": 2667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2667
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
    "type": "Keyword",
    "value": "const",
    "start": 1862,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1868,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1878,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1888,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1894,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1900,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1910,
    "end": 1915
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1920,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1929,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1937,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "k",
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
    "type": "String",
    "value": "'a'",
    "start": 1944,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1950,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1956,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1964,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1970,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1973,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1988,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1996,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2002,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2005,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2021,
    "end": 2026
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2027,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2032,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2040,
    "end": 2045
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 2046,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2051,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2060,
    "end": 2067
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2068,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2072,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2076,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2085,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2091,
    "end": 2098
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2099,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2103,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2107,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2116,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2123,
    "end": 2130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2131,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2135,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2139,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "Tag1",
    "start": 2148,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2155,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2166,
    "end": 2173
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2174,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2178,
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
    "value": "string",
    "start": 2182,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "Tag2",
    "start": 2191,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2198,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2210,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2215,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 2219,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 2224,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2229,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2234,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 2238,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 2243,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2270,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2276,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2285,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2292,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 2298,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2305,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2309,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2316,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2321,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2331,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2336,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2344,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2360,
    "end": 2364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2366,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2375,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2381,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2386,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2390,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2400,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2408,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2418,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2425,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 2435,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2443,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2453,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2458,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2464,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "f3",
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
    "type": "Punctuator",
    "value": "(",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2479,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2489,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2497,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2507,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "dataB",
    "start": 2516,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2523,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2535,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2545,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2551,
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
    "type": "String",
    "value": "\"a\"",
    "start": 2563,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2574,
    "end": 2579
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2580,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2589,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2599,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 2609,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "dataB",
    "start": 2618,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2625,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "Container",
    "start": 2637,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2647,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2655,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2662,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2666,
    "end": 2667
  }
]
```
