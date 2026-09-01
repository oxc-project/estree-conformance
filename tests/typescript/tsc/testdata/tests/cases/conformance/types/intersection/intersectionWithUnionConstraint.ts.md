__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                }
              ],
              "start": 22,
              "end": 37
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 37
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 49,
                  "end": 55
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                }
              ],
              "start": 49,
              "end": 64
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 64
          }
        ],
        "start": 11,
        "end": 65
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
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 74
                  },
                  "typeArguments": null,
                  "start": 73,
                  "end": 74
                }
              ],
              "start": 69,
              "end": 74
            },
            "start": 67,
            "end": 74
          },
          "start": 66,
          "end": 74
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 148,
                          "end": 154
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 157,
                          "end": 163
                        }
                      ],
                      "start": 148,
                      "end": 163
                    },
                    "start": 146,
                    "end": 163
                  },
                  "start": 145,
                  "end": 163
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "definite": false,
                "start": 145,
                "end": 167
              }
            ],
            "declare": false,
            "start": 141,
            "end": 168
          }
        ],
        "start": 76,
        "end": 170
      },
      "expression": false,
      "start": 0,
      "end": 170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
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
              "start": 184,
              "end": 185
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 194,
                  "end": 200
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 203,
                  "end": 209
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 212,
                  "end": 221
                }
              ],
              "start": 194,
              "end": 221
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 221
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 233,
                  "end": 239
                },
                {
                  "type": "TSNullKeyword",
                  "start": 242,
                  "end": 246
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 249,
                  "end": 258
                }
              ],
              "start": 233,
              "end": 258
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 258
          }
        ],
        "start": 183,
        "end": 259
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
                    "start": 263,
                    "end": 264
                  },
                  "typeArguments": null,
                  "start": 263,
                  "end": 264
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  },
                  "typeArguments": null,
                  "start": 267,
                  "end": 268
                }
              ],
              "start": 263,
              "end": 268
            },
            "start": 261,
            "end": 268
          },
          "start": 260,
          "end": 268
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
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 284,
                          "end": 290
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 293,
                          "end": 299
                        }
                      ],
                      "start": 284,
                      "end": 299
                    },
                    "start": 282,
                    "end": 299
                  },
                  "start": 280,
                  "end": 299
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "definite": false,
                "start": 280,
                "end": 303
              }
            ],
            "declare": false,
            "start": 276,
            "end": 304
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
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 330,
                          "end": 336
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 339,
                          "end": 343
                        }
                      ],
                      "start": 330,
                      "end": 343
                    },
                    "start": 328,
                    "end": 343
                  },
                  "start": 326,
                  "end": 343
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 347
                },
                "definite": false,
                "start": 326,
                "end": 347
              }
            ],
            "declare": false,
            "start": 322,
            "end": 348
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
                  "name": "y3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 376,
                          "end": 382
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 385,
                          "end": 394
                        }
                      ],
                      "start": 376,
                      "end": 394
                    },
                    "start": 374,
                    "end": 394
                  },
                  "start": 372,
                  "end": 394
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 398
                },
                "definite": false,
                "start": 372,
                "end": 398
              }
            ],
            "declare": false,
            "start": 368,
            "end": 399
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
                  "name": "y4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 412,
                          "end": 418
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 421,
                          "end": 425
                        }
                      ],
                      "start": 412,
                      "end": 425
                    },
                    "start": 410,
                    "end": 425
                  },
                  "start": 408,
                  "end": 425
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 428,
                  "end": 429
                },
                "definite": false,
                "start": 408,
                "end": 429
              }
            ],
            "declare": false,
            "start": 404,
            "end": 430
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
                  "name": "y5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 458,
                          "end": 464
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 467,
                          "end": 476
                        }
                      ],
                      "start": 458,
                      "end": 476
                    },
                    "start": 456,
                    "end": 476
                  },
                  "start": 454,
                  "end": 476
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 480
                },
                "definite": false,
                "start": 454,
                "end": 480
              }
            ],
            "declare": false,
            "start": 450,
            "end": 481
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
                  "name": "y6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNullKeyword",
                          "start": 504,
                          "end": 508
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 511,
                          "end": 520
                        }
                      ],
                      "start": 504,
                      "end": 520
                    },
                    "start": 502,
                    "end": 520
                  },
                  "start": 500,
                  "end": 520
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 524
                },
                "definite": false,
                "start": 500,
                "end": 524
              }
            ],
            "declare": false,
            "start": 496,
            "end": 525
          }
        ],
        "start": 270,
        "end": 539
      },
      "expression": false,
      "start": 172,
      "end": 539
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 548
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
                "start": 552,
                "end": 558
              },
              {
                "type": "TSNumberKeyword",
                "start": 561,
                "end": 567
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 570,
                "end": 579
              }
            ],
            "start": 552,
            "end": 579
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 584,
                "end": 590
              },
              {
                "type": "TSNullKeyword",
                "start": 593,
                "end": 597
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 600,
                "end": 609
              }
            ],
            "start": 584,
            "end": 609
          }
        ],
        "start": 551,
        "end": 610
      },
      "declare": false,
      "start": 541,
      "end": 611
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 647
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
              "start": 648,
              "end": 649
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 658,
                  "end": 664
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 667,
                  "end": 673
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 676,
                  "end": 685
                }
              ],
              "start": 658,
              "end": 685
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 648,
            "end": 685
          }
        ],
        "start": 647,
        "end": 686
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
                    "start": 690,
                    "end": 691
                  },
                  "typeArguments": null,
                  "start": 690,
                  "end": 691
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 695,
                      "end": 701
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 704,
                      "end": 710
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 713,
                      "end": 722
                    }
                  ],
                  "start": 695,
                  "end": 722
                }
              ],
              "start": 690,
              "end": 723
            },
            "start": 688,
            "end": 723
          },
          "start": 687,
          "end": 723
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 740,
                          "end": 746
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 749,
                          "end": 758
                        }
                      ],
                      "start": 740,
                      "end": 758
                    },
                    "start": 738,
                    "end": 758
                  },
                  "start": 737,
                  "end": 758
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 762
                },
                "definite": false,
                "start": 737,
                "end": 762
              }
            ],
            "declare": false,
            "start": 731,
            "end": 763
          }
        ],
        "start": 725,
        "end": 765
      },
      "expression": false,
      "start": 636,
      "end": 765
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 776,
        "end": 778
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
              "start": 779,
              "end": 780
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 789,
                  "end": 795
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 798,
                  "end": 804
                }
              ],
              "start": 789,
              "end": 804
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 779,
            "end": 804
          }
        ],
        "start": 778,
        "end": 805
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
                    "start": 809,
                    "end": 810
                  },
                  "typeArguments": null,
                  "start": 809,
                  "end": 810
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 814,
                      "end": 820
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 823,
                      "end": 829
                    }
                  ],
                  "start": 814,
                  "end": 829
                }
              ],
              "start": 809,
              "end": 830
            },
            "start": 807,
            "end": 830
          },
          "start": 806,
          "end": 830
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 847,
                      "end": 853
                    },
                    "start": 845,
                    "end": 853
                  },
                  "start": 844,
                  "end": 853
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 856,
                  "end": 857
                },
                "definite": false,
                "start": 844,
                "end": 857
              }
            ],
            "declare": false,
            "start": 838,
            "end": 858
          }
        ],
        "start": 832,
        "end": 860
      },
      "expression": false,
      "start": 767,
      "end": 860
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 871,
        "end": 873
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
              "start": 874,
              "end": 875
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 874,
            "end": 875
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 878
            },
            "constraint": {
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
                  "start": 893,
                  "end": 894
                },
                "typeArguments": null,
                "start": 893,
                "end": 894
              },
              "start": 887,
              "end": 894
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 877,
            "end": 894
          }
        ],
        "start": 873,
        "end": 895
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
                      "start": 905,
                      "end": 906
                    },
                    "typeArguments": null,
                    "start": 905,
                    "end": 906
                  },
                  "start": 899,
                  "end": 906
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 909,
                    "end": 910
                  },
                  "typeArguments": null,
                  "start": 909,
                  "end": 910
                }
              ],
              "start": 899,
              "end": 910
            },
            "start": 897,
            "end": 910
          },
          "start": 896,
          "end": 910
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 931,
                        "end": 934
                      },
                      "start": 925,
                      "end": 934
                    },
                    "start": 923,
                    "end": 934
                  },
                  "start": 922,
                  "end": 934
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 938
                },
                "definite": false,
                "start": 922,
                "end": 938
              }
            ],
            "declare": false,
            "start": 918,
            "end": 939
          }
        ],
        "start": 912,
        "end": 941
      },
      "expression": false,
      "start": 862,
      "end": 941
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "typeAnnotation": null,
        "start": 970,
        "end": 977
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
              "start": 978,
              "end": 979
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 978,
            "end": 979
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 981,
              "end": 982
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 981,
            "end": 982
          }
        ],
        "start": 977,
        "end": 983
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 989,
          "end": 990
        },
        "constraint": {
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
              "start": 1000,
              "end": 1001
            },
            "typeArguments": null,
            "start": 1000,
            "end": 1001
          },
          "start": 994,
          "end": 1001
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1005
            },
            "typeArguments": null,
            "start": 1004,
            "end": 1005
          },
          "extendsType": {
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
                "start": 1020,
                "end": 1021
              },
              "typeArguments": null,
              "start": 1020,
              "end": 1021
            },
            "start": 1014,
            "end": 1021
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnexpectedError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1039
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1040,
                    "end": 1041
                  },
                  "typeArguments": null,
                  "start": 1040,
                  "end": 1041
                }
              ],
              "start": 1039,
              "end": 1042
            },
            "start": 1024,
            "end": 1042
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NoErrorHere",
              "optional": false,
              "typeAnnotation": null,
              "start": 1045,
              "end": 1056
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1057,
                    "end": 1058
                  },
                  "typeArguments": null,
                  "start": 1057,
                  "end": 1058
                }
              ],
              "start": 1056,
              "end": 1059
            },
            "start": 1045,
            "end": 1059
          },
          "start": 1004,
          "end": 1059
        },
        "optional": false,
        "readonly": null,
        "start": 986,
        "end": 1061
      },
      "declare": false,
      "start": 965,
      "end": 1061
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnexpectedError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1068,
        "end": 1083
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
              "start": 1084,
              "end": 1085
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1105
              },
              "typeArguments": null,
              "start": 1094,
              "end": 1105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1084,
            "end": 1105
          }
        ],
        "start": 1083,
        "end": 1106
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1110
        },
        "typeArguments": null,
        "start": 1109,
        "end": 1110
      },
      "declare": false,
      "start": 1063,
      "end": 1110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoErrorHere",
        "optional": false,
        "typeAnnotation": null,
        "start": 1116,
        "end": 1127
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
              "start": 1128,
              "end": 1129
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1138,
                "end": 1149
              },
              "typeArguments": null,
              "start": 1138,
              "end": 1149
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1128,
            "end": 1149
          }
        ],
        "start": 1127,
        "end": 1150
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 1153,
          "end": 1154
        },
        "typeArguments": null,
        "start": 1153,
        "end": 1154
      },
      "declare": false,
      "start": 1111,
      "end": 1154
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1183,
        "end": 1184
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
              "start": 1185,
              "end": 1186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1185,
            "end": 1186
          }
        ],
        "start": 1184,
        "end": 1187
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1190,
            "end": 1191
          },
          "typeArguments": null,
          "start": 1190,
          "end": 1191
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 1200,
            "end": 1205
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1212,
                    "end": 1213
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1212,
                  "end": 1213
                },
                "start": 1206,
                "end": 1213
              }
            ],
            "start": 1205,
            "end": 1214
          },
          "start": 1200,
          "end": 1214
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1217,
            "end": 1218
          },
          "typeArguments": null,
          "start": 1217,
          "end": 1218
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1221,
          "end": 1226
        },
        "start": 1190,
        "end": 1226
      },
      "declare": false,
      "start": 1178,
      "end": 1227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1233,
        "end": 1234
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
              "start": 1235,
              "end": 1236
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1235,
            "end": 1236
          }
        ],
        "start": 1234,
        "end": 1237
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1243,
          "end": 1244
        },
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1248,
                "end": 1249
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
                      "start": 1250,
                      "end": 1251
                    },
                    "typeArguments": null,
                    "start": 1250,
                    "end": 1251
                  }
                ],
                "start": 1249,
                "end": 1252
              },
              "start": 1248,
              "end": 1252
            },
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
                  "start": 1261,
                  "end": 1262
                },
                "typeArguments": null,
                "start": 1261,
                "end": 1262
              },
              "start": 1255,
              "end": 1262
            }
          ],
          "start": 1248,
          "end": 1262
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 1266,
            "end": 1268
          },
          "start": 1266,
          "end": 1268
        },
        "optional": false,
        "readonly": null,
        "start": 1240,
        "end": 1270
      },
      "declare": false,
      "start": 1228,
      "end": 1271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1271
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 41,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 172,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 212,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 225,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 240,
    "end": 241
  },
  {
    "type": "Null",
    "value": "null",
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 249,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 276,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 337,
    "end": 338
  },
  {
    "type": "Null",
    "value": "null",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 368,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "y3",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 385,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 397,
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
    "value": "let",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "y4",
    "start": 408,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 419,
    "end": 420
  },
  {
    "type": "Null",
    "value": "null",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "y5",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 458,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 467,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "y6",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Null",
    "value": "null",
    "start": 504,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 511,
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
    "value": "x",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 541,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 552,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "value": ")",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 591,
    "end": 592
  },
  {
    "type": "Null",
    "value": "null",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 600,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 636,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 645,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 650,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 658,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 676,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 704,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 713,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 725,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 731,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 749,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 764,
    "end": 765
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 767,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 776,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 781,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 798,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 814,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 823,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 838,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 847,
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
    "value": "x",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 862,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 879,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 887,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 899,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 912,
    "end": 913
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 918,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 925,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 931,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 965,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 970,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 991,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 994,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1006,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "UnexpectedError",
    "start": 1024,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "NoErrorHere",
    "start": 1045,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "UnexpectedError",
    "start": 1068,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1086,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 1094,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "NoErrorHere",
    "start": 1116,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1130,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 1138,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1178,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1192,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1200,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1221,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1228,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1255,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1266,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  }
]
```
