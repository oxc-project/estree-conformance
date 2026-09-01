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
        "name": "TU1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 20
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 21,
                "end": 28
              },
              "start": 21,
              "end": 28
            }
          ],
          "start": 20,
          "end": 29
        },
        "start": 11,
        "end": 29
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU2",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 63
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 64,
                    "end": 69
                  },
                  "start": 64,
                  "end": 69
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 72,
                    "end": 77
                  },
                  "start": 72,
                  "end": 77
                }
              ],
              "start": 64,
              "end": 77
            }
          ],
          "start": 63,
          "end": 78
        },
        "start": 54,
        "end": 78
      },
      "declare": false,
      "start": 43,
      "end": 79
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU3",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 106
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 118
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          ],
          "start": 118,
          "end": 126
        },
        "start": 109,
        "end": 126
      },
      "declare": false,
      "start": 98,
      "end": 127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU4",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 158
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 170
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 171,
              "end": 174
            }
          ],
          "start": 170,
          "end": 175
        },
        "start": 161,
        "end": 175
      },
      "declare": false,
      "start": 150,
      "end": 176
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU5",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 221
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 222,
              "end": 227
            }
          ],
          "start": 221,
          "end": 228
        },
        "start": 212,
        "end": 228
      },
      "declare": false,
      "start": 201,
      "end": 229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU6",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 260
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 261,
                "end": 263
              },
              "start": 261,
              "end": 263
            }
          ],
          "start": 260,
          "end": 264
        },
        "start": 251,
        "end": 264
      },
      "declare": false,
      "start": 240,
      "end": 265
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL1",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 285
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 288,
          "end": 297
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "HELLO",
                "raw": "'HELLO'",
                "start": 298,
                "end": 305
              },
              "start": 298,
              "end": 305
            }
          ],
          "start": 297,
          "end": 306
        },
        "start": 288,
        "end": 306
      },
      "declare": false,
      "start": 277,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL2",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 328
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 340
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "FOO",
                    "raw": "'FOO'",
                    "start": 341,
                    "end": 346
                  },
                  "start": 341,
                  "end": 346
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "BAR",
                    "raw": "'BAR'",
                    "start": 349,
                    "end": 354
                  },
                  "start": 349,
                  "end": 354
                }
              ],
              "start": 341,
              "end": 354
            }
          ],
          "start": 340,
          "end": 355
        },
        "start": 331,
        "end": 355
      },
      "declare": false,
      "start": 320,
      "end": 356
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL3",
        "optional": false,
        "typeAnnotation": null,
        "start": 380,
        "end": 383
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 395
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 396,
              "end": 402
            }
          ],
          "start": 395,
          "end": 403
        },
        "start": 386,
        "end": 403
      },
      "declare": false,
      "start": 375,
      "end": 404
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL4",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 435
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 447
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 448,
              "end": 451
            }
          ],
          "start": 447,
          "end": 452
        },
        "start": 438,
        "end": 452
      },
      "declare": false,
      "start": 427,
      "end": 453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL5",
        "optional": false,
        "typeAnnotation": null,
        "start": 483,
        "end": 486
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 498
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 499,
              "end": 504
            }
          ],
          "start": 498,
          "end": 505
        },
        "start": 489,
        "end": 505
      },
      "declare": false,
      "start": 478,
      "end": 506
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TL6",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 525
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 537
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 538,
                "end": 540
              },
              "start": 538,
              "end": 540
            }
          ],
          "start": 537,
          "end": 541
        },
        "start": 528,
        "end": 541
      },
      "declare": false,
      "start": 517,
      "end": 542
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 562
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 575
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 576,
                "end": 583
              },
              "start": 576,
              "end": 583
            }
          ],
          "start": 575,
          "end": 584
        },
        "start": 565,
        "end": 584
      },
      "declare": false,
      "start": 554,
      "end": 585
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 606
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 609,
          "end": 619
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 620,
                    "end": 625
                  },
                  "start": 620,
                  "end": 625
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 628,
                    "end": 633
                  },
                  "start": 628,
                  "end": 633
                }
              ],
              "start": 620,
              "end": 633
            }
          ],
          "start": 619,
          "end": 634
        },
        "start": 609,
        "end": 634
      },
      "declare": false,
      "start": 598,
      "end": 635
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC3",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 662
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 675
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 676,
              "end": 682
            }
          ],
          "start": 675,
          "end": 683
        },
        "start": 665,
        "end": 683
      },
      "declare": false,
      "start": 654,
      "end": 684
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC4",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 716
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 719,
          "end": 729
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 730,
              "end": 733
            }
          ],
          "start": 729,
          "end": 734
        },
        "start": 719,
        "end": 734
      },
      "declare": false,
      "start": 708,
      "end": 735
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC5",
        "optional": false,
        "typeAnnotation": null,
        "start": 766,
        "end": 769
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 782
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 783,
              "end": 788
            }
          ],
          "start": 782,
          "end": 789
        },
        "start": 772,
        "end": 789
      },
      "declare": false,
      "start": 761,
      "end": 790
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TC6",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 809
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Capitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 822
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 823,
                "end": 825
              },
              "start": 823,
              "end": 825
            }
          ],
          "start": 822,
          "end": 826
        },
        "start": 812,
        "end": 826
      },
      "declare": false,
      "start": 801,
      "end": 827
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN1",
        "optional": false,
        "typeAnnotation": null,
        "start": 844,
        "end": 847
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 862
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "Hello",
                "raw": "'Hello'",
                "start": 863,
                "end": 870
              },
              "start": 863,
              "end": 870
            }
          ],
          "start": 862,
          "end": 871
        },
        "start": 850,
        "end": 871
      },
      "declare": false,
      "start": 839,
      "end": 872
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN2",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 893
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 896,
          "end": 908
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Foo",
                    "raw": "'Foo'",
                    "start": 909,
                    "end": 914
                  },
                  "start": 909,
                  "end": 914
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "Bar",
                    "raw": "'Bar'",
                    "start": 917,
                    "end": 922
                  },
                  "start": 917,
                  "end": 922
                }
              ],
              "start": 909,
              "end": 922
            }
          ],
          "start": 908,
          "end": 923
        },
        "start": 896,
        "end": 923
      },
      "declare": false,
      "start": 885,
      "end": 924
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN3",
        "optional": false,
        "typeAnnotation": null,
        "start": 948,
        "end": 951
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 954,
          "end": 966
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 967,
              "end": 973
            }
          ],
          "start": 966,
          "end": 974
        },
        "start": 954,
        "end": 974
      },
      "declare": false,
      "start": 943,
      "end": 975
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1006,
        "end": 1009
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1024
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 1025,
              "end": 1028
            }
          ],
          "start": 1024,
          "end": 1029
        },
        "start": 1012,
        "end": 1029
      },
      "declare": false,
      "start": 1001,
      "end": 1030
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1063,
        "end": 1066
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1081
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 1082,
              "end": 1087
            }
          ],
          "start": 1081,
          "end": 1088
        },
        "start": 1069,
        "end": 1088
      },
      "declare": false,
      "start": 1058,
      "end": 1089
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TN6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1105,
        "end": 1108
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uncapitalize",
          "optional": false,
          "typeAnnotation": null,
          "start": 1111,
          "end": 1123
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1124,
                "end": 1126
              },
              "start": 1124,
              "end": 1126
            }
          ],
          "start": 1123,
          "end": 1127
        },
        "start": 1111,
        "end": 1127
      },
      "declare": false,
      "start": 1100,
      "end": 1128
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1145,
        "end": 1148
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1150
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1159,
              "end": 1165
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1149,
            "end": 1165
          }
        ],
        "start": 1148,
        "end": 1166
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Uppercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1169,
          "end": 1178
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "aB",
                    "cooked": "aB"
                  },
                  "tail": false,
                  "start": 1179,
                  "end": 1184
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1185,
                  "end": 1187
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1184,
                    "end": 1185
                  },
                  "typeArguments": null,
                  "start": 1184,
                  "end": 1185
                }
              ],
              "start": 1179,
              "end": 1187
            }
          ],
          "start": 1178,
          "end": 1188
        },
        "start": 1169,
        "end": 1188
      },
      "declare": false,
      "start": 1140,
      "end": 1189
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1195,
        "end": 1198
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TX1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1201,
          "end": 1204
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "xYz",
                "raw": "'xYz'",
                "start": 1205,
                "end": 1210
              },
              "start": 1205,
              "end": 1210
            }
          ],
          "start": 1204,
          "end": 1211
        },
        "start": 1201,
        "end": 1211
      },
      "declare": false,
      "start": 1190,
      "end": 1212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1230,
        "end": 1233
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1234,
              "end": 1235
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1244,
              "end": 1250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1234,
            "end": 1250
          }
        ],
        "start": 1233,
        "end": 1251
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Lowercase",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1263
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "aB",
                    "cooked": "aB"
                  },
                  "tail": false,
                  "start": 1264,
                  "end": 1269
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1270,
                  "end": 1272
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1269,
                    "end": 1270
                  },
                  "typeArguments": null,
                  "start": 1269,
                  "end": 1270
                }
              ],
              "start": 1264,
              "end": 1272
            }
          ],
          "start": 1263,
          "end": 1273
        },
        "start": 1254,
        "end": 1273
      },
      "declare": false,
      "start": 1225,
      "end": 1274
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1280,
        "end": 1283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TX3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1286,
          "end": 1289
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "xYz",
                "raw": "'xYz'",
                "start": 1290,
                "end": 1295
              },
              "start": 1290,
              "end": 1295
            }
          ],
          "start": 1289,
          "end": 1296
        },
        "start": 1286,
        "end": 1296
      },
      "declare": false,
      "start": 1275,
      "end": 1297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TX5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1315,
        "end": 1318
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 1321,
            "end": 1324
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 1340,
            "end": 1343
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 1359,
            "end": 1361
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Uppercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1324,
              "end": 1333
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "'abc'",
                    "start": 1334,
                    "end": 1339
                  },
                  "start": 1334,
                  "end": 1339
                }
              ],
              "start": 1333,
              "end": 1340
            },
            "start": 1324,
            "end": 1340
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null,
              "start": 1343,
              "end": 1352
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "XYZ",
                    "raw": "'XYZ'",
                    "start": 1353,
                    "end": 1358
                  },
                  "start": 1353,
                  "end": 1358
                }
              ],
              "start": 1352,
              "end": 1359
            },
            "start": 1343,
            "end": 1359
          }
        ],
        "start": 1321,
        "end": 1361
      },
      "declare": false,
      "start": 1310,
      "end": 1362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyUppercase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1382,
        "end": 1393
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1395
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1404,
              "end": 1410
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1394,
            "end": 1410
          }
        ],
        "start": 1393,
        "end": 1411
      },
      "typeAnnotation": {
        "type": "TSIntrinsicKeyword",
        "start": 1414,
        "end": 1423
      },
      "declare": false,
      "start": 1377,
      "end": 1424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1445,
        "end": 1449
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
              "start": 1450,
              "end": 1451
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1460,
              "end": 1466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1450,
            "end": 1466
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1468,
              "end": 1469
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1478,
                "end": 1479
              },
              "typeArguments": null,
              "start": 1478,
              "end": 1479
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1468,
            "end": 1479
          }
        ],
        "start": 1449,
        "end": 1480
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1484,
              "end": 1490
            },
            "start": 1482,
            "end": 1490
          },
          "start": 1481,
          "end": 1490
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1495,
                "end": 1504
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1505,
                      "end": 1506
                    },
                    "typeArguments": null,
                    "start": 1505,
                    "end": 1506
                  }
                ],
                "start": 1504,
                "end": 1507
              },
              "start": 1495,
              "end": 1507
            },
            "start": 1493,
            "end": 1507
          },
          "start": 1492,
          "end": 1507
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1512,
                "end": 1521
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1522,
                      "end": 1523
                    },
                    "typeArguments": null,
                    "start": 1522,
                    "end": 1523
                  }
                ],
                "start": 1521,
                "end": 1524
              },
              "start": 1512,
              "end": 1524
            },
            "start": 1510,
            "end": 1524
          },
          "start": 1509,
          "end": 1524
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
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1532,
                "end": 1533
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "start": 1532,
              "end": 1537
            },
            "directive": null,
            "start": 1532,
            "end": 1538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1547,
                "end": 1548
              },
              "start": 1543,
              "end": 1548
            },
            "directive": null,
            "start": 1543,
            "end": 1549
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1554,
                "end": 1555
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1558,
                "end": 1559
              },
              "start": 1554,
              "end": 1559
            },
            "directive": null,
            "start": 1554,
            "end": 1560
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1575,
                "end": 1576
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1579,
                "end": 1580
              },
              "start": 1575,
              "end": 1580
            },
            "directive": null,
            "start": 1575,
            "end": 1581
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1586,
                "end": 1587
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1590,
                "end": 1591
              },
              "start": 1586,
              "end": 1591
            },
            "directive": null,
            "start": 1586,
            "end": 1592
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1607,
                "end": 1608
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1611,
                "end": 1612
              },
              "start": 1607,
              "end": 1612
            },
            "directive": null,
            "start": 1607,
            "end": 1613
          }
        ],
        "start": 1526,
        "end": 1625
      },
      "expression": false,
      "start": 1436,
      "end": 1625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1636,
        "end": 1640
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
              "start": 1641,
              "end": 1642
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1651,
                    "end": 1656
                  },
                  "start": 1651,
                  "end": 1656
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "'bar'",
                    "start": 1659,
                    "end": 1664
                  },
                  "start": 1659,
                  "end": 1664
                }
              ],
              "start": 1651,
              "end": 1664
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1641,
            "end": 1664
          }
        ],
        "start": 1640,
        "end": 1665
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1669,
                "end": 1678
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1679,
                      "end": 1680
                    },
                    "typeArguments": null,
                    "start": 1679,
                    "end": 1680
                  }
                ],
                "start": 1678,
                "end": 1681
              },
              "start": 1669,
              "end": 1681
            },
            "start": 1667,
            "end": 1681
          },
          "start": 1666,
          "end": 1681
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
                  "name": "s",
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
                            "value": "FOO",
                            "raw": "'FOO'",
                            "start": 1696,
                            "end": 1701
                          },
                          "start": 1696,
                          "end": 1701
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "BAR",
                            "raw": "'BAR'",
                            "start": 1704,
                            "end": 1709
                          },
                          "start": 1704,
                          "end": 1709
                        }
                      ],
                      "start": 1696,
                      "end": 1709
                    },
                    "start": 1694,
                    "end": 1709
                  },
                  "start": 1693,
                  "end": 1709
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1712,
                  "end": 1713
                },
                "definite": false,
                "start": 1693,
                "end": 1713
              }
            ],
            "declare": false,
            "start": 1689,
            "end": 1714
          }
        ],
        "start": 1683,
        "end": 1716
      },
      "expression": false,
      "start": 1627,
      "end": 1716
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1735,
        "end": 1739
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
              "start": 1740,
              "end": 1741
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1750,
              "end": 1756
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1740,
            "end": 1756
          }
        ],
        "start": 1739,
        "end": 1757
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1761,
                "end": 1770
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1771,
                      "end": 1772
                    },
                    "typeArguments": null,
                    "start": 1771,
                    "end": 1772
                  }
                ],
                "start": 1770,
                "end": 1773
              },
              "start": 1761,
              "end": 1773
            },
            "start": 1759,
            "end": 1773
          },
          "start": 1758,
          "end": 1773
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
            "start": 1776,
            "end": 1777
          },
          "typeArguments": null,
          "start": 1776,
          "end": 1777
        },
        "start": 1774,
        "end": 1777
      },
      "body": null,
      "expression": false,
      "start": 1718,
      "end": 1778
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1793
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1795
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1804,
              "end": 1810
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1794,
            "end": 1810
          }
        ],
        "start": 1793,
        "end": 1811
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null,
                "start": 1815,
                "end": 1824
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1825,
                      "end": 1826
                    },
                    "typeArguments": null,
                    "start": 1825,
                    "end": 1826
                  }
                ],
                "start": 1824,
                "end": 1827
              },
              "start": 1815,
              "end": 1827
            },
            "start": 1813,
            "end": 1827
          },
          "start": 1812,
          "end": 1827
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1846
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1847,
                  "end": 1848
                }
              ],
              "optional": false,
              "start": 1842,
              "end": 1849
            },
            "start": 1835,
            "end": 1850
          }
        ],
        "start": 1829,
        "end": 1852
      },
      "expression": false,
      "start": 1780,
      "end": 1852
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1852
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
    "value": "TU1",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 11,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 43,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "TU2",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 54,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 98,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "TU3",
    "start": 103,
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
    "value": "Uppercase",
    "start": 109,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 150,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "TU4",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 201,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "TU5",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 212,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 240,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "TU6",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 251,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 277,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "TL1",
    "start": 282,
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
    "value": "Lowercase",
    "start": 288,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "'HELLO'",
    "start": 298,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 320,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "TL2",
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
    "value": "Lowercase",
    "start": 331,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341
  },
  {
    "type": "String",
    "value": "'FOO'",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 347,
    "end": 348
  },
  {
    "type": "String",
    "value": "'BAR'",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 375,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "TL3",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 386,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 427,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "TL4",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 438,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 448,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 478,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "TL5",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 489,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 517,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "TL6",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 528,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 537,
    "end": 538
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 554,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "TC1",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 565,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 575,
    "end": 576
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 576,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 598,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "TC2",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 609,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 619,
    "end": 620
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 626,
    "end": 627
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 628,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 654,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "TC3",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 665,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 676,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 708,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "TC4",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 719,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 730,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 761,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "TC5",
    "start": 766,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 772,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 783,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 801,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "TC6",
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
    "value": "Capitalize",
    "start": 812,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 822,
    "end": 823
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 823,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 839,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "TN1",
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
    "value": "Uncapitalize",
    "start": 850,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 862,
    "end": 863
  },
  {
    "type": "String",
    "value": "'Hello'",
    "start": 863,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 885,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "TN2",
    "start": 890,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 896,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "String",
    "value": "'Foo'",
    "start": 909,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 915,
    "end": 916
  },
  {
    "type": "String",
    "value": "'Bar'",
    "start": 917,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 943,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "TN3",
    "start": 948,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 954,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 967,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "TN4",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 1012,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "TN5",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 1069,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1082,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1100,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "TN6",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "Uncapitalize",
    "start": 1111,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1124,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1140,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "TX1",
    "start": 1145,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1151,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1159,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1169,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Template",
    "value": "`aB${",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1185,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "TX2",
    "start": 1195,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "TX1",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "String",
    "value": "'xYz'",
    "start": 1205,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1225,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "TX3",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1236,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 1254,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Template",
    "value": "`aB${",
    "start": 1264,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1270,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1275,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "TX4",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "TX3",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "String",
    "value": "'xYz'",
    "start": 1290,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1310,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "TX5",
    "start": 1315,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1321,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1324,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "String",
    "value": "'abc'",
    "start": 1334,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 1343,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "String",
    "value": "'XYZ'",
    "start": 1353,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1359,
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
    "start": 1377,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "MyUppercase",
    "start": 1382,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1396,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "intrinsic",
    "start": 1414,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1436,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1445,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1452,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1460,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1470,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1484,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1495,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1512,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1627,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1636,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1643,
    "end": 1650
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1651,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1659,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1669,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1689,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "String",
    "value": "'FOO'",
    "start": 1696,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "String",
    "value": "'BAR'",
    "start": 1704,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1726,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1735,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1742,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1750,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1761,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1780,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1789,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1796,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1804,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "Uppercase",
    "start": 1815,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1851,
    "end": 1852
  }
]
```
