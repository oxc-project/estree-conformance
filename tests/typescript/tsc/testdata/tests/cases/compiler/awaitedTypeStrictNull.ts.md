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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Api",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2105
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 2106,
              "end": 2107
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 2110,
              "end": 2112
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2106,
            "end": 2112
          }
        ],
        "start": 2105,
        "end": 2113
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "post",
              "optional": false,
              "typeAnnotation": null,
              "start": 2191,
              "end": 2195
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2196,
                      "end": 2197
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2200,
                        "end": 2201
                      },
                      "typeArguments": null,
                      "start": 2200,
                      "end": 2201
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2196,
                    "end": 2201
                  }
                ],
                "start": 2195,
                "end": 2202
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 2214,
                          "end": 2218
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "request",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2219,
                          "end": 2226
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2214,
                        "end": 2226
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
                              "start": 2227,
                              "end": 2228
                            },
                            "typeArguments": null,
                            "start": 2227,
                            "end": 2228
                          }
                        ],
                        "start": 2226,
                        "end": 2229
                      },
                      "arguments": [],
                      "optional": false,
                      "start": 2214,
                      "end": 2231
                    },
                    "start": 2207,
                    "end": 2232
                  }
                ],
                "start": 2205,
                "end": 2234
              },
              "expression": false,
              "start": 2195,
              "end": 2234
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2185,
            "end": 2234
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "request",
              "optional": false,
              "typeAnnotation": null,
              "start": 2242,
              "end": 2249
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2251
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2250,
                    "end": 2251
                  }
                ],
                "start": 2249,
                "end": 2252
              },
              "params": [],
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
                    "start": 2256,
                    "end": 2263
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2264,
                          "end": 2265
                        },
                        "typeArguments": null,
                        "start": 2264,
                        "end": 2265
                      }
                    ],
                    "start": 2263,
                    "end": 2266
                  },
                  "start": 2256,
                  "end": 2266
                },
                "start": 2254,
                "end": 2266
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2279,
                        "end": 2284
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2275,
                      "end": 2286
                    },
                    "start": 2269,
                    "end": 2287
                  }
                ],
                "start": 2267,
                "end": 2289
              },
              "expression": false,
              "start": 2249,
              "end": 2289
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2236,
            "end": 2289
          }
        ],
        "start": 2114,
        "end": 2291
      },
      "abstract": false,
      "declare": false,
      "start": 2096,
      "end": 2291
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
            "name": "api",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Api",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2312,
                  "end": 2315
                },
                "typeArguments": null,
                "start": 2312,
                "end": 2315
              },
              "start": 2310,
              "end": 2315
            },
            "start": 2307,
            "end": 2315
          },
          "init": null,
          "definite": false,
          "start": 2307,
          "end": 2315
        }
      ],
      "declare": true,
      "start": 2293,
      "end": 2316
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2327,
        "end": 2330
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2333,
              "end": 2334
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2336,
                "end": 2342
              },
              "start": 2334,
              "end": 2342
            },
            "accessibility": null,
            "static": false,
            "start": 2333,
            "end": 2342
          }
        ],
        "start": 2331,
        "end": 2344
      },
      "declare": false,
      "start": 2317,
      "end": 2344
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2361,
        "end": 2363
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
              "start": 2364,
              "end": 2365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2364,
            "end": 2365
          }
        ],
        "start": 2363,
        "end": 2366
      },
      "params": [],
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
            "start": 2370,
            "end": 2377
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2378,
                    "end": 2379
                  },
                  "typeArguments": null,
                  "start": 2378,
                  "end": 2379
                },
                "extendsType": {
                  "type": "TSObjectKeyword",
                  "start": 2388,
                  "end": 2394
                },
                "trueType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2400,
                    "end": 2401
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
                        "start": 2411,
                        "end": 2412
                      },
                      "typeArguments": null,
                      "start": 2411,
                      "end": 2412
                    },
                    "start": 2405,
                    "end": 2412
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2415,
                      "end": 2418
                    },
                    "typeArguments": null,
                    "start": 2415,
                    "end": 2418
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 2397,
                  "end": 2420
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2423,
                    "end": 2426
                  },
                  "typeArguments": null,
                  "start": 2423,
                  "end": 2426
                },
                "start": 2378,
                "end": 2426
              }
            ],
            "start": 2377,
            "end": 2427
          },
          "start": 2370,
          "end": 2427
        },
        "start": 2368,
        "end": 2427
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "api",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2541,
                  "end": 2544
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "post",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2545,
                  "end": 2549
                },
                "optional": false,
                "computed": false,
                "start": 2541,
                "end": 2549
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2541,
              "end": 2551
            },
            "start": 2534,
            "end": 2552
          }
        ],
        "start": 2428,
        "end": 2554
      },
      "expression": false,
      "start": 2346,
      "end": 2554
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Expect",
        "optional": false,
        "typeAnnotation": null,
        "start": 2632,
        "end": 2639
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
              "start": 2640,
              "end": 2647
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TExpected",
                "optional": false,
                "typeAnnotation": null,
                "start": 2656,
                "end": 2665
              },
              "typeArguments": null,
              "start": 2656,
              "end": 2665
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2640,
            "end": 2665
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TExpected",
              "optional": false,
              "typeAnnotation": null,
              "start": 2667,
              "end": 2676
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2667,
            "end": 2676
          }
        ],
        "start": 2639,
        "end": 2677
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TActual",
          "optional": false,
          "typeAnnotation": null,
          "start": 2680,
          "end": 2687
        },
        "typeArguments": null,
        "start": 2680,
        "end": 2687
      },
      "declare": false,
      "start": 2627,
      "end": 2688
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2688
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
    "type": "Keyword",
    "value": "class",
    "start": 2096,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "Api",
    "start": 2102,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2185,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "post",
    "start": 2191,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2207,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2214,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "request",
    "start": 2219,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2236,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "request",
    "start": 2242,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2256,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 2269,
    "end": 2274
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2275,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 2279,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2293,
    "end": 2300
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2301,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "api",
    "start": 2307,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "Api",
    "start": 2312,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2317,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2327,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2336,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 2346,
    "end": 2351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2352,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2361,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2370,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2380,
    "end": 2387
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2388,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2402,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2405,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2415,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2419,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 2423,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2534,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "api",
    "start": 2541,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "post",
    "start": 2545,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2627,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "_Expect",
    "start": 2632,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "TActual",
    "start": 2640,
    "end": 2647
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2648,
    "end": 2655
  },
  {
    "type": "Identifier",
    "value": "TExpected",
    "start": 2656,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "TExpected",
    "start": 2667,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2676,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "TActual",
    "start": 2680,
    "end": 2687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2687,
    "end": 2688
  }
]
```
