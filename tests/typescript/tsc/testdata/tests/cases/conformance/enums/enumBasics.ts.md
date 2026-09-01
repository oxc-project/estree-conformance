__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 89
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
              "start": 96,
              "end": 97
            },
            "initializer": null,
            "computed": false,
            "start": 96,
            "end": 97
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "initializer": null,
            "computed": false,
            "start": 103,
            "end": 104
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "initializer": null,
            "computed": false,
            "start": 110,
            "end": 111
          }
        ],
        "start": 90,
        "end": 113
      },
      "const": false,
      "declare": false,
      "start": 82,
      "end": 113
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
                "type": "TSNumberKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "start": 155,
            "end": 164
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 169
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "optional": false,
            "computed": false,
            "start": 167,
            "end": 171
          },
          "definite": false,
          "start": 155,
          "end": 171
        }
      ],
      "declare": false,
      "start": 151,
      "end": 172
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 265
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "E1",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 270
          },
          "definite": false,
          "start": 264,
          "end": 270
        }
      ],
      "declare": false,
      "start": 260,
      "end": 271
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
            "name": "e",
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
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 294,
                      "end": 295
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 297,
                            "end": 299
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 300,
                            "end": 301
                          },
                          "start": 297,
                          "end": 301
                        },
                        "typeArguments": null,
                        "start": 297,
                        "end": 301
                      },
                      "start": 295,
                      "end": 301
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 285,
                    "end": 302
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 317
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 319,
                            "end": 321
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 322,
                            "end": 323
                          },
                          "start": 319,
                          "end": 323
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 323
                      },
                      "start": 317,
                      "end": 323
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 307,
                    "end": 324
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 339
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "E1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 341,
                            "end": 343
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 345
                          },
                          "start": 341,
                          "end": 345
                        },
                        "typeArguments": null,
                        "start": 341,
                        "end": 345
                      },
                      "start": 339,
                      "end": 345
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 329,
                    "end": 346
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 364,
                            "end": 370
                          },
                          "start": 362,
                          "end": 370
                        },
                        "start": 361,
                        "end": 370
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 373,
                        "end": 379
                      },
                      "start": 371,
                      "end": 379
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null,
                    "start": 351,
                    "end": 380
                  }
                ],
                "start": 279,
                "end": 382
              },
              "start": 277,
              "end": 382
            },
            "start": 276,
            "end": 382
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 382
        }
      ],
      "declare": false,
      "start": 272,
      "end": 383
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 400
                },
                "typeArguments": null,
                "start": 391,
                "end": 400
              },
              "start": 389,
              "end": 400
            },
            "start": 388,
            "end": 400
          },
          "init": null,
          "definite": false,
          "start": 388,
          "end": 400
        }
      ],
      "declare": false,
      "start": 384,
      "end": 401
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 468
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 473
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "optional": false,
              "computed": false,
              "start": 474,
              "end": 477
            },
            "optional": false,
            "computed": true,
            "start": 471,
            "end": 478
          },
          "definite": false,
          "start": 467,
          "end": 478
        }
      ],
      "declare": false,
      "start": 463,
      "end": 479
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 487,
                "end": 493
              },
              "start": 485,
              "end": 493
            },
            "start": 484,
            "end": 493
          },
          "init": null,
          "definite": false,
          "start": 484,
          "end": 493
        }
      ],
      "declare": false,
      "start": 480,
      "end": 494
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 539
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
              "start": 546,
              "end": 547
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 550,
              "end": 551
            },
            "computed": false,
            "start": 546,
            "end": 551
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 557,
              "end": 558
            },
            "computed": false,
            "start": 553,
            "end": 558
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 561
            },
            "initializer": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 564,
              "end": 565
            },
            "computed": false,
            "start": 560,
            "end": 565
          }
        ],
        "start": 540,
        "end": 567
      },
      "const": false,
      "declare": false,
      "start": 532,
      "end": 567
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E3",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 611
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 619
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 622,
                "end": 627
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 628,
                "end": 634
              },
              "optional": false,
              "computed": false,
              "start": 622,
              "end": 634
            },
            "computed": false,
            "start": 618,
            "end": 634
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 637
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 640,
                "end": 641
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 644,
                "end": 645
              },
              "start": 640,
              "end": 645
            },
            "computed": false,
            "start": 636,
            "end": 645
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 648
            },
            "initializer": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 652,
                "end": 657
              },
              "prefix": true,
              "start": 651,
              "end": 657
            },
            "computed": false,
            "start": 647,
            "end": 657
          }
        ],
        "start": 612,
        "end": 659
      },
      "const": false,
      "declare": false,
      "start": 604,
      "end": 659
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E4",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 727
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 735
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 738,
              "end": 739
            },
            "computed": false,
            "start": 734,
            "end": 739
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 742
            },
            "initializer": null,
            "computed": false,
            "start": 741,
            "end": 742
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Z",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 748,
                "end": 753
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 760
              },
              "optional": false,
              "computed": false,
              "start": 748,
              "end": 760
            },
            "computed": false,
            "start": 744,
            "end": 760
          }
        ],
        "start": 728,
        "end": 762
      },
      "const": false,
      "declare": false,
      "start": 720,
      "end": 762
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E5",
        "optional": false,
        "typeAnnotation": null,
        "start": 881,
        "end": 883
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
              "start": 890,
              "end": 891
            },
            "initializer": null,
            "computed": false,
            "start": 890,
            "end": 891
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 898
            },
            "initializer": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 901,
              "end": 902
            },
            "computed": false,
            "start": 897,
            "end": 902
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 909
            },
            "initializer": null,
            "computed": false,
            "start": 908,
            "end": 909
          }
        ],
        "start": 884,
        "end": 916
      },
      "const": false,
      "declare": false,
      "start": 876,
      "end": 916
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E6",
        "optional": false,
        "typeAnnotation": null,
        "start": 923,
        "end": 925
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
              "start": 932,
              "end": 933
            },
            "initializer": null,
            "computed": false,
            "start": 932,
            "end": 933
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 939,
              "end": 940
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 943,
              "end": 944
            },
            "computed": false,
            "start": 939,
            "end": 944
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 951
            },
            "initializer": null,
            "computed": false,
            "start": 950,
            "end": 951
          }
        ],
        "start": 926,
        "end": 958
      },
      "const": false,
      "declare": false,
      "start": 918,
      "end": 958
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1022
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
              "start": 1029,
              "end": 1030
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1033,
                "end": 1038
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1039,
                "end": 1044
              },
              "optional": false,
              "computed": true,
              "start": 1033,
              "end": 1045
            },
            "computed": false,
            "start": 1029,
            "end": 1045
          }
        ],
        "start": 1023,
        "end": 1047
      },
      "const": false,
      "declare": false,
      "start": 1015,
      "end": 1047
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1110,
        "end": 1112
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1119,
              "end": 1120
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1123,
                "end": 1128
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1129,
                "end": 1134
              },
              "optional": false,
              "computed": true,
              "start": 1123,
              "end": 1135
            },
            "computed": false,
            "start": 1119,
            "end": 1135
          }
        ],
        "start": 1113,
        "end": 1137
      },
      "const": false,
      "declare": false,
      "start": 1105,
      "end": 1137
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1203
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
              "start": 1210,
              "end": 1211
            },
            "initializer": null,
            "computed": false,
            "start": 1210,
            "end": 1211
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1217,
              "end": 1218
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1221,
              "end": 1222
            },
            "computed": false,
            "start": 1217,
            "end": 1222
          }
        ],
        "start": 1204,
        "end": 1224
      },
      "const": false,
      "declare": false,
      "start": 1196,
      "end": 1224
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
            "name": "doNotPropagate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1300,
            "end": 1314
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1325
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1327
                },
                "optional": false,
                "computed": false,
                "start": 1323,
                "end": 1327
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1329,
                  "end": 1331
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1332,
                  "end": 1333
                },
                "optional": false,
                "computed": false,
                "start": 1329,
                "end": 1333
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1335,
                  "end": 1337
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1339
                },
                "optional": false,
                "computed": false,
                "start": 1335,
                "end": 1339
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1341,
                  "end": 1343
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1345
                },
                "optional": false,
                "computed": false,
                "start": 1341,
                "end": 1345
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1349
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1351
                },
                "optional": false,
                "computed": false,
                "start": 1347,
                "end": 1351
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1353,
                  "end": 1355
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1356,
                  "end": 1357
                },
                "optional": false,
                "computed": false,
                "start": 1353,
                "end": 1357
              }
            ],
            "start": 1317,
            "end": 1359
          },
          "definite": false,
          "start": 1300,
          "end": 1359
        }
      ],
      "declare": false,
      "start": 1296,
      "end": 1360
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
            "name": "doPropagate",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1420
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1429,
                  "end": 1431
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1432,
                  "end": 1433
                },
                "optional": false,
                "computed": false,
                "start": 1429,
                "end": 1433
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1435,
                  "end": 1437
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1438,
                  "end": 1439
                },
                "optional": false,
                "computed": false,
                "start": 1435,
                "end": 1439
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1441,
                  "end": 1443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1444,
                  "end": 1445
                },
                "optional": false,
                "computed": false,
                "start": 1441,
                "end": 1445
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1447,
                  "end": 1449
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1450,
                  "end": 1451
                },
                "optional": false,
                "computed": false,
                "start": 1447,
                "end": 1451
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1455
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1456,
                  "end": 1457
                },
                "optional": false,
                "computed": false,
                "start": 1453,
                "end": 1457
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1461
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1463
                },
                "optional": false,
                "computed": false,
                "start": 1459,
                "end": 1463
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1465,
                  "end": 1467
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1468,
                  "end": 1469
                },
                "optional": false,
                "computed": false,
                "start": 1465,
                "end": 1469
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1471,
                  "end": 1473
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1474,
                  "end": 1475
                },
                "optional": false,
                "computed": false,
                "start": 1471,
                "end": 1475
              }
            ],
            "start": 1423,
            "end": 1477
          },
          "definite": false,
          "start": 1409,
          "end": 1477
        }
      ],
      "declare": false,
      "start": 1405,
      "end": 1478
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 1479
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 82,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 87,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 285,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 307,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 329,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 341,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 351,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 364,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 391,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 398,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 467,
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
    "value": "E1",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 480,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 532,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 555,
    "end": 556
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 562,
    "end": 563
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 604,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 609,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 620,
    "end": 621
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 622,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 628,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 642,
    "end": 643
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 651,
    "end": 652
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 652,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 720,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "E4",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 748,
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
    "value": "length",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 876,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "E5",
    "start": 881,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 899,
    "end": 900
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 918,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "E6",
    "start": 923,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 941,
    "end": 942
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "E7",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1033,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1105,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "E8",
    "start": 1110,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1196,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "E9",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1296,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "doNotPropagate",
    "start": 1300,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "E8",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "E7",
    "start": 1329,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "E4",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1341,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1347,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "E3",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "doPropagate",
    "start": 1409,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "E9",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "E9",
    "start": 1435,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "E6",
    "start": 1441,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "E6",
    "start": 1447,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "E6",
    "start": 1453,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "E5",
    "start": 1459,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "E5",
    "start": 1465,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "E5",
    "start": 1471,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478
  }
]
```
