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
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 17
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 18,
              "end": 24
            }
          ],
          "start": 17,
          "end": 25
        },
        "start": 10,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 44
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 52
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 53,
                    "end": 59
                  }
                ],
                "start": 52,
                "end": 60
              },
              "start": 45,
              "end": 60
            }
          ],
          "start": 44,
          "end": 61
        },
        "start": 37,
        "end": 61
      },
      "declare": false,
      "start": 27,
      "end": 62
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 70
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 80
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 81,
                  "end": 87
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 97
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 98,
                        "end": 104
                      }
                    ],
                    "start": 97,
                    "end": 105
                  },
                  "start": 90,
                  "end": 105
                }
              ],
              "start": 81,
              "end": 105
            }
          ],
          "start": 80,
          "end": 106
        },
        "start": 73,
        "end": 106
      },
      "declare": false,
      "start": 63,
      "end": 107
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 115
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 125
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 126,
                  "end": 132
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 142
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 143,
                        "end": 149
                      }
                    ],
                    "start": 142,
                    "end": 150
                  },
                  "start": 135,
                  "end": 150
                }
              ],
              "start": 126,
              "end": 150
            }
          ],
          "start": 125,
          "end": 151
        },
        "start": 118,
        "end": 151
      },
      "declare": false,
      "start": 108,
      "end": 152
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 158,
        "end": 160
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 170
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
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    },
                    "start": 177,
                    "end": 185
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 173,
                  "end": 185
                }
              ],
              "start": 171,
              "end": 187
            }
          ],
          "start": 170,
          "end": 188
        },
        "start": 163,
        "end": 188
      },
      "declare": false,
      "start": 153,
      "end": 189
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 197
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 207
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 214
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 218,
                      "end": 222
                    },
                    "start": 216,
                    "end": 222
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 210,
                  "end": 222
                }
              ],
              "start": 208,
              "end": 224
            }
          ],
          "start": 207,
          "end": 225
        },
        "start": 200,
        "end": 225
      },
      "declare": false,
      "start": 190,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 266,
        "end": 268
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 278
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 285
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 289,
                          "end": 295
                        },
                        "start": 287,
                        "end": 295
                      },
                      "start": 286,
                      "end": 295
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 298,
                      "end": 302
                    },
                    "start": 296,
                    "end": 302
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 281,
                  "end": 302
                }
              ],
              "start": 279,
              "end": 304
            }
          ],
          "start": 278,
          "end": 305
        },
        "start": 271,
        "end": 305
      },
      "declare": false,
      "start": 261,
      "end": 306
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T8",
        "optional": false,
        "typeAnnotation": null,
        "start": 346,
        "end": 348
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 351,
          "end": 358
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 365
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 375,
                              "end": 379
                            },
                            "start": 372,
                            "end": 379
                          },
                          "start": 369,
                          "end": 379
                        },
                        "start": 367,
                        "end": 379
                      },
                      "start": 366,
                      "end": 379
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 382,
                      "end": 386
                    },
                    "start": 380,
                    "end": 386
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 361,
                  "end": 386
                }
              ],
              "start": 359,
              "end": 388
            }
          ],
          "start": 358,
          "end": 389
        },
        "start": 351,
        "end": 389
      },
      "declare": false,
      "start": 341,
      "end": 390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 409
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 419
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 420,
              "end": 423
            }
          ],
          "start": 419,
          "end": 424
        },
        "start": 412,
        "end": 424
      },
      "declare": false,
      "start": 402,
      "end": 425
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 434
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 444
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNeverKeyword",
              "start": 445,
              "end": 450
            }
          ],
          "start": 444,
          "end": 451
        },
        "start": 437,
        "end": 451
      },
      "declare": false,
      "start": 426,
      "end": 452
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 461
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 464,
          "end": 471
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 472,
              "end": 479
            }
          ],
          "start": 471,
          "end": 480
        },
        "start": 464,
        "end": 480
      },
      "declare": false,
      "start": 453,
      "end": 481
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 487,
        "end": 490
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 493,
          "end": 500
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 508
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 509,
                      "end": 516
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 517,
                          "end": 523
                        }
                      ],
                      "start": 516,
                      "end": 524
                    },
                    "start": 509,
                    "end": 524
                  }
                ],
                "start": 508,
                "end": 525
              },
              "start": 501,
              "end": 525
            }
          ],
          "start": 500,
          "end": 526
        },
        "start": 493,
        "end": 526
      },
      "declare": false,
      "start": 482,
      "end": 527
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 536
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_Expect",
          "optional": false,
          "typeAnnotation": null,
          "start": 539,
          "end": 546
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Awaited",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 554
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 555,
                          "end": 562
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 563,
                                "end": 570
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 571,
                                    "end": 577
                                  }
                                ],
                                "start": 570,
                                "end": 578
                              },
                              "start": 563,
                              "end": 578
                            }
                          ],
                          "start": 562,
                          "end": 579
                        },
                        "start": 555,
                        "end": 579
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 582,
                        "end": 588
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 591,
                        "end": 595
                      }
                    ],
                    "start": 555,
                    "end": 595
                  }
                ],
                "start": 554,
                "end": 596
              },
              "start": 547,
              "end": 596
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 611,
                  "end": 617
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 620,
                  "end": 626
                },
                {
                  "type": "TSNullKeyword",
                  "start": 629,
                  "end": 633
                }
              ],
              "start": 611,
              "end": 633
            }
          ],
          "start": 546,
          "end": 634
        },
        "start": 539,
        "end": 634
      },
      "declare": false,
      "start": 528,
      "end": 635
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 714
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_Expect",
          "optional": false,
          "typeAnnotation": null,
          "start": 717,
          "end": 724
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Awaited",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 732
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 733,
                          "end": 740
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 741,
                                "end": 748
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 749,
                                    "end": 755
                                  }
                                ],
                                "start": 748,
                                "end": 756
                              },
                              "start": 741,
                              "end": 756
                            }
                          ],
                          "start": 740,
                          "end": 757
                        },
                        "start": 733,
                        "end": 757
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 760,
                        "end": 766
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 769,
                        "end": 778
                      }
                    ],
                    "start": 733,
                    "end": 778
                  }
                ],
                "start": 732,
                "end": 779
              },
              "start": 725,
              "end": 779
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 794,
                  "end": 800
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 803,
                  "end": 809
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 812,
                  "end": 821
                }
              ],
              "start": 794,
              "end": 821
            }
          ],
          "start": 724,
          "end": 822
        },
        "start": 717,
        "end": 822
      },
      "declare": false,
      "start": 706,
      "end": 823
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 899,
        "end": 902
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_Expect",
          "optional": false,
          "typeAnnotation": null,
          "start": 905,
          "end": 912
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Awaited",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 920
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 921,
                          "end": 928
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 929,
                                "end": 936
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSNumberKeyword",
                                    "start": 937,
                                    "end": 943
                                  }
                                ],
                                "start": 936,
                                "end": 944
                              },
                              "start": 929,
                              "end": 944
                            }
                          ],
                          "start": 928,
                          "end": 945
                        },
                        "start": 921,
                        "end": 945
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 948,
                        "end": 954
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 957,
                        "end": 961
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 964,
                        "end": 973
                      }
                    ],
                    "start": 921,
                    "end": 973
                  }
                ],
                "start": 920,
                "end": 974
              },
              "start": 913,
              "end": 974
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 989,
                  "end": 995
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 998,
                  "end": 1004
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1007,
                  "end": 1011
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1014,
                  "end": 1023
                }
              ],
              "start": 989,
              "end": 1023
            }
          ],
          "start": 912,
          "end": 1024
        },
        "start": 905,
        "end": 1024
      },
      "declare": false,
      "start": 894,
      "end": 1025
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 1102,
        "end": 1112
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1122
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUndefinedKeyword",
              "start": 1123,
              "end": 1132
            }
          ],
          "start": 1122,
          "end": 1133
        },
        "start": 1115,
        "end": 1133
      },
      "declare": false,
      "start": 1097,
      "end": 1134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 1140,
        "end": 1145
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 1148,
          "end": 1155
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNullKeyword",
              "start": 1156,
              "end": 1160
            }
          ],
          "start": 1155,
          "end": 1161
        },
        "start": 1148,
        "end": 1161
      },
      "declare": false,
      "start": 1135,
      "end": 1162
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TNullOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 1168,
        "end": 1184
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 1187,
          "end": 1194
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 1195,
                  "end": 1199
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1202,
                  "end": 1211
                }
              ],
              "start": 1195,
              "end": 1211
            }
          ],
          "start": 1194,
          "end": 1212
        },
        "start": 1187,
        "end": 1212
      },
      "declare": false,
      "start": 1163,
      "end": 1213
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 1225,
        "end": 1235
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1242
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BadPromise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1255,
                              "end": 1265
                            },
                            "typeArguments": null,
                            "start": 1255,
                            "end": 1265
                          },
                          "start": 1253,
                          "end": 1265
                        },
                        "start": 1248,
                        "end": 1265
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1270,
                        "end": 1274
                      },
                      "start": 1267,
                      "end": 1274
                    },
                    "start": 1247,
                    "end": 1274
                  },
                  "start": 1245,
                  "end": 1274
                },
                "start": 1243,
                "end": 1274
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1277,
                "end": 1281
              },
              "start": 1275,
              "end": 1281
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1238,
            "end": 1282
          }
        ],
        "start": 1236,
        "end": 1284
      },
      "declare": false,
      "start": 1215,
      "end": 1284
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1290,
        "end": 1293
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 1296,
          "end": 1303
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BadPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1314
              },
              "typeArguments": null,
              "start": 1304,
              "end": 1314
            }
          ],
          "start": 1303,
          "end": 1315
        },
        "start": 1296,
        "end": 1315
      },
      "declare": false,
      "start": 1285,
      "end": 1316
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadPromise1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1348
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1351,
              "end": 1355
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BadPromise2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1368,
                              "end": 1379
                            },
                            "typeArguments": null,
                            "start": 1368,
                            "end": 1379
                          },
                          "start": 1366,
                          "end": 1379
                        },
                        "start": 1361,
                        "end": 1379
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1384,
                        "end": 1388
                      },
                      "start": 1381,
                      "end": 1388
                    },
                    "start": 1360,
                    "end": 1388
                  },
                  "start": 1358,
                  "end": 1388
                },
                "start": 1356,
                "end": 1388
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1391,
                "end": 1395
              },
              "start": 1389,
              "end": 1395
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1351,
            "end": 1396
          }
        ],
        "start": 1349,
        "end": 1398
      },
      "declare": false,
      "start": 1327,
      "end": 1398
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BadPromise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1409,
        "end": 1420
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 1423,
              "end": 1427
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BadPromise1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1440,
                              "end": 1451
                            },
                            "typeArguments": null,
                            "start": 1440,
                            "end": 1451
                          },
                          "start": 1438,
                          "end": 1451
                        },
                        "start": 1433,
                        "end": 1451
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1456,
                        "end": 1460
                      },
                      "start": 1453,
                      "end": 1460
                    },
                    "start": 1432,
                    "end": 1460
                  },
                  "start": 1430,
                  "end": 1460
                },
                "start": 1428,
                "end": 1460
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1463,
                "end": 1467
              },
              "start": 1461,
              "end": 1467
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1423,
            "end": 1468
          }
        ],
        "start": 1421,
        "end": 1470
      },
      "declare": false,
      "start": 1399,
      "end": 1470
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1476,
        "end": 1479
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 1482,
          "end": 1489
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BadPromise1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1490,
                "end": 1501
              },
              "typeArguments": null,
              "start": 1490,
              "end": 1501
            }
          ],
          "start": 1489,
          "end": 1502
        },
        "start": 1482,
        "end": 1502
      },
      "declare": false,
      "start": 1471,
      "end": 1503
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1575,
        "end": 1578
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Awaited",
          "optional": false,
          "typeAnnotation": null,
          "start": 1581,
          "end": 1588
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1591,
                    "end": 1595
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1608,
                                  "end": 1614
                                },
                                "start": 1606,
                                "end": 1614
                              },
                              "start": 1601,
                              "end": 1614
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "other",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [],
                                  "start": 1623,
                                  "end": 1626
                                },
                                "start": 1621,
                                "end": 1626
                              },
                              "start": 1616,
                              "end": 1626
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 1631,
                              "end": 1635
                            },
                            "start": 1628,
                            "end": 1635
                          },
                          "start": 1600,
                          "end": 1635
                        },
                        "start": 1598,
                        "end": 1635
                      },
                      "start": 1596,
                      "end": 1635
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1591,
                  "end": 1636
                }
              ],
              "start": 1589,
              "end": 1637
            }
          ],
          "start": 1588,
          "end": 1638
        },
        "start": 1581,
        "end": 1638
      },
      "declare": false,
      "start": 1570,
      "end": 1639
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaybePromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 1712,
        "end": 1724
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
              "start": 1725,
              "end": 1726
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1725,
            "end": 1726
          }
        ],
        "start": 1724,
        "end": 1727
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1730,
              "end": 1731
            },
            "typeArguments": null,
            "start": 1730,
            "end": 1731
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 1734,
              "end": 1741
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
                    "start": 1742,
                    "end": 1743
                  },
                  "typeArguments": null,
                  "start": 1742,
                  "end": 1743
                }
              ],
              "start": 1741,
              "end": 1744
            },
            "start": 1734,
            "end": 1744
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "typeAnnotation": null,
              "start": 1747,
              "end": 1758
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
                    "start": 1759,
                    "end": 1760
                  },
                  "typeArguments": null,
                  "start": 1759,
                  "end": 1760
                }
              ],
              "start": 1758,
              "end": 1761
            },
            "start": 1747,
            "end": 1761
          }
        ],
        "start": 1730,
        "end": 1761
      },
      "declare": false,
      "start": 1707,
      "end": 1761
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaybePromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 1779,
        "end": 1791
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
              "start": 1792,
              "end": 1793
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1792,
            "end": 1793
          }
        ],
        "start": 1791,
        "end": 1794
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                "start": 1802,
                "end": 1803
              },
              "typeArguments": null,
              "start": 1802,
              "end": 1803
            },
            "start": 1800,
            "end": 1803
          },
          "start": 1795,
          "end": 1803
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MaybePromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1806,
            "end": 1818
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
                  "start": 1819,
                  "end": 1820
                },
                "typeArguments": null,
                "start": 1819,
                "end": 1820
              }
            ],
            "start": 1818,
            "end": 1821
          },
          "start": 1806,
          "end": 1821
        },
        "start": 1804,
        "end": 1821
      },
      "body": null,
      "expression": false,
      "start": 1762,
      "end": 1822
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 1839,
        "end": 1843
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "name": "aaa",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1861,
                      "end": 1867
                    },
                    "start": 1859,
                    "end": 1867
                  },
                  "start": 1856,
                  "end": 1867
                },
                "init": null,
                "definite": false,
                "start": 1856,
                "end": 1867
              }
            ],
            "declare": false,
            "start": 1852,
            "end": 1868
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
                  "name": "bbb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1882,
                      "end": 1888
                    },
                    "start": 1880,
                    "end": 1888
                  },
                  "start": 1877,
                  "end": 1888
                },
                "init": null,
                "definite": false,
                "start": 1877,
                "end": 1888
              }
            ],
            "declare": false,
            "start": 1873,
            "end": 1889
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
                    "name": "aaa",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1904,
                    "end": 1907
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bbb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1917,
                    "end": 1920
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1894,
                "end": 1927
              },
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1936,
                      "end": 1943
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "all",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1944,
                      "end": 1947
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1936,
                    "end": 1947
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MaybePromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1958,
                            "end": 1970
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1971,
                              "end": 1972
                            }
                          ],
                          "optional": false,
                          "start": 1958,
                          "end": 1973
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MaybePromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1983,
                            "end": 1995
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "2",
                              "raw": "'2'",
                              "start": 1996,
                              "end": 1999
                            }
                          ],
                          "optional": false,
                          "start": 1983,
                          "end": 2000
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MaybePromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2010,
                            "end": 2022
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 2023,
                              "end": 2027
                            }
                          ],
                          "optional": false,
                          "start": 2010,
                          "end": 2028
                        }
                      ],
                      "start": 1948,
                      "end": 2035
                    }
                  ],
                  "optional": false,
                  "start": 1936,
                  "end": 2036
                },
                "start": 1930,
                "end": 2036
              },
              "start": 1894,
              "end": 2036
            },
            "directive": null,
            "start": 1894,
            "end": 2036
          }
        ],
        "start": 1846,
        "end": 2038
      },
      "expression": false,
      "start": 1824,
      "end": 2038
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2070,
        "end": 2072
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2076,
              "end": 2082
            },
            "start": 2074,
            "end": 2082
          },
          "start": 2073,
          "end": 2082
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
                  "typeAnnotation": null,
                  "start": 2113,
                  "end": 2114
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2123,
                    "end": 2124
                  },
                  "start": 2117,
                  "end": 2124
                },
                "definite": false,
                "start": 2113,
                "end": 2124
              }
            ],
            "declare": false,
            "start": 2107,
            "end": 2125
          }
        ],
        "start": 2084,
        "end": 2127
      },
      "expression": false,
      "start": 2055,
      "end": 2127
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2144,
        "end": 2146
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2150,
              "end": 2157
            },
            "start": 2148,
            "end": 2157
          },
          "start": 2147,
          "end": 2157
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
                  "typeAnnotation": null,
                  "start": 2189,
                  "end": 2190
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2199,
                    "end": 2200
                  },
                  "start": 2193,
                  "end": 2200
                },
                "definite": false,
                "start": 2189,
                "end": 2200
              }
            ],
            "declare": false,
            "start": 2183,
            "end": 2201
          }
        ],
        "start": 2159,
        "end": 2203
      },
      "expression": false,
      "start": 2129,
      "end": 2203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2220,
        "end": 2222
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 2226,
              "end": 2232
            },
            "start": 2224,
            "end": 2232
          },
          "start": 2223,
          "end": 2232
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
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2264
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2273,
                    "end": 2274
                  },
                  "start": 2267,
                  "end": 2274
                },
                "definite": false,
                "start": 2263,
                "end": 2274
              }
            ],
            "declare": false,
            "start": 2257,
            "end": 2275
          }
        ],
        "start": 2234,
        "end": 2277
      },
      "expression": false,
      "start": 2205,
      "end": 2277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2294,
        "end": 2296
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2300,
                "end": 2307
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2308,
                    "end": 2314
                  }
                ],
                "start": 2307,
                "end": 2315
              },
              "start": 2300,
              "end": 2315
            },
            "start": 2298,
            "end": 2315
          },
          "start": 2297,
          "end": 2315
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
                  "typeAnnotation": null,
                  "start": 2346,
                  "end": 2347
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2356,
                    "end": 2357
                  },
                  "start": 2350,
                  "end": 2357
                },
                "definite": false,
                "start": 2346,
                "end": 2357
              }
            ],
            "declare": false,
            "start": 2340,
            "end": 2358
          }
        ],
        "start": 2317,
        "end": 2360
      },
      "expression": false,
      "start": 2279,
      "end": 2360
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2377,
        "end": 2379
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2383,
                "end": 2390
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2391,
                    "end": 2398
                  }
                ],
                "start": 2390,
                "end": 2399
              },
              "start": 2383,
              "end": 2399
            },
            "start": 2381,
            "end": 2399
          },
          "start": 2380,
          "end": 2399
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
                  "typeAnnotation": null,
                  "start": 2431,
                  "end": 2432
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2441,
                    "end": 2442
                  },
                  "start": 2435,
                  "end": 2442
                },
                "definite": false,
                "start": 2431,
                "end": 2442
              }
            ],
            "declare": false,
            "start": 2425,
            "end": 2443
          }
        ],
        "start": 2401,
        "end": 2445
      },
      "expression": false,
      "start": 2362,
      "end": 2445
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2462,
        "end": 2464
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2468,
                "end": 2475
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSObjectKeyword",
                    "start": 2476,
                    "end": 2482
                  }
                ],
                "start": 2475,
                "end": 2483
              },
              "start": 2468,
              "end": 2483
            },
            "start": 2466,
            "end": 2483
          },
          "start": 2465,
          "end": 2483
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
                  "typeAnnotation": null,
                  "start": 2514,
                  "end": 2515
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2524,
                    "end": 2525
                  },
                  "start": 2518,
                  "end": 2525
                },
                "definite": false,
                "start": 2514,
                "end": 2525
              }
            ],
            "declare": false,
            "start": 2508,
            "end": 2526
          }
        ],
        "start": 2485,
        "end": 2528
      },
      "expression": false,
      "start": 2447,
      "end": 2528
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2557,
        "end": 2559
      },
      "generator": false,
      "async": true,
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
              "start": 2560,
              "end": 2561
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2560,
            "end": 2561
          }
        ],
        "start": 2559,
        "end": 2562
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2566,
                "end": 2567
              },
              "typeArguments": null,
              "start": 2566,
              "end": 2567
            },
            "start": 2564,
            "end": 2567
          },
          "start": 2563,
          "end": 2567
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
                  "typeAnnotation": null,
                  "start": 2858,
                  "end": 2859
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2868,
                    "end": 2869
                  },
                  "start": 2862,
                  "end": 2869
                },
                "definite": false,
                "start": 2858,
                "end": 2869
              }
            ],
            "declare": false,
            "start": 2852,
            "end": 2870
          }
        ],
        "start": 2569,
        "end": 2872
      },
      "expression": false,
      "start": 2542,
      "end": 2872
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2889,
        "end": 2891
      },
      "generator": false,
      "async": true,
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
              "start": 2892,
              "end": 2893
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 2902,
              "end": 2905
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2892,
            "end": 2905
          }
        ],
        "start": 2891,
        "end": 2906
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2910,
                "end": 2911
              },
              "typeArguments": null,
              "start": 2910,
              "end": 2911
            },
            "start": 2908,
            "end": 2911
          },
          "start": 2907,
          "end": 2911
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
                  "typeAnnotation": null,
                  "start": 3202,
                  "end": 3203
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3212,
                    "end": 3213
                  },
                  "start": 3206,
                  "end": 3213
                },
                "definite": false,
                "start": 3202,
                "end": 3213
              }
            ],
            "declare": false,
            "start": 3196,
            "end": 3214
          }
        ],
        "start": 2913,
        "end": 3216
      },
      "expression": false,
      "start": 2874,
      "end": 3216
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 3233,
        "end": 3235
      },
      "generator": false,
      "async": true,
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
              "start": 3236,
              "end": 3237
            },
            "constraint": {
              "type": "TSUnknownKeyword",
              "start": 3246,
              "end": 3253
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3236,
            "end": 3253
          }
        ],
        "start": 3235,
        "end": 3254
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3258,
                "end": 3259
              },
              "typeArguments": null,
              "start": 3258,
              "end": 3259
            },
            "start": 3256,
            "end": 3259
          },
          "start": 3255,
          "end": 3259
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
                  "typeAnnotation": null,
                  "start": 3550,
                  "end": 3551
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3560,
                    "end": 3561
                  },
                  "start": 3554,
                  "end": 3561
                },
                "definite": false,
                "start": 3550,
                "end": 3561
              }
            ],
            "declare": false,
            "start": 3544,
            "end": 3562
          }
        ],
        "start": 3261,
        "end": 3564
      },
      "expression": false,
      "start": 3218,
      "end": 3564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 3581,
        "end": 3584
      },
      "generator": false,
      "async": true,
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
              "start": 3585,
              "end": 3586
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 3595,
              "end": 3597
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3585,
            "end": 3597
          }
        ],
        "start": 3584,
        "end": 3598
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3602,
                "end": 3603
              },
              "typeArguments": null,
              "start": 3602,
              "end": 3603
            },
            "start": 3600,
            "end": 3603
          },
          "start": 3599,
          "end": 3603
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
                  "typeAnnotation": null,
                  "start": 3894,
                  "end": 3895
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3904,
                    "end": 3905
                  },
                  "start": 3898,
                  "end": 3905
                },
                "definite": false,
                "start": 3894,
                "end": 3905
              }
            ],
            "declare": false,
            "start": 3888,
            "end": 3906
          }
        ],
        "start": 3605,
        "end": 3908
      },
      "expression": false,
      "start": 3566,
      "end": 3908
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 3925,
        "end": 3928
      },
      "generator": false,
      "async": true,
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
              "start": 3929,
              "end": 3930
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3941,
                    "end": 3945
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "onfulfilled",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSUnknownKeyword",
                                  "start": 3967,
                                  "end": 3974
                                },
                                "start": 3965,
                                "end": 3974
                              },
                              "start": 3960,
                              "end": 3974
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 3979,
                              "end": 3983
                            },
                            "start": 3976,
                            "end": 3983
                          },
                          "start": 3959,
                          "end": 3983
                        },
                        "start": 3957,
                        "end": 3983
                      },
                      "start": 3946,
                      "end": 3983
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 3986,
                      "end": 3990
                    },
                    "start": 3984,
                    "end": 3990
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 3941,
                  "end": 3990
                }
              ],
              "start": 3939,
              "end": 3992
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3929,
            "end": 3992
          }
        ],
        "start": 3928,
        "end": 3993
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3997,
                "end": 3998
              },
              "typeArguments": null,
              "start": 3997,
              "end": 3998
            },
            "start": 3995,
            "end": 3998
          },
          "start": 3994,
          "end": 3998
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
                  "typeAnnotation": null,
                  "start": 4289,
                  "end": 4290
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4299,
                    "end": 4300
                  },
                  "start": 4293,
                  "end": 4300
                },
                "definite": false,
                "start": 4289,
                "end": 4300
              }
            ],
            "declare": false,
            "start": 4283,
            "end": 4301
          }
        ],
        "start": 4000,
        "end": 4303
      },
      "expression": false,
      "start": 3910,
      "end": 4303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 4320,
        "end": 4323
      },
      "generator": false,
      "async": true,
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
              "start": 4324,
              "end": 4325
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4334,
                  "end": 4340
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 4343,
                  "end": 4349
                }
              ],
              "start": 4334,
              "end": 4349
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4324,
            "end": 4349
          }
        ],
        "start": 4323,
        "end": 4350
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4354,
                "end": 4355
              },
              "typeArguments": null,
              "start": 4354,
              "end": 4355
            },
            "start": 4352,
            "end": 4355
          },
          "start": 4351,
          "end": 4355
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
                  "typeAnnotation": null,
                  "start": 4646,
                  "end": 4647
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4656,
                    "end": 4657
                  },
                  "start": 4650,
                  "end": 4657
                },
                "definite": false,
                "start": 4646,
                "end": 4657
              }
            ],
            "declare": false,
            "start": 4640,
            "end": 4658
          }
        ],
        "start": 4357,
        "end": 4660
      },
      "expression": false,
      "start": 4305,
      "end": 4660
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 4677,
        "end": 4680
      },
      "generator": false,
      "async": true,
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
              "start": 4681,
              "end": 4682
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4691,
              "end": 4697
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4681,
            "end": 4697
          }
        ],
        "start": 4680,
        "end": 4698
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4702,
                "end": 4703
              },
              "typeArguments": null,
              "start": 4702,
              "end": 4703
            },
            "start": 4700,
            "end": 4703
          },
          "start": 4699,
          "end": 4703
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
                  "typeAnnotation": null,
                  "start": 4786,
                  "end": 4787
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4796,
                    "end": 4797
                  },
                  "start": 4790,
                  "end": 4797
                },
                "definite": false,
                "start": 4786,
                "end": 4797
              }
            ],
            "declare": false,
            "start": 4780,
            "end": 4798
          }
        ],
        "start": 4705,
        "end": 4800
      },
      "expression": false,
      "start": 4662,
      "end": 4800
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 4817,
        "end": 4820
      },
      "generator": false,
      "async": true,
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
              "start": 4821,
              "end": 4822
            },
            "constraint": {
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
                    "start": 4833,
                    "end": 4834
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4836,
                      "end": 4842
                    },
                    "start": 4834,
                    "end": 4842
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4833,
                  "end": 4842
                }
              ],
              "start": 4831,
              "end": 4844
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4821,
            "end": 4844
          }
        ],
        "start": 4820,
        "end": 4845
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4849,
                "end": 4850
              },
              "typeArguments": null,
              "start": 4849,
              "end": 4850
            },
            "start": 4847,
            "end": 4850
          },
          "start": 4846,
          "end": 4850
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
                  "typeAnnotation": null,
                  "start": 4955,
                  "end": 4956
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4965,
                    "end": 4966
                  },
                  "start": 4959,
                  "end": 4966
                },
                "definite": false,
                "start": 4955,
                "end": 4966
              }
            ],
            "declare": false,
            "start": 4949,
            "end": 4967
          }
        ],
        "start": 4852,
        "end": 4969
      },
      "expression": false,
      "start": 4802,
      "end": 4969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 4986,
        "end": 4989
      },
      "generator": false,
      "async": true,
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
              "start": 4990,
              "end": 4991
            },
            "constraint": {
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
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5002,
                    "end": 5006
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5008,
                      "end": 5014
                    },
                    "start": 5006,
                    "end": 5014
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5002,
                  "end": 5014
                }
              ],
              "start": 5000,
              "end": 5016
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4990,
            "end": 5016
          }
        ],
        "start": 4989,
        "end": 5017
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5021,
                "end": 5022
              },
              "typeArguments": null,
              "start": 5021,
              "end": 5022
            },
            "start": 5019,
            "end": 5022
          },
          "start": 5018,
          "end": 5022
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
                  "typeAnnotation": null,
                  "start": 5127,
                  "end": 5128
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5137,
                    "end": 5138
                  },
                  "start": 5131,
                  "end": 5138
                },
                "definite": false,
                "start": 5127,
                "end": 5138
              }
            ],
            "declare": false,
            "start": 5121,
            "end": 5139
          }
        ],
        "start": 5024,
        "end": 5141
      },
      "expression": false,
      "start": 4971,
      "end": 5141
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 5158,
        "end": 5161
      },
      "generator": false,
      "async": true,
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
              "start": 5162,
              "end": 5163
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 5172,
                  "end": 5178
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5183,
                        "end": 5187
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 5191,
                          "end": 5195
                        },
                        "start": 5189,
                        "end": 5195
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5183,
                      "end": 5195
                    }
                  ],
                  "start": 5181,
                  "end": 5197
                }
              ],
              "start": 5172,
              "end": 5197
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5162,
            "end": 5197
          }
        ],
        "start": 5161,
        "end": 5198
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5202,
                "end": 5203
              },
              "typeArguments": null,
              "start": 5202,
              "end": 5203
            },
            "start": 5200,
            "end": 5203
          },
          "start": 5199,
          "end": 5203
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
                  "typeAnnotation": null,
                  "start": 5309,
                  "end": 5310
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5319,
                    "end": 5320
                  },
                  "start": 5313,
                  "end": 5320
                },
                "definite": false,
                "start": 5309,
                "end": 5320
              }
            ],
            "declare": false,
            "start": 5303,
            "end": 5321
          }
        ],
        "start": 5205,
        "end": 5323
      },
      "expression": false,
      "start": 5143,
      "end": 5323
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Expect",
        "optional": false,
        "typeAnnotation": null,
        "start": 5402,
        "end": 5409
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TActual",
              "optional": false,
              "typeAnnotation": null,
              "start": 5410,
              "end": 5417
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TExpected",
                "optional": false,
                "typeAnnotation": null,
                "start": 5426,
                "end": 5435
              },
              "typeArguments": null,
              "start": 5426,
              "end": 5435
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5410,
            "end": 5435
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TExpected",
              "optional": false,
              "typeAnnotation": null,
              "start": 5437,
              "end": 5446
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5437,
            "end": 5446
          }
        ],
        "start": 5409,
        "end": 5447
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TActual",
          "optional": false,
          "typeAnnotation": null,
          "start": 5450,
          "end": 5457
        },
        "typeArguments": null,
        "start": 5450,
        "end": 5457
      },
      "declare": false,
      "start": 5397,
      "end": 5458
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null,
        "start": 5531,
        "end": 5534
      },
      "generator": false,
      "async": true,
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
              "start": 5535,
              "end": 5536
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5549,
                    "end": 5553
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 5555,
                        "end": 5558
                      },
                      "start": 5555,
                      "end": 5560
                    },
                    "start": 5553,
                    "end": 5560
                  },
                  "value": null,
                  "start": 5546,
                  "end": 5560
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5565,
                    "end": 5572
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 5573,
                        "end": 5576
                      }
                    ],
                    "start": 5572,
                    "end": 5577
                  },
                  "start": 5565,
                  "end": 5577
                },
                "start": 5562,
                "end": 5577
              },
              "start": 5545,
              "end": 5577
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5535,
            "end": 5577
          }
        ],
        "start": 5534,
        "end": 5578
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                "start": 5583,
                "end": 5584
              },
              "typeArguments": null,
              "start": 5583,
              "end": 5584
            },
            "start": 5581,
            "end": 5584
          },
          "start": 5579,
          "end": 5584
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
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Awaited",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5603,
                        "end": 5610
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ReturnType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5611,
                              "end": 5621
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
                                    "start": 5622,
                                    "end": 5623
                                  },
                                  "typeArguments": null,
                                  "start": 5622,
                                  "end": 5623
                                }
                              ],
                              "start": 5621,
                              "end": 5624
                            },
                            "start": 5611,
                            "end": 5624
                          }
                        ],
                        "start": 5610,
                        "end": 5625
                      },
                      "start": 5603,
                      "end": 5625
                    },
                    "start": 5601,
                    "end": 5625
                  },
                  "start": 5598,
                  "end": 5625
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5634,
                      "end": 5636
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5637,
                        "end": 5638
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5640,
                        "end": 5641
                      },
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 5643,
                        "end": 5644
                      }
                    ],
                    "optional": false,
                    "start": 5634,
                    "end": 5645
                  },
                  "start": 5628,
                  "end": 5645
                },
                "definite": false,
                "start": 5598,
                "end": 5645
              }
            ],
            "declare": false,
            "start": 5592,
            "end": 5646
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ret",
              "optional": false,
              "typeAnnotation": null,
              "start": 5658,
              "end": 5661
            },
            "start": 5651,
            "end": 5662
          }
        ],
        "start": 5586,
        "end": 5664
      },
      "expression": false,
      "start": 5516,
      "end": 5664
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17_usage",
        "optional": false,
        "typeAnnotation": null,
        "start": 5680,
        "end": 5689
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5704,
                  "end": 5705
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5714,
                      "end": 5717
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": true,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "value": 123,
                            "raw": "123",
                            "start": 5730,
                            "end": 5733
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5737,
                              "end": 5742
                            },
                            "typeArguments": null,
                            "start": 5737,
                            "end": 5742
                          },
                          "start": 5730,
                          "end": 5742
                        },
                        "id": null,
                        "generator": false,
                        "start": 5718,
                        "end": 5742
                      }
                    ],
                    "optional": false,
                    "start": 5714,
                    "end": 5743
                  },
                  "start": 5708,
                  "end": 5743
                },
                "definite": false,
                "start": 5704,
                "end": 5743
              }
            ],
            "declare": false,
            "start": 5698,
            "end": 5744
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5758,
                    "end": 5759
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5758,
                    "end": 5759
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 5758,
                  "end": 5759
                }
              ],
              "start": 5756,
              "end": 5761
            },
            "start": 5749,
            "end": 5762
          }
        ],
        "start": 5692,
        "end": 5764
      },
      "expression": false,
      "start": 5665,
      "end": 5764
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericStructure",
        "optional": false,
        "typeAnnotation": null,
        "start": 5827,
        "end": 5843
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AcceptableKeyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5847,
              "end": 5864
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5873,
              "end": 5879
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 5882,
              "end": 5888
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5847,
            "end": 5888
          }
        ],
        "start": 5843,
        "end": 5890
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 5893,
          "end": 5899
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AcceptableKeyType",
                "optional": false,
                "typeAnnotation": null,
                "start": 5900,
                "end": 5917
              },
              "typeArguments": null,
              "start": 5900,
              "end": 5917
            },
            {
              "type": "TSNumberKeyword",
              "start": 5919,
              "end": 5925
            }
          ],
          "start": 5899,
          "end": 5926
        },
        "start": 5893,
        "end": 5926
      },
      "declare": false,
      "start": 5822,
      "end": 5927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "brokenExample",
        "optional": false,
        "typeAnnotation": null,
        "start": 5944,
        "end": 5957
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AcceptableKeyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5958,
              "end": 5975
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5984,
              "end": 5990
            },
            "default": {
              "type": "TSStringKeyword",
              "start": 5993,
              "end": 5999
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5958,
            "end": 5999
          }
        ],
        "start": 5957,
        "end": 6000
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "structurePromise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6019,
                "end": 6026
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GenericStructure",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6027,
                      "end": 6043
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AcceptableKeyType",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6044,
                            "end": 6061
                          },
                          "typeArguments": null,
                          "start": 6044,
                          "end": 6061
                        }
                      ],
                      "start": 6043,
                      "end": 6062
                    },
                    "start": 6027,
                    "end": 6062
                  }
                ],
                "start": 6026,
                "end": 6063
              },
              "start": 6019,
              "end": 6063
            },
            "start": 6017,
            "end": 6063
          },
          "start": 6001,
          "end": 6063
        },
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
                "name": "AcceptableKeyType",
                "optional": false,
                "typeAnnotation": null,
                "start": 6070,
                "end": 6087
              },
              "typeArguments": null,
              "start": 6070,
              "end": 6087
            },
            "start": 6068,
            "end": 6087
          },
          "start": 6065,
          "end": 6087
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 6090,
            "end": 6097
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 6098,
                "end": 6102
              }
            ],
            "start": 6097,
            "end": 6103
          },
          "start": 6090,
          "end": 6103
        },
        "start": 6088,
        "end": 6103
      },
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
                  "name": "structure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6114,
                  "end": 6123
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "structurePromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6132,
                    "end": 6148
                  },
                  "start": 6126,
                  "end": 6148
                },
                "definite": false,
                "start": 6114,
                "end": 6148
              }
            ],
            "declare": false,
            "start": 6108,
            "end": 6149
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
                  "name": "structure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6152,
                  "end": 6161
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6162,
                  "end": 6165
                },
                "optional": false,
                "computed": true,
                "start": 6152,
                "end": 6166
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 6169,
                "end": 6170
              },
              "start": 6152,
              "end": 6170
            },
            "directive": null,
            "start": 6152,
            "end": 6171
          }
        ],
        "start": 6104,
        "end": 6173
      },
      "expression": false,
      "start": 5929,
      "end": 6173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectAndInclude",
        "optional": false,
        "typeAnnotation": null,
        "start": 6202,
        "end": 6218
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
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 6225,
              "end": 6231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 6233,
                "end": 6236
              },
              "start": 6231,
              "end": 6236
            },
            "accessibility": null,
            "static": false,
            "start": 6225,
            "end": 6237
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "include",
              "optional": false,
              "typeAnnotation": null,
              "start": 6240,
              "end": 6247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 6249,
                "end": 6252
              },
              "start": 6247,
              "end": 6252
            },
            "accessibility": null,
            "static": false,
            "start": 6240,
            "end": 6253
          }
        ],
        "start": 6221,
        "end": 6255
      },
      "declare": false,
      "start": 6197,
      "end": 6256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasSelect",
        "optional": false,
        "typeAnnotation": null,
        "start": 6262,
        "end": 6271
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
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 6278,
              "end": 6284
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 6286,
                "end": 6289
              },
              "start": 6284,
              "end": 6289
            },
            "accessibility": null,
            "static": false,
            "start": 6278,
            "end": 6290
          }
        ],
        "start": 6274,
        "end": 6292
      },
      "declare": false,
      "start": 6257,
      "end": 6293
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasInclude",
        "optional": false,
        "typeAnnotation": null,
        "start": 6299,
        "end": 6309
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
              "name": "include",
              "optional": false,
              "typeAnnotation": null,
              "start": 6316,
              "end": 6323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 6325,
                "end": 6328
              },
              "start": 6323,
              "end": 6328
            },
            "accessibility": null,
            "static": false,
            "start": 6316,
            "end": 6329
          }
        ],
        "start": 6312,
        "end": 6331
      },
      "declare": false,
      "start": 6294,
      "end": 6332
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CheckSelect",
        "optional": false,
        "typeAnnotation": null,
        "start": 6339,
        "end": 6350
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
              "start": 6351,
              "end": 6352
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6351,
            "end": 6352
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 6354,
              "end": 6355
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6354,
            "end": 6355
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 6357,
              "end": 6358
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6357,
            "end": 6358
          }
        ],
        "start": 6350,
        "end": 6359
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
            "start": 6362,
            "end": 6363
          },
          "typeArguments": null,
          "start": 6362,
          "end": 6363
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectAndInclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 6372,
            "end": 6388
          },
          "typeArguments": null,
          "start": 6372,
          "end": 6388
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "Please either choose `select` or `include`",
            "raw": "\"Please either choose `select` or `include`\"",
            "start": 6393,
            "end": 6437
          },
          "start": 6393,
          "end": 6437
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6442,
              "end": 6443
            },
            "typeArguments": null,
            "start": 6442,
            "end": 6443
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasSelect",
              "optional": false,
              "typeAnnotation": null,
              "start": 6452,
              "end": 6461
            },
            "typeArguments": null,
            "start": 6452,
            "end": 6461
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 6466,
              "end": 6467
            },
            "typeArguments": null,
            "start": 6466,
            "end": 6467
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 6472,
                "end": 6473
              },
              "typeArguments": null,
              "start": 6472,
              "end": 6473
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HasInclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 6482,
                "end": 6492
              },
              "typeArguments": null,
              "start": 6482,
              "end": 6492
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 6497,
                "end": 6498
              },
              "typeArguments": null,
              "start": 6497,
              "end": 6498
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 6503,
                "end": 6504
              },
              "typeArguments": null,
              "start": 6503,
              "end": 6504
            },
            "start": 6472,
            "end": 6504
          },
          "start": 6442,
          "end": 6504
        },
        "start": 6362,
        "end": 6504
      },
      "declare": false,
      "start": 6334,
      "end": 6505
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "findMany",
        "optional": false,
        "typeAnnotation": null,
        "start": 6524,
        "end": 6532
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
              "start": 6533,
              "end": 6534
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "select",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6545,
                    "end": 6551
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6554,
                      "end": 6560
                    },
                    "start": 6552,
                    "end": 6560
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6545,
                  "end": 6561
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "include",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6562,
                    "end": 6569
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6572,
                      "end": 6578
                    },
                    "start": 6570,
                    "end": 6578
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6562,
                  "end": 6578
                }
              ],
              "start": 6543,
              "end": 6580
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6533,
            "end": 6580
          }
        ],
        "start": 6532,
        "end": 6581
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 6591,
                "end": 6592
              },
              "typeArguments": null,
              "start": 6591,
              "end": 6592
            },
            "start": 6589,
            "end": 6592
          },
          "start": 6585,
          "end": 6592
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CheckSelect",
            "optional": false,
            "typeAnnotation": null,
            "start": 6596,
            "end": 6607
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
                  "start": 6608,
                  "end": 6609
                },
                "typeArguments": null,
                "start": 6608,
                "end": 6609
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6611,
                  "end": 6618
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 6619,
                        "end": 6620
                      },
                      "start": 6619,
                      "end": 6620
                    }
                  ],
                  "start": 6618,
                  "end": 6621
                },
                "start": 6611,
                "end": 6621
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6623,
                  "end": 6630
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 6631,
                        "end": 6632
                      },
                      "start": 6631,
                      "end": 6632
                    }
                  ],
                  "start": 6630,
                  "end": 6633
                },
                "start": 6623,
                "end": 6633
              }
            ],
            "start": 6607,
            "end": 6634
          },
          "start": 6596,
          "end": 6634
        },
        "start": 6594,
        "end": 6634
      },
      "body": null,
      "expression": false,
      "start": 6507,
      "end": 6635
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "findManyWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 6652,
        "end": 6667
      },
      "generator": false,
      "async": true,
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
              "start": 6671,
              "end": 6672
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "select",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6683,
                    "end": 6689
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6692,
                      "end": 6698
                    },
                    "start": 6690,
                    "end": 6698
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6683,
                  "end": 6699
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "include",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6700,
                    "end": 6707
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6710,
                      "end": 6716
                    },
                    "start": 6708,
                    "end": 6716
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6700,
                  "end": 6716
                }
              ],
              "start": 6681,
              "end": 6718
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6671,
            "end": 6718
          }
        ],
        "start": 6667,
        "end": 6720
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 6727,
                "end": 6728
              },
              "typeArguments": null,
              "start": 6727,
              "end": 6728
            },
            "start": 6725,
            "end": 6728
          },
          "start": 6721,
          "end": 6728
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6740,
                  "end": 6746
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findMany",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6755,
                      "end": 6763
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6764,
                        "end": 6768
                      }
                    ],
                    "optional": false,
                    "start": 6755,
                    "end": 6769
                  },
                  "start": 6749,
                  "end": 6769
                },
                "definite": false,
                "start": 6740,
                "end": 6769
              }
            ],
            "declare": false,
            "start": 6734,
            "end": 6770
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 6780,
              "end": 6786
            },
            "start": 6773,
            "end": 6787
          }
        ],
        "start": 6730,
        "end": 6789
      },
      "expression": false,
      "start": 6637,
      "end": 6789
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mainFindMany",
        "optional": false,
        "typeAnnotation": null,
        "start": 6806,
        "end": 6818
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "name": "shouldBeErrorText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6831,
                  "end": 6848
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findManyWrapper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6857,
                      "end": 6872
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "select",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6879,
                              "end": 6885
                            },
                            "value": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 6887,
                              "end": 6892
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 6879,
                            "end": 6892
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "include",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6898,
                              "end": 6905
                            },
                            "value": {
                              "type": "Literal",
                              "value": "bar",
                              "raw": "\"bar\"",
                              "start": 6907,
                              "end": 6912
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 6898,
                            "end": 6912
                          }
                        ],
                        "start": 6873,
                        "end": 6917
                      }
                    ],
                    "optional": false,
                    "start": 6857,
                    "end": 6918
                  },
                  "start": 6851,
                  "end": 6918
                },
                "definite": false,
                "start": 6831,
                "end": 6918
              }
            ],
            "declare": false,
            "start": 6825,
            "end": 6919
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
                  "name": "itsOne",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6928,
                  "end": 6934
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findManyWrapper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6943,
                      "end": 6958
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 6959,
                        "end": 6961
                      }
                    ],
                    "optional": false,
                    "start": 6943,
                    "end": 6962
                  },
                  "start": 6937,
                  "end": 6962
                },
                "definite": false,
                "start": 6928,
                "end": 6962
              }
            ],
            "declare": false,
            "start": 6922,
            "end": 6963
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
                  "name": "itsTwo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6972,
                  "end": 6979
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findManyWrapper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6988,
                      "end": 7003
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "select",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7006,
                              "end": 7012
                            },
                            "value": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 7014,
                              "end": 7019
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 7006,
                            "end": 7019
                          }
                        ],
                        "start": 7004,
                        "end": 7021
                      }
                    ],
                    "optional": false,
                    "start": 6988,
                    "end": 7022
                  },
                  "start": 6982,
                  "end": 7022
                },
                "definite": false,
                "start": 6972,
                "end": 7022
              }
            ],
            "declare": false,
            "start": 6966,
            "end": 7023
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
                  "name": "itsTwo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7032,
                  "end": 7039
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findManyWrapper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7048,
                      "end": 7063
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "include",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7066,
                              "end": 7073
                            },
                            "value": {
                              "type": "Literal",
                              "value": "bar",
                              "raw": "\"bar\"",
                              "start": 7075,
                              "end": 7080
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 7066,
                            "end": 7080
                          }
                        ],
                        "start": 7064,
                        "end": 7082
                      }
                    ],
                    "optional": false,
                    "start": 7048,
                    "end": 7083
                  },
                  "start": 7042,
                  "end": 7083
                },
                "definite": false,
                "start": 7032,
                "end": 7083
              }
            ],
            "declare": false,
            "start": 7026,
            "end": 7084
          }
        ],
        "start": 6821,
        "end": 7086
      },
      "expression": false,
      "start": 6791,
      "end": 7086
    },
    {
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
                "name": "promises",
                "optional": false,
                "typeAnnotation": null,
                "start": 7120,
                "end": 7128
              },
              "init": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7132,
                          "end": 7139
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7140,
                          "end": 7147
                        },
                        "optional": false,
                        "computed": false,
                        "start": 7132,
                        "end": 7147
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 7148,
                          "end": 7149
                        }
                      ],
                      "optional": false,
                      "start": 7132,
                      "end": 7150
                    }
                  ],
                  "start": 7131,
                  "end": 7151
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7155,
                    "end": 7160
                  },
                  "typeArguments": null,
                  "start": 7155,
                  "end": 7160
                },
                "start": 7131,
                "end": 7160
              },
              "definite": false,
              "start": 7120,
              "end": 7160
            }
          ],
          "declare": false,
          "start": 7114,
          "end": 7160
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7164,
                    "end": 7171
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7172,
                    "end": 7175
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7164,
                  "end": 7175
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "promises",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7176,
                    "end": 7184
                  }
                ],
                "optional": false,
                "start": 7164,
                "end": 7185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7186,
                "end": 7190
              },
              "optional": false,
              "computed": false,
              "start": 7164,
              "end": 7190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7192,
                    "end": 7199
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
                            "name": "first",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7216,
                            "end": 7221
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7224,
                              "end": 7231
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 7232,
                              "end": 7233
                            },
                            "optional": false,
                            "computed": true,
                            "start": 7224,
                            "end": 7234
                          },
                          "definite": false,
                          "start": 7216,
                          "end": 7234
                        }
                      ],
                      "declare": false,
                      "start": 7210,
                      "end": 7234
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
                            "name": "second",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7245,
                            "end": 7251
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7254,
                              "end": 7261
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 7262,
                              "end": 7263
                            },
                            "optional": false,
                            "computed": true,
                            "start": 7254,
                            "end": 7264
                          },
                          "definite": false,
                          "start": 7245,
                          "end": 7264
                        }
                      ],
                      "declare": false,
                      "start": 7239,
                      "end": 7264
                    }
                  ],
                  "start": 7204,
                  "end": 7277
                },
                "id": null,
                "generator": false,
                "start": 7191,
                "end": 7277
              }
            ],
            "optional": false,
            "start": 7164,
            "end": 7278
          },
          "directive": null,
          "start": 7164,
          "end": 7278
        }
      ],
      "start": 7110,
      "end": 7280
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test40330",
        "optional": false,
        "typeAnnotation": null,
        "start": 7319,
        "end": 7328
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
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
                  "name": "promiseNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7344,
                  "end": 7357
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7360,
                      "end": 7367
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7368,
                      "end": 7375
                    },
                    "optional": false,
                    "computed": false,
                    "start": 7360,
                    "end": 7375
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 7376,
                      "end": 7377
                    }
                  ],
                  "optional": false,
                  "start": 7360,
                  "end": 7378
                },
                "definite": false,
                "start": 7344,
                "end": 7378
              }
            ],
            "declare": false,
            "start": 7338,
            "end": 7379
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
                  "name": "promiseVoid",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7390,
                  "end": 7401
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 7416,
                    "end": 7418
                  },
                  "id": null,
                  "generator": false,
                  "start": 7404,
                  "end": 7418
                },
                "definite": false,
                "start": 7390,
                "end": 7418
              }
            ],
            "declare": false,
            "start": 7384,
            "end": 7418
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
                  "name": "res",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7430,
                  "end": 7433
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7442,
                        "end": 7449
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7450,
                        "end": 7453
                      },
                      "optional": false,
                      "computed": false,
                      "start": 7442,
                      "end": 7453
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "promiseNumber",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7464,
                            "end": 7477
                          },
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "promiseVoid",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7491,
                                    "end": 7502
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 7491,
                                  "end": 7504
                                }
                              ],
                              "start": 7490,
                              "end": 7505
                            },
                            "start": 7487,
                            "end": 7505
                          }
                        ],
                        "start": 7454,
                        "end": 7511
                      }
                    ],
                    "optional": false,
                    "start": 7442,
                    "end": 7512
                  },
                  "start": 7436,
                  "end": 7512
                },
                "definite": false,
                "start": 7430,
                "end": 7512
              }
            ],
            "declare": false,
            "start": 7424,
            "end": 7512
          }
        ],
        "start": 7331,
        "end": 7514
      },
      "expression": false,
      "start": 7304,
      "end": 7514
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 7514
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
    "type": "Identifier",
    "value": "Awaited",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 27,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 63,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 73,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 98,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 108,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 118,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 135,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 153,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 173,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 190,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 261,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 341,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 372,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 402,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 412,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 426,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 437,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 453,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 464,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "type",
    "start": 482,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 493,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 501,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 509,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 528,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "_Expect",
    "start": 539,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 547,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 555,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 563,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 571,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 582,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 589,
    "end": 590
  },
  {
    "type": "Null",
    "value": "null",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 627,
    "end": 628
  },
  {
    "type": "Null",
    "value": "null",
    "start": 629,
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
    "start": 706,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "_Expect",
    "start": 717,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 725,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 733,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 741,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 760,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 769,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 778,
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
    "value": "string",
    "start": 794,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 803,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 812,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 894,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "_Expect",
    "start": 905,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 912,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 913,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 921,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 929,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 937,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 948,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 955,
    "end": 956
  },
  {
    "type": "Null",
    "value": "null",
    "start": 957,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 964,
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
    "value": ",",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 998,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1007,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1014,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1097,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "TUndefined",
    "start": 1102,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1123,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1135,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "TNull",
    "start": 1140,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 1148,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1156,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "TNullOrUndefined",
    "start": 1168,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 1187,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1195,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1202,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1215,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "BadPromise",
    "start": 1225,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1238,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1243,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "BadPromise",
    "start": 1255,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1270,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1277,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "T16",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 1296,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "BadPromise",
    "start": 1304,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1327,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "BadPromise1",
    "start": 1337,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1351,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1356,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1361,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "BadPromise2",
    "start": 1368,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1384,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1391,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1399,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "BadPromise2",
    "start": 1409,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1423,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1433,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "BadPromise1",
    "start": 1440,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1453,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1456,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1463,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1471,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "T17",
    "start": 1476,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 1482,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "BadPromise1",
    "start": 1490,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1570,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "T18",
    "start": 1575,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 1581,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1591,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1601,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1608,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1616,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1628,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1631,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1707,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "MaybePromise",
    "start": 1712,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1734,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 1747,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1762,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1770,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "MaybePromise",
    "start": 1779,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1795,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "MaybePromise",
    "start": 1806,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1824,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1830,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "main",
    "start": 1839,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1852,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "aaa",
    "start": 1856,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1861,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1873,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "bbb",
    "start": 1877,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1882,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "aaa",
    "start": 1904,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "bbb",
    "start": 1917,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1930,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1936,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 1944,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "MaybePromise",
    "start": 1958,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "MaybePromise",
    "start": 1983,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 1996,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "MaybePromise",
    "start": 2010,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2023,
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
    "value": ",",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2055,
    "end": 2060
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2061,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2070,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2073,
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
    "value": ")",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2107,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2117,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2129,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2135,
    "end": 2143
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2144,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2150,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2183,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2193,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2205,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2211,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2220,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2226,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2257,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2267,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2285,
    "end": 2293
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2294,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2300,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2308,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2340,
    "end": 2345
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2350,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2362,
    "end": 2367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2368,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 2377,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2383,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2391,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2425,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2435,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2447,
    "end": 2452
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2453,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 2462,
    "end": 2464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2468,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2476,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2508,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2518,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2542,
    "end": 2547
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2548,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 2557,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2852,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 2862,
    "end": 2867
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2874,
    "end": 2879
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2880,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 2889,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2894,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2902,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3196,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3204,
    "end": 3205
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 3206,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3218,
    "end": 3223
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3224,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 3233,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3238,
    "end": 3245
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3246,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3544,
    "end": 3549
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 3554,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3566,
    "end": 3571
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3572,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 3581,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3587,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3888,
    "end": 3893
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 3898,
    "end": 3903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 3910,
    "end": 3915
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3916,
    "end": 3924
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 3925,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3931,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3941,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Identifier",
    "value": "onfulfilled",
    "start": 3946,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3960,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3967,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3976,
    "end": 3978
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3979,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3986,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4283,
    "end": 4288
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4291,
    "end": 4292
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 4293,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4300,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4305,
    "end": 4310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4311,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 4320,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4326,
    "end": 4333
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4334,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4341,
    "end": 4342
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4343,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4640,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4648,
    "end": 4649
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 4650,
    "end": 4655
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4657,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4662,
    "end": 4667
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4668,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 4677,
    "end": 4680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4680,
    "end": 4681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4683,
    "end": 4690
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4691,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4700,
    "end": 4701
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4780,
    "end": 4785
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4786,
    "end": 4787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 4790,
    "end": 4795
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4802,
    "end": 4807
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4808,
    "end": 4816
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 4817,
    "end": 4820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4820,
    "end": 4821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4823,
    "end": 4830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4834,
    "end": 4835
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4836,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4844,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4846,
    "end": 4847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4850,
    "end": 4851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4852,
    "end": 4853
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4949,
    "end": 4954
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4957,
    "end": 4958
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 4959,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4968,
    "end": 4969
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 4971,
    "end": 4976
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4977,
    "end": 4985
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 4986,
    "end": 4989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4989,
    "end": 4990
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4992,
    "end": 4999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5002,
    "end": 5006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5006,
    "end": 5007
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5008,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5016,
    "end": 5017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5018,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5121,
    "end": 5126
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5127,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 5131,
    "end": 5136
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5138,
    "end": 5139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5143,
    "end": 5148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5149,
    "end": 5157
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 5158,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5164,
    "end": 5171
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5172,
    "end": 5178
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5179,
    "end": 5180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5183,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5191,
    "end": 5195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5196,
    "end": 5197
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5197,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5200,
    "end": 5201
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5205,
    "end": 5206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5303,
    "end": 5308
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 5313,
    "end": 5318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5319,
    "end": 5320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5397,
    "end": 5401
  },
  {
    "type": "Identifier",
    "value": "_Expect",
    "start": 5402,
    "end": 5409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Identifier",
    "value": "TActual",
    "start": 5410,
    "end": 5417
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5418,
    "end": 5425
  },
  {
    "type": "Identifier",
    "value": "TExpected",
    "start": 5426,
    "end": 5435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Identifier",
    "value": "TExpected",
    "start": 5437,
    "end": 5446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5446,
    "end": 5447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Identifier",
    "value": "TActual",
    "start": 5450,
    "end": 5457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5457,
    "end": 5458
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5516,
    "end": 5521
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5522,
    "end": 5530
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 5531,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5534,
    "end": 5535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5537,
    "end": 5544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5545,
    "end": 5546
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5546,
    "end": 5549
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5549,
    "end": 5553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5555,
    "end": 5558
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5558,
    "end": 5559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5559,
    "end": 5560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5560,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5562,
    "end": 5564
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5565,
    "end": 5572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5572,
    "end": 5573
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5573,
    "end": 5576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5576,
    "end": 5577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5577,
    "end": 5578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5578,
    "end": 5579
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 5579,
    "end": 5581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5581,
    "end": 5582
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5583,
    "end": 5584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5584,
    "end": 5585
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5592,
    "end": 5597
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 5598,
    "end": 5601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5601,
    "end": 5602
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 5603,
    "end": 5610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5610,
    "end": 5611
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 5611,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5622,
    "end": 5623
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5623,
    "end": 5624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5624,
    "end": 5625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5626,
    "end": 5627
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 5628,
    "end": 5633
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 5634,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5637,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5640,
    "end": 5641
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5641,
    "end": 5642
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5643,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5651,
    "end": 5657
  },
  {
    "type": "Identifier",
    "value": "ret",
    "start": 5658,
    "end": 5661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5661,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5663,
    "end": 5664
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5665,
    "end": 5670
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5671,
    "end": 5679
  },
  {
    "type": "Identifier",
    "value": "f17_usage",
    "start": 5680,
    "end": 5689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5689,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5692,
    "end": 5693
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5698,
    "end": 5703
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5704,
    "end": 5705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5706,
    "end": 5707
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 5708,
    "end": 5713
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 5714,
    "end": 5717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5717,
    "end": 5718
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5718,
    "end": 5723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5724,
    "end": 5725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5725,
    "end": 5726
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5727,
    "end": 5729
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 5730,
    "end": 5733
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 5734,
    "end": 5736
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 5737,
    "end": 5742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5742,
    "end": 5743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5743,
    "end": 5744
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5749,
    "end": 5755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5756,
    "end": 5757
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5758,
    "end": 5759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5761,
    "end": 5762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5763,
    "end": 5764
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5822,
    "end": 5826
  },
  {
    "type": "Identifier",
    "value": "GenericStructure",
    "start": 5827,
    "end": 5843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5843,
    "end": 5844
  },
  {
    "type": "Identifier",
    "value": "AcceptableKeyType",
    "start": 5847,
    "end": 5864
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5865,
    "end": 5872
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5873,
    "end": 5879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5880,
    "end": 5881
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5882,
    "end": 5888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5889,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 5893,
    "end": 5899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5899,
    "end": 5900
  },
  {
    "type": "Identifier",
    "value": "AcceptableKeyType",
    "start": 5900,
    "end": 5917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5917,
    "end": 5918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5919,
    "end": 5925
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5926,
    "end": 5927
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5929,
    "end": 5934
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5935,
    "end": 5943
  },
  {
    "type": "Identifier",
    "value": "brokenExample",
    "start": 5944,
    "end": 5957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5957,
    "end": 5958
  },
  {
    "type": "Identifier",
    "value": "AcceptableKeyType",
    "start": 5958,
    "end": 5975
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5976,
    "end": 5983
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5984,
    "end": 5990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5991,
    "end": 5992
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5993,
    "end": 5999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5999,
    "end": 6000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6000,
    "end": 6001
  },
  {
    "type": "Identifier",
    "value": "structurePromise",
    "start": 6001,
    "end": 6017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6017,
    "end": 6018
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6019,
    "end": 6026
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6026,
    "end": 6027
  },
  {
    "type": "Identifier",
    "value": "GenericStructure",
    "start": 6027,
    "end": 6043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6043,
    "end": 6044
  },
  {
    "type": "Identifier",
    "value": "AcceptableKeyType",
    "start": 6044,
    "end": 6061
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6061,
    "end": 6062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6062,
    "end": 6063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6063,
    "end": 6064
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6065,
    "end": 6068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6068,
    "end": 6069
  },
  {
    "type": "Identifier",
    "value": "AcceptableKeyType",
    "start": 6070,
    "end": 6087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6087,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6090,
    "end": 6097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6097,
    "end": 6098
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 6098,
    "end": 6102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6102,
    "end": 6103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6104,
    "end": 6105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6108,
    "end": 6113
  },
  {
    "type": "Identifier",
    "value": "structure",
    "start": 6114,
    "end": 6123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6124,
    "end": 6125
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 6126,
    "end": 6131
  },
  {
    "type": "Identifier",
    "value": "structurePromise",
    "start": 6132,
    "end": 6148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6148,
    "end": 6149
  },
  {
    "type": "Identifier",
    "value": "structure",
    "start": 6152,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 6162,
    "end": 6165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6165,
    "end": 6166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6167,
    "end": 6168
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6169,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6170,
    "end": 6171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6172,
    "end": 6173
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6197,
    "end": 6201
  },
  {
    "type": "Identifier",
    "value": "SelectAndInclude",
    "start": 6202,
    "end": 6218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6219,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6221,
    "end": 6222
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 6225,
    "end": 6231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6231,
    "end": 6232
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6233,
    "end": 6236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6236,
    "end": 6237
  },
  {
    "type": "Identifier",
    "value": "include",
    "start": 6240,
    "end": 6247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6247,
    "end": 6248
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6249,
    "end": 6252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6252,
    "end": 6253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6254,
    "end": 6255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6255,
    "end": 6256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6257,
    "end": 6261
  },
  {
    "type": "Identifier",
    "value": "HasSelect",
    "start": 6262,
    "end": 6271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6274,
    "end": 6275
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 6278,
    "end": 6284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6284,
    "end": 6285
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6286,
    "end": 6289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6289,
    "end": 6290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6291,
    "end": 6292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6294,
    "end": 6298
  },
  {
    "type": "Identifier",
    "value": "HasInclude",
    "start": 6299,
    "end": 6309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6310,
    "end": 6311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6312,
    "end": 6313
  },
  {
    "type": "Identifier",
    "value": "include",
    "start": 6316,
    "end": 6323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6323,
    "end": 6324
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6325,
    "end": 6328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6328,
    "end": 6329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6330,
    "end": 6331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6331,
    "end": 6332
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6334,
    "end": 6338
  },
  {
    "type": "Identifier",
    "value": "CheckSelect",
    "start": 6339,
    "end": 6350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6350,
    "end": 6351
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6351,
    "end": 6352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6352,
    "end": 6353
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6354,
    "end": 6355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6355,
    "end": 6356
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6357,
    "end": 6358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6358,
    "end": 6359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6360,
    "end": 6361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6362,
    "end": 6363
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6364,
    "end": 6371
  },
  {
    "type": "Identifier",
    "value": "SelectAndInclude",
    "start": 6372,
    "end": 6388
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6391,
    "end": 6392
  },
  {
    "type": "String",
    "value": "\"Please either choose `select` or `include`\"",
    "start": 6393,
    "end": 6437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6440,
    "end": 6441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6442,
    "end": 6443
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6444,
    "end": 6451
  },
  {
    "type": "Identifier",
    "value": "HasSelect",
    "start": 6452,
    "end": 6461
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6464,
    "end": 6465
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6470,
    "end": 6471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6472,
    "end": 6473
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6474,
    "end": 6481
  },
  {
    "type": "Identifier",
    "value": "HasInclude",
    "start": 6482,
    "end": 6492
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6495,
    "end": 6496
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6497,
    "end": 6498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6501,
    "end": 6502
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6503,
    "end": 6504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6504,
    "end": 6505
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6507,
    "end": 6514
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6515,
    "end": 6523
  },
  {
    "type": "Identifier",
    "value": "findMany",
    "start": 6524,
    "end": 6532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6532,
    "end": 6533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6533,
    "end": 6534
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6535,
    "end": 6542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6543,
    "end": 6544
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 6545,
    "end": 6551
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6551,
    "end": 6552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6552,
    "end": 6553
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6554,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6560,
    "end": 6561
  },
  {
    "type": "Identifier",
    "value": "include",
    "start": 6562,
    "end": 6569
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6569,
    "end": 6570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6570,
    "end": 6571
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6572,
    "end": 6578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6579,
    "end": 6580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6580,
    "end": 6581
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6581,
    "end": 6582
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6585,
    "end": 6589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6589,
    "end": 6590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6591,
    "end": 6592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6593,
    "end": 6594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6594,
    "end": 6595
  },
  {
    "type": "Identifier",
    "value": "CheckSelect",
    "start": 6596,
    "end": 6607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6607,
    "end": 6608
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6608,
    "end": 6609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6609,
    "end": 6610
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6611,
    "end": 6618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6618,
    "end": 6619
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6619,
    "end": 6620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6620,
    "end": 6621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6621,
    "end": 6622
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6623,
    "end": 6630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6630,
    "end": 6631
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 6631,
    "end": 6632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6632,
    "end": 6633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6633,
    "end": 6634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6634,
    "end": 6635
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 6637,
    "end": 6642
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6643,
    "end": 6651
  },
  {
    "type": "Identifier",
    "value": "findManyWrapper",
    "start": 6652,
    "end": 6667
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6667,
    "end": 6668
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6671,
    "end": 6672
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6673,
    "end": 6680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6681,
    "end": 6682
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 6683,
    "end": 6689
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6689,
    "end": 6690
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6690,
    "end": 6691
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6692,
    "end": 6698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6698,
    "end": 6699
  },
  {
    "type": "Identifier",
    "value": "include",
    "start": 6700,
    "end": 6707
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6707,
    "end": 6708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6708,
    "end": 6709
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6710,
    "end": 6716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6719,
    "end": 6720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6720,
    "end": 6721
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6721,
    "end": 6725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6725,
    "end": 6726
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6727,
    "end": 6728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6728,
    "end": 6729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6730,
    "end": 6731
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6734,
    "end": 6739
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 6740,
    "end": 6746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 6749,
    "end": 6754
  },
  {
    "type": "Identifier",
    "value": "findMany",
    "start": 6755,
    "end": 6763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6763,
    "end": 6764
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6764,
    "end": 6768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6768,
    "end": 6769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6769,
    "end": 6770
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6773,
    "end": 6779
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 6780,
    "end": 6786
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6786,
    "end": 6787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6788,
    "end": 6789
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 6791,
    "end": 6796
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6797,
    "end": 6805
  },
  {
    "type": "Identifier",
    "value": "mainFindMany",
    "start": 6806,
    "end": 6818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6818,
    "end": 6819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6819,
    "end": 6820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6821,
    "end": 6822
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6825,
    "end": 6830
  },
  {
    "type": "Identifier",
    "value": "shouldBeErrorText",
    "start": 6831,
    "end": 6848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6849,
    "end": 6850
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 6851,
    "end": 6856
  },
  {
    "type": "Identifier",
    "value": "findManyWrapper",
    "start": 6857,
    "end": 6872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6872,
    "end": 6873
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6873,
    "end": 6874
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 6879,
    "end": 6885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6885,
    "end": 6886
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 6887,
    "end": 6892
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6892,
    "end": 6893
  },
  {
    "type": "Identifier",
    "value": "include",
    "start": 6898,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6905,
    "end": 6906
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 6907,
    "end": 6912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6912,
    "end": 6913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6916,
    "end": 6917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6917,
    "end": 6918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6918,
    "end": 6919
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6922,
    "end": 6927
  },
  {
    "type": "Identifier",
    "value": "itsOne",
    "start": 6928,
    "end": 6934
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6935,
    "end": 6936
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 6937,
    "end": 6942
  },
  {
    "type": "Identifier",
    "value": "findManyWrapper",
    "start": 6943,
    "end": 6958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6958,
    "end": 6959
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6959,
    "end": 6960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6960,
    "end": 6961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6961,
    "end": 6962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6962,
    "end": 6963
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6966,
    "end": 6971
  },
  {
    "type": "Identifier",
    "value": "itsTwo1",
    "start": 6972,
    "end": 6979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6980,
    "end": 6981
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 6982,
    "end": 6987
  },
  {
    "type": "Identifier",
    "value": "findManyWrapper",
    "start": 6988,
    "end": 7003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7003,
    "end": 7004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7004,
    "end": 7005
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 7006,
    "end": 7012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7012,
    "end": 7013
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 7014,
    "end": 7019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7020,
    "end": 7021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7021,
    "end": 7022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7022,
    "end": 7023
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7026,
    "end": 7031
  },
  {
    "type": "Identifier",
    "value": "itsTwo2",
    "start": 7032,
    "end": 7039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7040,
    "end": 7041
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 7042,
    "end": 7047
  },
  {
    "type": "Identifier",
    "value": "findManyWrapper",
    "start": 7048,
    "end": 7063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7063,
    "end": 7064
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7064,
    "end": 7065
  },
  {
    "type": "Identifier",
    "value": "include",
    "start": 7066,
    "end": 7073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7073,
    "end": 7074
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 7075,
    "end": 7080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7081,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7082,
    "end": 7083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7083,
    "end": 7084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7085,
    "end": 7086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7110,
    "end": 7111
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7114,
    "end": 7119
  },
  {
    "type": "Identifier",
    "value": "promises",
    "start": 7120,
    "end": 7128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7129,
    "end": 7130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7131,
    "end": 7132
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7132,
    "end": 7139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7139,
    "end": 7140
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 7140,
    "end": 7147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7147,
    "end": 7148
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7148,
    "end": 7149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7149,
    "end": 7150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7150,
    "end": 7151
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 7152,
    "end": 7154
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 7155,
    "end": 7160
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7164,
    "end": 7171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7171,
    "end": 7172
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 7172,
    "end": 7175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7175,
    "end": 7176
  },
  {
    "type": "Identifier",
    "value": "promises",
    "start": 7176,
    "end": 7184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7184,
    "end": 7185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7185,
    "end": 7186
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7186,
    "end": 7190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7190,
    "end": 7191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7191,
    "end": 7192
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 7192,
    "end": 7199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7199,
    "end": 7200
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7201,
    "end": 7203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7204,
    "end": 7205
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7210,
    "end": 7215
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 7216,
    "end": 7221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7222,
    "end": 7223
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 7224,
    "end": 7231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7231,
    "end": 7232
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 7232,
    "end": 7233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7233,
    "end": 7234
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7239,
    "end": 7244
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 7245,
    "end": 7251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7252,
    "end": 7253
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 7254,
    "end": 7261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7261,
    "end": 7262
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7262,
    "end": 7263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7263,
    "end": 7264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7276,
    "end": 7277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7277,
    "end": 7278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7279,
    "end": 7280
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 7304,
    "end": 7309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7310,
    "end": 7318
  },
  {
    "type": "Identifier",
    "value": "test40330",
    "start": 7319,
    "end": 7328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7328,
    "end": 7329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7329,
    "end": 7330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7331,
    "end": 7332
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7338,
    "end": 7343
  },
  {
    "type": "Identifier",
    "value": "promiseNumber",
    "start": 7344,
    "end": 7357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7358,
    "end": 7359
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7360,
    "end": 7367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7367,
    "end": 7368
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 7368,
    "end": 7375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7375,
    "end": 7376
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 7376,
    "end": 7377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7377,
    "end": 7378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7378,
    "end": 7379
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7384,
    "end": 7389
  },
  {
    "type": "Identifier",
    "value": "promiseVoid",
    "start": 7390,
    "end": 7401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7402,
    "end": 7403
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 7404,
    "end": 7409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7410,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7413,
    "end": 7415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7416,
    "end": 7417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7417,
    "end": 7418
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7424,
    "end": 7429
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 7430,
    "end": 7433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7434,
    "end": 7435
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 7436,
    "end": 7441
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7442,
    "end": 7449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7449,
    "end": 7450
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 7450,
    "end": 7453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7453,
    "end": 7454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7454,
    "end": 7455
  },
  {
    "type": "Identifier",
    "value": "promiseNumber",
    "start": 7464,
    "end": 7477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7477,
    "end": 7478
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7487,
    "end": 7490
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7490,
    "end": 7491
  },
  {
    "type": "Identifier",
    "value": "promiseVoid",
    "start": 7491,
    "end": 7502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7502,
    "end": 7503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7503,
    "end": 7504
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7504,
    "end": 7505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7510,
    "end": 7511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7511,
    "end": 7512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7513,
    "end": 7514
  }
]
```
