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
        "name": "Same",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 19
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
              "start": 29,
              "end": 30
            },
            "typeArguments": null,
            "start": 29,
            "end": 30
          },
          "start": 23,
          "end": 30
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "typeArguments": null,
            "start": 33,
            "end": 34
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeArguments": null,
            "start": 35,
            "end": 36
          },
          "start": 33,
          "end": 37
        },
        "optional": false,
        "readonly": null,
        "start": 15,
        "end": 39
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 49
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
              "start": 50,
              "end": 51
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 66
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 78
                    },
                    "typeArguments": null,
                    "start": 67,
                    "end": 78
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 80,
                    "end": 86
                  }
                ],
                "start": 66,
                "end": 87
              },
              "start": 60,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 50,
            "end": 87
          }
        ],
        "start": 49,
        "end": 88
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 92
        },
        "typeArguments": null,
        "start": 91,
        "end": 92
      },
      "declare": false,
      "start": 42,
      "end": 93
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 101
      },
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
              "start": 102,
              "end": 103
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 118
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 119,
                      "end": 130
                    },
                    "typeArguments": null,
                    "start": 119,
                    "end": 130
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 132,
                    "end": 138
                  }
                ],
                "start": 118,
                "end": 139
              },
              "start": 112,
              "end": 139
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 102,
            "end": 139
          }
        ],
        "start": 101,
        "end": 140
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T1",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 145
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Same",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 150
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
                      "start": 151,
                      "end": 152
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 152
                  }
                ],
                "start": 150,
                "end": 153
              },
              "start": 146,
              "end": 153
            }
          ],
          "start": 145,
          "end": 154
        },
        "start": 143,
        "end": 154
      },
      "declare": false,
      "start": 94,
      "end": 155
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 187
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 199
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 214
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 226
                    },
                    "typeArguments": null,
                    "start": 215,
                    "end": 226
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 239
                    },
                    "typeArguments": null,
                    "start": 228,
                    "end": 239
                  }
                ],
                "start": 214,
                "end": 240
              },
              "start": 208,
              "end": 240
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 188,
            "end": 240
          }
        ],
        "start": 187,
        "end": 241
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IdentifierT",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 259
        },
        "typeArguments": null,
        "start": 248,
        "end": 259
      },
      "declare": false,
      "start": 179,
      "end": 261
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 271
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 283
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 298
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 310
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 310
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 323
                    },
                    "typeArguments": null,
                    "start": 312,
                    "end": 323
                  }
                ],
                "start": 298,
                "end": 324
              },
              "start": 292,
              "end": 324
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 272,
            "end": 324
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 327
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 326,
            "end": 327
          }
        ],
        "start": 271,
        "end": 328
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 347
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
              "start": 357,
              "end": 358
            },
            "typeArguments": null,
            "start": 357,
            "end": 358
          },
          "start": 351,
          "end": 358
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 362,
            "end": 365
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
                      "name": "IdentifierT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 377
                    },
                    "typeArguments": null,
                    "start": 366,
                    "end": 377
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
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 383
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 386,
                              "end": 387
                            },
                            "typeArguments": null,
                            "start": 386,
                            "end": 387
                          },
                          "start": 384,
                          "end": 387
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 382,
                        "end": 387
                      }
                    ],
                    "start": 380,
                    "end": 389
                  }
                ],
                "start": 366,
                "end": 389
              }
            ],
            "start": 365,
            "end": 390
          },
          "start": 362,
          "end": 390
        },
        "optional": false,
        "readonly": null,
        "start": 335,
        "end": 396
      },
      "declare": false,
      "start": 263,
      "end": 398
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Merge2",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 411
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
              "start": 412,
              "end": 413
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 412,
            "end": 413
          }
        ],
        "start": 411,
        "end": 414
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 421
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
              "start": 431,
              "end": 432
            },
            "typeArguments": null,
            "start": 431,
            "end": 432
          },
          "start": 425,
          "end": 432
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
            },
            "typeArguments": null,
            "start": 436,
            "end": 437
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 439
            },
            "typeArguments": null,
            "start": 438,
            "end": 439
          },
          "start": 436,
          "end": 440
        },
        "optional": false,
        "readonly": null,
        "start": 417,
        "end": 442
      },
      "declare": false,
      "start": 400,
      "end": 442
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 452
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 464
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 479
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 491
                    },
                    "typeArguments": null,
                    "start": 480,
                    "end": 491
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 504
                    },
                    "typeArguments": null,
                    "start": 493,
                    "end": 504
                  }
                ],
                "start": 479,
                "end": 505
              },
              "start": 473,
              "end": 505
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 453,
            "end": 505
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 508
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 507,
            "end": 508
          }
        ],
        "start": 452,
        "end": 509
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 527,
          "end": 528
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
              "start": 538,
              "end": 539
            },
            "typeArguments": null,
            "start": 538,
            "end": 539
          },
          "start": 532,
          "end": 539
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Merge2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 552
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
                            "name": "IdentifierT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 553,
                            "end": 564
                          },
                          "typeArguments": null,
                          "start": 553,
                          "end": 564
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 569,
                                "end": 570
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 572,
                                    "end": 573
                                  },
                                  "typeArguments": null,
                                  "start": 572,
                                  "end": 573
                                },
                                "start": 570,
                                "end": 573
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 569,
                              "end": 573
                            }
                          ],
                          "start": 567,
                          "end": 575
                        }
                      ],
                      "start": 553,
                      "end": 575
                    }
                  ],
                  "start": 552,
                  "end": 576
                },
                "start": 546,
                "end": 576
              }
            ],
            "start": 545,
            "end": 577
          },
          "start": 542,
          "end": 577
        },
        "optional": false,
        "readonly": null,
        "start": 516,
        "end": 583
      },
      "declare": false,
      "start": 443,
      "end": 585
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 592,
        "end": 600
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
              "start": 601,
              "end": 602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 601,
            "end": 602
          }
        ],
        "start": 600,
        "end": 603
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 606,
          "end": 607
        },
        "typeArguments": null,
        "start": 606,
        "end": 607
      },
      "declare": false,
      "start": 587,
      "end": 608
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Merge3",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 620
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
              "start": 621,
              "end": 622
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 621,
            "end": 622
          }
        ],
        "start": 620,
        "end": 623
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Identity",
          "optional": false,
          "typeAnnotation": null,
          "start": 626,
          "end": 634
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 639
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
                    "start": 649,
                    "end": 650
                  },
                  "typeArguments": null,
                  "start": 649,
                  "end": 650
                },
                "start": 643,
                "end": 650
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 655
                  },
                  "typeArguments": null,
                  "start": 654,
                  "end": 655
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 657
                  },
                  "typeArguments": null,
                  "start": 656,
                  "end": 657
                },
                "start": 654,
                "end": 658
              },
              "optional": false,
              "readonly": null,
              "start": 635,
              "end": 660
            }
          ],
          "start": 634,
          "end": 661
        },
        "start": 626,
        "end": 661
      },
      "declare": false,
      "start": 609,
      "end": 661
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar3",
        "optional": false,
        "typeAnnotation": null,
        "start": 667,
        "end": 671
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierT",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 683
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 698
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 710
                    },
                    "typeArguments": null,
                    "start": 699,
                    "end": 710
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 712,
                      "end": 723
                    },
                    "typeArguments": null,
                    "start": 712,
                    "end": 723
                  }
                ],
                "start": 698,
                "end": 724
              },
              "start": 692,
              "end": 724
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 672,
            "end": 724
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 727
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 726,
            "end": 727
          }
        ],
        "start": 671,
        "end": 728
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 747
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
              "start": 757,
              "end": 758
            },
            "typeArguments": null,
            "start": 757,
            "end": 758
          },
          "start": 751,
          "end": 758
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 764
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Merge3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 771
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
                            "name": "IdentifierT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 772,
                            "end": 783
                          },
                          "typeArguments": null,
                          "start": 772,
                          "end": 783
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 788,
                                "end": 789
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 791,
                                    "end": 792
                                  },
                                  "typeArguments": null,
                                  "start": 791,
                                  "end": 792
                                },
                                "start": 789,
                                "end": 792
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 788,
                              "end": 792
                            }
                          ],
                          "start": 786,
                          "end": 794
                        }
                      ],
                      "start": 772,
                      "end": 794
                    }
                  ],
                  "start": 771,
                  "end": 795
                },
                "start": 765,
                "end": 795
              }
            ],
            "start": 764,
            "end": 796
          },
          "start": 761,
          "end": 796
        },
        "optional": false,
        "readonly": null,
        "start": 735,
        "end": 802
      },
      "declare": false,
      "start": 662,
      "end": 804
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 804
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
    "value": "Same",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 20,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 23,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 42,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 52,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 67,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "T",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 94,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 104,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 112,
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
    "value": "PropertyKey",
    "start": 119,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Same",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 179,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 188,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 200,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 215,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 228,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 248,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 263,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 272,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 284,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 299,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 312,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 346,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 348,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 351,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 366,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 400,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Merge2",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 422,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 425,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 443,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "Bar2",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 453,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 465,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 480,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 493,
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
    "value": ",",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 529,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 532,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 542,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Merge2",
    "start": 546,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 553,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
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
    "start": 587,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 592,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 609,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "Merge3",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 626,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 640,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 643,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "Bar3",
    "start": 667,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 672,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 684,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 692,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 699,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 712,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 748,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 751,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "Merge3",
    "start": 765,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "IdentifierT",
    "start": 772,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  }
]
```
