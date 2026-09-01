__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 186
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 187,
          "end": 189
        },
        "declare": false,
        "start": 175,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 168,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 209
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
                "name": "cat",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 219
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 221,
                  "end": 227
                },
                "start": 219,
                "end": 227
              },
              "accessibility": null,
              "static": false,
              "start": 216,
              "end": 228
            }
          ],
          "start": 210,
          "end": 230
        },
        "declare": false,
        "start": 198,
        "end": 230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 191,
      "end": 230
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 250
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
                "start": 251,
                "end": 252
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 251,
              "end": 252
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 255
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 254,
              "end": 255
            }
          ],
          "start": 250,
          "end": 256
        },
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
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 268
              },
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
                        "start": 270,
                        "end": 271
                      },
                      "typeArguments": null,
                      "start": 270,
                      "end": 271
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 275
                      },
                      "typeArguments": null,
                      "start": 274,
                      "end": 275
                    }
                  ],
                  "start": 270,
                  "end": 275
                },
                "start": 268,
                "end": 275
              },
              "accessibility": null,
              "static": false,
              "start": 263,
              "end": 276
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optionalField",
                "optional": false,
                "typeAnnotation": null,
                "start": 281,
                "end": 294
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
                    "start": 297,
                    "end": 298
                  },
                  "typeArguments": null,
                  "start": 297,
                  "end": 298
                },
                "start": 295,
                "end": 298
              },
              "accessibility": null,
              "static": false,
              "start": 281,
              "end": 299
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "readonlyField",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 326
              },
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
                        "start": 328,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 328,
                      "end": 329
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 332,
                        "end": 333
                      },
                      "typeArguments": null,
                      "start": 332,
                      "end": 333
                    }
                  ],
                  "start": 328,
                  "end": 333
                },
                "start": 326,
                "end": 333
              },
              "accessibility": null,
              "static": false,
              "start": 304,
              "end": 334
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "readonlyOptionalField",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 369
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 373
                  },
                  "typeArguments": null,
                  "start": 372,
                  "end": 373
                },
                "start": 370,
                "end": 373
              },
              "accessibility": null,
              "static": false,
              "start": 339,
              "end": 374
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 383,
                  "end": 389
                },
                "start": 381,
                "end": 389
              },
              "start": 379,
              "end": 390
            },
            {
              "type": "TSCallSignatureDeclaration",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "typeArguments": null,
                      "start": 399,
                      "end": 400
                    },
                    "start": 397,
                    "end": 400
                  },
                  "start": 396,
                  "end": 400
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 404
                  },
                  "typeArguments": null,
                  "start": 403,
                  "end": 404
                },
                "start": 401,
                "end": 404
              },
              "start": 395,
              "end": 405
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 412
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 411,
                    "end": 412
                  }
                ],
                "start": 410,
                "end": 413
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
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 418
                      },
                      "typeArguments": null,
                      "start": 417,
                      "end": 418
                    },
                    "start": 415,
                    "end": 418
                  },
                  "start": 414,
                  "end": 418
                }
              ],
              "returnType": {
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
                        "start": 421,
                        "end": 422
                      },
                      "typeArguments": null,
                      "start": 421,
                      "end": 422
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 426
                      },
                      "typeArguments": null,
                      "start": 425,
                      "end": 426
                    }
                  ],
                  "start": 421,
                  "end": 426
                },
                "start": 419,
                "end": 426
              },
              "start": 410,
              "end": 427
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 441,
                  "end": 447
                },
                "start": 439,
                "end": 447
              },
              "start": 433,
              "end": 448
            },
            {
              "type": "TSConstructSignatureDeclaration",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 461,
                        "end": 462
                      },
                      "typeArguments": null,
                      "start": 461,
                      "end": 462
                    },
                    "start": 459,
                    "end": 462
                  },
                  "start": 458,
                  "end": 462
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 466
                  },
                  "typeArguments": null,
                  "start": 465,
                  "end": 466
                },
                "start": 463,
                "end": 466
              },
              "start": 453,
              "end": 467
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 478
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 477,
                    "end": 478
                  }
                ],
                "start": 476,
                "end": 479
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
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 484
                      },
                      "typeArguments": null,
                      "start": 483,
                      "end": 484
                    },
                    "start": 481,
                    "end": 484
                  },
                  "start": 480,
                  "end": 484
                }
              ],
              "returnType": {
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
                        "start": 487,
                        "end": 488
                      },
                      "typeArguments": null,
                      "start": 487,
                      "end": 488
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 491,
                      "end": 492
                    }
                  ],
                  "start": 487,
                  "end": 492
                },
                "start": 485,
                "end": 492
              },
              "start": 472,
              "end": 493
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 505
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 506,
                      "end": 507
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNumberKeyword",
                      "start": 510,
                      "end": 516
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 506,
                    "end": 516
                  }
                ],
                "start": 505,
                "end": 517
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 521,
                  "end": 527
                },
                "start": 519,
                "end": 527
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 499,
              "end": 528
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 539
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 541
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 540,
                    "end": 541
                  }
                ],
                "start": 539,
                "end": 542
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                            "start": 546,
                            "end": 547
                          },
                          "typeArguments": null,
                          "start": 546,
                          "end": 547
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 550,
                            "end": 551
                          },
                          "typeArguments": null,
                          "start": 550,
                          "end": 551
                        }
                      ],
                      "start": 546,
                      "end": 551
                    },
                    "start": 544,
                    "end": 551
                  },
                  "start": 543,
                  "end": 551
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 555
                      },
                      "typeArguments": null,
                      "start": 554,
                      "end": 555
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 558,
                      "end": 564
                    }
                  ],
                  "start": 554,
                  "end": 564
                },
                "start": 552,
                "end": 564
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 533,
              "end": 565
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 576
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 581,
                      "end": 587
                    },
                    "start": 579,
                    "end": 587
                  },
                  "start": 577,
                  "end": 587
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 590,
                  "end": 596
                },
                "start": 588,
                "end": 596
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 570,
              "end": 597
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 608
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                    "start": 612,
                    "end": 616
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      },
                      "start": 618,
                      "end": 623
                    },
                    "start": 616,
                    "end": 623
                  },
                  "value": null,
                  "start": 609,
                  "end": 623
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 626,
                  "end": 632
                },
                "start": 624,
                "end": 632
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 602,
              "end": 633
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 648
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 653,
                  "end": 659
                },
                "start": 651,
                "end": 659
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 639,
              "end": 660
            }
          ],
          "start": 257,
          "end": 662
        },
        "declare": false,
        "start": 239,
        "end": 662
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 232,
      "end": 662
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 675
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 676,
        "end": 678
      },
      "declare": false,
      "start": 664,
      "end": 678
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 690
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 690
          },
          "exportKind": "value",
          "start": 689,
          "end": 690
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 680,
      "end": 693
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HH",
        "optional": false,
        "typeAnnotation": null,
        "start": 705,
        "end": 707
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 708,
        "end": 710
      },
      "declare": false,
      "start": 695,
      "end": 710
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "HH",
            "optional": false,
            "typeAnnotation": null,
            "start": 721,
            "end": 723
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 727,
            "end": 728
          },
          "exportKind": "value",
          "start": 721,
          "end": 728
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 712,
      "end": 731
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 750,
          "end": 751
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 752,
          "end": 754
        },
        "declare": false,
        "start": 740,
        "end": 754
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 733,
      "end": 754
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 764,
            "end": 765
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "II",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 771
          },
          "exportKind": "value",
          "start": 764,
          "end": 771
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 755,
      "end": 774
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 786
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "JJ",
            "optional": false,
            "typeAnnotation": null,
            "start": 790,
            "end": 792
          },
          "exportKind": "value",
          "start": 785,
          "end": 792
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 776,
      "end": 795
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null,
          "start": 813,
          "end": 814
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 815,
          "end": 817
        },
        "declare": false,
        "start": 803,
        "end": 817
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 796,
      "end": 817
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 836,
          "end": 837
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 846,
              "end": 847
            },
            "typeArguments": null,
            "start": 846,
            "end": 847
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "J",
              "optional": false,
              "typeAnnotation": null,
              "start": 848,
              "end": 849
            },
            "typeArguments": null,
            "start": 848,
            "end": 849
          }
        ],
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
                "start": 856,
                "end": 857
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 859,
                  "end": 865
                },
                "start": 857,
                "end": 865
              },
              "accessibility": null,
              "static": false,
              "start": 856,
              "end": 866
            }
          ],
          "start": 850,
          "end": 868
        },
        "declare": false,
        "start": 826,
        "end": 868
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 819,
      "end": 868
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "L",
          "optional": false,
          "typeAnnotation": null,
          "start": 887,
          "end": 888
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 898
            },
            "typeArguments": null,
            "start": 897,
            "end": 898
          }
        ],
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 905,
                "end": 906
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 908,
                  "end": 914
                },
                "start": 906,
                "end": 914
              },
              "accessibility": null,
              "static": false,
              "start": 905,
              "end": 915
            }
          ],
          "start": 899,
          "end": 917
        },
        "declare": false,
        "start": 877,
        "end": 917
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 870,
      "end": 917
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 936,
          "end": 937
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
                "start": 938,
                "end": 939
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 938,
              "end": 939
            }
          ],
          "start": 937,
          "end": 940
        },
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
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 947,
                "end": 952
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
                    "start": 954,
                    "end": 955
                  },
                  "typeArguments": null,
                  "start": 954,
                  "end": 955
                },
                "start": 952,
                "end": 955
              },
              "accessibility": null,
              "static": false,
              "start": 947,
              "end": 956
            }
          ],
          "start": 941,
          "end": 958
        },
        "declare": false,
        "start": 926,
        "end": 958
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 919,
      "end": 958
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 977,
          "end": 978
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
                "start": 979,
                "end": 980
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 979,
              "end": 980
            }
          ],
          "start": 978,
          "end": 981
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 990,
              "end": 991
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
                    "start": 992,
                    "end": 993
                  },
                  "typeArguments": null,
                  "start": 992,
                  "end": 993
                }
              ],
              "start": 991,
              "end": 994
            },
            "start": 990,
            "end": 994
          }
        ],
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
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1006
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1009
                  },
                  "typeArguments": null,
                  "start": 1008,
                  "end": 1009
                },
                "start": 1006,
                "end": 1009
              },
              "accessibility": null,
              "static": false,
              "start": 1001,
              "end": 1010
            }
          ],
          "start": 995,
          "end": 1012
        },
        "declare": false,
        "start": 967,
        "end": 1012
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 960,
      "end": 1012
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 1031,
          "end": 1032
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1045,
                      "end": 1051
                    },
                    "start": 1043,
                    "end": 1051
                  },
                  "start": 1040,
                  "end": 1051
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1054,
                  "end": 1060
                },
                "start": 1052,
                "end": 1060
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1039,
              "end": 1061
            }
          ],
          "start": 1033,
          "end": 1063
        },
        "declare": false,
        "start": 1021,
        "end": 1063
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1014,
      "end": 1063
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1082,
          "end": 1083
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1092,
              "end": 1093
            },
            "typeArguments": null,
            "start": 1092,
            "end": 1093
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1094,
          "end": 1096
        },
        "declare": false,
        "start": 1072,
        "end": 1096
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1065,
      "end": 1096
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1116
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1125,
              "end": 1126
            },
            "typeArguments": null,
            "start": 1125,
            "end": 1126
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1139,
                      "end": 1145
                    },
                    "start": 1137,
                    "end": 1145
                  },
                  "start": 1134,
                  "end": 1145
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1148,
                    "end": 1152
                  },
                  "start": 1148,
                  "end": 1152
                },
                "start": 1146,
                "end": 1152
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1133,
              "end": 1153
            }
          ],
          "start": 1127,
          "end": 1155
        },
        "declare": false,
        "start": 1105,
        "end": 1155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1098,
      "end": 1155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 1174,
          "end": 1175
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
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
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1198,
                      "end": 1204
                    },
                    "start": 1196,
                    "end": 1204
                  },
                  "start": 1193,
                  "end": 1204
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1207,
                    "end": 1211
                  },
                  "start": 1207,
                  "end": 1211
                },
                "start": 1205,
                "end": 1211
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1192,
              "end": 1212
            }
          ],
          "start": 1186,
          "end": 1214
        },
        "declare": false,
        "start": 1164,
        "end": 1214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1157,
      "end": 1214
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null,
          "start": 1233,
          "end": 1234
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1243,
              "end": 1244
            },
            "typeArguments": null,
            "start": 1243,
            "end": 1244
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1257,
                      "end": 1263
                    },
                    "start": 1255,
                    "end": 1263
                  },
                  "start": 1252,
                  "end": 1263
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1266,
                    "end": 1270
                  },
                  "start": 1266,
                  "end": 1270
                },
                "start": 1264,
                "end": 1270
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1251,
              "end": 1271
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1282,
                      "end": 1288
                    },
                    "start": 1280,
                    "end": 1288
                  },
                  "start": 1277,
                  "end": 1288
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1291,
                  "end": 1296
                },
                "start": 1289,
                "end": 1296
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1276,
              "end": 1297
            }
          ],
          "start": 1245,
          "end": 1299
        },
        "declare": false,
        "start": 1223,
        "end": 1299
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1216,
      "end": 1299
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 1318,
          "end": 1319
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1332,
                      "end": 1338
                    },
                    "start": 1330,
                    "end": 1338
                  },
                  "start": 1327,
                  "end": 1338
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1341,
                  "end": 1347
                },
                "start": 1339,
                "end": 1347
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1326,
              "end": 1348
            }
          ],
          "start": 1320,
          "end": 1350
        },
        "declare": false,
        "start": 1308,
        "end": 1350
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1301,
      "end": 1350
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "U",
          "optional": false,
          "typeAnnotation": null,
          "start": 1369,
          "end": 1370
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1379,
              "end": 1380
            },
            "typeArguments": null,
            "start": 1379,
            "end": 1380
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1381,
          "end": 1383
        },
        "declare": false,
        "start": 1359,
        "end": 1383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1352,
      "end": 1383
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "V",
          "optional": false,
          "typeAnnotation": null,
          "start": 1403,
          "end": 1404
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1414
            },
            "typeArguments": null,
            "start": 1413,
            "end": 1414
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1427,
                      "end": 1433
                    },
                    "start": 1425,
                    "end": 1433
                  },
                  "start": 1422,
                  "end": 1433
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1436,
                  "end": 1442
                },
                "start": 1434,
                "end": 1442
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1421,
              "end": 1443
            }
          ],
          "start": 1415,
          "end": 1445
        },
        "declare": false,
        "start": 1393,
        "end": 1445
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1386,
      "end": 1445
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "W",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1465
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1474,
              "end": 1475
            },
            "typeArguments": null,
            "start": 1474,
            "end": 1475
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1488,
                      "end": 1494
                    },
                    "start": 1486,
                    "end": 1494
                  },
                  "start": 1483,
                  "end": 1494
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1497,
                    "end": 1501
                  },
                  "start": 1497,
                  "end": 1501
                },
                "start": 1495,
                "end": 1501
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1482,
              "end": 1502
            }
          ],
          "start": 1476,
          "end": 1504
        },
        "declare": false,
        "start": 1454,
        "end": 1504
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1447,
      "end": 1504
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 1523,
          "end": 1524
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
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
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1547,
                      "end": 1553
                    },
                    "start": 1545,
                    "end": 1553
                  },
                  "start": 1542,
                  "end": 1553
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1556,
                  "end": 1562
                },
                "start": 1554,
                "end": 1562
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1541,
              "end": 1563
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1574,
                      "end": 1580
                    },
                    "start": 1572,
                    "end": 1580
                  },
                  "start": 1569,
                  "end": 1580
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 1583,
                    "end": 1587
                  },
                  "start": 1583,
                  "end": 1587
                },
                "start": 1581,
                "end": 1587
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1568,
              "end": 1588
            }
          ],
          "start": 1535,
          "end": 1590
        },
        "declare": false,
        "start": 1513,
        "end": 1590
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1506,
      "end": 1590
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1609,
          "end": 1610
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1623,
                      "end": 1629
                    },
                    "start": 1621,
                    "end": 1629
                  },
                  "start": 1618,
                  "end": 1629
                }
              ],
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
                        "start": 1633,
                        "end": 1634
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1636,
                          "end": 1642
                        },
                        "start": 1634,
                        "end": 1642
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1633,
                      "end": 1642
                    }
                  ],
                  "start": 1632,
                  "end": 1643
                },
                "start": 1630,
                "end": 1643
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1617,
              "end": 1644
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1655,
                      "end": 1661
                    },
                    "start": 1653,
                    "end": 1661
                  },
                  "start": 1650,
                  "end": 1661
                }
              ],
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
                        "start": 1665,
                        "end": 1666
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1668,
                          "end": 1674
                        },
                        "start": 1666,
                        "end": 1674
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1665,
                      "end": 1675
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
                        "start": 1676,
                        "end": 1677
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1679,
                          "end": 1685
                        },
                        "start": 1677,
                        "end": 1685
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1676,
                      "end": 1685
                    }
                  ],
                  "start": 1664,
                  "end": 1686
                },
                "start": 1662,
                "end": 1686
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1649,
              "end": 1687
            }
          ],
          "start": 1611,
          "end": 1689
        },
        "declare": false,
        "start": 1599,
        "end": 1689
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1592,
      "end": 1689
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null,
          "start": 1708,
          "end": 1709
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1718,
              "end": 1719
            },
            "typeArguments": null,
            "start": 1718,
            "end": 1719
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1720,
          "end": 1722
        },
        "declare": false,
        "start": 1698,
        "end": 1722
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1691,
      "end": 1722
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1741,
          "end": 1743
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1752,
              "end": 1753
            },
            "typeArguments": null,
            "start": 1752,
            "end": 1753
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1766,
                      "end": 1772
                    },
                    "start": 1764,
                    "end": 1772
                  },
                  "start": 1761,
                  "end": 1772
                }
              ],
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
                        "start": 1776,
                        "end": 1777
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1779,
                          "end": 1785
                        },
                        "start": 1777,
                        "end": 1785
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1776,
                      "end": 1786
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
                        "start": 1787,
                        "end": 1788
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1790,
                          "end": 1796
                        },
                        "start": 1788,
                        "end": 1796
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1787,
                      "end": 1796
                    }
                  ],
                  "start": 1775,
                  "end": 1797
                },
                "start": 1773,
                "end": 1797
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1760,
              "end": 1798
            }
          ],
          "start": 1754,
          "end": 1800
        },
        "declare": false,
        "start": 1731,
        "end": 1800
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1724,
      "end": 1800
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1819,
          "end": 1821
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1830,
              "end": 1831
            },
            "typeArguments": null,
            "start": 1830,
            "end": 1831
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1844,
                      "end": 1850
                    },
                    "start": 1842,
                    "end": 1850
                  },
                  "start": 1839,
                  "end": 1850
                }
              ],
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
                        "start": 1854,
                        "end": 1855
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1857,
                            "end": 1858
                          },
                          "start": 1857,
                          "end": 1858
                        },
                        "start": 1855,
                        "end": 1858
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1854,
                      "end": 1859
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
                        "start": 1860,
                        "end": 1861
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1863,
                            "end": 1864
                          },
                          "start": 1863,
                          "end": 1864
                        },
                        "start": 1861,
                        "end": 1864
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1860,
                      "end": 1864
                    }
                  ],
                  "start": 1853,
                  "end": 1865
                },
                "start": 1851,
                "end": 1865
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1838,
              "end": 1866
            }
          ],
          "start": 1832,
          "end": 1868
        },
        "declare": false,
        "start": 1809,
        "end": 1868
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1802,
      "end": 1868
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CC",
          "optional": false,
          "typeAnnotation": null,
          "start": 1887,
          "end": 1889
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1898,
              "end": 1899
            },
            "typeArguments": null,
            "start": 1898,
            "end": 1899
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1912,
                      "end": 1918
                    },
                    "start": 1910,
                    "end": 1918
                  },
                  "start": 1907,
                  "end": 1918
                }
              ],
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
                        "start": 1922,
                        "end": 1923
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1925,
                          "end": 1931
                        },
                        "start": 1923,
                        "end": 1931
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1922,
                      "end": 1932
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
                        "start": 1933,
                        "end": 1934
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1936,
                          "end": 1942
                        },
                        "start": 1934,
                        "end": 1942
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1933,
                      "end": 1942
                    }
                  ],
                  "start": 1921,
                  "end": 1943
                },
                "start": 1919,
                "end": 1943
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1906,
              "end": 1944
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1955,
                      "end": 1961
                    },
                    "start": 1953,
                    "end": 1961
                  },
                  "start": 1950,
                  "end": 1961
                }
              ],
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
                        "start": 1965,
                        "end": 1966
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1968,
                            "end": 1969
                          },
                          "start": 1968,
                          "end": 1969
                        },
                        "start": 1966,
                        "end": 1969
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1965,
                      "end": 1970
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
                        "start": 1971,
                        "end": 1972
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1974,
                            "end": 1975
                          },
                          "start": 1974,
                          "end": 1975
                        },
                        "start": 1972,
                        "end": 1975
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1971,
                      "end": 1975
                    }
                  ],
                  "start": 1964,
                  "end": 1976
                },
                "start": 1962,
                "end": 1976
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 1949,
              "end": 1977
            }
          ],
          "start": 1900,
          "end": 1979
        },
        "declare": false,
        "start": 1877,
        "end": 1979
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1870,
      "end": 1979
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 168,
  "end": 1979
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 175,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 198,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "cat",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 232,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 239,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "optionalField",
    "start": 281,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "T",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 304,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "readonlyField",
    "start": 313,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 339,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "readonlyOptionalField",
    "start": 348,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 453,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
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
    "value": "T",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "Q",
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
    "value": "method",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 558,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 581,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 590,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 602,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 609,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 612,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "optMethod",
    "start": 639,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 653,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 664,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 695,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "HH",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 712,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "HH",
    "start": 721,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 724,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 733,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 740,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "I",
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
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 766,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "II",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 787,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "JJ",
    "start": 790,
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
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 796,
    "end": 802
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 803,
    "end": 812
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 819,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 826,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 838,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "J",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 859,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 870,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 877,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 889,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 908,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 919,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 926,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 947,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 960,
    "end": 966
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 967,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 980,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 982,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1001,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1014,
    "end": 1020
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1021,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1045,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1065,
    "end": 1071
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1072,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1084,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1105,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1117,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1134,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1148,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1164,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1176,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1193,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1198,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1207,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1223,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1235,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1257,
    "end": 1263
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
    "type": "String",
    "value": "\"ok\"",
    "start": 1266,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1291,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1301,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1308,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1341,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1359,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1371,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1386,
    "end": 1392
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1393,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1405,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1422,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1436,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1454,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "W",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1466,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1483,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1488,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1497,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1506,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1513,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1525,
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
    "value": "{",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1547,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1556,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1569,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1574,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 1583,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1592,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1599,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1618,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1623,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1636,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1650,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1655,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "x",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1668,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1679,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1691,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1698,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1710,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1724,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1731,
    "end": 1740
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 1741,
    "end": 1743
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1744,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1761,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1766,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1779,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1790,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1802,
    "end": 1808
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1809,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 1819,
    "end": 1821
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1822,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1844,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1870,
    "end": 1876
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1877,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 1887,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1890,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1912,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "}",
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
    "type": "Punctuator",
    "value": "[",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "idx",
    "start": 1950,
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
    "value": "number",
    "start": 1955,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Numeric",
    "value": "0",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979
  }
]
```
